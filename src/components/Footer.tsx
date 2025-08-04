import { Instagram, ExternalLink, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
            Contact
          </h2>
          
          <p className="text-lg text-gray-300 mb-16 max-w-md mx-auto font-light leading-relaxed">
            Browse collection or follow for updates
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="text-center">
              <h3 className="text-base font-medium mb-4">Instagram</h3>
              <a 
                href="https://instagram.com/shouldbezerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light"
              >
                @shouldbezerousw
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-base font-medium mb-4">Grailed</h3>
              <a 
                href="https://grailed.com/zerousw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm font-light"
              >
                @zerousw
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
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