import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Car, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from '../contexts/LocationContext';

export default function ContactPage() {
  const { locationData } = useLocation();

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
    setBookingData({ name: '', phone: '', email: '', date: '', time: '', guests: '', notes: '' });
  };

  const faqs = [
    {
      question: 'Do you take walk-ins?',
      answer: 'Yes, we welcome walk-in guests. However, we recommend booking ahead, especially on busy nights (weekends and dinner times) to ensure we have a table ready for you.'
    },
    {
      question: 'Why can food take time?',
      answer: 'We cook all dishes fresh to order using traditional methods. This ensures you get the best quality and authentic flavours, but it means preparation takes time, especially during peak hours. Your patience is rewarded with fresh, hot, delicious food.'
    },
    {
      question: 'Do you cater for different spice levels?',
      answer: 'Absolutely! Our team is happy to adjust the spice level to your preference. Just let us know if you prefer mild, medium, or hot, and we\'ll prepare your dish accordingly.'
    },
    {
      question: 'Do you have vegetarian options?',
      answer: 'Yes, we offer a variety of vegetarian dishes including daal, mixed vegetable curry, and vegetable biryani. Look for the vegetarian tag on our menu, or ask our staff for recommendations.'
    },
    {
      question: 'Is parking available?',
      answer: 'Yes! We have free onsite parking for all our guests, making it easy and convenient to visit us.'
    },
    {
      question: 'Can you accommodate large groups?',
      answer: 'Yes, we have a spacious dining area perfect for large groups, families, and special occasions. We recommend calling ahead or using our group booking form for parties of 8 or more, and pre-ordering is encouraged for the best experience.'
    },
    {
      question: 'Do you offer takeaway?',
      answer: 'Please contact us directly to inquire about takeaway options and availability.'
    },
    {
      question: 'Are your dishes halal?',
      answer: 'Yes, all our meat dishes are halal-friendly. We cater to the Muslim community and follow halal practices.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Contact & Book
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Reserve your table or get in touch—we look forward to serving you
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a
                href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
                className="text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                {locationData?.phone || '(Phone Placeholder)'}
              </a>
              <p className="text-sm text-gray-600 mt-2">Call us anytime</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700 font-medium" style={{ whiteSpace: 'pre-line' }}>
                {locationData?.address || 'Location Address\nPlaceholder'}
              </p>
              <a
                href={locationData?.mapUrl || 'https://maps.google.com/?q=LOCATION_PLACEHOLDER'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-800 font-semibold text-sm mt-2 inline-block"
              >
                Get Directions
              </a>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-700 font-medium">
                Monday - Sunday<br />
                Hours Placeholder
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg flex items-start mb-12">
            <Car className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Free Parking Available</h4>
              <p className="text-gray-700">
                Easy onsite parking for all our guests—no need to worry about finding a spot!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                Reserve Your Table
              </h2>
              <p className="text-gray-600">
                Book ahead for the best experience, especially during busy times
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your email (optional)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guests *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Number of people"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Let us know about allergies, spice preferences, or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors font-semibold text-lg"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Request Reservation
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll contact you shortly to confirm your booking
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video w-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg mb-6">
            <iframe
              src={locationData?.mapEmbedUrl || 'https://www.google.com/maps/embed?pb=PLACEHOLDER'}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Riwayat Restaurant Location"
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href={locationData?.mapUrl || 'https://maps.google.com/?q=LOCATION_PLACEHOLDER'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before you visit
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Give us a call—we're happy to help!
          </p>
          <a
            href={`tel:${locationData?.phone || 'PHONE_PLACEHOLDER'}`}
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
