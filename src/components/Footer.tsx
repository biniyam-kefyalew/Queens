import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-serif font-bold">Queen's Supermarket</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted one-stop shopping destination in Ethiopia. Quality products, exceptional service, and modern facilities across multiple locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Products</Link></li>
              <li><Link to="/branches" className="text-gray-300 hover:text-secondary transition-colors">Branches</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/how-to-buy" className="text-gray-300 hover:text-secondary transition-colors">How to Shop</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=fresh-produce" className="text-gray-300 hover:text-secondary transition-colors">Fresh Produce</Link></li>
              <li><Link to="/products?category=meat-dairy" className="text-gray-300 hover:text-secondary transition-colors">Meat & Dairy</Link></li>
              <li><Link to="/products?category=bakery" className="text-gray-300 hover:text-secondary transition-colors">Bakery</Link></li>
              <li><Link to="/products?category=beverages" className="text-gray-300 hover:text-secondary transition-colors">Beverages</Link></li>
              <li><Link to="/products?category=household" className="text-gray-300 hover:text-secondary transition-colors">Household Items</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Addis Ababa, Ethiopia<br />
                  14 locations across the city
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+251 911 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@queensupermarket.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Queen's Supermarket - MIDROC Technology Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;