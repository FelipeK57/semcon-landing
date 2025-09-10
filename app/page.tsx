import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
// Supports weights 200-900
import '@fontsource-variable/mulish';
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}