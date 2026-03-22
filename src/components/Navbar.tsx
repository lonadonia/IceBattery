import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pure-white shadow-md py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img 
            src="https://icebattery.jp/wp-content/uploads/2025/08/Icebattery-logo-New-scaled.png" 
            alt="IceBattery Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-body text-[14px] font-medium text-dark-charcoal">
          <a href="#" className="nav-link">Home</a>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="nav-link">About Us</span>
            <ChevronDown size={14} />
          </div>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <span className="nav-link">Products</span>
            <ChevronDown size={14} />
          </div>
          <a href="#" className="nav-link">Logistics</a>
          <a href="#" className="nav-link">Digital (DX)</a>
          <a href="#" className="nav-link">Medical</a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-6">
          <span className="font-mono text-sm text-dark-charcoal">+81-3-1234-5678</span>
          <button className="bg-primary-green text-white px-6 py-2.5 rounded-full font-body text-sm font-medium hover:bg-green-600 transition-colors">
            Quick Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-charcoal"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[280px] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} className="text-dark-charcoal" />
            </button>
          </div>
          <div className="flex flex-col px-8 gap-6 font-body text-lg text-dark-charcoal">
            <a href="#" className="border-b border-gray-100 pb-2">Home</a>
            <a href="#" className="border-b border-gray-100 pb-2">About Us</a>
            <a href="#" className="border-b border-gray-100 pb-2">Products</a>
            <a href="#" className="border-b border-gray-100 pb-2">Logistics</a>
            <a href="#" className="border-b border-gray-100 pb-2">Digital (DX)</a>
            <a href="#" className="border-b border-gray-100 pb-2">Medical</a>
            <div className="mt-8 flex flex-col gap-4">
              <span className="font-mono text-sm text-gray-500">+81-3-1234-5678</span>
              <button className="bg-primary-green text-white px-6 py-3 rounded-full font-medium text-center">
                Quick Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
