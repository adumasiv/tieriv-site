import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { industries, processSteps, projects, services, stats } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-300">
              Reliable AV for complex spaces
            </div>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              AV systems design, integration, and consulting that works when it matters.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
              TierIV helps organizations plan, improve, and support audio visual systems for meeting rooms, event spaces,
              churches, and mission-critical environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90">
                Book a Consultation
              </Link>
              <Link to="/services" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                View Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {['Systems Design', 'Installation Planning', 'Troubleshooting & Optimization'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-neutral-200 shadow-2xl shadow-black/20">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 shadow-glow">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">System overview</p>
                    <h2 className="mt-2 text-2xl font-semibold">Signal path designed for reliability</h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Operational
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Inputs</p>
                    <div className="mt-4 space-y-3">
                      {['Laptop HDMI', 'Wireless Presentation', 'Camera Feed', 'Streaming Source'].map((input) => (
                        <div key={input} className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-neutral-200">
                          {input}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Outputs</p>
                    <div className="mt-4 space-y-3">
                      {['Main Display', 'Confidence Monitor', 'Audio DSP / Amplification', 'Recording / Overflow'].map((output) => (
                        <div key={output} className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-100">
                          {output}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-neutral-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-300">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Consulting built around real-world AV needs."
          description="From new projects to troubled systems, TierIV delivers practical AV guidance with a focus on reliability, maintainability, and user experience."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies that show how TierIV approaches problems."
            description="Showcase the challenge, the technical approach, and the outcome so potential clients understand how you think."
          />
          <div className="mt-12 grid gap-8 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Process"
            title="A clear consulting process from discovery to support."
            description="Clients need confidence that technical decisions are thoughtful, documented, and aligned with how the room will actually be used."
          />
          <div className="space-y-5">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="text-sm font-semibold tracking-[0.3em] text-cyan-300">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
