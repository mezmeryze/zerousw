import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  condition: string;
  size: string;
  available: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-gray-200">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant={product.available ? "default" : "secondary"}>
              {product.available ? "Available" : "Sold"}
            </Badge>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-600 hover:text-primary transition-colors"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-primary text-lg leading-tight">{product.name}</h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-muted-foreground">Size: {product.size}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{product.condition}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
              )}
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;