"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function OptionsPackagesPage() {
  const [activeTab, setActiveTab] = useState("index-option")

  const indexOptionPackages = [
    {
      id: "index-option-standard",
      title: "Index Option",
      subtitle: "Standard",
      originalPrice: "₹1,20,000",
      currentPrice: "₹35,000",
      badge: "POPULAR",
      badgeColor: "bg-blue-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
    {
      id: "index-option-enhanced",
      title: "Index Option",
      subtitle: "Enhanced",
      originalPrice: "₹95,000",
      currentPrice: "₹55,700",
      badge: "NEW",
      badgeColor: "bg-amber-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-premium",
      title: "Index Option",
      subtitle: "Premium",
      originalPrice: "₹1,80,000",
      currentPrice: "₹1,30,000",
      badge: "BEST VALUE",
      badgeColor: "bg-green-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-delux",
      title: "Index Option",
      subtitle: "Delux",
      originalPrice: "₹3,30,000",
      currentPrice: "₹2,80,000",
      badge: "ADVANCED",
      badgeColor: "bg-purple-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-yearly",
      title: "Index Option",
      subtitle: "Yearly",
      originalPrice: "₹6,30,000",
      currentPrice: "₹4,80,000",
      badge: "PREMIUM",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
  ]

  const indexOptionPlusPackages = [
    {
      id: "index-option-plus-standard",
      title: "Index Option Plus",
      subtitle: "Standard",
      originalPrice: "₹2,60,000",
      currentPrice: "₹1,60,000",
      badge: "COMBO",
      badgeColor: "bg-indigo-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-plus-premium",
      title: "Index Option Plus",
      subtitle: "Premium",
      originalPrice: "₹5,50,000",
      currentPrice: "₹4,80,000",
      badge: "PREMIUM",
      badgeColor: "bg-gradient-to-r from-pink-400 to-red-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
    {
      id: "index-option-plus-delux",
      title: "Index Option Plus",
      subtitle: "Delux",
      originalPrice: "₹9,60,000",
      currentPrice: "₹8,20,000",
      badge: "DELUX",
      badgeColor: "bg-gradient-to-r from-purple-500 to-indigo-600",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-plus-yearly",
      title: "Index Option Plus",
      subtitle: "Yearly",
      originalPrice: "₹19,20,000",
      currentPrice: "₹12,35,000",
      badge: "YEARLY",
      badgeColor: "bg-gradient-to-r from-green-500 to-teal-600",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
  ]

  const indexOptionComboPackages = [
    {
      id: "index-option-combo-standard",
      title: "Index Option Combo",
      subtitle: "Standard",
      originalPrice: "₹3,85,000",
      currentPrice: "₹1,95,000",
      badge: "SPECIAL",
      badgeColor: "bg-gradient-to-r from-orange-400 to-red-500",
      features: [
        "Get research alerts of BTST Level",
        "Get Expiry Special research alerts on every weekly expiry",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available",
        "Risk Level:- High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-combo-premium",
      title: "Index Option Combo",
      subtitle: "Premium",
      originalPrice: "₹6,85,000",
      currentPrice: "₹5,20,000",
      badge: "ULTIMATE",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
    {
      id: "index-option-combo-delux",
      title: "Index Option Combo",
      subtitle: "Delux",
      originalPrice: "₹11,70,000",
      currentPrice: "₹9,70,000",
      badge: "DELUX",
      badgeColor: "bg-gradient-to-r from-purple-500 to-indigo-600",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "index-option-combo-yearly",
      title: "Index Option Combo",
      subtitle: "Yearly",
      originalPrice: "₹23,40,000",
      currentPrice: "₹14,16,000",
      badge: "YEARLY",
      badgeColor: "bg-gradient-to-r from-green-500 to-teal-600",
      features: [
        "Get research alert of BankNifty/Nifty Option per day",
        "Get Expiry Special research alerts on every weekly expiry",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
  ]

  const getCurrentPackages = () => {
    switch (activeTab) {
      case "index-option":
        return indexOptionPackages
      case "index-option-plus":
        return indexOptionPlusPackages
      case "index-option-combo":
        return indexOptionComboPackages
      default:
        return indexOptionPackages
    }
  }

  const currentPackages = getCurrentPackages()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animateOnce={true} direction="right">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Options Packages</h1>
          </ScrollAnimation>

          {/* Tab Navigation */}
          <ScrollAnimation animateOnce={true} direction="left">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex flex-wrap">
                <button
                  onClick={() => setActiveTab("index-option")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "index-option"
                      ? "bg-white text-green-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Index Option
                </button>
                <button
                  onClick={() => setActiveTab("index-option-plus")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "index-option-plus"
                      ? "bg-white text-green-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Index Option Plus
                </button>
                <button
                  onClick={() => setActiveTab("index-option-combo")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "index-option-combo"
                      ? "bg-white text-green-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Index Option Combo
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Package Cards - Always 2x2 Grid */}
          <ScrollAnimation animateOnce={true} direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {currentPackages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    pkg.isPopular
                      ? "border-2 border-green-500 shadow-xl scale-105"
                      : "border border-gray-200 hover:border-green-300"
                  }`}
                >
                  {/* Badge */}
                  <div className={`absolute top-0 right-0 ${pkg.badgeColor} text-white px-4 py-2 text-sm font-bold`}>
                    {pkg.badge}
                  </div>

                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 text-center relative">
                      {pkg.isPopular && (
                        <div className="absolute top-4 left-4">
                          <Crown className="h-6 w-6 text-yellow-300" />
                        </div>
                      )}
                      <h2 className="text-lg font-bold mb-2">RESEARCH ALERTS PACKAGE</h2>
                      <h3 className="text-lg font-bold">(INDEX OPTION)</h3>
                    </div>

                    {/* Pricing */}
                    <div className="text-center py-6 bg-gradient-to-b from-gray-50 to-white">
                      <div className="mb-3">
                        <span className="text-gray-500 line-through text-base">{pkg.originalPrice}</span>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{pkg.currentPrice}</div>
                      <div className="text-gray-600 font-medium">{pkg.subtitle}</div>
                      <div className="mt-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Save{" "}
                          {Math.round(
                            ((Number.parseInt(pkg.originalPrice.replace(/[₹,]/g, "")) -
                              Number.parseInt(pkg.currentPrice.replace(/[₹,]/g, ""))) /
                              Number.parseInt(pkg.originalPrice.replace(/[₹,]/g, ""))) *
                              100,
                          )}
                          %
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="px-6 pb-6">
                      <div className="space-y-3 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="h-2.5 w-2.5 text-white" />
                              </div>
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                          pkg.isPopular
                            ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
                            : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                        } text-white hover:shadow-xl transform hover:scale-105`}
                        onClick={() => {
                          const message = encodeURIComponent(
                            `Hello, I am interested in the ${pkg.title} - ${pkg.subtitle} package.\nCurrent Price: ${pkg.currentPrice}\nFeatures: ${pkg.features.join(", ")}`
                          );
                          window.open(`https://wa.me/7506233907?text=${message}`);
                        }}
                      >
                        {pkg.isPopular && <Star className="h-4 w-4 mr-2" />}
                        GET STARTED
                      </Button>

                      <p className="text-xs text-gray-500 mt-3 text-center">*All Prices are inclusive of GST</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </div>
  )
}
