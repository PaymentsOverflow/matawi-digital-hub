/**
 * BrandsSection — Auto-scrolling brand logos with grey overlay
 * that reveals brand colors on hover.
 */

const brands = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png" },
  { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/480px-HP_logo_2012.svg.png" },
  { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/512px-Dell_Logo.svg.png" },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/512px-Cisco_logo_blue_2016.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png" },
  { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/512px-Lenovo_logo_2015.svg.png" },
  { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/440px-Intel_logo_%282006-2020%29.svg.png" },
];

const BrandsSection = () => {
  // Duplicate for seamless loop
  const doubledBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container-narrow text-center mb-12">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Trusted Partners
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3">Brands We Work With</h2>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        <div className="flex animate-scroll-left gap-16 w-max">
          {doubledBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center group cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
