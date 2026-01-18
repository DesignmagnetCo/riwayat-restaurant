import { useState, useEffect } from 'react';
import { LocationProvider, useLocation } from './contexts/LocationContext';
import LocationModal from './components/LocationModal';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import BuffetPage from './components/BuffetPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const { currentLocation } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'menu':
        return <MenuPage />;
      case 'buffet':
        return <BuffetPage />;
      case 'about':
        return <AboutPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      <LocationModal />
      {currentLocation && (
        <div className="min-h-screen bg-gray-50">
          <Header currentPage={currentPage} onNavigate={setCurrentPage} />
          <main>
            {renderPage()}
          </main>
          <Footer onNavigate={setCurrentPage} />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <LocationProvider>
      <AppContent />
    </LocationProvider>
  );
}

export default App;
