import { Instagram, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Find Your Next Statement Piece?
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Browse my collection on Grailed or follow me on Instagram for daily updates 
            on new arrivals and styling inspiration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Instagram className="h-8 w-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/shouldbezerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-luxury-gold transition-colors"
              >
                @shouldbezerousw
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <ExternalLink className="h-8 w-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grailed</h3>
              <a 
                href="https://grailed.com/zerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-luxury-gold transition-colors"
              >
                @zerousw
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-gray-300">
                DM me for inquiries
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2024 ZEROUSW. All rights reserved.</p>
              <p className="mt-2 md:mt-0">Authentic designer fashion, curated with care.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;