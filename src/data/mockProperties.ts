export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'house' | 'apartment' | 'condo' | 'commercial';
  category: 'buy' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  images: string[];
  description: string;
  features: string[];
  isSold: boolean;
  isFeatured: boolean;
  yearBuilt?: number;
  parking?: number;
  createdAt: string;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Villa with Kigali City View',
    price: 485000000,
    location: 'Nyarutarama, Kigali',
    type: 'house',
    category: 'buy',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    ],
    description: 'Stunning modern villa with panoramic city views, featuring high-end finishes and smart home technology in prestigious Nyarutarama.',
    features: ['City View', 'Smart Home', 'Swimming Pool', 'Garage', 'Garden'],
    isSold: false,
    isFeatured: true,
    yearBuilt: 2020,
    parking: 3,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Downtown Luxury Apartment',
    price: 950000,
    location: 'City Center, Kigali',
    type: 'apartment',
    category: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    description: 'Luxurious apartment in the heart of Kigali with city skyline views and premium amenities.',
    features: ['City View', 'Gym', 'Security', 'Parking'],
    isSold: false,
    isFeatured: true,
    yearBuilt: 2018,
    parking: 1,
    createdAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'Family Home in Kimihurura',
    price: 165000000,
    location: 'Kimihurura, Kigali',
    type: 'house',
    category: 'buy',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&h=600&fit=crop'
    ],
    description: 'Perfect family home in Kimihurura with spacious compound and modern updates.',
    features: ['Compound', 'Updated Kitchen', 'Fireplace', 'Two-Car Garage'],
    isSold: false,
    isFeatured: false,
    yearBuilt: 2015,
    parking: 2,
    createdAt: '2024-01-28'
  },
  {
    id: '4',
    title: 'Lake Kivu Retreat',
    price: 275000000,
    location: 'Rubavu, Western Province',
    type: 'house',
    category: 'buy',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop'
    ],
    description: 'Beautiful lakefront property with direct Lake Kivu access and stunning mountain views.',
    features: ['Lakefront', 'Balcony', 'Garden', 'Boat Access'],
    isSold: true,
    isFeatured: false,
    yearBuilt: 2019,
    parking: 2,
    createdAt: '2024-01-10'
  },
  {
    id: '5',
    title: 'Cozy Apartment in Remera',
    price: 650000,
    location: 'Remera, Kigali',
    type: 'apartment',
    category: 'rent',
    bedrooms: 2,
    bathrooms: 1,
    area: 1000,
    images: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    description: 'Comfortable apartment in Remera with modern amenities and easy access to town.',
    features: ['Modern Kitchen', 'Balcony', 'Security', 'Transport Links'],
    isSold: false,
    isFeatured: false,
    yearBuilt: 2017,
    parking: 1,
    createdAt: '2024-02-05'
  },
  {
    id: '6',
    title: 'Executive Penthouse',
    price: 595000000,
    location: 'Kacyiru, Kigali',
    type: 'apartment',
    category: 'buy',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
    ],
    description: 'Exclusive penthouse with panoramic Kigali views and luxury finishes throughout.',
    features: ['Penthouse', 'City Views', 'Private Elevator', 'Terrace'],
    isSold: false,
    isFeatured: true,
    yearBuilt: 2021,
    parking: 2,
    createdAt: '2024-01-20'
  }
];