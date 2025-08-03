"use client";
import React from "react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Create up to 5 posts",
        "Basic analytics",
        "Community access",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonLink: "/signup",
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Best for creators and professionals",
      features: [
        "Unlimited posts",
        "Advanced analytics",
        "Priority support",
        "Custom branding",
        "API access",
        "Advanced integrations",
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonLink: "/signup",
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For teams and large organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "White-label solutions",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonLink: "/contact",
    },
  ];

  const features = [
    {
      title: "Unlimited Content Creation",
      description:
        "Create and share unlimited posts, articles, and content with your audience.",
    },
    {
      title: "Advanced Analytics",
      description:
        "Get detailed insights into your audience engagement and content performance.",
    },
    {
      title: "Community Building",
      description:
        "Build and grow your community with powerful engagement tools.",
    },
    {
      title: "Monetization Options",
      description: "Multiple ways to monetize your content and expertise.",
    },
    {
      title: "Priority Support",
      description: "Get help when you need it with our dedicated support team.",
    },
    {
      title: "Custom Branding",
      description: "Customize your profile and content with your own branding.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d9f1fa] via-blue-50 to-indigo-100 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as
            you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                plan.popular ? "ring-2 ring-[#4c7889]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#d9f1fa] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-800 mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.buttonLink}>
                <button
                  className={`w-full py-3 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black"
                      : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#d9f1fa]/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, all paid plans come with a 14-day free trial. No credit
                card required to start.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and bank transfers for
                annual plans.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 30-day money-back guarantee for all paid plans.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of creators who are already building their audience
              and growing their business with BlinkB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="bg-gradient-to-r from-black to-gray-800 text-white py-3 px-8 rounded-2xl font-semibold text-lg hover:from-gray-800 hover:to-black transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Start Free Trial
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white text-gray-900 py-3 px-8 rounded-2xl font-semibold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
