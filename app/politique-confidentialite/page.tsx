import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Hayot Expertise - Expert-Comptable Paris 8',
  description: 'Politique de confidentialité du cabinet Hayot Expertise. Traitement des données personnelles, droits RGPD, cookies.',
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li>/</li>
              <li className="text-white">Politique de confidentialité</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Politique de Confidentialité</h1>
          <p className="text-white/70 mt-2">Dernière mise à jour : janvier 2026 · Conformité RGPD</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-10">

          {/* Introduction */}
          <section>
            <div className="bg-[#f7fafc] border-l-4 border-[#d4af37] p-5 rounded-r-xl mb-6">
              <p className="text-sm text-[#4a5568] leading-relaxed">
                Hayot Expertise s'engage à protéger votre vie privée conformément au <strong className="text-[#1a2e4c]">Règlement Général sur la Protection des Données (RGPD)</strong> et à la loi Informatique et Libertés. Cette politique vous informe sur la collecte et l'utilisation de vos données personnelles.
              </p>
            </div>
          </section>

          {/* Responsable */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              1. Responsable du traitement
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-2">
              <p><strong className="text-[#1a2e4c]">Responsable :</strong> Samuel HAYOT – Hayot Expertise</p>
              <p><strong className="text-[#1a2e4c]">Adresse :</strong> 58 rue de Monceau, 75008 Paris</p>
              <p><strong className="text-[#1a2e4c]">Email DPO :</strong> <a href="mailto:dpo@hayot-expertise.fr" className="text-[#d4af37] hover:underline">dpo@hayot-expertise.fr</a></p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              2. Données collectées
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold text-[#1a2e4c] mb-2">Formulaire de contact</h3>
                <p>Lorsque vous utilisez notre formulaire de contact, nous collectons : nom et prénom, adresse email, numéro de téléphone (facultatif), motif de contact et contenu du message.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2e4c] mb-2">Simulateur fiscal</h3>
                <p>Si vous demandez à recevoir votre étude par email, nous collectons votre adresse email uniquement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a2e4c] mb-2">Navigation</h3>
                <p>Nous collectons automatiquement des données de navigation anonymisées (pages visitées, durée de session, type de navigateur) à des fins statistiques.</p>
              </div>
            </div>
          </section>

          {/* Finalités */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              3. Finalités du traitement
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1a2e4c] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Finalité</th>
                    <th className="px-4 py-3 text-left font-semibold">Base légale</th>
                    <th className="px-4 py-3 text-left font-semibold">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Répondre à vos demandes de contact', 'Intérêt légitime / Consentement', '3 ans'],
                    ['Envoi de l\'étude fiscale', 'Consentement explicite', '1 an'],
                    ['Statistiques de navigation (anonymisées)', 'Intérêt légitime', '13 mois'],
                    ['Relation client (mission comptable)', 'Exécution du contrat', '10 ans'],
                    ['Obligations légales comptables', 'Obligation légale', '10 ans'],
                  ].map(([finalite, base, duree]) => (
                    <tr key={finalite} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-[#1a2e4c]">{finalite}</td>
                      <td className="px-4 py-3 text-[#4a5568]">{base}</td>
                      <td className="px-4 py-3 text-[#4a5568] whitespace-nowrap">{duree}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              4. Destinataires des données
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>Vos données sont destinées exclusivement :</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] mt-1">▪</span>
                  <span>Aux collaborateurs de Hayot Expertise habilités à traiter votre demande</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] mt-1">▪</span>
                  <span>À nos sous-traitants techniques (hébergeur, outil de messagerie) liés par des contrats conformes au RGPD</span>
                </li>
              </ul>
              <p>Nous ne vendons jamais vos données à des tiers ni ne les transférons hors de l'Union Européenne sans garanties appropriées.</p>
            </div>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              5. Vos droits RGPD
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { droit: 'Droit d\'accès', desc: 'Obtenir une copie de vos données' },
                  { droit: 'Droit de rectification', desc: 'Corriger des données inexactes' },
                  { droit: 'Droit à l\'effacement', desc: '"Droit à l\'oubli"' },
                  { droit: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format lisible' },
                  { droit: 'Droit d\'opposition', desc: 'S\'opposer à un traitement' },
                  { droit: 'Droit à la limitation', desc: 'Suspendre un traitement' },
                ].map(({ droit, desc }) => (
                  <div key={droit} className="bg-[#f7fafc] rounded-lg p-3 border border-gray-100">
                    <div className="font-semibold text-[#1a2e4c] text-xs mb-1">{droit}</div>
                    <div className="text-xs text-[#4a5568]">{desc}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous par email à{' '}
                <a href="mailto:dpo@hayot-expertise.fr" className="text-[#d4af37] hover:underline font-medium">dpo@hayot-expertise.fr</a>{' '}
                ou par courrier à notre adresse. Nous répondrons dans un délai maximum de 30 jours.
              </p>
              <p>
                Vous pouvez également adresser une réclamation à la{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline font-medium">CNIL</a>{' '}
                (Commission Nationale de l'Informatique et des Libertés).
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              6. Cookies
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>Ce site utilise des cookies pour :</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] mt-1">▪</span>
                  <span><strong className="text-[#1a2e4c]">Cookies techniques :</strong> nécessaires au bon fonctionnement du site (pas de consentement requis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4af37] mt-1">▪</span>
                  <span><strong className="text-[#1a2e4c]">Cookies analytiques :</strong> mesure d'audience anonymisée (Google Analytics, si activé)</span>
                </li>
              </ul>
              <p>
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              7. Sécurité des données
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, altération ou destruction : connexion HTTPS, hébergement sécurisé, accès restreint aux données client.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-[#f7fafc] rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-[#1a2e4c] mb-3">
              Contact & Réclamations
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-2">
              <p>Pour toute question relative à cette politique :</p>
              <p>
                <strong className="text-[#1a2e4c]">Email :</strong>{' '}
                <a href="mailto:dpo@hayot-expertise.fr" className="text-[#d4af37] hover:underline">dpo@hayot-expertise.fr</a>
              </p>
              <p><strong className="text-[#1a2e4c]">Courrier :</strong> Hayot Expertise — DPO, 58 rue de Monceau, 75008 Paris</p>
              <p className="mt-3">
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline font-medium">
                  Contacter la CNIL →
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex gap-4">
          <Link href="/" className="text-[#d4af37] hover:underline font-medium text-sm">
            ← Retour à l'accueil
          </Link>
          <Link href="/mentions-legales" className="text-[#4a5568] hover:text-[#d4af37] font-medium text-sm transition-colors">
            Mentions légales
          </Link>
        </div>
      </div>
    </div>
  );
}
