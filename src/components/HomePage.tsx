import { useMemo } from 'react';
import { MapPin, Car, Users, Flame, ChefHat, Clock, Star } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { locationData } = useLocation();

  const locationLabel = useMemo(() => {
    return locationData?.displayName || 'Perth, WA';
  }, [locationData]);

  const heroCuisineLine = useMemo(() => {
    const place = locationData?.displayName || 'Perth, WA';
    return `Authentic Indian & Pakistani Cuisine in ${place}`;
  }, [locationData]);

  const heroTagline = 'Where tradition, flavour, and hospitality come together.';

  const highlights = [
    {
      name: 'Butt Mutton Karahi',
      description: 'Tender mutton cooked in rich, aromatic spices—our signature dish loved by regulars',
      icon: ChefHat
    },
    {
      name: 'Lahori Chicken Karahi',
      description: 'Classic Lahori-style chicken karahi with fresh tomatoes and ginger',
      icon: Flame
    },
    {
      name: 'Goat Karahi',
      description: 'Slow-cooked goat meat in traditional karahi style with authentic flavors',
      icon: ChefHat
    },
    {
      name: 'Fresh Naan + Sweet Lassi',
      description: 'Fluffy, freshly baked naan from the tandoor paired with our famous sweet lassi',
      icon: Flame
    }
  ];

  const menuPicks = [
    { name: 'Butt Mutton Karahi', desc: 'Our signature dish' },
    { name: 'Lahori Chicken Karahi', desc: 'Classic Lahori flavours' },
    { name: 'Goat Karahi', desc: 'Traditional & tender' },
    { name: 'Kebab Masala', desc: 'Perfectly spiced' },
    { name: 'Nihari', desc: 'Rich & hearty' },
    { name: 'Shinwari (Chicken/Lamb)', desc: 'Authentic taste' },
    { name: 'Roghni Naan / Tandoori Roti', desc: 'Freshly baked' },
    { name: 'Sweet Lassi / Doodh Patti Chai', desc: 'Perfect pairing' }
  ];

  const reviews = [
    "Rich, authentic flavours—karahi is the standout.",
    "Staff helped us pick dishes and matched our spice level.",
    "Massive seating and easy parking.",
    "Naan is big, fluffy, and fresh.",
    "Sweet lassi and chai were perfect.",
    "Great for families and big groups."
  ];

  return (
    <div className="bg-gray-50">
      <section className="relative h-[600px] md:h-[700px] bg-gray-900 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${
              locationData?.heroImage ||
              'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1920'
            })`,
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">
            Riwayat Restaurant
          </h1>

          {/* (Perth, WA) like the screenshot */}
          <p className="text-lg md:text-xl text-gray-200 mb-2">
            ({locationLabel})
          </p>

          <p className="text-lg md:text-2xl text-gray-200 mb-2">
            {heroCuisineLine}
          </p>

          <p className="text-sm md:text-lg text-amber-200/90 italic mb-7">
            {heroTagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-9">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors text-lg font-semibold"
            >
              Book a Table
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-lg font-semibold"
            >
              View Menu
            </button>
            <a
              href={locationData?.mapUrl || 'https://maps.google.com/?q=LOCATION_PLACEHOLDER'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-lg font-semibold inline-flex items-center justify-center"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white/95">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-amber-400" />
              <span className="text-sm">Spacious Seating</span>
            </div>
            <div className="flex items-center">
              <Car className="w-5 h-5 mr-2 text-amber-400" />
              <span className="text-sm">Free Parking</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-5 h-5 mr-2 text-amber-400" />
              <span className="text-sm">Halal Friendly</span>
            </div>
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 text-amber-400" />
              <span className="text-sm">Cooked Fresh to Order</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          REST OF PAGE (unchanged)
         ========================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What We're Known For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our signature dishes that keep families coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Signature Picks
            </h2>
            <p className="text-lg text-gray-600">
              From our kitchen to your table
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {menuPicks.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-amber-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('menu')}
              className="px-8 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors font-semibold"
            >
              See Full Menu
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Traditional Comfort with a Modern Touch
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Charpai-style seating, soft music, and plenty of room for families and celebrations.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Huge seating area</h3>
                    <p className="text-gray-600">Perfect for large families and group gatherings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Car className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free onsite parking</h3>
                    <p className="text-gray-600">Easy access with ample parking space</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Great for groups & functions</h3>
                    <p className="text-gray-600">Host your special occasions with us</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChefHat className="w-6 h-6 text-emerald-700 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Friendly staff who help with spice level</h3>
                    <p className="text-gray-600">We'll guide you to the perfect heat for your taste</p>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => onNavigate('buffet')}
                className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Plan a Group Booking
              </button>
            </div>

            <div className="relative">
              <img
                src="/images/karahi.png"
                alt="Karahi dish being prepared"
                className="rounded-2xl shadow-2xl w-full h-full object-cover object-right-center"
                style={{ objectPosition: 'right center' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-amber-50 border-y-2 border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <Clock className="w-6 h-6 text-amber-700 mr-3 flex-shrink-0" />
            <p className="text-gray-700">
              We cook fresh to order. On busy nights, dishes may take a little longer—booking ahead helps us serve you better.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-600">
              Authentic flavours, warm hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{review}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=RESTAURANT_PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline"
            >
              Read more reviews on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
