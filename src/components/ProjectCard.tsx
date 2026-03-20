type Props = {
  title: string;
  type: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export default function ProjectCard({ title, type, challenge, solution, outcome }: Props) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-2xl shadow-black/20">
      <div className="h-44 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(255,255,255,0.03)),linear-gradient(180deg,#171717,#0a0a0a)] p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{type}</p>
        <h3 className="mt-4 max-w-sm text-2xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-semibold text-white">Challenge</p>
          <p className="mt-2 text-sm leading-7 text-neutral-300">{challenge}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Solution</p>
          <p className="mt-2 text-sm leading-7 text-neutral-300">{solution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Outcome</p>
          <p className="mt-2 text-sm leading-7 text-neutral-300">{outcome}</p>
        </div>
      </div>
    </article>
  );
}
