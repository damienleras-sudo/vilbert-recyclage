import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente et d'Utilisation | Vilbert Recyclage",
  description:
    "Consultez les Conditions Générales de Vente et d'Utilisation de Vilbert Recyclage : location de bennes, collecte et traitement de déchets BTP en Hauts-de-France. Droit français, tribunal d'Amiens.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/conditions-generales",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Conditions Générales de Vente et d'Utilisation — Vilbert Recyclage",
  description:
    "Conditions Générales de Vente et d'Utilisation applicables aux services de Vilbert Recyclage : location de bennes, collecte et traitement de déchets BTP.",
  url: "https://www.vilbert-recyclage.fr/conditions-generales",
  inLanguage: "fr-FR",
  dateModified: "2026-06-11",
  publisher: {
    "@type": "Organization",
    name: "Vilbert Recyclage",
    url: "https://www.vilbert-recyclage.fr",
    telephone: "+33322930286",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Route nationale",
      addressLocality: "Beauval",
      postalCode: "80630",
      addressCountry: "FR",
    },
  },
};

const sections = [
  {
    id: "objet",
    titre: "1. Objet",
    contenu: (
      <>
        <p>
          Les présentes Conditions Générales de Vente et d&apos;Utilisation (ci-après
          «&nbsp;CGV/CGU&nbsp;») ont pour objet de définir les droits et obligations de la société{" "}
          <strong>Vilbert Recyclage</strong> (SAS au capital social inscrit au RCS d&apos;Amiens,
          dont le siège social est situé <strong>Route nationale, 80630 Beauval&nbsp;– Somme</strong>,
          téléphone&nbsp;: <a href="tel:0322930286" className="text-[#1a5c28] hover:underline">03&nbsp;22&nbsp;93&nbsp;02&nbsp;86</a>)
          et de ses clients dans le cadre&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>de la fourniture de services de location de bennes et de collecte de déchets&nbsp;;</li>
          <li>du traitement et de la valorisation des déchets issus du BTP&nbsp;;</li>
          <li>de la consultation et de l&apos;utilisation du site internet{" "}
            <strong>www.vilbert-recyclage.fr</strong>.</li>
        </ul>
        <p className="mt-3">
          Vilbert Recyclage est agréé <strong>Opérateur Valobat</strong> pour la filière de
          responsabilité élargie du producteur (REP) des produits et matériaux de construction
          du secteur du bâtiment.
        </p>
        <p className="mt-3">
          Toute commande ou utilisation des services de Vilbert Recyclage emporte l&apos;acceptation
          pleine et entière des présentes CGV/CGU.
        </p>
      </>
    ),
  },
  {
    id: "acceptation",
    titre: "2. Acceptation des conditions",
    contenu: (
      <>
        <p>
          Les présentes CGV/CGU sont opposables au client dès la passation de toute commande
          (par téléphone, formulaire en ligne, e-mail ou bon de commande signé). Le client
          reconnaît avoir pris connaissance des présentes conditions et les accepter sans réserve.
        </p>
        <p className="mt-3">
          Vilbert Recyclage se réserve le droit de modifier les présentes CGV/CGU à tout moment.
          Les conditions applicables sont celles en vigueur à la date de passation de la commande.
          La version actualisée est disponible en permanence sur le site{" "}
          <strong>www.vilbert-recyclage.fr/conditions-generales</strong>.
        </p>
      </>
    ),
  },
  {
    id: "services",
    titre: "3. Services proposés",
    contenu: (
      <>
        <p>Vilbert Recyclage propose notamment les services suivants&nbsp;:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Location de bennes&nbsp;:</strong> mise à disposition de bennes de
            5&nbsp;m³ à 30&nbsp;m³ pour la collecte de déchets BTP (inertes, DIB, plâtre,
            bois, métaux, déchets dangereux selon agrément).
          </li>
          <li>
            <strong>Collecte et transport&nbsp;:</strong> enlèvement des bennes pleines sur
            les chantiers et livraison sur le centre de traitement de Beauval.
          </li>
          <li>
            <strong>Traitement et valorisation&nbsp;:</strong> tri, concassage, criblage et
            valorisation des déchets inertes&nbsp;; orientation des autres flux vers les
            filières agréées.
          </li>
          <li>
            <strong>Déchetterie professionnelle&nbsp;:</strong> accueil en dépôt direct sur
            le site de Beauval, sur rendez-vous, pour les professionnels titulaires d&apos;un
            compte client.
          </li>
          <li>
            <strong>Service Valobat&nbsp;:</strong> collecte des déchets de produits et
            matériaux de construction dans le cadre du dispositif REP bâtiment.
          </li>
        </ul>
        <p className="mt-3">
          Les prestations sont réalisées dans un rayon couvrant principalement les départements
          de la Somme (80), du Pas-de-Calais (62), du Nord (59), de l&apos;Oise (60), de
          l&apos;Aisne (02) et de la Seine-Maritime (76).
        </p>
      </>
    ),
  },
  {
    id: "acces",
    titre: "4. Conditions d'accès au site de Beauval — Protocole MASE obligatoire",
    contenu: (
      <>
        <p>
          L&apos;accès au centre de traitement Vilbert Recyclage situé Route nationale,
          80630 Beauval est soumis au respect strict d&apos;un{" "}
          <strong>protocole de sécurité MASE (Manuel d&apos;Amélioration Sécurité
          des Entreprises)</strong>.
        </p>
        <p className="mt-3">
          Tout chauffeur ou représentant d&apos;une entreprise extérieure souhaitant accéder
          au site est tenu de&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            Prendre connaissance et signer le <strong>protocole de sécurité</strong> remis
            à l&apos;entrée du site (ou transmis préalablement par voie électronique).
          </li>
          <li>
            Porter obligatoirement les <strong>équipements de protection individuelle
            (EPI)</strong> requis&nbsp;: chaussures de sécurité, gilet haute visibilité,
            casque si zone de déchargement.
          </li>
          <li>
            Respecter les <strong>plans de circulation</strong> et les limitations de
            vitesse affichées sur le site (10 km/h).
          </li>
          <li>
            Ne déposer les déchets <strong>qu&apos;aux emplacements désignés</strong> par
            le personnel de Vilbert Recyclage.
          </li>
          <li>
            Signaler immédiatement tout incident ou accident au personnel du site.
          </li>
        </ul>
        <p className="mt-3">
          Le non-respect de ces règles peut entraîner le <strong>refus d&apos;accès au
          site</strong> sans que le client puisse prétendre à un dédommagement quelconque.
          Vilbert Recyclage se réserve le droit d&apos;expulser du site toute personne
          ne respectant pas les consignes de sécurité.
        </p>
        <p className="mt-3">
          Les entreprises extérieures intervenant sur le site doivent également fournir,
          avant toute intervention, un <strong>Plan de Prévention</strong> co-signé
          conformément à l&apos;article R.4511-1 du Code du travail.
        </p>
      </>
    ),
  },
  {
    id: "tarification",
    titre: "5. Tarification et devis",
    contenu: (
      <>
        <p>
          Les tarifs applicables sont ceux en vigueur au jour de la passation de la commande,
          tels qu&apos;indiqués sur le devis accepté par le client ou sur la grille tarifaire
          disponible sur le site <strong>www.vilbert-recyclage.fr/tarifs</strong>.
        </p>
        <p className="mt-3">
          Tous les prix sont indiqués en euros, <strong>hors taxe (HT)</strong>. La TVA au
          taux légal en vigueur est applicable et sera portée sur la facture.
        </p>
        <p className="mt-3">
          La tarification de la location de benne comprend&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>La mise à disposition de la benne pour une durée convenue (généralement 7 jours)&nbsp;;</li>
          <li>L&apos;enlèvement de la benne et son acheminement vers le centre de traitement&nbsp;;</li>
          <li>Le traitement des déchets dans la limite du tonnage forfaitaire ou avec pesée.</li>
        </ul>
        <p className="mt-3">
          Des <strong>frais supplémentaires</strong> peuvent s&apos;appliquer en cas de&nbsp;:
          dépassement de la durée de location, présence de déchets non conformes à la
          commande initiale, accès difficile au chantier, ou dépose hors zone.
        </p>
        <p className="mt-3">
          Tout devis est valable <strong>30 jours</strong> à compter de sa date d&apos;émission,
          sauf mention contraire.
        </p>
      </>
    ),
  },
  {
    id: "paiement",
    titre: "6. Modalités de paiement",
    contenu: (
      <>
        <p>
          Sauf accord préalable écrit, les factures sont payables à <strong>30 jours
          fin de mois</strong> à compter de la date d&apos;émission de la facture, par
          virement bancaire ou chèque à l&apos;ordre de Vilbert Recyclage.
        </p>
        <p className="mt-3">
          Pour les particuliers et les nouveaux clients professionnels, le paiement peut
          être exigé <strong>au comptant</strong>, avant ou au moment de la prestation.
        </p>
        <p className="mt-3">
          En cas de retard de paiement, conformément aux articles L.441-6 et D.441-5 du
          Code de commerce&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-1">
          <li>
            Des <strong>pénalités de retard</strong> sont exigibles de plein droit au taux
            de la BCE majoré de 10 points, sans mise en demeure préalable.
          </li>
          <li>
            Une <strong>indemnité forfaitaire de recouvrement</strong> de 40&nbsp;€ est
            automatiquement due.
          </li>
        </ul>
        <p className="mt-3">
          En cas de défaut de paiement, Vilbert Recyclage se réserve le droit de suspendre
          toute prestation en cours et de refuser toute nouvelle commande.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite-client",
    titre: "7. Responsabilité du client",
    contenu: (
      <>
        <p>Le client est seul responsable&nbsp;:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Du contenu de la benne&nbsp;:</strong> le client s&apos;engage à ne
            déposer que les types de déchets correspondant à la commande passée. Tout dépôt
            de déchet non conforme (déchets dangereux non déclarés, DEEE, amiante, etc.)
            engage la responsabilité exclusive du client et peut entraîner une facturation
            supplémentaire pour traitement spécifique.
          </li>
          <li>
            <strong>De la déclaration exacte des déchets&nbsp;:</strong> le client certifie
            la nature et la quantité des déchets lors de la commande. Toute fausse
            déclaration engage sa responsabilité civile et pénale.
          </li>
          <li>
            <strong>Des autorisations de voirie&nbsp;:</strong> si la benne est posée sur la
            voie publique, le client doit obtenir les autorisations nécessaires auprès des
            autorités compétentes. Vilbert Recyclage ne saurait être tenu responsable des
            infractions commises à ce titre.
          </li>
          <li>
            <strong>De la sécurité aux abords de la benne&nbsp;:</strong> le client est
            responsable de la signalisation et de la sécurisation de la benne sur son chantier.
          </li>
          <li>
            <strong>Du respect du protocole MASE</strong> lors de tout accès au site de
            Beauval (voir article 4).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "responsabilite-vilbert",
    titre: "8. Responsabilité de Vilbert Recyclage",
    contenu: (
      <>
        <p>
          Vilbert Recyclage s&apos;engage à fournir ses prestations avec le soin et la
          diligence d&apos;un professionnel du secteur. La responsabilité de Vilbert
          Recyclage est soumise aux limitations suivantes&nbsp;:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Délais de livraison et d&apos;enlèvement&nbsp;:</strong> les délais
            communiqués sont donnés à titre indicatif. Des retards dus à des causes
            extérieures (conditions météorologiques, trafic, force majeure) ne sauraient
            engager la responsabilité de Vilbert Recyclage.
          </li>
          <li>
            <strong>Dommages aux infrastructures&nbsp;:</strong> Vilbert Recyclage ne
            saurait être tenu responsable des dommages éventuels causés aux voies d&apos;accès
            ou aux infrastructures du client, sauf faute prouvée de sa part.
          </li>
          <li>
            <strong>Disponibilité du site internet&nbsp;:</strong> Vilbert Recyclage ne
            garantit pas l&apos;accès permanent au site www.vilbert-recyclage.fr et ne
            saurait être tenu responsable des interruptions de service liées à la maintenance
            ou à des causes techniques indépendantes de sa volonté.
          </li>
          <li>
            <strong>Plafond de responsabilité&nbsp;:</strong> en tout état de cause, la
            responsabilité de Vilbert Recyclage ne pourra excéder le montant des sommes
            effectivement versées par le client au titre de la prestation concernée.
          </li>
        </ul>
        <p className="mt-3">
          Vilbert Recyclage est titulaire d&apos;une assurance responsabilité civile
          professionnelle et d&apos;une assurance transport en vigueur.
        </p>
      </>
    ),
  },
  {
    id: "propriete-intellectuelle",
    titre: "9. Propriété intellectuelle",
    contenu: (
      <>
        <p>
          L&apos;ensemble des éléments constituant le site www.vilbert-recyclage.fr
          (textes, images, logos, graphismes, structure, code source) est la propriété
          exclusive de <strong>Vilbert Recyclage</strong> ou fait l&apos;objet d&apos;une
          autorisation d&apos;utilisation.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication, transmission ou
          dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé
          que ce soit et sur quelque support que ce soit, est interdite sans l&apos;autorisation
          écrite préalable de Vilbert Recyclage.
        </p>
        <p className="mt-3">
          Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la
          responsabilité civile et pénale de son auteur, conformément aux articles
          L.335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <p className="mt-3">
          La marque <strong>Vilbert Recyclage</strong> et le logo associé sont des marques
          déposées. Toute utilisation non autorisée est susceptible de poursuites judiciaires.
        </p>
      </>
    ),
  },
  {
    id: "donnees-personnelles",
    titre: "10. Données personnelles",
    contenu: (
      <>
        <p>
          Vilbert Recyclage traite les données personnelles collectées via le site et dans
          le cadre de ses relations commerciales conformément au{" "}
          <strong>Règlement Général sur la Protection des Données (RGPD — UE 2016/679)</strong>
          {" "}et à la loi Informatique et Libertés modifiée.
        </p>
        <p className="mt-3">
          <strong>Données collectées&nbsp;:</strong> nom, prénom, raison sociale, adresse,
          téléphone, adresse e-mail, informations de facturation, historique des commandes.
        </p>
        <p className="mt-3">
          <strong>Finalités&nbsp;:</strong> gestion des commandes, facturation, suivi
          commercial, envoi de devis, obligations légales (traçabilité des déchets).
        </p>
        <p className="mt-3">
          <strong>Durée de conservation&nbsp;:</strong> les données sont conservées pour la
          durée nécessaire à l&apos;exécution du contrat et aux obligations légales (10 ans
          pour les documents comptables).
        </p>
        <p className="mt-3">
          <strong>Droits des personnes&nbsp;:</strong> conformément au RGPD, vous disposez
          d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
          de portabilité et d&apos;opposition. Pour exercer ces droits, contactez&nbsp;:
        </p>
        <address className="mt-2 not-italic bg-gray-50 rounded-lg p-4 text-sm">
          <strong>Vilbert Recyclage</strong><br />
          Route nationale, 80630 Beauval (Somme)<br />
          Tél.&nbsp;: <a href="tel:0322930286" className="text-[#1a5c28] hover:underline">03&nbsp;22&nbsp;93&nbsp;02&nbsp;86</a>
        </address>
        <p className="mt-3">
          En cas de réclamation, vous pouvez saisir la{" "}
          <strong>Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</strong>{" "}
          — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1a5c28] hover:underline">www.cnil.fr</a>.
        </p>
      </>
    ),
  },
  {
    id: "droit-applicable",
    titre: "11. Droit applicable et juridiction compétente",
    contenu: (
      <>
        <p>
          Les présentes CGV/CGU sont soumises au <strong>droit français</strong>.
        </p>
        <p className="mt-3">
          En cas de litige relatif à l&apos;interprétation, l&apos;exécution ou la résiliation
          des présentes CGV/CGU, les parties s&apos;engagent à rechercher une solution amiable
          avant tout recours judiciaire.
        </p>
        <p className="mt-3">
          À défaut d&apos;accord amiable, tout litige sera porté devant le{" "}
          <strong>Tribunal Judiciaire d&apos;Amiens</strong>, auquel les parties attribuent
          compétence exclusive, nonobstant pluralité de défendeurs ou appel en garantie,
          même pour les procédures d&apos;urgence ou les procédures conservatoires.
        </p>
        <p className="mt-3">
          Pour les clients consommateurs (personnes physiques n&apos;agissant pas dans un
          cadre professionnel), cette clause n&apos;affecte pas l&apos;application des
          dispositions protectrices du Code de la consommation.
        </p>
      </>
    ),
  },
];

export default function ConditionsGeneralesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Conditions Générales" },
        ]}
      />

      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Mentions légales
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Conditions Générales de Vente{" "}
            <span className="text-[#f5b800]">et d&apos;Utilisation</span>
          </h1>
          <p className="text-green-200 text-base max-w-2xl">
            Vilbert Recyclage &mdash; Route nationale, 80630 Beauval (Somme) &mdash; Tél.&nbsp;
            <a href="tel:0322930286" className="text-[#f5b800] hover:underline font-semibold">
              03&nbsp;22&nbsp;93&nbsp;02&nbsp;86
            </a>
          </p>
          <p className="text-green-300 text-sm mt-2">
            Dernière mise à jour&nbsp;: 11 juin 2026
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      {/* SOMMAIRE */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">
            Sommaire
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[#1a5c28] hover:underline"
                >
                  {s.titre}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTENU */}
      <main className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-14">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-xl font-black text-[#1a5c28] mb-1">{s.titre}</h2>
              <div className="w-10 h-1 bg-[#f5b800] mb-5" />
              <div className="text-gray-700 leading-relaxed space-y-3 text-sm md:text-base">
                {s.contenu}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section className="bg-[#1a5c28] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-xl font-black mb-2">Une question sur nos conditions&nbsp;?</h2>
          <p className="text-green-200 text-sm mb-6">
            Notre équipe est disponible du lundi au vendredi pour vous répondre.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="bg-[#f5b800] text-gray-900 font-black px-7 py-3 rounded-xl hover:bg-[#ffd44d] transition-colors text-sm"
            >
              03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-7 py-3 rounded-xl hover:bg-white hover:text-[#1a5c28] transition-colors text-sm"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
