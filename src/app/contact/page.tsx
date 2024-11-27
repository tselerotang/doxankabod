"use client";

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';

export default function Contact() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Map Section */}
      <section className="relative h-[70vh] mt-20">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2775906678786!2d-0.14394492341570624!3d51.51175297181665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5767c9163%3A0x7f7b0ad6c28d3875!2sSavile%20Row%2C%20London!5e0!3m2!1sen!2suk!4v1709234567890!5m2!1sen!2suk"
            className="w-full h-full grayscale opacity-90 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        {/* Location Card */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-white p-8 max-w-md">
          <h2 className="font-italiana text-2xl text-black mb-6">Visit Our Atelier</h2>
          <div className="space-y-4 text-neutral-600">
            <div>
              <p className="text-lg">10 Savile Row</p>
              <p>Mayfair, London</p>
              <p>W1S 3PF</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400 mb-1">Opening Hours</p>
              <p>Monday - Friday: 10:00 - 19:00</p>
              <p>Saturday: By appointment</p>
              <p>Sunday: Closed</p>
            </div>
            <div>
              <p className="text-sm text-neutral-400 mb-1">Contact</p>
              <p>+44 20 7123 4567</p>
              <p>info@doxankabod.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </main>
  );
} 