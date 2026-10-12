import React, { useState } from 'react';
import { ShoppingBag, Heart, Sparkles, MessageCircle, Menu, X, Search, Phone, ChevronDown, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryItem } from '../types';
import { getImageUrl, handleImageError } from '../utils/imageUtils';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAdmin?: () => void;
  onOpenTracking?: () => void;
  categories?: CategoryItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onOpenAdmin,
  onOpenTracking,
  categories,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [selectedCatName, setSelectedCatName] = useState('সকল কালেকশন');

  const navCategories = categories && categories.length > 0
    ? ['All Collections', ...categories.map((c) => c.name)]
    : Array.from(CATEGORIES);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromDropdown = (cat: string) => {
    setSelectedCatName(cat);
    onSelectCategory(cat);
    setCategoryDropdownOpen(false);
    scrollToSection('catalog');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToSection('catalog');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200 shadow-sm">
      {/* Top Black Notification Bar */}
      <div className="bg-[#111111] text-stone-300 text-[11px] sm:text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left helpline */}
          <div className="flex items-center gap-2">
            <span className="text-white font-medium flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#E28B96]" />
              <span className="hidden sm:inline">হটলাইন:</span> 01714 480 948
            </span>
            <span className="hidden md:inline text-stone-500">|</span>
            <span className="hidden md:inline text-stone-400">পুবাইল বাজার, গাজীপুর</span>
            <span className="hidden lg:inline text-stone-500">|</span>
            <span className="hidden lg:inline text-stone-400">janatabostraloy@gmail.com</span>
          </div>

          {/* Center delivery announcement */}
          <div className="hidden lg:flex items-center gap-2 text-stone-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>সারা বাংলাদেশের ৮ বিভাগে হোম ডেলিভারি ও ক্যাশ অন ডেলিভারি (COD)!</span>
          </div>

          {/* Right quick actions */}
          <div className="flex items-center gap-3 sm:gap-4 text-stone-300">
            <button
              onClick={onOpenTracking}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-[11px]"
            >
              <Truck className="w-3 h-3 text-[#800F1F]" />
              <span>অর্ডার ট্র্যাকিং</span>
            </button>
            <button
              onClick={onOpenAdmin}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded text-[11px] font-semibold text-amber-300 hover:bg-white/20"
            >
              <ShieldCheck className="w-3 h-3 text-amber-400" />
              <span>অ্যাডমিন</span>
            </button>
            <button
              onClick={onOpenWishlist}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>উইশলিস্ট</span>
              <span>({wishlistCount})</span>
            </button>
            <button
              onClick={onOpenCart}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>কার্ট</span>
              <span>({cartCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Middle Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-800 hover:text-[#800F1F] cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center gap-3 select-none"
        >
          <img
            src="/assets/janata-logo.svg"
            alt="Janata Bostraloy Logo"
            onError={handleImageError}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain shadow-sm border border-[#E8C9C1]"
          />
          <div className="flex flex-col items-start">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#800F1F]">
                জনতা বস্ত্রালয়
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                JANATA
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-wider text-stone-500 font-medium hidden sm:block">
              Pubail Bazar, Gazipur • অভিজাত পোশাকের নির্ভরযোগ্য প্রতিষ্ঠান
            </p>
          </div>
        </div>

        {/* Middle Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-xl mx-4 items-center bg-stone-50 rounded-full border border-stone-300 focus-within:border-[#800F1F] focus-within:ring-1 focus-within:ring-[#800F1F] overflow-hidden transition-all shadow-inner"
        >
          {/* Category Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border-r border-stone-300 flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span className="max-w-[110px] truncate">{selectedCatName}</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {categoryDropdownOpen && (
              <div className="absolute left-0 top-full mt-1.5 w-60 bg-white border border-stone-200 rounded-xl shadow-xl py-2 z-50">
                <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                  Select Category
                </div>
                {navCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectCategoryFromDropdown(cat)}
                    className="w-full text-left px-3.5 py-2 text-xs text-stone-700 hover:bg-[#FCECE7] hover:text-[#800F1F] transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="পোশাকের নাম, ফেব্রিক, বা ক্যাটাগরি খুঁজুন (যেমন: জয়পুরী, বাটিক, কাতান)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 text-xs text-stone-800 bg-transparent outline-none placeholder:text-stone-400"
          />

          <button
            type="submit"
            className="px-5 py-2.5 bg-[#800F1F] hover:bg-[#600B17] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/8801714480948?text=Hello%20Janata%20Bostraloy,%20I%20would%20like%20to%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>01714 480 948</span>
          </a>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2.5 rounded-xl border border-stone-200 text-stone-700 hover:text-[#800F1F] hover:border-[#800F1F] relative transition-colors cursor-pointer"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#800F1F] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Pill */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#800F1F] hover:bg-[#600B17] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 text-stone-900 text-[9px] font-bold flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden sm:flex flex-col items-start leading-none">
              <span className="text-[10px] text-[#FDE047] font-normal uppercase">কার্ট</span>
              <span className="font-bold text-xs">৳{cartTotal.toLocaleString()}</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Categories Navigation Bar (Desktop) */}
      <div className="hidden lg:block bg-stone-50 border-t border-stone-200 py-2.5 px-4 text-xs font-medium text-stone-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-[#800F1F] flex items-center gap-1.5">
              <span>কালেকশন:</span>
            </span>

            <nav className="flex items-center gap-5">
              <button
                onClick={() => {
                  onSelectCategory('All Collections');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                সব পোশাক ({CATEGORIES.length})
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Jaipuri Cotton Three-Piece');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                জয়পুরী কটন থ্রি-পিস
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Linen & Batik Three-Piece');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                লিলেন ও বাটিক কালেকশন
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Boutique & Party Wear');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                বুটিক ও পার্টি কটন
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Digital Print Cotton Lawn');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                ডিজিটাল প্রিন্ট লন
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Soft Katan & Silk Sarees');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                সফট কাতান ও সিল্ক শাড়ি
              </button>
              <button
                onClick={() => {
                  onSelectCategory('Chiffon & Georgette Sets');
                  scrollToSection('catalog');
                }}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                শিপন ও জর্জেট ড্রেস
              </button>
              <button
                onClick={() => scrollToSection('lookbook')}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                লুকবুক
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="hover:text-[#800F1F] transition-colors cursor-pointer"
              >
                FAQ ও ডেলিভারি
              </button>
            </nav>
          </div>

          {/* Right WhatsApp Support Link */}
          <a
            href="https://wa.me/8801714480948?text=Hello%20Janata%20Bostraloy,%20I%20would%20like%20to%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>হোয়াটসঅ্যাপ: 01714 480 948</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 font-medium text-sm text-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              হোম (Home)
            </button>
            <button
              onClick={() => {
                onSelectCategory('Jaipuri Cotton Three-Piece');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              জয়পুরী কটন থ্রি-পিস কালেকশন
            </button>
            <button
              onClick={() => {
                onSelectCategory('Linen & Batik Three-Piece');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              লিলেন ও বাটিক কালেকশন
            </button>
            <button
              onClick={() => {
                onSelectCategory('Boutique & Party Wear');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              বুটিক ও পার্টি কটন ড্রেস
            </button>
            <button
              onClick={() => {
                onSelectCategory('Digital Print Cotton Lawn');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              ডিজিটাল প্রিন্ট লন কালেকশন
            </button>
            <button
              onClick={() => {
                onSelectCategory('Soft Katan & Silk Sarees');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              সফট কাতান ও সিল্ক শাড়ি
            </button>
            <button
              onClick={() => {
                onSelectCategory('Chiffon & Georgette Sets');
                scrollToSection('catalog');
              }}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              শিপন ও জর্জেট ড্রেস
            </button>
            <button
              onClick={() => scrollToSection('lookbook')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              সিগনেচার লুকবুক
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              সাধারণ জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-stone-100 hover:text-[#800F1F]"
            >
              আমাদের কথা (জনতা বস্ত্রালয়)
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTracking) onOpenTracking();
              }}
              className="text-left py-2 border-b border-stone-100 text-stone-800 hover:text-[#800F1F] flex items-center gap-2 font-medium"
            >
              <Truck className="w-4 h-4 text-[#800F1F]" />
              <span>অর্ডার ট্র্যাকিং (Live Tracking)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAdmin) onOpenAdmin();
              }}
              className="text-left py-2 text-[#800F1F] hover:text-[#600B17] flex items-center gap-2 font-bold"
            >
              <ShieldCheck className="w-4 h-4 text-[#800F1F]" />
              <span>অ্যাডমিন প্যানেল (Admin Console)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
