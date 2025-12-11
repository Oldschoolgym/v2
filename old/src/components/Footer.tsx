const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card-dark text-card-dark-foreground py-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-bebas text-xl tracking-wider">© 2024 Old School Gym Boxing Club</p>
            <p className="text-sm opacity-90">All rights reserved</p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="font-bebas uppercase tracking-wider hover:text-accent transition-colors text-lg"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
