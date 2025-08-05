function Footer() {
  return (
    <footer className="bg-very-dark-gray text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/50/FF5722/FFFFFF?text=TYV"
                alt="Logo"
                className="w-10 h-10 mr-2"
              />
              <div>
                <h3 className="text-xl font-bold">TANTRA YOGA VIDYA</h3>
                <p className="sanskrit-text text-sm">तन्त्र योग विद्या</p>
              </div>
            </div>
            <p className="mt-2 text-gray-300">
              Awakening consciousness through the sacred wisdom of tantra, yoga, and spiritual practice.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l2.879-2.879a2 2 0 10-2.828-2.828L8 11.172V5a2 2 0 10-4 0v6.172l-5.879-5.879a2 2 0 00-2.828 2.828L4 16H2v4h10v-4h-2z"
                  />
                </svg>
              </a>
              {/* Repeat for other social icons */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white">Resources</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-white">Contact</h4>
            <ul className="mt-2 space-y-4">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:hello@tantravidyasangha.com" className="hover:text-white transition-colors">
                  hello@tantravidyasangha.com
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="hover:text-white transition-colors">Sacred Valley, Peru</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 TantraYogaVidya.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;