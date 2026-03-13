import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales | Hayot Expertise - Expert-Comptable Paris 8',
  description: 'Mentions légales du cabinet Hayot Expertise, expert-comptable à Paris 8ème. Informations légales, éditeur du site, hébergeur.',
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li>/</li>
              <li className="text-white">Mentions légales</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Mentions légales</h1>
          <p className="text-white/70 mt-2">Dernière mise à jour : janvier 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-slate max-w-none space-y-10">

          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              1. Éditeur du site
            </h2>
            <div className="text-[#4a5568] space-y-2 text-sm leading-relaxed">
              <p><strong className="text-[#1a2e4c]">Raison sociale :</strong> Hayot Expertise</p>
              <p><strong className="text-[#1a2e4c]">Forme juridique :</strong> Société d'exercice libéral à responsabilité limitée (SELARL)</p>
              <p><strong className="text-[#1a2e4c]">Numéro SIRET :</strong> XXX XXX XXX XXXXX</p>
              <p><strong className="text-[#1a2e4c]">Numéro TVA intracommunautaire :</strong> FR XX XXX XXX XXX</p>
              <p><strong className="text-[#1a2e4c]">Adresse du siège social :</strong> 58 rue de Monceau, 75008 Paris, France</p>
              <p><strong className="text-[#1a2e4c]">Téléphone :</strong> 01 XX XX XX XX</p>
              <p><strong className="text-[#1a2e4c]">Email :</strong> contact@hayot-expertise.fr</p>
              <p><strong className="text-[#1a2e4c]">Directeur de la publication :</strong> Samuel HAYOT, Expert-Comptable diplômé, membre de l'Ordre des Experts-Comptables d'Île-de-France</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              2. Hébergement
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-2">
              <p>Ce site est hébergé par :</p>
              <p><strong className="text-[#1a2e4c]">Netlify, Inc.</strong></p>
              <p>44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA</p>
              <p>Site web : <a href="https://www.netlify.com" className="text-[#d4af37] hover:underline" target="_blank" rel="noopener noreferrer">www.netlify.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              3. Propriété intellectuelle
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive de Hayot Expertise, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Hayot Expertise.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              4. Limitation de responsabilité
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est mis à jour à intervalles réguliers. Toutefois, il peut contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Les informations fiscales et juridiques publiées sur ce site ont un caractère général et indicatif. Elles ne constituent pas un conseil personnalisé et ne sauraient se substituer à une consultation avec un professionnel compétent.
              </p>
              <p>
                Hayot Expertise ne pourra être tenu responsable de l'utilisation faite des informations contenues sur ce site.
              </p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              5. Liens hypertextes
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-3">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. Hayot Expertise n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu.
              </p>
              <p>
                La création de liens hypertextes vers le site hayot-expertise.fr nécessite une autorisation écrite préalable.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              6. Données personnelles
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed">
              <p>
                Le traitement de vos données personnelles est décrit dans notre{' '}
                <Link href="/politique-confidentialite" className="text-[#d4af37] hover:underline font-medium">
                  Politique de Confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-serif font-bold text-[#1a2e4c] mb-4 pb-2 border-b border-gray-200">
              7. Droit applicable et juridiction compétente
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </section>

          {/* Ordre des Experts-Comptables */}
          <section className="bg-[#f7fafc] rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-serif font-bold text-[#1a2e4c] mb-3">
              Ordre professionnel
            </h2>
            <div className="text-[#4a5568] text-sm leading-relaxed space-y-2">
              <p>
                Hayot Expertise est inscrit au tableau de l'<strong className="text-[#1a2e4c]">Ordre des Experts-Comptables</strong> de la région Île-de-France.
              </p>
              <p>
                <strong className="text-[#1a2e4c]">Conseil Régional de l'Ordre :</strong><br />
                19 rue Cognacq-Jay, 75341 Paris Cedex 07
              </p>
              <p>
                Le titre d'Expert-Comptable est régi par l'<strong>Ordonnance du 19 septembre 1945</strong> et le <strong>Décret du 30 mars 2012</strong>.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/" className="text-[#d4af37] hover:underline font-medium text-sm">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
