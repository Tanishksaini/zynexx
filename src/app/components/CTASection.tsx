import { ArrowRight, Download, Smartphone, AppWindow } from 'lucide-react';
import { Button } from './ui/button';

export function CTASection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#001a3d] via-[#003666] to-[#00A8E8]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join thousands of satisfied customers. Download our app or book directly through our website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-white text-[#00A8E8] hover:bg-gray-50 px-8 py-6 rounded-xl text-base group shadow-2xl"
                onClick={scrollToServices}
              >
                Book Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/50 text-black hover:bg-white/10 hover:border-white px-8 py-6 rounded-xl text-base backdrop-blur-sm"
              >
                <Download className="mr-2" size={20} />
                Download App
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100% Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Right Visual - App Preview Cards */}
          <div className="relative lg:block hidden">
            {/* Floating Card 1 */}
            <div className="absolute top-10 left-0 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-xs z-10 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Download App</div>
                  <div className="text-lg text-gray-900">iOS & Android</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-full w-4/5"></div>
                </div>
                <p className="text-xs text-gray-600">50,000+ downloads</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 right-0 bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-xs transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <AppWindow className="text-white" size={28} />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Quick Booking</div>
                  <div className="text-lg text-gray-900">Just 3 Taps</div>
                </div>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">+500</div>
              </div>
            </div>

            {/* Center Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}