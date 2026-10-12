import React from 'react';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ShieldCheck, Truck, Clock, Sparkles } from 'lucide-react';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface FooterProps {
  onOpenAdmin?: () => void;
  onOpenTracking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenTracking }) => {
  return (
    <footer className="bg-[#1A1617] text-[#FCFAF7] border-t border-stone-800">
      {/* Top Value Strip */}
      <div className="border-b border-stone-800 bg-[#120F10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F2C94C] flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">সারাদেশে হোম ডেলিভারি</h5>
                <p className="text-[11px] text-stone-400">৮ বিভাগের প্রতিটি জেলায় দ্রুততম সময়ে পৌঁছানো হয়</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F2C94C] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">ক্যাশ অন ডেলিভারি (COD)</h5>
                <p className="text-[11px] text-stone-400">ডেলিভারি ম্যানের সামনে পার্সেল দেখে পেমেন্ট করুন</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F2C94C] flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">পুবাইল বাজার শোরুম</h5>
                <p className="text-[11px] text-stone-400">সরাসরি দোকানে এসে দেখে বুঝে পছন্দ করুন</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F2C94C] flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-white">১০০% অথেনটিক কোয়ালিটি</h5>
                <p className="text-[11px] text-stone-400">খাঁটি জয়পুরী কটন, লিলেন বাটিক ও সফট কাতান</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/janata-logo.svg"
                alt="Janata Bostraloy"
                onError={handleImageError}
                className="w-11 h-11 rounded-xl object-contain shadow border border-[#E8C9C1]"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                জনতা <span className="text-[#D4AF37] italic font-normal">বস্ত্রালয়</span>
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              জনতা বস্ত্রালয় — অভিজাত পোশাকের নির্ভরযোগ্য প্রতিষ্ঠান। পুবাইল বাজার, গাজীপুর ভিত্তিক বিশ্বস্ত শোরুম ও অনলাইন ফ্যাশন হাউস।
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com/janatabostraloy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                aria-label="Facebook: Janata Bostraloy"
                title="Facebook: Janata Bostraloy"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801714480948"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp: 01714 480 948"
                title="WhatsApp: 01714 480 948"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[11px] text-stone-400 space-y-0.5 pt-1">
              <p className="text-stone-300 font-medium">ফেসবুক পেজ: <span className="text-[#F2C94C]">Janata Bostraloy (45K followers)</span></p>
              <p className="text-stone-400">হোয়াটসঅ্যাপ: 01714 480 948</p>
            </div>
          </div>

          {/* Collections List */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              কালেকশন সমূহ
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  জয়পুরী কটন থ্রি-পিস
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  লিলেন ও বাটিক কালেকশন
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  বুটিক ও পার্টি কটন ড্রেস
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  ডিজিটাল প্রিন্ট লন কালেকশন
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  সফট কাতান ও সিল্ক শাড়ি
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F2C94C] transition-colors">
                  শিপন ও জর্জেট ড্রেস
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              যোগাযোগ ও শোরুম
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2C94C] flex-shrink-0 mt-0.5" />
                <span>Pubail Bazar, Gazipur, Bangladesh, 1721</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2C94C] flex-shrink-0" />
                <a href="tel:+8801714480948" className="hover:text-white font-mono">
                  01714 480 948 / +880 1714-480948
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2C94C] flex-shrink-0" />
                <a href="mailto:janatabostraloy@gmail.com" className="hover:text-white">
                  janatabostraloy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/8801714480948" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
                  WhatsApp Hotline (Click to Chat)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Help & Tracking */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              অর্ডার ও সাপোর্ট
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-[#F2C94C] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-[#F2C94C]" />
                  <span>লাইভ অর্ডার ট্র্যাকিং</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-[#F2C94C] transition-colors cursor-pointer text-left flex items-center gap-1.5 text-stone-400 hover:text-white"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                  <span>অ্যাডমিন ড্যাশবোর্ড</span>
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F2C94C] transition-colors">
                  ডেলিভারি পলিসি ও সাইজ গাইড
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F2C94C] transition-colors">
                  আমাদের কথা ও শোরুম পরিচিতি
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Payment Methods */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Janata Bostraloy (জনতা বস্ত্রালয়). All rights reserved. Pubail Bazar, Gazipur, Bangladesh.</p>
          <div className="flex items-center gap-3 text-stone-400 font-medium">
            <span>ক্যাশ অন ডেলিভারি (COD)</span>
            <span>•</span>
            <span>বিকাশ (bKash)</span>
            <span>•</span>
            <span>নগদ (Nagad)</span>
            <span>•</span>
            <span>শোরুম শপিং</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
