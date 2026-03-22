import { useEffect, useRef, useState } from 'react';

const milestones = [
  { year: '2009', text: 'IceBattery® concept founded in Japan' },
  { year: '2011', text: 'First B2B deployment in Japanese food sector' },
  { year: '2014', text: '100+ customers milestone reached' },
  { year: '2017', text: 'Rail & Air logistics integration' },
  { year: '2019', text: 'IBPS Digital Platform launched' },
  { year: '2021', text: '300+ customers — Zero failures record' },
  { year: '2023', text: 'Global expansion: India & USA offices' },
  { year: '2025', text: 'IceBattery Fresh® AVA consumer launch' },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-light-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="font-mono text-primary-green text-[12px] uppercase tracking-[0.2em] mb-4 block font-medium">
            Our Journey
          </span>
          <h2 className="font-display font-bold text-[32px] md:text-[36px] text-dark-charcoal">
            1.5 Decades of Cold Chain Innovation
          </h2>
        </div>

        {/* Desktop Timeline (Horizontal Zigzag) */}
        <div className="hidden md:block relative w-full h-[300px]">
          {/* Center Line */}
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-primary-green transition-all duration-1000 ease-out origin-left"
            style={{ width: isVisible ? '100%' : '0%' }}
          ></div>

          {/* Nodes */}
          {milestones.map((milestone, index) => {
            const isTop = index % 2 === 0;
            const leftPosition = `${(index / (milestones.length - 1)) * 100}%`;
            
            return (
              <div 
                key={index}
                className={`absolute flex flex-col items-center transition-all duration-700 ease-out`}
                style={{ 
                  left: leftPosition,
                  top: isTop ? 'calc(50% - 120px)' : 'calc(50% + 20px)',
                  transform: `translateX(-50%) translateY(${isVisible ? '0' : '20px'})`,
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Connector Line */}
                <div className={`absolute w-[2px] bg-primary-green/30 h-[20px] ${isTop ? 'bottom-[-26px]' : 'top-[-26px]'}`}></div>
                
                {/* Node Circle */}
                <div className={`absolute w-3 h-3 bg-primary-green rounded-full ${isTop ? 'bottom-[-32px]' : 'top-[-32px]'}`}></div>
                
                {/* Card */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[160px] text-center">
                  <div className="font-mono font-bold text-primary-green text-lg mb-2">{milestone.year}</div>
                  <div className="font-body text-sm text-dark-charcoal leading-snug">{milestone.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Timeline (Vertical Stacked) */}
        <div className="md:hidden relative pl-6 border-l-2 border-primary-green/30 space-y-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="relative transition-all duration-700 ease-out"
              style={{ 
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Node Circle */}
              <div className="absolute w-3 h-3 bg-primary-green rounded-full left-[-31px] top-2"></div>
              
              {/* Card */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="font-mono font-bold text-primary-green text-lg mb-2">{milestone.year}</div>
                <div className="font-body text-sm text-dark-charcoal">{milestone.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
