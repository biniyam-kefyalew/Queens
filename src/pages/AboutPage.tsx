import React from "react";
import { Heart, Users, Leaf, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: "Natural & Sustainable",
      description:
        "We use only the finest natural ingredients sourced responsibly from Ethiopian farms and communities.",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Made with Love",
      description:
        "Every product is crafted with care by skilled artisans who understand the beauty traditions of Ethiopia.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community First",
      description:
        "We empower local women and communities, creating jobs and supporting traditional knowledge keepers.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Quality Excellence",
      description:
        "Our products meet international quality standards while maintaining authentic Ethiopian heritage.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Queens Cosmetics was founded with a vision to bring Ethiopian beauty traditions to the world.",
    },
    {
      year: "2019",
      title: "First Store Opening",
      description:
        "Our flagship store opened in Addis Ababa, serving the local community with natural beauty products.",
    },
    {
      year: "2020",
      title: "Product Line Expansion",
      description:
        "We expanded our product range to include hair oils, skincare, and fragrances using traditional recipes.",
    },
    {
      year: "2021",
      title: "Community Partnership",
      description:
        "Partnered with 50+ local women cooperatives to source ingredients and provide employment.",
    },
    {
      year: "2022",
      title: "National Expansion",
      description:
        "Opened branches in major Ethiopian cities including Dire Dawa, Bahir Dar, and Hawassa.",
    },
    {
      year: "2023",
      title: "Quality Certification",
      description:
        "Achieved international quality certifications and launched our online presence.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description:
        "Now serving thousands of customers across Ethiopia with over 50 natural beauty products.",
    },
  ];

  const team = [
    {
      name: "Almaz Tesfaye",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/3762588/pexels-photo-3762588.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Passionate about Ethiopian beauty traditions and women's empowerment.",
    },
    {
      name: "Meron Tadesse",
      role: "Head of Product Development",
      image:
        "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Expert in natural cosmetics with 10+ years of experience in beauty industry.",
    },
    {
      name: "Sara Mohammed",
      role: "Community Relations Manager",
      image:
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Dedicated to building strong relationships with local communities and suppliers.",
    },
  ];

  const stats = [
    { number: "50+", label: "Natural Products" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "6", label: "Cities Served" },
    { number: "100+", label: "Partner Cooperatives" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              From ancient Ethiopian beauty secrets to modern natural cosmetics,
              Queens celebrates the rich heritage of African beauty traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Queens Cosmetics exists to celebrate and preserve Ethiopian
                beauty traditions while creating economic opportunities for
                women across our nation. We believe that true beauty comes from
                natural ingredients, traditional wisdom, and the empowerment of
                communities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every product we create tells a story of heritage,
                sustainability, and the incredible women who make our company
                possible. We're not just selling cosmetics – we're sharing
                culture, supporting families, and building a more beautiful
                future for Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3762588/pexels-photo-3762588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Ethiopian woman with traditional beauty products"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <p className="text-sm text-gray-600 mb-1">Proudly</p>
                <p className="text-2xl font-bold text-amber-600">
                  🇪🇹 Ethiopian
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Queens Cosmetics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover-lift text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">
              Making a difference in communities across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to a leading Ethiopian beauty brand
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 md:transform md:-translate-x-px"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 md:w-5/12">
                      <div
                        className={`bg-white p-6 rounded-2xl shadow-sm hover-lift ${
                          index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div className="text-2xl font-bold text-amber-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-600 rounded-full md:transform md:-translate-x-1/2 border-4 border-white shadow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate women behind Queens Cosmetics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover-lift text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Sustainability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sustainable farming practices"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Sustainability & Community
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our commitment to sustainability goes beyond using natural
                ingredients. We work directly with over 100 women's cooperatives
                across Ethiopia, ensuring fair wages and sustainable farming
                practices.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    Direct trade partnerships with local farmers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    Eco-friendly packaging and production methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    Women's empowerment and skill development programs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">
                    Preservation of traditional knowledge and practices
                  </span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Join the Queens Family
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Experience the beauty of Ethiopian traditions and be part of our
            mission to empower communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Our Products
            </Link>
            <Link
              to="/branches"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-colors"
            >
              Visit Our Stores
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
