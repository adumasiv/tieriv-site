import SectionHeading from '../components/SectionHeading';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/[0.04] to-neutral-900 p-8">
          <SectionHeading
            eyebrow="Let's Talk"
            title="Planning an AV upgrade or trying to solve a system issue?"
            description="This starter uses a static form layout. For GitHub Pages, connect it to Formspree, Basin, Getform, or a serverless endpoint."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-sm text-neutral-400">Email</p>
              <p className="mt-2 font-medium text-white">hello@tieriv.tech</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-sm text-neutral-400">Website</p>
              <p className="mt-2 font-medium text-white">tieriv.tech</p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-neutral-300">Name</label>
              <input id="name" type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-neutral-300">Email</label>
              <input id="email" type="email" placeholder="you@company.com" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="projectType" className="mb-2 block text-sm text-neutral-300">Project Type</label>
              <select id="projectType" className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white focus:border-cyan-400/40 focus:outline-none">
                <option>Meeting Room Upgrade</option>
                <option>Event Space AV</option>
                <option>Church / Worship AV</option>
                <option>Troubleshooting</option>
                <option>General Consulting</option>
              </select>
            </div>
            <div>
              <label htmlFor="details" className="mb-2 block text-sm text-neutral-300">Project Details</label>
              <textarea id="details" rows={5} placeholder="Tell me about the space, current challenges, and what you need help with." className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none" />
            </div>
            <button type="button" className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
