import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { Scene } from "@/components/ui/scene";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
        
        <footer className="py-12 text-center text-foreground/40 border-t border-glass-border">
          <div className="container mx-auto px-6">
            <p>© 2026 Lumina Studio. Built with passion for excellence.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
