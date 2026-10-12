import React, { useState } from 'react';
import { Sparkles, ChevronDown, MessageCircle, Phone, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('সব প্রশ্ন');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = ['সব প্রশ্ন', 'অর্ডার ও ডেলিভারি', 'পেমেন্ট ও বিকাশ', 'ফেব্রিক ও কোয়ালিটি', 'শোরুম ও এক্সচেঞ্জ'];

  const faqs = [
    {
      category: 'অর্ডার ও ডেলিভারি',
      question: '১. গাজীপুর, ঢাকা ও সারাদেশের অন্যান্য জেলায় ডেলিভারি চার্জ এবং সময় কত?',
      answer: 'পুবাইল বাজার ও গাজীপুর স্থানীয় ডেলিভারি চার্জ মাত্র ৬০ টাকা। ঢাকা সিটিতে ৮০ টাকা (২৪ ঘণ্টার মধ্যে)। ঢাকা বিভাগের বাইরে চট্টগ্রাম, সিলেট, রাজশাহী, খুলনা, বরিশাল, রংপুর ও ময়মনসিংহ বিভাগের সকল জেলায় ১৫০ টাকা (২-৩ কার্যদিবসে)। ৳৪,৫০০ বা তার বেশি অর্ডারে সারা বাংলাদেশে ফ্রি ডেলিভারি!',
    },
    {
      category: 'অর্ডার ও ডেলিভারি',
      question: '২. আমি কি পার্সেল খুলে দেখে ক্যাশ অন ডেলিভারিতে পেমেন্ট করতে পারব?',
      answer: 'হ্যাঁ, অবশ্যই! জনতা বস্ত্রালয় গ্রাহকদের আস্থার প্রতি পূর্ণ শ্রদ্ধাশীল। ডেলিভারি ম্যানের উপস্থিতিতে আপনি পার্সেল খুলে পণ্যের ফেব্রিক ও কালার যাচাই করে মূল্য পরিশোধ (Cash on Delivery) করতে পারবেন।',
    },
    {
      category: 'পেমেন্ট ও বিকাশ',
      question: '৩. পেমেন্টের কী কী মাধ্যম রয়েছে? বিকাশ বা নগদে কি পরিশোধ করা যায়?',
      answer: 'আমরা ক্যাশ অন ডেলিভারি (COD) ছাড়াও বিকাশ (bKash) ও নগদ (Nagad) এর মাধ্যমে অগ্রিম বা ডেলিভারির সময় পেমেন্ট গ্রহণ করি। আমাদের অফিশিয়াল হটলাইন নম্বরে (01714 480 948) যোগাযোগ করে নিরাপদ পেমেন্ট সম্পন্ন করতে পারবেন।',
    },
    {
      category: 'ফেব্রিক ও কোয়ালিটি',
      question: '৪. আপনাদের কাপড়গুলোর কোয়ালিটি ও ফেব্রিক কেমন?',
      answer: 'জনতা বস্ত্রালয় শুধুমাত্র প্রিমিয়াম কোয়ালিটির খাঁটি জয়পুরী সুতি থ্রি-পিস, লিলেন বাটিক, সফট কাতান শাড়ি, ডিজিটাল প্রিন্ট লন এবং শিপন ও জর্জেট ড্রেস সরবরাহ করে। প্রতিটি পোশাকের ফেব্রিক ১০০% মানসম্মত ও আরামদায়ক। ধোয়ার পরেও রঙের কোনো ক্ষতি হয় না।',
    },
    {
      category: 'ফেব্রিক ও কোয়ালিটি',
      question: '৫. থ্রি-পিস ও শাড়ির মাপ কেমন?',
      answer: 'আমাদের থ্রি-পিসের কামিজে আড়াই (২.৫) গজ, সেলোয়ারে আড়াই (২.৫) গজ এবং ওড়নায় সম্পূর্ণ পাঁচ (৫) হাত ফুল সাইজ থাকে। শাড়িগুলো ১২ হাত ফুল সাইজ সাথে ম্যাচিং ব্লাউজ পিস সংযুক্ত থাকে।',
    },
    {
      category: 'শোরুম ও এক্সচেঞ্জ',
      question: '৬. আপনাদের শোরুমে এসে কি সরাসরি দেখে কেনা সম্ভব?',
      answer: 'হ্যাঁ! আমাদের শোরুমের ঠিকানা: পুবাইল বাজার, গাজীপুর-১৭২১। আপনি সরাসরি শোরুমে এসে প্রতিটি ড্রেস ও শাড়ি দেখে, স্পর্শ করে ও বুঝে পছন্দ করে নিতে পারেন। এছাড়া কাপড়ে কোনো ত্রুটি থাকলে সাথে সাথে বিনামূল্যে এক্সচেঞ্জের পূর্ণ নিশ্চয়তা রয়েছে।',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'সব প্রশ্ন' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[#800F1F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>সার্ভিস ও ডেলিভারি তথ্য • জনতা বস্ত্রালয়</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1F1F]">
            সাধারণ জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            অর্ডার, ডেলিভারি ও পেমেন্ট সম্পর্কিত সকল প্রশ্নের স্পষ্ট ও নির্ভরযোগ্য উত্তর
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="আপনার প্রশ্ন বা জিজ্ঞাসা লিখে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-300 focus:border-[#800F1F] focus:outline-none bg-stone-50/50 shadow-inner"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#800F1F] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-semibold text-[#1F1F1F] hover:text-[#800F1F] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-300 flex-shrink-0 ${
                      isExpanded ? 'rotate-180 text-[#800F1F]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Banner */}
        <div className="mt-12 bg-[#1A1A1E] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold">
              সরাসরি কথা বলতে চান?
            </h4>
            <p className="text-xs text-stone-400">
              আমাদের টিম আপনাকে পোশাক সিলেকশন ও দ্রুত অর্ডারে সহায়তা করতে প্রস্তুত।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/8801714480948?text=Hi%20Janata%20Bostraloy,%20I%20have%20an%20inquiry%20regarding%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp চ্যাট (01714 480 948)</span>
            </a>

            <a
              href="tel:+8801714480948"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>কল করুন (01714 480 948)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
