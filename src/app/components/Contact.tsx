"use client";

export default function Contact() {
  const handleWhatsAppClick = () => {
    // WhatsApp business number - replace with your actual number
    const phoneNumber = "1234567890"; // Your WhatsApp business number
    const message = "Hello, I would like to book an appointment for a consultation.";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 sm:py-40">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column */}
          <div className="space-y-8">
            <span className="text-xs sm:text-sm text-white/40">03 / Booking</span>
            <h3 className="font-italiana text-5xl sm:text-7xl">Book Your<br />Experience</h3>
            <p className="text-white/70 max-w-sm">
              Begin your journey to the perfect suit with a personal consultation 
              at our atelier.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-italiana text-2xl mb-4">Contact</h4>
                <div className="space-y-2 text-white/70">
                  <p>+44 20 7123 4567</p>
                  <p>info@doxankabod.com</p>
                </div>
              </div>
              <div>
                <h4 className="font-italiana text-2xl mb-4">Hours</h4>
                <div className="space-y-2 text-white/70">
                  <p>Mon - Fri: 10am - 7pm</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - WhatsApp Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="group relative overflow-hidden px-12 py-8 border border-white/20 
                       hover:border-white transition-all duration-300"
            >
              <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <span className="block font-italiana text-2xl text-white">
                  Book Consultation
                </span>
                <span className="text-white/70">
                  Click to connect via WhatsApp
                </span>
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 fill-current text-white transform group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm3.36 12.3-2.65-2.65a.5.5 0 0 0-.71.71l1.79 1.79H9a.5.5 0 0 0 0 1h4.79l-1.79 1.79a.5.5 0 0 0 .71.71l2.65-2.65a.5.5 0 0 0 0-.7z"/>
                </svg>
              </div>
              <div className="absolute inset-0 bg-white/5 transform translate-y-full 
                            group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 