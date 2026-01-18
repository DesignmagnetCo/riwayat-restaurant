import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { LocationId, LocationData, LOCATIONS } from '../types/location';

interface LocationContextType {
  currentLocation: LocationId | null;
  locationData: LocationData | null;
  setLocation: (location: LocationId) => void;
  clearLocation: () => void;
  showLocationModal: boolean;
  openLocationModal: () => void;
  closeLocationModal: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<LocationId | null>(null);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    setShowLocationModal(true);
  }, []);

  const setLocation = (location: LocationId) => {
    setCurrentLocation(location);
    setShowLocationModal(false);
  };

  const clearLocation = () => {
    setCurrentLocation(null);
    setShowLocationModal(true);
  };

  const openLocationModal = () => {
    setShowLocationModal(true);
  };

  const closeLocationModal = () => {
    if (currentLocation) {
      setShowLocationModal(false);
    }
  };

  const locationData = currentLocation ? LOCATIONS[currentLocation] : null;

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
        locationData,
        setLocation,
        clearLocation,
        showLocationModal,
        openLocationModal,
        closeLocationModal
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
