import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Heart,
  Share2,
  ShoppingBag,
  Leaf,
  Award,
  Shield,
  MessageCircle,
  Send,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { branches } from "../data/mockData";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();
  // const [loading, setLoading] = useState(true);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestForm, setRequestForm] = useState({
    branchId: "",
  });
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "Argan Hair Oil",
    category: "Hair Care",
    price: "250 ETB",
    originalPrice: "300 ETB",
    rating: 4.8,
    reviews: 124,
    description:
      "Our premium Argan Hair Oil is sourced directly from Ethiopian argan trees and carefully processed to maintain its natural benefits. This luxurious oil deeply nourishes your hair, leaving it soft, shiny, and manageable.",
    benefits: [
      "Deep moisturization for dry and damaged hair",
      "Natural UV protection",
      "Reduces frizz and flyaways",
      "Promotes hair growth and scalp health",
      "100% natural and chemical-free",
    ],
    availableBranches: ["1", "3", "4"],
    ingredients: [
      "100% Pure Argan Oil",
      "Vitamin E (natural)",
      "Essential fatty acids",
      "Antioxidants",
    ],
    howToUse: [
      "Apply 2-3 drops to damp or dry hair",
      "Focus on mid-lengths and ends",
      "Style as usual or leave overnight for deep treatment",
      "Use 2-3 times per week for best results",
    ],
    images: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      "https://images.pexels.com/photos/3762588/pexels-photo-3762588.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
    ],
    specifications: {
      volume: "50ml",
      origin: "Ethiopia",
      shelfLife: "24 months",
      skinType: "All hair types",
    },
    availability: "In Stock",
    shipping: "Free shipping on orders over 500 ETB",
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Eucalyptus Hair Treatment",
      price: "280 ETB",
      image:
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Honey Glow Face Cream",
      price: "180 ETB",
      image:
        "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Coffee Scrub Exfoliant",
      price: "120 ETB",
      image:
        "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      rating: 4.8,
    },
  ];
  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setShowRequestForm(false);
    // Reset form after 3 seconds
    setTimeout(() => {
      setRequestSubmitted(false);
      setRequestForm({
        branchId: "",
      });
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-amber-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-amber-600"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-amber-600 font-medium mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-amber-600">
                  {product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Save 50 ETB
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-2 rounded-full">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm text-emerald-800">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2 bg-amber-50 px-3 py-2 rounded-full">
                  <Award className="h-4 w-4 text-amber-600" />
                  <span className="text-sm text-amber-800">
                    Premium Quality
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-full">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-800">
                    Dermatologist Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 btn-primary flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Heart className="h-6 w-6 text-gray-400" />
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="h-6 w-6 text-gray-400" />
                </button>
              </div>

              <div className="text-sm text-gray-600">
                <p className="mb-1">✓ {product.availability}</p>
                <p>📦 {product.shipping}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Available Branches */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t("availableAt")}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {product.availableBranches.map((branchId) => {
              const branch = branches.find((b) => b.id === branchId);
              if (!branch) return null;

              return (
                <div
                  key={branchId}
                  className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {branch.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{branch.address}</p>
                      <p className="text-gray-600 text-sm">{branch.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`#branch-detail/${branch.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-200"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Request Product Button */}
        <button
          onClick={() => setShowRequestForm(true)}
          className="w-full mt-4 bg-primary hover:bg-emerald-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          {t("requestProduct")}
        </button>
        {/* Request Form Modal */}
        {showRequestForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6 animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("requestProduct")}
              </h3>
              <p className="text-gray-600 mb-6">{t("whichBranch")}</p>

              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Branch *
                  </label>
                  <select
                    value={requestForm.branchId}
                    onChange={(e) =>
                      setRequestForm({
                        ...requestForm,
                        branchId: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                    <option value="">Select a branch</option>
                    {branches.map((branch) => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRequestForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    {t("close")}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Message */}
        {requestSubmitted && (
          <div className="fixed top-20 right-4 bg-emerald-500 text-white p-4 rounded-lg shadow-lg animate-slide-up z-50">
            <p className="font-medium">{t("requestSubmitted")}</p>
          </div>
        )}
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-amber-600 text-amber-600 py-4 px-1 text-sm font-medium">
                Benefits
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                Ingredients
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                How to Use
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 py-4 px-1 text-sm font-medium">
                Specifications
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-3">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  How to Use
                </h3>
                <ol className="space-y-3">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.id}`}
                className="group hover-lift"
              >
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-amber-600">
                        {relatedProduct.price}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
