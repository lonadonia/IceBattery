import { Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-dark-green text-white pt-8 pb-4 overflow-y-auto max-h-[30vh] md:max-h-[40vh] shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      {/* Color Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-accent-red"></div>
        <div className="flex-1 bg-accent-amber"></div>
        <div className="flex-1 bg-accent-blue"></div>
        <div className="flex-1 bg-primary-green"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <img 
              src="https://icebattery.jp/wp-content/uploads/2022/02/ITE-New-Logo-Transparent-White-scaled-e1755511531789.png" 
              alt="ITE Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-body text-[14px] text-[#B0C4B0] leading-relaxed">
            Building the infrastructure for a zero-waste, globally connected cold chain.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white hover:rotate-12 transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white hover:rotate-12 transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green hover:text-white hover:rotate-12 transition-all duration-300">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-lg mb-2">Contact Us</h4>
          <ul className="font-body text-[14px] text-[#B0C4B0] space-y-3">
            <li><span className="font-medium text-white">Japan:</span> Tokyo HQ</li>
            <li><span className="font-medium text-white">India:</span> New Delhi Office</li>
            <li><span className="font-medium text-white">USA:</span> Silicon Valley Branch</li>
            <li className="mt-4 pt-4 border-t border-white/10">
              <a href="tel:+81312345678" className="hover:text-primary-green transition-colors">+81-3-1234-5678</a>
            </li>
            <li>
              <a href="mailto:info@icebattery.jp" className="hover:text-primary-green transition-colors">info@icebattery.jp</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-lg mb-2">Quick Links</h4>
          <ul className="font-body text-[14px] text-[#B0C4B0] space-y-3">
            <li><a href="#" className="hover:text-primary-green transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Logistics</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Digital (DX)</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Medical</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Inquiry</a></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display font-bold text-lg mb-2">Shop & Legal</h4>
          <ul className="font-body text-[14px] text-[#B0C4B0] space-y-3">
            <li><a href="#" className="hover:text-primary-green transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-green transition-colors">Terms of Service</a></li>
            <li className="mt-4">
              <button className="bg-primary-green text-white px-6 py-2 rounded-full font-body text-sm font-medium hover:bg-green-600 transition-colors w-full sm:w-auto">
                Quick Contact
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-[13px] text-[#B0C4B0]">
          &copy; {new Date().getFullYear()} Innovation Thru Energy Co., Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4 font-body text-[13px] text-[#B0C4B0]">
          <button className="text-white font-medium hover:text-primary-green transition-colors">EN</button>
          <span className="text-white/30">|</span>
          <button className="hover:text-primary-green transition-colors">JA</button>
        </div>
      </div>
    </footer>
  );
}
