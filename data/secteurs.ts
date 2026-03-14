export interface Secteur {
  slug: string;
  title: string;
  description: string;
  content: string;
  seoKeywords: string[];
  icon: string;
  relatedServices: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const secteurs: Secteur[] = [
  {
    slug: "immobilier-sci-lmnp",
    title: "Expert-Comptable Immobilier - SCI & LMNP Paris",
    description: "Cabinet comptable spécialisé immobilier : SCI, LMNP, Holding immobilière, Marchand de biens. Optimisation fiscale patrimoine.",
    content: `
# Expert-Comptable Immobilier Paris - SCI, LMNP, Holding

## Votre partenaire comptable pour l'immobilier

Hayot Expertise est **spécialisé dans la comptabilité et la fiscalité immobilière** à Paris. Nous accompagnons investisseurs privés, marchands de biens et sociétés foncières.

### Nos expertises immobilier

#### SCI - Société Civile Immobilière

**SCI à l'IR (transparence fiscale)**
- Idéal pour la location nue
- Déduction des charges réelles
- Déficit foncier imputable

**SCI à l'IS (impôt société)**
- Recommandée pour la location meublée
- Amortissement du bien
- Rémunération déductible
- Sortie en dividendes optimisée

**Nos services SCI :**
- Création de SCI (statuts, immatriculation)
- Comptabilité annuelle
- Assemblées générales
- Déclarations fiscales (2072, 2065)

#### LMNP - Location Meublée Non Professionnelle

La location meublée offre une **fiscalité ultra-avantageuse** :
- Régime réel : amortissement sur 20-30 ans
- Charges déductibles : intérêts d'emprunt, travaux, charges copro
- Récupération de TVA (résidences services)

**Notre accompagnement LMNP :**
- Audit fiscal et choix du régime
- Tenue de comptabilité LMNP
- Déclaration 2031 (liasse BIC)
- Plan d'amortissement sur-mesure

#### Holding Immobilière

**Structurez votre patrimoine immobilier**

La holding immobilière permet de :
- Détenir plusieurs SCI
- Optimiser les dividendes (régime mère-fille)
- Financer de nouveaux investissements
- Préparer la transmission (donation parts)

**Montage type :**
~~~
Holding (IS)
  ├── SCI 1 (Location meublée)
  ├── SCI 2 (Location nue)
  └── SCI 3 (Résidence services)
~~~

#### Marchand de Biens

Accompagnement spécifique pour les professionnels de l'achat-revente :
- Comptabilité commerciale
- TVA sur marge
- Optimisation fiscale (stock, provisions)

### Cas client : Optimisation fiscale immobilier

**Situation initiale :**
- 3 appartements LMNP en nom propre
- Loyers : 54 000€/an
- Imposition : Micro-BIC (27k€ imposable)

**Structure optimisée :**
- Création Holding + 1 SCI IS
- Passage au régime réel
- Amortissements : 22 000€/an
- **Résultat imposable : 8 000€** (au lieu de 27 000€)
- **Économie fiscale : ~9 000€/an**

### Pourquoi choisir Hayot Expertise ?

✅ **Expertise immobilière pointue** : Plus de 150 clients investisseurs
✅ **Optimisation fiscale** : Nous maximisons votre rentabilité
✅ **Accompagnement complet** : De l'acquisition à la revente
✅ **Outils digitaux** : Plateforme en ligne, documents dématérialisés

**Cabinet d'expertise comptable immobilier Paris 8**

📍 58 rue de Monceau, 75008 Paris
📞 Prenez RDV pour un audit patrimonial gratuit

### Services associés

- Création de SCI et Holding
- Comptabilité LMNP
- Fiscalité de l'immobilier
- Conseil en gestion de patrimoine
    `,
    seoKeywords: ["expert-comptable immobilier Paris", "comptable SCI", "expert LMNP", "holding immobilière", "fiscalité immobilier"],
    icon: "Building",
    relatedServices: ["comptabilite-lmnp-paris", "fiscalite-holding-paris", "expertise-comptable-paris-8"],
    stats: [
      { label: "Clients investisseurs", value: "150+" },
      { label: "SCI gérées", value: "80+" },
      { label: "Dossiers LMNP", value: "120+" },
      { label: "Économie fiscale moyenne", value: "8 500€/an" }
    ]
  },
  {
    slug: "startups-tech",
    title: "Expert-Comptable Startups & Tech Paris",
    description: "Cabinet comptable spécialisé startups et tech : Levée de fonds, CIR/CII, BSPCE, JEI. Accompagnement entrepreneurs innovants.",
    content: `
# Expert-Comptable Startups & Tech Paris

## Le partenaire comptable des entrepreneurs innovants

Hayot Expertise accompagne les **startups et entreprises tech** dans leur développement. De la création à la levée de fonds, nous maîtrisons les enjeux spécifiques de l'innovation.

### Nos services pour startups

#### Création & Structuration

**Choix du statut juridique**
- **SASU** : Idéale pour lever des fonds, flexibilité maximum
- **SAS** : Pacte d'associés, BSPCE, BSA
- **Holding** : Structure pour entrepreneurs multi-projets

**Notre accompagnement création :**
- Business plan & prévisionnel 3 ans
- Rédaction statuts + pacte d'associés
- Immatriculation express (48h)
- Mise en place comptable digitale

#### Levée de Fonds

**Avant la levée :**
- Audit comptable et fiscal (due diligence)
- Valorisation de la société
- Data room financière
- Prévisionnel croissance

**Pendant la levée :**
- Négociation table de capitalisation
- Montage juridique (BSA, BSPCE, OC)
- Pacte d'actionnaires

**Après la levée :**
- Intégration des investisseurs
- Reporting investisseurs (mensuel/trimestriel)
- Suivi KPI financiers

#### CIR - Crédit d'Impôt Recherche

Le CIR permet de **récupérer 30% des dépenses R&D** (jusqu'à 100M€).

**Notre accompagnement CIR :**
- Éligibilité : analyse des travaux R&D
- Calcul : masse salariale, prestataires, brevets
- Déclaration : 2069-A-SD
- Défense : en cas de contrôle fiscal

**CII** : Également experts en Crédit d'Impôt Innovation (20% jusqu'à 400k€).

#### BSPCE - Stock Options

Mise en place de **BSPCE** (Bons de Souscription de Parts de Créateur d'Entreprise) :
- Plan d'attribution BSPCE
- Valorisation des parts
- Fiscalité avantageuse (flat tax + abattement)
- Gestion administrative

#### Statut JEI - Jeune Entreprise Innovante

Le statut **JEI** offre des exonérations massives :
- Exonération IS (100% puis 50%) pendant 7 ans
- Exonération charges sociales (URSSAF)
- Exonération CFE, CVAE

**Conditions :** PME < 8 ans, 15% dépenses R&D.

### Comptabilité Tech

**Spécificités SaaS & Tech :**
- Reconnaissance du chiffre d'affaires (récurrent, abonnements)
- Activation des coûts de développement
- Valorisation des stocks (pour le hardware)
- Stock-options et BSPCE

**Outils :**
- Intégration Stripe, PayPal (comptabilité automatisée)
- Connexion API bancaires
- Dashboards temps réel (MRR, CAC, LTV)

### Cas client : Startup SaaS

**Profil :**
- SaaS B2B, 8 collaborateurs
- CA : 400k€ (abonnements mensuels)
- Levée de fonds : 1M€

**Notre intervention :**
- Due diligence pré-levée
- Montage BSPCE pour 4 collaborateurs clés
- Demande CIR : 45k€ récupérés
- Mise en place reporting investisseurs
- Prévisionnel croissance 5 ans

### Nos atouts Startups

✅ **Expertise tech** : Nous parlons votre langage (SaaS, API, MRR...)
✅ **Rapidité** : Immatriculation 48h, réponses < 24h
✅ **Tarifs adaptés** : Forfaits startups, paiement mensuel
✅ **Réseau** : Mise en relation investisseurs, avocats, banques

**Cabinet expert-comptable startups Paris 8**

Plus de 50 startups accompagnées, 12M€ levés par nos clients.

📞 Premier RDV gratuit - Parlons de votre projet
    `,
    seoKeywords: ["expert-comptable startup Paris", "comptable tech", "CIR", "levée de fonds", "BSPCE", "JEI"],
    icon: "Zap",
    relatedServices: ["creation-entreprise-paris", "expertise-comptable-paris-8"],
    stats: [
      { label: "Startups accompagnées", value: "50+" },
      { label: "Levées de fonds", value: "12M€" },
      { label: "Dossiers CIR", value: "30+" },
      { label: "Plans BSPCE", value: "20+" }
    ]
  },
  {
    slug: "professions-liberales",
    title: "Expert-Comptable Professions Libérales Paris",
    description: "Cabinet comptable spécialisé professions libérales : Médecins, Avocats, Architectes, Consultants. BNC, 2035, optimisation.",
    content: `
# Expert-Comptable Professions Libérales Paris

## L'expert comptable des professionnels libéraux

Hayot Expertise accompagne les **professions libérales** à Paris : médecins, avocats, architectes, consultants, coaches, thérapeutes. Nous maîtrisons les spécificités fiscales et sociales des BNC.

### Nos services pour libéraux

#### Comptabilité BNC

**Régime Micro-BNC** (si CA < 77 700€)
- Abattement forfaitaire 34%
- Pas de comptabilité obligatoire
- Déclaration 2042-C-PRO

**Régime réel (déclaration 2035)**
- Déduction charges réelles
- Amortissements (véhicule, matériel, mobilier)
- Souvent plus avantageux si charges > 34%

**Notre accompagnement 2035 :**
- Tenue du livre des recettes et dépenses
- Tableau des immobilisations et amortissements
- Déclaration 2035 + annexes
- Optimisation fiscale

#### Optimisation Fiscale Libéral

**Charges déductibles** (souvent oubliées) :
- Formation professionnelle
- Frais de déplacement (barème km)
- Local professionnel (loyer, charges)
- Cotisations Loi Madelin
- Documentation, abonnements
- Matériel et mobilier

**Amortissements :**
- Véhicule professionnel
- Ordinateur, logiciels
- Mobilier bureau
- Matériel médical (pour médecins)

#### Passage en Société

**Quand passer en société ?**
À partir de 70-80k€ de BNC, la société devient intéressante.

**SELAS vs SELARL** (pour avocats, médecins)
- SELAS : Président assimilé salarié, charges sociales élevées, retraite cadre
- SELARL : Gérant TNS, charges sociales réduites, retraite libérale

**SEL à l'IS :**
- Rémunération déductible
- Dividendes (flat tax 30%)
- Optimisation globale : rémunération + dividendes

**SASU/SAS** (pour consultants, coaches)
- Flexibilité maximum
- IS ou IR (option 5 ans)
- Protection sociale Urssaf

#### Social & Paie

**TNS - Travailleur Non Salarié**
- Urssaf (maladie, allocations familiales)
- CIPAV ou SSI (retraite)
- Loi Madelin (déductible du BNC)

**Assimilé salarié**
- Urssaf sur la rémunération
- Retraite cadre
- Pas de Madelin

**Notre accompagnement social :**
- Calcul et paiement des cotisations
- Déclarations sociales (DSN pour salariés)
- Optimisation retraite et prévoyance

### Professions accompagnées

#### Médecins & Paramédicaux
- Comptabilité BNC ou SEL
- Optimisation fiscale médicale
- SCM (Société Civile de Moyens)
- Installation, cession de patientèle

#### Avocats
- Comptabilité cabinet individuel ou SELARL/SELAS
- Gestion CARPA
- Honoraires, provisions, débours

#### Architectes
- BNC ou société d'architecture
- Prestations de services longues
- Honoraires au forfait ou %

#### Consultants & Coaches
- Portage salarial vs SASU
- Optimisation IS vs IR
- Frais de mission

### Cas client : Consultant

**Situation initiale :**
- BNC 90 000€
- Charges : 15 000€
- BNC imposable : 75 000€
- IR + PS : ~32 000€

**Passage en SASU IS :**
- CA : 90 000€
- Charges : 15 000€
- Rémunération : 40 000€ (+ charges 18k€)
- IS : 3 750€ (sur 15k€ de bénéfice)
- Dividendes : 11 250€ (flat tax 30% = 3 375€)
- **Imposition totale : ~25 000€**
- **Économie : 7 000€/an**

### Pourquoi nous choisir ?

✅ **Expertise BNC** : Maîtrise fiscale et sociale
✅ **Accompagnement personnalisé** : Un interlocuteur dédié
✅ **Optimisation** : Nous maximisons votre disponible
✅ **Outils digitaux** : Gestion dématérialisée, coffre-fort numérique

**Cabinet expert-comptable professions libérales Paris 8**

Plus de 100 professionnels libéraux nous font confiance.

📞 Bilan fiscal gratuit - Contactez-nous
    `,
    seoKeywords: ["expert-comptable profession libérale", "comptable BNC", "déclaration 2035", "SELAS", "médecin comptable", "avocat comptable"],
    icon: "Briefcase",
    relatedServices: ["expertise-comptable-paris-8", "creation-entreprise-paris"],
    stats: [
      { label: "Professionnels libéraux", value: "100+" },
      { label: "Déclarations 2035/an", value: "80+" },
      { label: "Passages en société", value: "25+" },
      { label: "Économie fiscale moyenne", value: "6 500€/an" }
    ]
  },
  {
    slug: "restauration",
    title: "Expert-Comptable Restauration & CHR Paris",
    description: "Cabinet comptable spécialisé restauration, hôtellerie et CHR à Paris. TVA, caisse enregistreuse, saisonnalité, paie serveurs. Hayot Expertise Paris 8.",
    content: `
# Expert-Comptable Restauration & CHR Paris

## Votre expert-comptable spécialisé dans la restauration

Hayot Expertise maîtrise les **spécificités comptables et fiscales** du secteur CHR (Cafés, Hôtels, Restaurants). Nous accompagnons restaurateurs, traiteurs, food trucks et établissements hôteliers de Paris et Île-de-France.

### Les enjeux spécifiques du secteur CHR

#### TVA en restauration
Le secteur restauration applique plusieurs taux de TVA :
- **TVA 10%** : consommation sur place, plats à emporter (sauf boissons alcoolisées)
- **TVA 20%** : boissons alcoolisées, confiseries, certains produits luxe
- **TVA 5,5%** : produits alimentaires de base à emporter

Notre cabinet sécurise votre gestion de TVA et optimise vos déclarations.

#### Caisse enregistreuse et logiciels certifiés
Depuis 2018, les restaurants doivent utiliser un **logiciel de caisse certifié NF 525**.
Nous vérifions la conformité de votre système et gérons l'intégration comptable.

#### Gestion de la saisonnalité
- Anticipation des pics d'activité (Noël, été)
- Gestion des stocks et pertes alimentaires
- Planification de trésorerie

### Nos services pour les restaurateurs

#### Comptabilité & Fiscalité CHR
- Tenue comptable adaptée aux CHR (stocks, caisse, TVA)
- Bilan et compte de résultat annuel
- Déclarations fiscales (IS, TVA, CFE)
- Optimisation fiscale (amortissements matériel, travaux)

#### Gestion de la paie en restauration
- **Service (12,5%)** : calcul et répartition
- Heures supplémentaires et majorations
- Contrats saisonniers et extras
- Avantages en nature (repas)
- Convention collective HCR

#### Création et reprise d'établissement
- Choix du statut (SARL, SAS, EI)
- Business plan et prévisionnel
- Évaluation du fonds de commerce
- **Bail commercial** : négociation et rédaction
- Licence IV et autorisations d'exploitation

### Indicateurs de performance CHR

Nous suivons pour vous les KPIs essentiels :

| Indicateur | Benchmark CHR |
|-----------|---------------|
| Food cost | 25-35% du CA |
| Beverage cost | 15-25% du CA |
| Labour cost | 30-40% du CA |
| Résultat net | 5-15% du CA |

### Accompagnement digital

- Intégration des données de caisse automatiquement
- Dashboard hebdomadaire en temps réel
- Alerte en cas d'anomalie de caisse
- Connexion avec les plateformes de livraison (Deliveroo, UberEats)

**Cabinet référent CHR Paris 8ème**

Notre équipe connaît les réalités du terrain : nous accompagnons des brasseries parisiennes, restaurants étoilés, food halls et établissements de nuit.

📞 Audit comptable gratuit pour restaurateurs - 01 48 85 61 01
    `,
    seoKeywords: ["expert-comptable restauration Paris", "comptable CHR", "TVA restauration", "comptable hôtellerie", "paie restauration", "comptable brasserie Paris"],
    icon: "UtensilsCrossed",
    relatedServices: ["expertise-comptable-paris-8", "social-paie-paris", "conseil-juridique-paris"],
    stats: [
      { label: "Établissements CHR", value: "40+" },
      { label: "Taux de TVA gérés", value: "3" },
      { label: "Bulletins de paie/mois", value: "200+" },
      { label: "Saving moyen/an", value: "8 000€" }
    ]
  },
  {
    slug: "e-commerce",
    title: "Expert-Comptable E-Commerce & Dropshipping Paris",
    description: "Expert-comptable spécialisé E-commerce, Amazon FBA, Shopify, Dropshipping. Gestion de la TVA intracommunautaire (OSS), exports, et liaison des flux logiciels.",
    content: `
# Expert-Comptable E-Commerce Paris

## Votre partenaire comptable E-Commerce et Dropshipping

Hayot Expertise vous accompagne dans les spécificités comptables liées au **E-commerce**. Que vous utilisiez Shopify, Amazon FBA, ou un modèle dropshipping, la gestion de la TVA et les intégrations logicielles n'ont aucun secret pour nous.

### Spécificités du secteur E-commerce

#### La gestion de la TVA (Guichet unique OSS)
Les ventes en ligne à des particuliers dans l'UE sont soumises à la TVA du pays de destination au-delà de 10 000 € de CA.
- **Régime OSS (One Stop Shop)** : nous centralisons vos déclarations de TVA européennes sur une seule plateforme.
- Ventes hors UE / Exports : facturation HT et justificatifs douaniers.

#### Importation automatisée des flux
Fini la saisie manuelle. Nos outils se connectent directement à vos plateformes (Shopify, Stripe, Amazon, PayPal, PrestaShop) pour injecter automatiquement les centaines de micro-transactions dans votre comptabilité.

### Nos services

1. **Dashboard temps réel** : Suivi des marges commerciales, ROI marketing (Facebook/Google Ads).
2. **Audit des coûts logistiques** : Optimisation des frais Amazon FBA.
3. **Création d'entreprise** : Montage optimisé pour les commerçants digitaux.
    `,
    seoKeywords: ["expert-comptable e-commerce", "comptable shopify", "TVA OSS", "comptable amazon FBA", "expert dropshipping Paris"],
    icon: "ShoppingCart",
    relatedServices: ["expertise-comptable-paris-8", "creation-entreprise-paris", "dashboard-financier"],
    stats: [
      { label: "Boutiques Shopify", value: "30+" },
      { label: "Volume CA géré", value: "15M€" }
    ]
  },
  {
    slug: "btp-et-construction",
    title: "Expert-Comptable BTP & Construction Paris",
    description: "Accompagnement spécifique pour professionnels du bâtiment (BTP). Autoliquidation de TVA, gestion des sous-traitants, retenues de garantie, caisse congés payés.",
    content: `
# Expert-Comptable BTP & Construction Paris

## Une maîtrise parfaite des enjeux du bâtiment

Le secteur de la construction possède une législation sociale et fiscale très particulière que notre cabinet maîtrise parfaitement. Nous accompagnons artisans, PME du second-œuvre, et constructeurs.

### Expertise Bâtiment & Travaux Publics

#### Autoliquidation de la TVA en sous-traitance
Si vous faites appel à un sous-traitant (ou êtes vous-même sous-traitant), la facturation doit se faire hors taxe, avec la mention "Autoliquidation de la TVA". Nous veillons à la conformité de vos factures et de votre liasse fiscale.

#### Retenue de garantie (5%)
Gestion comptable de la retenue de garantie légale (5%) : suivi des échéanciers de facturation, comptabilisation en créance client jusqu'à la réception définitive des travaux.

#### Gestion sociale spécialisée BTP
- Caisse de Congés Payés du Bâtiment (CIBTP)
- Prime de panier, indemnités de trajet/transport
- Intempéries et chômage partiel
- Carte d'identification professionnelle (Carte BTP)

### Nos engagements :

- **Attestation de vigilance URSSAF** fournie rapidement
- **Suivi de rentabilité par chantier** : analysez la marge brute projet par projet
    `,
    seoKeywords: ["expert-comptable BTP", "comptable bâtiment Paris", "autoliquidation TVA", "paie BTP", "comptable artisan", "gestion retenue garantie"],
    icon: "HardHat",
    relatedServices: ["social-paie-paris", "expertise-comptable-paris-8", "gestion-entreprise-paris"],
    stats: [
      { label: "Artisans & PME BTP", value: "65+" },
      { label: "Paies BTP/mois", value: "300+" }
    ]
  },
  {
    slug: "le-role-de-l-expert-comptable",
    title: "Le Rôle de l'Expert-Comptable",
    description: "N/A",
    content: `
# Le Rôle de l'Expert-Comptable

## Votre expert-comptable vous accompagne

N/A

### Pourquoi choisir Hayot Expertise ?

Situé au **58 rue de Monceau, Paris 8ème**, notre cabinet d'expertise comptable vous offre un accompagnement personnalisé et des solutions sur-mesure.

**Samuel HAYOT**, expert-comptable diplômé, et son équipe vous accompagnent dans toutes vos démarches avec une approche digitale et humaine.

### Nos points forts

- ✅ **Expertise reconnue** : Plus de 10 ans d'expérience
- ✅ **Outils digitaux** : Pennylane, facturation électronique
- ✅ **Proximité** : Cabinet situé dans le 8ème arrondissement de Paris
- ✅ **Réactivité** : Réponse sous 24h

### Contactez-nous

📍 58 rue de Monceau, 75008 Paris
📞 01 48 85 61 01
📧 contact@hayot-expertise.fr

**Prenez rendez-vous** pour un premier échange gratuit et sans engagement.
    `,
    seoKeywords: ["Le Rôle de l'ExpertComptable", "Le Rôle de l'ExpertComptable expert-comptable Paris", "N/A"],
    icon: "Building",
    relatedServices: ["expertise-comptable-paris-8"],
    stats: [
      { label: "Clients accompagnés", value: "100+" },
      { label: "Satisfaction client", value: "98%" }
    ]
  }
];
