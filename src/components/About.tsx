import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Wrench, Leaf, X } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Precision Manufacturing',
    desc: 'Close to 400K BOMs maintained with MOQ as small as one unit — prototype to full production.',
  },
  {
    icon: Wrench,
    title: 'Site-Driven Design',
    desc: 'Level sensors engineered by acknowledging real industrial site problems, not just lab conditions.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    desc: 'Waste Heat Recovery and energy-efficient sensing products that contribute to greener industry.',
  },
];

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="relative ambient-bg-dark py-28 overflow-hidden">

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,108,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="fade-left">
            <div className="section-label mb-3">About Sapcon</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Delivering Value with{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                R&D
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sapcon established itself as a premier manufacturer of Vibrating Forks, RF Admittance,
              and RF Capacitance Level Switches in India. For over 40 years, we have pioneered sensing
              technology that solves the toughest industrial challenges.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With 10% of revenue reinvested annually in research, we develop and upgrade instruments
              with our customers' real field problems in mind.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-streak inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl transition-transform hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: Pillar cards */}
          <div className="space-y-4 fade-right relative">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group relative flex items-start gap-5 p-6 rounded-2xl border border-white/5 hover:border-[#4A6CF7]/30 transition-all duration-300 hover:shadow-lg fade-up overflow-hidden"
                  style={{ 
                    transitionDelay: `${i * 0.1}s`,
                    background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(74,108,247,0.2), rgba(6,182,212,0.1))',
                      border: '1px solid rgba(74,108,247,0.2)',
                    }}
                  >
                    <Icon size={20} className="text-[#4A6CF7]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-base mb-1.5">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                  {/* Left stripe accent */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'linear-gradient(180deg, #4A6CF7, #06B6D4)' }}
                  />
                  {/* Subtle hover glow inside card */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 10% 50%, rgba(74,108,247,0.1) 0%, transparent 70%)' }}
                  />
                </div>
              );
            })}

            {/* Client image */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/5 shadow-sm fade-up mt-6 p-4"
              style={{ transitionDelay: '0.3s', background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)' }}
            >
              <img
                src="https://www.sapconinstruments.com/files/sapcon-Instruments-clients.webp"
                alt="Sapcon Clients"
                className="w-full h-24 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Learn More Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050B1F]/90 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0D1840] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]" />
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              <div className="p-8 lg:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <div className="section-label mb-3">Our Story</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Decades of Engineering Excellence
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
                  <p>
                    A proud 40+ year old Indian company, <strong className="text-white">Sapcon</strong> is a leading manufacturer of level measurement and speed instruments. Understanding your problems and always ready with a solution, we develop customized and cost-effective international quality standard products. Sapcon is synonymous with industrial process control and automation instruments. These include level indication related solutions and feature a broad range of level-sensing technologies such as capacitance, RF-admittance, conductivity, ultrasonic and magnetostrictive.
                  </p>
                  <p>
                    Having a family-managed business, we not only invest time, effort and money, but we've devoted our family to Sapcon. A strong R&D team, worldwide spread channel partner network, robust ERP & SCM installation, self-sustaining financial strength and continued and prompt service to its valuable customers form the backbone of Sapcon.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {[
                    { val: "40+", label: "Years in Process Control" },
                    { val: "90,000+", label: "Successful Installations" },
                    { val: "8000+", label: "Clients" },
                    { val: "90+", label: "Countries Exported To" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4] mb-1">
                        {stat.val}
                      </div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Vision */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Target size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Vision</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      To think ahead, think differently, think globally, think fast, aiming for the best, aiming for win-win partnership with our clients, vendors and partners. To convert ideas into reality and to make this reality in sync with the demand, we need to have two thoughts our management fondly believes in: custodianship and a sense of urgency in implementation.
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                        <ArrowRight size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-white">Mission</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      By 2025 SAPCON INSTRUMENTS aspires a leading position in the field of process control automation with significant global presence through products conforming to international standards. In India, we want to capitalise our brand equity to ensure first or in the least, the second rank in every industry segment we cater to.
                    </p>
                  </div>
                </div>

                {/* Benefits / Origins */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Our Origins</h3>
                  <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                    <p>
                      Setting the clock back to year 1983, Sapcon Instruments found itself surfaced with a vision to help automate the measurement of industrial processes.
                    </p>
                    <p>
                      Sapcon founders started the company in the commercial capital of the state of Madhya Pradesh; the city of Indore. The founders of Sapcon had a technical background with sound experience in engineering.
                    </p>
                    <p>
                      Without a fear of the unknown or the hitch of failure, the only thing our far sighted technocrats had in mind was a clear focus and a vision to be a renowned brand in the process automation market.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
