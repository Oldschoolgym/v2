import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Coaches from "@/components/Coaches";
import Classes from "@/components/Classes";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Coaches />
        <Classes />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
