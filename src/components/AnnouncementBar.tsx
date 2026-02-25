import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * AnnouncementBar — Thin top banner for promotions or announcements.
 */
const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-narrow flex items-center justify-center gap-3 px-6 py-2.5">
        <span className="text-xs font-medium tracking-wide">
          🚀 Now offering free IT consultations for businesses in Nairobi
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider hover:underline"
        >
          Get Started <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBar;
