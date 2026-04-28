import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface Client {
  id: number;
  name: string;
  category: string;
  logoUrl?: string;
}

const splitIntoRows = (items: Client[], rowCount: number): Client[][] => {
  const rows: Client[][] = Array.from({ length: rowCount }, () => []);

  items.forEach((item, index) => {
    rows[index % rowCount].push(item);
  });

  return rows;
};

const logoFileById: Record<number, string> = {
  1: '1.png',
  2: '2.jpg',
  3: '3.jpg',
  4: '4.jpg',
  5: '5.webp',
  6: '6.jpg',
  7: '7.jpg',
  8: '8.png',
  9: '9.jpg',
  10: '10.jpg',
  11: '11.png',
  12: '12.jpg',
  13: '13.jpg',
  14: '14.png',
  15: '15.jpg',
  16: '16.webp',
  17: '17.png',
  18: '18.webp',
  19: '19.png',
  20: '20.jpg',
  21: '21.jpg',
  22: '22.jpg',
  23: '23.jpg',
  24: '24.jpg',
  25: '25.png',
  26: '26.png',
  27: '27.jpg',
  28: '28.jpg',
  29: '29.png',
  30: '30.png',
  31: '31.jpg',
  32: '32.png',
  33: '33.webp',
  34: '34.jpg',
  35: '35.jpg',
  36: '36.jpg',
  37: '37.jpg',
  38: '38.jpg',
  39: '39.jpg',
  40: '40.jpg',
  41: '41.png',
  42: '42.png',
  43: '43.png',
  44: '44.png',
  45: '45.jpg',
  46: '46.png',
  47: '47.jpg',
  48: '48.png',
  49: '49.png',
  50: '50.webp',
  51: '51.png',
  52: '52.png',
  53: '53.png',
  54: '54.jpg',
  55: '55.jpg',
  56: '56.jpg',
  57: '57.png',
  58: '58.jpg',
  59: '59.jpg',
  60: '60.png',
  61: '61.png',
  62: '62.png',
  63: '63.png',
  64: '64.png',
  65: '65.png',
  66: '66.png',
  67: '67.jpg',
  68: '68.jpg',
  69: '69.png',
  70: '70.jpg',
  71: '71.jpg',
  72: '72.png',
  73: '73.jpg',
  74: '74.png',
  75: '75.jpg',
  76: '76.webp',
  77: '77.jpg',
  78: '78.png',
  79: '79.png',
  80: '80.avif',
};

const getClientLogoUrl = (id: number, fallbackUrl?: string): string | undefined => {
  const localFile = logoFileById[id];
  if (localFile) {
    return `/logos/${localFile}`;
  }
  return fallbackUrl;
};

