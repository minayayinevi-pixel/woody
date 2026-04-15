import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const StickyStoreButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after scrolling 300px on mobile only
      if (window.innerWidth <= 768) {
        setShow(window.scrollY > 300);
      } else {
        setShow(false);
      }
    };

    const handleResize = () => {
      // Hide on desktop
      if (window.innerWidth > 768) {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/905331570373?text=Merhaba%2C%20Woody%20Store%20hakkında%20bilgi%20almak%20istiyorum.', '_blank');
  };

  return (
    <a
      href="#store"
      onClick={handleClick}
      className={`mobile-store-btn fixed left-4 bottom-5 bg-[#FF6A00] text-white px-4 py-2.5 rounded-xl font-semibold text-[13px] flex items-center gap-2 no-underline transition-all duration-300 active:translate-y-[1px] active:scale-95 z-[999] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        boxShadow: show ? '0 6px 18px rgba(0,0,0,0.18)' : 'none',
        minHeight: '44px'
      }}
    >
      <ShoppingBag size={18} strokeWidth={2.5} />
      <span>Woody Store</span>
    </a>
  );
};

export default StickyStoreButton;
