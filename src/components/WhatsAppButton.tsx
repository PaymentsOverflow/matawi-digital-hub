import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Button — Modern floating button in bottom-right corner
 * Links to WhatsApp chat with Matawi Digital
 */

const WhatsAppButton = () => {
  const whatsappNumber = "254112471292"; // Kenya country code
  const whatsappMessage = "Hello! I want to partner with you on a project.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <style>{`
        @keyframes subtle-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .whatsapp-blink {
          animation: subtle-blink 2s ease-in-out infinite;
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl whatsapp-blink"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
};

export default WhatsAppButton;
