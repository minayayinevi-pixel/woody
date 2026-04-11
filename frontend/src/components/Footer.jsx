import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-3">
          {data.links.map((link, i) => (
            <React.Fragment key={i}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gray-600 hover:text-black no-underline transition-colors duration-300"
              >
                {link.label}
              </a>
              {i < data.links.length - 1 && (
                <span className="text-[11px] text-gray-400 mx-1">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-gray-500">{data.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
