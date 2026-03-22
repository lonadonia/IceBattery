export default function TrustedBy() {
  const logos = [
    { src: "https://www.sadokisen.co.jp/wp-content/themes/SADOKISEN-THEME/common/images/top/onlinestore_logo.png", alt: "Sado Kisen" },
    { src: "https://www.jica.go.jp/assets/img/logo.png", alt: "JICA" },
    { src: "https://giginc.co.jp/assets/img/logo-main.svg", alt: "GIG" },
    { src: "https://www.concorindia.co.in/assets/images/Header/concor-logo.svg", alt: "CONCOR" },
    { src: "https://www.alfresa.com/assets/img/common/logo_en.svg", alt: "Alfresa" },
    { src: "https://www.ebisu-toraji.com/assets/images/common/logo_white.png", alt: "Toraji", invert: true },
    { src: "https://www.tsukuba.ac.jp/assets/img/common/logo.svg", alt: "University of Tsukuba" }
  ];

  return (
    <section className="py-24 bg-pure-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <span className="font-mono text-primary-green text-[12px] uppercase tracking-[0.2em] mb-4 block font-medium">
          Trusted By The Best
        </span>
        <h2 className="font-display font-bold text-[24px] md:text-[32px] text-dark-charcoal">
          300+ B2B Customers Across Japan & Beyond
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex bg-white py-8 group">
        
        {/* Gradient Masks for smooth fade at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap items-center">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-1-${index}`} 
              className="mx-8 md:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer min-w-[120px]"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`h-10 md:h-14 w-auto object-contain ${logo.invert ? 'invert' : ''}`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          {/* Second set of logos (duplicate for seamless loop) */}
          {logos.map((logo, index) => (
            <div 
              key={`logo-2-${index}`} 
              className="mx-8 md:mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer min-w-[120px]"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`h-10 md:h-14 w-auto object-contain ${logo.invert ? 'invert' : ''}`}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
