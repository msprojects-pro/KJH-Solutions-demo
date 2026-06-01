import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <h2 className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-8">
              Let's Discuss Your Project
            </h3>
            <p className="text-lg text-slate-600 mb-12">
              Ready to start your next home improvement? Contact us for a free, no-obligation quote today.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: Phone, 
                  label: "Call or WhatsApp", 
                  value: "+44 7802 757996", 
                  href: "tel:+447802757996",
                  color: "text-blue-600 bg-blue-50"
                },
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: "Kjhsolutions96@gmail.com", 
                  href: "mailto:Kjhsolutions96@gmail.com",
                  color: "text-red-600 bg-red-50"
                },
                { 
                  icon: MapPin, 
                  label: "Based In", 
                  value: "Bristol, United Kingdom", 
                  href: null,
                  color: "text-emerald-600 bg-emerald-50"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-brand-blue hover:text-brand-orange transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-xl font-bold text-brand-blue">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="https://wa.me/447802757996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold text-lg w-full sm:w-auto transition-all shadow-xl shadow-green-500/20 active:scale-95"
              >
                <MessageSquare className="w-6 h-6" />
                Message on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue ml-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-blue ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="07xxx xxxxxx"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue ml-2">Service Required</label>
                  <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium appearance-none">
                    <option>General Maintenance</option>
                    <option>Painting & Decorating</option>
                    <option>Electrical Installation</option>
                    <option>Property Clearance</option>
                    <option>Gardening</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-blue ml-2">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange transition-all font-medium"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-slate-800 text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-slate-900/20 group"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
