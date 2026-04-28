import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Wrench, Leaf, X, ChevronLeft, ChevronRight, Maximize2, Grid } from 'lucide-react';

const images = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/${i + 1}.jpeg`
}));

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [previewImage, setPreviewImage] = useState<typeof images[0] | null>(null);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <>
      <section id="about" className="relative ambient-bg-dark py-20 lg:py-28 overflow-hidden">

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,108,247,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left */}
          
          <div className="lg:col-span-5 xl:pr-4 fade-left">
            <div className="section-label mb-3">About Sapcon</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            RFID-Based Fully Automated Manufacturing {' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Facility
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Sapcon established itself as a premier manufacturer of Vibrating Forks, RF Admittance and RF Capacitance Level Switches in India. For over 40 years, we have pioneered sensing
              technology that solves the toughest industrial challenges.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              With 10% of revenue reinvested annually in research, we develop and upgrade instruments
              with our customers' real field problems in mind.
            </p>

            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-streak inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl transition-transform hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
              >
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Pillar cards */}
          <div className="lg:col-span-7 xl:pl-2 space-y-5 fade-right relative mt-12 lg:mt-0">
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

            {/* Installations card */}
            <div
              className="relative flex flex-col rounded-3xl overflow-hidden border border-[#4A6CF7]/20 shadow-2xl shadow-blue-900/10 hover:border-[#4A6CF7]/40 transition-colors duration-300 fade-up mt-6"
              style={{ transitionDelay: '0.3s', background: 'linear-gradient(160deg, #0D1840 0%, #0A0F2C 100%)' }}
            >
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    alt={`Installation ${images[currentIndex].id}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-transparent to-transparent pointer-events-none z-10" />

                <div className="absolute inset-0 flex items-center justify-between px-3 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#4A6CF7] transition-all transform hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <button
                  onClick={() => setPreviewImage(images[currentIndex])}
                  className="absolute top-3 right-3 z-20 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 relative z-20">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Explore our industry</h3>
                  <p className="text-sm text-gray-400">Deployed in real-world industrial environments.</p>
                </div>
                <button
                  onClick={() => setShowGrid(true)}
                  className="w-full md:w-auto md:min-w-[180px] flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/30"
                >
                  <Grid size={18} /> View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Installations Grid Modal */}
      <AnimatePresence>
        {showGrid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050B1F]/90 backdrop-blur-xl flex flex-col p-6 lg:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">All Installations</h3>
                <button
                  onClick={() => setShowGrid(false)}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/10"
                    onClick={() => setPreviewImage(img)}
                  >
                    <img
                      src={img.src}
                      alt={`Installation ${img.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Image Preview */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[210] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-4 lg:p-12"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full rounded-2xl overflow-hidden flex flex-col items-center"
            >
              <img src={previewImage.src} alt={`Installation ${previewImage.id}`} className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
