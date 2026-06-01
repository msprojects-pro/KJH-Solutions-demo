import { Hammer, Facebook, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-brand-orange rounded-lg">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">
                KJH<span className="text-brand-orange">Solutions</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Professional property maintenance and home improvements in Bristol. High-quality service with a focus on reliability and customer satisfaction.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://web.facebook.com/KJHSolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-brand-orange transition-colors rounded-full flex items-center justify-center text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Electrical", "Painting", "Property Clearance", "Carpentry", "Gardening", "Jet Washing"].map(item => (
                <li key={item}>
                  <a href="#services" className="text-white/40 hover:text-brand-orange transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange" />
                <a href="tel:+447802757996" className="text-white/40 hover:text-white transition-colors text-sm">
                  07802 757996
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange" />
                <a href="mailto:Kjhsolutions96@gmail.com" className="text-white/40 hover:text-white transition-colors text-sm">
                  Kjhsolutions96@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 text-brand-orange" />
                Bristol, BS Area
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Working Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between text-white/40">
                <span>Mon - Fri</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-white/40">
                <span>Saturday</span>
                <span>9:00 - 16:00</span>
              </li>
              <li className="flex justify-between text-white/40 font-bold text-brand-orange">
                <span>Emergency</span>
                <span>24/7 Calls</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs">
            © {currentYear} KJHSolutions Property Maintenance. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MapPin(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
