import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ data }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="no-underline flex items-center cursor-pointer">
          <div className="h-[38px] md:h-[44px] overflow-hidden">
            <img
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/nkf2o7ln_Ads%C4%B1z%20%28Facebook%20Kapak%20Fotog%CC%86raf%C4%B1%29%20%286%29.png"
              alt="Woody and Friends"
              className="logo-img h-[56px] md:h-[66px] object-cover object-center -mt-[9px] md:-mt-[11px]"
              style={{ background: 'transparent', mixBlendMode: 'multiply' }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {data.navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('/')) {
                  e.preventDefault();
                  navigate(item.href);
                }
              }}
              className={`text-[12px] tracking-[0.18em] font-medium no-underline transition-colors duration-300 cursor-pointer ${
                item.active
                  ? 'text-black border-b-2 border-black pb-1'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {data.navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`block py-3 text-[13px] tracking-[0.2em] font-medium no-underline ${
                item.active ? 'text-black' : 'text-gray-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
