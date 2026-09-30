export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  // ── NOUVEAUX ARTICLES JUIN 2026 ─────────────────────────────────────────────
  {
    slug: "destruction-archives-entreprise-somme-reglementation",
    title: "Destruction d'archives en entreprise : obligations légales et bonne pratique",
    excerpt: "Conservation, destruction, traçabilité : ce que dit la loi sur la gestion des archives papier d'entreprise et comment les détruire en toute conformité (RGPD, BSD).",
    date: "15 juin 2026",
    category: "Réglementation",
    metaDescription: "Obligations légales destruction archives entreprise : durées de conservation, RGPD, certificat de destruction. Vilbert Recyclage assure la destruction sécurisée dans la Somme.",
    content: `
# Destruction d'archives en entreprise : obligations légales et bonnes pratiques

La gestion des archives papier est une obligation légale souvent sous-estimée. Entre durées de conservation imposées par la loi, contraintes RGPD et risques liés aux données confidentielles, les entreprises doivent adopter une démarche structurée. Voici ce qu'il faut savoir.

## Pourquoi détruire ses archives ?

Conserver des archives indéfiniment n'est ni légal ni sans risque. Au-delà des durées légales de conservation, les entreprises ont l'**obligation de détruire** certains documents. Conserver des données personnelles au-delà du délai légal constitue une violation du RGPD, passible de sanctions par la CNIL.

Les risques d'une mauvaise gestion sont multiples :
- **Risque juridique** : violation du RGPD, amendes jusqu'à 4% du chiffre d'affaires mondial
- **Risque de fuite** : documents confidentiels mal détruits, jetés en benne ordinaire
- **Risque de réputation** : clients ou partenaires dont les données sont exposées

## Durées légales de conservation des archives

La loi impose des durées minimales de conservation selon le type de document :

| Type de document | Durée de conservation |
|------------------|-----------------------|
| Factures clients et fournisseurs | 10 ans |
| Bulletins de salaire | 5 ans |
| Contrats commerciaux | 5 ans après fin du contrat |
| Documents comptables | 10 ans |
| Dossiers RH (contrats de travail) | 5 ans après départ du salarié |
| Documents médicaux (médecine du travail) | 5 ans |
| Correspondances commerciales | 5 ans |

**Au-delà de ces délais**, vous devez détruire les documents contenant des données personnelles.

## Les exigences du RGPD pour la destruction

Le Règlement Général sur la Protection des Données (RGPD) impose que toute donnée personnelle soit **détruite de manière irréversible** une fois la finalité de son traitement atteinte. Cela implique :

- Une destruction **physique** des supports papier (pas un simple froissage ou déchirement)
- Un **registre de traitement** mentionnant les opérations de destruction
- La capacité de **prouver** la destruction en cas de contrôle CNIL

C'est pourquoi un simple passage en benne ordinaire ne suffit pas.

## Destruction sécurisée : ce que ça implique

Une destruction d'archives conforme doit répondre à plusieurs critères :

### 1. Destruction physique irréversible
Les documents doivent être **broyés ou déchiquetés** de manière à rendre toute reconstruction impossible. Le déchiquetage de niveau P-4 minimum est recommandé pour les données confidentielles (DIN 66399).

### 2. Traçabilité de la destruction
Deux documents doivent être émis :
- Un **Bordereau de Suivi des Déchets (BSD)** via la plateforme Trackdéchets (obligatoire pour tout déchet non dangereux pris en charge par un prestataire)
- Un **certificat de destruction** attestant que vos documents ont bien été détruits à telle date, par tel prestataire

### 3. Valorisation des résidus
Une fois détruits, les résidus papier doivent être orientés vers la **filière de recyclage papier-carton**. C'est une obligation réglementaire et un engagement environnemental.

## Comment Vilbert Recyclage prend en charge vos archives

Depuis notre site de Beauval (Somme, 80630), nous assurons la destruction sécurisée des archives papier pour les entreprises de la Somme et des Hauts-de-France.

### Notre processus
1. **Demande préalable** obligatoire (protocole MASE) — appelez le 03 22 93 02 86
2. **Apport sur site** ou enlèvement selon volume
3. **Destruction physique** sur notre plateforme sécurisée
4. **Emission du BSD** via Trackdéchets
5. **Remise du certificat de destruction**
6. **Valorisation** en filière papier-carton

### Qui est concerné ?
- Entreprises, PME, artisans
- Collectivités et administrations
- Cabinets médicaux et paramédicaux (dossiers patients)
- Cabinets d'avocats, notaires, experts-comptables
- Ressources humaines (dossiers salariés)

## Foire aux questions

**Q : Peut-on détruire soi-même ses archives ?**
R : Techniquement oui, mais sans certificat de destruction ni BSD, vous ne pouvez pas prouver que la destruction a eu lieu. En cas de contrôle CNIL, l'absence de traçabilité peut être sanctionnée.

**Q : La destruction d'archives est-elle payante ?**
R : Oui, c'est une prestation. Contactez-nous pour un devis selon le volume.

**Q : Peut-on apporter des disques durs ou supports numériques ?**
R : Non, nous traitons uniquement les archives papier. Pour les supports numériques, orientez-vous vers des prestataires spécialisés en destruction informatique (ITAD).

**Q : Combien de temps faut-il prévoir ?**
R : La destruction elle-même prend quelques heures. Le certificat et le BSD vous sont remis dans les 48h suivant l'opération.

---

📞 **03 22 93 02 86** — Demande préalable obligatoire (protocole MASE)
✉️ **recyclage@groupe-vilbert.fr**
📍 Route nationale, 80630 Beauval — Lun-Ven 8h-16h30
    `,
  },
  {
    slug: "chantier-renovation-energetique-dechets-isolants-fenetres-somme",
    title: "Rénovation énergétique : comment gérer les déchets d'isolants et de fenêtres ?",
    excerpt: "MaPrimeRénov', CEE, renovation globale : les chantiers de rénovation énergétique génèrent des déchets spécifiques (isolants, fenêtres, plâtre). Voici comment les traiter correctement dans la Somme.",
    date: "11 juin 2026",
    category: "Rénovation",
    metaDescription: "Gestion déchets rénovation énergétique Somme : isolants, fenêtres PVC et aluminium, plâtre. Filière Valobat PMCB gratuite pour pros. Vilbert Recyclage Beauval (80).",
    content: `
# Rénovation énergétique : comment gérer les déchets d'isolants et de fenêtres ?

Avec l'essor de MaPrimeRénov' et des Certificats d'Économie d'Énergie (CEE), les chantiers de rénovation énergétique se multiplient dans la Somme. Isolation des murs, remplacement des fenêtres, changement des systèmes de chauffage : ces travaux génèrent des volumes importants de déchets spécifiques. Voici comment les gérer dans le respect de la réglementation.

## Quels déchets génère un chantier de rénovation énergétique ?

Un chantier de rénovation typique peut produire :

- **Menuiseries en fin de vie** : anciennes fenêtres PVC, aluminium ou bois, portes, volets
- **Isolants** : laine de verre, laine de roche, polystyrène expansé, polyuréthane
- **Plaques de plâtre** : cloisons, doublages en BA13
- **Matériaux de couverture** : tuiles, ardoises, charpente (si réfection toiture)
- **Résidus divers** : emballages, visserie, câbles électriques

Chaque flux doit être orienté vers une filière adaptée. Les mélanger dans une benne ordinaire n'est plus acceptable ni légal.

## La REP PMCB : vos déchets de rénovation peuvent être gratuits

Depuis le 1er mai 2023, la **Responsabilité Élargie du Producteur pour les Produits et Matériaux de Construction du Bâtiment (REP PMCB)** est pleinement opérationnelle. Concrètement, cela signifie que les fabricants de matériaux de construction financent la collecte et le traitement des déchets issus de leurs produits.

### Ce que ça change pour vous
En tant qu'artisan ou entreprise du bâtiment, vous pouvez déposer certains déchets **gratuitement** chez les opérateurs agréés par les éco-organismes (Valobat, Ecominero, Ecomaison…).

**Vilbert Recyclage est opérateur agréé Valobat.** Cela vous permet de déposer gratuitement :
- Menuiseries extérieures (fenêtres, portes, volets) en PVC, aluminium ou bois
- Isolants thermiques et acoustiques
- Plaques de plâtre et enduits
- Menuiseries intérieures
- Revêtements de sol (parquets, stratifiés)

### Conditions d'éligibilité
- Être un **professionnel détenteur** des déchets dans le cadre de son activité
- Effectuer une **demande d'acceptation préalable** (obligatoire, certification MASE)
- Les déchets doivent correspondre aux catégories PMCB éligibles

## Traitement spécifique des menuiseries

Les fenêtres et portes en fin de vie méritent une attention particulière. Contrairement aux idées reçues, les vieilles fenêtres PVC ou aluminium ne sont pas de simples déchets : elles contiennent des matières valorisables.

### Notre centre de démantèlement
Vilbert Recyclage dispose d'un **centre de démantèlement spécialisé** qui décompose les menuiseries en flux purs :
- **Profilés PVC** → recyclés en nouveaux profilés ou granulés
- **Aluminium** → réintégré dans la filière aluminium secondaire
- **Vitrage** → orienté vers le recyclage du verre
- **Ferrures et acier** → recyclage métaux ferreux

Notre taux de recyclage atteint **plus de 92%** de la masse des menuiseries traitées — bien au-dessus de la moyenne du secteur.

## Isolants : une filière en développement

Les isolants thermiques sont l'un des défis de la REP PMCB. Voici ce que vous devez savoir :

### Laines minérales (laine de verre, laine de roche)
Ces isolants peuvent être déposés chez les opérateurs Valobat agréés. Ils sont ensuite recyclés ou valorisés énergétiquement selon les filières disponibles.

### Polystyrène expansé (PSE)
Le polystyrène peut être recyclé s'il est exempt de contaminants. Il est important de ne pas le mélanger avec d'autres déchets.

### Polyuréthane (PUR)
Plus complexe à recycler, le polyuréthane est généralement valorisé énergétiquement. Des filières de recyclage chimique se développent.

## Plaques de plâtre : une filière bien structurée

Les plaques de plâtre (BA13) représentent souvent un volume important sur les chantiers de rénovation énergétique (doublages isolants, cloisons). Bonne nouvelle : c'est une filière mature.

- Les chutes de BA13 propres peuvent être recyclées en **gypse** pour de nouvelles plaques
- Les plaques posées et déposées lors de travaux sont acceptées sous conditions
- **Important** : le plâtre ne doit pas être mélangé avec des inertes (béton, gravats)

## Comment organiser la gestion de vos déchets de rénovation ?

### Avant le chantier
1. Identifiez les flux de déchets que vous allez générer
2. Vérifiez votre éligibilité Valobat pour les PMCB (appelez-nous)
3. Planifiez les bennes ou les rotations nécessaires

### Pendant le chantier
- **Triez à la source** : une benne par flux (inertes, bois, PMCB, DIB)
- Conservez les emballages des matériaux neufs séparément
- Ne mélangez jamais le plâtre avec d'autres matériaux

### Après le chantier
- Remettez les BSD à vos clients si requis
- Conservez vos preuves de dépôt pour les dossiers MaPrimeRénov' ou CEE

## L'enjeu environnemental dans la Somme

La Somme est l'un des départements les plus actifs en matière de rénovation énergétique, portée par le programme "Hauts-de-France Rénove". Les artisans RGE (Reconnus Garants de l'Environnement) ont une responsabilité particulière dans la bonne gestion des déchets, qui fait partie des critères de qualité attendus.

En choisissant Vilbert Recyclage pour vos déchets de rénovation, vous bénéficiez :
- D'une solution conforme à la réglementation REP PMCB
- D'un partenaire certifié MASE (sécurité)
- De BSD et bons de pesée pour votre traçabilité
- De tarifs compétitifs hors filière Valobat

---

📞 **03 22 93 02 86** — Vérifiez votre éligibilité Valobat
✉️ **recyclage@groupe-vilbert.fr**
📍 Route nationale, 80630 Beauval (Somme) — Lun-Ven 8h-16h30

*Prestation soumise à demande d'acceptation préalable obligatoire.*
    `,
  },
  // ── ARTICLES EXISTANTS ──────────────────────────────────────────────────────
  {
    slug: "comment-louer-une-benne-pour-son-chantier",
    title: "Comment louer une benne pour son chantier ? Guide complet",
    excerpt: "Tout ce qu'il faut savoir pour louer une benne adaptée à votre chantier : choix de la taille, démarches, réglementation et conseils pratiques.",
    date: "5 juin 2025",
    category: "Conseils pratiques",
    metaDescription: "Guide complet pour louer une benne de chantier en Hauts-de-France. Taille, prix, réglementation et démarches expliqués simplement.",
    content: `
# Comment louer une benne pour son chantier ? Guide complet

Que vous soyez particulier en pleine rénovation ou professionnel du BTP, la location d'une benne est souvent la solution la plus pratique et la plus économique pour gérer vos déchets de chantier. Voici un guide complet pour tout comprendre.

## Pourquoi louer une benne ?

La location d'une benne offre de nombreux avantages :

- **Gain de temps** : Pas besoin de multiplier les allers-retours à la déchetterie.
- **Économies** : Un seul enlèvement pour tous vos déchets.
- **Conformité légale** : Les entreprises ont l'obligation de faire traiter leurs déchets de chantier par des prestataires agréés.
- **Simplicité** : Vilbert Recyclage s'occupe de tout, de la livraison de la benne jusqu'au traitement des déchets.

## Quelle taille de benne choisir ?

Le choix de la taille de la benne dépend du volume de déchets que vous estimez produire :

- **Petite benne (5 à 8 m³)** : Idéale pour une rénovation légère, un nettoyage de jardin ou de grenier. Convient aux particuliers.
- **Benne moyenne (10 à 15 m³)** : Pour des travaux de second œuvre, une démolition partielle ou un chantier d'artisan.
- **Grande benne (20 à 30 m³)** : Pour les chantiers de construction neuve, les gros travaux de démolition ou les chantiers professionnels importants.

**Astuce** : En cas de doute, mieux vaut prendre une benne légèrement plus grande pour éviter d'avoir à en commander une seconde.

## Quels déchets peut-on mettre dans une benne ?

Chez Vilbert Recyclage, nous acceptons les déchets BTP suivants :

- Terres et gravats
- Plâtres
- Béton, briques, tuiles
- Bois et menuiseries
- Plastiques et PVC
- Métaux et ferrailles
- DIB (Déchets Industriels Banals) de chantier

**Important** : Il est interdit de mélanger des déchets dangereux (amiante, peintures solvantées, huiles usagées) avec des déchets inertes. Contactez-nous pour connaître les filières adaptées.

## Comment se déroule la location ?

1. **Contactez-nous** par téléphone au 03 22 93 02 86 ou via notre formulaire de contact.
2. **Définissez vos besoins** : type et volume estimé de déchets, adresse de livraison, durée souhaitée.
3. **Nous livrons la benne** à l'emplacement prévu, selon les disponibilités.
4. **Vous remplissez la benne** à votre rythme.
5. **Nous venons l'enlever** sur appel ou à la date convenue.
6. **Vos déchets sont traités** dans notre centre de Beauval.

## La réglementation à connaître

Les professionnels ont une **obligation légale de traçabilité** pour leurs déchets de chantier. Le prestataire doit fournir un Bordereau de Suivi des Déchets (BSD). Chez Vilbert Recyclage, ce document est automatiquement établi.

Pour placer une benne sur la voie publique, un **permis de voirie** doit être demandé auprès de votre mairie.

## Faire appel à Vilbert Recyclage

Notre équipe est disponible du lundi au vendredi, de 8h à 12h et de 13h à 16h30 pour répondre à vos questions et établir un devis personnalisé. Nous intervenons dans toute la région Hauts-de-France.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "tri-dechets-btp-obligations-reglementation",
    title: "Tri des déchets BTP : obligations légales et réglementation 2025",
    excerpt: "Depuis 2022, le tri des déchets de chantier est obligatoire en France. Découvrez ce que dit la loi et comment Vilbert Recyclage vous aide à être en conformité.",
    date: "12 mai 2025",
    category: "Réglementation",
    metaDescription: "Réglementation sur le tri des déchets BTP en 2025 : obligations légales, 7 flux, BSD et sanctions. Tout savoir pour être conforme.",
    content: `
# Tri des déchets BTP : obligations légales et réglementation 2025

Depuis le 1er janvier 2022, le tri à la source des déchets de chantier est devenu obligatoire pour toutes les entreprises du BTP en France. Cette obligation, issue de la loi AGEC (Anti-Gaspillage pour une Économie Circulaire), concerne l'ensemble des acteurs du secteur.

## La règle des 7 flux obligatoires

La réglementation impose de séparer les déchets selon 7 catégories distinctes :

1. **Fraction minérale** : béton, briques, céramique, tuiles, gravats
2. **Métal**
3. **Bois**
4. **Verre**
5. **Plastique**
6. **Plâtre**
7. **Papier / Carton**

Ces 7 flux doivent être collectés séparément sur les chantiers.

## Qui est concerné ?

Cette obligation s'applique à :

- Les entreprises du bâtiment et des travaux publics
- Les maîtres d'ouvrage publics et privés
- Les artisans réalisant des travaux de construction, rénovation ou démolition

Les **particuliers** ne sont pas soumis à cette obligation légale, mais sont fortement encouragés à trier leurs déchets.

## Le Bordereau de Suivi des Déchets (BSD)

Pour les déchets dangereux et certains déchets non dangereux, un BSD doit accompagner chaque transport. Ce document atteste que les déchets ont été pris en charge par un prestataire agréé et permet la traçabilité de bout en bout.

Chez Vilbert Recyclage, nous émettons automatiquement les BSD nécessaires et sommes inscrits sur la plateforme nationale **Trackdéchets**.

## Les sanctions en cas de non-conformité

Le non-respect de l'obligation de tri peut entraîner des sanctions importantes :

- Amendes administratives
- Impossibilité d'obtenir de nouveaux marchés publics
- Mise en cause de la responsabilité civile et pénale du maître d'ouvrage

## Comment Vilbert Recyclage vous aide ?

Notre déchetterie professionnelle de Beauval dispose de bennes spécifiques pour chaque type de déchets. Nous mettons à votre disposition :

- Des bennes dédiées par flux (inertes, bois, métaux, plastiques, plâtres)
- Un suivi documentaire complet (BSD, certificats de traitement, bons de pesée)
- Des conseils personnalisés pour organiser le tri sur vos chantiers

Contactez-nous au **03 22 93 02 86** pour un audit gratuit de vos besoins en gestion de déchets.
    `,
  },
  {
    slug: "valorisation-dechets-btp-economie-circulaire",
    title: "Valorisation des déchets BTP : comment contribuer à l'économie circulaire",
    excerpt: "Gravats recyclés, bois réutilisé, métaux refondus... Découvrez comment vos déchets de chantier peuvent avoir une seconde vie et réduire l'impact environnemental du BTP.",
    date: "28 avril 2025",
    category: "Environnement",
    metaDescription: "Valorisation des déchets BTP : granulats recyclés, bois, métaux. Comment l'économie circulaire transforme vos gravats en ressources. Vilbert Recyclage Beauval.",
    content: `
# Valorisation des déchets BTP : comment contribuer à l'économie circulaire

Le secteur du BTP est l'un des plus gros producteurs de déchets en France, avec environ 46 millions de tonnes par an. Mais ces déchets ne sont pas forcément des « ordures » : correctement triés et traités, la plupart peuvent être valorisés et réintroduits dans le cycle de production.

## Qu'est-ce que la valorisation des déchets ?

La valorisation consiste à donner une seconde vie aux déchets, soit en les réutilisant directement, soit en les transformant pour en faire de nouvelles matières premières.

### Valorisation matière (recyclage)

- **Gravats, béton, briques** : broyés et criblés, ils deviennent des granulats recyclés utilisés en remblai, sous-couche routière ou même en béton.
- **Métaux** : acier, aluminium, cuivre sont refondus et réutilisés dans l'industrie.
- **Bois** : selon la qualité, le bois peut être réemployé directement ou transformé en panneaux de particules, paillage, ou combustible biomasse.
- **Plastiques** : les plastiques propres et triés peuvent être régranulés et réintroduits dans la fabrication de nouveaux produits.
- **Plâtre** : le plâtre peut être retraité pour produire du plâtre neuf, réduisant l'extraction de gypse vierge.

## Les bénéfices concrets pour les entreprises

- **Réduction des coûts** : moins de matières premières à acheter si les matériaux recyclés sont réintégrés dans le processus.
- **Avantage concurrentiel** : de plus en plus de donneurs d'ordres intègrent des critères environnementaux dans leurs appels d'offres.
- **Conformité légale** : anticiper les réglementations de plus en plus strictes.
- **Image de marque** : afficher un bilan carbone amélioré auprès de vos clients.

## Notre engagement chez Vilbert Recyclage

Sur notre site de Beauval, nous disposons d'équipements de traitement performants et nos bâtiments sont équipés de **panneaux solaires** pour alimenter nos machines. L'objectif est d'atteindre le taux de valorisation le plus élevé possible.

📞 **03 22 93 02 86** — Contactez-nous pour en savoir plus sur nos filières de valorisation.
    `,
  },
  {
    slug: "benne-chantier-particulier-guide",
    title: "Particuliers : louer une benne pour vos travaux, ce qu'il faut savoir",
    excerpt: "Vous rénovez votre maison et vous ne savez pas comment vous débarrasser de vos gravats ? La benne de chantier est la solution. Mode d'emploi pour les particuliers.",
    date: "15 avril 2025",
    category: "Conseils pratiques",
    metaDescription: "Location benne particulier pour travaux de rénovation : guide pratique, tarifs, démarches et conseils. Vilbert Recyclage Beauval Somme.",
    content: `
# Particuliers : louer une benne pour vos travaux, ce qu'il faut savoir

Vous venez de terminer la démolition d'une cloison, de refaire votre salle de bain ou de rénover votre toiture. Résultat : des tonnes de gravats, de vieux carrelage, de bois et de plâtre qui s'accumulent dans votre jardin. La benne de chantier est faite pour vous.

## Qui peut louer une benne ?

La location de benne n'est pas réservée aux professionnels ! Chez Vilbert Recyclage, nous servons aussi bien les particuliers que les artisans et les grandes entreprises.

## Pour quels types de travaux ?

- Rénovation de cuisine ou de salle de bain
- Démolition de cloisons, carrelage, revêtements
- Réfection de toiture
- Nettoyage de cave, grenier, dépendances
- Aménagement de jardin ou terrassement
- Travaux de maçonnerie

## Comment commander votre benne ?

1. **Appelez-nous** au 03 22 93 02 86 ou envoyez un email à recyclage@groupe-vilbert.fr
2. **Indiquez** votre adresse, la nature des déchets et le volume estimé
3. **Convenez d'une date** de livraison selon vos disponibilités
4. **Nous livrons** la benne à l'emplacement de votre choix
5. **Appelez-nous** quand elle est pleine pour l'enlèvement

## Que peut-on mettre dans la benne ?

✅ Gravats, béton, carrelage
✅ Plâtre
✅ Bois, menuiseries
✅ Plastiques
✅ Petits métaux

❌ Déchets dangereux (amiante, solvants, peintures)
❌ Déchets ménagers courants
❌ Pneus

📍 Déchetterie Pro de Beauval — Route nationale, 80630 Beauval
📞 03 22 93 02 86
✉️ recyclage@groupe-vilbert.fr
    `,
  },
  {
    slug: "gestion-dechets-artisans-btp",
    title: "Artisans BTP : gérez vos déchets de chantier simplement et conformément à la loi",
    excerpt: "En tant qu'artisan, vous êtes responsable des déchets que vous produisez sur vos chantiers. Voici comment Vilbert Recyclage vous simplifie la vie tout en vous assurant une conformité légale totale.",
    date: "2 avril 2025",
    category: "Professionnels",
    metaDescription: "Gestion déchets artisans BTP : obligations légales, solutions pratiques et économiques. Vilbert Recyclage accompagne les artisans en Hauts-de-France.",
    content: `
# Artisans BTP : gérez vos déchets de chantier simplement et conformément à la loi

En tant qu'artisan du bâtiment, vous êtes producteur de déchets au sens de la loi. Cela signifie que vous avez des obligations légales concernant la gestion, le transport et le traitement des déchets issus de vos chantiers.

## Vos obligations légales

- Ne pas abandonner les déchets sur le chantier ou dans la nature
- Confier vos déchets à un prestataire agréé pour le transport et le traitement
- Conserver les documents de traçabilité (BSD, attestations) pendant au moins 3 ans

## Nos solutions pour les artisans

### Option 1 : La benne sur chantier
Nous vous livrons une benne directement sur votre chantier. Vous la remplissez au fil de l'avancement des travaux. Nous venons la chercher à votre appel.

### Option 2 : L'apport en déchetterie pro
Vous venez déposer vos déchets directement sur notre site de Beauval. Solution idéale pour les petits volumes ou les chantiers proches.

### Option 3 : Le contrat annuel
Pour les artisans ayant un volume régulier de déchets, nous proposons des contrats sur mesure avec des tarifs dégressifs.

## Les documents que nous fournissons

- **Bordereau de Suivi des Déchets (BSD)**
- **Attestation de prise en charge**
- **Bon de pesée** à chaque passage
- **Certificat de valorisation**

Contactez-nous au **03 22 93 02 86** pour établir votre devis personnalisé.
    `,
  },
  {
    slug: "dechets-platre-recyclage-filiere",
    title: "Le recyclage du plâtre : une filière en plein essor en Hauts-de-France",
    excerpt: "Le plâtre est l'un des matériaux les plus recyclables du bâtiment. Découvrez comment la filière plâtre fonctionne et pourquoi il est crucial de le séparer des autres déchets.",
    date: "18 mars 2025",
    category: "Environnement",
    metaDescription: "Recyclage du plâtre BTP en Hauts-de-France : filière, pourquoi séparer le plâtre, et comment Vilbert Recyclage le valorise à Beauval.",
    content: `
# Le recyclage du plâtre : une filière en plein essor en Hauts-de-France

Souvent oublié, le plâtre est pourtant l'un des matériaux de construction les plus recyclables. Un déchet de plâtre peut être transformé en nouveau plâtre à l'infini, sans perte de qualité.

## Pourquoi le plâtre doit être trié séparément ?

Le plâtre (sulfate de calcium dihydraté) est une matière particulière : en contact avec l'eau et d'autres matériaux, il peut produire du sulfure d'hydrogène (H₂S), un gaz nauséabond et potentiellement dangereux. La réglementation impose donc une collecte séparée du plâtre, qui fait partie des 7 flux obligatoires du tri BTP.

## Le cycle de vie du plâtre recyclé

1. **Collecte** : les déchets de plâtre sont séparés sur le chantier ou à la déchetterie.
2. **Broyage** : le plâtre est broyé pour éliminer les impuretés (papier des plaques, vis…)
3. **Cuisson** : le plâtre broyé est recuit pour obtenir du gypse anhydre.
4. **Production** : ce gypse recyclé est réintroduit dans la fabrication de nouvelles plaques de plâtre.

## Ce que nous acceptons à Beauval

- Chutes de plaques de plâtre (BA13, double plaque…)
- Enduits à base de plâtre
- Plâtres de carreau
- Staff et moulures

Condition importante : le plâtre doit être **séparé des autres déchets** et exempt d'amiante.

📞 **03 22 93 02 86** — Déchetterie Pro de Beauval (80630)
    `,
  },
  {
    slug: "cout-location-benne-chantier-prix",
    title: "Combien coûte la location d'une benne ? Tarifs et facteurs de prix",
    excerpt: "Le prix d'une location de benne varie selon la taille, le type de déchets et la distance. Voici tout ce qu'il faut savoir pour budgéter votre chantier.",
    date: "10 juin 2025",
    category: "Conseils pratiques",
    metaDescription: "Prix location benne chantier en Hauts-de-France : tarifs selon taille (5m³, 10m³, 20m³), type de déchets et distance. Guide complet Vilbert Recyclage.",
    content: `
# Combien coûte la location d'une benne ? Tarifs et facteurs de prix

## Les facteurs qui déterminent le prix

### 1. La taille de la benne

- **Petite benne (5 à 8 m³)** : adaptée aux petits chantiers de rénovation.
- **Benne moyenne (10 à 15 m³)** : pour les chantiers d'artisans, démolitions partielles.
- **Grande benne (20 à 30 m³)** : pour les chantiers professionnels importants.

### 2. Le type de déchets

Le coût de traitement varie selon la nature des déchets :
- **Déchets inertes** (gravats, terres, béton) : filières de valorisation bien rodées.
- **Plâtre** : doit être séparé des autres déchets, filière spécifique.
- **DIB (Déchets Industriels Banals)** : traitement plus complexe, coût plus élevé.

### 3. La distance de livraison

Plus le chantier est éloigné de notre déchetterie de Beauval (80), plus les frais de transport augmentent.

## Comment optimiser votre budget déchets ?

1. **Triez vos déchets** : un tri efficace permet d'orienter chaque flux vers la filière la moins coûteuse.
2. **Estimez bien le volume** : ne commandez pas deux bennes là où une grande aurait suffi.
3. **Optez pour un contrat annuel** : les professionnels ayant des besoins réguliers bénéficient de tarifs dégressifs.

## Demandez votre devis gratuit

📞 **03 22 93 02 86** — Lun-Ven 8h-12h / 13h-16h30
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "dechets-amiante-btp-reglementation",
    title: "Déchets contenant de l'amiante : réglementation et solutions pour le BTP",
    excerpt: "L'amiante est encore présente dans de nombreux bâtiments construits avant 1997. Voici ce que dit la loi et comment gérer ces déchets dangereux en toute sécurité.",
    date: "25 mai 2025",
    category: "Réglementation",
    metaDescription: "Gestion des déchets amiante BTP : réglementation 2025, obligations, filières de traitement. Guide pour artisans et entreprises en Hauts-de-France.",
    content: `
# Déchets contenant de l'amiante : réglementation et solutions pour le BTP

L'amiante a été massivement utilisée dans la construction jusqu'à son interdiction en France en 1997. La gestion des déchets amiantés est strictement réglementée.

## Où trouve-t-on de l'amiante dans les bâtiments ?

- Plaques de fibrociment (toitures, bardages)
- Dalles de sol en vinyle
- Colles à carrelage
- Calorifugeage de tuyauteries
- Joints de chaudières

## Les obligations légales

### Diagnostic amiante
Avant tous travaux sur un bâtiment construit avant le 1er juillet 1997, un **diagnostic amiante** réalisé par un professionnel certifié est obligatoire.

### Transport et traitement
Le transport de déchets amiantés exige :
- Un véhicule et un emballage adaptés (big-bags étanches, étiquetage)
- Un BSD (Bordereau de Suivi des Déchets) spécifique
- L'orientation vers une installation de stockage agréée pour déchets dangereux (ISDD)

## Ce que Vilbert Recyclage peut faire

Vilbert Recyclage oriente ses clients vers des filières partenaires agréées pour le traitement des déchets amiantés. Pour les déchets courants (gravats sans amiante, bois, plâtre sain), nous restons votre prestataire de référence.

📞 **03 22 93 02 86** — Renseignez-vous auprès de notre équipe.
    `,
  },
  {
    slug: "granulats-recycles-vs-materiaux-naturels",
    title: "Granulats recyclés vs matériaux naturels : tout ce qu'il faut savoir",
    excerpt: "Les gravats de vos chantiers peuvent devenir des granulats recyclés. Quelles différences avec le sable et le gravier naturel ? Sont-ils utilisables en construction ?",
    date: "8 mars 2025",
    category: "Environnement",
    metaDescription: "Granulats recyclés BTP : caractéristiques, usages, comparaison avec sable et gravier naturel. Avantages environnementaux et économiques. Vilbert Recyclage.",
    content: `
# Granulats recyclés vs matériaux naturels : tout ce qu'il faut savoir

## Qu'est-ce qu'un granulat recyclé ?

Un granulat recyclé BTP est obtenu par le concassage et le criblage de déchets minéraux de chantier : béton démoli, briques, tuiles, pierres naturelles.

## Comparaison avec les matériaux naturels

### Points forts des granulats recyclés

- **Prix inférieur** : généralement moins chers que les granulats naturels d'extraction.
- **Bilan carbone favorable** : pas de carrière à exploiter, pas de transport longue distance.
- **Disponibilité locale** : produits en région à Beauval (Somme), sans dépendance aux approvisionnements lointains.

### Limites à connaître

- **Résistance moindre** : les granulats recyclés ont une résistance mécanique généralement inférieure aux granulats naturels.
- **Variabilité** : la composition peut varier selon la source des déchets.

## Où utiliser les granulats recyclés ?

✅ Remblai et comblement de tranchées
✅ Sous-couche routière et voiries légères
✅ Drainage et couches de fondation
✅ Béton non structurel (dallages, bordures)
✅ Aménagements paysagers

❌ Béton armé structurel (poutres, dalles portantes)

## Achetez nos granulats recyclés

Notre déchetterie de Beauval produit des granulats recyclés (concassé béton, GNT recyclée, sables) disponibles à la vente.

📞 **03 22 93 02 86** — Renseignez-vous sur nos stocks disponibles.
    `,
  },
  {
    slug: "preparer-chantier-demolition-guide",
    title: "Comment préparer un chantier de démolition ? Guide pratique",
    excerpt: "Démolir une construction nécessite une organisation rigoureuse, notamment pour la gestion des déchets. Voici les étapes clés pour préparer votre chantier de démolition.",
    date: "20 février 2025",
    category: "Conseils pratiques",
    metaDescription: "Guide préparation chantier démolition : diagnostics, autorisations, gestion déchets BTP, sécurité. Conseils Vilbert Recyclage pour artisans et particuliers.",
    content: `
# Comment préparer un chantier de démolition ? Guide pratique

## 1. Les diagnostics obligatoires avant démolition

- **Diagnostic amiante** : obligatoire avant tous travaux sur bâtiment antérieur à 1997.
- **Diagnostic plomb** (CREP) : obligatoire pour les logements antérieurs à 1949.
- **Diagnostic termites** : dans les zones à risque définies par arrêté préfectoral.

## 2. La planification des déchets

### Estimez les volumes
- **Béton et maçonnerie** : comptez environ 1,5 à 2 tonnes/m³
- **Charpente et bois** : 0,5 à 0,8 tonnes/m³
- **Plâtre et enduits** : 0,8 à 1,2 tonnes/m³

### Planifiez le tri
- Une zone pour les inertes (gravats, béton)
- Une zone pour le bois
- Une zone pour le plâtre (séparé obligatoirement)
- Une zone pour les métaux

## 3. Les documents à conserver

- Diagnostics (amiante, plomb…)
- BSD (Bordereaux de Suivi des Déchets)
- Bons de pesée de votre prestataire
- Certificats de valorisation

## Vilbert Recyclage vous accompagne

Notre équipe peut vous aider à dimensionner vos besoins en bennes et à organiser l'évacuation progressive de vos déchets tout au long du chantier.

📞 **03 22 93 02 86** — Contactez-nous dès la phase de préparation.
    `,
  },

  // ── NOUVEAUX ARTICLES ─────────────────────────────────────────────────────

  // GÉO SOMME
  {
    slug: "location-benne-amiens-prestataire-dechets",
    title: "Location de benne à Amiens et dans la Somme : votre prestataire déchets BTP",
    excerpt: "Vous cherchez un prestataire pour louer une benne à Amiens ou dans la Somme ? Vilbert Recyclage intervient en 24-48h dans toute l'agglomération amiénoise.",
    date: "3 juin 2025",
    category: "Géo Somme",
    metaDescription: "Location benne Amiens Somme 80 : livraison 24-48h, tous déchets BTP acceptés, BSD fourni. Vilbert Recyclage — déchetterie pro à Beauval, à 25 km d'Amiens.",
    content: `
# Location de benne à Amiens et dans la Somme : votre prestataire déchets BTP

Amiens, préfecture de la Somme, concentre une activité BTP importante : rénovations du centre-ville, chantiers de construction neuve, réhabilitation de logements, travaux publics. Vilbert Recyclage est le prestataire de proximité pour tous vos besoins en gestion de déchets de chantier dans la Somme (80).

## Pourquoi choisir Vilbert Recyclage pour vos chantiers amiénois ?

Notre site de traitement est situé à **Beauval, à environ 25 km d'Amiens**, ce qui nous permet d'intervenir rapidement dans toute l'agglomération. Nous livrons et enlevons vos bennes en **24 à 48 heures**.

### Notre offre à Amiens

- **Location de bennes** de toutes tailles (gravats, bois, plâtre, DIB…)
- **Enlèvement sur appel** : vous appelez, nous passons
- **Apport volontaire** : venez directement à notre déchetterie pro de Beauval
- **Location annuelle** : idéal pour les entreprises et entrepôts avec des besoins réguliers
- **Broyage sur chantier** : intervention mobile avec notre broyeur

## Les quartiers et zones desservis à Amiens

Nous intervenons dans tout Amiens et sa périphérie :
- Centre-ville d'Amiens, Saint-Leu, Montières
- ZAC du Coteau, zone industrielle nord
- Communes périphériques : Longueau, Camon, Rivery, Glisy, Boves, Salouel, Pont-de-Metz
- La Vallée des Vignes, Saint-Sauveur, Etouvie

## Quels déchets prenons-nous en charge ?

Tous les déchets issus de chantiers BTP :

- **Inertes** : béton, gravats, terres, tuiles, céramique
- **Bois et menuiseries** : charpente, palettes, huisseries
- **Plâtre** : plaques BA13, enduits
- **Métaux** : acier, aluminium, cuivre
- **Plastiques et PVC** : profilés, tubes, fenêtres
- **Déchets verts** : branchages, tontes (avec compostage sur site)
- **Menuiseries en fin de vie** : démantèlement spécialisé (> 92% recyclé)

## Notre engagement documentaire

Pour chaque prestation, nous vous remettons :
- **BSD** (Bordereau de Suivi des Déchets) via Trackdéchets
- **Bon de pesée** à chaque enlèvement
- **Attestation de prise en charge** pour vos dossiers chantier

## Demandez votre devis pour Amiens

📞 **03 22 93 02 86** — Lun-Ven 8h-12h / 13h-16h30
✉️ **recyclage@groupe-vilbert.fr**
📍 Déchetterie Pro — Route nationale, 80630 Beauval
    `,
  },
  {
    slug: "dechetterie-pro-beauval-somme-tout-savoir",
    title: "Déchetterie professionnelle de Beauval (Somme) : tout ce qu'il faut savoir",
    excerpt: "Notre déchetterie professionnelle de Beauval est ouverte aux artisans, entreprises BTP et particuliers. Horaires, déchets acceptés, tarifs et protocole d'accès.",
    date: "28 mai 2025",
    category: "Géo Somme",
    metaDescription: "Déchetterie professionnelle Beauval Somme 80 : horaires, déchets acceptés, protocole accès MASE, BSD, bons de pesée. Vilbert Recyclage — ouvert Lun-Ven.",
    content: `
# Déchetterie professionnelle de Beauval (Somme) : tout ce qu'il faut savoir

La déchetterie professionnelle de Vilbert Recyclage à Beauval (80630) est l'un des principaux centres de réception et de valorisation de déchets BTP de la Somme. Voici tout ce qu'il faut savoir avant de vous déplacer.

## Localisation et accès

**Adresse** : Route nationale, 80630 Beauval
**Situation** : en bord de la RN25, entre Amiens et Hesdin, à proximité de Doullens

Beauval est facilement accessible depuis :
- Amiens (~25 km, 25 min)
- Doullens (~6 km, 10 min)
- Abbeville (~35 km, 30 min)
- Arras (~50 km, 45 min)

## Horaires d'ouverture

| Jour | Matin | Après-midi |
|------|-------|------------|
| Lundi au Vendredi | 8h00 – 12h00 | 13h00 – 16h30 |
| Samedi – Dimanche | Fermé | Fermé |

**⚠️ Important** : tout apport doit être **préalablement accepté**. Appelez-nous avant de vous déplacer.

## Protocole d'accès — Certification MASE

Vilbert Recyclage est certifié **MASE** (Manuel d'Amélioration Sécurité des Entreprises). L'accès au site est conditionné à :

1. **La demande d'acceptation préalable** : contactez-nous par téléphone ou email avant tout apport.
2. **La signature du protocole de chargement/déchargement** : remis à chaque première visite.
3. **Le respect des règles de sécurité** : port des EPI, limitation de vitesse sur site, zones de dépôt définies.

## Déchets acceptés

- Inertes : béton, gravats, terres, tuiles, céramique, briques
- Plâtres : plaques BA13, enduits, carreaux de plâtre
- Bois et menuiseries (hors bois traité ou peint)
- Métaux : acier, aluminium, cuivre, zinc
- Plastiques et PVC : profilés, tubes, fenêtres
- Déchets verts : tontes, tailles, branchages
- Menuiseries en fin de vie (démantèlement spécialisé)
- Espèces invasives (espace dédié)

## Nos équipements sur site

- Concasseur et cribleur pour production de granulats recyclés
- Plateforme de compostage des déchets verts
- Espace de démantèlement des menuiseries
- Espace dédié aux espèces invasives
- **Panneaux solaires** sur bâtiment pour alimentation de nos machines

## Documents remis

- BSD via Trackdéchets
- Bon de pesée à chaque passage
- Attestation de prise en charge

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "gestion-dechets-chantier-somme-solutions",
    title: "Gestion des déchets de chantier dans la Somme (80) : solutions complètes",
    excerpt: "Artisans, PME BTP et particuliers de la Somme : découvrez toutes les solutions de Vilbert Recyclage pour gérer vos déchets de chantier en conformité avec la loi.",
    date: "20 mai 2025",
    category: "Géo Somme",
    metaDescription: "Gestion déchets chantier Somme 80 : location benne, collecte, traitement, broyage, compostage. Vilbert Recyclage Beauval — devis gratuit 24h.",
    content: `
# Gestion des déchets de chantier dans la Somme (80) : solutions complètes

La Somme est un département en plein développement, avec de nombreux chantiers de construction, rénovation et réhabilitation. Vilbert Recyclage, implantée à Beauval depuis plus de 30 ans, est le partenaire de confiance des professionnels et particuliers du département pour la gestion de leurs déchets BTP.

## Une offre complète pour tous vos besoins

### Location de bennes dans la Somme
Nous livrons des bennes sur tous vos chantiers dans la Somme : Amiens, Abbeville, Doullens, Albert, Péronne, Montdidier, Roye, Rue, Saint-Valery-sur-Somme…

### Broyage sur chantier
Nos équipements de broyage mobiles interviennent directement sur vos chantiers pour réduire vos déchets verts et bois de démolition sur place.

### Démantèlement de menuiseries
Notre centre de démantèlement traite les fenêtres, portes et volets en fin de vie avec un taux de recyclage supérieur à 92%.

### Compostage des déchets verts
Notre plateforme de compostage transforme vos déchets verts en compost normé, valorisé localement.

### Traitement des espèces invasives
Espace dédié pour les plantes invasives comme la Renouée du Japon.

## Pourquoi Vilbert Recyclage est le bon choix dans la Somme ?

- **Ancrage local** : 30+ ans d'expérience dans le département
- **Certifié MASE** : exigences élevées en sécurité et environnement
- **Opérateur Valobat** : déchets PMCB acceptés à 0 € sous conditions
- **Trackdéchets** : traçabilité numérique de chaque déchet
- **Énergie solaire** : notre site fonctionne en partie grâce aux panneaux photovoltaïques
- **Vente de matériaux recyclés** : granulats, compost, copeaux de bois issus de votre département

## Zones desservies dans la Somme

Amiens · Abbeville · Doullens · Albert · Péronne · Montdidier · Roye · Moreuil · Poix-de-Picardie · Oisemont · Rue · Le Crotoy · Gamaches · Ault · Friville-Escarbotin · Cayeux-sur-Mer

📞 **03 22 93 02 86** — Devis gratuit sous 24h
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "location-benne-abbeville-somme",
    title: "Location de benne à Abbeville et dans le Vimeu : collecte déchets BTP",
    excerpt: "Vilbert Recyclage intervient à Abbeville et dans l'ensemble du Vimeu pour la location de bennes et la collecte de déchets BTP. Réponse sous 24h.",
    date: "15 mai 2025",
    category: "Géo Somme",
    metaDescription: "Location benne Abbeville Vimeu Somme : Vilbert Recyclage livre et enlève vos bennes en 24-48h. Gravats, bois, plâtre, plastiques. Devis gratuit.",
    content: `
# Location de benne à Abbeville et dans le Vimeu : collecte déchets BTP

Abbeville, sous-préfecture de la Somme, et le Vimeu (Friville-Escarbotin, Ault, Gamaches, Mers-les-Bains…) représentent un bassin de vie actif avec de nombreux chantiers de rénovation et de construction. Vilbert Recyclage vous propose ses services de location de benne et de collecte de déchets dans tout ce secteur.

## Notre offre pour Abbeville et le Vimeu

### Location de bennes
Livraison et enlèvement de bennes pour tous types de déchets de chantier. Intervention en 24 à 48 heures selon la distance depuis notre site de Beauval (~35 km d'Abbeville).

### Apport volontaire à Beauval
Si vous êtes sur un petit chantier, venez directement déposer vos déchets sur notre plateforme de Beauval. Bon de pesée et BSD remis à chaque passage.

### Broyage mobile dans le Vimeu
Notre prestation de broyage sur chantier est disponible dans le Vimeu pour vos déchets verts et bois de démolition.

## Communes desservies

Abbeville · Friville-Escarbotin · Gamaches · Ault · Mers-les-Bains · Woignarue · Moyenneville · Senarpont · Oisemont · Fressenneville · Eu (76) · Le Tréport (76)

## Traçabilité garantie

- BSD via Trackdéchets pour chaque enlèvement
- Bon de pesée remis à chaque passage
- Attestation de traitement disponible sur demande

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
📍 Beauval — Route nationale, 80630
    `,
  },
  {
    slug: "location-benne-doullens-albert-nord-somme",
    title: "Location de benne à Doullens, Albert et dans le nord de la Somme",
    excerpt: "Vilbert Recyclage est implanté à Beauval, au cœur du nord de la Somme. Location de bennes et collecte de déchets à Doullens, Albert, Péronne et alentours.",
    date: "10 mai 2025",
    category: "Géo Somme",
    metaDescription: "Location benne Doullens Albert Péronne nord Somme 80 : Vilbert Recyclage Beauval. Gravats, bois, plâtre. BSD, bon de pesée. Devis gratuit 03 22 93 02 86.",
    content: `
# Location de benne à Doullens, Albert et dans le nord de la Somme

Notre site de Beauval est idéalement situé au nord de la Somme, à quelques kilomètres de Doullens, permettant des interventions ultra-rapides dans tout le secteur.

## Distances depuis Beauval

| Commune | Distance | Temps |
|---------|----------|-------|
| Doullens | ~6 km | ~10 min |
| Amiens | ~25 km | ~25 min |
| Albert | ~30 km | ~30 min |
| Péronne | ~55 km | ~50 min |
| Arras (62) | ~50 km | ~45 min |

## Nos services dans ce secteur

### Location de bennes — livraison rapide
Livraison en 24h pour Doullens et les communes proches. Tous types de déchets BTP : gravats, plâtre, bois, métaux, plastiques.

### Apport en déchetterie pro (Beauval)
La proximité de notre site avec Doullens en fait une solution idéale pour les artisans du secteur qui préfèrent apporter leurs déchets directement.

### Broyage sur chantier
Notre prestation de broyage mobile couvre tout le nord de la Somme.

## Communes desservies

Doullens · Beauval · Lucheux · Authie · Pommera · Autheux · Pas-en-Artois · Frévent · Saint-Pol-sur-Ternoise · Fillièvres · Bonnières · Grouches-Luchuel · Albert · Thiepval · Pozières · Aveluy · Méaulte · Morval

## Certification MASE et traçabilité

Tout enlèvement fait l'objet d'un BSD via Trackdéchets et d'un bon de pesée. Notre certification MASE garantit des interventions sécurisées.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },

  // NOUVEAUX SERVICES
  {
    slug: "broyage-sur-chantier-dechets-verts-bois",
    title: "Broyage sur chantier : réduisez vos déchets verts et bois directement sur site",
    excerpt: "Vilbert Recyclage intervient avec son matériel de broyage directement sur vos chantiers. Moins de transport, moins de coûts, plus de valorisation locale.",
    date: "8 mai 2025",
    category: "Nos services",
    metaDescription: "Broyage sur chantier déchets verts et bois Somme Hauts-de-France : intervention mobile Vilbert Recyclage. Réduction volume, broyat valorisé. Devis gratuit.",
    content: `
# Broyage sur chantier : réduisez vos déchets verts et bois directement sur site

Le broyage sur chantier est une prestation innovante qui vous permet de réduire considérablement le volume de vos déchets verts et de vos bois de démolition sans avoir à les transporter. Vilbert Recyclage vient directement chez vous avec son équipement.

## Comment fonctionne le broyage sur chantier ?

Notre équipe se déplace sur votre site avec une machine de broyage adaptée (type Targo ou équivalent). En quelques heures, vos déchets volumineux sont transformés en broyat de faible volume, facilement valorisable.

### Types de déchets traités

- **Déchets verts** : branchages, tailles de haies, rémanents forestiers, arbres abattus
- **Bois de démolition** : charpentes, palettes, menuiseries, coffrages
- **Bois de coupe** : résidus d'élagage, bois d'arrachage

## Pourquoi broyer sur chantier ?

### Économies significatives
Le broyage sur site réduit le volume des déchets de 70 à 80%. Vous économisez sur :
- Le nombre de bennes nécessaires
- Les coûts de transport
- Les frais de traitement en déchetterie

### Valorisation locale
Le broyat produit peut être :
- **Utilisé comme paillage** sur votre site ou vendu à des paysagistes
- **Envoyé en compostage** sur notre plateforme de Beauval
- **Valorisé en biomasse** pour la production d'énergie

### Praticité
Pas besoin d'évacuer des bennes volumineuses sur des chantiers difficiles d'accès. Le broyeur s'adapte à la plupart des configurations.

## Pour quels types de chantiers ?

- Chantiers de démolition (bois de charpente, menuiseries)
- Travaux d'élagage et d'abattage
- Aménagements paysagers
- Entretien d'espaces verts pour collectivités
- Chantiers forestiers et sylvicoles

## Zone d'intervention

Nous intervenons dans la **Somme (80)**, le **Pas-de-Calais (62)**, l'**Oise (60)**, l'**Aisne (02)** et le **Nord (59)**.

## Demandez un devis de broyage

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**

Précisez lors de votre appel : la localisation du chantier, le type et le volume estimé de déchets à broyer, l'accessibilité du site.
    `,
  },
  {
    slug: "dementelement-menuiseries-fin-de-vie-recyclage-92-pourcent",
    title: "Démantèlement des menuiseries en fin de vie : 92% de recyclage garanti",
    excerpt: "Notre centre de démantèlement des menuiseries en fin de vie assure un taux de recyclage supérieur à 92%. PVC, aluminium, verre, acier : chaque matière retrouve sa filière.",
    date: "5 mai 2025",
    category: "Nos services",
    metaDescription: "Démantèlement menuiseries fin de vie Somme : taux recyclage > 92%. PVC, aluminium, verre séparés. Attestation de traitement fournie. Vilbert Recyclage Beauval 80.",
    content: `
# Démantèlement des menuiseries en fin de vie : 92% de recyclage garanti

Les menuiseries en fin de vie (fenêtres, portes-fenêtres, volets, portes d'entrée) représentent des gisements de matières premières secondaires considérables. Notre centre de démantèlement de Beauval est spécialisé dans leur traitement avec un **taux de recyclage supérieur à 92%**.

## Pourquoi le démantèlement spécialisé est-il indispensable ?

Une fenêtre PVC contient plusieurs matériaux distincts :
- Le **profilé PVC** (recyclable en nouveau PVC)
- Le **vitrage** (verre recyclable)
- La **ferrure** (acier ou aluminium recyclable)
- Les **joints** (caoutchouc, valorisation énergétique)
- Les **renforts métalliques** internes (acier)

Si ces matériaux ne sont pas séparés, ils finissent mélangés et partent en décharge ou en valorisation énergétique de faible valeur. Notre démantèlement permet de les orienter chacun vers la filière optimale.

## Notre processus de démantèlement

### Étape 1 : Réception et tri
À l'arrivée sur notre site de Beauval, les menuiseries sont pesées et triées par type (PVC, aluminium, bois, mixte).

### Étape 2 : Démontage
Nos équipes procèdent au démontage manuel ou semi-mécanique :
- Extraction des vitrages
- Dépose des ferrures et quincaillerie
- Séparation des renforts métalliques
- Découpe des profilés

### Étape 3 : Orientation par filière

| Matière | Filière | Devenir |
|---------|---------|---------|
| PVC | Recyclage | Nouveaux profilés PVC |
| Aluminium | Recyclage | Refonte aluminium |
| Verre float | Recyclage | Nouveau verre |
| Acier | Recyclage | Aciérie |
| Joints caoutchouc | Valorisation énergétique | Énergie |

## Qui est concerné ?

- **Entreprises de rénovation** remplaçant des menuiseries en masse
- **Bailleurs sociaux** réhabilitant leur parc immobilier
- **Collectivités** rénovant leurs bâtiments publics
- **Particuliers** lors d'une rénovation complète

## Documents fournis

- **Attestation de traitement** avec taux de recyclage
- **BSD** via Trackdéchets
- **Bon de pesée**

Ces documents vous permettent de valoriser votre démarche RSE et de justifier votre conformité légale.

## Collecte sur site ou apport direct

Nous organisons la collecte de vos menuiseries directement sur votre chantier ou vous pouvez les apporter sur notre site de Beauval (après acceptation préalable).

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "plateforme-compostage-dechets-verts-somme",
    title: "Compostage des déchets verts dans la Somme : notre plateforme à Beauval",
    excerpt: "Vilbert Recyclage exploite une plateforme de compostage agréée à Beauval. Vos déchets verts de chantier deviennent du compost normé, valorisé localement dans la Somme.",
    date: "2 mai 2025",
    category: "Nos services",
    metaDescription: "Compostage déchets verts Somme 80 : plateforme agréée Beauval. Tontes, branchages, tailles → compost normé NF U44-051. Vilbert Recyclage — BSD et traçabilité.",
    content: `
# Compostage des déchets verts dans la Somme : notre plateforme à Beauval

La Somme est un département fortement rural et agricole, avec de nombreux espaces verts, jardins, haies et zones boisées. Les déchets verts issus de leur entretien représentent des volumes importants. Notre plateforme de compostage de Beauval offre une solution de valorisation locale et circulaire.

## Notre plateforme de compostage

Notre site de Beauval dispose d'une **plateforme de compostage agréée** pour recevoir les déchets verts non souillés. Le process de compostage est contrôlé et documenté.

### Déchets verts acceptés

✅ Tontes de gazon
✅ Tailles de haies et d'arbustes
✅ Branchages (broyés ou à broyer)
✅ Feuilles mortes
✅ Résidus de jardinage (sans sol ni pot)
✅ Rémanents forestiers

❌ Déchets verts souillés (terre, plastique, produits chimiques)
❌ Bois traité ou peint
❌ Gazon artificiel

## Le processus de compostage

### Phase 1 : Réception et broyage
Les déchets verts sont réceptionnés, pesés et broyés si nécessaire pour homogénéiser la taille des particules.

### Phase 2 : Mise en andains
Les matières broyées sont disposées en andains (tas allongés) et arrosées pour maintenir une humidité optimale.

### Phase 3 : Retournement et maturation
Les andains sont régulièrement retournés pour aérer la matière et accélérer la décomposition. La température monte naturellement à 55-65°C, hygiénisant le compost.

### Phase 4 : Criblage et stockage
Le compost mature est criblé pour obtenir un produit homogène répondant à la **norme NF U44-051**.

## Utilisation du compost produit

Le compost de Beauval est vendu à :
- **Agriculteurs** locaux (amendement organique)
- **Paysagistes** de la Somme
- **Collectivités** pour l'entretien de leurs espaces verts
- **Particuliers** pour leurs jardins

## Qui peut apporter des déchets verts ?

- Paysagistes et jardiniers professionnels
- Collectivités (mairies, syndicats)
- Entreprises d'élagage et d'abattage
- Gestionnaires d'espaces verts
- Particuliers (selon disponibilité)

## Traçabilité

Chaque apport fait l'objet d'un **bon de pesée** et d'un BSD si nécessaire. La plateforme est inscrite sur **Trackdéchets**.

📞 **03 22 93 02 86** — Appelez avant tout apport pour validation préalable
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "traitement-especes-invasives-renouee-japon-somme",
    title: "Traitement des espèces invasives dans la Somme : renouée du Japon et autres",
    excerpt: "La renouée du Japon, la Berce du Caucase et d'autres plantes invasives nécessitent un traitement spécialisé. Vilbert Recyclage dispose d'un espace dédié à Beauval.",
    date: "28 avril 2025",
    category: "Nos services",
    metaDescription: "Traitement espèces invasives Somme 80 : renouée du Japon, Berce du Caucase. Espace dédié Vilbert Recyclage Beauval. Filière réglementée, BSD fourni.",
    content: `
# Traitement des espèces invasives dans la Somme : renouée du Japon et autres

Les espèces végétales invasives colonisent de nombreux chantiers et espaces naturels dans la Somme et les Hauts-de-France. Leur gestion est encadrée par une réglementation stricte qui interdit de les traiter comme des déchets verts ordinaires. Vilbert Recyclage propose une solution adaptée et conforme.

## Qu'est-ce qu'une espèce invasive ?

Les espèces végétales invasives sont des plantes introduites en Europe qui se reproduisent de manière incontrôlée et nuisent à la biodiversité locale. En France, plusieurs espèces font l'objet d'une réglementation :

### Les principales espèces invasives rencontrées dans la Somme

- **Renouée du Japon** (Reynoutria japonica) : la plus répandue, présente sur de nombreux bords de cours d'eau et chantiers de la Somme et de la Bresle
- **Berce du Caucase** (Heracleum mantegazzianum) : dangereuse (brûlures cutanées), présente en milieu humide
- **Buddleia de David** : envahit les friches et terrains vagues
- **Solidage géant** : colonise les milieux ouverts
- **Jussie** : espèce aquatique présente dans les zones humides piccardes

## Pourquoi le traitement ordinaire est interdit ?

La réglementation est claire :
- Les plantes invasives **ne peuvent pas être compostées** dans une plateforme ordinaire (risque de propagation par les semences ou fragments de rhizomes)
- Elles **ne peuvent pas être transportées** sans précautions particulières
- Elles **ne peuvent pas être abandonnées** en bord de route ou en décharge sauvage

## Notre espace dédié à Beauval

Vilbert Recyclage dispose d'un **espace de confinement dédié** pour la réception et le traitement des espèces invasives, totalement séparé des autres flux de déchets.

### Notre processus

1. **Acceptation préalable** : contactez-nous avant tout apport ou enlèvement
2. **Transport sécurisé** : les végétaux sont conditionnés en big-bags étanches
3. **Confinement sur site** : dépôt dans une zone hermétique
4. **Traitement adapté** : compostage en conditions contrôlées (températures élevées) ou transfert vers filière agréée

### Matériel requis pour le transport

- Big-bags résistants, fermés hermétiquement
- Bâchage complet du chargement
- Désinfection des roues et équipements après contact

## Qui est concerné ?

- **Maîtres d'ouvrage** (communes, syndicats de rivière) réalisant des travaux sur sites colonisés
- **Entreprises de génie civil** intervenant sur des chantiers envahis
- **Gestionnaires de réseaux** (routes, voies ferrées, canaux)
- **Paysagistes** et jardiniers professionnels

## Documents fournis

- BSD (Bordereau de Suivi des Déchets) spécifique
- Attestation de traitement

📞 **03 22 93 02 86** — Appelez-nous en premier pour que nous évaluions ensemble la situation
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "vente-materiaux-recycles-somme-granulats-compost",
    title: "Achat de matériaux recyclés dans la Somme : granulats, GNT, compost, copeaux",
    excerpt: "Vilbert Recyclage vend des matériaux recyclés produits sur son site de Beauval : concassé béton, GNT recyclée, compost, copeaux de bois et sables. Prix compétitifs.",
    date: "25 avril 2025",
    category: "Nos services",
    metaDescription: "Vente matériaux recyclés Somme 80 : concassé béton, GNT recyclée, compost normé, copeaux de bois, sables. Vilbert Recyclage Beauval — prix compétitifs, disponibilités sur devis.",
    content: `
# Achat de matériaux recyclés dans la Somme : granulats, GNT, compost, copeaux

Vilbert Recyclage ne se contente pas de collecter et traiter vos déchets : nous les transformons en **matériaux de qualité** que nous mettons en vente. Une démarche d'économie circulaire concrète qui profite à l'ensemble des acteurs du BTP et de l'agriculture dans la Somme.

## Nos matériaux recyclés disponibles

### Concassé béton et GNT recyclée

**Issu de** : démolitions de béton, gravats de chantier
**Production** : concassage et criblage sur notre site de Beauval
**Granulométries disponibles** : 0/20, 0/31,5, 0/63, 0/100

**Utilisations recommandées** :
- Remblais de tranchées et de fouilles
- Sous-couches de voiries légères
- Stabilisation de plateformes
- Chemins d'accès et pistes agricoles
- Comblement de vides (caves, puits)

### Compost normé

**Issu de** : déchets verts collectés sur notre plateforme
**Norme** : NF U44-051
**Caractéristiques** : compost mature, taux de matière organique élevé

**Utilisations recommandées** :
- Amendement organique des sols agricoles
- Terreautage et remplacement de terreau
- Réhabilitation de sols dégradés
- Création de pelouses et gazons

### Copeaux de bois (broyat)

**Issu de** : bois propre de démolition et de déchets verts ligneux
**Caractéristiques** : broyat propre, sans bois traité ni peint

**Utilisations recommandées** :
- Paillage des massifs et pieds d'arbres
- Allées de jardin
- Litière animale (équidés, volailles)
- Biomasse chaufferie (selon qualité)

### Sables recyclés

**Issu de** : criblage des matériaux inertes
**Granulométrie** : 0/4 et 0/6

**Utilisations recommandées** :
- Remblais de finition
- Nivellement de terrain
- Jeux pour enfants (sable propre)

## Avantages des matériaux recyclés

| Critère | Matériaux recyclés | Matériaux naturels |
|---------|--------------------|-------------------|
| Prix | Généralement inférieur | Prix marché |
| Bilan carbone | Très favorable | Extraction + transport |
| Origine | Locale (Beauval, Somme) | Variable |
| Conformité RSE | ✅ | Neutre |

## Comment commander ?

Les disponibilités varient selon notre production du moment. **Contactez-nous avant tout achat** pour connaître les stocks disponibles et obtenir un tarif.

- Enlèvement sur site possible avec votre propre véhicule
- Livraison possible selon volume et localisation

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
📍 Route nationale, 80630 Beauval (Somme)
    `,
  },
  {
    slug: "location-benne-annuelle-entrepot-professionnel",
    title: "Location de benne à l'année pour entrepôts et professionnels : la solution économique",
    excerpt: "Vous avez des déchets récurrents dans votre entrepôt ou sur vos chantiers ? La location de benne à l'année avec Vilbert Recyclage est la solution la plus économique et la plus pratique.",
    date: "22 avril 2025",
    category: "Professionnels",
    metaDescription: "Location benne annuelle entrepôt et professionnels Somme Hauts-de-France : rotations planifiées, tarifs dégressifs, BSD automatiques. Vilbert Recyclage Beauval.",
    content: `
# Location de benne à l'année pour entrepôts et professionnels : la solution économique

Les entrepôts logistiques, les usines, les ateliers d'artisans et les entreprises BTP génèrent des déchets de façon régulière tout au long de l'année. La location ponctuelle de benne n'est pas toujours la solution la plus adaptée. Vilbert Recyclage propose des **contrats annuels de location de benne** sur mesure.

## Pourquoi opter pour une location annuelle ?

### Simplicité de gestion
Fini les appels ponctuels pour chaque benne. Avec un contrat annuel :
- Les rotations sont **planifiées à l'avance** selon vos besoins
- Vous disposez d'une benne **en permanence sur site**
- Un seul interlocuteur pour toute l'année

### Économies sur le long terme
- Tarifs dégressifs par rapport à la location ponctuelle
- Pas de frais de mise en place répétés
- Optimisation du nombre de rotations

### Conformité légale simplifiée
- BSD automatiquement générés à chaque rotation
- Bon de pesée remis systématiquement
- Attestations de traitement disponibles sur demande
- Tout est tracé sur Trackdéchets

## Pour quel type d'entreprises ?

### Entrepôts et plateformes logistiques
Cartons, palettes, films plastiques, emballages industriels… La benne permanente est indispensable.

### Artisans et PME du bâtiment
Vos chantiers se succèdent ? Un contrat annuel vous garantit une disponibilité immédiate à chaque nouveau chantier.

### Industries et ateliers
Chutes de production, emballages, déchets de fabrication : la benne permanente rationalise votre gestion.

### Gestionnaires immobiliers et bailleurs
Pour la gestion des déchets de réhabilitation et d'entretien de votre patrimoine.

## Fonctionnement du contrat

1. **Audit initial** : nous évaluons ensemble vos volumes et fréquences de remplissage
2. **Dimensionnement** : choix de la taille de benne et du rythme de rotation adapté
3. **Mise en place** : livraison de la benne et signature du protocole MASE
4. **Rotations planifiées** : enlèvements réguliers à date fixe ou sur appel
5. **Bilan annuel** : rapport de traitement complet pour vos dossiers RSE

## Zone d'intervention

Nous proposons des contrats annuels dans toute la **Somme (80)**, le **Pas-de-Calais (62)**, l'**Oise (60)** et l'**Aisne (02)**.

## Demandez votre devis

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "certification-mase-securite-site-recyclage",
    title: "Certification MASE : pourquoi Vilbert Recyclage applique les plus hauts standards de sécurité",
    excerpt: "Vilbert Recyclage est certifié MASE. Cette certification garantit des pratiques exemplaires en matière de sécurité, de santé au travail et de protection de l'environnement sur notre site.",
    date: "18 avril 2025",
    category: "À propos",
    metaDescription: "Certification MASE Vilbert Recyclage Beauval : sécurité chantier, protocole accès, EPI, acceptation préalable. Standards élevés pour protéger clients et personnel.",
    content: `
# Certification MASE : pourquoi Vilbert Recyclage applique les plus hauts standards de sécurité

La certification MASE (Manuel d'Amélioration Sécurité des Entreprises) est un référentiel reconnu dans le secteur industriel et des services, particulièrement dans les domaines à risques comme la gestion des déchets. Vilbert Recyclage est certifié MASE et en est fier.

## Qu'est-ce que la certification MASE ?

Le MASE est un système de management de la sécurité, de la santé et de l'environnement au travail. Il est basé sur un référentiel en 5 axes :

1. **Engagement de la direction** : politique sécurité formalisée et diffusée
2. **Compétences et qualifications** : formation continue de tous les collaborateurs
3. **Organisation du travail** : procédures et modes opératoires sécurisés
4. **Efficacité du système** : évaluation des risques et amélioration continue
5. **Mesure des résultats** : indicateurs de performance sécurité

## Ce que cela change concrètement pour vous

### Protocole d'accès au site

L'accès à notre déchetterie professionnelle de Beauval est encadré :
- **Demande d'acceptation préalable** obligatoire avant tout apport
- **Signature du protocole de chargement/déchargement** à la première visite
- **Respect des zones délimitées** sur site

### Port des EPI obligatoire

Sur notre site, tous les intervenants (personnels, chauffeurs, clients) doivent porter les **équipements de protection individuelle** adaptés : casque, gilets haute visibilité, chaussures de sécurité.

### Plan de prévention

Pour les interventions répétées ou les chantiers complexes, un **plan de prévention** est établi entre Vilbert Recyclage et l'entreprise intervenante.

## Pourquoi c'est une garantie pour vous ?

En faisant appel à un prestataire certifié MASE, vous vous protégez sur le plan de votre **responsabilité civile et pénale**. En cas d'accident sur notre site, notre certification démontre que toutes les mesures de prévention requises ont été prises.

## Accès au site : comment ça se passe ?

1. **Appelez-nous** au 03 22 93 02 86 ou écrivez à recyclage@groupe-vilbert.fr pour soumettre votre demande d'acceptation préalable.
2. **Nous validons** le type de déchet et la date d'apport.
3. **À votre première visite**, notre agent d'accueil vous remet le protocole à signer.
4. **Lors de chaque visite**, vous respectez la signalétique et les zones délimitées.
5. **À votre sortie**, vous recevez votre bon de pesée.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "trackdechets-bsd-traçabilite-dechets-btp",
    title: "Trackdéchets et BSD : comment Vilbert Recyclage assure la traçabilité de vos déchets",
    excerpt: "Vilbert Recyclage est inscrit sur Trackdéchets et émet des BSD pour chaque enlèvement. La traçabilité totale de vos déchets, de la collecte jusqu'au traitement final.",
    date: "15 avril 2025",
    category: "Réglementation",
    metaDescription: "Trackdéchets BSD traçabilité déchets BTP : Vilbert Recyclage Beauval inscrit sur Trackdéchets. BSD numériques, bons de pesée, attestations. Conformité AGEC 2025.",
    content: `
# Trackdéchets et BSD : comment Vilbert Recyclage assure la traçabilité de vos déchets

Depuis l'entrée en vigueur des obligations issues de la loi AGEC, la traçabilité numérique des déchets est devenue un enjeu majeur pour les producteurs et gestionnaires de déchets. Vilbert Recyclage s'est pleinement engagé dans cette démarche.

## Qu'est-ce que Trackdéchets ?

**Trackdéchets** est la plateforme numérique officielle du gouvernement français pour la gestion et la traçabilité des déchets. Elle permet de dématérialiser l'ensemble des documents de traçabilité (BSD, annexes, certificats) et d'assurer une visibilité en temps réel sur le devenir des déchets.

## Vilbert Recyclage sur Trackdéchets

Notre centre de traitement de Beauval est **inscrit et actif sur Trackdéchets**. Cela signifie que :

- Chaque déchet que vous nous confiez est enregistré numériquement
- Le cheminement de votre déchet est traçable de la collecte jusqu'au traitement final
- Les BSD sont générés et signés électroniquement
- Vous pouvez suivre le statut de vos déchets depuis votre espace Trackdéchets

## Le Bordereau de Suivi des Déchets (BSD)

### Qu'est-ce que le BSD ?

Le BSD est le document officiel qui accompagne les déchets lors de leur transport et atteste de leur prise en charge. Il mentionne :

- La nature et la quantité des déchets
- Le producteur (vous) et le transporteur
- L'installation de traitement (Vilbert Recyclage)
- Le code déchet (nomenclature européenne)

### Qui doit établir un BSD ?

Le BSD est obligatoire pour :
- Les déchets dangereux
- Certains déchets non dangereux soumis à réglementation spécifique

Pour les autres déchets, bien que non obligatoire, il constitue une garantie documentaire.

## Le bon de pesée

À chaque passage sur notre site, vous recevez un **bon de pesée** mentionnant :
- La date et l'heure de la pesée
- Le poids brut, tare et net
- Le type de déchet
- Notre identifiant Trackdéchets

Ce document est indispensable pour votre comptabilité déchets et vos déclarations réglementaires.

## Pourquoi la traçabilité est-elle importante pour vous ?

### Obligation légale
La loi impose aux producteurs de déchets de justifier du bon traitement de leurs déchets. Les BSD et bons de pesée constituent vos preuves.

### Marchés publics
De plus en plus d'appels d'offres exigent la production des BSD lors des attributions de marchés.

### Démarche RSE
La traçabilité de vos déchets alimente votre rapport RSE avec des données fiables.

## Accéder à vos documents

Depuis votre espace **Trackdéchets**, vous retrouvez tous vos BSD historiques. Si vous n'avez pas encore de compte, vous pouvez le créer gratuitement sur trackdechets.beta.gouv.fr.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "panneaux-solaires-centre-recyclage-bilan-carbone",
    title: "Panneaux solaires sur notre site : comment Vilbert Recyclage réduit son empreinte carbone",
    excerpt: "Notre bâtiment de Beauval est équipé de panneaux photovoltaïques pour alimenter nos machines. Une démarche concrète pour un centre de recyclage plus vert.",
    date: "10 avril 2025",
    category: "Environnement",
    metaDescription: "Panneaux solaires Vilbert Recyclage Beauval : énergie photovoltaïque pour machines de concassage et broyage. Bilan carbone réduit, engagement RSE concret.",
    content: `
# Panneaux solaires sur notre site : comment Vilbert Recyclage réduit son empreinte carbone

Recycler les déchets du BTP est un acte écologique par définition. Mais Vilbert Recyclage va plus loin en s'engageant à réduire l'empreinte carbone de ses propres opérations. Notre bâtiment de Beauval est équipé de **panneaux solaires photovoltaïques** qui alimentent directement nos installations.

## Pourquoi les panneaux solaires sur un centre de recyclage ?

Les machines utilisées dans un centre de recyclage (concasseur, cribleur, broyeur, pont-bascule) consomment une quantité d'énergie significative. En produisant notre propre électricité sur site, nous réduisons :

- Notre dépendance au réseau électrique national
- Notre facture énergétique
- Notre empreinte carbone opérationnelle

## Notre installation photovoltaïque

Les panneaux solaires sont installés sur la toiture de notre bâtiment principal à Beauval. L'énergie produite est utilisée en priorité pour alimenter :

- Les machines de concassage et de criblage
- Le pont-bascule de pesée des déchets
- L'éclairage et les équipements du site

## En cohérence avec notre activité

Un centre de recyclage qui fonctionne à l'énergie renouvelable, c'est une cohérence totale avec notre raison d'être. Nous demandons à nos clients de valoriser leurs déchets ; nous faisons nous-mêmes l'effort de réduire notre impact.

## Notre engagement global en matière d'environnement

Au-delà des panneaux solaires, notre démarche environnementale comprend :

- **Certification MASE** : management de la sécurité et de l'environnement
- **Taux de valorisation élevé** : maximiser le recyclage, minimiser la mise en décharge
- **Circuits courts** : vente de matériaux recyclés localement dans la Somme
- **Compostage** : valorisation des déchets verts en compost normé
- **Trackdéchets** : traçabilité numérique de chaque déchet traité

## Un argument pour votre bilan carbone

En confiant vos déchets à Vilbert Recyclage, vous choisissez un prestataire qui a réduit son empreinte carbone. Cela contribue à améliorer le bilan carbone global de votre chantier.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "renovation-maison-somme-evacuation-dechets",
    title: "Rénovation de maison dans la Somme : comment évacuer vos gravats et déchets",
    excerpt: "Vous rénovez votre maison dans la Somme ? Vilbert Recyclage vous propose des solutions simples pour évacuer vos gravats, plâtres, bois et menuiseries. Devis gratuit.",
    date: "8 avril 2025",
    category: "Conseils pratiques",
    metaDescription: "Évacuation déchets rénovation maison Somme 80 : location benne, apport déchetterie Beauval. Gravats, plâtre, bois, menuiseries. Vilbert Recyclage — devis gratuit.",
    content: `
# Rénovation de maison dans la Somme : comment évacuer vos gravats et déchets

La rénovation d'une maison génère d'importants volumes de déchets : gravats, carrelage, plâtre, boiseries, menuiseries, isolation… Dans la Somme, Vilbert Recyclage est votre partenaire pour gérer ces déchets de manière simple, légale et écologique.

## Les déchets typiques d'une rénovation dans la Somme

### Rénovation de salle de bain ou cuisine
- Carrelage et faïence
- Sanitaires (céramique)
- Cloisons en plâtre
- Vieilles menuiseries (fenêtres, portes)
- Canalisations (cuivre, PVC)

### Réfection de toiture
- Tuiles ou ardoises
- Charpente en bois (si remplacement)
- Isolation ancienne (laine de verre, ouate)
- Gouttières en zinc ou PVC

### Ravalement de façade
- Enduits et mortier
- Isolation thermique par l'extérieur (ITE) ancienne
- Pierres et briques

### Rénovation énergétique
- Anciennes fenêtres PVC ou aluminium → **démantèlement spécialisé chez nous (> 92% recyclé)**
- Vieille chaudière et radiateurs
- Isolants anciens

## Nos solutions pour les particuliers dans la Somme

### Option 1 : La benne livrée chez vous
Nous vous livrons une benne de la taille adaptée à vos travaux. Vous la remplissez à votre rythme, et nous venons la chercher à votre appel.

### Option 2 : Venez à Beauval
Pour les petits volumes ou si vous disposez d'un véhicule adapté, venez directement déposer vos déchets sur notre site. Bon de pesée remis à chaque passage.

### Option 3 : Nous venons chez vous
Pour les menuiseries en fin de vie, nous organisons une collecte directement sur votre chantier de rénovation.

## Ce qu'on fait de vos déchets

- **Gravats et carrelage** → concassage → granulats recyclés
- **Plâtre** → massification → recyclage en gypse
- **Bois** → broyage → copeaux ou biomasse
- **Fenêtres** → démantèlement → recyclage PVC, aluminium, verre
- **Cuivre et métaux** → fonderie

## Zones desservies dans la Somme

Amiens · Abbeville · Doullens · Albert · Péronne · Montdidier · Moreuil · Corbie · Boves · Villers-Bretonneux et toute la Somme

📞 **03 22 93 02 86** — Devis gratuit, réponse sous 24h
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "gestion-dechets-paysagiste-espaces-verts-somme",
    title: "Paysagistes et gestionnaires d'espaces verts dans la Somme : gérez vos déchets verts",
    excerpt: "Paysagistes, jardiniers et gestionnaires d'espaces verts de la Somme : Vilbert Recyclage accepte vos déchets verts et les valorise en compost. Broyage sur site possible.",
    date: "5 avril 2025",
    category: "Professionnels",
    metaDescription: "Déchets verts paysagiste Somme 80 : compostage, broyage sur chantier, tontes, tailles, branchages. Vilbert Recyclage Beauval — plateforme agréée, BSD fourni.",
    content: `
# Paysagistes et gestionnaires d'espaces verts dans la Somme : gérez vos déchets verts

Les paysagistes professionnels, les entreprises d'entretien d'espaces verts et les collectivités de la Somme génèrent d'importants volumes de déchets verts au fil des saisons. Vilbert Recyclage vous propose une solution complète et traçable pour valoriser ces déchets.

## Vos déchets verts, notre matière première

Chez Vilbert Recyclage, les déchets verts ne sont pas des déchets : ce sont des ressources. Nous les valorisons en compost normé et en broyat de qualité, redistribués localement dans la Somme.

## Nos services pour les paysagistes

### Apport en plateforme de compostage

Notre site de Beauval dispose d'une plateforme de compostage agréée. Vous pouvez y apporter :
- Tontes de gazon (sans sachets plastiques)
- Tailles de haies et d'arbustes
- Branchages (broyés ou non)
- Feuilles mortes
- Résidus de fauchage

**Condition** : acceptation préalable obligatoire — appelez-nous avant tout apport.

### Broyage sur votre chantier

Nous venons sur vos chantiers d'espaces verts avec notre broyeur. Particulièrement utile pour :
- Les chantiers d'élagage avec de gros volumes
- Les zones difficiles d'accès pour les bennes
- La réduction de volume avant compostage

### Traitement des espèces invasives

Vous intervenez sur des sites colonisés par la Renouée du Japon ou d'autres espèces invasives ? Notre espace dédié à Beauval vous offre une solution conforme à la réglementation.

## Traçabilité pour vos marchés publics

De nombreux marchés publics d'espaces verts exigent désormais la production de BSD et de certificats de valorisation. Nous vous remettons systématiquement :

- Bon de pesée à chaque apport
- BSD via Trackdéchets
- Attestation de valorisation (compostage)

## Contrat annuel pour les paysagistes réguliers

Si vous avez des besoins récurrents, nous proposons des **contrats annuels** avec un calendrier d'apport planifié et des tarifs préférentiels.

## Zone desservie

Amiens, Abbeville, Doullens, Albert, Péronne, Montdidier et toute la Somme.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "construction-maison-neuve-dechets-chantier-somme",
    title: "Construction de maison neuve dans la Somme : gestion des déchets de chantier",
    excerpt: "Un chantier de construction neuve génère de 50 à 100 tonnes de déchets. Vilbert Recyclage vous accompagne de A à Z pour la gestion et la valorisation de tous ces déchets.",
    date: "2 avril 2025",
    category: "Conseils pratiques",
    metaDescription: "Déchets construction maison neuve Somme 80 : bennes, collecte, tri 7 flux, BSD. Vilbert Recyclage Beauval — prestataire déchets BTP pour maisons individuelles et promoteurs.",
    content: `
# Construction de maison neuve dans la Somme : gestion des déchets de chantier

La construction d'une maison individuelle génère en moyenne **50 à 100 tonnes de déchets** selon la taille et les matériaux utilisés. Une bonne organisation en amont permet d'optimiser les coûts et de respecter vos obligations légales.

## Les déchets d'un chantier de construction neuve

### Gros œuvre
- Terres et remblais (si terrassement)
- Chutes de béton, parpaings, briques
- Armatures métalliques
- Bois de coffrage

### Second œuvre
- Chutes de plaques de plâtre
- Chutes de laine de verre/de roche
- Profilés PVC (fenêtres, volets roulants)
- Emballages plastiques
- Chutes de bois (menuiseries, parquets)

### Finitions
- Emballages et chutes de carrelage
- Résidus de peinture (non dangereux)
- Chutes de faïence

## Organisation recommandée

### Planifier avant de démarrer

Avant le démarrage du chantier, définissez avec votre maître d'œuvre ou votre entreprise générale :

1. Les volumes estimés par type de déchet
2. Le nombre et la taille des bennes nécessaires
3. Les emplacements des bennes sur le chantier
4. Le planning des rotations

### Le tri des 7 flux

Pour les professionnels, le tri par famille est obligatoire depuis 2022 :
- Inertes (béton, briques)
- Bois
- Métaux
- Plastiques
- Verre
- Plâtre
- Papier/carton

### Prévoir une rotation des bennes

Un chantier de maison neuve nécessite généralement plusieurs rotations sur 6 à 12 mois. Planifiez avec nous dès le début.

## Notre accompagnement

### Audit initial gratuit

Avant votre chantier, nous évaluons avec vous les volumes et vous proposons un plan de gestion des déchets.

### Bennes dédiées par flux

Nous mettons à disposition des bennes spécifiques selon les types de déchets prévus sur votre chantier.

### Suivi documentaire complet

- BSD via Trackdéchets
- Bons de pesée à chaque rotation
- Rapport de valorisation en fin de chantier

## Pour les promoteurs immobiliers

Si vous gérez plusieurs chantiers simultanément dans la Somme, nous proposons des **contrats cadres** avec des tarifs négociés et un suivi centralisé de l'ensemble de vos chantiers.

📞 **03 22 93 02 86** — Contactez-nous dès la phase d'étude
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "dechets-bois-menuiseries-chantier-recyclage",
    title: "Déchets de bois et menuiseries de chantier : filières de recyclage et valorisation",
    excerpt: "Charpentes, palettes, fenêtres, parquets : les déchets bois sont parmi les plus valorisables du BTP. Découvrez les filières et notre centre de démantèlement menuiseries.",
    date: "28 mars 2025",
    category: "Environnement",
    metaDescription: "Recyclage déchets bois et menuiseries BTP Somme : charpente, PVC, aluminium, verre. Filières valorisation, centre démantèlement Vilbert Recyclage Beauval 80.",
    content: `
# Déchets de bois et menuiseries de chantier : filières de recyclage et valorisation

Les déchets de bois et de menuiseries représentent une part importante des déchets de chantier. Bien orientés, ils peuvent être presque intégralement valorisés. Vilbert Recyclage a développé des filières spécifiques pour maximiser leur recyclage.

## Les différents types de déchets bois

### Bois de charpente et d'ossature

**Origine** : toitures, planchers, colombages
**Valorisation** :
- Bois de qualité → broyage → copeaux de paillage
- Bois avec résidus d'assemblage → broyage → biomasse chaufferie

### Palettes

**Valorisation** :
- Palettes réutilisables → filière reconditionnement
- Palettes cassées → broyage → copeaux de bois

### Menuiseries bois

**Origine** : portes, fenêtres bois, volets bois
**Valorisation** :
- Bois sain → broyage → biomasse
- Bois peint ou traité → filière spécialisée (hors classe 3 et 4 traité)

### Panneaux dérivés du bois

- OSB, contreplaqué → broyage → biomasse
- Panneaux mélaminés → filière spécialisée (résines)

## Notre centre de démantèlement des menuiseries

Nos menuiseries PVC, aluminium et mixtes font l'objet d'un **démantèlement spécialisé** permettant de recycler chaque composant séparément.

### Ce que nous séparons

- Profilé PVC → recyclage PVC
- Vitrage → recyclage verre float
- Ferrures → recyclage acier/aluminium
- Renforts acier → recyclage ferraille
- Joints caoutchouc → valorisation énergétique

**Taux de recyclage global : > 92%**

## Déchets bois que nous n'acceptons pas

Certains bois nécessitent des filières spécialisées que nous ne gérons pas :
- Bois classe 3 et 4 traités (créosote, sels de cuivre…)
- Bois avec peinture au plomb
- Traverses de chemin de fer

## Comment nous confier vos déchets bois ?

### Option 1 : Location de benne dédiée bois
Nous vous livrons une benne spécifique pour vos déchets bois/menuiseries. Retrait sur appel.

### Option 2 : Apport sur notre site
Venez directement à notre déchetterie pro de Beauval avec vos menuiseries et bois de chantier. Après acceptation préalable.

### Option 3 : Broyage sur chantier
Pour les gros volumes de charpente ou de démolition, notre broyeur mobile intervient directement chez vous.

📞 **03 22 93 02 86**
✉️ **recyclage@groupe-vilbert.fr**
    `,
  },
  {
    slug: "valobat-operateur-dechets-pmcb-gratuits-somme",
    title: "Valobat : déposez vos déchets PMCB gratuitement chez Vilbert Recyclage dans la Somme",
    excerpt: "Vilbert Recyclage est opérateur agréé Valobat. Les professionnels détenteurs de déchets PMCB (fenêtres, isolants, plâtres…) peuvent les déposer à 0 € sur notre site de Beauval, sous conditions.",
    date: "9 juin 2026",
    category: "Réglementation",
    metaDescription: "Valobat opérateur Somme : Vilbert Recyclage accepte les déchets PMCB à 0 € pour les professionnels éligibles. Fenêtres, isolants, plâtres, menuiseries. Beauval (80).",
    content: `
# Valobat : déposez vos déchets PMCB gratuitement chez Vilbert Recyclage dans la Somme

Vilbert Recyclage est fier d'être référencé comme **opérateur agréé de l'éco-organisme Valobat**. Cette accréditation vous permet, sous conditions, de déposer certains déchets de matériaux de construction sur notre site de Beauval **sans frais**.

## Qu'est-ce que Valobat ?

**Valobat** est l'un des éco-organismes agréés par l'État dans le cadre de la filière REP (Responsabilité Élargie du Producteur) pour les **Produits et Matériaux de Construction du secteur du Bâtiment (PMCB)**, créée par la loi AGEC (Anti-Gaspillage pour une Économie Circulaire).

### Comment fonctionne le système ?

Le principe est simple et vertueux :

1. **Les fabricants et importateurs** de matériaux de construction versent des **éco-contributions** à Valobat lors de la mise sur le marché de leurs produits.
2. **Valobat collecte ces fonds** et les redistribue pour financer la collecte et le traitement des déchets en fin de vie.
3. **Les opérateurs agréés** comme Vilbert Recyclage reçoivent une compensation pour accepter ces déchets.
4. **Les détenteurs professionnels de déchets** (entreprises de pose, artisans, promoteurs…) bénéficient de la **gratuité à la dépose**.

→ **En résumé : le pollueur-payeur s'applique dès la fabrication, et vous bénéficiez de la gratuité à la dépose.**

## Quels déchets PMCB sont concernés ?

### Déchets éligibles à la gratuité chez Vilbert Recyclage

| Catégorie | Exemples |
|-----------|----------|
| **Menuiseries extérieures** | Fenêtres, portes-fenêtres, portes d'entrée (PVC, aluminium, bois) |
| **Volets et fermetures** | Volets roulants, battants, stores extérieurs |
| **Isolation** | Laines minérales (verre, roche), polystyrène expansé, polyuréthane, ouate de cellulose |
| **Plaques de plâtre** | BA13, plaques doubles, plaques techniques |
| **Cloisons et faux-plafonds** | Systèmes de cloisons démontables, dalles de plafond |
| **Menuiseries intérieures** | Portes intérieures, habillages, boiseries |
| **Revêtements de sol** | Parquets, sols stratifiés, moquettes |
| **Matériaux de couverture** | Tuiles, ardoises, membranes d'étanchéité |

### Ce qui n'est PAS couvert par Valobat

- Les déchets inertes classiques (béton, gravats, terres)
- Les déchets dangereux (amiante, produits chimiques)
- Les déchets de chantier non liés aux matériaux de construction (emballages, DIB)

Ces déchets restent acceptés sur notre site mais selon nos tarifs habituels.

## Qui peut bénéficier de la gratuité ?

La gratuité Valobat est réservée aux **professionnels détenteurs de déchets PMCB** dans le cadre de leur activité :

✅ **Artisans et entreprises du bâtiment** : poseurs de fenêtres, plaquistes, plombiers-chauffagistes, couvreurs
✅ **Entreprises de rénovation** : maîtres d'œuvre, entreprises générales
✅ **Promoteurs immobiliers** : dans le cadre de chantiers de construction ou rénovation
✅ **Bailleurs et gestionnaires immobiliers** : lors de travaux de réhabilitation

❌ **Les particuliers** ne bénéficient pas de la gratuité Valobat (ils peuvent cependant utiliser les points de collecte en négoce).

## Comment en bénéficier chez Vilbert Recyclage ?

### Étape 1 : Contactez-nous pour validation préalable

Avant tout apport, appelez-nous ou envoyez un email pour :
- Valider l'éligibilité de vos déchets au dispositif Valobat
- Obtenir l'autorisation d'apport (obligatoire — certification MASE)
- Convenir d'une date et d'un horaire

**📞 03 22 93 02 86 — recyclage@groupe-vilbert.fr**

### Étape 2 : Apportez vos déchets sur notre site

**Adresse** : Route nationale, 80630 Beauval (Somme)
**Horaires** : Lundi au Vendredi, 8h-12h / 13h-16h30

À votre arrivée, notre équipe vous accueille et vérifie la nature des déchets.

### Étape 3 : Documents fournis

Nous vous remettons :
- Un **bon de pesée** mentionnant le tonnage accepté
- Un **BSD** via Trackdéchets si applicable
- Une **attestation Valobat** confirmant la prise en charge gratuite

## Notre expertise pour les déchets PMCB

En tant qu'opérateur Valobat, nous avons développé des filières spécialisées pour les PMCB :

### Centre de démantèlement des menuiseries
Notre point fort : le démantèlement des fenêtres et menuiseries avec un **taux de recyclage supérieur à 92%**. PVC, aluminium, verre et acier sont séparés et orientés vers leur filière de recyclage respective.

### Traitement des isolants
Les isolants minéraux (laine de verre, laine de roche) et synthétiques sont traités dans des filières adaptées.

### Valorisation du plâtre
Les plaques de plâtre sont massifiées et orientées vers le recyclage en gypse.

## Pourquoi c'est important pour vous ?

### Économies directes
La gratuité des dépôts PMCB représente une économie réelle sur vos coûts de chantier, notamment pour les chantiers de rénovation énergétique (remplacement de fenêtres, isolation…).

### Conformité légale
Depuis le 1er mai 2023, la REP PMCB est pleinement opérationnelle. Vous avez l'obligation de justifier du bon traitement de vos déchets PMCB. Notre statut d'opérateur Valobat vous fournit les documents nécessaires.

### Argument commercial
Pouvoir dire à vos clients que vos déchets de chantier sont traités gratuitement via un éco-organisme agréé est un vrai argument RSE.

## Questions fréquentes sur Valobat

**Q : Je suis artisan poseur de fenêtres — suis-je concerné ?**
R : Oui, absolument. Les fenêtres en fin de vie que vous posez entrent directement dans le champ PMCB. Contactez-nous pour valider votre éligibilité.

**Q : Est-ce que je dois me déclarer quelque part ?**
R : Non, la déclaration se fait côté Vilbert Recyclage dans notre système. Vous avez juste à apporter vos déchets après validation préalable.

**Q : La gratuité s'applique-t-elle aussi au transport ?**
R : La gratuité couvre le traitement (dépôt sur site). Le transport depuis votre chantier jusqu'à notre site reste à votre charge, sauf si vous nous demandez une prestation d'enlèvement sur chantier (tarif habituel).

**Q : Existe-t-il d'autres éco-organismes PMCB ?**
R : Oui, d'autres éco-organismes opèrent (Ecominero, Ecomaison…). Vilbert Recyclage est opérateur agréé Valobat.

**Q : Est-ce qu'un particulier peut déposer ses déchets gratuitement ?**
R : Non, la gratuité Valobat est réservée aux professionnels détenteurs de déchets. Les particuliers peuvent se renseigner auprès des négoces de matériaux partenaires de Valobat.

---

📞 **03 22 93 02 86** — Pour toute question sur l'éligibilité de vos déchets
✉️ **recyclage@groupe-vilbert.fr**
📍 Route nationale, 80630 Beauval — Déchetterie Pro ouverte Lun-Ven 8h-16h30
    `,
  },
];
