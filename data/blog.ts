export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  seoKeywords: string[];
  relatedPosts: string[];
  relatedServices: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sasu-vs-eurl-2026",
    title: "SASU vs EURL : Quel statut choisir en 2026 ?",
    category: "Entrepreneuriat",
    excerpt: "Comparatif complet SASU et EURL en 2026 : fiscalité, charges sociales, protection sociale, flexibilité. Guide pour entrepreneurs.",
    author: "Samuel HAYOT",
    publishedDate: "2026-01-15",
    content: `
# SASU vs EURL : Quel statut choisir en 2026 ?

**Mis à jour en janvier 2026** - Vous créez votre entreprise et hésitez entre SASU et EURL ? Ce guide complet vous aide à choisir le statut juridique le plus adapté à votre situation.

## SASU et EURL : Les bases

### SASU - Société par Actions Simplifiée Unipersonnelle

- **Forme juridique** : SAS à associé unique
- **Dirigeant** : Président (assimilé salarié)
- **Régime social** : Urssaf (régime général)
- **Fiscalité** : IS (ou IR pendant 5 ans)

### EURL - Entreprise Unipersonnelle à Responsabilité Limitée

- **Forme juridique** : SARL à associé unique
- **Dirigeant** : Gérant (TNS - Travailleur Non Salarié)
- **Régime social** : SSI (ex-RSI)
- **Fiscalité** : IR (ou IS sur option)

## Comparatif détaillé 2026

### 1. Charges sociales

**SASU (Président assimilé salarié)**
- Taux global : ~80% du salaire net
- Assiette : Rémunération uniquement (pas de charges sur dividendes)
- Protection sociale : Identique aux salariés (sauf chômage)

**EURL (Gérant TNS)**
- Taux global : ~45% du bénéfice
- Assiette : Rémunération + dividendes > 10% du capital
- Protection sociale : Moins complète (retraite notamment)

**Exemple sur 50 000€ de bénéfice :**

| Stratégie | SASU | EURL |
|-----------|------|------|
| Tout en salaire | Salaire net : 27 778€<br/>Charges : 22 222€ | Rémunération nette : 32 500€<br/>Charges : 17 500€ |
| Salaire minimal + dividendes | Salaire : 10 000€<br/>Dividendes nets : 28 000€ | Rémunération : 10 000€<br/>Dividendes nets : 25 500€ |

### 2. Protection sociale

**SASU - Régime général**
- ✅ Retraite alignée sur les salariés
- ✅ Maladie : remboursement identique
- ✅ Prévoyance : maintien de salaire possible
- ❌ Pas de droit au chômage (sauf si cumul avec salariat)

**EURL - Régime SSI**
- ⚠️ Retraite moins avantageuse
- ✅ Maladie : remboursement identique
- ⚠️ Pas de prévoyance intégrée
- ❌ Pas de droit au chômage

### 3. Fiscalité

**SASU**
- **IS** : 15% jusqu'à 42 500€, puis 25%
- **IR (option 5 ans)** : Intéressant si déficit ou revenus faibles
- **Dividendes** : Flat tax 30% (ou IR + PS 17,2%)

**EURL**
- **IR** : Bénéfice intégré à l'IR personnel
- **IS (sur option)** : Comme la SASU
- **Dividendes** : Soumis à charges sociales sur la part > 10% du capital

### 4. Formalisme et flexibilité

**SASU**
- ✅ Liberté totale dans les statuts
- ✅ Possibilité actions, BSA, BSPCE
- ✅ Idéale pour levée de fonds
- ❌ Dépôt des comptes obligatoire

**EURL**
- ⚠️ Cadre plus rigide (SARL)
- ❌ Pas de BSPCE
- ⚠️ Cession parts sociales (agrément)
- ❌ Dépôt des comptes obligatoire

## Quel statut pour quel profil ?

### Choisissez la SASU si :

- 🎯 Vous visez une **levée de fonds** future
- 🎯 Vous privilégiez la **protection sociale**
- 🎯 Vous voulez sortir en **dividendes** sans charges sociales
- 🎯 Vous êtes **consultant** avec revenus > 80k€
- 🎯 Vous prévoyez d'intégrer des **associés** (passage en SAS)

### Choisissez l'EURL si :

- 🎯 Vous voulez **limiter les charges sociales**
- 🎯 Vous avez des **revenus modestes** (< 50k€)
- 🎯 Vous êtes **artisan, commerçant**
- 🎯 Vous préférez la **simplicité** (régime IR)
- 🎯 Vous ne sortirez **pas de dividendes**

## Optimisation : Et la Holding ?

Pour les entrepreneurs avisés, la **holding SASU** offre le meilleur des deux mondes :

```
Holding SASU (IS)
  └── Filiale opérationnelle (SASU ou EURL)
