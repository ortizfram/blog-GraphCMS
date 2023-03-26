import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
        <Navbar />
        <div>
          {/* HOMEpAGE */}
          <Hero />
          <About />
        </div>
      </main>{" "}
    </>
  );
}
