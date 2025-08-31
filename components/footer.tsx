import type { NextPage } from 'next';
import React from 'react';

// SVG Icon Components

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-cyan-400 hover:text-cyan-300 transition-colors"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-pink-500 hover:text-pink-400 transition-colors"
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <rect x="4" y="4" width="16" height="16" rx="4"></rect>
       <circle cx="12" cy="12" r="3"></circle>
       <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
    </svg>
);


const ButterflyIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white hover:text-gray-300 transition-colors"
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M13.294 13.706a2 2 0 1 0 -2.584 -2.412a2 2 0 0 0 2.584 2.412"></path>
        <path d="M14 12c0 -2.333 -2 -6 -5 -9"></path>
        <path d="M5 15c2.333 -2 6 -5 9 -5"></path>
        <path d="M10.706 10.294a2 2 0 1 0 2.584 2.412a2 2 0 0 0 -2.584 -2.412"></path>
        <path d="M10 12c0 2.333 2 6 5 9"></path>
        <path d="M19 9c-2.333 2 -6 5 -9 5"></path>
    </svg>
);

const XIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white hover:text-gray-300 transition-colors"
        fill="currentColor"
        viewBox="0 0 16 16"
    >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-1.61 13.01h1.98L4.032 2.155H1.875Z" />
    </svg>
);

const MailIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-3 text-gray-400"
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
);


const Footer: NextPage = () => {
  return (
    <footer className="bg-linear-to-t from-white/10 to-black text-gray-300 font-sans">
      <div className="container mx-auto py-12 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Logo, Description, Socials */}
          <div className="space-y-4">
            {/* --- LOGO PLACEHOLDER --- */}
            {/* Replace this div with your <Image> or <img> tag */}
            <div className="text-2xl font-bold text-white tracking-wider">
               <span className="text-pink-500">Ra</span>can
            </div>
            {/* --- END LOGO PLACEHOLDER --- */}
            <p className="text-sm leading-relaxed">
              Redefining fashion with AI-powered recommendations and personalized style assistance.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" aria-label="Twitter" className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
                <InstagramIcon />
              </a>
               <a href="#" aria-label="Butterfly" className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
                <ButterflyIcon />
              </a>
              <a href="#" aria-label="X" className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                <XIcon />
              </a>
            </div>
          </div>
          
          {/* Column 2: Resources */}
          <div className="md:mx-auto md:pl-10 md:border-l md:border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Blogs & News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact to add your Brand</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact US */}
          <div className="md:pl-10 md:border-l md:border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">Contact US</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MailIcon />
                <a href="mailto:racan8@zohomail.in" className="hover:text-white transition-colors">racan8@zohomail.in</a>
              </li>
              <li className="flex items-start">
                 <span className="mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                 </span>
                <span>
                  Racan, Vadodara Parul <br />
                  University India
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Racan AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

