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
    slug: "social-paie-paris",
    title: "Gestion Sociale & Paie - Expert RH Paris",
    category: "Social",
    description: "Cabinet expert en gestion sociale et paie à Paris. Bulletins de paie, déclarations sociales, DSN, optimisation charges patronales. 58 rue de Monceau, 75008.",
    content: `
# Gestion Sociale & Paie - Cabinet Hayot Expertise Paris 8

## Votre expert en gestion sociale à Paris

Hayot Expertise prend en charge l'intégralité de votre **gestion sociale** : bulletins de paie, déclarations sociales, DSN mensuelle, et conseil en droit du travail.

### Nos prestations sociales

#### Établissement des bulletins de paie
- Calcul des rémunérations et cotisations sociales
- Gestion des avantages en nature
- Traitement des heures supplémentaires et primes
- Soldes de tout compte et documents de fin de contrat

#### Déclarations sociales obligatoires
- **DSN (Déclaration Sociale Nominative)** : transmission mensuelle automatisée
- Déclaration DADS-U (remplacement)
- Déclarations de charges sociales URSSAF, retraite, prévoyance
- Gestion des arrêts maladie et accidents du travail

#### Optimisation des charges sociales
- Analyse des dispositifs d'exonération (Fillon, apprentissage, ZFU...)
- Optimisation de la rémunération du dirigeant
- Épargne salariale : intéressement, participation, PEE, PERCO
- Mise en place de mutuelles et prévoyance avantageuses

### Conseil en droit du travail

Notre cabinet vous accompagne sur :
- Rédaction de contrats de travail (CDI, CDD, alternance)
- Procédures disciplinaires et licenciement
- Négociation d'accords collectifs
- Mise en conformité RGPD et protection des données RH

### Outils digitaux RH

Nous travaillons avec les meilleurs logiciels de paie :
- **Silae / Payfit** : paie en ligne, accès portail employeur
- **Tableau de bord RH** : suivi temps, absences, congés
- **Coffre-fort numérique** : archivage sécurisé des bulletins

### Tarification transparente

| Taille | Nombre de bulletins | Tarif mensuel |
|--------|---------------------|---------------|
| TPE | 1 à 5 | 120-250€ HT |
| PME | 6 à 20 | 40-60€/bulletin |
| ETI | 20+ | Sur devis |

📞 Audit social gratuit - Contactez-nous au 01 48 85 61 01
    `,
    seoKeywords: ["gestion paie Paris", "cabinet paie Paris 8", "externalisation paie", "DSN Paris", "expert social Paris"],
    icon: "Users",
    relatedServices: ["expertise-comptable-paris-8", "creation-entreprise-paris"],
    relatedSecteurs: ["startups-tech", "restauration", "professions-liberales"]
  },
  {
    slug: "conseil-juridique-paris",
    title: "Conseil Juridique & Droit des Affaires Paris",
    category: "Juridique",
    description: "Accompagnement juridique des entreprises à Paris 8. Rédaction de statuts, pactes d'associés, baux commerciaux, contrats. Cabinet Hayot Expertise.",
    content: `
# Conseil Juridique & Droit des Affaires - Paris 8ème

## Votre partenaire juridique à Paris Monceau

Hayot Expertise vous apporte un **conseil juridique opérationnel** pour sécuriser vos actes et décisions d'entreprise.

### Droit des sociétés

#### Création et structuration
- Choix de la forme juridique optimale (SASU, EURL, SAS, SARL, SCI...)
- Rédaction des statuts sur-mesure
- Pactes d'associés : clauses de sortie, préemption, inaliénabilité
- Cessions de parts et actions (valorisation + acte)

#### Vie sociale de l'entreprise
- Assemblées générales (convocation, procès-verbal)
- Modifications statutaires (capital, siège, objet, gérance)
- Augmentations et réductions de capital
- Dissolution et liquidation amiable

### Droit commercial

- **Baux commerciaux** : négociation, rédaction, révision de loyer
- **Contrats commerciaux** : CGV, CGU, contrats prestataires
- **Propriété intellectuelle** : marques, licences, cession de droits
- **Lettres de mission** et contrats de prestation

### Restructurations & Transmission

1. **Audit préalable** : analyse des risques juridiques et fiscaux
2. **Structuration** : apport de titres, fusion, scission
3. **Transmission familiale** : donation-partage, pacte Dutreil
4. **Cession d'entreprise** : protocole, garantie d'actif et de passif

### Contentieux & Précontentieux

- Mise en demeure et recouvrement
- Médiation commerciale
- Rédaction de conclusions (en liaison avec votre avocat)
- Gestion des procédures collectives (sauvegarde, redressement)

**Cabinet juridique pluridisciplinaire à Paris 8**

Notre expertise couvre comptabilité, fiscalité ET juridique — un interlocuteur unique pour toutes vos problématiques d'entreprise.

📞 Consultation juridique - 58 rue de Monceau, 75008 Paris
    `,
    seoKeywords: ["conseil juridique Paris 8", "droit des affaires Paris", "statuts société Paris", "pacte associés", "bail commercial Paris"],
    icon: "Scale",
    relatedServices: ["creation-entreprise-paris", "fiscalite-holding-paris", "expertise-comptable-paris-8"],
    relatedSecteurs: ["startups-tech", "immobilier-sci-lmnp"]
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
  },
  {
    slug: "les-differents-types-de-management",
    title: "Les Différents Types de Management :",
    category: "Conseil",
    description: "Découvrez les différents types de management, leurs caractéristiques, avantages et inconvénients. Apprenez à adapter votre style de management pour optimiser la performance et la motivation de votre équipe.",
    content: `
# Les Différents Types de Management :

## Votre expert-comptable vous accompagne

Découvrez les différents types de management, leurs caractéristiques, avantages et inconvénients. Apprenez à adapter votre style de management pour optimiser la performance et la motivation de votre équipe.

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
    seoKeywords: ["Les Différents Types de Management", "Les Différents Types de Management expert-comptable Paris", "Découvrez les différents types de management, leurs caractéristiques, avantages et inconvénients. Ap"],
    icon: "Lightbulb",
    relatedServices: ["expertise-comptable-paris-8"],
    relatedSecteurs: []
  },
  {
    slug: "obligation-rse",
    title: "Obligation RSE",
    category: "Social",
    description: "La Responsabilité Sociale des Entreprises (RSE) désigne la prise en compte par les entreprises, de manière volontaire, des enjeux environnementaux, sociaux et économiques dans leurs activités et dans leurs interactions avec leurs parties prenantes. E",
    content: `
# Obligation RSE

## Votre expert-comptable vous accompagne

La Responsabilité Sociale des Entreprises (RSE) désigne la prise en compte par les entreprises, de manière volontaire, des enjeux environnementaux, sociaux et économiques dans leurs activités et dans leurs interactions avec leurs parties prenantes. En France, certaines obligations légales en matière

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
    seoKeywords: ["Obligation RSE", "Obligation RSE expert-comptable Paris", "La Responsabilité Sociale des Entreprises (RSE) désigne la prise en compte par les entreprises, de m"],
    icon: "Users",
    relatedServices: ["expertise-comptable-paris-8"],
    relatedSecteurs: []
  }
];
