import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-wider">
          Old School Gym<br />Boxing Club
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium font-inter">
          Authentic boxing training in a no-nonsense old school gym.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bebas uppercase tracking-wider px-8 py-6 text-xl transition-all"
          >
            Book a Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("classes")}
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bebas uppercase tracking-wider px-8 py-6 text-xl transition-all"
          >
            View Class Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
