import Download from "./Download";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}
