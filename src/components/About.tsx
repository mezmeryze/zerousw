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
    <section id="about" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 animate-slide-up text-center">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-8 tracking-tight">
            About
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed font-light max-w-lg mx-auto">
            Curated collection of authentic designer fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-base font-medium text-primary mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-12 text-sm text-gray-400 font-light">
            <span>@shouldbezerousw</span>
            <span>@zerousw</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
