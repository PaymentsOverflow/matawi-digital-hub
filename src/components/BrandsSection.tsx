/**
 * BrandsSection — Auto-scrolling brand logos with grey overlay
 * that reveals brand colors on hover.
 */

import { useEffect, useRef, useState } from "react";

type Brand = {
  name: string;
  logo: string;
};

const logoFiles = import.meta.glob("../assets/brands/*.{png,jpg,jpeg,svg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const excludedAssetNames = new Set(["matawi-logo"]);

const brandNameOverrides: Record<string, string> = {
  "JakkiBrockWeddings_logo": "Jakki Brock Weddings",
  "Ledisa Academy Logo": "Ledisa Academy",
  "Pawsome Yoga Logo-Main-copy": "Pawsome Yoga",
  "THINKOMM-LOGO-5": "Thinkomm Communications",
};

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      if (word === word.toUpperCase() && word.length > 1) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

const formatBrandName = (assetName: string) => {
  const overriddenName = brandNameOverrides[assetName];

  if (overriddenName) {
    return overriddenName;
  }

  return toTitleCase(
    assetName
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[-_]+/g, " ")
      .replace(/\b(?:logo|main|copy|final)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
};

const brands: Brand[] = Object.entries(logoFiles)
  .map(([assetPath, logo]) => {
    const fileName = assetPath.split("/").pop() ?? "";
    const assetName = fileName.replace(/\.[^.]+$/, "");

    return {
      assetName,
      logo,
      name: formatBrandName(assetName),
    };
  })
  .filter(({ assetName }) => !excludedAssetNames.has(assetName))
  .sort((leftBrand, rightBrand) => leftBrand.name.localeCompare(rightBrand.name))
  .map(({ name, logo }) => ({ name, logo }));

const BrandsSection = () => {
  const hasFewBrands = brands.length <= 5;
  const trackLayoutClass = hasFewBrands ? "w-full justify-evenly" : "w-max gap-8 md:gap-12";
  const logoSizeClass = hasFewBrands ? "w-36 md:w-40" : "w-32 md:w-36";
  const marqueeTracks = [0, 1, 2];
  
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState("14s");

  useEffect(() => {
    if (!trackRef.current) return;

    const measureTrack = () => {
      const width = trackRef.current?.offsetWidth ?? 0;
      setTrackWidth(width);
      // Calculate duration to maintain ~80px/sec scroll speed
      const secondsPerPixel = width / 100;
      setAnimationDuration(`${secondsPerPixel}s`);
    };

    // Measure after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(measureTrack, 100);

    // Also measure on window resize
    window.addEventListener("resize", measureTrack);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measureTrack);
    };
  }, [brands.length]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-narrow text-center mb-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Trusted Partners
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3">Valuable Brands That Have Trusted Us</h2>
      </div>

      {/* Scrolling container */}
      <div className="relative overflow-hidden">
        <div className="flex w-max min-w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {trackWidth > 0 &&
            marqueeTracks.map((track) => (
              <style key={`anim-${track}`}>{`
                @keyframes scroll-track-${track} {
                  from { transform: translateX(0); }
                  to { transform: translateX(-${trackWidth}px); }
                }
              `}</style>
            ))}
          {marqueeTracks.map((track) => (
            <div
              key={track}
              ref={track === 0 ? trackRef : undefined}
              {...(track > 0 ? { "aria-hidden": "true" } : {})}
              className={`flex min-w-full shrink-0 items-center ${trackLayoutClass}`}
              style={{
                animation: trackWidth > 0 ? `scroll-track-${track} ${animationDuration} linear infinite` : "none",
              }}
            >
              {brands.map((brand) => (
                <div
                  key={`${track}-${brand.name}`}
                  className={`group flex h-20 flex-shrink-0 items-center justify-center cursor-pointer ${logoSizeClass}`}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
