import { MapPin } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

export default function LocationModal() {
  const { showLocationModal, setLocation, currentLocation } = useLocation();

  if (!showLocationModal) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentLocation && e.target === e.currentTarget) {
      return;
    }
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-emerald-700" />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
            Choose Your Location
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Select your nearest Riwayat Restaurant
          </p>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Menu is the same — photos & contact details update based on your selection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <button
            onClick={() => setLocation('perth')}
            className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/perth.webp"
                alt="Perth Location"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 md:p-6 bg-white">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-1">Perth</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3">Western Australia</p>
              <div className="px-4 md:px-6 py-2 md:py-3 bg-emerald-700 text-white rounded-lg group-hover:bg-emerald-800 transition-colors font-semibold text-sm md:text-base">
                Select Perth
              </div>
            </div>
          </button>

          <button
            onClick={() => setLocation('sunshine')}
            className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-amber-600 transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/images/sunshine.webp"
                alt="Sunshine Location"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 md:p-6 bg-white">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-1">Sunshine</h3>
              <p className="text-sm md:text-base text-gray-600 mb-3">Melbourne, Victoria</p>
              <div className="px-4 md:px-6 py-2 md:py-3 bg-amber-600 text-white rounded-lg group-hover:bg-amber-700 transition-colors font-semibold text-sm md:text-base">
                Select Sunshine
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
