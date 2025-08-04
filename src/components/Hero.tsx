import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import jacketHero from "@/assets/jacket-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={jacketHero} 
          alt="Designer Fashion" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Curated
            <span className="block text-luxury-gold animate-float">Designer</span>
            Fashion
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Authentic luxury pieces, carefully selected and authenticated. 
            Discover unique designer finds at unmatched prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="luxury" size="lg" asChild>
              <a href="#featured">Shop Collection</a>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <a href="https://grailed.com/zerousw" target="_blank" rel="noopener noreferrer">
                View on Grailed
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-luxury-gold animate-bounce">
              <a href="#featured">
                <ArrowDown className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;