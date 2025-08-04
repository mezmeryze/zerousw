import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, Truck, RefreshCw } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-luxury-gold" />,
      title: "Authenticated Items",
      description: "Every piece is carefully verified for authenticity and quality before listing."
    },
    {
      icon: <Star className="h-8 w-8 text-luxury-gold" />,
      title: "Curated Selection",
      description: "Handpicked designer pieces from luxury brands and high-end streetwear."
    },
    {
      icon: <Truck className="h-8 w-8 text-luxury-gold" />,
      title: "Fast Shipping",
      description: "Quick and secure shipping with tracking information provided."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-luxury-gold" />,
      title: "Return Policy",
      description: "Hassle-free returns within 7 days if item doesn't match description."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About ZEROUSW
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Welcome to my curated collection of authentic designer fashion. 
              I specialize in sourcing and reselling premium pieces from luxury brands, 
              streetwear, and unique vintage finds.
            </p>
          </div>
          
          <div className="mb-16">
            <Card className="bg-gradient-card border-elegant-border shadow-elegant">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Follow My Journey</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with me on social media to see the latest finds, styling tips, 
                    and behind-the-scenes content from the world of luxury fashion resale.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="text-base py-2 px-4 border-luxury-gold text-luxury-gold">
                      @shouldbezerousw on Instagram
                    </Badge>
                    <Badge variant="outline" className="text-base py-2 px-4 border-luxury-gold text-luxury-gold">
                      @zerousw on Grailed
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-elegant-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-luxury-gold/10 rounded-lg group-hover:bg-luxury-gold/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;