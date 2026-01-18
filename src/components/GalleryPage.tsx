import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

export default function GalleryPage() {
  const { locationData } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Food' },
    { id: 'interior', label: 'Interior' },
    { id: 'groups', label: 'Group Dining' },
    { id: 'buffet', label: 'Buffet Nights' }
  ];

  const galleryImages = useMemo(() => {
    if (!locationData) return [];

    const images = [
      ...locationData.galleryImages.food.map((url, idx) => ({
        url,
        category: 'food',
        title: ['Signature Karahi', 'Fresh Naan', 'Grilled Specialties', 'Sweet Lassi', 'Aromatic Rice'][idx] || 'Delicious Food'
      })),
      ...locationData.galleryImages.interior.map((url, idx) => ({
        url,
        category: 'interior',
        title: ['Dining Area', 'Traditional Seating', 'Warm Ambiance'][idx] || 'Restaurant Interior'
      })),
      ...locationData.galleryImages.groups.map((url, idx) => ({
        url,
        category: 'groups',
        title: ['Group Celebrations', 'Family Gatherings'][idx] || 'Group Dining'
      })),
      ...locationData.galleryImages.buffet.map((url, idx) => ({
        url,
        category: 'buffet',
        title: ['Buffet Spread', 'Iftar Nights'][idx] || 'Buffet'
      }))
    ];

    return images;
  }, [locationData]);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            A visual journey through the flavours, atmosphere, and moments at Riwayat
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Instagram className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stay updated with our latest dishes, special events, and behind-the-scenes moments
          </p>
          <a
            href="https://instagram.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-white text-purple-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @RiwayatRestaurant
          </a>
        </div>
      </section>

      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-full">
            <img
              src={filteredImages[lightboxImage].url}
              alt={filteredImages[lightboxImage].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[lightboxImage].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
