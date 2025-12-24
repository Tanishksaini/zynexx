import { Check } from 'lucide-react';

export function WhyChooseSection() {
  const benefits = [
    'One platform for multiple services',
    'Local professionals for faster response',
    'Transparent pricing with detailed breakdowns',
    '24/7 customer support',
    'Quality assurance and satisfaction guarantee',
    'Secure payment options',
    'Real-time tracking and updates',
    'Rating and review system'
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-white/60 backdrop-blur-sm text-indigo-700 px-4 py-1.5 rounded-full text-sm mb-4 border border-indigo-200">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              The Smart Choice for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Local Services</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We're revolutionizing how you access local services. Here's why thousands of users trust us every day.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="text-white" size={14} />
                  </div>
                  <p className="text-gray-700 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1687324960184-44c3d8844bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoZWxwZXIlMjBzZXJ2aWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTg2NDQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional service provider"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Trusted Platform</div>
                    <div className="text-lg">10,000+ Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
