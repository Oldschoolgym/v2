import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    name: "Coach Marcus Stone",
    image: coach1,
    bio: "With over 20 years of professional boxing experience and 15 years as a trainer, Marcus brings old school discipline and modern techniques to every session. Former regional champion with a focus on fundamentals and conditioning.",
  },
  {
    name: "Coach Sarah 'The Hurricane' Martinez",
    image: coach2,
    bio: "A former national champion and certified fitness instructor, Sarah specializes in technique refinement and building explosive power. Her high-energy classes push athletes to discover their true potential.",
  },
  {
    name: "Coach Tommy 'Iron' Williams",
    image: coach3,
    bio: "A boxing legend with 30+ years in the sport as both fighter and trainer. Tommy has coached multiple champions and brings unparalleled ring wisdom. His expertise in strategy and mental toughness is second to none.",
  },
];

const Coaches = () => {
  return (
    <section id="coaches" className="py-20 bg-card-dark text-card-dark-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Our Coaches</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Learn from experienced professionals who have dedicated their lives to the sweet science
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-lg border-2 border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-foreground">{coach.name}</h3>
                <p className="text-base leading-relaxed text-foreground">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
