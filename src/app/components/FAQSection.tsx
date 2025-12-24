import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'Simply browse our services, select the one you need, choose your location and preferred time, and confirm your booking. You can do this through our mobile app or website in just a few clicks.'
    },
    {
      question: 'Are service providers verified?',
      answer: 'Yes, absolutely! All our service providers undergo thorough background verification, including identity checks, police verification, and skill assessments. We prioritize your safety and ensure only trusted professionals join our platform.'
    },
    {
      question: 'Can I choose nearby kirana stores?',
      answer: 'Yes! Our Kirana4U service connects you with local kirana stores in your area. You can browse available stores, compare prices, and choose your preferred shop for delivery.'
    },
    {
      question: 'Is open/loose grocery available?',
      answer: 'Yes, we support both packaged and loose/open items. You can order items like rice, lentils, spices, and other groceries in the quantity you need, just like you would in a traditional kirana store.'
    },
    {
      question: 'What if I am not satisfied with the service?',
      answer: 'Customer satisfaction is our priority. If you\'re not satisfied with any service, please contact our 24/7 support team immediately. We have a quality assurance process and will work to resolve your concerns, including rebooking with a different provider if needed.'
    },
    {
      question: 'Do you support cash and online payments?',
      answer: 'Yes, we support multiple payment methods including cash on delivery, UPI, credit/debit cards, net banking, and mobile wallets. You can choose your preferred payment method during checkout.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-2xl px-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
