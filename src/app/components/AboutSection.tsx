import { Zap, Shield, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">Redefining Local Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zynexx is a hyperlocal on-demand service platform connecting users with verified local professionals and nearby kirana stores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Convenience */}
          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-indigo-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-indigo-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
                <Zap className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-2xl mb-4">Convenience</h3>
            <p className="text-gray-600 leading-relaxed">
              Book multiple services from one platform. No need to search for different providers.
            </p>
          </div>

          {/* Trust */}
          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-purple-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
                <Shield className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-2xl mb-4">Trust</h3>
            <p className="text-gray-600 leading-relaxed">
              All service providers are verified and background-checked for your safety and peace of mind.
            </p>
          </div>

          {/* Local Empowerment */}
          <div className="text-center group">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-pink-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
                <Heart className="text-white" size={36} />
              </div>
            </div>
            <h3 className="text-2xl mb-4">Local Empowerment</h3>
            <p className="text-gray-600 leading-relaxed">
              Support your local community by connecting with nearby professionals and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}