"use client";
import React from "react";
import Link from "next/link";

export default function LearnPage() {
  const courses = [
    {
      id: 1,
      title: "Content Creation Masterclass",
      instructor: "Sarah Johnson",
      duration: "4 hours",
      level: "Beginner",
      rating: 4.8,
      students: "2.3K",
      image: "/image.png",
      price: "$49",
      description:
        "Learn the fundamentals of creating engaging content that resonates with your audience.",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy",
      instructor: "Mike Chen",
      duration: "6 hours",
      level: "Intermediate",
      rating: 4.9,
      students: "1.8K",
      image: "/image2.png",
      price: "$79",
      description:
        "Master digital marketing strategies to grow your online presence and reach.",
    },
    {
      id: 3,
      title: "Brand Building Essentials",
      instructor: "Emma Wilson",
      duration: "3 hours",
      level: "Beginner",
      rating: 4.7,
      students: "1.5K",
      image: "/image3.png",
      price: "$39",
      description:
        "Build a strong brand identity that stands out in today's competitive market.",
    },
    {
      id: 4,
      title: "Social Media Growth",
      instructor: "Alex Rodriguez",
      duration: "5 hours",
      level: "Intermediate",
      rating: 4.6,
      students: "2.1K",
      image: "/image4.png",
      price: "$59",
      description:
        "Grow your social media following with proven strategies and techniques.",
    },
    {
      id: 5,
      title: "Web Development Basics",
      instructor: "David Kim",
      duration: "8 hours",
      level: "Beginner",
      rating: 4.9,
      students: "3.2K",
      image: "/image5.png",
      price: "$89",
      description:
        "Learn web development from scratch and build your first website.",
    },
    {
      id: 6,
      title: "SEO Optimization",
      instructor: "Lisa Park",
      duration: "4 hours",
      level: "Intermediate",
      rating: 4.8,
      students: "1.9K",
      image: "/image6.png",
      price: "$69",
      description:
        "Optimize your content for search engines and increase your visibility.",
    },
  ];

  const categories = [
    "All Courses",
    "Content Creation",
    "Marketing",
    "Design",
    "Development",
    "Business",
  ];

  const resources = [
    {
      title: "Getting Started Guide",
      description: "Complete guide to getting started with BlinkB",
      type: "Guide",
      duration: "15 min read",
    },
    {
      title: "Content Strategy Template",
      description: "Free template to plan your content strategy",
      type: "Template",
      duration: "Download",
    },
    {
      title: "Community Guidelines",
      description: "Learn how to be a great community member",
      type: "Guide",
      duration: "10 min read",
    },
    {
      title: "Monetization Guide",
      description: "Ways to monetize your content and expertise",
      type: "Guide",
      duration: "20 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9f1fa] via-blue-50 to-indigo-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn & Grow
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master new skills with our expert-led courses and resources designed
            to help you succeed
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white transition-all duration-200 font-medium text-gray-700 hover:text-gray-900"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-32 w-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#5ac2e8] bg-[#d9f1fa]/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {course.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        By {course.instructor}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">
                        {course.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {course.students} students
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 px-4 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Free Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#d9f1fa]/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#54c6f0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#53c0e7] bg-[#d9f1fa]/10 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    {resource.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-[#d9f1fa]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#4eabcd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Content Creator
              </h3>
              <p className="text-gray-600 mb-6">
                Learn to create engaging content that builds your audience and
                grows your brand.
              </p>
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Path
              </button>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-[#d9f1fa]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#53a0bd]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Digital Marketer
              </h3>
              <p className="text-gray-600 mb-6">
                Master digital marketing strategies to promote your content and
                grow your business.
              </p>
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Path
              </button>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-[#d9f1fa]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#54b4d7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Entrepreneur
              </h3>
              <p className="text-gray-600 mb-6">
                Build your business from the ground up with proven strategies
                and tools.
              </p>
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-6 rounded-2xl font-semibold hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Path
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their skills
              and careers with our courses
            </p>
            <Link href="/signup">
              <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-8 rounded-2xl font-semibold text-lg hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Start Learning
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
