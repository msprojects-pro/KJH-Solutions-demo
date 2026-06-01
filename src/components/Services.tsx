import { motion } from "motion/react";
import { 
  Zap, 
  Tv, 
  Paintbrush, 
  Trash2, 
  Layers, 
  Hammer, 
  Sprout, 
  Truck, 
  Waves
} from "lucide-react";

const services = [
  {
    title: "Electrical Appliances",
    description: "Professional installation and removal of domestic appliances.",
    icon: Zap,
    color: "bg-blue-500"
  },
  {
    title: "TV Wall Mounting",
    description: "Secure and tidy mounting with hidden cable options.",
    icon: Tv,
    color: "bg-purple-500"
  },
  {
    title: "Painting & Decorating",
    description: "Quality internal and external painting for a fresh new look.",
    icon: Paintbrush,
    color: "bg-pink-500"
  },
  {
    title: "Property Clearance",
    description: "Fully licensed removal of unwanted items and waste.",
    icon: Trash2,
    color: "bg-emerald-500"
  },
  {
    title: "Flooring / Latex",
    description: "Subfloor preparation and installation of various flooring types.",
    icon: Layers,
    color: "bg-amber-500"
  },
  {
    title: "Carpentry",
    description: "General carpentry repairs, shelving, and timber installations.",
    icon: Hammer,
    color: "bg-brand-orange"
  },
  {
    title: "Gardening",
    description: "Garden maintenance, clearance, and soft landscaping.",
    icon: Sprout,
    color: "bg-green-600"
  },
  {
    title: "Man with a Van",
    description: "Local Bristol moves and delivery services available.",
    icon: Truck,
    color: "bg-sky-600"
  },
  {
    title: "Jet Washing",
    description: "High-pressure cleaning for driveways, patios, and walls.",
    icon: Waves,
    color: "bg-cyan-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-indigo-900 text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-6"
          >
            Comprehensive Maintenance <br /> Solutions for Your Home
          </motion.h3>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-black/5`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-brand-blue mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 font-medium mb-8">
            Don't see what you're looking for? <span className="text-brand-blue font-bold">No job is too small for us.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-orange font-bold text-lg hover:gap-4 transition-all"
          >
            Enquire about a custom project <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
