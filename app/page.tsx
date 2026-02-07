'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X, ExternalLink, Maximize2 } from 'lucide-react';

type Language = 'en' | 'fr';

const content = {
  en: {
    nav: {
      treatments: 'Treatments',
      contact: 'Contact',
    },
    hero: {
      title: 'Restoring Comfort & Confidence',
      subtitle: 'Specialized physiotherapy for women and children in a warm, welcoming space.',
      cta: 'Book an Appointment',
    },
    treatments: {
      title: 'Our Services',
      items: [
        {
          title: 'Pregnancy',
          description: 'Perineal physiotherapy for expectant mothers to prepare for birth and manage pain.',
        },
        {
          title: 'Post-Partum',
          description: 'Recovery and rehabilitation for new mothers, focusing on pelvic floor health.',
        },
        {
          title: 'Women\'s Health',
          description: 'specialized care for middle-aged women addressing changes and maintaining wellness.',
        },
        {
          title: 'Pediatrics',
          description: 'Gentle physiotherapy for children to support their development and comfort.',
        },
      ],
    },
    contact: {
      title: 'Visit Us',
      locationLabel: 'Located at',
      clinicName: 'Physiothérapie Mère-Enfant',
      address: '181 ch. Duhamel, Pincourt ( Quebec ) J7W 4E3',
      phone: '450-218-1515',
      email: 'info@physiomereenfant.com',
      clickMap: 'Click map to enlarge',
    },
    modal: {
      title: 'Partner Clinic',
      subtitle: 'We are affiliated with',
      clinicName: 'Clinique Mère-Enfant',
      message: 'To ensure the best care, you will be redirected to their website to book your appointment.',
      continue: 'Continue to Booking',
      cancel: 'Cancel',
    },
  },
  fr: {
    nav: {
      treatments: 'Traitements',
      contact: 'Contact',
    },
    hero: {
      title: 'Retrouver Confort et Confiance',
      subtitle: 'Physiothérapie spécialisée pour femmes et enfants dans un espace chaleureux.',
      cta: 'Prendre Rendez-vous',
    },
    treatments: {
      title: 'Nos Services',
      items: [
        {
          title: 'Grossesse',
          description: 'Physiothérapie périnéale pour les futures mamans, préparation à l\'accouchement et gestion de la douleur.',
        },
        {
          title: 'Post-Partum',
          description: 'Rééducation et rétablissement pour les nouvelles mamans, santé du plancher pelvien.',
        },
        {
          title: 'Santé Féminine',
          description: 'Soins spécialisés pour les femmes d\'âge moyen, pour le bien-être et l\'équilibre.',
        },
        {
          title: 'Pédiatrie',
          description: 'Physiothérapie douce pour les enfants afin de soutenir leur développement.',
        },
      ],
    },
    contact: {
      title: 'Nous Joindre',
      locationLabel: 'Situé à',
      clinicName: 'Physiothérapie Mère-Enfant',
      address: '181 ch. Duhamel, Pincourt ( Quebec ) J7W 4E3',
      phone: '450-218-1515',
      email: 'info@physiomereenfant.com',
      clickMap: 'Cliquez pour agrandir',
    },
    modal: {
      title: 'Clinique Partenaire',
      subtitle: 'Nous sommes affiliés à la',
      clinicName: 'Clinique Mère-Enfant',
      message: 'Pour assurer les meilleurs soins, vous serez redirigé vers leur site web pour prendre rendez-vous.',
      continue: 'Continuer vers la Réservation',
      cancel: 'Annuler',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>('fr');
  const t = content[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans text-earth-900 bg-cream-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-sm border-b border-sage-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-sage-700 tracking-tight">Clinique Périnéale</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#treatments" className="text-earth-800 hover:text-sage-600 transition-colors font-medium">
                {t.nav.treatments}
              </a>
              <a href="#contact" className="text-earth-800 hover:text-sage-600 transition-colors font-medium">
                {t.nav.contact}
              </a>
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="px-3 py-1 rounded-full border border-sage-500 text-sage-700 text-sm font-semibold hover:bg-sage-50 transition-colors"
                aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-4 px-5 py-2 rounded-full bg-sage-600 text-white text-sm font-medium hover:bg-sage-700 transition-colors shadow-sm"
              >
                {t.hero.cta}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="mr-4 px-2 py-1 text-sm font-semibold text-sage-700"
                aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
              >
                {lang.toUpperCase()}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-earth-800 hover:text-sage-600 p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-sage-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#treatments"
                className="block px-3 py-2 rounded-md text-base font-medium text-earth-800 hover:bg-sage-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.treatments}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-earth-800 hover:bg-sage-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-sage-700 hover:bg-sage-50"
              >
                {t.hero.cta}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:py-24 lg:py-32 bg-sage-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-sage-700 tracking-tight mb-6 text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-earth-800 max-w-2xl mx-auto mb-8 text-balance">
            {t.hero.subtitle}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-3 text-base font-medium rounded-full text-white bg-sage-600 hover:bg-sage-700 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
          >
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sage-700">{t.treatments.title}</h2>
          <div className="mt-2 h-1 w-20 bg-sage-200 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.treatments.items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-sage-100 flex flex-col items-start"
            >
              <div className="h-12 w-12 bg-sage-100 rounded-full flex items-center justify-center mb-6 text-sage-600">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-sage-700 mb-3">{item.title}</h3>
              <p className="text-earth-800 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-sage-700 mb-2">{t.contact.title}</h2>
              <div className="mb-6 text-sage-600 font-medium bg-sage-50 inline-block px-3 py-1 rounded-lg self-start">
                <span className="text-sm mr-1">{t.contact.locationLabel}</span>
                <span className="font-bold text-sage-700">{t.contact.clinicName}</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sage-500 mt-1 flex-shrink-0" />
                  <span className="text-earth-800">{t.contact.address}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-earth-800">{t.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-sage-500 flex-shrink-0" />
                  <span className="text-earth-800">{t.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Inline Map with Overlay */}
            <div
              className="bg-sage-200 h-64 md:h-auto md:w-1/2 relative min-h-[300px] cursor-pointer group"
              onClick={() => setIsMapFullscreen(true)}
            >
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 pointer-events-none"
                frameBorder="0"
                title="Map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=181%20ch.%20Duhamel,%20Pincourt&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur text-sage-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 duration-200">
                  <Maximize2 size={16} />
                  {t.contact.clickMap}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-sage-100 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm text-sage-400">
          &copy; {new Date().getFullYear()} Clinique Périnéale. All rights reserved.
        </div>
      </footer>

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-0 overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header with Icon */}
            <div className="bg-sage-50 p-6 border-b border-sage-100 flex justify-center">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <ExternalLink className="w-8 h-8 text-sage-600" />
              </div>
            </div>

            <div className="p-8 text-center">
              <h3 className="text-xl font-medium text-sage-600 mb-2 uppercase tracking-wide text-xs">
                {t.modal.title}
              </h3>
              <p className="text-earth-800 mb-4">
                {t.modal.subtitle} <span className="font-bold text-sage-700 block text-2xl mt-1">{t.modal.clinicName}</span>
              </p>

              <div className="bg-cream-100 p-4 rounded-lg mb-8">
                <p className="text-earth-800 text-sm leading-relaxed">
                  {t.modal.message}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://physiomereenfant.com/en/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full inline-flex justify-center items-center px-6 py-3.5 rounded-xl bg-sage-600 text-white font-bold hover:bg-sage-700 transition-all shadow-md hover:shadow-lg transform active:scale-95"
                >
                  {t.modal.continue}
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full inline-flex justify-center items-center px-6 py-3 rounded-xl text-sage-500 font-medium hover:bg-sage-50 hover:text-sage-700 transition-colors"
                >
                  {t.modal.cancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Map Modal */}
      {isMapFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsMapFullscreen(false)}
                className="bg-white/90 p-2 rounded-full shadow-md text-sage-700 hover:bg-white hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              width="100%"
              height="100%"
              className="flex-grow"
              frameBorder="0"
              title="Fullscreen Map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=181%20ch.%20Duhamel,%20Pincourt&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
