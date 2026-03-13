export interface Service {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
  seoKeywords: string[];
  icon: string;
  relatedServices: string[];
  relatedSecteurs: string[];
}

export const services: Service[] = [
  {
    slug: "expertise-comptable-paris-8",
    title: "Expertise Comptable Paris 8ème",
    category: "Comptabilité",
    description: "Expert-comptable à Paris 8ème, accompagnement comptable sur-mesure pour entreprises et professions libérales dans le quartier Monceau.",
    content: `
# Expert-Comptable Paris 8ème - Cabinet Hayot Expertise

## Votre expert-comptable de confiance à Paris 8

Situé au **58 rue de Monceau**, Hayot Expertise vous accompagne dans la gestion comptable et fiscale de votre entreprise. Notre cabinet d'expertise comptable intervient auprès des PME, startups, professions libérales et investisseurs immobiliers du 8ème arrondissement.

### Nos prestations comptables

- **Tenue de comptabilité** : Saisie comptable, lettrage, rapprochements bancaires
- **Révision des comptes** : Analyse et contrôle de vos écritures comptables
- **Établissement des comptes annuels** : Bilan, compte de résultat, annexes
- **Déclarations fiscales** : TVA, IS, CFE, CVAE
- **Conseil en gestion** : Tableaux de bord, analyse financière

### Pourquoi choisir Hayot Expertise ?

Notre cabinet se distingue par une **approche digitale et personnalisée**. Nous utilisons les derniers outils de comptabilité en ligne pour vous offrir un suivi en temps réel de votre activité.

**Secteurs d'expertise** : Immobilier (SCI, LMNP, Holding), Startups & Tech, Professions libérales, Commerce.

### Contact & Rendez-vous

📍 58 rue de Monceau, 75008 Paris
📞 Prenez rendez-vous pour un audit gratuit de votre situation comptable

Notre équipe vous accompagne dans toutes les étapes de la vie de votre entreprise : création, développement, transmission.
    `,
    seoKeywords: ["expert-comptable Paris 8", "comptable Paris 8ème", "cabinet comptable Monceau", "expertise comptable 75008"],
    icon: "Calculator",
    relatedServices: ["fiscalite-holding-paris", "creation-entreprise-paris"],
    relatedSecteurs: ["immobilier-sci-lmnp", "professions-liberales"]
  },
  {
    slug: "fiscalite-holding-paris",
    title: "Fiscalité Holding & Optimisation IS",
    category: "Fiscalité",
    description: "Optimisation fiscale par holding, intégration fiscale, régime mère-fille. Expert en structuration patrimoniale à Paris.",
    content: `
# Fiscalité Holding - Optimisation Impôt sur les Sociétés

## Structurez votre patrimoine professionnel

La **holding** est un outil puissant d'optimisation fiscale et patrimoniale. Hayot Expertise vous accompagne dans la création et la gestion de votre holding à Paris.

### Avantages de la holding

- **Régime mère-fille** : Exonération de 95% des dividendes remontés
- **Intégration fiscale** : Compensation des résultats entre sociétés
- **Mutualisation des moyens** : Prestations de services intra-groupe
- **Protection du patrimoine** : Séparation des activités et des risques

### Notre accompagnement holding

1. **Étude d'opportunité** : Analyse de votre situation et simulation
2. **Structuration juridique** : Montage optimal selon vos objectifs
3. **Création de la holding** : Accompagnement complet (statuts, immatriculation)
4. **Gestion comptable & fiscale** : Tenue, liasse fiscale, conventions
5. **Optimisation continue** : Revue annuelle de la structure

### Holding et immobilier

La holding est particulièrement adaptée pour :
- Détenir plusieurs SCI
- Optimiser la transmission familiale
- Financer de nouveaux investissements immobiliers
- Réduire l'imposition sur les plus-values

**Votre expert en holding à Paris 8ème**

Notre cabinet maîtrise toutes les subtilités fiscales des holdings (IS, TVA, CET). Nous intervenons auprès d'entrepreneurs, d'investisseurs immobiliers et de professions libérales.

📞 Contactez-nous pour une étude personnalisée
    `,
    seoKeywords: ["holding Paris", "fiscalité holding", "régime mère-fille", "intégration fiscale", "expert-comptable holding"],
    icon: "Building2",
    relatedServices: ["expertise-comptable-paris-8", "creation-entreprise-paris"],
    relatedSecteurs: ["immobilier-sci-lmnp", "startups-tech"]
  },
  {
    slug: "creation-entreprise-paris",
    title: "Création d'Entreprise à Paris",
    category: "Juridique",
    description: "Accompagnement création entreprise : SASU, EURL, SAS, SARL. Choix du statut juridique, rédaction statuts, formalités.",
    content: `
# Création d'Entreprise à Paris - Expert-Comptable

## Créez votre entreprise avec un accompagnement expert

Hayot Expertise vous accompagne dans la **création de votre société** à Paris. Du choix du statut juridique aux formalités d'immatriculation, nous gérons toutes les étapes.

### Quel statut juridique choisir ?

| Statut | Avantages | Profil type |
|--------|-----------|-------------|
| **SASU** | Flexibilité, IS/IR, dividendes | Entrepreneur solo, startup |
| **EURL** | Simplicité, TNS | Artisan, commerçant |
| **SAS** | Associés multiples, pacte | Projet à plusieurs |
| **SARL** | Cadre sécurisant, classique | PME familiale |

### Notre accompagnement création

1. **Rendez-vous stratégique** : Analyse de votre projet
2. **Étude comparative** : SASU vs EURL, IS vs IR, simulateur
3. **Business plan financier** : Prévisionnel 3 ans
4. **Rédaction des statuts** : Clauses sur-mesure
5. **Formalités complètes** : Immatriculation, annonce légale, INPI
6. **Mise en place comptable** : Logiciel, processus, accompagnement

### Outils inclus

- **Simulateur Dividendes vs Salaire** : Optimisez votre rémunération
- **Prévisionnel financier** : Outil interactif
- **Checklist création** : Ne ratez aucune étape

### Après la création

Notre accompagnement ne s'arrête pas à l'immatriculation :
- Ouverture de compte bancaire professionnel
- Choix de la mutuelle et prévoyance
- Première déclaration de TVA
- Formation aux outils comptables

**Cabinet expert en création d'entreprise Paris 8**

Plus de 200 entreprises créées et accompagnées depuis 2015.

📞 Premier rendez-vous gratuit - Prenez RDV au cabinet
    `,
    seoKeywords: ["création entreprise Paris", "SASU Paris", "expert-comptable création", "statut juridique", "immatriculation société"],
    icon: "Rocket",
    relatedServices: ["expertise-comptable-paris-8", "fiscalite-holding-paris"],
    relatedSecteurs: ["startups-tech", "professions-liberales"]
  },
  {
    slug: "comptabilite-lmnp-paris",
    title: "Comptabilité LMNP - Location Meublée",
    category: "Immobilier",
    description: "Expert-comptable spécialisé LMNP Paris. Régime réel, amortissements, déclaration 2031. Optimisation fiscale location meublée.",
    content: `
# Comptabilité LMNP - Expert Location Meublée Paris

## Optimisez la fiscalité de vos locations meublées

Le statut **LMNP (Loueur Meublé Non Professionnel)** offre des avantages fiscaux considérables. Hayot Expertise est spécialisé dans la comptabilité et l'optimisation des investissements LMNP à Paris.

### LMNP : Régime réel vs Micro-BIC

**Régime réel** (notre recommandation si CA > 15k€) :
- Déduction de tous les charges réelles
- **Amortissements** : Immobilier + mobilier
- Déficit reportable 10 ans
- Nécessite un expert-comptable

**Micro-BIC** :
- Abattement forfaitaire 50%
- Simplicité administrative
- Souvent moins avantageux

### Nos services LMNP

1. **Audit fiscal** : Analyse de votre situation actuelle
2. **Tenue comptable LMNP** : Saisie, plan d'amortissement
3. **Déclaration 2031** : Liasse fiscale professionnelle
4. **Optimisation** : Récupération TVA, charges déductibles
5. **Conseil patrimonial** : SCI IS, démembrement, holding

### Cas pratique : Économie fiscale

**Appartement acheté 300 000€, loué 1 500€/mois**
- Loyers annuels : 18 000€
- Charges + amortissements : 16 000€
- **Résultat fiscal : 2 000€** (vs 18 000€ en micro-BIC)
- **Économie d'impôt : ~5 000€/an**

### LMNP et SCI

Nous accompagnons également les montages SCI à l'IS pour la location meublée :
- Société IS : rémunération déductible
- Holding : optimisation dividendes
- Transmission : donation parts sociales

**Cabinet expert LMNP Paris 8ème**

Nous gérons plus de 150 dossiers LMNP. Notre expertise immobilière couvre : LMNP classique, résidences services (Ehpad, étudiants), Airbnb professionnel.

📞 Bilan LMNP gratuit - Contactez-nous
    `,
    seoKeywords: ["comptable LMNP Paris", "expert LMNP", "location meublée", "régime réel LMNP", "déclaration 2031"],
    icon: "Home",
    relatedServices: ["expertise-comptable-paris-8", "fiscalite-holding-paris"],
    relatedSecteurs: ["immobilier-sci-lmnp"]
  }
];
