import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Star,
  Navigation,
  Calendar,
  Users,
  Gift,
  Camera,
} from "lucide-react";
import Map from "../components/Map";

const BranchDetailPage: React.FC = () => {
  const { id } = useParams();

  // Mock branch data - in a real app, this would come from an API
  const branch = {
    id: 1,
    name: "Nani Branch",
    area: "Central Addis Ababa",
    address: "Nani Area, Addis Ababa, Ethiopia",
    phone: "+251 911 123 456",
    email: "nani@queensupermarket.et",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: [
      {
        name: "Fresh Produce Section",
        description: "Daily fresh vegetables and fruits from local farms",
        icon: "🥬",
      },
      {
        name: "Quality Meat Counter",
        description: "Fresh beef, poultry, and other premium meats",
        icon: "🥩",
      },
      {
        name: "In-Store Bakery",
        description: "Freshly baked bread, pastries, and cakes daily",
        icon: "🍞",
      },
      {
        name: "Pharmacy Services",
        description: "Licensed pharmacy with prescription and OTC medications",
        icon: "💊",
      },
      {
        name: "ATM Services",
        description: "24/7 ATM access for your banking needs",
        icon: "🏧",
      },
      {
        name: "Customer Parking",
        description: "Free parking space for all customers",
        icon: "🚗",
      },
    ],
    rating: 4.8,
    reviews: 324,
    images: [
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    ],
    manager: {
      name: "Meron Tadesse",
      title: "Store Manager",
      experience: "8 years in retail management",
      image:
        "https://images.pexels.com/photos/3762588/pexels-photo-3762588.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    features: [
      "Air Conditioned Store",
      "Free WiFi",
      "Wheelchair Accessible",
      "Baby Changing Facilities",
      "Shopping Carts Available",
      "Payment: Cash, Cards, Mobile Money",
    ],
    coordinates: [9.0054, 38.7636] as [number, number],
    specialOffers: [
      {
        title: "Weekend Fresh Produce Sale",
        date: "Every Weekend",
        time: "All Day",
        description: "20% off on all fresh vegetables and fruits",
      },
      {
        title: "Bakery Happy Hour",
        date: "Daily",
        time: "4:00 PM - 6:00 PM",
        description: "Buy 2 get 1 free on selected bakery items",
      },
    ],
  };

  const customerReviews = [
    {
      name: "Sara Mohammed",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent supermarket with great variety of products. The fresh produce section is outstanding and the staff is very helpful.",
      verified: true,
    },
    {
      name: "Helen Gebru",
      rating: 5,
      date: "1 month ago",
      comment:
        "My go-to supermarket for weekly shopping. Clean, well-organized, and competitive prices. The bakery section is amazing!",
      verified: true,
    },
    {
      name: "Almaz Tesfaye",
      rating: 4,
      date: "2 months ago",
      comment:
        "Good selection of products and convenient location. The meat counter always has fresh quality cuts. Parking is a plus.",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/branches"
          className="inline-flex items-center text-primary hover:text-secondary mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to All Branches
        </Link>
        {/* Interactive Map */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-6">
            Store Location
          </h2>
          <div className="rounded-2xl relative text-center">
            <Map
              center={branch.coordinates}
              zoom={20}
              branches={[branch]}
              popUp={false}
              height="400px"
              className="w-full !relative z-20"
            />
            {/* Header */}
            <div className="absolute bottom-0 left-0 bg-white/70 !z-50 p-6 w-full">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between ">
                <div>
                  <h1 className="text-4xl font-serif font-bold text-primary text-start mb-2">
                    {branch.name}
                  </h1>
                  <div className="flex items-center text-muted-text mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(branch.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-muted-text">
                      {branch.rating} ({branch.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6 lg:mt-0">
                  <button className="text-white px-8 py-3 rounded-full font-medium hover:bg-[#002d1a] transition-all duration-300 hover:shadow-lg bg-primary flex items-center">
                    <Navigation className="h-5 w-5 mr-2" />
                    Get Directions
                  </button>
                  <button className="text-primary px-8 py-3 rounded-full font-medium border border-primary flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
          <div className="lg:col-span-2">
            <img
              src={branch.images[0]}
              alt={`${branch.name} interior`}
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {branch.images.slice(1, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${branch.name} ${index + 2}`}
                className="w-full h-44 lg:h-44 object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Store Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Store Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-muted-text">{branch.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <div className="text-muted-text text-sm">
                        <p>Mon-Fri: {branch.hours.weekdays}</p>
                        <p>Sat: {branch.hours.saturday}</p>
                        <p>Sun: {branch.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">
                    Store Features
                  </h3>
                  <ul className="space-y-2">
                    {branch.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-muted-text text-sm"
                      >
                        <span className="text-secondary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {branch.services.map((service, index) => (
                  <div key={index} className="bg-highlight p-6 rounded-2xl">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{service.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-muted-text text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Special Offers
              </h2>
              <div className="space-y-4">
                {branch.specialOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6"
                  >
                    <div className="flex items-start">
                      <Gift className="h-6 w-6 text-primary mr-4 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {offer.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {offer.date} • {offer.time}
                        </p>
                        <p className="text-muted-text">{offer.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Customer Reviews
              </h2>
              <div className="space-y-6">
                {customerReviews.map((review, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                          {review.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="flex items-center">
                            <p className="font-medium text-gray-900">
                              {review.name}
                            </p>
                            {review.verified && (
                              <span className="ml-2 text-xs bg-success text-primary px-2 py-1 rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-text">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Store Manager */}
            <div className="bg-highlight p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">
                Meet Your Store Manager
              </h3>
              <div className="flex items-center mb-4">
                <img
                  src={branch.manager.image}
                  alt={branch.manager.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {branch.manager.name}
                  </p>
                  <p className="text-sm text-muted-text">
                    {branch.manager.title}
                  </p>
                  <p className="text-sm text-muted-text">
                    {branch.manager.experience}
                  </p>
                </div>
              </div>
              <button className="w-full btn-outline text-sm">
                Contact Manager
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full border border-primary  rounded-full flex  px-8 py-4 text-sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  <span className="mx-auto">Get Directions</span>
                </button>
                <button className="w-full border border-primary  rounded-full flex  px-8 py-4 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="mx-auto">Call Store</span>
                </button>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-success p-6 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-4">Store Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-text">Monday - Friday</span>
                  <span className="font-medium">{branch.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text">Saturday</span>
                  <span className="font-medium">{branch.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-text">Sunday</span>
                  <span className="font-medium">{branch.hours.sunday}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-light-green rounded-lg">
                <p className="text-primary text-sm font-medium">Open Now</p>
                <p className="text-primary text-xs">Closes at 10:00 PM today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetailPage;
