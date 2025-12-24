import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homemaker, Mumbai',
      content: 'Finding a reliable cook was always difficult. Zynexx made it so easy! The verification process gives me complete peace of mind.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner, Delhi',
      content: 'I love the Kirana4U service. Fresh groceries from my local shop delivered in minutes. Supporting local has never been this convenient!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    },
    {
      name: 'Anita Desai',
      role: 'Working Professional, Bangalore',
      content: 'Booked a makeup artist for my wedding through Service4UU. Professional service and transparent pricing. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=150'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Loved by thousands
            <span className="block text-indigo-600 mt-2">across India</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Quote className="text-white" size={18} />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <div className="text-gray-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
