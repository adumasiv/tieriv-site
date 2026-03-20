import type { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
