"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, Crown } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function EquityPackagesPage() {
  const [activeTab, setActiveTab] = useState("equity")

  const equityPackages = [
    {
      id: "equity-standard",
      title: "Equity",
      subtitle: "Standard",
      originalPrice: "₹50,000",
      currentPrice: "₹35,000",
      badge: "POPULAR",
      badgeColor: "bg-blue-500",
      features: [
        "Get Positional Equity alerts",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
    {
      id: "equity-premium",
      title: "Equity",
      subtitle: "Premium",
      originalPrice: "₹95,000",
      currentPrice: "₹55,000",
      badge: "BEST VALUE",
      badgeColor: "bg-green-500",
      features: [
        "Get Positional Equity alerts",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
  ]

  const equityPlusPackages = [
    {
      id: "equity-plus-standard",
      title: "Equity Plus",
      subtitle: "Standard",
      originalPrice: "₹1,00,000",
      currentPrice: "₹85,000",
      badge: "ADVANCED",
      badgeColor: "bg-purple-500",
      features: [
        "Get Positional Equity alerts",
        "Get premium research alerts in top stocks",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: false,
    },
    {
      id: "equity-plus-premium",
      title: "Equity Plus",
      subtitle: "Premium",
      originalPrice: "₹3,40,000",
      currentPrice: "₹3,10,000",
      badge: "PREMIUM",
      badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      features: [
        "Get Positional Equity alerts",
        "Get premium research alerts in top stocks",
        "Get well-researched targets and stop-loss on every research alert",
        "Live Market customer support is available to all members",
        "Risk Level — High to Very High",
      ],
      isPopular: true,
    },
  ]

  const currentPackages = activeTab === "equity" ? equityPackages : equityPlusPackages

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation direction="right">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Equity Packages</h1>
          </ScrollAnimation>

          {/* Tab Navigation */}
          <ScrollAnimation direction="left">
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                <button
                  onClick={() => setActiveTab("equity")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "equity" ? "bg-white text-green-600 shadow-md" : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Equity
                </button>
                <button
                  onClick={() => setActiveTab("equity-plus")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "equity-plus"
                      ? "bg-white text-green-600 shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Equity Plus
                </button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Package Cards */}
          <ScrollAnimation direction="right">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center relative">
                      {pkg.isPopular && (
                        <div className="absolute top-4 left-4">
                          <Crown className="h-6 w-6 text-yellow-300" />
                        </div>
                      )}
                      <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                      <div className="text-blue-100">{pkg.subtitle}</div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center py-8 bg-gradient-to-b from-gray-50 to-white">
                      <div className="mb-4">
                        <span className="text-gray-500 line-through text-lg">{pkg.originalPrice}</span>
                      </div>
                      <div className="text-5xl font-bold text-gray-900 mb-2">{pkg.currentPrice}</div>
                      <div className="text-gray-600 font-medium">{pkg.subtitle}</div>
                      <div className="mt-4">
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
                    <div className="px-8 pb-8">
                      <div className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <div className="flex-shrink-0 mr-3 mt-1">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
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
                        {pkg.isPopular && <Star className="h-5 w-5 mr-2" />}
                        GET STARTED
                      </Button>

                      <p className="text-xs text-gray-500 mt-4 text-center">*All Prices are inclusive of GST</p>
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
