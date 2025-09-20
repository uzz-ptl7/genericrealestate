import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { mockProperties } from '@/data/mockProperties';
import {
  ArrowLeft,
  Heart,
  Share2,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Car,
  Phone,
  MessageCircle,
  Mail,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, category: 'buy' | 'rent') => {
    if (category === 'rent') {
      return `RWF ${price.toLocaleString()}/mo`;
    }
    return `RWF ${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link to={`/${property.category}`}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Sold overlay */}
                {property.isSold && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Badge variant="destructive" className="text-2xl font-bold px-6 py-3">
                      SOLD
                    </Badge>
                  </div>
                )}

                {/* Navigation buttons */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail strip */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 mt-4 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Property Info Sidebar */}
          <div className="space-y-6">
            {/* Price and Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">
                      {formatPrice(property.price, property.category)}
                    </div>
                    {property.isFeatured && (
                      <Badge className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFavorited(!isFavorited)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isFavorited ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{property.area.toLocaleString()} sq ft</span>
                    </div>
                    {property.parking && (
                      <div className="flex items-center">
                        <Car className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{property.parking} Parking</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{property.location}</span>
                    </div>
                    {property.yearBuilt && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Built in {property.yearBuilt}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Interested in this property?</h3>
                <div className="space-y-3">
                  <Button className="w-full" disabled={property.isSold}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full" disabled={property.isSold}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full" disabled={property.isSold}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">{property.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {property.description}
                </p>

                <div>
                  <h3 className="font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Location</h3>
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Map integration coming soon</p>
                    <p className="text-sm">{property.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Type Info */}
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Property Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="capitalize font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="capitalize font-medium">For {property.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area:</span>
                    <span className="font-medium">{property.area.toLocaleString()} sq ft</span>
                  </div>
                  {property.yearBuilt && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant={property.isSold ? "destructive" : "secondary"} className={property.isSold ? "" : "bg-success text-success-foreground"}>
                      {property.isSold ? "Sold" : "Available"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;