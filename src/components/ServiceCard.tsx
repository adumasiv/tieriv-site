type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
        <div className="h-2 w-2 rounded-full bg-cyan-300" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-neutral-300">{description}</p>
      <div className="mt-6 text-sm font-medium text-cyan-300">Learn more →</div>
    </article>
  );
}
