import React, { useState } from 'react';
import { CreditCard, Smartphone, Building2, Shield, Clock, CheckCircle } from 'lucide-react';

const PaymentsPage: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const paymentMethods = [
    {
      id: 'cash',
      name: 'Cash Payment',
      description: 'Pay with cash at any of our store locations',
      icon: <Building2 className="h-8 w-8 text-emerald-600" />,
      benefits: ['No transaction fees', 'Immediate confirmation', 'Available at all branches'],
      howItWorks: [
        'Visit any Queens branch',
        'Select your products',
        'Pay with Ethiopian Birr',
        'Get your receipt and products'
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Money',
      description: 'Pay securely with mobile money services',
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      benefits: ['Convenient and fast', 'No need to carry cash', 'Available 24/7'],
      providers: ['M-Birr', 'HelloCash', 'EbirPay', 'Telebirr'],
      howItWorks: [
        'Choose mobile money at checkout',
        'Select your preferred provider',
        'Enter your mobile money PIN',
        'Receive confirmation SMS'
      ]
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer to our account',
      icon: <Building2 className="h-8 w-8 text-purple-600" />,
      benefits: ['Secure transactions', 'No cash handling', 'Perfect for large orders'],
      banks: ['Commercial Bank of Ethiopia', 'Dashen Bank', 'Bank of Abyssinia', 'Awash Bank'],
      howItWorks: [
        'Get our bank details from checkout',
        'Transfer money from your bank',
        'Send payment confirmation',
        'We process your order within 24 hours'
      ]
    },
    {
      id: 'card',
      name: 'Credit/Debit Cards',
      description: 'Pay with international cards (coming soon)',
      icon: <CreditCard className="h-8 w-8 text-red-600" />,
      benefits: ['International cards accepted', 'Secure payment processing', 'Instant confirmation'],
      status: 'coming-soon',
      howItWorks: [
        'Enter your card details',
        'Verify with 3D Secure',
        'Get instant confirmation',
        'Track your order online'
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      title: "Secure Transactions",
      description: "All payments are encrypted and protected"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Quick Processing",
      description: "Orders processed within 24 hours"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      title: "Order Confirmation",
      description: "Instant confirmation for all payments"
    }
  ];

  const faqItems = [
    {
      question: "How do I pay for my order?",
      answer: "You can pay using cash at our stores, mobile money, bank transfer, or credit/debit cards (coming soon). Choose the method that's most convenient for you."
    },
    {
      question: "Is mobile money payment secure?",
      answer: "Yes, all mobile money payments are processed through secure, encrypted channels. We work with trusted providers like M-Birr, HelloCash, and Telebirr."
    },
    {
      question: "Can I pay in installments?",
      answer: "Currently, we require full payment upfront. However, we're working on introducing installment payment options for orders above 1000 ETB."
    },
    {
      question: "What if my payment fails?",
      answer: "If your payment fails, you'll receive an immediate notification. You can retry the payment or choose a different payment method. Our customer service team is also available to help."
    },
    {
      question: "Do you accept foreign currencies?",
      answer: "Currently, we only accept Ethiopian Birr (ETB). However, international credit/debit cards will be accepted once our card payment system is live."
    },
    {
      question: "How long does it take to process my order?",
      answer: "Cash payments are processed immediately. Mobile money and bank transfers are processed within 24 hours of payment confirmation."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Payment Options
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Choose from multiple secure payment methods designed for Ethiopian customers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Payment Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            How You Can Pay
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentMethods.map((method) => (
              <div 
                key={method.id}
                className={`bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover-lift ${
                  method.status === 'coming-soon' 
                    ? 'border-gray-200 opacity-75' 
                    : selectedPayment === method.id 
                      ? 'border-amber-500' 
                      : 'border-gray-200 hover:border-amber-300'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {method.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{method.name}</h3>
                      {method.status === 'coming-soon' && (
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
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

                  {/* Providers/Banks */}
                  {method.providers && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Supported Providers</h4>
                      <div className="flex flex-wrap gap-2">
                        {method.providers.map((provider, index) => (
                          <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {provider}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {method.banks && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Supported Banks</h4>
                      <div className="flex flex-wrap gap-2">
                        {method.banks.map((bank, index) => (
                          <span key={index} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                            {bank}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* How it Works */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
                    <ol className="space-y-2">
                      {method.howItWorks.map((step, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {method.status !== 'coming-soon' && (
                    <button
                      onClick={() => setSelectedPayment(method.id)}
                      className={`w-full py-3 rounded-lg font-medium transition-colors ${
                        selectedPayment === method.id
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPayment === method.id ? 'Selected' : 'Select This Method'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Your Security is Our Priority
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Account Details */}
        <div className="mb-16 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Bank Transfer Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Commercial Bank of Ethiopia</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Account Name:</strong> Queens Cosmetics PLC</p>
                <p><strong>Account Number:</strong> 1000123456789</p>
                <p><strong>Branch:</strong> Bole Branch</p>
                <p><strong>Swift Code:</strong> CBETETAA</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Dashen Bank</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Account Name:</strong> Queens Cosmetics PLC</p>
                <p><strong>Account Number:</strong> 2000123456789</p>
                <p><strong>Branch:</strong> Piazza Branch</p>
                <p><strong>Swift Code:</strong> DASHETAA</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> Please include your order number in the payment reference and send us the payment confirmation via WhatsApp or email.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-amber-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Need Help with Payment?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Our customer service team is here to help you with any payment questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+251911123456"
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Call: +251 911 123 456
            </a>
            <a
              href="mailto:payments@queenscosmetics.et"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-colors"
            >
              Email: payments@queenscosmetics.et
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;