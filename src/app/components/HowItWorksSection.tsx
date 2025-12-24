import { Search, MapPin, UserCheck, CheckCircle } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: 'Choose Service',
      description: 'Browse our wide range of services and select what you need',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: MapPin,
      title: 'Select Location & Time',
      description: 'Pick your preferred location and schedule',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: UserCheck,
      title: 'Get Matched',
      description: 'We connect you with the best nearby provider',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: CheckCircle,
      title: 'Service Delivered',
      description: 'Enjoy quality service at your doorstep',
      gradient: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">Get Started in 4 Simple Steps</h2>
          <p className="text-xl text-gray-600">
            Seamless booking experience from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 via-pink-200 to-green-200 -z-10"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border-4 border-gray-50">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${step.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
