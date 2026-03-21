/**
 * BrandsSection — Auto-scrolling brand logos with grey overlay
 * that reveals brand colors on hover.
 */

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
  const containerLayoutClass = hasFewBrands ? "flex justify-center flex-wrap gap-8" : "flex flex-wrap justify-center gap-8 md:gap-12";
  const logoSizeClass = hasFewBrands ? "w-36 md:w-40" : "w-32 md:w-36";

  return (
    <section className="py-20 bg-white">
      <div className="container-narrow text-center mb-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Trusted Partners
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3">Valuable Brands That Have Trusted Us</h2>
      </div>

      {/* Brands Grid */}
      <div className={containerLayoutClass}>
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`group flex h-20 flex-shrink-0 items-center justify-center cursor-pointer ${logoSizeClass}`}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-full max-w-full object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
