import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "7506233907";
const WHATSAPP_NUMBER = "7506233907";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to know more about your services.");

export default function StickyContactButtons() {
  return (
    <>
      {/* Phone Button - Bottom Left */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="fixed left-6 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-colors duration-200"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        title="Call Us"
      >
        <Phone className="w-7 h-7" />
      </a>
      {/* WhatsApp Button - Bottom Right */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-colors duration-200"
        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
