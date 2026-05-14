import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import LeadershipCerts from "@/components/LeadershipCerts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c12] text-[#f1f5f9]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Impact />
      <Experience />
      <Projects />
      <LeadershipCerts />
      <Contact />
    </main>
  );
}
