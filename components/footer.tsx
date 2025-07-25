import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import StickyContactButtons from "@/components/sticky-contact-buttons"

export default function Footer() {
  return (
    <>
      <footer className="bg-green-600 text-white pt-12 pb-6">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image src="/logo.png" alt="Fitin Traders" width={180} height={50} className="h-12 w-auto" />
              </Link>
              <p className="text-sm">
                ODR Portal (Securities Market Approach for Resolution through ODR Portal) can be accessed via the
                following link- https://smartodr.in/
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/standard-dos-donts" className="text-sm hover:underline">
                    Standard Do's & Don'ts
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="text-sm hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-sm hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="text-sm hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/user-consent" className="text-sm hover:underline">
                    User Consent
                  </Link>
                </li>
                <li>
                  <Link href="/legal-disclaimer" className="text-sm hover:underline">
                    Legal Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/ad-disclaimer" className="text-sm hover:underline">
                    AD Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="/grievance-redressal" className="text-sm hover:underline">
                    Grievance Redressal Process
                  </Link>
                </li>
                <li>
                  <Link href="/investor-charter" className="text-sm hover:underline">
                    Investor Charter
                  </Link>
                </li>
                <li>
                  <Link href="/talk-to-us" className="text-sm hover:underline">
                    Talk To Us
                  </Link>
                </li>
                <li>
                  <Link href="/registered-research-analyst" className="text-sm hover:underline">
                    Registered Research Analyst
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Packages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/packages/equity" className="text-sm hover:underline">
                    Research Alerts Package (Equity)
                  </Link>
                </li>
                <li>
                  <Link href="/packages/equity" className="text-sm hover:underline">
                    Research Alerts Package (Equity Plus)
                  </Link>
                </li>
                <li>
                  <Link href="/packages/options" className="text-sm hover:underline">
                    Research Alerts Package (Index Option)
                  </Link>
                </li>
                <li>
                  <Link href="/packages/options" className="text-sm hover:underline">
                    Research Alerts Package (Index Option Plus)
                  </Link>
                </li>
                <li>
                  <Link href="/packages/options" className="text-sm hover:underline">
                    Research Alerts Package (Index Option Combo)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">7506233907</p>
                    <p className="text-xs">Mon-Fri : 09:00 AM - 06:00 PM</p>
                    <p className="text-xs">Sat : 10:00 AM - 04:00 PM</p>
                    <p className="text-xs">Sun - Closed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Support@fitintraders.com</p>
                    <p className="text-xs">Customer support</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">TTC Industrial area pawne navi mumbai 400705</p>
                    <p className="text-xs">Main office location</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">Fitin Traders</p>
            <p className="text-sm mt-2 md:mt-0">© Copyright 2025, All Rights Reserved by Fitin Traders.</p>
          </div>
        </div>
      </footer>
      <StickyContactButtons />
    </>
  )
}
