"use client";
import React from "react";
import Link from "next/link";

export default function MarketplacePage() {
  const products = [
    {
      id: 1,
      name: "Premium Templates",
      description: "Professional templates for your projects",
      price: "$29.99",
      image: "/image.png",
      category: "Templates",
    },
    {
      id: 2,
      name: "Custom Branding",
      description: "Get your brand identity designed",
      price: "$199.99",
      image: "/image2.png",
      category: "Design",
    },
    {
      id: 3,
      name: "Web Development",
      description: "Full-stack web development services",
      price: "$999.99",
      image: "/image3.png",
      category: "Development",
    },
    {
      id: 4,
      name: "SEO Optimization",
      description: "Improve your website's search ranking",
      price: "$149.99",
      image: "/image4.png",
      category: "Marketing",
    },
    {
      id: 5,
      name: "Content Creation",
      description: "High-quality content for your brand",
      price: "$79.99",
      image: "/image5.png",
      category: "Content",
    },
    {
      id: 6,
      name: "Social Media Management",
      description: "Manage your social media presence",
      price: "$299.99",
      image: "/image6.png",
      category: "Marketing",
    },
  ];

  const categories = [
    "All",
    "Templates",
    "Design",
    "Development",
    "Marketing",
    "Content",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9f1fa] via-blue-50 to-indigo-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products and services from our community of
            creators and professionals
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white transition-all duration-200 font-medium text-blue-700 hover:text-gray-900"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-32 object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#56c5ea] bg-[#d9f1fa]/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Sell?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our marketplace and start selling your products and services
              to our growing community
            </p>
            <Link href="/add">
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-8 rounded-2xl font-semibold text-lg hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Start Selling
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
