import { Metadata } from 'next';
import Simulateur from '@/components/Simulateur';
import Link from 'next/link';
import { services } from '@/data/services';
import { ChevronDown, FileText, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ressources & Outils Fiscaux | Hayot Expertise Paris 8',
  description: 'Simulateurs fiscaux gratuits, FAQ expert-comptable, guides pratiques. Tous les outils pour optimiser votre fiscalité à Paris.',
  keywords: 'simulateur fiscal, FAQ expert-comptable, guide fiscalité, outils comptables',
};

const faqs = [
  {
    question: 'Quelle est la différence entre SASU et EURL ?',
    answer: 'La SASU est une SAS unipersonnelle dont le président est assimilé salarié (cotisations ~80% du salaire, protection sociale du régime général). L\'EURL est une SARL unipersonnelle dont le gérant est TNS (cotisations ~45%, protection SSI). La SASU est idéale pour distribuer des dividendes (flat tax 30% sans cotisations supplémentaires), l\'EURL est avantageuse pour des revenus modestes.',
  },
  {
    question: 'Quand dois-je créer une holding ?',
    answer: 'La holding devient pertinente dès que vous avez plusieurs sociétés, souhaitez optimiser la remontée de dividendes (régime mère-fille : 95% exonérés), financer de nouveaux investissements depuis la holding, ou préparer une transmission patrimoniale. Elle est particulièrement adaptée aux investisseurs immobiliers avec plusieurs SCI.',
  },
  {
    question: 'Le régime réel LMNP est-il toujours préférable au micro-BIC ?',
    answer: 'Généralement oui, dès que vos revenus locatifs dépassent 15 000€/an. Le régime réel vous permet de déduire les charges réelles + les amortissements (bien et mobilier), ce qui réduit souvent le résultat fiscal à 0€. Cela nécessite un expert-comptable mais l\'économie fiscale est très significative.',
  },
  {
    question: 'Comment optimiser ma rémunération en SASU ?',
    answer: 'L\'optimisation dépend de vos objectifs : si vous avez besoin de liquidités immédiates, un mix salaire + dividendes est souvent optimal. Si vous visez la retraite, favorisez le salaire pour valider des trimestres. Notre simulateur vous permet de tester différentes répartitions. Un RDV avec notre équipe permet d\'affiner selon votre TMI personnel.',
  },
  {
    question: 'Quels documents dois-je fournir pour l\'établissement de ma comptabilité ?',
    answer: 'Pour la tenue comptable, nous avons besoin de : relevés bancaires professionnels, factures de vente et d\'achat, tickets de caisse, justificatifs de notes de frais, contrats de travail et bulletins de paie, contrats fournisseurs. Avec nos outils digitaux, vous pouvez tout transmettre en quelques clics depuis votre smartphone.',
  },
  {
    question: 'Quel est le coût d\'un expert-comptable ?',
    answer: 'Nos honoraires sont transparents et adaptés à la taille de votre structure. En général : 80-200€/mois pour la tenue comptable d\'une TPE, 200-500€/mois pour une PME avec paie et conseil. Nous proposons un premier RDV gratuit pour établir un devis sur-mesure sans engagement.',
  },
];

const guides = [
  { title: 'Guide Complet LMNP 2026', desc: 'Amortissements, charges déductibles, déclaration 2031. Tout sur la location meublée.', href: '/services/comptabilite-lmnp-paris', tag: 'Immobilier' },
  { title: 'SASU vs EURL : Le Comparatif', desc: 'Charges sociales, fiscalité, dividendes. Choisissez le bon statut pour 2026.', href: '/blog/sasu-vs-eurl-2026', tag: 'Entrepreneuriat' },
  { title: 'Créer une Holding en 2026', desc: 'Régime mère-fille, intégration fiscale, structuration patrimoniale.', href: '/services/fiscalite-holding-paris', tag: 'Fiscalité' },
];

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Ressources Gratuites</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Outils & Guides Fiscaux
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Simulateurs interactifs, FAQ et guides pratiques pour mieux comprendre et optimiser votre situation fiscale et comptable.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#simulateur" className="flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/30 hover:bg-[#d4af37]/30 transition-colors rounded-full px-4 py-2 text-sm text-[#d4af37]">
              Simulateur
            </a>
            <a href="#faq" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm text-white">
              FAQ
            </a>
            <a href="#guides" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 text-sm text-white">
              Guides
            </a>
          </div>
        </div>
      </div>

      {/* Simulateur */}
      <section id="simulateur" className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#d4af37]" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c]">Simulateur Fiscal Interactif</h2>
            <p className="text-[#4a5568] text-sm">Calculez et comparez vos options en temps réel</p>
          </div>
        </div>
        <Simulateur />
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f7fafc] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#d4af37]/10 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a2e4c]">FAQ Expert-Comptable</h2>
              <p className="text-[#4a5568] text-sm">Les questions les plus fréquentes de nos clients</p>
            </div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-[#1a2e4c] pr-4">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-[#4a5568] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-[#4a5568] leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-[#4a5568] mb-4">Vous avez une question spécifique ?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a2e4c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a3e5c] transition-colors">
              Poser ma question à l'équipe <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section id="guides" className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#d4af37]" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c]">Guides Pratiques</h2>
            <p className="text-[#4a5568] text-sm">Nos ressources pour mieux comprendre vos obligations</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href}>
              <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                <span className="px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold rounded-full">
                  {guide.tag}
                </span>
                <h3 className="font-serif font-bold text-[#1a2e4c] text-lg mt-3 mb-2 group-hover:text-[#d4af37] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{guide.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-[#d4af37] text-sm font-medium">
                  Lire le guide <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-[#1a2e4c] py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-3">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Nos simulateurs donnent une estimation. Un RDV avec Samuel HAYOT permet d'affiner selon votre situation exacte.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#d4af37] text-[#1a2e4c] px-6 py-3 rounded-lg font-semibold hover:bg-[#e8c95a] transition-colors">
            Consultation Gratuite <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
