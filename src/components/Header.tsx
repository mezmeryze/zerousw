import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X, ExternalLink } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-medium text-primary tracking-wide">
              ZEROUSW
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#featured" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
              Collection
            </a>
            <a href="#about" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://instagram.com/shouldbezerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
              >
                Instagram
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://grailed.com/zerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
              >
                Grailed
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#featured"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com/shouldbezerousw" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://grailed.com/zerousw" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Grailed
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;