```

**Avantages :**
- Dividendes de la filiale → Holding : exonération 95% (régime mère-fille)
- Optimisation IS
- Protection patrimoniale

## Simulateur SASU vs EURL

Utilisez notre **simulateur en ligne** pour comparer les deux statuts selon votre chiffre d'affaires prévisionnel :

👉 [Accéder au simulateur](/ressources#simulateur)

## Nos recommandations 2026

**Profil consultant/freelance (CA > 80k€) :** SASU avec stratégie salaire minimum + dividendes

**Profil e-commerce/services (CA 30-80k€) :** EURL à l'IR si pas de dividendes, sinon SASU

**Profil startup tech :** SASU (préparation levée de fonds)

**Profil artisan/commerçant :** EURL (charges sociales réduites)

## Conclusion

Il n'existe pas de "meilleur statut" universel. Le choix SASU vs EURL dépend de :
- Votre niveau de revenus
- Votre stratégie de rémunération
- Vos projets futurs (associés, levée de fonds)
- Votre besoin de protection sociale

**Notre cabinet vous accompagne** dans cette décision stratégique avec une étude personnalisée gratuite.

📞 **Prenez RDV** pour une simulation SASU vs EURL adaptée à votre projet
    `,
    seoKeywords: ["SASU vs EURL", "différence SASU EURL", "choisir statut juridique", "création entreprise", "charges sociales SASU"],
    relatedPosts: ["holding-optimisation-fiscale-2026", "dividendes-vs-salaire-2026"],
    relatedServices: ["creation-entreprise-paris", "expertise-comptable-paris-8"]
  },
  {
    slug: "holding-optimisation-fiscale-2026",
    title: "Holding : Le guide complet de l'optimisation fiscale 2026",
    category: "Fiscalité",
    excerpt: "Tout savoir sur la holding en 2026 : création, régime mère-fille, intégration fiscale, holding immobilière. Guide expert-comptable.",
    author: "Samuel HAYOT",
    publishedDate: "2026-02-01",
    content: `
# Holding : Le guide complet de l'optimisation fiscale 2026

La **holding** est l'outil d'optimisation fiscale par excellence pour les entrepreneurs et investisseurs. Ce guide complet vous explique comment créer et utiliser une holding en 2026.

## Qu'est-ce qu'une holding ?

Une **holding** (ou société mère) est une société dont l'objet est de **détenir des participations** dans d'autres sociétés (filiales).

### Types de holdings

**Holding passive**
- Détention de participations uniquement
- Perception de dividendes
- Activité de gestion de portefeuille

**Holding animatrice**
- Détention + animation du groupe
- Prestations de services aux filiales
- Politique de groupe

## Pourquoi créer une holding ?

### 1. Régime Mère-Fille

**Le plus gros avantage fiscal de la holding**

Lorsque la holding détient au moins **5% du capital** d'une filiale depuis plus de 2 ans :

- **95% des dividendes remontés sont exonérés d'IS**
- Seule une quote-part de 5% est imposée à 25%
- Imposition réelle : **1,25%** (25% × 5%)

**Exemple :**
- Filiale : bénéfice 100 000€
- Dividendes versés à la holding : 100 000€
- Imposition holding : 100 000€ × 5% × 25% = **1 250€**
- **Économie vs personne physique** : ~45 000€ (flat tax 30% + IR)

### 2. Intégration Fiscale

Si la holding détient **95%+ du capital** de ses filiales :

- **Compensation des résultats** : bénéfice d'une filiale peut annuler le déficit d'une autre
- **Optimisation IS** : une seule déclaration consolidée
- **Report des déficits** du groupe

**Exemple :**
```
Holding (intégration fiscale)
  ├── Filiale A : +80 000€
  ├── Filiale B : -30 000€
  └── Filiale C : +50 000€

Résultat consolidé : +100 000€ (au lieu de 130k€)
Économie IS : 7 500€
```

### 3. Financement d'acquisitions

La holding permet de **racheter des entreprises avec effet de levier** :

1. Holding créée avec capital minimal (1€)
2. Emprunt bancaire pour acquérir la cible
3. Remontée de dividendes de la cible vers la holding
4. Remboursement de l'emprunt avec les dividendes

**Montage LBO simplifié**

### 4. Optimisation de la rémunération

Stratégie holding + filiale opérationnelle :

**Dirigeant entrepreneur :**
- Rémunération : 40 000€ (charges sociales)
- Dividendes filiale → holding : 60 000€ (exonération 95%)
- Dividendes holding → dirigeant : 57 000€ (flat tax 30%)
- **Disponible net : ~80 000€** (vs 55k€ en direct)

## Comment créer une holding ?

### Étapes de création

1. **Choix de la forme** : SASU ou SAS (recommandé)
2. **Rédaction des statuts** : Objet social holding
3. **Capital social** : Minimum 1€ (en pratique : 1 000 - 10 000€)
4. **Immatriculation** : RCS, Kbis
5. **Acquisition des titres** : Achat parts des filiales

### Holding : SASU ou SAS ?

**SASU** (associé unique)
- Simplicité de gestion
- Décisions unilatérales
- Idéal en solo

**SAS** (plusieurs associés)
- Associés multiples (conjoint, enfants)
- Pacte d'associés
- Transmission progressive

## Cas d'usage de la holding

### Holding immobilière

**Structure type :**
```
Holding SASU (IS)
  ├── SCI 1 : Immeuble Paris (LMNP)
  ├── SCI 2 : Appartement Lyon (Location nue)
  └── SCI 3 : Résidence services (LMNP)
```

**Avantages :**
- Optimisation dividendes SCI
- Financement acquisitions par la holding
- Transmission facilitée (donation parts holding)
- Protection patrimoniale

### Holding pour consultant

**Consultant avec plusieurs activités :**
```
Holding
  ├── SASU Consulting
  ├── SASU Formation
  └── SARL Édition logiciel
```

**Avantages :**
- Mutualisation trésorerie
- Compensation résultats
- Séparation risques

### Holding familiale

**Transmission patrimoniale :**

1. Parents créent une holding
2. Holding acquiert l'entreprise familiale
3. Donation progressive des parts de la holding aux enfants
4. **Avantage** : Valorisation holding < valorisation entreprise (dette d'acquisition)

## Fiscalité de la holding

### Imposition des bénéfices

**Holding à l'IS** (obligatoire si régime mère-fille)
- Taux IS : 15% jusqu'à 42 500€, puis 25%
- Quote-part dividendes : 5% imposable

**Holding à l'IR** (possible si holding passive < 5 ans)
- Transparence fiscale
- Rarement intéressant

### TVA

**Holding animatrice** : Assujettie à la TVA
- Facturation prestations aux filiales
- Récupération TVA sur charges

**Holding passive** : Pas de TVA
- Pas d'assujettissement
- Pas de récupération TVA

## Comptabilité de la holding

### Obligations comptables

- Tenue de comptabilité
- Comptes annuels (bilan, compte de résultat)
- Liasse fiscale 2065 (IS)
- Assemblée générale annuelle
- Dépôt des comptes au greffe

### Particularités holding

**Actif du bilan :**
- Titres de participation (valeur d'acquisition)
- Compte courant d'associé (apports)
- Créances sur filiales

**Passif :**
- Emprunts d'acquisition
- Dettes fournisseurs
- Capitaux propres

## Risques et pièges à éviter

❌ **Abus de droit** : Montage sans substance économique
❌ **Holding créée uniquement pour échapper à l'impôt**
❌ **Pas de convention de trésorerie** entre holding et filiales
❌ **Oubli du régime mère-fille** (conditions non respectées)

✅ **Bonne pratique** : Holding animatrice avec prestations réelles

## Combien coûte une holding ?

**Création :**
- Statuts : 500 - 1 500€ (avocat/expert-comptable)
- Annonce légale : 150€
- Immatriculation : 40€

**Gestion annuelle :**
- Expert-comptable : 1 500 - 3 000€/an
- CAC (si seuils dépassés) : 2 000 - 5 000€/an

**ROI :** Économie fiscale > coûts dès 50-100k€ de dividendes

## Conclusion

La holding est un **outil puissant mais complexe**. Elle nécessite un accompagnement expert pour :
- Structurer le montage
- Respecter les obligations légales
- Optimiser la fiscalité
- Éviter les pièges de l'abus de droit

**Notre cabinet est spécialisé dans la création et la gestion de holdings** (immobilières, opérationnelles, familiales).

📞 **Étude d'opportunité gratuite** : Prenez RDV pour savoir si la holding est adaptée à votre situation
    `,
    seoKeywords: ["holding", "régime mère-fille", "intégration fiscale", "holding immobilière", "optimisation fiscale"],
    relatedPosts: ["sasu-vs-eurl-2026", "dividendes-vs-salaire-2026"],
    relatedServices: ["fiscalite-holding-paris", "expertise-comptable-paris-8"]
  },
  {
    slug: "dividendes-vs-salaire-2026",
    title: "Dividendes vs Salaire : Optimisez votre rémunération 2026",
    category: "Fiscalité",
    excerpt: "Comment optimiser votre rémunération en société ? Comparatif dividendes vs salaire en 2026, calculs, fiscalité, charges sociales.",
    author: "Samuel HAYOT",
    publishedDate: "2026-02-10",
    content: `
# Dividendes vs Salaire : Optimisez votre rémunération 2026

En tant que dirigeant de société, vous avez le choix entre **rémunération (salaire)** et **dividendes**. Quel est le plus avantageux en 2026 ? Ce guide complet vous aide à optimiser votre stratégie.

## Les bases : Salaire vs Dividendes

### Rémunération (Salaire)

**Définition :** Rétribution du travail fourni en tant que dirigeant

**Caractéristiques :**
- Déductible du résultat de la société (économie IS)
- Soumise à charges sociales (45-80% selon statut)
- Imposée à l'IR (barème progressif)
- Ouvre des droits sociaux (retraite, maladie)

### Dividendes

**Définition :** Distribution du bénéfice après IS

**Caractéristiques :**
- Non déductible (prélevé sur le bénéfice après IS)
- Flat tax 30% (ou barème IR + 17,2% PS sur option)
- Pas de droits sociaux
- Disponible seulement si bénéfice

## Comparatif fiscal et social 2026

### SASU - Président assimilé salarié

**Rémunération :**
- Charges sociales : ~80% du net
- IR : Barème progressif
- Déduction IS : Oui

**Dividendes :**
- Charges sociales : 0%
- Flat tax : 30% (12,8% IR + 17,2% PS)
- Déduction IS : Non

**Exemple sur 100 000€ de résultat avant rémunération :**

| Stratégie | Charges société | Impôt dirigeant | Net disponible |
|-----------|-----------------|-----------------|----------------|
| **100% Salaire** | 44 444€ (charges) | 12 000€ (IR) | **43 556€** |
| **50% Salaire + 50% Dividendes** | 22 222€ (charges)<br/>6 250€ (IS) | 6 000€ (IR)<br/>10 500€ (Flat tax) | **55 028€** |
| **Salaire minimal + Dividendes** | 8 000€ (charges)<br/>15 000€ (IS) | 0€ (IR)<br/>16 050€ (Flat tax) | **60 950€** |

**Stratégie optimale SASU :** Salaire minimal (ou 0) + Dividendes

### EURL - Gérant TNS

**Rémunération :**
- Charges sociales : ~45% du net
- IR : Barème progressif
- Déduction IS : Oui (si option IS)

**Dividendes :**
- Charges sociales : Sur la part > 10% du capital
- Flat tax : 30%
- Déduction IS : Non

**Exemple sur 100 000€ (EURL à l'IS, capital 10 000€) :**

| Stratégie | Charges société | Impôt dirigeant | Net disponible |
|-----------|-----------------|-----------------|----------------|
| **100% Rémunération** | 31 034€ (charges) | 15 000€ (IR) | **53 966€** |
| **50% Rémunération + 50% Dividendes** | 15 517€ (charges)<br/>11 250€ (IS) | 7 500€ (IR)<br/>13 425€ (Flat tax + PS) | **51 308€** |

**Stratégie optimale EURL :** Tout en rémunération (ou rémunération + dividendes < 10% capital)

## Critères de choix

### 1. Statut social

**SASU :** Dividendes très avantageux (pas de charges sociales)
**EURL :** Dividendes moins avantageux (charges sur la part > 10% capital)

### 2. Besoin de protection sociale

**Si vous visez une retraite confortable :**
- Privilégiez la **rémunération** (cotisations retraite)
- Les dividendes n'ouvrent aucun droit

**Si vous avez déjà une bonne retraite :**
- Privilégiez les **dividendes** (optimisation fiscale)

### 3. Trésorerie de la société

**Dividendes :** Nécessitent un bénéfice distribuable
**Rémunération :** Peut être versée même en déficit (déconseillé)

### 4. Besoins personnels

**Revenus réguliers :** Privilégiez la rémunération (mensuelle)
**Revenus ponctuels :** Les dividendes (1 fois/an après AG)

## Optimisations avancées

### Holding + Filiale opérationnelle

**Structure :**
```
Holding SASU
  └── Filiale SASU (opérationnelle)
```

**Stratégie :**
1. Filiale : Salaire minimal au dirigeant
2. Filiale : Distribution dividendes → Holding (exonération 95%)
3. Holding : Distribution dividendes → Dirigeant (flat tax 30%)

**Avantage :** Mise en réserve dans la holding, sortie progressive en dividendes

### Compte courant d'associé

**Alternative aux dividendes :**
- Rémunération société → Compte courant dirigeant
- Pas de distribution immédiate
- Remboursement progressif (non imposable)

**Limite :** Nécessite un apport initial au compte courant

### Mix rémunération + dividendes

**Stratégie optimale 2026 pour SASU :**

| Tranche CA | Rémunération | Dividendes |
|------------|--------------|------------|
| < 50k€ | 20 000€ | Solde |
| 50-100k€ | 30 000€ | Solde |
| 100-200k€ | 40 000€ | Solde |
| > 200k€ | 50 000€ | Solde |

**Principe :** Rémunération suffisante pour :
- Valider 4 trimestres de retraite
- Couverture sociale décente
- Le reste en dividendes (optimisation fiscale)

## Cas pratiques

### Consultant SASU - 120k€ de CA

**Mauvaise stratégie :**
- Rémunération : 120 000€
- Charges sociales : 53 333€
- IR : 25 000€
- **Net : 41 667€**

**Bonne stratégie :**
- Rémunération : 40 000€ (charges 17 778€)
- IS sur 62 222€ : 12 556€
- Dividendes : 49 666€
- Flat tax : 14 900€
- **Net : 62 432€**
- **Gain : +20 765€/an**

### Investisseur EURL (immobilier) - 80k€ de revenus locatifs

**Stratégie :**
- Capital EURL : 100 000€
- Rémunération : 0€ (retraité)
- Dividendes < 10% capital : 10 000€ (pas de charges sociales)
- Dividendes > 10% capital : 70 000€ (charges sociales + flat tax)

**Optimisation :** Augmenter le capital à 700 000€ pour éviter les charges sociales

## Simulateur dividendes vs salaire

Notre **simulateur en ligne** calcule la stratégie optimale selon :
- Votre statut (SASU, EURL, SAS, SARL)
- Votre CA prévisionnel
- Votre situation personnelle (TMI, autres revenus)

👉 [Accéder au simulateur](/ressources#simulateur)

## Erreurs à éviter

❌ **100% dividendes en SASU** → Aucune cotisation retraite
❌ **Dividendes EURL sans tenir compte du capital** → Charges sociales élevées
❌ **Distribution dividendes sans réserves** → Impossible
❌ **Pas d'AG pour voter les dividendes** → Irrégularité

## Notre accompagnement

Nous optimisons votre stratégie de rémunération en tenant compte de :
- Votre statut juridique et social
- Vos objectifs (retraite, disponible, transmission)
- Votre situation fiscale personnelle
- Votre trésorerie société

**Étude personnalisée gratuite**

📞 Prenez RDV pour une simulation dividendes vs salaire adaptée à votre situation
    `,
    seoKeywords: ["dividendes vs salaire", "optimisation rémunération", "SASU dividendes", "flat tax", "charges sociales dividendes"],
    relatedPosts: ["sasu-vs-eurl-2026", "holding-optimisation-fiscale-2026"],
    relatedServices: ["expertise-comptable-paris-8", "fiscalite-holding-paris"]
  }
];

export const blogCategories = [
  "Entrepreneuriat",
  "Fiscalité",
  "Actualités",
  "Immobilier",
  "Juridique"
];
