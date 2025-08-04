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
    <section id="featured" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-8 tracking-tight">
            Collection
          </h2>
          <p className="text-lg text-gray-500 max-w-md mx-auto font-light leading-relaxed">
            Handpicked designer pieces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
        
        <div className="text-center mt-24">
          <p className="text-gray-500 mb-8 font-light">
            View complete collection
          </p>
          <div className="flex justify-center">
            <a 
              href="https://grailed.com/zerousw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-primary text-primary-foreground hover:bg-gray-800 px-8 py-3 rounded text-sm font-medium transition-colors">
                View on Grailed
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;