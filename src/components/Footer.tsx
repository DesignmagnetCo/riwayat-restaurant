import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { locationData, openLocationModal } = useLocation();
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Riwayat</h3>
            <p className="text-sm mb-4">
              Authentic Pakistani flavours. Family dining, group gatherings, and traditional hospitality.
            </p>
            {locationData && (
              <button
                onClick={openLocationModal}
                className="text-sm text-amber-500 hover:text-amber-400 flex items-center mb-4"
              >
                <MapPin className="w-4 h-4 mr-1" />
                Change Location
              </button>
            )}
            <div className="flex space-x-4">
              <a href="https://instagram.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-amber-500 transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('buffet')} className="hover:text-amber-500 transition-colors">
                  Buffet & Events
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-500 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-500 transition-colors">
                  Contact / Book
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <span style={{ whiteSpace: 'pre-line' }}>
                  {locationData?.address || 'Location Address\nPlaceholder'}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <a
                  href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
                  className="hover:text-amber-500 transition-colors"
                >
                  {locationData?.phone || '(Phone Placeholder)'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0 text-amber-500" />
                <div>
                  <p className="font-medium text-white">Mon - Sun</p>
                  <p>Hours Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
              className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Call Now
            </a>
            <a
              href={locationData?.mapUrl || 'https://maps.google.com/?q=LOCATION_PLACEHOLDER'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Get Directions
            </a>
            <button onClick={() => onNavigate('contact')} className="px-6 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors">
              Reserve Table
            </button>
          </div>

          <p className="text-sm text-gray-500">
            &copy; 2026 Riwayat Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
