import React, { useState } from 'react';
import { Car, Phone, Clock, MapPin, Star, PenTool as Tool, Wrench, Settings, Home, Info, PhoneCall, Camera, Users, Award, AlarmClock, Gauge, Warehouse, Menu, X } from 'lucide-react';
import { Hero } from '@/components/ui/animated-hero';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50 border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold shimmer-gold">GRANTURISMO7</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors">
                <Home className="w-4 h-4 text-gold" />
                <span className="font-medium tracking-wide text-sm">POČETNA</span>
              </a>
              <a href="#services" className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors">
                <Wrench className="w-4 h-4 text-gold" />
                <span className="font-medium tracking-wide text-sm">USLUGE</span>
              </a>
              <a href="#about" className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors">
                <Info className="w-4 h-4 text-gold" />
                <span className="font-medium tracking-wide text-sm">O NAMA</span>
              </a>
              <a href="#gallery" className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors">
                <Camera className="w-4 h-4 text-gold" />
                <span className="font-medium tracking-wide text-sm">GALERIJA</span>
              </a>
              <a href="#contact" className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors">
                <PhoneCall className="w-4 h-4 text-gold" />
                <span className="font-medium tracking-wide text-sm">KONTAKT</span>
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gold" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gold/20">
            <div className="px-4 py-2 space-y-1">
              <a href="#" className="block py-2 text-gold hover:text-gold/80 transition-colors" onClick={toggleMenu}>
                POČETNA
              </a>
              <a href="#services" className="block py-2 text-gold hover:text-gold/80 transition-colors" onClick={toggleMenu}>
                USLUGE
              </a>
              <a href="#about" className="block py-2 text-gold hover:text-gold/80 transition-colors" onClick={toggleMenu}>
                O NAMA
              </a>
              <a href="#gallery" className="block py-2 text-gold hover:text-gold/80 transition-colors" onClick={toggleMenu}>
                GALERIJA
              </a>
              <a href="#contact" className="block py-2 text-gold hover:text-gold/80 transition-colors" onClick={toggleMenu}>
                KONTAKT
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">O Nama</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="about-text-container">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gold/10 shadow-xl h-full">
                <p className="text-lg leading-relaxed mb-4 font-serif tracking-wide">
                  <span className="text-gold font-semibold">GRANTURISMO7</span> je premium auto servis u Pančevu, osnovan 2025. godine sa ciljem pružanja vrhunskih usluga održavanja i popravke vozila.
                </p>
                <ul className="grid gap-3 mb-4 text-lg font-serif">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>Autodijagnostika</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>Automehanika</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>Montaža guma</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    <span>Servis</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed italic text-gold/90 font-serif tracking-wide">
                  Vaše poverenje je naš prioritet - pružamo vrhunsku negu svakom vozilu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 sm:p-6 bg-zinc-900 rounded-lg transform hover:scale-105 transition-all duration-300 border border-gold/20">
                <Tool className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-3 mx-auto" />
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Iskustvo tima</p>
                <p className="text-sm sm:text-base font-serif leading-relaxed">
                  Naš tim poseduje višegodišnje iskustvo u autoindustriji.
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-zinc-900 rounded-lg transform hover:scale-105 transition-all duration-300 border border-gold/20">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-3 mx-auto" />
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Broj zadovoljnih klijenata</p>
                <p className="text-sm sm:text-base font-serif leading-relaxed">
                  Preko 100 zadovoljnih klijenata u prvoj godini poslovanja.
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-zinc-900 rounded-lg transform hover:scale-105 transition-all duration-300 border border-gold/20">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-3 mx-auto" />
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Posvećenost kvalitetu</p>
                <p className="text-sm sm:text-base font-serif leading-relaxed">
                  100% posvećeni pružanju vrhunske usluge.
                </p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-zinc-900 rounded-lg transform hover:scale-105 transition-all duration-300 border border-gold/20">
                <AlarmClock className="w-8 h-8 sm:w-10 sm:h-10 text-gold mb-3 mx-auto" />
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Dostupnost</p>
                <p className="text-sm sm:text-base font-serif leading-relaxed">
                  Dostupni 24/7 za hitne pozive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">Naše Usluge</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="service-card p-4 sm:p-6">
              <Gauge className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Autodijagnostika</h3>
              <p className="text-sm sm:text-base text-gray-400">Kompletna dijagnostika i identifikacija kvarova</p>
            </div>
            <div className="service-card p-4 sm:p-6">
              <Settings className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Automehanika</h3>
              <p className="text-sm sm:text-base text-gray-400">Profesionalne mehaničarske usluge</p>
            </div>
            <div className="service-card p-4 sm:p-6">
              <Tool className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Montaža i Balansiranje Guma</h3>
              <p className="text-sm sm:text-base text-gray-400">Stručna montaža i balansiranje svih vrsta guma</p>
            </div>
            <div className="service-card p-4 sm:p-6">
              <Wrench className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Veliki i Mali Servis</h3>
              <p className="text-sm sm:text-base text-gray-400">Redovno održavanje i servisiranje vozila</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Hotel Section */}
      <section id="tire-hotel" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">Hotel za Gume</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="service-card p-4 sm:p-6">
              <Tool className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Zamena Guma</h3>
              <p className="text-sm sm:text-base text-gray-400">Profesionalna zamena letnjih i zimskih guma</p>
            </div>
            <div className="service-card p-4 sm:p-6">
              <Settings className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Balansiranje Guma</h3>
              <p className="text-sm sm:text-base text-gray-400">Precizno balansiranje za optimalne performanse</p>
            </div>
            <div className="service-card p-4 sm:p-6">
              <Warehouse className="w-8 h-8 sm:w-12 sm:h-12 text-gold mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Skladištenje Guma</h3>
              <p className="text-sm sm:text-base text-gray-400">Bezbedno čuvanje do sledeće sezone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">Galerija</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80" 
                alt="Professional car diagnostics" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/assets/2.JPG" 
                alt="Car service" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="/assets/1.jpg" 
                alt="Performance upgrade" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80" 
                alt="Auto mechanic service" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80" 
                alt="Premium auto maintenance" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80" 
                alt="Professional auto service" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">Recenzije Klijenata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg border border-gold/20">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-4 font-serif leading-relaxed">
                "Izuzetno sam zadovoljan uslugom u GRANTURISMO7. Profesionalan pristup, brza usluga i vrhunski kvalitet rada. Posebno bih pohvalio stručnost osoblja i transparentnost u komunikaciji."
              </p>
              <p className="text-gold font-semibold">Bojan Stefanović</p>
              <p className="text-xs sm:text-sm text-gray-400">Mercedes-Benz E-Class vlasnik</p>
            </div>
            <div className="bg-zinc-900 p-6 sm:p-8 rounded-lg border border-gold/20">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-base sm:text-lg mb-4 font-serif leading-relaxed">
                "Najbolji servis u gradu! Moj BMW je u odličnim rukama kod njih. Cene su korektne za kvalitet usluge koji pružaju. Posebno mi se sviđa što uvek detaljno objasne šta je potrebno uraditi."
              </p>
              <p className="text-gold font-semibold">Marina Trajković</p>
              <p className="text-xs sm:text-sm text-gray-400">BMW Serije 5 vlasnica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center gold-gradient">Kontakt</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  <p className="text-base sm:text-xl">062-836-28-82</p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  <p className="text-base sm:text-xl">Novoseljanski put 295, Pančevo</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  <p className="text-base sm:text-xl">Pon-Pet: 8-18h | Sub: 9-14h</p>
                </div>
              </div>
            </div>
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Vaše Ime"
                className="w-full bg-zinc-900 border border-gold/20 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-gold text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Vaš Email"
                className="w-full bg-zinc-900 border border-gold/20 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-gold text-sm sm:text-base"
              />
              <textarea
                placeholder="Vaša Poruka"
                rows={4}
                className="w-full bg-zinc-900 border border-gold/20 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:border-gold text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gold text-black py-2 sm:py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-sm sm:text-base"
              >
                Pošaljite Poruku
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 border-t border-gold/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} GRANTURISMO7. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;