const knownClients: Record<number, { name: string; category: string }> = {
  1: { name: 'Aarti Industries', category: 'Chemicals & Fertilizers' },
  2: { name: 'Alfa Laval', category: 'Engineering & EPC' },
  3: { name: 'Ambuja Cement', category: 'Cement & Building Materials' },
  4: { name: 'ArcelorMittal', category: 'Steel Industry' },
  5: { name: 'Astral Pipes', category: 'Manufacturing & Industrial' },
  6: { name: 'Vedanta & BALCO', category: 'Mining & Metals' },
  7: { name: 'Brahmaputra Cracker', category: 'Chemicals & Fertilizers' },
  8: { name: 'BARC', category: 'Government & Defense' },
  9: { name: 'BHEL', category: 'Government & Defense' },
  10: { name: 'Bunge', category: 'Agriculture & FMCG' },
  11: { name: 'NMDC', category: 'Mining & Metals' },
  12: { name: 'NALCO', category: 'Mining & Metals' },
  13: { name: 'MEIL', category: 'Engineering & EPC' },
  14: { name: 'Cipla', category: 'Pharmaceuticals & Healthcare' },
  15: { name: 'Nagarjuna Group', category: 'Manufacturing & Industrial' },
  16: { name: 'Dabur', category: 'Agriculture & FMCG' },
  17: { name: 'Dalmia Bharat', category: 'Cement & Building Materials' },
  18: { name: 'CCI', category: 'Cement & Building Materials' },
  19: { name: 'Deepak Group', category: 'Chemicals & Fertilizers' },
  20: { name: 'Desmet Ballestra', category: 'Engineering & EPC' },
  21: { name: 'Asian Paints', category: 'Paints & Coatings' },
  22: { name: 'Berger Paints', category: 'Paints & Coatings' },
  23: { name: 'HEG Limited', category: 'Manufacturing & Industrial' },
  24: { name: 'GE Power India Limited', category: 'Power & Energy' },
  25: { name: 'Gharda Chemicals Limited', category: 'Chemicals & Fertilizers' },
  26: { name: 'Tata Steel', category: 'Steel Industry' },
  27: { name: 'Gulbrandsen', category: 'Chemicals & Fertilizers' },
  28: { name: 'IFFCO', category: 'Chemicals & Fertilizers' },
  29: { name: 'Wonder Cement', category: 'Cement & Building Materials' },
  30: { name: 'Adani Cement', category: 'Cement & Building Materials' },
  31: { name: 'ICAM', category: 'Engineering & EPC' },
  32: { name: 'CAS', category: 'Engineering & EPC' },
  33: { name: 'Indian Air Force', category: 'Government & Defense' },
  34: { name: 'Indexel Engineering', category: 'Engineering & EPC' },
  35: { name: 'SUEZ', category: 'Water & Environment' },
  36: { name: 'Adani Wilmar', category: 'Agriculture & FMCG' },
  37: { name: 'Jindal Steel', category: 'Steel Industry' },
  38: { name: 'JSW Steel', category: 'Steel Industry' },
  39: { name: 'Jubilant Biosys', category: 'Pharmaceuticals & Healthcare' },
  40: { name: 'Kansai Nerolac Paints', category: 'Paints & Coatings' },
  41: { name: 'Bühler Group', category: 'Engineering & EPC' },
  42: { name: 'DCW Limited', category: 'Chemicals & Fertilizers' },
  43: { name: 'Engineering Projects (India)', category: 'Engineering & EPC' },
  44: { name: 'ABEPL', category: 'Infrastructure & Construction' },
  45: { name: 'Adaptive Engineering', category: 'Engineering & EPC' },
  46: { name: 'Neoplast', category: 'Manufacturing & Industrial' },
  47: { name: 'Bhushan Power & Steel', category: 'Steel Industry' },
  48: { name: 'BEML', category: 'Government & Defense' },
  49: { name: 'NTPC Limited', category: 'Power & Energy' },
  50: { name: 'Encore', category: 'Engineering & EPC' },
  51: { name: 'MOIL Limited', category: 'Mining & Metals' },
  52: { name: 'NCC Limited', category: 'Infrastructure & Construction' },
  53: { name: 'NTPC', category: 'Power & Energy' },
  54: { name: 'PI Industries', category: 'Chemicals & Fertilizers' },
  55: { name: 'Adani Power', category: 'Power & Energy' },
  56: { name: 'L&T', category: 'Engineering & EPC' },
  57: { name: 'Praj Industries', category: 'Engineering & EPC' },
  58: { name: 'Rallis India Limited', category: 'Chemicals & Fertilizers' },
  59: { name: 'SAIL', category: 'Steel Industry' },
  60: { name: 'Shri Ram Fibres Limited', category: 'Chemicals & Fertilizers' },  
  61: { name: 'GVPR Engineers Limited', category: 'Engineering & EPC' },
  62: { name: 'SUEZ', category: 'Water & Environment' },
  63: { name: 'TANGEDCO', category: 'Power & Energy' },
  64: { name: 'Thermax', category: 'Engineering & EPC' },
  65: { name: 'thyssenkrupp', category: 'Engineering & EPC' },
  66: { name: 'TSGENCO', category: 'Power & Energy' },
  67: { name: 'UltraTech Cement', category: 'Cement & Building Materials' },
  68: { name: 'United Breweries Limited', category: 'Agriculture & FMCG' },
  69: { name: 'UPL Limited', category: 'Chemicals & Fertilizers' },
  70: { name: 'VACman Environmental Solutions', category: 'Engineering & EPC' },
  71: { name: 'VPRPL', category: 'Engineering & EPC' },
  72: { name: 'WABAG', category: 'Water & Environment' },
  73: { name: 'Pidilite Industries', category: 'Chemicals & Fertilizers' },
  74: { name: 'WBPDCL', category: 'Power & Energy' },
  75: { name: 'Sun Pharma', category: 'Pharmaceuticals & Healthcare' },
  76: { name: 'Xperion Automation', category: 'Engineering & EPC' },
  77: { name: 'Zydus Lifesciences', category: 'Pharmaceuticals & Healthcare' },
  78: { name: 'Grasim Industries', category: 'Cement & Building Materials' },
  79: { name: 'Aditya Birla Group', category: 'Conglomerate / Group' },
  80: { name: 'SCCL', category: 'Mining & Metals' }
};

