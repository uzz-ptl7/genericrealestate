import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import { mockProperties } from '@/data/mockProperties';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-real-estate.jpg';

const HomePage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<string[]>([]);
  
  const featuredProperties = mockProperties.filter(p => p.isFeatured && !p.isSold).slice(0, 3);

  const handleSearch = (filters: any) => {
    // Navigate to listings page with filters
    console.log('Search filters:', filters);
  };

  const handleFavorite = (propertyId: string) => {
    setFavoriteProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Find Your
            <span className="block text-accent">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover premium properties with our curated collection of exceptional homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buy">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/rent">
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                View Rentals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Start Your Property Search</h2>
              <p className="text-muted-foreground text-lg">
                Find the perfect property with our advanced search filters
              </p>
            </div>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handpicked premium properties that offer exceptional value and stunning features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onFavorite={handleFavorite}
                isFavorited={favoriteProperties.includes(property.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/buy">
              <Button size="lg" className="px-8">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose RealEstate</h2>
            <p className="text-muted-foreground text-lg">
              Your trusted partner in finding the perfect property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Expertise</h3>
              <p className="text-muted-foreground">
                Deep local market knowledge and insider insights to help you make informed decisions
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-muted-foreground">
                Transparent processes and dedicated support throughout your property journey
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">
                Carefully curated properties that meet our high standards for quality and value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get started today and discover the perfect home that matches your lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-8">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/buy">
                <Button size="lg" variant="outline" className="px-8">
                  Browse All Listings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;