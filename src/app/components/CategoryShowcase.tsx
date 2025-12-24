import { Users, ChefHat, Baby, HeartPulse, Car, ShoppingBag, Sparkles, Music } from 'lucide-react';

export function CategoryShowcase() {
  const categories = [
    {
      icon: Users,
      label: 'Maid Services',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-indigo-600/90 to-indigo-800/90'
    },
    {
      icon: ChefHat,
      label: 'Professional Cooks',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-purple-600/90 to-purple-800/90'
    },
    {
      icon: Baby,
      label: 'Nanny & Childcare',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-pink-600/90 to-pink-800/90'
    },
    {
      icon: HeartPulse,
      label: 'Elder Care',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-green-600/90 to-green-800/90'
    },
    {
      icon: Car,
      label: 'Driver Services',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-blue-600/90 to-blue-800/90'
    },
    {
      icon: ShoppingBag,
      label: 'Grocery Delivery',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-orange-600/90 to-orange-800/90'
    },
    {
      icon: Sparkles,
      label: 'Makeup Artists',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      color: 'from-rose-600/90 to-rose-800/90'
    },
    {
      icon: Music,
      label: 'Event Services',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-violet-600/90 to-violet-800/90'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm mb-4">
            Popular Categories
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            What are you looking for today?
          </h2>
          <p className="text-xl text-gray-600">
            Explore our wide range of trusted services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                {/* Background Image */}
                <img 
                  src={category.image}
                  alt={category.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
               
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white text-lg font-medium">{category.label}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
