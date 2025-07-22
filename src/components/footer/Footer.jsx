import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Exclusive</h4>
            <div className="mb-4">
              <p className="mb-2">Subscribe</p>
              <p className="text-sm text-gray-400">
                Get 10% off your first order
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-900 text-white px-4 py-2 rounded"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <address className="text-gray-400 text-sm not-italic">
              1234 Park Street,
              <br />
              DL-11111, India
              <br />
              <br />
              test@test.com
              <br />
              +91-999-999-9999
            </address>
          </div>
          <div>
            <h4 className="font-bold mb-4">Account</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                My Account
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Login / Register
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Cart
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Wishlist
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Shop
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Link</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Terms Of Use
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                FAQ
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© Copyright Harmoni 2024. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
