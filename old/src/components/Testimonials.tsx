import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Old School Gym transformed not just my fitness but my entire mindset. The coaches here really care about your progress and push you to be your best. Best decision I ever made.",
    name: "Mike Rodriguez",
    detail: "Member since 2022",
  },
  {
    quote: "I walked in as a complete beginner and the team made me feel welcome from day one. Three months in and I'm in the best shape of my life. The old school approach really works.",
    name: "Jessica Chen",
    detail: "Fitness Boxing Class",
  },
  {
    quote: "After training at multiple gyms, Old School is where I finally found my home. Real boxing, real coaches, real results. No fancy gimmicks, just hard work and dedication.",
    name: "David Thompson",
    detail: "Competition Team",
  },
  {
    quote: "The community here is incredible. Everyone supports each other regardless of skill level. Coach Tommy's wisdom and experience are invaluable. This gym is the real deal.",
    name: "Amanda Foster",
    detail: "Member since 2021",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">What Our Members Say</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Real stories from our boxing community
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg shadow-lg border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 mb-4 text-accent" />
              <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-lg">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
