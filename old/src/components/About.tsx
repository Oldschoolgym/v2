import { Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-12">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Step into Old School Gym Boxing Club and experience authentic boxing training the way it was meant to be. Our no-nonsense approach focuses on fundamental techniques, rigorous conditioning, and building a strong community of dedicated fighters.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking to compete in the ring or simply want to get in the best shape of your life, our experienced coaches will guide you every step of the way. We believe in hard work, discipline, and respect – the cornerstones of the sweet science.
            </p>
            <p className="text-lg leading-relaxed">
              From complete beginners to seasoned fighters, everyone is welcome at Old School Gym. We maintain a supportive yet challenging environment where you'll push your limits and discover what you're truly capable of achieving.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-lg border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Opening Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-bold">Monday – Friday</span>
                <span className="text-lg">6:00 – 22:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-bold">Saturday</span>
                <span className="text-lg">8:00 – 18:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="font-bold">Sunday</span>
                <span className="text-lg">10:00 – 16:00</span>
              </div>
              <p className="text-sm mt-4 text-muted-foreground italic">
                Weekend sessions include open gym and specialty workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
