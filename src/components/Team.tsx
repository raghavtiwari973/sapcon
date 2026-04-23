const team = [
  {
    name: 'Rajendra R. Palshikar',
    role: 'Founder & Managing Director',
    image: '/rajendra.png',
    desc: 'Director of Finance & Accounts. Managing Director of Sapcon Instruments.'
  },
  {
    name: 'Ashwin R. Palshikar',
    role: 'Director: Business Development',
    image: '/ashwin.png',
    desc: 'Leading business development, global strategic growth, and partnerships.'
  }
];

export default function Team() {
  return (
    <section id="team" className="relative ambient-bg py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div className="section-label mb-3">Meet Our Team</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050B1F] mb-4">
            The Minds Behind the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Precision
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our diverse team of engineers, researchers and industry experts are dedicated to pushing the boundaries of industrial automation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="fade-up group relative flex flex-col items-center hover:-translate-y-2 transition-all duration-300 max-w-[340px] mx-auto w-full rounded-2xl overflow-hidden border border-[#06B6D4]/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              style={{ transitionDelay: `${i * 0.1}s`, background: 'linear-gradient(160deg, #0D1438 0%, #0A0F2C 100%)' }}
            >
              {/* Image Container with Diagonal Cut */}
              <div
                className="w-full h-72 md:h-80 overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-500 scale-100 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center pt-2 pb-8 px-8 text-center w-full relative z-10 -mt-2">
                <h3 className="text-white text-xl font-bold mb-3">
                  {member.name}
                </h3>

                {/* Cyan Separator Line */}
                <div className="w-12 h-[2px] bg-[#06B6D4] mb-4 shadow-[0_0_8px_#06B6D4]"></div>

                <div className="text-[#06B6D4] text-xs font-bold uppercase tracking-wider mb-3">
                  {member.role}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
