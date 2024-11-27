export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/[0.05]">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <h4 className="font-italiana text-2xl mb-4">DOXA N KABOD</h4>
            <p className="text-white/40 text-sm">
              Where craftsmanship meets divine glory.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-italiana text-lg mb-4">Quick Links</h5>
            <div className="space-y-2">
              {['Collection', 'Process', 'Booking'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/40 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-italiana text-lg mb-4">Contact</h5>
            <div className="space-y-2 text-white/40">
              <p>+44 20 7123 4567</p>
              <p>info@doxankabod.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-italiana text-lg mb-4">Follow Us</h5>
            <div className="space-y-2">
              {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-white/40 hover:text-white transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 DOXA N KABOD. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 