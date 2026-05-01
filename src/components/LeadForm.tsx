import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Linkedin, Facebook, Youtube } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91-731-4855999' },
  { icon: Mail, label: 'Email', value: 'web@sapcon.in' },
  { icon: MapPin, label: 'Office Address', value: '131, Palshikar Colony, Indore, Madhya Pradesh 452007, India' },
  { icon: MapPin, label: 'Plant Address', value: 'C44, Sanwer Road Industrial Area, Indore, Madhya Pradesh 452015, India' },
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvykygw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative ambient-bg-dark py-20 lg:py-28 overflow-hidden">

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(74,108,247,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <div className="section-label mb-3">Get In Touch</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              US
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            By contacting Sapcon Instruments Pvt Ltd, via the contact form or the above phone numbers, you agree to be contacted by email or telephone(via 3rd Party Service) by our representative
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 fade-left">
            <div
              className="rounded-3xl p-8 border border-white/5"
              style={{ background: 'linear-gradient(160deg, rgba(74,108,247,0.08), rgba(6,182,212,0.04))' }}
            >
              <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(74,108,247,0.15)', border: '1px solid rgba(74,108,247,0.2)' }}
                    >
                      <Icon size={17} className="text-[#4A6CF7]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-white text-sm font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="h-px mb-8"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(74,108,247,0.3), transparent)' }}
              />

              {/* Social Media Links */}
              <div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/sapcon-instruments-pvt.-ltd./"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg shadow-[#4A6CF7]/20 border border-gray-200 hover:border-[#4A6CF7] hover:text-[#4A6CF7] text-gray-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4A6CF7]/30"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/sapconlevel"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg shadow-[#4A6CF7]/20 border border-gray-200 hover:border-[#4A6CF7] hover:text-[#4A6CF7] text-gray-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4A6CF7]/30"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCnwfR3EGXaPxw9vpMj7Ongg"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg shadow-[#4A6CF7]/20 border border-gray-200 hover:border-[#06B6D4] hover:text-[#06B6D4] text-gray-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#06B6D4]/30"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 fade-right">
            <div
              className="rounded-3xl p-8 border border-white/5"
              style={{ background: 'linear-gradient(160deg, #0D1438 0%, #0A0F2C 100%)' }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(74,108,247,0.2), rgba(6,182,212,0.1))' }}
                  >
                    <CheckCircle size={32} className="text-[#4A6CF7]" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }); }}
                    className="mt-6 text-[#4A6CF7] text-sm font-medium hover:text-[#06B6D4] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="dark-input w-full rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Number"
                        className="dark-input w-full rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="dark-input w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="dark-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-streak w-full flex items-center justify-center gap-3 text-white font-semibold py-4 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #4A6CF7, #06B6D4)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
