import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, Clock, Navigation, Star, Filter } from "lucide-react";
import { BranchCardSkeleton } from "../components/Skeleton";
import { useTranslation } from "react-i18next";
import Map from "../components/Map";
import { Branch, branches } from "../data/mockData";

const BranchesPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedArea, setSelectedArea] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const areas = ["all", "central", "north", "south", "east", "west"];
  const navigation = useNavigate();
  const filteredBranches = branches.filter((branch) => {
    const matchesArea = selectedArea === "all" || branch.area === selectedArea;
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesSearch;
  });
  const handleGetDirections = (branch: any) => {
    console.log({ branch });

    const { lat, lng } = branch.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    window.open(url, "_blank");
  };
  const getAreaName = (areaId: string) => {
    const areaNames: { [key: string]: string } = {
      all: "All Areas",
      central: "Central Addis",
      north: "North Addis",
      south: "South Addis",
      east: "East Addis",
      west: "West Addis",
    };
    return areaNames[areaId] || areaId;
  };

  if (loading) {
    return (
      <div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t("ourBranches")}
              </h1>
              <p className="text-xl text-gray-600">
                Find our convenient locations near you
              </p>
            </div>

            {/* Map Skeleton */}
            <div className="mb-12">
              <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            {/* Branch Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(4)].map((_, index) => (
                <BranchCardSkeleton key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-16 bg-background">
      {/* Hero Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-primary md:text-5xl font-serif font-bold mb-4">
            Our Branches
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Visit any of our 14 convenient locations across Addis Ababa for
            quality products and exceptional service
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Locations
            </h2>
            <Map
              center={[9.03, 38.74]}
              zoom={12}
              branches={branches}
              height="400px"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by branch name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {getAreaName(area)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-text">
            Found {filteredBranches.length} branch
            {filteredBranches.length !== 1 ? "es" : ""}
            {selectedArea !== "all" && ` in ${getAreaName(selectedArea)}`}
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white h-full rounded-2xl shadow-sm hover-lift overflow-hidden"
            >
              <div className="relative">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 space-y-2">
                  {branch.isPopular && (
                    <span className="bg-secondary text-primary text-xs px-3 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                  {branch.isNew && (
                    <span className="bg-light-green text-primary text-xs px-3 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 ">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {branch.name}
                    </h3>
                    <div className="flex items-center text-muted-text">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{branch.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{branch.rating}</span>
                    </div>
                    <span className="text-sm text-muted-text">
                      ({branch.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-text">
                    <Phone className="h-4 w-4 mr-3" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-start text-muted-text">
                    <Clock className="h-4 w-4 mr-3 mt-0.5" />
                    <div className="text-sm">
                      <div>Mon-Fri: {branch.hours.weekdays}</div>
                      <div>Sat: {branch.hours.saturday}</div>
                      <div>Sun: {branch.hours.sunday}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.services.map((service, index) => (
                      <span
                        key={index}
                        className="bg-highlight text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex mt-auto space-x-3">
                  <Link
                    to={`/branches/${branch.id}`}
                    className="flex-1 bg-primary text-center text-white rounded-3xl py-2 px-4"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleGetDirections(branch)}
                    className="border border-primary rounded-3xl py-2 px-4 flex items-center px-4"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBranches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-text text-lg mb-4">
              No branches found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedArea("all");
                setSearchTerm("");
              }}
              className="text-primary hover:text-secondary font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Contact us for more information about our locations and services, or
            to suggest a new branch location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
