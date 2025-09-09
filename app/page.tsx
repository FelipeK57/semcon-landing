import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
// Supports weights 200-900
import '@fontsource-variable/mulish';
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  )
}