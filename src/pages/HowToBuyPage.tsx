import React, { useState } from 'react';
import { ShoppingBag, MapPin, Smartphone, CreditCard, Truck, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const HowToBuyPage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState('store');

  const buyingMethods = [
    {
      id: 'store',
      title: 'Visit Our Stores',
      icon: <MapPin className="h-8 w-8 text-emerald-600" />,
      description: 'Shop in person at any of our branches across Ethiopia',
      benefits: ['Try products before buying', 'Expert consultation', 'Immediate purchase', 'No shipping fees'],
      steps: [
        'Find your nearest Queens branch',
        'Visit during business hours',
        'Browse and test products',
        'Get expert advice from our staff',
        'Pay and take your products home'
      ]
    },
    {
      id: 'phone',
      title: 'Order by Phone',
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      description: 'Call us to place your order with personal assistance',
      benefits: ['Personal service', 'Product recommendations', 'Easy ordering', 'Home delivery available'],
      steps: [
        'Call our customer service line',
        'Discuss your needs with our expert',
        'Choose your products and quantities',
        'Provide delivery details',
        'Pay via mobile money or bank transfer'
      ]
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Orders',
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      description: 'Order conveniently through WhatsApp messaging',
      benefits: ['Quick and easy', 'Share photos and questions', 'Order tracking', 'Instant communication'],
      steps: [
        'Message us on WhatsApp',
        'Send product photos or names',
        'Confirm quantities and delivery address',
        'Receive order confirmation and total',
        'Pay and track your order'
      ]
    },
    {
      id: 'online',
      title: 'Online Store (Coming Soon)',
      icon: <ShoppingBag className="h-8 w-8 text-purple-600" />,
      description: 'Full e-commerce website with online payment',
      benefits: ['24/7 shopping', 'Detailed product info', 'Customer reviews', 'Easy reordering'],
      status: 'coming-soon',
      steps: [
        'Browse our online catalog',
        'Add products to cart',
        'Secure online checkout',
        'Track your order status',
        'Receive products at your door'
      ]
    }
  ];

  const deliveryOptions = [
    {
      title: 'Addis Ababa Delivery',
      time: 'Same day or next day',
      cost: 'Free for orders over 500 ETB',
      description: 'Fast delivery within Addis Ababa city limits'
    },
    {
      title: 'Regional Cities',
      time: '2-3 business days',
      cost: '50-100 ETB depending on location',
      description: 'Delivery to Dire Dawa, Bahir Dar, Hawassa, Mekelle'
    },
    {
      title: 'Other Areas',
      time: '3-7 business days',
      cost: '100-200 ETB depending on distance',
      description: 'Delivery to other cities and towns across Ethiopia'
    }
  ];

  const paymentMethods = [
    { name: 'Cash on Delivery', icon: '💵', available: true },
    { name: 'Mobile Money', icon: '📱', available: true },
    { name: 'Bank Transfer', icon: '🏦', available: true },
    { name: 'Credit/Debit Cards', icon: '💳', available: false, note: 'Coming Soon' }
  ];

  const orderProcess = [
    {
      step: 1,
      title: 'Choose Products',
      description: 'Browse our catalog and select the products you want',
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      step: 2,
      title: 'Place Order',
      description: 'Contact us via your preferred method to place your order',
      icon: <Phone className="h-6 w-6" />
    },
    {
      step: 3,
      title: 'Confirm & Pay',
      description: 'Confirm your order details and make payment',
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Receive your products at your chosen location',
      icon: <Truck className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            How to Buy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Multiple convenient ways to purchase Queens products across Ethiopia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Buying Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Choose Your Preferred Way to Shop
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buyingMethods.map((method) => (
              <div 
                key={method.id}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover-lift cursor-pointer ${
                  method.status === 'coming-soon' 
                    ? 'border-gray-200 opacity-75' 
                    : selectedMethod === method.id 
                      ? 'border-purple-500' 
                      : 'border-gray-200 hover:border-purple-300'
                }`}
                onClick={() => method.status !== 'coming-soon' && setSelectedMethod(method.id)}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {method.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                      {method.status === 'coming-soon' && (
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="bg-purple-100 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {method.status !== 'coming-soon' && (
                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-colors ${
                        selectedMethod === method.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedMethod === method.id ? 'Selected Method' : 'Choose This Method'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Simple 4-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {orderProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-6">
                  {process.icon}
                </div>
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Contact Us to Order
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Orders</h3>
              <p className="text-gray-600 mb-4">Call us for personalized service</p>
              <a href="tel:+251911123456" className="text-blue-600 font-medium hover:text-blue-700">
                +251 911 123 456
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick and easy ordering</p>
              <a href="https://wa.me/251911123456" className="text-green-600 font-medium hover:text-green-700">
                Message Us
              </a>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Visit Stores</h3>
              <p className="text-gray-600 mb-4">Shop in person</p>
              <a href="/branches" className="text-emerald-600 font-medium hover:text-emerald-700">
                Find Locations
              </a>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Delivery Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover-lift">
                <div className="flex items-center mb-4">
                  <Truck className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Time:</span>
                    <span className="font-medium text-gray-900">{option.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost:</span>
                    <span className="font-medium text-gray-900">{option.cost}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Payment Methods
          </h2>
          
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className={`text-center p-4 rounded-lg ${method.available ? 'bg-gray-50' : 'bg-gray-100 opacity-60'}`}>
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{method.name}</h3>
                  {method.note && (
                    <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                      {method.note}
                    </span>
                  )}
                  {method.available && (
                    <div className="text-emerald-600 text-sm mt-2">✓ Available</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What is the minimum order amount?",
                answer: "There is no minimum order amount. You can order any quantity of products, though free delivery in Addis Ababa requires orders over 500 ETB."
              },
              {
                question: "How long does delivery take?",
                answer: "Delivery times vary by location: same day/next day in Addis Ababa, 2-3 days to regional cities, and 3-7 days to other areas."
              },
              {
                question: "Can I return products if I'm not satisfied?",
                answer: "Yes, we offer a 7-day return policy for unopened products in original packaging. Contact us within 7 days of delivery."
              },
              {
                question: "Do you offer bulk discounts?",
                answer: "Yes, we offer special pricing for bulk orders over 2000 ETB. Contact us directly to discuss bulk pricing."
              },
              {
                question: "Is cash on delivery available everywhere?",
                answer: "Cash on delivery is available in most areas we serve. Some remote locations may require advance payment."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Choose your preferred method and start shopping for natural Ethiopian beauty products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+251911123456"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call to Order
            </a>
            <a
              href="https://wa.me/251911123456"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;