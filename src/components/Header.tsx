import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from '../contexts/LocationContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locationData, clearLocation } = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'buffet', label: 'Buffet & Events' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact / Book' }
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col py-3 space-y-2">
            <div className="hidden lg:grid lg:grid-cols-3 items-center">
              <div></div>
              <div className="flex justify-center">
                <img
                  onClick={() => onNavigate('home')}
                  src="/riwayat-logo-header.png"
                  alt="Riwayat Restaurant"
                  className="h-20 w-auto cursor-pointer"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
              <div className="flex items-center justify-end space-x-4">
                <a
                  href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
                  className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="lg:hidden flex justify-between items-center">
              <img
                onClick={() => onNavigate('home')}
                src="/riwayat-logo-header.png"
                alt="Riwayat Restaurant"
                className="h-14 md:h-16 w-auto cursor-pointer"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
              />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {locationData && (
              <button
                onClick={clearLocation}
                className="text-xs text-emerald-700 hover:text-emerald-900 flex items-center"
              >
                <MapPin className="w-3 h-3 mr-1" />
                {locationData.displayName} · Change
              </button>
            )}

            <nav className="hidden lg:flex justify-center space-x-8 pt-2 border-t">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-amber-600'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? 'bg-amber-50 text-amber-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="grid grid-cols-3 gap-2 p-3">
          <a
            href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
            className="flex items-center justify-center px-4 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4 mr-1" />
            Call
          </a>
          <a
            href={locationData?.mapUrl || 'https://maps.google.com/?q=LOCATION_PLACEHOLDER'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium"
          >
            <MapPin className="w-4 h-4 mr-1" />
            Directions
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center justify-center px-4 py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors text-sm font-medium"
          >
            Book
          </button>
        </div>
      </div>
    </>
  );
}
