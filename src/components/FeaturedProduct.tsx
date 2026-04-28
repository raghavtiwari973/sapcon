import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Activity, Droplets, ShieldCheck, Download, Settings, ChevronRight } from 'lucide-react';

const features = [
  'Compact tuning fork sensor for liquids',
  'Ex-ia intrinsically safe NAMUR design',
  'Universal supply: 18-55V DC and 90-265V AC',
  'Application temperature up to 200°C',
  'Outputs: 8.2V NAMUR, SPDT/DPDT relay, AS-i',
  'Process connections: thread, flange, tri-clamp',
];

const featuredProductInfo = {
  name: 'Elixir',
  type: 'Tuning Fork Level Switch for Liquids',
  description:
    'A compact liquid level sensor based on the tuning fork principle. It is a cost-effective solution with hygienic pipe fittings for point level detection in tanks, silos, and pipelines to prevent overfill and dry run conditions.',
  image: '/elixir.jpeg',
  details: [
    'ECTFE coated, polished, and hygienic fork',
    'Extendable probe length from 68 to 3000 mm',
    'Flame proof housing IIC with PESO, BIS, CCOE, EIL, Ex-ia and ATEX compliance',
    'Price range: INR 7000 to 35000 (validity: 6 months)',
    'Stock unit: Nos',
  ],
  learnMoreHref: 'https://www.sapconinstruments.com/products/tuning-fork-level-switch',
};

