"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollAnimation from "@/components/scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, CheckCircle } from "lucide-react";

export default function RegisteredResearchAnalyst() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation direction="right">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Registered Research Analyst
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transparency and compliance are at the core of our research
                services. Below are the details of our SEBI-registered Research
                Analyst, as required by regulatory guidelines.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-green-200 bg-green-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-green-700">
                    Analyst Details
                  </h2>
                </div>
                <div className="space-y-2 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold">Name:</span> Abijeet More
                  </p>
                  <p>
                    <span className="font-semibold">SEBI Registration Number:</span>
                    INH000019749
                  </p>
                  <p>
                    <span className="font-semibold">Registration Validity:</span>
                    Active
                  </p>
                  <p>
                    <span className="font-semibold">Contact Email:</span>
                    Support@fitintraders.com
                  </p>
                  <p>
                    <span className="font-semibold">Office Address:</span> Kopar
                    Khairane, Navi Mumbai, 400709
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <Card className="mb-8 shadow-lg border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-700">
                    About SEBI Registration
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SEBI registration ensures that the research analyst adheres to
                  the highest standards of ethics, transparency, and investor
                  protection. Our research recommendations are based on thorough
                  analysis and are provided in compliance with SEBI regulations.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="left">
            <Card className="mb-8 shadow-lg border-yellow-200 bg-yellow-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-yellow-600 mr-3" />
                  <h2 className="text-2xl font-bold text-yellow-700">
                    Disclaimer
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The information provided here is for transparency and regulatory
                  compliance. Please consult our{" "}
                  <a
                    href="/ad-disclaimer"
                    className="text-green-700 underline"
                  >
                    Advertisement Disclaimer
                  </a>{" "}
                  for more details on our research and advisory services.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </main>
    </div>
  );
}
