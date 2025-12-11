import { useState } from "react";
import { X } from "lucide-react";
import training from "@/assets/training.jpeg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: training, alt: "one on one training" },
  { src: gallery2, alt: "Heavy bags training area" },
  { src: gallery3, alt: "Vintage boxing gloves" },
  { src: gallery4, alt: "Sparring session in progress" },
  { src: gallery5, alt: "Speed bag equipment" },
  { src: gallery6, alt: "Jump rope conditioning" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-card-dark text-card-dark-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-4">Gallery</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Take a look inside our authentic old school boxing facility
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-lg border-2 border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