const otherProducts = [
  {
    name: 'Orbit-Lite: Rotary Paddle Level Switch for Solids',
    href: 'https://www.sapconinstruments.com/products/Orbit-Lite-Rotating-Paddle-Level-Sensor-for-solids',
    image: 'https://www.sapconinstruments.com/files/Sapcon-Instruments-Orbit-Lite-Rotating-Paddle.webp',
    productType: 'Product Templates',
    itemCode: 'RPL',
  },
  {
    name: 'Float & Board Type Level Indicator',
    href: 'https://www.sapconinstruments.com/products/float-and-board-type-level-indicator',
    image: 'https://www.sapconinstruments.com/files/Sapcon-Instruments-Float-and-Borad-Leve-Indicatore07581.webp',
    productType: 'Product Templates',
    itemCode: 'MECH_FAB',
  },
  {
    name: 'Vibrosonde: Vibrating Rod Type Level Sensor for Solids',
    href: 'https://www.sapconinstruments.com/products/vibrating-rod-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Vibrosonde-Vibrating-Rod-Level-Sensor46310b.webp',
    productType: 'Product Templates',
    itemCode: 'VS',
  },
  {
    name: 'Vital- Vibrating Fork Level Switch for Solids',
    href: 'https://www.sapconinstruments.com/products/vital-vibrating-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Vital-Vibrating-Fork-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'VITAL',
  },
  {
    name: 'Elixir- Tuning Fork Level Switch for Liquids',
    href: 'https://www.sapconinstruments.com/products/tuning-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Elixir-Tuning-Fork-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'ELIXIR',
  },
  {
    name: 'Vital-T: Tuning Fork Level Sensor for Solids',
    href: 'https://www.sapconinstruments.com/products/vital-t-tuning-fork-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Vital-T-Level-Switch.webp',
    productType: 'Product Templates',
    itemCode: 'VT',
  },
  {
    name: 'Elixir-T-Uni: Tuning Fork Level Sensor for Liquids',
    href: 'https://www.sapconinstruments.com/products/elixir-t-uni-tuning-fork-level-switch',
    image: 'https://www.sapconinstruments.com/files/Elixir-T-Uni975b0d.webp',
    productType: 'Product Templates',
    itemCode: 'ETU',
  },
  {
    name: 'Coat-Endure: RF-Admittance Level Switch for Sticky Solids and Liquids',
    href: 'https://www.sapconinstruments.com/products/rf-admittance-level-switch',
    image: 'https://www.sapconinstruments.com/files/Coat-Endure-Admittance-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'CE',
  },
  {
    name: 'Casper: Capacitive Level Sensor',
    href: 'https://www.sapconinstruments.com/products/casper-capacitive-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Casper-Capacitive-Level-Switch-Full-PTFE.webp',
    productType: 'Product Templates',
    itemCode: 'CPR',
  },
  {
    name: 'Capvel-FUEL: Level Sensor/Transmitter for remote tracking of fuel',
    href: 'https://www.sapconinstruments.com/products/capvel-fuel-capacitance-level-transmitter',
    image: 'https://www.sapconinstruments.com/files/Capvel-FUEL_Fuel-Level-Sensor.webp',
    productType: 'Product Templates',
    itemCode: 'VAT',
  },
  {
    name: 'SLA: RF Admittance Type Level Sensor with Buildup immunity',
    href: 'https://www.sapconinstruments.com/products/sla-dot-display-rf-admittance-level-sensor',
    image: 'https://www.sapconinstruments.com/files/SLA-Admittance-based-level-sensor-HD-Probe.png',
    productType: 'Product Templates',
    itemCode: 'SLA_D',
  },
  {
    name: 'SLA_B: RF Admittance Type Level Sensor for High Temperature Solids',
    href: 'https://www.sapconinstruments.com/products/sla-bar-display-rf-admittance-type-level-switch',
    image: 'https://www.sapconinstruments.com/files/SLA-B-Admittance-type-level-sensor1.png',
    productType: 'Product Templates',
    itemCode: 'SLA_B',
  },
  {
    name: 'SLA_S: RF Admittance Type Level Sensor',
    href: 'https://www.sapconinstruments.com/products/sla-series-rf-admittance-type-level-sensor',
    image: 'https://www.sapconinstruments.com/files/SLA-Series-Admittance-level-sensor.webp',
    productType: 'Product Templates',
    itemCode: 'SLA_S',
  },
  {
    name: 'SLC Series- Capacitive Level Sensor/Switch for Bulky Solids',
    href: 'https://www.sapconinstruments.com/products/slc-series-capacitive-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Split-Model(1).png',
    productType: 'Product Templates',
    itemCode: 'SLC_S',
  },
  {
    name: 'CAPVEL_ICT- Capacitance Level Transmitter for Liquids & Slurries',
    href: 'https://www.sapconinstruments.com/products/capvel-ict-capacitance-level-transmitter',
    image: 'https://www.sapconinstruments.com/files/Capvel-ICT_Level-transmitter.webp',
    productType: 'Product Templates',
    itemCode: 'CAPVEL_ICT',
  },
  {
    name: 'SLW: Conductive Liquid Level Sensor/Switch',
    href: 'https://www.sapconinstruments.com/products/slw-conductive-level-sensor',
    image: 'https://www.sapconinstruments.com/files/SLW-Conductivity-Type-Level-Switch.webp',
    productType: 'Product Templates',
    itemCode: 'SLW',
  },
  {
    name: 'Orbit: Rotating Paddle Level Sensor for Solids',
    href: 'https://www.sapconinstruments.com/products/orbit-rotating-paddle-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Orbit-Rotating-Paddle-Level-Sensor-Round-Enclosure.webp',
    productType: 'Product Templates',
    itemCode: 'RP',
  },
  {
    name: 'MPILC: Liquid Level Controller and Transmitter',
    href: 'https://www.sapconinstruments.com/products/mpilc-liquid-level-controller',
    image: 'https://www.sapconinstruments.com/files/Sapcon-Instruments-MPILC-Capacitance-level-transmitter.webp',
    productType: 'Product Templates',
    itemCode: 'MPILC',
  },
  {
    name: 'Smart SSI: Speed Monitoring and Control for Bucket Elevators in Cement and Steel Industries',
    href: 'https://www.sapconinstruments.com/products/sssi-speed-monitoring-system',
    image: 'https://www.sapconinstruments.com/files/SSSI-Speed-monitoring-bucket-elevator.webp',
    productType: 'Product Templates',
    itemCode: 'SSSI',
  },
  {
    name: 'MPLOH: Differential Level Transmitter for Water Treatment Plants',
    href: 'https://www.sapconinstruments.com/products/mploh-differential-level-transmitter',
    image: 'https://www.sapconinstruments.com/files/LOH-Differential-level-transmitter.webp',
    productType: 'Product Templates',
    itemCode: 'MPLOH',
  },
  {
    name: 'MPROF: Open Channel Rate of Flow Measurement for Water Treatment Plants',
    href: 'https://www.sapconinstruments.com/products/mprof-flow-rate-measurement',
    image: 'https://www.sapconinstruments.com/files/ROF-Flow-measurement-level-indicator188e38.webp',
    productType: 'Product Templates',
    itemCode: 'MPROF',
  },
  {
    name: 'Elefant: Level Transmitter for Deoiled-Toaster Application',
    href: 'https://www.sapconinstruments.com/products/elefant-level-transmitter-for-solvent-extraction',
    image: 'https://www.sapconinstruments.com/files/Elefant-Level-transmitter.webp',
    productType: 'Product Templates',
    itemCode: 'DT',
  },
  {
    name: 'Stellar: Hydraulic Pressure based Level Transmitter',
    href: 'https://www.sapconinstruments.com/products/stellar-hydraulic-pressure-transmitter',
    image: 'https://www.sapconinstruments.com/files/Stellar-Pressure-Level-Transmitter1c0082.webp',
    productType: 'Product Templates',
    itemCode: 'STLR',
  },
  {
    name: 'SLM: Vibrating Fork Level Sensor (Deprecated Product)',
    href: 'https://www.sapconinstruments.com/products/slm-vibrating-fork-level-sensor',
    image: 'https://www.sapconinstruments.com/files/SLM-Fork-level-sensor.webp',
    productType: 'Product Templates',
    itemCode: 'SLM',
  },
  {
    name: 'SLC_T- Capacitive Liquid Level Sensor',
    href: 'https://www.sapconinstruments.com/products/slc-tri-point-capacitive-type-level-sensor',
    image: 'https://www.sapconinstruments.com/files/Split-Model.webp',
    productType: 'Product Templates',
    itemCode: 'SLC_T',
  },
  {
    name: 'SLA_T-RF Admittance Level Sensor for Sticky media',
    href: 'https://www.sapconinstruments.com/products/sla-tri-point/admittance-level-switch',
    image: 'https://www.sapconinstruments.com/files/SLA-Admittance-level-sensor-ES-XS-Probe.webp',
    productType: 'Product Templates',
    itemCode: 'SLA_T',
  },
  {
    name: 'CAPVEL_LP-Capacitance Level Transmitter',
    href: 'https://www.sapconinstruments.com/products/capvel_lp-capacitance-type-level-transmitter',
    image: 'https://www.sapconinstruments.com/files/Capvel-LP-Capacitance-level-transmitter.webp',
    productType: 'Product Templates',
    itemCode: 'CAPVEL_LP',
  },
  {
    name: 'VIBE: Compact Point Level Switch',
    href: 'https://www.sapconinstruments.com/products/vibe-compact-point-level-switch',
    image: 'https://www.sapconinstruments.com/files/VibeNewImagewebp.webp',
    productType: 'Product Templates',
    itemCode: 'VIBE',
  },
];

