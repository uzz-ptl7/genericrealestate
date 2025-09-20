import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

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
                <div className="h-8 w-8 bg-accent rounded" />
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
                <li>123 Real Estate Blvd</li>
                <li>Los Angeles, CA 90210</li>
                <li>+1 (555) 123-4567</li>
                <li>info@realestate.com</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="text-xs">FB</span>
                </a>
                <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="text-xs">TW</span>
                </a>
                <a href="#" className="w-8 h-8 bg-primary-foreground/20 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <span className="text-xs">IG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 RealEstate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;