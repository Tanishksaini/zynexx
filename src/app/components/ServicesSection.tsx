import { Users, ShoppingBag, Sparkles, ArrowRight, ChefHat, Baby, HeartPulse, Car, Package, Music, Home, Wand2 } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      title: 'Helperr4U',
      subtitle: 'Home Service Professionals',
      description: 'Trusted helpers for your everyday needs',
      icon: Users,
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      services: [
        { name: 'Maid', icon: Home },
        { name: 'Cook', icon: ChefHat },
        { name: 'Baby Sitter', icon: Baby },
        { name: 'Driver', icon: Car },
        { name: 'Elder Care', icon: HeartPulse },
        { name: 'Nanny', icon: Baby },
        { name: 'Patient Care', icon: HeartPulse },
        { name: 'Shop Helper', icon: Package },
        { name: 'Cleaning Service', icon: Sparkles }
      ]
    },
    {
      title: 'Service4U',
      subtitle: 'Event & Personal Services',
      description: 'Professional services for your special occasions',
      icon: Sparkles,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      services: [
        { name: 'Makeup Artist', icon: Wand2 },
        { name: 'Parlor Service', icon: Sparkles },
        { name: 'Mehandi Artist', icon: Wand2 },
        { name: 'Choreographer', icon: Music },
        { name: 'Laundry Wala', icon: Package },
        { name: 'Press Wala', icon: Package }
      ]
    },
    {
      title: 'Kirana4U',
      subtitle: 'Local Grocery Delivery',
      description: 'Fresh groceries from your trusted neighborhood stores',
      icon: ShoppingBag,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      badge: 'Coming Soon',
      services: [
        { name: 'Nearby Local Store', icon: ShoppingBag },
        { name: 'Delivery Mode: Instant, Express, Standard', icon: Package },
        { name: '99% availability of products', icon: Package }
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string; light: string }> = {
    indigo: { bg: 'bg-[#00A8E8]', text: 'text-[#00A8E8]', gradient: 'from-[#00A8E8] to-[#0087c9]', light: 'bg-cyan-50' },
    green: { bg: 'bg-green-600', text: 'text-green-600', gradient: 'from-green-500 to-green-600', light: 'bg-green-50' },
    purple: { bg: 'bg-purple-600', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600', light: 'bg-purple-50' }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-[#00A8E8] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of verified local services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute bottom-4 left-6 ${colors.light} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    <Icon className={colors.text} size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">{service.subtitle}</div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl text-gray-900">{service.title}</h3>
                      {service.badge && (
                        <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${colors.bg} text-white shadow-md`}>
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>

                  {/* Services List */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.services.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <ItemIcon className={`${colors.text} mt-0.5 flex-shrink-0`} size={16} />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA */}
                  <button className={`group/btn w-full ${colors.bg} hover:opacity-90 text-white px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2`}>
                    Book Now
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}