import { ArrowRight, Search, MapPin, Star, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#001a3d] via-[#003666] to-[#00A8E8] pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A8E8]/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Badge */}
        <div className="text-center pt-12 pb-8">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm">⭐ #1 Local Service Platform</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white/70 text-sm">Trusted by 50,000+ Indians</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto pb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Book Local Services With
            <br />
            <span className="text-[#00A8E8]">Zynexx</span> Platform
          </h1>
          
          <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
            Connect with verified maids, cooks, drivers, get groceries from local kirana stores, and book event services—all in one trusted platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-2 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 flex-1 px-4">
                  <MapPin className="text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Enter your location to find services near you"
                    className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <Button 
                  className="bg-gradient-to-r from-[#00A8E8] to-[#0087c9] hover:from-[#0087c9] hover:to-[#006ba3] text-white px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/30"
                  onClick={scrollToServices}
                >
                  Find Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-4">🎯 Available in 15+ cities across India</p>
          </div>

          {/* Trust Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16 opacity-60">
            <div className="text-white/60 text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <span>Featured in</span>
            </div>
            <div className="text-white/60 text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <span>Trusted by</span>
            </div>
            <div className="text-white/60 text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <span>Verified by</span>
            </div>
            <div className="text-white/60 text-sm flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg"></div>
              <span>Backed by</span>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="relative pb-32">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 - Service Booking */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                  alt="User"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Priya Sharma</div>
                  <div className="text-xs text-gray-400">Mumbai, Maharashtra</div>
                </div>
                <CheckCircle className="text-gray-900" size={18} />
              </div>

              {/* Service Provider Image */}
              <div className="mb-4 rounded-2xl overflow-hidden h-40">
                <img 
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Maid Service"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Details */}
              <div className="rounded-2xl p-4 mb-3 border border-gray-100">
                <div className="text-xs text-gray-400 mb-2">Service Booked</div>
                <div className="text-lg text-gray-900 mb-1">Full-time Maid</div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={14} />
                  <span>Starting tomorrow</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Verified Professional</span>
                <div className="flex items-center gap-1 text-gray-900">
                  <Star size={12} />
                  <span>4.9</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Kirana Order */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Kirana Order</div>
                  <div className="text-2xl text-gray-900">#2847</div>
                </div>
                <div className="px-3 py-1.5 rounded-full border border-gray-200">
                  <span className="text-xs text-gray-900">Delivered</span>
                </div>
              </div>
              
              {/* Product Images - 4 Visible Products */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="Rice"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="Vegetables"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                    alt="Milk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                  <span className="text-lg text-gray-900">+9</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Items</span>
                  <span className="text-gray-900">12 products</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Total Amount</span>
                  <span className="text-gray-900">₹847</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Delivery Time</span>
                  <span className="text-gray-900">18 mins</span>
                </div>
              </div>
              <div className="rounded-xl p-3 flex items-center gap-2 border border-gray-100">
                <div className="text-2xl">🛒</div>
                <div className="text-xs text-gray-700">
                  <div className="mb-0.5">From: Sharma Kirana Store</div>
                  <div className="text-gray-400">0.5 km away</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}