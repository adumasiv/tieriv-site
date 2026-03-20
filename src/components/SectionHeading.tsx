type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-neutral-300">{description}</p> : null}
    </div>
  );
}
