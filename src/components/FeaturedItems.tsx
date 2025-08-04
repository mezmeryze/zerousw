import ProductCard from "./ProductCard";
import sneakersImg from "@/assets/sneakers-1.jpg";
import handbagImg from "@/assets/handbag-1.jpg";
import watchImg from "@/assets/watch-1.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Designer High-Top Sneakers",
    brand: "Luxury Brand",
    price: "$450",
    originalPrice: "$850",
    image: sneakersImg,
    condition: "Excellent",
    size: "US 10",
    available: true,
  },
  {
    id: "2", 
    name: "Premium Leather Handbag",
    brand: "Designer House",
    price: "$680",
    originalPrice: "$1,200",
    image: handbagImg,
    condition: "Very Good",
    size: "Medium",
    available: true,
  },
  {
    id: "3",
    name: "Luxury Timepiece",
    brand: "Swiss Made",
    price: "$2,100",
    originalPrice: "$3,500",
    image: watchImg,
    condition: "Like New",
    size: "42mm",
    available: false,
  },
];

const FeaturedItems = () => {
  return (
    <section id="featured" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked designer pieces from the world's most coveted brands. 
            Each item is authenticated and carefully inspected for quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my full collection on Grailed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://grailed.com/zerousw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-semibold transition-colors">
                View Full Collection on Grailed
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;