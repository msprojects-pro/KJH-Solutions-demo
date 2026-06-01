import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/kjhsolutions_hero_1780323991826.png"
          alt="Professional Property Maintenance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/70 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Property Maintenance & Improvements
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Professional Property <br />
              <span className="text-brand-orange">Maintenance</span> in Bristol
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              From small repairs to complete refurbishments – we've got you covered. 
              Reliable, fully insured, and built on high-quality workmanship for Bristol homeowners.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447802757996"
                className="inline-flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-orange-500/20 active:scale-95 group"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                Call 07802 757996
                <ArrowRight className="w-5 h-5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95"
              >
                Get a Free Quote
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="text-sm uppercase tracking-wide">Recommended</span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">49+</span>
                <span className="text-sm uppercase tracking-wide">Verified Reviews</span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">Bristol</span>
                <span className="text-sm uppercase tracking-wide">Local Business</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
