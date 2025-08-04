import { Instagram, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Contact
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Browse collection on Grailed or follow on Instagram
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Instagram className="h-6 w-6 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Instagram</h3>
              <a 
                href="https://instagram.com/shouldbezerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                @shouldbezerousw
              </a>
            </div>
            
            <div className="flex flex-col items-center">
              <ExternalLink className="h-6 w-6 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Grailed</h3>
              <a 
                href="https://grailed.com/zerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                @zerousw
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>© 2024 ZEROUSW</p>
              <p className="mt-2 md:mt-0">Authentic designer fashion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;