import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { INITIAL_CATEGORIES, INITIAL_USERS, INITIAL_ORDERS } from './data/adminSeed';
import { Product, CartItem, CategoryItem, UserItem, Order } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryBrowse } from './components/CategoryBrowse';
import { BestSellingSection } from './components/BestSellingSection';
import { CountdownBanner } from './components/CountdownBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { CategoryShowcase } from './components/CategoryShowcase';
import { SpotlightShowcase } from './components/SpotlightShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { LookbookSection } from './components/LookbookSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/admin/AdminPanel';
import { OrderTrackingModal } from './components/OrderTrackingModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Collections');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Products state with localStorage persistence
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      // Clear legacy storage keys from previous stores
      [
        'blessed_boutique_products',
        'blessed_boutique_categories',
        'blessed_boutique_categories_v2',
        'blessed_boutique_users',
        'blessed_boutique_orders',
        'blessed_boutique_cart',
        'blessed_boutique_wishlist',
        'brithi_products',
        'brithi_categories',
        'brithi_users',
        'brithi_orders',
      ].forEach((k) => {
        try {
          localStorage.removeItem(k);
        } catch {}
      });

      const saved = localStorage.getItem('janata_bostraloy_products_v5');
      if (!saved) return PRODUCTS;
      const parsed: Product[] = JSON.parse(saved);
      const prodMap = new Map(PRODUCTS.map((p) => [p.id, p]));

      // Only preserve canonical products and new admin-added products with valid assets
      const valid: Product[] = [];
      parsed.forEach((p) => {
        const canonical = prodMap.get(p.id);
        if (canonical) {
          valid.push({
            ...p,
            image: canonical.image,
            additionalImages:
              canonical.additionalImages && canonical.additionalImages.length > 0
                ? canonical.additionalImages
                : [canonical.image],
          });
        } else if (
          p.image &&
          !p.image.includes('1ST') &&
          !p.image.includes('776222') &&
          !p.image.includes('blessed') &&
          !p.image.includes('brithi')
        ) {
          valid.push(p);
        }
      });

      // Ensure all canonical products exist
      PRODUCTS.forEach((p) => {
        if (!valid.some((item) => item.id === p.id)) {
          valid.push(p);
        }
      });

      return valid.length > 0 ? valid : PRODUCTS;
    } catch {
      return PRODUCTS;
    }
  });

  // Categories state with localStorage persistence and image healing
  const [categories, setCategories] = useState<CategoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('janata_bostraloy_categories_v5');
      if (!saved) {
        return INITIAL_CATEGORIES;
      }
      const parsed: CategoryItem[] = JSON.parse(saved);
      // Filter out any old legacy categories
      const cleanList = parsed.filter(
        (c) =>
          !c.name.toLowerCase().includes('roheenaz') &&
          !c.name.toLowerCase().includes('morja') &&
          !c.name.toLowerCase().includes('bithi') &&
          !c.name.toLowerCase().includes('blessed') &&
          !c.name.toLowerCase().includes('readymade 3-piece sets') &&
          !c.name.toLowerCase().includes('festive georgette suits')
      );
      const catMap = new Map(INITIAL_CATEGORIES.map((c) => [c.id, c]));

      const healed = cleanList.map((c) => {
        const canonical = catMap.get(c.id);
        if (canonical) {
          return {
            ...c,
            image: canonical.image,
          };
        }
        return c;
      });

      // Ensure all initial categories exist
      INITIAL_CATEGORIES.forEach((c) => {
        if (!healed.some((item) => item.id === c.id)) {
          healed.push(c);
        }
      });

      return healed.length > 0 ? healed : INITIAL_CATEGORIES;
    } catch {
      return INITIAL_CATEGORIES;
    }
  });

  // Users state with localStorage persistence
  const [users, setUsers] = useState<UserItem[]>(() => {
    try {
      const saved = localStorage.getItem('janata_bostraloy_users_v4');
      return saved ? JSON.parse(saved) : INITIAL_USERS;
    } catch {
      return INITIAL_USERS;
    }
  });

  // Orders state with localStorage persistence
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('janata_bostraloy_orders_v4');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('janata_bostraloy_cart_v4');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state with localStorage persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('janata_bostraloy_wishlist_v4');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_products_v5', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_categories_v5', JSON.stringify(categories));
    } catch (e) {
      console.error(e);
    }
  }, [categories]);

  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_users_v5', JSON.stringify(users));
    } catch (e) {
      console.error(e);
    }
  }, [users]);

  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_orders_v5', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_cart_v5', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('janata_bostraloy_wishlist_v5', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Product CRUD
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleUpdateProduct = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setCartItems((prev) => prev.filter((ci) => ci.product.id !== productId));
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Category CRUD
  const handleAddCategory = (newCategory: CategoryItem) => {
    setCategories((prev) => [...prev, newCategory]);
  };

  const handleUpdateCategory = (updated: CategoryItem) => {
    setCategories((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const handleDeleteCategory = (catId: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== catId));
  };

  // User CRUD
  const handleAddUser = (newUser: UserItem) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  const handleUpdateUser = (updated: UserItem) => {
    setUsers((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  };

  const handleDeleteUser = (userId: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
  };

  // Order CRUD
  const handleAddOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const handleUpdateOrder = (updated: Order) => {
    setOrders((prev) => prev.map((o) => (o.id === updated.id ? updated : o)));
  };

  const handleDeleteOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
  };

  // Reset to Demo Data
  const handleResetToDemoData = () => {
    setProducts(PRODUCTS);
    setCategories(INITIAL_CATEGORIES);
    setUsers(INITIAL_USERS);
    setOrders(INITIAL_ORDERS);
    [
      'janata_bostraloy_products_v5',
      'janata_bostraloy_categories_v5',
      'janata_bostraloy_users_v5',
      'janata_bostraloy_orders_v5',
      'janata_bostraloy_cart_v5',
      'janata_bostraloy_wishlist_v5',
      'janata_bostraloy_products_v4',
      'janata_bostraloy_categories_v4',
      'janata_bostraloy_users_v4',
      'janata_bostraloy_orders_v4',
      'janata_bostraloy_cart_v4',
      'janata_bostraloy_wishlist_v4',
      'blessed_boutique_products',
      'blessed_boutique_categories',
      'blessed_boutique_users',
      'blessed_boutique_orders',
      'brithi_products',
      'brithi_categories',
      'brithi_users',
      'brithi_orders',
    ].forEach((k) => {
      try {
        localStorage.removeItem(k);
      } catch {}
    });
  };

  const handleAddToCart = (product: Product, selectedSize: string, selectedColor: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedSize, selectedColor, quantity }];
    });
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id));
  const cartTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Dynamic product matching helper for categories
  const getCategoryProducts = (cat: CategoryItem): Product[] => {
    // 1. Direct match by category name or slug
    const directMatches = products.filter(
      (p) =>
        p.category.trim().toLowerCase() === cat.name.trim().toLowerCase() ||
        (cat.slug && p.category.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(cat.slug.toLowerCase()))
    );
    if (directMatches.length > 0) return directMatches;

    // 2. Specific matching for Janata Bostraloy collections
    if (cat.name.toLowerCase().includes('jaipuri')) {
      return products.filter((p) => p.category.includes('Jaipuri'));
    }
    if (cat.name.toLowerCase().includes('batik') || cat.name.toLowerCase().includes('linen')) {
      return products.filter((p) => p.category.includes('Linen') || p.category.includes('Batik'));
    }
    if (cat.name.toLowerCase().includes('boutique') || cat.name.toLowerCase().includes('party')) {
      return products.filter((p) => p.category.includes('Boutique') || p.category.includes('Party'));
    }
    if (cat.name.toLowerCase().includes('lawn') || cat.name.toLowerCase().includes('digital')) {
      return products.filter((p) => p.category.includes('Digital') || p.category.includes('Lawn'));
    }
    if (cat.name.toLowerCase().includes('saree') || cat.name.toLowerCase().includes('katan') || cat.name.toLowerCase().includes('silk')) {
      return products.filter((p) => p.category.includes('Katan') || p.category.includes('Saree') || p.category.includes('Silk'));
    }
    if (cat.name.toLowerCase().includes('georgette') || cat.name.toLowerCase().includes('chiffon')) {
      return products.filter((p) => p.category.includes('Chiffon') || p.category.includes('Georgette'));
    }

    // 3. Fallback partial substring match
    return products.filter(
      (p) =>
        p.category.toLowerCase().includes(cat.name.toLowerCase()) ||
        cat.name.toLowerCase().includes(p.category.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#1F1F1F] flex flex-col font-sans selection:bg-[#C23330]/20">
      {/* 1. Navbar */}
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        cartTotal={cartTotal}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        categories={categories}
      />

      {/* 2. Hero Section (with Left Category Sidebar & Banner Slider) */}
      <Hero
        onExploreClick={scrollToCatalog}
        onSelectCategory={setSelectedCategory}
        onSelectProduct={(p) => setSelectedProduct(p)}
        categories={categories}
        products={products}
      />

      {/* 3. Browse By Category Circular Avatars */}
      <CategoryBrowse
        onSelectCategory={setSelectedCategory}
        categories={categories}
        products={products}
      />

      {/* 4. Best Selling Products (5-Column Layout) */}
      <BestSellingSection
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
        onViewAllClick={scrollToCatalog}
      />

      {/* 5. Live Countdown Deal Promo Banner */}
      <CountdownBanner onExploreClick={scrollToCatalog} />

      {/* 6. Product Catalog with Tabs, Filter, and 5-Column Grid */}
      <ProductCatalog
        products={products}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
      />

      {/* 7. Dynamic Category Showcases — Automatically renders all existing & newly created categories */}
      {categories.map((cat) => {
        const catProducts = getCategoryProducts(cat);
        const subtitle = cat.description
          ? cat.description.length > 55
            ? `${cat.description.slice(0, 55).toUpperCase()}...`
            : cat.description.toUpperCase()
          : cat.featured
          ? 'FEATURED DESIGNER DROP'
          : 'EXCLUSIVE SIGNATURE COLLECTION';

        return (
          <CategoryShowcase
            key={cat.id || cat.slug || cat.name}
            title={cat.name.toUpperCase()}
            subtitle={subtitle}
            description={cat.description}
            categoryImage={cat.image}
            products={catProducts}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onViewAllClick={() => {
              setSelectedCategory(cat.name);
              scrollToCatalog();
            }}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        );
      })}

      {/* 9. Featured Showcase / Premium Picks (60/40 Split) */}
      <SpotlightShowcase
        products={products}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onAddToCart={(p, s, c) => handleAddToCart(p, s, c, 1)}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
      />

      {/* 10. Our Premium Services (Step 1, 2, 3) */}
      <ServicesSection />

      {/* 11. Our Story & Commitment to Authentic Quality */}
      <AboutSection />

      {/* 12. Testimonials (Client Reviews from Dhaka, Chittagong, Sylhet) */}
      <ReviewsSection />

      {/* 13. FAQ & Service Delivery Guide */}
      <FaqSection />

      {/* 14. Community Lookbook (#JanataBostraloy) */}
      <LookbookSection />

      {/* 15. Flagship Store & Contact */}
      <ContactSection />

      {/* 16. Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
      />

      {/* Modals & Drawers */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlistIds.includes(selectedProduct.id)}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
        onOrderCreated={handleAddOrder}
        onOpenTrackingWithId={(orderId) => {
          setIsTrackingOpen(true);
        }}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveWishlist={handleToggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Master Admin Console Modal */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={products}
        categories={categories}
        users={users}
        orders={orders}
        onAddProduct={handleAddProduct}
        onUpdateProduct={handleUpdateProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddCategory={handleAddCategory}
        onUpdateCategory={handleUpdateCategory}
        onDeleteCategory={handleDeleteCategory}
        onAddUser={handleAddUser}
        onUpdateUser={handleUpdateUser}
        onDeleteUser={handleDeleteUser}
        onAddOrder={handleAddOrder}
        onUpdateOrder={handleUpdateOrder}
        onDeleteOrder={handleDeleteOrder}
        onResetToDemoData={handleResetToDemoData}
      />

      {/* Live Order Tracking Modal */}
      <OrderTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        orders={orders}
      />
    </div>
  );
}
