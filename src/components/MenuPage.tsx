import { useState } from 'react';
import { Flame, Download, Leaf } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('karahi');

  const categories = [
    { id: 'karahi', label: 'Karahi' },
    { id: 'bbq', label: 'BBQ & Platters' },
    { id: 'curries', label: 'Curries' },
    { id: 'rice', label: 'Rice' },
    { id: 'breads', label: 'Breads' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'breakfast', label: 'Breakfast' }
  ];

  const menuItems = {
    karahi: [
      {
        name: 'Butt Mutton Karahi',
        description: 'Our signature dish—tender mutton cooked in traditional karahi style with rich spices',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$$'
      },
      {
        name: 'Lahori Chicken Karahi',
        description: 'Classic Lahori-style chicken with fresh tomatoes, ginger, and aromatic spices',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Goat Karahi',
        description: 'Slow-cooked goat meat in authentic karahi preparation',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$$'
      },
      {
        name: 'White Karahi',
        description: 'Creamy, mild karahi prepared with yogurt and select spices',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$$'
      }
    ],
    bbq: [
      {
        name: 'Kebab Masala',
        description: 'Grilled kebabs in rich masala gravy—a customer favorite',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Shinwari Chicken',
        description: 'Authentic Pashtun-style grilled chicken, simple and flavorful',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Shinwari Lamb',
        description: 'Tender lamb chops with minimal spice, maximum flavor',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$$$'
      },
      {
        name: 'Seekh Kebab',
        description: 'Minced meat kebabs seasoned with herbs and spices',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Tikka (Chicken/Lamb)',
        description: 'Marinated and grilled to perfection',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Mixed Grill Platter',
        description: 'Assortment of our best BBQ selections—perfect for sharing',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$$'
      }
    ],
    curries: [
      {
        name: 'Nihari',
        description: 'Slow-cooked beef in rich, spiced gravy—a breakfast classic',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Haleem',
        description: 'Hearty blend of lentils and meat, slow-cooked to perfection',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Chicken Curry',
        description: 'Classic home-style chicken curry',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$'
      },
      {
        name: 'Palak Gosht',
        description: 'Tender meat cooked with spinach and spices',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Daal Makhani',
        description: 'Creamy black lentils slow-cooked overnight',
        spice: 'Mild',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Mixed Vegetable Curry',
        description: 'Seasonal vegetables in aromatic sauce',
        spice: 'Medium',
        tags: ['Halal', 'Veg'],
        price: '$'
      }
    ],
    rice: [
      {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice layered with spiced chicken',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Mutton Biryani',
        description: 'Traditional biryani with tender mutton',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$$'
      },
      {
        name: 'Vegetable Biryani',
        description: 'Aromatic rice with seasonal vegetables',
        spice: 'Medium',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Plain Rice',
        description: 'Steamed basmati rice',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      }
    ],
    breads: [
      {
        name: 'Roghni Naan',
        description: 'Fluffy naan brushed with butter—freshly baked in tandoor',
        spice: 'None',
        tags: ['Halal'],
        price: '$'
      },
      {
        name: 'Tandoori Roti',
        description: 'Whole wheat flatbread from the tandoor',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Garlic Naan',
        description: 'Naan topped with fresh garlic and herbs',
        spice: 'None',
        tags: ['Halal'],
        price: '$'
      },
      {
        name: 'Keema Naan',
        description: 'Naan stuffed with spiced minced meat',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Laccha Paratha',
        description: 'Flaky, layered flatbread',
        spice: 'None',
        tags: ['Halal'],
        price: '$'
      }
    ],
    drinks: [
      {
        name: 'Sweet Lassi',
        description: 'Our famous yogurt-based drink—thick, creamy, and refreshing',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Mango Lassi',
        description: 'Lassi blended with sweet mango pulp',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Doodh Patti Chai',
        description: 'Traditional milk tea—perfect with any meal',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Kashmiri Chai',
        description: 'Pink tea with aromatic spices',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Fresh Juices',
        description: 'Seasonal fruit juices',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Soft Drinks',
        description: 'Selection of bottled beverages',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      }
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Warm milk dumplings in sweet syrup',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Kheer',
        description: 'Creamy rice pudding with cardamom',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Ras Malai',
        description: 'Soft cheese patties in sweet cream',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Kulfi',
        description: 'Traditional Pakistani ice cream',
        spice: 'None',
        tags: ['Halal', 'Veg'],
        price: '$'
      }
    ],
    breakfast: [
      {
        name: 'Nihari with Naan',
        description: 'Traditional breakfast of slow-cooked beef with fresh naan',
        spice: 'Medium',
        tags: ['Halal'],
        price: '$$'
      },
      {
        name: 'Halwa Puri',
        description: 'Sweet semolina halwa with fried bread and chickpea curry',
        spice: 'Mild',
        tags: ['Halal', 'Veg option'],
        price: '$$'
      },
      {
        name: 'Channay',
        description: 'Spiced chickpeas served with naan or puri',
        spice: 'Medium',
        tags: ['Halal', 'Veg'],
        price: '$'
      },
      {
        name: 'Omelette with Paratha',
        description: 'Pakistani-style omelette with flaky paratha',
        spice: 'Mild',
        tags: ['Halal'],
        price: '$'
      }
    ]
  };

  const getSpiceColor = (spice: string) => {
    switch (spice) {
      case 'Hot': return 'text-red-600';
      case 'Medium': return 'text-orange-600';
      case 'Mild': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-6">
            From our famous karahi cooked in traditional style to freshly baked naan and comforting chai—discover the flavours of Pakistan.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white text-sm mb-6">
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 text-amber-400" />
              <span>Karahi is our signature</span>
            </div>
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 text-amber-400" />
              <span>Fresh naan/roti</span>
            </div>
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 text-amber-400" />
              <span>Sweet lassi & chai</span>
            </div>
            <div className="flex items-center">
              <Flame className="w-5 h-5 mr-2 text-amber-400" />
              <span>Ask our team for spice level recommendations</span>
            </div>
          </div>

          <a
            href="MENU_PDF_PLACEHOLDER"
            download
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-800 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Menu
          </a>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white border-b shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4 min-w-max">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-semibold text-emerald-700">{item.price}</span>
                </div>

                <p className="text-gray-600 mb-3">{item.description}</p>

                <div className="flex flex-wrap items-center gap-3">
                  {item.spice !== 'None' && (
                    <div className="flex items-center">
                      <Flame className={`w-4 h-4 mr-1 ${getSpiceColor(item.spice)}`} />
                      <span className={`text-sm font-medium ${getSpiceColor(item.spice)}`}>
                        {item.spice}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full ${
                          tag === 'Veg' || tag.includes('Veg')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {tag === 'Veg' || tag.includes('Veg') ? (
                          <span className="flex items-center">
                            <Leaf className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ) : (
                          tag
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-y-2 border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            <strong>Allergy & Dietary Note:</strong> Please tell us about allergies. We'll do our best to accommodate.
          </p>
        </div>
      </section>
    </div>
  );
}
