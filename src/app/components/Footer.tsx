import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-white py-16 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <span className="text-2xl tracking-tight text-[#00A8E8] inline-block mb-4">
              Zynexx
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted local service platform. Connecting communities, empowering locals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Helperr4U</li>
              <li className="hover:text-white transition-colors cursor-pointer">Kirana4U</li>
              <li className="hover:text-white transition-colors cursor-pointer">Service4U</li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm mb-6">
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors mt-0.5 flex-shrink-0">
                  <Phone size={16} />
                </div>
                <a href="tel:+917073448187" className="hover:text-white transition-colors">
                  +91 7073448187
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors mt-0.5 flex-shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:contect@zynexxindia.com" className="hover:text-white transition-colors">
                  contect@zynexxindia.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors mt-0.5 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="hover:text-white transition-colors">
                  55/207, Rajat Path, Mansarovar, Jaipur 302020
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2.5 rounded-lg hover:bg-gradient-to-br hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Zynexx Platform. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}