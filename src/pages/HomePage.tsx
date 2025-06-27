import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Leaf,
  Award,
  Users,
  ArrowRight,
  Star,
  MapPin,
} from "lucide-react";

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Fresh & Quality Products",
      description:
        "Daily fresh produce and high-quality items sourced from trusted suppliers",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-secondary" />,
      title: "One-Stop Shopping",
      description:
        "Everything you need under one roof - from groceries to household items",
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Modern Facilities",
      description:
        "Spacious, well-organized stores with clean and inviting atmosphere",
    },
    {
      icon: <Users className="h-8 w-8 text-light-green" />,
      title: "Exceptional Service",
      description:
        "Knowledgeable staff ready to assist with your shopping needs",
    },
  ];

  const productCategories = [
    {
      title: "Fresh Produce",
      description: "Fresh vegetables and fruits daily",
      image:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "fresh-produce",
    },
    {
      title: "Meat & Dairy",
      description: "Quality meats and dairy products",
      image:
        "https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "meat-dairy",
    },
    {
      title: "Bakery",
      description: "Freshly baked bread and pastries",
      image:
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "bakery",
    },
    {
      title: "Beverages",
      description: "Local and international drinks",
      image:
        "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "beverages",
    },
    {
      title: "Personal Care",
      description: "Cosmetics and hygiene products",
      image:
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "personal-care",
    },
    {
      title: "Household Items",
      description: "Everything for your home needs",
      image:
        "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      category: "household",
    },
  ];

  const testimonials = [
    {
      name: "Meron Tadesse",
      location: "Nani Branch Customer",
      text: "Queen's Supermarket has everything I need in one place. The quality is excellent and the staff is always helpful.",
      rating: 5,
    },
    {
      name: "Sara Mohammed",
      location: "Stadium Branch Customer",
      text: "I love shopping here! Fresh produce, clean environment, and great prices. My family's favorite supermarket.",
      rating: 5,
    },
    {
      name: "Helen Gebru",
      location: "Summit Branch Customer",
      text: "The best supermarket in Addis Ababa. Modern facilities and wide variety of products. Highly recommended!",
      rating: 5,
    },
  ];

  const featuredBranches = [
    {
      name: "Nani Branch",
      address: "Nani Area, Addis Ababa",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Stadium Branch",
      address: "Stadium Area, Addis Ababa",
      image:
        "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      name: "Summit Branch",
      address: "Summit Area, Addis Ababa",
      image:
        "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in text-white">
            Quality Products.
            <br />
            <span className="text-secondary">Exceptional Service.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up">
            Your trusted one-stop shopping destination in Ethiopia. Fresh
            produce, quality products, and modern facilities across 14
            convenient locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/products"
              className="bg-primary text-lg px-10 py-4 rounded-full"
            >
              Shop Now
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/branches"
              className="border border-primary rounded-full text-lg px-10 py-4 bg-white bg-opacity-10 backdrop-blur-sm text-white hover:bg-white hover:text-primary"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Why Choose Queen's Supermarket?
            </h2>
            <p className="text-xl text-muted-text max-w-2xl mx-auto">
              Experience the perfect blend of quality, convenience, and
              exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover-lift bg-highlight"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                About Queen's Supermarket
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Queen's Supermarket, owned by MIDROC Technology Group, is
                Ethiopia's premier retail destination offering a comprehensive
                shopping experience. We pride ourselves on providing
                high-quality products that cater to diverse customer needs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With 14 strategically located branches across Addis Ababa, we
                offer spacious, well-organized stores with modern facilities and
                a clean, inviting atmosphere that enhances your shopping
                experience.
              </p>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Queen's Supermarket interior"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-sm text-muted-text">Part of</p>
                <p className="text-xl font-bold text-primary">MIDROC Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-muted-text">
              Everything you need for your daily life, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.category}`}
                className="group hover-lift bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-text mb-4">{category.description}</p>
                  <span className="text-primary font-medium inline-flex items-center group-hover:text-secondary">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Branches */}
      <section className="py-20 bg-highlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Visit Our Stores
            </h2>
            <p className="text-xl text-muted-text">
              14 convenient locations across Addis Ababa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredBranches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
              >
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {branch.name}
                  </h3>
                  <div className="flex items-center text-muted-text">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{branch.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/branches"
              className="btn-primary inline-flex items-center"
            >
              View All Branches
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-text">
              Join thousands of satisfied customers across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-highlight p-8 rounded-2xl shadow-lg hover-lift"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-text text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Shop with Queen's?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Visit any of our 14 locations or learn more about our products and
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/branches"
              className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              Find a Store Near You
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
