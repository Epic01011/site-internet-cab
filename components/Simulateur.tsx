'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, TrendingDown, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Mode = 'dividendes' | 'statut';

interface DivSimResult {
  salaireNet: number;
  chargesSociales: number;
  dividendeNet: number;
  flatTax: number;
  totalSASU: number;
  totalEURL: number;
  economie: number;
}

function simulerDividendes(revenueTotal: number, partDividendes: number): DivSimResult {
  const partSalaire = revenueTotal - partDividendes;
  const chargesSociales = partSalaire * 0.82;
  const salaireNet = partSalaire - chargesSociales;
  const flatTax = partDividendes * 0.3;
  const dividendeNet = partDividendes - flatTax;
  const totalSASU = salaireNet + dividendeNet;

  const chargesEURL = revenueTotal * 0.45;
  const totalEURL = revenueTotal - chargesEURL;

  return {
    salaireNet: Math.round(salaireNet),
    chargesSociales: Math.round(chargesSociales),
    dividendeNet: Math.round(dividendeNet),
    flatTax: Math.round(flatTax),
    totalSASU: Math.round(totalSASU),
    totalEURL: Math.round(totalEURL),
    economie: Math.round(totalSASU - totalEURL),
  };
}

function fmt(n: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

export default function Simulateur() {
  const [mode, setMode] = useState<Mode>('dividendes');
  const [revenue, setRevenue] = useState(80000);
  const [partDiv, setPartDiv] = useState(30000);
  const [showCTA, setShowCTA] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const result = simulerDividendes(revenue, partDiv);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="simulateur" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1a2e4c] to-[#2a3e5c] text-white p-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-[#d4af37]/20 rounded-lg">
            <Calculator className="w-6 h-6 text-[#d4af37]" />
          </div>
          <span className="text-sm font-medium text-white/70 uppercase tracking-wider">Outil Gratuit</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Simulateur Fiscal</h2>
        <p className="text-white/80">Comparez vos options et optimisez votre rémunération</p>

        {/* Mode tabs */}
        <div className="flex gap-2 mt-5">
          <button
            onClick={() => setMode('dividendes')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'dividendes' ? 'bg-[#d4af37] text-[#1a2e4c]' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Dividendes vs Salaire
          </button>
          <button
            onClick={() => setMode('statut')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'statut' ? 'bg-[#d4af37] text-[#1a2e4c]' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            SASU vs EURL
          </button>
        </div>
      </div>

      <div className="p-8">
        {mode === 'dividendes' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-[#1a2e4c] mb-2">
                  Résultat de la société
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min={20000}
                    max={500000}
                    step={5000}
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full accent-[#1a2e4c]"
                  />
                  <div className="flex justify-between text-xs text-[#4a5568] mt-1">
                    <span>20 000 €</span>
                    <span className="font-bold text-[#1a2e4c]">{fmt(revenue)}</span>
                    <span>500 000 €</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1a2e4c] mb-2">
                  Part en dividendes
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={Math.min(revenue, 200000)}
                    step={5000}
                    value={partDiv}
                    onChange={(e) => setPartDiv(Number(e.target.value))}
                    className="w-full accent-[#d4af37]"
                  />
                  <div className="flex justify-between text-xs text-[#4a5568] mt-1">
                    <span>0 €</span>
                    <span className="font-bold text-[#d4af37]">{fmt(partDiv)}</span>
                    <span>{fmt(Math.min(revenue, 200000))}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-[#f7fafc] rounded-xl p-4 text-center">
                <div className="text-xs text-[#4a5568] mb-1">Salaire net</div>
                <div className="text-xl font-bold text-[#1a2e4c]">{fmt(result.salaireNet)}</div>
                <div className="text-xs text-[#4a5568] mt-1">Charges : {fmt(result.chargesSociales)}</div>
              </div>
              <div className="bg-[#f7fafc] rounded-xl p-4 text-center">
                <div className="text-xs text-[#4a5568] mb-1">Dividendes nets</div>
                <div className="text-xl font-bold text-[#d4af37]">{fmt(result.dividendeNet)}</div>
                <div className="text-xs text-[#4a5568] mt-1">Flat tax : {fmt(result.flatTax)}</div>
              </div>
              <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] rounded-xl p-4 text-center text-white">
                <div className="text-xs text-white/70 mb-1">Total SASU</div>
                <div className="text-xl font-bold">{fmt(result.totalSASU)}</div>
                <div className="text-xs text-white/70 mt-1">Salaire + dividendes</div>
              </div>
              <div className="bg-[#f7fafc] rounded-xl p-4 text-center">
                <div className="text-xs text-[#4a5568] mb-1">Équivalent EURL</div>
                <div className="text-xl font-bold text-[#1a2e4c]">{fmt(result.totalEURL)}</div>
                <div className="text-xs text-[#4a5568] mt-1">TNS uniquement</div>
              </div>
            </div>

            {/* Gain indicator */}
            <div className={`flex items-center gap-3 p-4 rounded-xl mb-6 ${result.economie > 0 ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
              {result.economie > 0 ? (
                <TrendingUp className="w-5 h-5 text-green-600 shrink-0" />
              ) : (
                <TrendingDown className="w-5 h-5 text-orange-500 shrink-0" />
              )}
              <p className="text-sm font-medium text-gray-800">
                {result.economie > 0
                  ? `Avec cette répartition, la SASU optimise votre revenu de ${fmt(result.economie)} par rapport à l'EURL.`
                  : `L'EURL serait plus avantageuse de ${fmt(Math.abs(result.economie))} dans ce scénario.`}
              </p>
            </div>
          </div>
        ) : (
          /* SASU vs EURL comparison table */
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-[#4a5568] font-medium">Critère</th>
                  <th className="py-3 px-4 text-center text-[#1a2e4c] font-bold bg-[#1a2e4c]/5 rounded-tl-lg">SASU</th>
                  <th className="py-3 px-4 text-center text-[#d4af37] font-bold">EURL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Dirigeant', 'Président (assimilé salarié)', 'Gérant (TNS)'],
                  ['Charges sociales', '~80% du salaire', '~45% du revenu'],
                  ['Protection sociale', '✅ Régime général', '⚠️ SSI (ex-RSI)'],
                  ['Fiscalité', 'IS (IR optionnel 5 ans)', 'IR (IS sur option)'],
                  ['Dividendes', '✅ Flat tax 30%', '⚠️ Soumis aux cotisations'],
                  ['Flexibilité statuts', '✅ Très flexible', '⚠️ SARL plus rigide'],
                  ['Idéal pour', 'Startup, dividendes', 'Revenus modestes, TNS'],
                ].map(([critere, sasu, eurl]) => (
                  <tr key={critere} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-[#1a2e4c]">{critere}</td>
                    <td className="py-3 px-4 text-center text-sm bg-[#1a2e4c]/5">{sasu}</td>
                    <td className="py-3 px-4 text-center text-sm">{eurl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CTA */}
        {!showCTA && !submitted && (
          <div className="text-center">
            <Button
              onClick={() => setShowCTA(true)}
              className="bg-[#d4af37] hover:bg-[#b8952e] text-[#1a2e4c] font-semibold gap-2"
              size="lg"
            >
              <Mail className="w-4 h-4" />
              Recevoir l'étude complète par email
            </Button>
            <p className="text-xs text-[#4a5568] mt-2">Gratuit · Sans engagement · Réponse en 24h</p>
          </div>
        )}

        {showCTA && !submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="votre@email.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e4c]"
            />
            <Button type="submit" className="bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white whitespace-nowrap gap-2">
              Envoyer <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        )}

        {submitted && (
          <div className="text-center p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-green-700 font-medium">✅ Merci ! Votre étude personnalisée vous sera envoyée sous 24h.</p>
            <Link href="/contact" className="text-sm text-[#1a2e4c] hover:underline mt-2 block">
              Ou prenez directement RDV au cabinet →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
