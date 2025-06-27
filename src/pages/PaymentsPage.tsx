import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  CreditCard,
  Smartphone,
  Banknote,
  Building,
  Shield,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Skeleton from "../components/Skeleton";

const PaymentsPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const paymentMethods = [
    {
      icon: Banknote,
      title: "Cash",
      description: "Traditional cash payments accepted at all store locations",
      features: [
        "Immediate payment processing",
        "No additional fees",
        "Available at all locations",
        "Instant receipt generation",
      ],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: CreditCard,
      title: "Credit & Debit Cards",
      description: "Secure card payments with major credit and debit cards",
      features: [
        "Visa, Mastercard, American Express",
        "Contactless payments supported",
        "Secure chip and PIN technology",
        "Instant authorization",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description: "Quick and convenient mobile payment solutions",
      features: [
        "Apple Pay and Google Pay",
        "Samsung Pay supported",
        "QR code payments",
        "Touch and Face ID security",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfers for larger purchases",
      features: [
        "Suitable for high-value items",
        "Secure bank-to-bank transfer",
        "Same-day processing available",
        "Lower fees for large amounts",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Processing",
      description:
        "All payments are processed through secure, encrypted channels",
    },
    {
      icon: CheckCircle,
      title: "Fraud Protection",
      description: "Advanced fraud detection and prevention systems",
    },
    {
      icon: AlertCircle,
      title: "Data Privacy",
      description: "Your payment information is never stored or shared",
    },
  ];

  if (loading) {
    return (
      <div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Skeleton variant="text" className="w-64 h-10 mx-auto mb-4" />
              <Skeleton variant="text" className="w-96 h-6 mx-auto" />
            </div>

            {/* Payment Methods Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-16 h-16" variant="circular" />
                    <div className="space-y-2 flex-1">
                      <Skeleton variant="text" className="w-32 h-6" />
                      <Skeleton variant="text" className="w-full h-4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} variant="text" className="w-full h-4" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Features Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="text-center space-y-4">
                  <Skeleton className="w-16 h-16 mx-auto" variant="circular" />
                  <Skeleton variant="text" className="w-32 h-6 mx-auto" />
                  <Skeleton className="w-full h-16" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section id="payments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("payments")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer multiple secure and convenient payment options to make
              your shopping experience as smooth as possible at all our store
              locations.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              >
                <div
                  className={`bg-gradient-to-r ${method.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <method.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white font-bold">
                        {method.title}
                      </h3>
                      <p className="text-white/90">{method.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {method.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Security Section */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Payment Security
              </h2>
              <p className="text-xl text-gray-600">
                Your security and privacy are our top priorities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Process */}
          <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">How Payment Works</h2>
              <p className="text-xl text-blue-100">
                Simple and secure payment process at all our locations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold">Select Products</h3>
                <p className="text-blue-100">
                  Choose your items and proceed to checkout at any store
                  location
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold">Choose Payment Method</h3>
                <p className="text-blue-100">
                  Select from our available payment options that suit you best
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold">Complete Purchase</h3>
                <p className="text-blue-100">
                  Secure payment processing and instant receipt generation
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Payment FAQs
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our payment options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are there any payment fees?
                </h3>
                <p className="text-gray-600">
                  Cash and debit card payments have no additional fees. Credit
                  card payments may have minimal processing fees depending on
                  the card type and amount.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is my payment information secure?
                </h3>
                <p className="text-gray-600">
                  Yes, all payment information is processed through secure,
                  encrypted channels. We never store your payment details on our
                  systems.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I get a refund?
                </h3>
                <p className="text-gray-600">
                  Yes, refunds are processed using the original payment method.
                  Please see our return policy for specific terms and
                  conditions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you accept international cards?
                </h3>
                <p className="text-gray-600">
                  Yes, we accept major international credit and debit cards at
                  all our locations, subject to your bank's international
                  transaction policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;
