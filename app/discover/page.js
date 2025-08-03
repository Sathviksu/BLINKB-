"use client";
import React from "react";
import Link from "next/link";

export default function DiscoverPage() {
  const trendingCreators = [
    {
      id: 1,
      name: "Sarah Johnson",
      handle: "@sarahdesigns",
      followers: "12.5K",
      category: "Design",
      avatar: "/image.png",
      description:
        "Creative designer sharing amazing design tips and templates",
    },
    {
      id: 2,
      name: "Mike Chen",
      handle: "@mikecode",
      followers: "8.2K",
      category: "Development",
      avatar: "/image2.png",
      description: "Full-stack developer helping others learn web development",
    },
    {
      id: 3,
      name: "Emma Wilson",
      handle: "@emmamarketing",
      followers: "15.7K",
      category: "Marketing",
      avatar: "/image3.png",
      description: "Digital marketing expert sharing growth strategies",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      handle: "@alexcontent",
      followers: "9.8K",
      category: "Content",
      avatar: "/image4.png",
      description: "Content creator helping brands tell their stories",
    },
  ];

  const trendingTopics = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Content Creation",
    "Branding",
    "SEO",
    "Social Media",
    "E-commerce",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9f1fa] via-blue-50 to-indigo-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore trending creators, topics, and content from our vibrant
            community
          </p>
        </div>

        {/* Trending Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Trending Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {trendingTopics.map((topic) => (
              <button
                key={topic}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white transition-all duration-200 font-medium text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl"
              >
                #{topic}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Creators */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Trending Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCreators.map((creator) => (
              <div
                key={creator.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {creator.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{creator.handle}</p>
                  <span className="text-xs font-medium text-[#58c9f3] bg-[#d9f1fa]/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {creator.category}
                  </span>
                  <p className="text-sm text-gray-600 mb-4">
                    {creator.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm text-gray-500">Followers:</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {creator.followers}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-2 px-4 rounded-2xl font-semibold text-sm hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img
                  src="/image5.png"
                  alt="Featured"
                  className="h-32 w-32 object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-[#56c2ea] bg-[#d9f1fa]/10 px-3 py-1 rounded-full mb-3 inline-block">
                  Featured
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Future of Web Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest trends and technologies shaping the future
                  of web design.
                </p>
                <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <img
                  src="/image6.png"
                  alt="Featured"
                  className="h-32 w-32 object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-[#54bfe5] bg-[#d9f1fa]/10 px-3 py-1 rounded-full mb-3 inline-block">
                  Trending
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Marketing Strategies 2024
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the most effective marketing strategies for the
                  digital age.
                </p>
                <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <img
                  src="/image7.png"
                  alt="Featured"
                  className="h-32 w-32 object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-[#56c2e9] bg-[#d9f1fa]/10 px-3 py-1 rounded-full mb-3 inline-block">
                  New
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Building Your Brand
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to create a powerful brand identity that resonates
                  with your audience.
                </p>
                <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join the Community
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start sharing your expertise and connect with like-minded creators
              in our growing community
            </p>
            <Link href="/add">
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-8 rounded-2xl font-semibold text-lg hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Start Creating
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
