export type LocationId = 'perth' | 'sunshine';

export interface LocationData {
  id: LocationId;
  name: string;
  displayName: string;
  address: string;
  phone: string;
  mapUrl: string;
  mapEmbedUrl: string;
  heroImage: string;
  galleryImages: {
    food: string[];
    interior: string[];
    groups: string[];
    buffet: string[];
  };
  aboutImages: {
    interior: string;
    team: string;
  };
}

export const LOCATIONS: Record<LocationId, LocationData> = {
  perth: {
    id: 'perth',
    name: 'Perth',
    displayName: 'Perth, WA',
    address: 'Perth Location Address\nPerth, WA, Australia',
    phone: 'PERTH_PHONE_PLACEHOLDER',
    mapUrl: 'https://maps.google.com/?q=PERTH_LOCATION_PLACEHOLDER',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=PERTH_PLACEHOLDER',
    heroImage: '/images/perthbackground.png',
    galleryImages: {
      food: [
        'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      interior: [
        'https://images.pexels.com/photos/3298693/pexels-photo-3298693.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5779997/pexels-photo-5779997.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      groups: [
        'https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      buffet: [
        'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    aboutImages: {
      interior: 'https://images.pexels.com/photos/3298693/pexels-photo-3298693.jpeg?auto=compress&cs=tinysrgb&w=800',
      team: 'https://images.pexels.com/photos/5779997/pexels-photo-5779997.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  },
  sunshine: {
    id: 'sunshine',
    name: 'Sunshine',
    displayName: 'Sunshine, Melbourne',
    address: 'Sunshine Location Address\nSunshine, VIC, Australia',
    phone: 'SUNSHINE_PHONE_PLACEHOLDER',
    mapUrl: 'https://maps.google.com/?q=SUNSHINE_LOCATION_PLACEHOLDER',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=SUNSHINE_PLACEHOLDER',
    heroImage: '/images/sunshinebachground.png',
    galleryImages: {
      food: [
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      interior: [
        'https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5779997/pexels-photo-5779997.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      groups: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      buffet: [
        'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    aboutImages: {
      interior: 'https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&w=800',
      team: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  }
};
