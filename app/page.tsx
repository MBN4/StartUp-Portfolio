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
      
      <div className="relative z-10">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Projects />
        <Team />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
