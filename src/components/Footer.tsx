import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-white">TIERIV.TECH</p>
          <p className="mt-2 text-sm text-neutral-400">AV Consulting, Systems Design, and Technical Support</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
          <NavLink to="/services" className="transition hover:text-white">Services</NavLink>
          <NavLink to="/projects" className="transition hover:text-white">Projects</NavLink>
          <NavLink to="/about" className="transition hover:text-white">About</NavLink>
          <NavLink to="/contact" className="transition hover:text-white">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
}
