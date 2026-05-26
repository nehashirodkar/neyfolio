import { supabaseServer } from "../supabase/server";
import { embed } from "./embed";

export type Match = {
  id: number;
  content: string;
  source: string;
  metadata: Record<string, unknown>;
  similarity: number;
};

/**
 * Retrieve the most semantically similar documents to a query.
 */
export async function retrieve(
  query: string,
  opts: { matchThreshold?: number; matchCount?: number } = {}
): Promise<Match[]> {
  const queryEmbedding = await embed(query);

  const { data, error } = await supabaseServer.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: opts.matchThreshold ?? 0.3,
    match_count: opts.matchCount ?? 8,
  });

  if (error) throw error;
  return (data ?? []) as Match[];
}
