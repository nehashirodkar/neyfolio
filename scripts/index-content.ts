/**
 * Indexing script — embeds content and upserts it into the `documents` table.
 *
 * Run with:
 *   npm run index
 *
 * For each unique `source`, this script deletes existing rows and re-inserts
 * fresh embeddings. Safe to run repeatedly as content changes.
 */

import { supabaseServer } from "../lib/supabase/server";
import { embedBatch } from "../lib/rag/embed";
import { seedDocs } from "../content/seed";
import { resumeDocs } from "../content/resume";

async function main() {
  const docs = [...seedDocs, ...resumeDocs];
  console.log(`Indexing ${docs.length} document(s)...`);

  // Clear existing rows for these sources so re-runs are idempotent.
  const sources = Array.from(new Set(docs.map((d) => d.source)));
  const { error: deleteError } = await supabaseServer
    .from("documents")
    .delete()
    .in("source", sources);
  if (deleteError) throw deleteError;
  console.log(`  Cleared existing rows for ${sources.length} source(s).`);

  // Embed in one batch (cheap and fast for small corpora).
  const embeddings = await embedBatch(docs.map((d) => d.content));
  console.log(`  Embedded ${embeddings.length} chunk(s) via OpenAI.`);

  // Insert.
  const rows = docs.map((d, i) => ({
    content: d.content,
    embedding: embeddings[i],
    source: d.source,
    metadata: d.metadata ?? {},
  }));
  const { error: insertError } = await supabaseServer
    .from("documents")
    .insert(rows);
  if (insertError) throw insertError;

  console.log(`Indexed ${rows.length} document(s) successfully.`);
}

main().catch((err) => {
  console.error("Indexing failed:", err);
  process.exit(1);
});
