import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `transition hover:text-white ${isActive ? "text-white" : "text-neutral-300"}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/images/Tier-IV-Website-Logo-MK1.png"
            alt="Tier IV Logo"
            className="h-12 w-18 object-contain"
          />
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-white">
              TIERIV.TECH
            </p>
            <p className="text-xs text-neutral-400">
              AV Consulting & Systems Strategy
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavLink to="/services" className={linkClasses}>
            Services
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </nav>

        <NavLink
          to="/contact"
          className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
        >
          Schedule Consultation
        </NavLink>
      </div>
    </header>
  );
}
