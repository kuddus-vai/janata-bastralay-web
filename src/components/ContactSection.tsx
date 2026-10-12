import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF7F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#800F1F] font-bold">যোগাযোগ • JANATA BOSTRALOY</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C2123]">Get In Touch With Janata Bostraloy</h2>
          <p className="text-xs sm:text-sm text-stone-600">
            পোশাক সংক্রান্ত যেকোনো তথ্য, শোরুম ভিজিট বা হোম ডেলিভারি অর্ডারের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCECE7] text-[#800F1F] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2C2123]">শোরুম ও আউটলেট</h4>
                  <p className="text-xs text-stone-600 mt-1 font-semibold">Pubail Bazar, Gazipur, Bangladesh, 1721</p>
                  <p className="text-[11px] text-stone-500 font-medium mt-1">পুবাইল বাজার, গাজীপুর (In-store shopping & Home delivery)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2C2123]">WhatsApp & Phone Hotline</h4>
                  <p className="text-xs text-stone-600 mt-1 font-mono font-bold">01714 480 948 / +880 1714-480948</p>
                  <a
                    href="https://wa.me/8801714480948?text=Hi%20Janata%20Bostraloy,%20I%20want%20to%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline mt-2"
                  >
                    <span>Chat on WhatsApp (01714 480 948)</span> →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCECE7] text-[#800F1F] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2C2123]">Official Email</h4>
                  <a
                    href="mailto:janatabostraloy@gmail.com"
                    className="text-xs text-stone-600 hover:text-[#800F1F] mt-1 block font-mono"
                  >
                    janatabostraloy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#2C2123]">Operating Hours</h4>
                  <p className="text-xs text-stone-600 mt-1">Always Open (সপ্তাহের ৭ দিন খোলা)</p>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="text-stone-500 font-medium">Facebook:</span>
                    <span className="font-semibold text-[#800F1F]">Janata Bostraloy (45K followers)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#2C2123]">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  জনতা বস্ত্রালয়ে যোগাযোগ করার জন্য ধন্যবাদ। আমাদের প্রতিনিধি দ্রুত আপনার সাথে WhatsApp (01714 480 948) অথবা ফোনে যোগাযোগ করবে।
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-[#800F1F] text-white text-xs font-bold rounded-xl hover:bg-[#600B17] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif font-bold text-xl text-[#2C2123] mb-4">
                  Send an Inquiry / Order Request
                </h3>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sanjida Islam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-[#800F1F] focus:border-[#800F1F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01712-XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-[#800F1F] focus:border-[#800F1F] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Message / Desired Dress Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="যে ড্রেস বা শাড়ি সম্পর্কে জানতে চান তা বিস্তারিত লিখুন..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-[#800F1F] focus:border-[#800F1F] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#800F1F] hover:bg-[#600B17] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Janata Bostraloy</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