const categoriesList = [
  'Chemicals & Fertilizers',
  'Cement & Building Materials',
  'Mining & Metals',
  'Steel Industry',
  'Engineering & EPC',
  'Power & Energy',
  'Government & Defense',
  'Agriculture & FMCG',
  'Pharmaceuticals & Healthcare',
  'Paints & Coatings',
  'Water & Environment',
  'Infrastructure & Construction',
  'Manufacturing & Industrial',
  'Conglomerate / Group'
];

const allClients: Client[] = Object.keys(logoFileById).map((idStr) => {
  const id = Number(idStr);
  const known = knownClients[id];
  return {
    id,
    name: known ? known.name : `Partner ${id}`,
    category: known ? known.category : categoriesList[id % categoriesList.length],
  };
});
const clientRows = splitIntoRows(allClients, 3);

const getInitials = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');

const getGeneratedLogoUrl = (name: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0b1f52"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="22" font-weight="700" fill="#e6f0ff">${getInitials(name)}</text></svg>`,
  )}`;

interface ClientItemProps {
  id: number;
  name: string;
  logoUrl?: string;
}

const ClientItem: React.FC<ClientItemProps> = ({ id, name, logoUrl }) => {
  const resolvedLogoUrl = getClientLogoUrl(id, logoUrl);
  const fallbackLogoUrl = getGeneratedLogoUrl(name);
  const [imgSrc, setImgSrc] = useState(
    resolvedLogoUrl && !resolvedLogoUrl.includes('temp-logo-link.example.com')
      ? resolvedLogoUrl
      : fallbackLogoUrl,
  );

  return (
    <div className="flex-shrink-0 group">
      <div className="px-6 py-3 md:py-4 rounded-2xl bg-[#0a1638]/65 backdrop-blur-md border border-blue-400/20 hover:bg-[#132b68]/70 hover:border-blue-300/40 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-900/40">
        <div className="flex items-center gap-4 whitespace-nowrap">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={`${name} logo`}
              loading="lazy"
              className="h-14 w-14 md:h-16 md:w-16 rounded-2xl object-contain bg-white p-1.5"
              onError={() => {
                if (imgSrc !== fallbackLogoUrl) {
                  setImgSrc(fallbackLogoUrl);
                } else {
                  setImgSrc('');
                }
              }}
            />
          ) : (
            <span
              className="inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-blue-300/20 text-sm font-bold text-blue-100"
              title={name}
            >
              {getInitials(name)}
            </span>
          )}
          {name && (
            <span className="uppercase text-blue-100/75 group-hover:text-blue-100 tracking-wide text-xs md:text-sm font-semibold transition-colors duration-300">
              {name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

interface ScrollingRowProps {
  clients: typeof allClients;
  speed: 'slow' | 'normal' | 'fast';
}

const ScrollingRow: React.FC<ScrollingRowProps> = ({ clients, speed }) => {
  const [isHovered, setIsHovered] = useState(false);
  const marqueeClients = [...clients, ...clients, ...clients];

  // Determine animation duration based on speed
  const durations = {
    slow: '60s',
    normal: '50s',
    fast: '40s',
  };

  const animationDuration = durations[speed];

  const animationStyle = `
    @keyframes marquee-left-${speed} {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-33.333%, 0, 0);
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <div
        className="w-full overflow-hidden py-3 group/row"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        {/* Scrolling container */}
        <div
          className="flex w-max max-w-none flex-nowrap gap-4 pl-8 pr-4"
          style={{
            animation: `marquee-left-${speed} ${animationDuration} linear infinite`,
            animationPlayState: isHovered ? 'paused' : 'running',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            willChange: 'transform',
          }}
        >
          {/* Tripled set keeps track > 300% viewport for seamless no-gap looping */}
          {marqueeClients.map((client, index) => (
            <ClientItem
              key={`${client.id}-marquee-${index}`}
              id={client.id}
              name={client.name}
              logoUrl={client.logoUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

interface ClientsModalPanelProps {
  isOpen: boolean;
  onClose: () => void;
  clients: Client[];
}

interface ClientLogoProps {
  id: number;
  name: string;
  logoUrl?: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ id, name, logoUrl }) => {
  const resolvedLogoUrl = getClientLogoUrl(id, logoUrl);
  const fallbackLogoUrl = getGeneratedLogoUrl(name);
  const [imgSrc, setImgSrc] = useState(resolvedLogoUrl ?? fallbackLogoUrl);

  if (imgSrc) {
    return (
      <img
        src={imgSrc}
        alt={`${name} logo`}
        loading="lazy"
        className="h-20 w-full max-w-[112px] md:h-24 md:max-w-[128px] mb-3 rounded-2xl object-contain bg-white px-3 py-2 shadow-sm"
        onError={() => {
          if (imgSrc !== fallbackLogoUrl) {
            setImgSrc(fallbackLogoUrl);
          } else {
            setImgSrc('');
          }
        }}
      />
    );
  }

  return (
    <div
      className="mb-3 inline-flex h-20 w-full max-w-[112px] md:h-24 md:max-w-[128px] items-center justify-center rounded-2xl bg-blue-300/20 text-lg font-bold text-blue-100"
      title={name}
    >
      {getInitials(name)}
    </div>
  );
};

const ClientsModalPanel: React.FC<ClientsModalPanelProps> = ({ isOpen, onClose, clients }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  React.useEffect(() => {
    if (!isOpen) setActiveCategory('All');
  }, [isOpen]);

  if (!isOpen) return null;
  if (typeof document === 'undefined') return null;

  const allCategories = ['All', ...Array.from(new Set(clients.map(c => c.category)))];
  const filteredClients = activeCategory === 'All'
    ? clients
    : clients.filter(c => c.category === activeCategory);

  const modalContent = (
    <>
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[90] transition-opacity duration-300"
        onClick={onClose}
        style={{
          animation: isOpen ? 'fade-in 0.3s ease-out' : 'fade-out 0.3s ease-in',
        }}
      />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        @keyframes modal-scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
        onClick={onClose}
      >
        <div
          className="bg-gradient-to-b from-slate-900/95 to-slate-950 border border-blue-500/20 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden pointer-events-auto shadow-2xl shadow-blue-950/50"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'modal-scale-in 0.3s ease-out',
          }}
        >
          <div className="relative border-b border-blue-500/20 p-6 md:p-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">All Clients</h3>
            </div>

            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500/10 transition-colors duration-200 text-slate-400 hover:text-blue-300"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Category Filter Dropdown */}
          <div className="px-4 sm:px-6 md:px-8 py-4 border-b border-blue-500/20 bg-slate-900/50">
            <div className="max-w-sm">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Filter by Category
              </label>
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-blue-400/25 bg-slate-900/90 px-4 py-3 pr-12 text-sm font-medium text-slate-200 outline-none transition-all duration-200 hover:border-blue-400/45 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/20"
                >
                  {allCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-260px)]">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredClients.map((client, index) => (
                  <div
                    key={client.id}
                    className="group"
                    style={{
                      animation: `fade-in 0.3s ease-out ${index * 0.02}s both`,
                    }}
                  >
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-400/40 transition-all duration-300 cursor-pointer hover:scale-[1.03] min-h-[220px] h-full flex flex-col items-center justify-start text-center group-hover:shadow-lg group-hover:shadow-blue-500/20">
                      <ClientLogo
                        id={client.id}
                        name={client.name}
                        logoUrl={client.logoUrl}
                      />
                      <div className="mt-2 w-full">
                        <p className="text-slate-300 group-hover:text-blue-300 font-semibold text-sm sm:text-base leading-snug tracking-wide transition-colors duration-200 line-clamp-2 min-h-[2.75rem] flex items-center justify-center">
                          {client.name}
                        </p>
                        <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                          {client.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

const Clients: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-16 overflow-hidden bg-[#050b1f]">
      {/* Dark blue ambient layers */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#050b1f_0%,#071235_50%,#050b1f_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.14)_0%,transparent_60%)]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="section-label mb-3">Our Clients</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          
          {/* Gradient underline accent */}
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-blue-400/35 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-blue-400/35 via-cyan-300/25 to-blue-400/15 rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-blue-400/35 rounded-full" />
          </div>
        </div>

        {/* Scrolling Rows */}
        <div className="mb-8 w-full">
          {/* Row 1 - always visible */}
          <div className="relative">
            <ScrollingRow clients={clientRows[0]} speed="normal" />
          </div>

          {/* Row 2 - hidden on very small screens */}
          <div className="relative hidden sm:block">
            <ScrollingRow clients={clientRows[1]} speed="slow" />
          </div>

          {/* Row 3 - desktop only */}
          <div className="relative hidden lg:block">
            <ScrollingRow clients={clientRows[2]} speed="fast" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group px-8 py-4 rounded-full border border-blue-400/30 hover:border-cyan-300/70 text-blue-50 font-semibold tracking-wide uppercase text-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-900/40 backdrop-blur-sm hover:bg-blue-500/15"
          >
            View All Clients
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <ClientsModalPanel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        clients={allClients}
      />
    </section>
  );
};

export default Clients;
