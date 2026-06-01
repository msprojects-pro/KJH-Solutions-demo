import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Timer, MapPin } from "lucide-react";

export default function About() {
  const trustSignals = [
    {
      title: "100% Recommended",
      desc: "49+ verified positive reviews from Bristol residents.",
      icon: CheckCircle2,
    },
    {
      title: "Reliable & Professional",
      desc: "We turn up on time and deliver high-quality workmanship.",
      icon: Timer,
    },
    {
      title: "Fully Insured",
      desc: "Complete peace of mind for you and your property.",
      icon: ShieldCheck,
    },
    {
      title: "Local Bristol Business",
      desc: "Working with the community we live in and love.",
      icon: MapPin,
    }
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Local Excellence
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-8 leading-tight">
              Property Maintenance <br /> You Can Depend On
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Whether it’s a complete refurbishment, essential repairs, home improvements, or even last-minute call-outs, KJHSolutions delivers a high-quality and professional service.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed italic border-l-4 border-brand-orange pl-6">
              "We pride ourselves on attention to detail and customer satisfaction. No job is too small, and every project is treated with the same level of care."
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500">
                <span className="text-brand-blue font-bold block">Trusted by 200+ Clients</span>
                in the Bristol area
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {trustSignals.map((signal, index) => (
              <div 
                key={index}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-brand-orange/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <signal.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-brand-blue mb-2">{signal.title}</h4>
                <p className="text-slate-500 text-sm">{signal.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
