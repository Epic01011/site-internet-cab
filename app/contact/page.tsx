'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactReasons = [
  'Création d\'entreprise',
  'Comptabilité & Bilan',
  'Fiscalité & Optimisation',
  'LMNP / SCI / Immobilier',
  'Holding',
  'Social & Paie',
  'Autre demande',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Contact</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Prenons rendez-vous
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Premier entretien gratuit et sans engagement. Réponse garantie sous 24h ouvrées.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <aside className="lg:col-span-1">
            <h2 className="text-xl font-serif font-bold text-[#1a2e4c] mb-6">Nos coordonnées</h2>
            <address className="not-italic space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1a2e4c]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2e4c]">Adresse</div>
                  <div className="text-[#4a5568] text-sm">58 rue de Monceau<br />75008 Paris</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1a2e4c]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2e4c]">Téléphone</div>
                  <a href="tel:+33100000000" className="text-[#4a5568] text-sm hover:text-[#d4af37] transition-colors">01 XX XX XX XX</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#1a2e4c]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2e4c]">Email</div>
                  <a href="mailto:contact@hayot-expertise.fr" className="text-[#4a5568] text-sm hover:text-[#d4af37] transition-colors">contact@hayot-expertise.fr</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#1a2e4c]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2e4c]">Horaires</div>
                  <div className="text-[#4a5568] text-sm">Lun – Ven : 9h00 – 18h00</div>
                </div>
              </div>
            </address>

            {/* Map placeholder */}
            <div className="mt-8 bg-[#f7fafc] rounded-xl p-4 border border-gray-100">
              <div className="aspect-video bg-[#e2e8f0] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#1a2e4c] mx-auto mb-2" />
                  <p className="text-sm text-[#4a5568] font-medium">58 rue de Monceau</p>
                  <p className="text-xs text-[#4a5568]">75008 Paris</p>
                  <a
                    href="https://maps.google.com/?q=58+rue+de+Monceau,+75008+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-xs text-[#d4af37] hover:underline"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-3">Message envoyé !</h2>
                <p className="text-[#4a5568] max-w-sm mx-auto">
                  Merci pour votre demande. Samuel HAYOT ou son équipe vous contactera dans les 24h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-serif font-bold text-[#1a2e4c] mb-6">Envoyez-nous un message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e4c] mb-1.5" htmlFor="name">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e4c] mb-1.5" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@example.fr"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e4c] mb-1.5" htmlFor="phone">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1a2e4c] mb-1.5" htmlFor="reason">
                      Motif de contact
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:border-transparent bg-white"
                    >
                      <option value="">Sélectionnez un motif</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1a2e4c] mb-1.5" htmlFor="message">
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre situation et vos besoins..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c] focus:border-transparent resize-none"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-1 accent-[#1a2e4c]" />
                  <label htmlFor="consent" className="text-xs text-[#4a5568] leading-relaxed">
                    J'accepte que mes données soient utilisées pour traiter ma demande de contact, conformément à la{' '}
                    <a href="/politique-confidentialite" className="text-[#d4af37] hover:underline">politique de confidentialité</a>.
                  </label>
                </div>
                <Button type="submit" disabled={loading} className="bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white gap-2 w-full sm:w-auto" size="lg">
                  {loading ? 'Envoi en cours…' : (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>
                <p className="text-xs text-[#4a5568]">
                  Premier entretien gratuit · Réponse sous 24h ouvrées · Sans engagement
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
