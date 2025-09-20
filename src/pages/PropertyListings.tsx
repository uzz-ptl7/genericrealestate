import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProperties, Property } from '@/data/mockProperties';
import { SlidersHorizontal, Grid, List } from 'lucide-react';

const PropertyListings = () => {
  const { category } = useParams<{ category: 'buy' | 'rent' }>();
  const [favoriteProperties, setFavoriteProperties] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState<any>({});
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter properties based on category and search filters
  const filteredProperties = useMemo(() => {
    let properties = mockProperties;

    // Filter by category (buy/rent)
    if (category) {
      properties = properties.filter(p => p.category === category);
    }

    // Apply search filters
    if (filters.location) {
      properties = properties.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.propertyType) {
      properties = properties.filter(p => p.type === filters.propertyType);
    }

    if (filters.bedrooms) {
      properties = properties.filter(p => p.bedrooms >= parseInt(filters.bedrooms));
    }

    if (filters.minPrice) {
      properties = properties.filter(p => p.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      properties = properties.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    // Sort properties
    switch (sortBy) {
      case 'price-low':
        properties = properties.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        properties = properties.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        properties = properties.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case 'area':
        properties = properties.sort((a, b) => b.area - a.area);
        break;
      default:
        break;
    }

    return properties;
  }, [category, filters, sortBy]);

  const handleSearch = (searchFilters: any) => {
    setFilters(searchFilters);
  };

  const handleFavorite = (propertyId: string) => {
    setFavoriteProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const pageTitle = category === 'buy' ? 'Properties for Sale' : 
                   category === 'rent' ? 'Properties for Rent' : 
                   'All Properties';

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-muted-foreground text-lg">
            {filteredProperties.length} properties found
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-secondary/30 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Sort by:</span>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="area">Largest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }>
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onFavorite={handleFavorite}
                isFavorited={favoriteProperties.includes(property.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold mb-2">No Properties Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search filters to find more properties
            </p>
            <Button onClick={() => setFilters({})}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              Load More Properties
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;