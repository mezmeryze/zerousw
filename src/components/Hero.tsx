import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      {/* Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-light text-primary mb-12 tracking-tight leading-none">
            ZEROUSW
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-16 max-w-md mx-auto font-light leading-relaxed">
            Curated designer fashion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button variant="minimal" size="lg" asChild>
              <a href="#featured" className="px-8 py-3 text-sm font-medium">View Collection</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://grailed.com/zerousw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary px-8 py-3 text-sm font-medium">
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