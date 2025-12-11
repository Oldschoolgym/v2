import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-card-dark text-card-dark-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Get in Touch</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Ready to start your boxing journey? Contact us today
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-background text-foreground p-8 rounded-lg shadow-lg border-2 border-border">
            <h3 className="text-2xl mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-background ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-background ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`bg-background resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold uppercase tracking-wider"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Gym Info */}
          <div className="space-y-8">
            <div className="bg-background text-foreground p-8 rounded-lg shadow-lg border-2 border-border">
              <h3 className="text-2xl mb-6">Gym Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Address</div>
                    <div className="text-muted-foreground">
                      123 Fighting Street<br />
                      Downtown District<br />
                      City, State 12345
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">info@oldschoolgym.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-background rounded-lg shadow-lg border-2 border-border overflow-hidden h-64">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground font-medium">Map will be embedded here</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-background text-foreground p-8 rounded-lg shadow-lg border-2 border-border">
              <h3 className="text-xl mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="font-medium">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
