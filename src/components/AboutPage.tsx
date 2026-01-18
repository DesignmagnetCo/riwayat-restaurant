import { Heart, Award, Users, ChefHat } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

export default function AboutPage() {
  const { locationData } = useLocation();
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            A celebration of Pakistani tradition and authentic flavours
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-emerald-800">Riwayat means tradition.</strong> It's more than just a word—it's our commitment to preserving the authentic flavours, cooking techniques, and warm hospitality that define Pakistani cuisine.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our kitchen celebrates the rich culinary heritage of Pakistan with dishes cooked fresh to order, just as they would be prepared in homes across Lahore, Karachi, and Peshawar. From our signature karahi dishes simmering in traditional pans to the aroma of freshly baked naan emerging from the tandoor, every element is crafted with care and authenticity.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We're proud to be a place where families gather, friends reconnect, and communities come together over meals that taste like home. Whether it's a quiet dinner for two, a bustling family celebration, or a large group function, Riwayat is where authentic Pakistani flavours meet genuine hospitality.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Located in {locationData?.displayName || 'Melbourne'}, we've created a space that honours tradition while welcoming everyone to experience the warmth of Pakistani dining culture.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600">
              The Riwayat difference is in the details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Authentic Pakistani Taste
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our karahi is the heart of our menu—cooked in traditional style with recipes passed down through generations. We use authentic spices and techniques to deliver flavours that transport you to Pakistan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Spacious & Family-Friendly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With generous seating, traditional charpai-style areas, and free onsite parking, we've designed our space to welcome families and large groups comfortably. There's always room at our table.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-rose-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hospitality & Guidance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Not sure about spice levels? New to Pakistani cuisine? Our friendly team is here to guide you, recommend dishes, and ensure your meal is perfectly tailored to your taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h3>
              <p className="text-gray-600">
                True to traditional recipes and cooking methods
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Fresh ingredients, cooked to order, every time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hospitality</h3>
              <p className="text-gray-600">
                Warm welcome and attentive service
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                A gathering place for families and friends
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-700 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-emerald-100">
              The people behind your authentic dining experience
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white leading-relaxed text-center">
              Our kitchen team brings decades of combined experience in Pakistani cuisine, with chefs trained in traditional cooking methods from Lahore to Karachi. Our front-of-house staff are passionate about sharing the warmth of Pakistani hospitality, guiding you through the menu, and ensuring every visit feels like coming home.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-emerald-100 mb-6">
              We look forward to welcoming you to Riwayat
            </p>
            <a
              href="tel:PHONE_PLACEHOLDER"
              className="inline-block px-8 py-3 bg-white text-emerald-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
