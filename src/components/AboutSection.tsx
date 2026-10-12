import React from 'react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#800F1F]/10 text-[#800F1F] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PUBAIL BAZAR, GAZIPUR • BANGLADESH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C2123] leading-tight">
              About Janata Bostraloy <br className="hidden sm:inline" />
              <span className="text-[#800F1F]">জনতা বস্ত্রালয় • অভিজাত পোশাকের নির্ভরযোগ্য প্রতিষ্ঠান</span>
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              Welcome to <strong>Janata Bostraloy (জনতা বস্ত্রালয়)</strong>, located at <strong>Pubail Bazar, Gazipur</strong>. Janata Bostraloy is a reliable and unique place where you can get the best quality women's clothing and traditional Bangladeshi ensembles.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
              We specialize in <strong>খাঁটি জয়পুরী কটন থ্রি-পিস</strong>, <strong>এক্সক্লুসিভ লিলেন ফেব্রিক বাটিক</strong>, <strong>বুটিক ও পার্টি কটন কালেকশন</strong>, <strong>সফট কাতান শাড়ি</strong>, এবং <strong>শিপন ও জর্জেট ড্রেস</strong>। আমাদের শোরুমে এসে সরাসরি দেখে পছন্দ করে নেওয়ার সুযোগ রয়েছে, পাশাপাশি সারাদেশে ক্যাশ অন ডেলিভারি সার্ভিসের মাধ্যমে ঘরে বসেই পেয়ে যাবেন আপনার পছন্দের পোশাক।
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#800F1F]/10 text-[#800F1F] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">১০০% গুণগত মান</h4>
                <p className="text-[11px] text-stone-500">প্রিমিয়াম সুতি, লিলেন বাটিক ও সফট কাতান সিল্কের ১০০% কোয়ালিটি নিশ্চয়তা।</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#800F1F]/10 text-[#800F1F] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">শোরুম ও অনলাইন</h4>
                <p className="text-[11px] text-stone-500">পুবাইল বাজার শোরুম ভিজিট করুন অথবা অনলাইনে সরাসরি অর্ডার করুন।</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FCFAF7] border border-stone-200 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#800F1F]/10 text-[#800F1F] flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#2C2123]">ক্যাশ অন ডেলিভারি</h4>
                <p className="text-[11px] text-stone-500">৮ বিভাগের প্রতিটি জেলায় পার্সেল হাতে পেয়ে মূল্য পরিশোধের সুবিধা।</p>
              </div>
            </div>

            {/* Location & Contact Highlights */}
            <div className="p-4 rounded-xl bg-[#FCECE7]/60 border border-[#F3D7D0] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#800F1F] flex-shrink-0" />
                <div>
                  <span className="font-bold text-xs text-[#3D1D23] block">পুবাইল বাজার শোরুম (Pubail Bazar, Gazipur-1721)</span>
                  <span className="text-[11px] text-stone-600">হটলাইন / WhatsApp: 01714 480 948 • Email: janatabostraloy@gmail.com</span>
                </div>
              </div>
              <a
                href="https://wa.me/8801714480948?text=Hello%20Janata%20Bostraloy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#800F1F] hover:bg-[#600B17] text-white text-xs font-semibold transition-colors"
              >
                হোয়াটসঅ্যাপে যোগাযোগ
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-200 relative group">
              <img
                src={getImageUrl('/assets/products/0028.jpeg')}
                alt="Janata Bostraloy Traditional Ensemble"
                onError={handleImageError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quality Seal Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-stone-200 flex items-center gap-3.5">
                <img
                  src="/assets/janata-logo.svg"
                  alt="Janata Bostraloy"
                  onError={handleImageError}
                  className="w-12 h-12 rounded-xl object-contain shadow border border-[#E8C9C1] flex-shrink-0"
                />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#2C2123]">জনতা বস্ত্রালয় গ্যারান্টি</h5>
                  <p className="text-[11px] text-stone-500">অভিজাত পোশাকের নির্ভরযোগ্য প্রতিষ্ঠান • পুবাইল বাজার, গাজীপুর।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
