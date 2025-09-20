import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Building, Facebook, Twitter, Instagram } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-8 w-8 text-accent" />
                <span className="text-xl font-bold">RealEstate</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Your trusted partner in finding the perfect property. 
                Premium real estate services with personalized attention.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/buy" className="hover:text-accent transition-colors">Buy</a></li>
                <li><a href="/rent" className="hover:text-accent transition-colors">Rent</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>KG 123 Street</li>
                <li>Kigali, Rwanda</li>
                <li>+250 788 123 456</li>
                <li>info@realestate.rw</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex lg:justify-between lg:flex-row flex-col border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 RealEstate. All rights reserved.</p>
            <p className="text-gray-400 text-sm">
              Made in Rwanda by the{" "}
              <a 
                href="https://www.sitecraftersz.co/" 
                className="underline hover:text-white transition-colors duration-500" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Sitecrafters Team
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;