import { Shield, Star, Truck, RefreshCw } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Authenticated",
      description: "Every piece verified for authenticity and quality."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Curated",
      description: "Handpicked designer pieces from luxury brands."
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Fast Shipping",
      description: "Quick and secure shipping with tracking."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      title: "Returns",
      description: "7-day return policy for peace of mind."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              Curated collection of authentic designer fashion and streetwear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span>@shouldbezerousw</span>
              <span>@zerousw</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;