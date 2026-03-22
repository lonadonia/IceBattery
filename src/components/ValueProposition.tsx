import { ThermometerSnowflake, Plane, MapPin, Leaf, ShieldAlert } from 'lucide-react';

const cards = [
  {
    icon: ThermometerSnowflake,
    color: '#E84C3D',
    title: 'Multiple Temperature',
    description: 'Precise, sustained temps for all perishables'
  },
  {
    icon: Plane,
    color: '#3AACCD',
    title: 'All Logistics Modes',
    description: 'Air · Rail · Sea · Land · Last Mile'
  },
  {
    icon: MapPin,
    color: '#F5A623',
    title: 'Digital Traceability',
    description: 'Real-time GPS & temperature monitoring'
  },
  {
    icon: Leaf,
    color: '#3AB54A',
    title: 'ESG & SDGs',
    description: 'Renewable, CO₂-reducing cold chain'
  },
  {
    icon: ShieldAlert,
    color: '#FF7043',
    title: 'IceBattery Insulation',
    description: 'Fire Safety & Climate Resilience'
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-mono text-primary-green text-[12px] uppercase tracking-[0.2em] mb-4 block font-medium">
            What We Offer
          </span>
          <h2 className="font-display font-bold text-[32px] md:text-[40px] text-dark-charcoal leading-[1.2]">
            One System. Every Temperature.<br className="hidden md:block" />
            Every Mode of Transport.
          </h2>
        </div>

        {/* Scrollable Container for Mobile */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 hide-scrollbar snap-x snap-mandatory">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index}
                className="min-w-[260px] md:min-w-0 bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] group relative overflow-hidden snap-center flex flex-col h-full"
              >
                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-green transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${card.color}1A` }} // 10% opacity
                >
                  <Icon size={24} color={card.color} strokeWidth={2} />
                </div>
                
                <h3 className="font-display font-bold text-[18px] text-dark-charcoal mb-3">
                  {card.title}
                </h3>
                
                <p className="font-body text-[14px] text-[#666666] leading-[1.6] mt-auto">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
