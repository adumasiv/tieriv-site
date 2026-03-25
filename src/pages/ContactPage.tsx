import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  details: string;
  company: string; // honeypot
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "General Consulting",
  details: "",
  company: "",
};

export default function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as
    | string
    | undefined;

  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const isConfigured = useMemo(() => Boolean(endpoint), [endpoint]);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const trackLead = () => {
    const win = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    if (typeof win.gtag === "function") {
      win.gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: form.projectType,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!endpoint) {
      setStatus("error");
      setMessage("Form endpoint is not configured yet.");
      return;
    }

    if (form.company.trim()) {
      setStatus("success");
      setMessage("Thanks — your message was sent.");
      resetForm();
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          details: form.details,
        }),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      trackLead();
      setStatus("success");
      setMessage(
        "Thanks — your inquiry has been sent. We’ll get back to you soon.",
      );
      resetForm();
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong sending your message. Please email info@tieriv.tech.",
      );
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/[0.04] to-neutral-900 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Let’s talk
          </p>
          <h1 className="mt-4 max-w-xl text-3xl font-semibold md:text-4xl">
            Planning an AV upgrade or trying to solve a system issue?
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-300">
            Share a few details about your space, current setup, and what kind
            of help you need.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-sm text-neutral-400">Email</p>
              <p className="mt-2 font-medium text-white">info@tieriv.tech</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-5">
              <p className="text-sm text-neutral-400">Typical Projects</p>
              <p className="mt-2 font-medium text-white">
                Meeting rooms, event spaces, churches, AV upgrades
              </p>
            </div>
          </div>

          {!isConfigured && (
            <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-sm text-yellow-100">
              Add <code>VITE_FORMSPREE_ENDPOINT</code> to your <code>.env</code>{" "}
              file to activate submissions.
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-neutral-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-neutral-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm text-neutral-300"
              >
                Project Type
              </label>
              <select
                id="projectType"
                value={form.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white focus:border-cyan-400/40 focus:outline-none"
              >
                <option>General Consulting</option>
                <option>Meeting Room Upgrade</option>
                <option>Event Space AV</option>
                <option>Church / Worship AV</option>
                <option>Troubleshooting</option>
                <option>System Design</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-2 block text-sm text-neutral-300"
              >
                Project Details
              </label>
              <textarea
                id="details"
                rows={6}
                required
                value={form.details}
                onChange={(e) => updateField("details", e.target.value)}
                placeholder="Tell me about the space, current challenges, timeline, and what you need help with."
                className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder:text-neutral-500 focus:border-cyan-400/40 focus:outline-none"
              />
            </div>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
              className="hidden"
              aria-hidden="true"
            />

            {message && (
              <div
                className={`rounded-2xl p-4 text-sm ${
                  status === "success"
                    ? "border border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                    : "border border-red-400/25 bg-red-400/10 text-red-100"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
