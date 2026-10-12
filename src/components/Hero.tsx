import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronRight, ChevronLeft, MapPin, Phone, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, CategoryItem } from '../types';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface HeroProps {
  onExploreClick: () => void;
  onSelectCategory: (cat: string) => void;
  onSelectProduct?: (product: Product) => void;
  categories?: CategoryItem[];
  products?: Product[];
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onSelectCategory,
  onSelectProduct,
  categories,
  products = PRODUCTS,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Curated hero slides featuring real Janata Bostraloy uploaded products
  const heroSlides = [
    {
      badge: '★ নতুন কালেকশন • জয়পুরী কটন',
      title: 'Jaipuri Golden Mustard Cotton Suit',
      subtitle: 'খাঁটি জয়পুরী সুতি থ্রি-পিস ও আরামদায়ক ড্রেস',
      desc: 'জনতা বস্ত্রালয়ের এক্সক্লুসিভ জয়পুরী কটন থ্রি-পিস। ১০০% আরামদায়ক সুতি কাপড়, নামাজি ৫-হাত ওড়না। পুবাইল বাজার আউটলেট ও সারাদেশের ৮ বিভাগে ক্যাশ অন ডেলিভারি।',
      priceTag: 'অফার মূল্য: ৳১,৭৫০ BDT',
      product: products.find((p) => p.sku === 'JB-JP-0028') || products[0] || PRODUCTS[0],
      bgAccent: 'from-stone-950/95 via-stone-900/80 to-transparent',
    },
    {
      badge: '★ সিগনেচার শাড়ি • সফট কাতান',
      title: 'Royal Sapphire Soft Katan Saree',
      subtitle: 'সফট কাতান শাড়ি - সোনালী জরি পাড় ও মীনাকারি',
      desc: 'শাড়িটি অনেক সফট হওয়ায় খুব আরামদায়ক হবে। জমিনে রয়্যাল স্যাফায়ার ব্লু এবং সোনালী জরির গর্জিয়াস কাজ। সাথে ম্যাচিং ব্লাউজ পিস সংযুক্ত।',
      priceTag: 'বিশেষ অফার: ৳২,৬৫০ BDT',
      product: products.find((p) => p.category.includes('Sarees') || p.sku.includes('0079')) || products[1] || PRODUCTS[1],
      bgAccent: 'from-neutral-950/95 via-stone-950/80 to-transparent',
    },
    {
      badge: '★ ট্রেন্ডি বাটিক • লিলেন ফেব্রিক',
      title: 'Premium Indigo Linen Batik Dress',
      subtitle: 'লিলেন ফেব্রিক বাটিক কালেকশন • সফট ও দীর্ঘস্থায়ী',
      desc: 'নতুন কালেকশন লিলেন ফেব্রিক বাটিক ড্রেস। নিখুঁত ট্র্যাডিশনাল টাই-ডাই প্রিন্ট ও সর্বোচ্চ কোয়ালিটি সুতো। ডেলিভারি ম্যানের সামনে দেখে নেওয়ার সুযোগ।',
      priceTag: 'দাম: ৳১,৬৫০ BDT',
      product: products.find((p) => p.category.includes('Batik') || p.sku.includes('0104')) || products[2] || PRODUCTS[2],
      bgAccent: 'from-stone-950/95 via-neutral-900/80 to-transparent',
    },
    {
      badge: '★ পার্টি কালেকশন • বুটিক থ্রি-পিস',
      title: 'Designer Cobalt & Coral Boutique Set',
      subtitle: 'আকর্ষণীয় ডিজাইন বুটিক সুতি ও পার্টি লুক',
      desc: 'আকর্ষণীয় ডিজাইন বুটিক সুতি, আরামদায়ক যেকোনো অনুষ্ঠানে পড়ে যাওয়ার মত এক্সক্লুসিভ কালেকশন। নেকলাইনে রেশম সুতার গর্জিয়াস এমব্রয়ডারি।',
      priceTag: 'দাম: ৳১,৯৫০ BDT',
      product: products.find((p) => p.category.includes('Boutique') || p.sku.includes('0010')) || products[3] || PRODUCTS[3],
      bgAccent: 'from-neutral-950/95 via-stone-950/80 to-transparent',
    },
  ];

  const currentHero = heroSlides[currentSlide] || heroSlides[0];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const sidebarCategories = (categories && categories.length > 0
    ? categories
    : [
        { name: 'Jaipuri Cotton Three-Piece', query: 'Jaipuri Cotton Three-Piece' },
        { name: 'Linen & Batik Three-Piece', query: 'Linen & Batik Three-Piece' },
        { name: 'Boutique & Party Wear', query: 'Boutique & Party Wear' },
        { name: 'Digital Print Cotton Lawn', query: 'Digital Print Cotton Lawn' },
        { name: 'Soft Katan & Silk Sarees', query: 'Soft Katan & Silk Sarees' },
        { name: 'Chiffon & Georgette Sets', query: 'Chiffon & Georgette Sets' },
      ]
  ).map((c) => ({
    name: c.name,
    query: c.name,
    count: products.filter((p) => p.category === c.name).length || 5,
  }));

  return (
    <section className="bg-[#FAF7F2] border-b border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#800F1F]/10 border border-[#800F1F]/20 flex items-center justify-center text-[#800F1F] flex-shrink-0">
              <img
                src="/assets/janata-logo.svg"
                alt="Janata Bostraloy"
                className="w-10 h-10 object-contain"
                onError={handleImageError}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#1F1F1F]">
                  জনতা বস্ত্রালয় (Janata Bostraloy)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#800F1F] text-white uppercase tracking-wider">
                  Verified Store
                </span>
              </div>
              <p className="text-xs text-stone-600 flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#800F1F]" />
                  পুবাইল বাজার, গাজীপুর (Pubail Bazar, Gazipur-1721)
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="flex items-center gap-1 font-medium text-stone-700">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  হটলাইন: 01714 480 948
                </span>
                <span className="hidden sm:inline text-stone-300">•</span>
                <span className="text-[#800F1F] font-semibold">
                  অভিজাত পোশাকের নির্ভরযোগ্য প্রতিষ্ঠান
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <a
              href="https://wa.me/8801714480948?text=Hello%20Janata%20Bostraloy,%20I%20want%20to%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে অর্ডার</span>
            </a>
            <button
              onClick={onExploreClick}
              className="px-5 py-2.5 rounded-xl bg-[#800F1F] hover:bg-[#600B17] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>কালেকশন দেখুন</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Grid: Sidebar + Hero Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Vertical Categories Sidebar */}
          <div className="hidden lg:block lg:col-span-3 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#800F1F] text-white px-5 py-3.5 flex items-center justify-between font-bold text-xs uppercase tracking-wider">
              <span>JANATA COLLECTIONS</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono">28 DESIGNS</span>
            </div>
            <div className="divide-y divide-stone-100">
              {sidebarCategories.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectCategory(item.query);
                    onExploreClick();
                  }}
                  className="w-full text-left px-5 py-3.5 text-xs text-stone-700 hover:bg-stone-50 hover:text-[#800F1F] flex items-center justify-between group transition-colors cursor-pointer"
                >
                  <span className="font-medium truncate mr-2">{item.name}</span>
                  <div className="flex items-center gap-1.5 flex-shrink-0 text-stone-400 group-hover:text-[#800F1F]">
                    <span className="text-[11px] text-stone-400 font-mono">({item.count})</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 space-y-2">
              <div className="text-[11px] text-stone-600 bg-white p-2.5 rounded-xl border border-stone-200 leading-relaxed">
                <span className="font-bold text-[#800F1F] block">পোশাক স্পেসিফিকেশন:</span>
                ১০০% খাঁটি সুতি, লিলেন বাটিক, সফট কাতান শাড়ি ও পার্টি জর্জেট কালেকশন।
              </div>
              <button
                onClick={onExploreClick}
                className="w-full py-2.5 px-3 rounded-xl bg-[#800F1F] hover:bg-[#600B17] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>সব পোশাক দেখুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Main Hero Carousel */}
          <div className="lg:col-span-9">
            <div className="relative rounded-2xl overflow-hidden bg-[#181516] text-white shadow-xl min-h-[440px] sm:min-h-[480px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
              {/* Product Background Image */}
              <img
                src={getImageUrl(currentHero.product.image)}
                alt={currentHero.title}
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-75 transition-all duration-700 ease-in-out"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${currentHero.bgAccent}`} />

              {/* Top Controls */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#800F1F] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>{currentHero.badge}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#800F1F] border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-8 h-8 rounded-full bg-black/50 hover:bg-[#800F1F] border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Center Content */}
              <div className="relative z-10 my-auto max-w-xl space-y-4 pt-6 pb-6">
                <div>
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    {currentHero.title}
                  </h1>
                  <p className="font-serif italic text-xl sm:text-2xl text-[#FDE047] mt-1.5">
                    {currentHero.subtitle}
                  </p>
                </div>

                <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
                  {currentHero.desc}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      if (onSelectProduct) onSelectProduct(currentHero.product);
                      else onExploreClick();
                    }}
                    className="px-6 py-3.5 rounded-xl bg-[#800F1F] hover:bg-[#600B17] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                  >
                    <span>অর্ডার করুন (Order Now)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#FDE047] font-mono">
                    {currentHero.priceTag}
                  </div>
                </div>
              </div>

              {/* Bottom Indicators */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? 'w-8 bg-[#FDE047]' : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="text-[11px] text-stone-300 hidden sm:block">
                  সারাদেশের সকল জেলায় ক্যাশ অন হোম ডেলিভারি • পার্সেল দেখে নেওয়ার সুযোগ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
