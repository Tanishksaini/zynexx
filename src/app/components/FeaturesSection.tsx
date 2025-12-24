import { Shield, MapPin, DollarSign, Calendar, Clock, Store } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Verified & Trusted',
      description: 'All service providers undergo thorough background verification',
      color: 'indigo'
    },
    {
      icon: MapPin,
      title: 'Hyperlocal Services',
      description: 'Connect with professionals in your neighborhood',
      color: 'green'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Transparent pricing with no hidden charges',
      color: 'purple'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Book services in just a few taps',
      color: 'orange'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Schedule services at your convenience',
      color: 'pink'
    },
    {
      icon: Store,
      title: 'Local Vendor Support',
      description: 'Empowering local businesses',
      color: 'blue'
    }
  ];

  const getGradientClasses = (color: string) => {
    const colors: Record<string, string> = {
      indigo: 'from-indigo-500 to-indigo-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      pink: 'from-pink-500 to-pink-600',
      blue: 'from-blue-500 to-blue-600'
    };
    return colors[color];
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">Why Users Love Zynexx</h2>
          <p className="text-xl text-gray-600">
            Everything you need for a seamless service experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const gradient = getGradientClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
