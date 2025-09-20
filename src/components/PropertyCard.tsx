import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '@/data/mockProperties';

interface PropertyCardProps {
  property: Property;
  onFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

const PropertyCard = ({ property, onFavorite, isFavorited = false }: PropertyCardProps) => {
  const formatPrice = (price: number, category: 'buy' | 'rent') => {
    if (category === 'rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <Card className="group overflow-hidden property-shadow hover:property-shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Sold overlay */}
        {property.isSold && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive" className="text-lg font-bold px-4 py-2">
              SOLD
            </Badge>
          </div>
        )}

        {/* Featured badge */}
        {property.isFeatured && !property.isSold && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 hover:bg-background"
          onClick={(e) => {
            e.preventDefault();
            onFavorite?.(property.id);
          }}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-foreground'
            }`}
          />
        </Button>

        {/* Property type badge */}
        <Badge
          variant="secondary"
          className="absolute bottom-3 left-3 capitalize"
        >
          {property.type}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <div className="text-right">
              <p className="text-2xl font-bold text-accent">
                {formatPrice(property.price, property.category)}
              </p>
            </div>
          </div>

          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/property/${property.id}`} className="w-full">
          <Button className="w-full" disabled={property.isSold}>
            {property.isSold ? 'Sold' : 'View Details'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;