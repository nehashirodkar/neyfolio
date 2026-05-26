/* Skill logos grouped into three categories: AI/ML, Data, Software.
   Mixed sources for best appearance on dark space:
   - devicon for mainstream tech (multi-color SVGs)
   - Simple Icons with explicit hex overrides for brands whose native color
     would disappear against dark navy. */

import FadeUp from "@/components/FadeUp";

type LogoSkill = {
  name: string;
  src: string;
  /** Apply brightness-0 invert filter — used for Lobehub icons which are
   *  fill="currentColor" SVGs that render as black inside <img> tags. */
  invert?: boolean;
  /** If set, render the SVG as a CSS mask over a div filled with this color.
   *  Lets us colorize monochrome brand SVGs that don't exist as multi-color
   *  on any CDN (LangChain, LlamaIndex). */
  tint?: string;
};

const DEVICON = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
const SI      = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const SI_HEX  = (slug: string, hex: string) => `https://cdn.simpleicons.org/${slug}/${hex}`;
// Lobehub serves AI brand SVGs with fill="currentColor" (monochrome).
const LOBE    = (name: string) => `https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg/icons/${name}.svg`;
// Iconify "logos" set has true multi-color brand icons (Hugging Face = yellow face).
const ICONIFY = (set: string, name: string) => `https://api.iconify.design/${set}:${name}.svg`;

const AI_ML: LogoSkill[] = [
  // OpenAI + Anthropic: monochrome white silhouettes (you said these look fine).
  { name: "OpenAI",       src: LOBE("openai"),      invert: true },
  { name: "Anthropic",    src: LOBE("anthropic"),   invert: true },
  // LangChain: no color CDN exists anywhere. Mask the silhouette with their
  // brand teal so it shows up coloured rather than just white.
  { name: "LangChain",    src: LOBE("langchain"),   tint: "#10b981" },  // emerald
  // Hugging Face: Iconify's "logos" set actually has the iconic yellow face.
  { name: "Hugging Face", src: ICONIFY("logos", "hugging-face-icon") },
  // LlamaIndex: same situation as LangChain — mask with a warm orange.
  { name: "LlamaIndex",   src: LOBE("llamaindex"),  tint: "#f97316" },  // orange-500
  { name: "PyTorch",      src: DEVICON("pytorch/pytorch-original") },
  { name: "scikit-learn", src: DEVICON("scikitlearn/scikitlearn-original") },
  { name: "MLflow",       src: SI("mlflow") },        // default blue
  { name: "Streamlit",    src: DEVICON("streamlit/streamlit-original") },
];

const DATA: LogoSkill[] = [
  { name: "Pandas",      src: DEVICON("pandas/pandas-original") },
  { name: "NumPy",       src: DEVICON("numpy/numpy-original") },
  { name: "PostgreSQL",  src: DEVICON("postgresql/postgresql-original") },
  { name: "MySQL",       src: DEVICON("mysql/mysql-original") },
  { name: "MongoDB",     src: DEVICON("mongodb/mongodb-original") },
  { name: "Redis",       src: DEVICON("redis/redis-original") },
  { name: "Kafka",       src: SI_HEX("apachekafka", "ffffff") },
  { name: "GraphQL",     src: DEVICON("graphql/graphql-plain") },
];

const SOFTWARE: LogoSkill[] = [
  { name: "Python",         src: DEVICON("python/python-original") },
  { name: "TypeScript",     src: DEVICON("typescript/typescript-original") },
  { name: "Java",           src: DEVICON("java/java-original") },
  { name: "FastAPI",        src: DEVICON("fastapi/fastapi-original") },
  { name: "Django",         src: SI_HEX("django", "44b883") },
  { name: "Spring Boot",    src: DEVICON("spring/spring-original") },
  { name: "AWS",            src: ICONIFY("logos", "aws") },  // SI 404s on this slug
  { name: "Docker",         src: DEVICON("docker/docker-original") },
  { name: "Kubernetes",     src: DEVICON("kubernetes/kubernetes-original") },
  { name: "Jenkins",        src: DEVICON("jenkins/jenkins-original") },
  { name: "GitHub Actions", src: SI_HEX("githubactions", "ffffff") },
  { name: "Git",            src: DEVICON("git/git-original") },
  { name: "Postman",        src: SI("postman") },
];

function Logo({ s }: { s: LogoSkill }) {
  const sharedIconClass =
    "w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] group-hover:scale-110 group-hover:drop-shadow-[0_0_28px_rgba(34,211,238,0.6)] transition-transform duration-200";

  return (
    <div className="group flex flex-col items-center justify-start gap-3 w-24 sm:w-28 shrink-0">
      {s.tint ? (
        // Mask rendering: a div filled with the tint color, with the SVG used
        // as a mask. Shows the colored fill through the SVG's solid shape.
        <div
          aria-label={s.name}
          className={sharedIconClass}
          style={{
            backgroundColor: s.tint,
            WebkitMaskImage: `url("${s.src}")`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url("${s.src}")`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.src}
          alt={s.name}
          className={`${sharedIconClass} ${s.invert ? "brightness-0 invert" : ""}`}
          loading="lazy"
        />
      )}
      <span className="text-sm font-medium text-slate-200 text-center leading-tight">
        {s.name}
      </span>
    </div>
  );
}

function CategoryGroup({
  label,
  blurb,
  skills,
  offset = false,
}: {
  label: string;
  blurb: string;
  skills: LogoSkill[];
  offset?: boolean;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-cyan-200 flex items-center gap-3">
          <span>{label}</span>
          <span className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </h3>
        <p className="text-sm text-slate-400 italic">{blurb}</p>
      </div>
      <div className={`flex flex-wrap justify-center gap-x-6 gap-y-10 sm:gap-x-10 ${offset ? "sm:translate-x-8" : ""}`}>
        {skills.map((s) => (
          <Logo key={s.name} s={s} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-14 relative z-10"
    >
      <FadeUp>
        <header className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Skills
          </h2>
          <p className="text-base italic text-cyan-300/80">
            currently heavy on agentic AI — but I&apos;ve been doing backend long enough that the rest comes naturally
          </p>
        </header>
      </FadeUp>

      <FadeUp delay={100}>
        <CategoryGroup
          label="AI / ML"
          blurb="where I spend most of my time"
          skills={AI_ML}
        />
      </FadeUp>
      <FadeUp delay={150}>
        <CategoryGroup
          label="Data"
          blurb="storing it, moving it, querying it"
          skills={DATA}
          offset
        />
      </FadeUp>
      <FadeUp delay={200}>
        <CategoryGroup
          label="Software & Cloud"
          blurb="the broader stack — what holds everything together"
          skills={SOFTWARE}
        />
      </FadeUp>
    </section>
  );
}
