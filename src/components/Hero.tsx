import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-8 tracking-tight">
            ZEROUSW
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Curated designer fashion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="outline-minimal" size="lg" asChild>
              <a href="#featured">View Collection</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://grailed.com/zerousw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Grailed Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;