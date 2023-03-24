import About from "@/components/About";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div>
          {/* HOMEpAGE */}
          <Hero />
          <About />
          <Projects />
          <Latest />
        </div>
      </main>{" "}
    </>
  );
}
