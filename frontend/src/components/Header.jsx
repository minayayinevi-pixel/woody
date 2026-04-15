import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = ({ data }) => {
  const navigate = useNavigate();
  const { lang, t, switchLang, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.preschool, href: "/preschool" },
    { label: t.nav.workshop, href: "/workshop" },
    { label: t.nav.homeTutor, href: "/home-tutor" },
    { label: t.nav.academy, href: "#" },
    { label: "BLOG", href: "/blog" }
  ];

  const handleStoreClick = (e) => {
    e.preventDefault();
    window.open('https://wa.me/905331570373?text=Merhaba%2C%20Woody%20Store%20hakkında%20bilgi%20almak%20istiyorum.', '_blank');
  };

  const currentFlag = languages.find(l => l.code === lang);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
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

        {/* Desktop Nav + Language */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {/* HOME Link */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className={`text-[11px] lg:text-[12px] tracking-[0.15em] font-medium no-underline transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                window.location.pathname === '/' ? 'text-black border-b-2 border-black pb-1' : 'text-gray-600 hover:text-black'
              }`}
            >
              {t.nav.home}
            </a>

            {/* WOODY STORE Button - RIGHT AFTER HOME */}
            <a
              href="#store"
              onClick={handleStoreClick}
              className="menu-store-btn inline-flex items-center justify-center bg-[#FF6A00] text-white px-4 py-2 rounded-lg font-semibold text-[11px] lg:text-[12px] tracking-[0.1em] no-underline transition-all duration-250 hover:bg-[#E85C00] hover:scale-105 active:translate-y-[1px] whitespace-nowrap"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.14)' }}
            >
              🛍️ WOODY STORE
            </a>

            {/* Rest of nav items (excluding HOME) */}
            {navItems.slice(1).map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/')) {
                    e.preventDefault();
                    navigate(item.href);
                  }
                }}
                className={`text-[11px] lg:text-[12px] tracking-[0.15em] font-medium no-underline transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                  (item.href === '/preschool' && window.location.pathname === '/preschool') ||
                  (item.href === '/' && window.location.pathname === '/')
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer text-[13px]"
            >
              <span className="text-[18px] leading-none">{currentFlag?.flag}</span>
              <ChevronDown size={14} className={`text-gray-500 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[150px] animate-slideUp">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { switchLang(l.code); setLangOpen(false); }}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-[13px] transition-colors cursor-pointer border-none ${
                      lang === l.code ? 'bg-gray-100 font-semibold text-black' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-[18px] leading-none">{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          {/* HOME Link */}
          <a
            href="/"
            className="block py-3 text-[13px] tracking-[0.15em] font-medium no-underline text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setMobileMenuOpen(false);
            }}
          >
            {t.nav.home}
          </a>

          {/* WOODY STORE Button in Mobile Menu */}
          <a
            href="#store"
            onClick={(e) => {
              handleStoreClick(e);
              setMobileMenuOpen(false);
            }}
            className="block my-2 py-3 px-4 bg-[#FF6A00] text-white text-center rounded-lg font-semibold text-[13px] tracking-[0.1em] no-underline active:translate-y-[1px]"
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.14)' }}
          >
            🛍️ WOODY STORE
          </a>

          {/* Rest of nav items */}
          {navItems.slice(1).map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block py-3 text-[13px] tracking-[0.15em] font-medium no-underline text-gray-600"
              onClick={(e) => {
                if (item.href.startsWith('/')) {
                  e.preventDefault();
                  navigate(item.href);
                }
                setMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { switchLang(l.code); setMobileMenuOpen(false); }}
                className={`text-[22px] p-1 rounded-lg border-none cursor-pointer ${lang === l.code ? 'bg-gray-200' : 'bg-transparent'}`}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
