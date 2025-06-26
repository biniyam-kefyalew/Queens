import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: ["+251 911 123 456", "+251 911 234 567"],
      description: "Call us during business hours"
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      details: ["info@queenscosmetics.et", "support@queenscosmetics.et"],
      description: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-600" />,
      title: "Head Office",
      details: ["Bole Road, Near Atlas Hotel", "Addis Ababa, Ethiopia"],
      description: "Visit our main office"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 5:00 PM"],
      description: "Ethiopian Time (EAT)"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "#",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "#",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      url: "#",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-6 w-6" />,
      url: "https://wa.me/251911123456",
      color: "text-green-600 hover:text-green-700"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'order', label: 'Order Support' },
    { value: 'partnership', label: 'Partnership/Business' },
    { value: 'complaint', label: 'Complaint/Feedback' },
    { value: 'media', label: 'Media/Press' }
  ];

  const branches = [
    {
      name: "Bole Branch",
      address: "Bole Road, Near Atlas Hotel",
      phone: "+251 911 123 456",
      hours: "9:00 AM - 8:00 PM"
    },
    {
      name: "Piazza Branch",
      address: "Churchill Avenue, Piazza",
      phone: "+251 911 234 567",
      hours: "8:30 AM - 7:30 PM"
    },
    {
      name: "Dire Dawa Branch",
      address: "Kezira Area, Main Road",
      phone: "+251 911 345 678",
      hours: "9:00 AM - 7:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team for any questions, support, or partnership opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+251 911 123 456"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                      <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors ${social.color}`}
                  >
                    {social.icon}
                    <span className="ml-3 font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-serif font-bold mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-sm opacity-90 mb-4">
                For urgent inquiries or immediate assistance, contact us directly:
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+251911123456"
                  className="flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">+251 911 123 456</span>
                </a>
                <a
                  href="https://wa.me/251911123456"
                  className="flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Visit Our Stores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover-lift">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{branch.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                    <span className="text-gray-600 text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 text-sm">{branch.hours}</span>
                  </div>
                </div>
                <button className="mt-4 w-full btn-outline text-sm">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Common Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your business hours?",
                answer: "Our head office is open Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 5:00 PM. Store hours may vary by location."
              },
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Do you offer product consultations?",
                answer: "Yes! Our beauty experts are available for free consultations at all our store locations and via phone/WhatsApp."
              },
              {
                question: "Can I visit your production facility?",
                answer: "We offer guided tours of our facilities for educational purposes and potential partners. Please contact us to schedule a visit."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;