import { Users, ShoppingBag, Sparkles, ArrowRight, ChefHat, Baby, HeartPulse, Car, Package, Music } from 'lucide-react';

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
        { icon: Users, name: 'Maid' },
        { icon: ChefHat, name: 'Cook' },
        { icon: Baby, name: 'Nanny / Babysitter' },
        { icon: HeartPulse, name: 'Elder Care' },
        { icon: HeartPulse, name: 'Patient Care' },
        { icon: Car, name: 'Driver' }
      ]
    },
    {
      title: 'Kirana4U',
      subtitle: 'Local Grocery Delivery',
      description: 'Fresh groceries from your trusted neighborhood stores',
      icon: ShoppingBag,
      color: 'green',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      services: [
        { icon: ShoppingBag, name: 'Order from nearby stores' },
        { icon: Package, name: 'Open/loose items available' },
        { icon: Package, name: 'Lightning fast delivery' },
        { icon: Package, name: 'Support local businesses' }
      ]
    },
    {
      title: 'Service4UU',
      subtitle: 'Event & Personal Services',
      description: 'Professional services for your special occasions',
      icon: Sparkles,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      services: [
        { icon: Sparkles, name: 'Makeup Artist' },
        { icon: Sparkles, name: 'Mehndi Artist' },
        { icon: Music, name: 'Choreographer' },
        { icon: Sparkles, name: 'Event Planning' }
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
          <div className="inline-block bg-cyan-100 text-[#00A8E8] px-4 py-1.5 rounded-full text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Everything you need,
            <span className="block text-[#00A8E8] mt-2">all in one place</span>
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
                    <h3 className="text-2xl text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>

                  {/* Services List */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.services.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className={`${colors.light} p-1.5 rounded-lg`}>
                            <ItemIcon className={colors.text} size={16} />
                          </div>
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