import SectionHeading from '../components/SectionHeading';

export default function AboutPage() {
  return (
    <section className="bg-white/[0.02] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6">
          <div className="flex h-full min-h-[340px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-neutral-950 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About TierIV</p>
              <h2 className="mt-4 text-3xl font-semibold">A technical partner focused on systems that hold up in the real world.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-neutral-400">Approach</p>
                <p className="mt-2 font-medium text-white">Reliable, usable, supportable</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-neutral-400">Focus</p>
                <p className="mt-2 font-medium text-white">Modern AV environments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Founder Story"
            title="Make the business feel personal, capable, and credible."
            description="TierIV is built for organizations that need more than a generic installer. Use this page to highlight your background, the systems you have supported, and the type of clients you serve best."
          />
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Whether the project involves meeting room upgrades, event space workflows, hybrid presentation systems, or troubleshooting aging infrastructure, the focus stays the same: build around reliability, operational clarity, and long-term value.
          </p>
        </div>
      </div>
    </section>
  );
}