const highlightedProducts = [
  {
    id: 'ultrasonic',
    name: 'Ultrasonic Level Transmitter',
    image: '/ultrasonic.png',
    tagline: 'Non-Contact',
    highlight: '15m Range',
    desc: 'Ultrasonic Level Transmitter used for non-contact liquid level measurement. Features range up to 15m, non-contact measurement and high accuracy.',
    features: [
      'Compact size',
      'User-friendly interface',
      'Temperature compensation',
      'Two-wire loop powered',
      'Easy installation & maintenance',
      'Modbus communication',
      'Explosion-proof design'
    ],
    specs: [
      { label: 'Measurement type', value: 'Non-contact' },
      { label: 'Range', value: '5m / 10m / 15m' },
      { label: 'Accuracy', value: '±0.2% / ±0.5%' },
      { label: 'Temperature', value: '-20°C to 70°C' },
      { label: 'Pressure', value: '-0.02 to 0.1 MPa' },
      { label: 'Output', value: '4–20mA, HART (optional)' },
      { label: 'Protection', value: 'IP65 / IP68' },
    ],
    apps: ['Sedimentation tanks', 'Sewage treatment', 'Food industry', 'Petrochemical industry', 'Water treatment plants', 'Overhead water tanks'],
    principle: 'Ultrasonic pulse transmission and reflection from liquid surface.',
    certs: ['CE marking', 'RoHS compliance']
  },
  {
    id: 'pressure-transmitter',
    name: 'Industrial Pressure Transmitter',
    image: '/pressure-transmitter.png',
    tagline: 'Compact & Robust',
    highlight: 'Up to 200 bar',
    desc: 'Industrial Pressure Transmitter used to measure pressure in gases, liquids, air, and oil. Designed to be compact, high accuracy and robust.',
    features: [
      'Stainless steel or brass construction',
      'Excellent price/performance ratio',
      'Compact design',
      'Customizable configurations'
    ],
    specs: [
      { label: 'Measuring ranges', value: 'up to 200 bar' },
      { label: 'Accuracy', value: 'high precision with minimal drift' },
      { label: 'Output signals', value: '4–20mA, 0–10V, 1–5V' },
      { label: 'Response time', value: '≤ 3 ms' },
      { label: 'Temperature range', value: '-40°C to 100°C' },
    ],
    apps: ['HVAC systems', 'Factory automation', 'Energy sector', 'Agriculture vehicles', 'Pneumatic systems'],
    principle: 'Diaphragm-based pressure sensing with resistance change.',
    certs: ['CE marking']
  },
  {
    id: 'flow-meter',
    name: 'Electromagnetic Flow Meter',
    image: '/EMAG.png',
    tagline: 'Maintenance-Free',
    highlight: 'No Moving Parts',
    desc: 'Electromagnetic Flow Meter used for measuring conductive liquid flow in industrial processes. High accuracy, no moving parts and maintenance-free.',
    features: [
      'Wide size range (DN15–DN1000)',
      'Bi-directional flow measurement',
      'High accuracy (0.2%)',
      'No moving parts',
      'Self-diagnosis and alarms'
    ],
    specs: [
      { label: 'Velocity range', value: '0.1–15 m/s' },
      { label: 'Accuracy', value: '±0.5% / ±0.2%' },
      { label: 'Output', value: '4–20mA, pulse output' },
      { label: 'Communication', value: 'RS485 Modbus' },
      { label: 'Power supply', value: 'AC/DC options' },
    ],
    apps: ['Water and wastewater treatment', 'Chemical industries', 'Food & beverage', 'Steel and manufacturing', 'Textile industries'],
    principle: 'Electromagnetic induction based flow measurement.',
    certs: ['Industrial compliance standards']
  },
  {
    id: 'radar-transmitter',
    name: 'Radar Level Transmitter',
    image: '/RADAR.png',
    tagline: 'FMCW Technology',
    highlight: 'High Precision (<2mm)',
    desc: 'Radar Level Transmitter using FMCW technology for precise level measurement. High precision, non-contact, extreme condition performance.',
    features: [
      'High accuracy (<2mm)',
      'Non-contact measurement',
      'Works in extreme temperature and pressure',
      'Explosion-proof design',
      'Fast response time'
    ],
    specs: [
      { label: 'Range', value: '10m / 20m' },
      { label: 'Temperature', value: '-40°C to 120°C' },
      { label: 'Pressure', value: '-0.1 to 2 MPa' },
      { label: 'Output', value: '4–20mA HART' },
      { label: 'Frequency', value: '76–81 GHz' },
    ],
    apps: ['Petrochemical industry', 'Mining and power plants', 'Water reservoirs', 'Industrial tanks'],
    principle: 'FMCW radar signal transmission and reflection.',
    certs: ['CE marking', 'RoHS', 'explosion-proof standards']
  }
];

