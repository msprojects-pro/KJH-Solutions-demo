import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "May 2024",
      comment: "Absolutely thrilled with the painting and decorating work. Extremely professional, clean, and the finish is fantastic. Would highly recommend!",
      rating: 5,
      role: "Keynsham Resident"
    },
    {
      name: "Mark Thompson",
      date: "April 2024",
      comment: "Helpful, timely, and fairly priced. Had some shelves fitted and a garden clearance done. Will definitely use again for future projects.",
      rating: 5,
      role: "Clifton Resident"
    },
    {
      name: "Emily Davies",
      date: "June 2024",
      comment: "Excellent service from start to finish. They mounted our TV perfectly and even helped hide the wires. Very tidy work!",
      rating: 5,
      role: "Bristol Resident"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-blue relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-orange text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              What Our Clients Say
            </h3>
          </div>
          <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="flex text-brand-orange">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div className="text-sm">
              <span className="text-white font-bold block">4.9/5 Rating</span>
              <span className="text-white/60">Based on 49+ Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col hover:bg-white/10 transition-colors group"
            >
              <Quote className="text-brand-orange w-10 h-10 mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="text-white/80 text-lg mb-8 italic leading-relaxed flex-grow">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xl uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-xs">{review.role}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    <span className="text-white/40 text-xs">{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://web.facebook.com/KJHSolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            See more reviews on Facebook <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight(props: any) {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
