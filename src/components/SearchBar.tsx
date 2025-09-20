import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Building, DollarSign, Bed } from 'lucide-react';

interface SearchFilters {
  location: string;
  propertyType: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = '' }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-6 property-shadow ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Location */}
        <div className="lg:col-span-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Enter location..."
              value={filters.location}
              onChange={(e) => updateFilter('location', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <Select value={filters.propertyType} onValueChange={(value) => updateFilter('propertyType', value)}>
            <SelectTrigger>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div>
          <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Buy/Rent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="buy">Buy</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Select value={filters.minPrice} onValueChange={(value) => updateFilter('minPrice', value)}>
            <SelectTrigger>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Min Price" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Min Price</SelectItem>
              <SelectItem value="50000000">RWF 50M</SelectItem>
              <SelectItem value="100000000">RWF 100M</SelectItem>
              <SelectItem value="200000000">RWF 200M</SelectItem>
              <SelectItem value="300000000">RWF 300M</SelectItem>
              <SelectItem value="500000000">RWF 500M+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div>
          <Select value={filters.bedrooms} onValueChange={(value) => updateFilter('bedrooms', value)}>
            <SelectTrigger>
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Beds" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button onClick={handleSearch} size="lg" className="px-8">
          <Search className="h-4 w-4 mr-2" />
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;