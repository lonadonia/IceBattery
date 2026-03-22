export default function Mission() {
  return (
    <section className="py-24 bg-light-gray relative overflow-hidden">
      {/* Giant Quotation Mark Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-display font-bold text-[300px] leading-none text-[#E8F5E9] opacity-50 pointer-events-none select-none z-0">
        &ldquo;
      </div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="font-mono text-primary-green text-[12px] uppercase tracking-[0.2em] mb-6 font-medium">
          Our Mission
        </span>
        
        <h2 className="font-display font-bold text-[32px] md:text-[40px] text-dark-charcoal leading-[1.2] mb-8">
          Delivering Temperature Precision<br className="hidden md:block" />
          to Every Corner of the Globe
        </h2>
        
        <p className="font-body text-[17px] text-[#555555] leading-[1.8] mb-10">
          IceBattery® technology transforms the shipping of temperature-sensitive
          products like food, medicine, and vaccines. Unlike costly dry ice,
          IceBattery® provides a cost-effective, reusable solution that maintains
          optimal temperatures and consistent humidity for extended periods —
          ensuring less waste, longer shelf life, and fresher perishables.
        </p>
        
        <button className="border-2 border-primary-green text-primary-green px-8 py-3 rounded-md font-body font-medium hover:bg-green-50 transition-colors">
          Learn About Us
        </button>
      </div>
    </section>
  );
}
