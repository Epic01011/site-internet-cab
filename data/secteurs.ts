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
```
Holding (IS)
  ├── SCI 1 (Location meublée)
  ├── SCI 2 (Location nue)
  └── SCI 3 (Résidence services)
```

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
  }
];
