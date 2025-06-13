"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DisclaimerBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div className="w-full bg-white border-t border-b border-red-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-2 relative">
        <div className="flex-1 flex items-center min-w-0">
          <div className="scrolling-text-wrapper w-full h-7 overflow-hidden">
            <div className="scrolling-text flex items-center whitespace-nowrap">
              <span className="inline-block px-4 font-medium text-red-700 text-base sm:text-lg">
                ⚠️ <span className="font-semibold">Disclaimer:</span> Investment is subject to market risk. Please read all scheme related documents carefully before investing. Past performance does not guarantee future results.
              </span>
              <span className="inline-block px-4 font-medium text-red-700 text-base sm:text-lg">
                ⚠️ <span className="font-semibold">Disclaimer:</span> Investment is subject to market risk. Please read all scheme related documents carefully before investing. Past performance does not guarantee future results.
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrolling-text-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .scrolling-text {
          display: flex;
          width: max-content;
          animation: scroll-left 30s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
