import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, Search, Star, Heart } from "lucide-react";

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "fresh-produce", name: "Fresh Produce" },
    { id: "meat-dairy", name: "Meat & Dairy" },
    { id: "bakery", name: "Bakery" },
    { id: "beverages", name: "Beverages" },
    { id: "snacks", name: "Snacks" },
    { id: "personal-care", name: "Personal Care" },
    { id: "household", name: "Household Items" },
    { id: "international", name: "International Foods" },
  ];

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "fresh-produce",
      price: "25 ETB/kg",
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Fresh, locally sourced tomatoes perfect for cooking",
      isNew: true,
    },
    {
      id: 2,
      name: "Premium Beef",
      category: "meat-dairy",
      price: "450 ETB/kg",
      rating: 4.9,
      reviews: 89,
      image:
        "https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "High-quality fresh beef from local farms",
      isBestseller: true,
    },
    {
      id: 3,
      name: "Fresh Bread",
      category: "bakery",
      price: "15 ETB",
      rating: 4.7,
      reviews: 67,
      image:
        "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Freshly baked daily in our in-store bakery",
    },
    {
      id: 4,
      name: "Coca Cola",
      category: "beverages",
      price: "18 ETB",
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Classic Coca Cola soft drink",
    },
    {
      id: 5,
      name: "Local Honey",
      category: "international",
      price: "120 ETB",
      rating: 4.8,
      reviews: 203,
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Pure Ethiopian honey from local beekeepers",
      isNew: true,
    },
    {
      id: 6,
      name: "Shampoo",
      category: "personal-care",
      price: "85 ETB",
      rating: 4.5,
      reviews: 78,
      image:
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Premium hair care shampoo for all hair types",
    },
    {
      id: 7,
      name: "Cleaning Supplies",
      category: "household",
      price: "45 ETB",
      rating: 4.4,
      reviews: 91,
      image:
        "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Complete household cleaning solution",
      isBestseller: true,
    },
    {
      id: 8,
      name: "Potato Chips",
      category: "snacks",
      price: "22 ETB",
      rating: 4.3,
      reviews: 134,
      image:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Crispy potato chips in various flavors",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="text-xl text-muted-text">
            Discover our wide range of quality products for all your daily needs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-highlight text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-text">
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" && (
              <span>
                {" "}
                in {categories.find((c) => c.id === selectedCategory)?.name}
              </span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover-lift overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-light-green text-primary text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="bg-secondary text-primary text-xs px-2 py-1 rounded-full font-medium">
                      Bestseller
                    </span>
                  )}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-text text-sm mb-3">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-text text-lg">
              No products found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              className="mt-4 text-primary hover:text-secondary font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
