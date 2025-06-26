export interface Branch {
  id: number | string;
  name: string;
  address: string;
  phone: string;
  coordinates: [number, number];
  image?: string;
  description?: string;
  openingHours?: string;
  paymentMethods?: string[];
  area?: string;
  hours?: any;
  services: any[];
  rating?: any;
  reviews?: any;
  isPopular?: any;
  isNew?: any;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  availableBranches: string[];
}

export const branches: Branch[] = [
  {
    id: 1,
    name: "Nani Branch",
    area: "central",
    address: "Nani Area, Addis Ababa",
    phone: "+251 911 123 456",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "Pharmacy", "ATM"],
    rating: 4.8,
    reviews: 324,
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    isPopular: true,
    coordinates: [9.0054, 38.7636],
  },
  {
    id: 2,
    name: "Loli Branch",
    area: "north",
    address: "Loli Area, Addis Ababa",
    phone: "+251 911 234 567",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "Home Delivery"],
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0365, 38.7578],
  },
  {
    id: 3,
    name: "Rukia Branch",
    area: "east",
    address: "Rukia Area, Addis Ababa",
    phone: "+251 911 345 678",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "International Foods"],
    rating: 4.7,
    reviews: 267,
    image:
      "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [8.9951, 38.8063],
  },
  {
    id: 4,
    name: "Rihab Branch",
    area: "south",
    address: "Rihab Area, Addis Ababa",
    phone: "+251 911 456 789",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "Pharmacy"],
    rating: 4.9,
    reviews: 456,
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    isNew: true,
    coordinates: [8.9542, 38.7615],
  },
  {
    id: 5,
    name: "Sarah Branch",
    area: "west",
    address: "Sarah Area, Addis Ababa",
    phone: "+251 911 567 890",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery"],
    rating: 4.5,
    reviews: 178,
    image:
      "https://images.pexels.com/photos/3762867/pexels-photo-3762867.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0046, 38.7162],
  },
  {
    id: 6,
    name: "Huda Branch",
    area: "central",
    address: "Huda Area, Addis Ababa",
    phone: "+251 911 678 901",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "ATM", "Parking"],
    rating: 4.4,
    reviews: 292,
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0096, 38.7536],
  },
  {
    id: 7,
    name: "Amoudi Branch",
    area: "north",
    address: "Amoudi Area, Addis Ababa",
    phone: "+251 911 789 012",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "Pharmacy"],
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0465, 38.7678],
  },
  {
    id: 8,
    name: "Fetum Branch",
    area: "east",
    address: "Fetum Area, Addis Ababa",
    phone: "+251 911 890 123",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Home Delivery"],
    rating: 4.3,
    reviews: 156,
    image:
      "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [8.9851, 38.8163],
  },
  {
    id: 9,
    name: "Stadium Branch",
    area: "central",
    address: "Stadium Area, Addis Ababa",
    phone: "+251 911 901 234",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "ATM", "Parking"],
    rating: 4.8,
    reviews: 389,
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    isPopular: true,
    coordinates: [9.0154, 38.7436],
  },
  {
    id: 10,
    name: "Gurd Shola Branch",
    area: "south",
    address: "Gurd Shola Area, Addis Ababa",
    phone: "+251 911 012 345",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "International Foods"],
    rating: 4.5,
    reviews: 234,
    image:
      "https://images.pexels.com/photos/3762867/pexels-photo-3762867.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [8.9342, 38.7715],
  },
  {
    id: 11,
    name: "Torhailoch Branch",
    area: "west",
    address: "Torhailoch Area, Addis Ababa",
    phone: "+251 911 123 456",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery"],
    rating: 4.4,
    reviews: 167,
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0146, 38.7062],
  },
  {
    id: 12,
    name: "Mekanisa Branch",
    area: "south",
    address: "Mekanisa Area, Addis Ababa",
    phone: "+251 911 234 567",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Pharmacy", "ATM"],
    rating: 4.6,
    reviews: 298,
    image:
      "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [8.9242, 38.7815],
  },
  {
    id: 13,
    name: "Summit Branch",
    area: "north",
    address: "Summit Area, Addis Ababa",
    phone: "+251 911 345 678",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: ["Fresh Produce", "Meat Counter", "Bakery", "Home Delivery"],
    rating: 4.7,
    reviews: 345,
    image:
      "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    coordinates: [9.0565, 38.7778],
  },
  {
    id: 14,
    name: "Keranio Plaza Branch",
    area: "west",
    address: "Kolfe Keranio District, Addis Ababa",
    phone: "+251 911 456 789",
    hours: {
      weekdays: "7:00 AM - 10:00 PM",
      saturday: "7:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    services: [
      "Fresh Produce",
      "Meat Counter",
      "Bakery",
      "Pharmacy",
      "ATM",
      "Parking",
    ],
    rating: 4.9,
    reviews: 412,
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    isNew: true,
    coordinates: [8.9946, 38.6962],
  },
];
export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    availableBranches: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 299.99,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Feature-rich smartwatch with health monitoring",
    category: "Electronics",
    availableBranches: ["1", "2", "4"],
  },
  {
    id: "3",
    name: "Coffee Maker",
    price: 149.99,
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Automatic coffee maker with programmable features",
    category: "Home & Kitchen",
    availableBranches: ["1", "3", "4"],
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Comfortable running shoes for all terrains",
    category: "Sports & Fitness",
    availableBranches: ["2", "3", "4"],
  },
  {
    id: "5",
    name: "Laptop Backpack",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Durable backpack designed for laptops and daily use",
    category: "Accessories",
    availableBranches: ["1", "2", "3", "4"],
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Portable bluetooth speaker with excellent sound quality",
    category: "Electronics",
    availableBranches: ["1", "2"],
  },
];