type ProductItem = {
  name: string;
  href: string;
  image: string;
  productType: string;
  itemCode: string;
};

const normalizeProductName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, '');

const featuredProductKey = normalizeProductName(
  `${featuredProductInfo.name}${featuredProductInfo.type}`,
);

const uniqueOtherProducts = otherProducts.filter((product, index, allProducts) => {
  const productKey = normalizeProductName(product.name);

  if (productKey.includes(featuredProductKey) || featuredProductKey.includes(productKey)) {
    return false;
  }

  return (
    index ===
    allProducts.findIndex(
      (candidate) =>
        candidate.itemCode === product.itemCode ||
        normalizeProductName(candidate.name) === productKey,
    )
  );
});



export default function FeaturedProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHighlightModal, setShowHighlightModal] = useState(false);
  const [activeHighlightId, setActiveHighlightId] = useState(highlightedProducts[0].id);

  const activeHighlight = highlightedProducts.find(p => p.id === activeHighlightId) || highlightedProducts[0];

  return (
    <>
      {/* SECTION 1: Featured Product Card */}
      <section id="products" className="relative ambient-bg-dark py-20 lg:py-28">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
          <div className="text-center fade-up visible mb-12 sm:mb-16">
            <div className="section-label mb-3">Featured Product</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Elixir
              <span
                className="ml-3"
                style={{
                  background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                -Tuning Fork Level Switch for Liquids
              </span>
            </h2>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center">
              {/* Left: Featured Product Card */}
              <div className="fade-left visible flex flex-col items-center justify-center relative">
                <div
                  className="w-full max-w-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_24px_80px_rgba(2,6,23,0.35)] p-3 sm:p-4 lg:p-6 xl:p-8 overflow-hidden"
                  style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)' }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="text-white font-semibold text-sm uppercase tracking-wider">
                        {featuredProductInfo.name}
                      </div>
                      <div className="text-gray-400 text-xs sm:text-sm">
                        {featuredProductInfo.type}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#08102A]/70 overflow-hidden flex items-center justify-center">
                    <img
                      src={featuredProductInfo.image}
                      alt={featuredProductInfo.name}
                      className="w-full h-full min-h-[360px] lg:min-h-[480px] max-h-[55vh] lg:max-h-[65vh] object-cover relative z-10 hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn-streak btn-dark mt-4 inline-flex w-full items-center justify-center gap-2 text-white font-semibold px-4 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all whitespace-nowrap"
                  >
                    View All Products
                  </button>
                </div>
              </div>

              {/* Right: Key Features */}
              <div className="fade-right visible flex flex-col">
                <div className="mb-8">
                  <div className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Features</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {featuredProductInfo.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={feature}
                        className="group relative overflow-hidden rounded-xl p-4 border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                        style={{ background: 'rgba(255,255,255,0.03)' }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4A6CF7] to-[#06B6D4] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-300 text-xs sm:text-sm leading-tight pt-0.5">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-white font-semibold text-sm mb-3">Other Details</div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {featuredProductInfo.details.map((detail) => (
                        <li key={detail} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={featuredProductInfo.learnMoreHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-[#06B6D4] text-xs sm:text-sm font-semibold hover:text-white transition-colors"
                    >
                      Learn more <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Product Details Modal */}
      <AnimatePresence>
        {showHighlightModal && (
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
              className="relative w-full max-w-7xl bg-[#0D1840] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4]" />
              
              <button
                onClick={() => setShowHighlightModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="p-5 sm:p-6 lg:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
                  <div className="lg:col-span-12 mb-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">{activeHighlight.name}</h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl">
                      {activeHighlight.desc}
                    </p>
                  </div>

                  {/* Right Column: Visuals & CTAs */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-5 flex flex-col order-1 lg:order-2">
                    <div className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden p-3 sm:p-4 group">
                      <div className="relative z-20 mb-3 flex flex-wrap gap-2">
                        {activeHighlight.certs.map(cert => (
                          <span key={cert} className="px-3 py-1 bg-[#0A0F2C]/80 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-white flex items-center gap-1 shadow-lg">
                            <ShieldCheck size={12} className="text-green-400"/> {cert}
                          </span>
                        ))}
                      </div>

                      <div className="relative z-10 w-full flex items-center justify-center py-2 sm:py-4 overflow-hidden">
                        <img
                          src={activeHighlight.image}
                          alt={activeHighlight.name}
                          className="w-auto h-auto max-w-full max-h-[340px] sm:max-h-[380px] lg:max-h-[420px] object-contain object-center transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_40px_rgba(6,182,212,0.45)]"
                        />
                      </div>

                      <div className="pt-3 sm:pt-4">
                        <div className="text-[#06B6D4] font-bold text-xs uppercase tracking-widest mb-1">{activeHighlight.tagline}</div>
                        <div className="text-white font-bold text-xl sm:text-2xl drop-shadow-md">{activeHighlight.highlight}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <a href="#contact" onClick={() => setShowHighlightModal(false)} className="btn-streak flex items-center justify-center gap-2 bg-gradient-to-r from-[#4A6CF7] to-[#06B6D4] text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-transform hover:-translate-y-1 shadow-lg shadow-[#4A6CF7]/20">
                        Request Quote
                      </a>
                      <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-all hover:-translate-y-1">
                        <Download size={16} /> Datasheet
                      </button>
                    </div>
                  </div>

                  {/* Left Column: Technical Details */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 order-2 lg:order-1">
                    
                    {/* Features & Benefits */}
                    <div className="bg-[#0A0F2C] border border-white/5 rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-white/10 transition-colors">
                      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <Settings className="text-[#4A6CF7]" size={20} />
                        Features & Benefits
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                        {activeHighlight.features.map(feature => (
                          <div key={feature} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-[#06B6D4]/10 flex items-center justify-center flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" />
                            </div>
                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Specs */}
                    <div className="bg-[#0A0F2C] border border-white/5 rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-white/10 transition-colors">
                      <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <Activity className="text-[#06B6D4]" size={20} />
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {activeHighlight.specs.map(spec => (
                          <div key={spec.label}>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{spec.label}</div>
                            <div className="text-sm font-semibold text-gray-200">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications & Working Principle */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-[#0A0F2C] border border-white/5 rounded-3xl p-5 sm:p-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                          <Droplets className="text-[#4A6CF7]" size={18} />
                          Applications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeHighlight.apps.map(app => (
                            <span key={app} className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#4A6CF7]/10 to-[#06B6D4]/10 border border-[#4A6CF7]/20 rounded-3xl p-5 sm:p-6">
                        <h3 className="text-white font-bold mb-3 text-sm">Working Principle & Config</h3>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                          {activeHighlight.principle}
                        </p>
                        <a href="#contact" onClick={() => setShowHighlightModal(false)} className="inline-flex items-center gap-1 text-[#06B6D4] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">
                          View Installation Diagram <ChevronRight size={14} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Modal */}
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
                <div className="section-label mb-3">Our Offerings</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Explore All Products
                </h2>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
                  {uniqueOtherProducts.map((product: ProductItem, idx: number) => (
                    <a
                      key={idx}
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white leading-snug mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-4">
                          <span>{product.productType}</span>
                          <span className="text-gray-600">|</span>
                          <span>Item Code : {product.itemCode}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#06B6D4]">
                          Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  ))}
                  {highlightedProducts.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => {
                        setActiveHighlightId(product.id);
                        setShowHighlightModal(true);
                        setIsModalOpen(false);
                      }}
                      className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-white leading-snug mb-2">{product.name}</h3>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-400 mb-4">
                          <span>{product.tagline}</span>
                          <span className="text-gray-600">|</span>
                          <span>{product.highlight}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#06B6D4]">
                          Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
