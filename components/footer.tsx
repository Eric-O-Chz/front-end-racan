import React from 'react';

// --- SVG Icon Components ---

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-white hover:text-blue-400 transition-colors"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-5.2-.6-7.3-2.3c-2.1 1.7-7.3 2.3-7.3 2.3s1.7-3.5 3.3-4.9c-1.3-1.3-2-3.4-2-3.4s2.1.7 4.2 2.3c2.1-1.6 4.2-2.3 4.2-2.3z" />
  </svg>
);

const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-white hover:text-pink-500 transition-colors"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const ButterflyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6 text-white hover:text-purple-400 transition-colors"
    >
        <path d="M12 16.222c-2.762 0-5.021-2.222-5.021-4.944C6.979 8.556 9.238 6 12 6s5.021 2.556 5.021 5.278c0 2.722-2.259 4.944-5.021 4.944z" />
        <path d="M18.333 11.222c0 2.926-2.343 5.3-5.222 5.3s-5.222-2.374-5.222-5.3c0-.074.015-.148.029-.222h10.387c.014.074.028.148.028.222z" />
        <path d="M5.667 11.222c0-2.926 2.343-5.3 5.222-5.3s5.222 2.374 5.222-5.3c0 .074-.015-.148-.029.222H5.696c-.014-.074-.029-.148-.029-.222z" />
    </svg>
);


const XIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="h-5 w-5 text-white hover:text-gray-400 transition-colors">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);


const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 mr-2 text-gray-400"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

// --- Main Footer Component ---

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black from-60% to-gray-500 text-white font-sans px-20 ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white mb-10 pb-10 md:divide-x md:divide-gray-600">
          
          {/* Column 1: Logo and Socials */}
          <div className="flex flex-col items-start font-heading">
             {/* <h2 className="text-2xl font-bold tracking-wider">
                <span className="text-red-500">W</span> Racan
            </h2> */}
            <img src="/images/footerLogo.png" alt="Racan Logo" className="h-7 w-auto mb-4"/>
            <p className="mt-4 text-gray-400 max-w-xs text-sm">
              Redefining fashion with AI-powered recommendations and personalized style assistance.
            </p>
            <div className="flex space-x-4 mt-6">
              <img src="/images/twitter.png" alt="Twitter" className="h-10 w-10"/>
              <img src="/images/instagram.png" alt="Instagram" className="h-10 w-10"/>
              <img src="/images/butterfly.png" alt="Butterfly" className="h-10 w-10"/>
              <img src="/images/x.png" alt="X" className="h-10 w-10"/>
             
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-xl font-normal tracking-wide font-heading ">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blogs & News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact to add your Brand</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="font-heading">
            <h3 className="text-lg font-normal tracking-wide ">Contact US</h3>
            <ul className="mt-4 space-y-3 text-gray-400">
               <li className="flex items-center">
                <MailIcon />
                <a href="mailto:racan8@zohomail.in" className="hover:text-white transition-colors">racan8@zohomail.in</a>
              </li>
              <li className="mt-2">
                <p>Racan, Vadodara</p>
                <p>Parul University, India</p>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="mt-10 pt-8 text-center">
          <p className="text-white font-heading font-normal text-xl ">
            © 2025 Racan AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

