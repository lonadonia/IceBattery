import { Globe2, Leaf, Thermometer } from 'lucide-react';

export default function Vision() {
  return (
    <section className="bg-[#383838] py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column (60%) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <span className="font-mono text-primary-green text-[12px] uppercase tracking-[0.2em] mb-6 font-medium">
            Our Vision
          </span>
          
          <h2 className="font-display font-bold text-[32px] md:text-[38px] leading-[1.2] mb-6">
            A World Where No Food<br className="hidden md:block" />
            is Lost to Temperature
          </h2>
          
          <p className="font-body text-[16px] md:text-[18px] text-[#B0C4B0] leading-[1.7] mb-12 max-w-2xl">
            We envision a future where every perishable product — from farm to pharmacy —
            reaches its destination at the perfect temperature. IceBattery® is building
            the infrastructure for a zero-waste, globally connected cold chain.
          </p>

          <div className="flex flex-col gap-8 w-full">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary-green">
                <Globe2 size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Global Reach</h3>
                <p className="font-body text-[#B0C4B0] text-sm">Air · Rail · Land · Sea coverage</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary-green">
                <Leaf size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Zero Waste</h3>
                <p className="font-body text-[#B0C4B0] text-sm">Reusable, eco-friendly technology</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4">
              <div className="mt-1 text-primary-green">
                <Thermometer size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Precision Science</h3>
                <p className="font-body text-[#B0C4B0] text-sm">Consistent temperature and humidity control</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[400px]">
          {/* Concentric Rings */}
          <div className="absolute inset-0 flex items-center justify-center group">
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-[#2D5A2D] opacity-30 animate-[spin_60s_linear_infinite] group-hover:[animation-play-state:paused]"></div>
            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full border border-[#2D5A2D] opacity-50 animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused]"></div>
            <div className="absolute w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full border border-[#3AB54A] opacity-20 animate-[spin_20s_linear_infinite] group-hover:[animation-play-state:paused]"></div>
            
            {/* Center Image */}
            <img 
              src="https://i.ibb.co/8LQRt85R/jhdfjhbvdf.png" 
              alt="Vision Center" 
              className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain z-10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
