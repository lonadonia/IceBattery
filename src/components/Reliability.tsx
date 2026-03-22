import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 300, suffix: '+', label: 'B2B Japanese Customers' },
  { value: 1.5, suffix: '', label: 'Decades of Operation' },
  { value: 0, suffix: '', label: 'Reported Failures' },
  { value: 250, suffix: '+', label: 'Private Companies (IBPS)' },
];

function CountUp({ end, suffix, duration = 2000 }: { end: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Reliability() {
  return (
    <section className="bg-pure-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        
        {/* Left Column - Stats */}
        <div className="bg-primary-green p-12 md:p-24 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 max-w-lg mx-auto w-full">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="font-mono font-bold text-[40px] md:text-[48px] text-white mb-2 leading-none">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-body text-[14px] text-white/80 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="p-6 md:p-12 flex items-center justify-center bg-gray-50 relative overflow-hidden">
          <div className="relative w-full max-w-[900px] flex items-center justify-center">
            <img 
              src="https://i.ibb.co/PstN3YM9/imgi-44-Market-area-768x422.png" 
              alt="Market Area" 
              className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-[1.02] scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
