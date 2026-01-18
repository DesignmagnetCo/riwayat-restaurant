import { useState } from 'react';
import { Calendar, Music, Users, Phone, Mail } from 'lucide-react';

export default function BuffetPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon to confirm your booking.');
    setFormData({ name: '', phone: '', email: '', date: '', guests: '', notes: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-rose-700 to-rose-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Buffet & Events
          </h1>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Special occasions, group gatherings, and seasonal celebrations at Riwayat
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-800 rounded-full mb-6">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="font-semibold">Seasonal Offering</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Ramadan Iftar Buffet
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Join us during Ramadan for our traditional Iftar buffet featuring an extensive spread of Pakistani favorites. From succulent karahi to fresh breads, hearty curries, and sweet treats—break your fast with authentic flavours and warm hospitality.
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Wide selection of traditional dishes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Fresh dates, fruits, and beverages</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Family-friendly atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Spacious seating for large groups</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Note:</strong> Buffet dates are announced seasonally. Follow us on social media for upcoming dates and timings.
                </p>
              </div>

              <a
                href="tel:PHONE_PLACEHOLDER"
                className="inline-flex items-center px-8 py-3 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Enquire About Upcoming Buffet Dates
              </a>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Buffet Spread"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Live Music"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full mb-6">
                <Music className="w-5 h-5 mr-2" />
                <span className="font-semibold">Special Nights</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Live Music & Entertainment
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Experience the authentic ambiance of Pakistan with occasional live music performances. Traditional melodies create the perfect backdrop for your dining experience, adding to the warm, cultural atmosphere that makes Riwayat special.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 mb-6">
                <p className="text-gray-700">
                  Follow us on Instagram and Facebook for announcements about upcoming live music nights and special events.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-semibold"
                >
                  Follow on Instagram
                </a>
                <a
                  href="https://facebook.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">Group Bookings</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Private Functions & Group Dining
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our spacious dining area is perfect for celebrations, family gatherings, corporate events, and special occasions. We can accommodate large groups with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Large Capacity</h3>
              <p className="text-gray-700">
                Spacious seating for family reunions, weddings, and corporate events
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Booking</h3>
              <p className="text-gray-700">
                We work with you to plan the perfect menu and setup for your event
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-700">
                Dedicated staff to ensure your event runs smoothly
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Group Booking Enquiry
            </h3>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Pre-order recommended for large groups</strong> to ensure we can serve you promptly with fresh, hot food.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Number of people"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Tell us about your event, dietary requirements, or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
