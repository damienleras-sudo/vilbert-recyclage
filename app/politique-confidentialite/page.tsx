import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Vilbert Recyclage",
  description:
    "Consultez la politique de confidentialité de Vilbert Recyclage : données collectées, finalités, droits RGPD, cookies et coordonnées du responsable de traitement.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/politique-confidentialite",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Politique de confidentialité — Vilbert Recyclage",
  url: "https://www.vilbert-recyclage.fr/politique-confidentialite",
  description:
    "Politique de confidentialité et de protection des données personnelles de Vilbert Recyclage, conformément au RGPD.",
  inLanguage: "fr",
  publisher: {
    "@type": "Organization",
    name: "Vilbert Recyclage",
    url: "https://www.vilbert-recyclage.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Route nationale",
      addressLocality: "Beauval",
      postalCode: "80630",
      addressCountry: "FR",
    },
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Mentions légales
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Politique de <span className="text-[#f5b800]">confidentialité</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés,
            Vilbert Recyclage vous informe de la manière dont vos données personnelles sont collectées
            et traitées.
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      <Breadcrumb
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
      />

      {/* CONTENU */}
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-14">

          {/* Mise à jour */}
          <p className="text-sm text-gray-500">
            Dernière mise à jour&nbsp;: <time dateTime="2025-01-01">1er janvier 2025</time>
          </p>

          {/* 1 — RESPONSABLE DU TRAITEMENT */}
          <section id="responsable">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">1</span>
              Responsable du traitement
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                <strong>Vilbert Recyclage</strong><br />
                Route nationale<br />
                80630 Beauval (Somme) — France<br />
                Email&nbsp;: <a href="mailto:recyclage@groupe-vilbert.fr" className="text-[#1a5c28] underline hover:no-underline">recyclage@groupe-vilbert.fr</a>
              </p>
            </div>
          </section>

          {/* 2 — DONNÉES COLLECTÉES */}
          <section id="donnees-collectees">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">2</span>
              Données collectées
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Vilbert Recyclage collecte uniquement les données strictement nécessaires à la fourniture
              de ses services. Les catégories de données traitées sont les suivantes&nbsp;:
            </p>
            <div className="space-y-4">
              {[
                {
                  titre: "Formulaires de contact et de devis",
                  contenu:
                    "Nom, prénom, raison sociale, adresse postale, numéro de téléphone, adresse email, message libre. Ces données peuvent être saisies partiellement (formulaire abandonné) : seules les données effectivement soumises sont conservées.",
                },
                {
                  titre: "Contact téléphonique",
                  contenu:
                    "Lors d'un appel, nous pouvons collecter le numéro de téléphone appelant, votre nom et les informations que vous communiquez oralement (nature du chantier, volume estimé, adresse de livraison).",
                },
                {
                  titre: "Contact par email",
                  contenu:
                    "Adresse email de l'expéditeur, objet et contenu du message, éventuelles pièces jointes (plans, photos de chantier). Les métadonnées du message (date, heure, adresse IP de l'expéditeur) peuvent être conservées par notre prestataire de messagerie.",
                },
                {
                  titre: "Données de navigation",
                  contenu:
                    "Adresse IP, type de navigateur, pages visitées, durée des sessions, via les outils de mesure d'audience (voir section Cookies).",
                },
              ].map(({ titre, contenu }) => (
                <div key={titre} className="border-l-4 border-[#1a5c28] pl-4">
                  <h3 className="font-bold text-gray-900 mb-1">{titre}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{contenu}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3 — FINALITÉS ET BASE LÉGALE */}
          <section id="finalites">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">3</span>
              Finalités et base légale
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a5c28] text-white">
                    <th className="px-4 py-3 font-semibold rounded-tl-lg">Finalité</th>
                    <th className="px-4 py-3 font-semibold">Base légale (RGPD art. 6)</th>
                    <th className="px-4 py-3 font-semibold rounded-tr-lg">Données concernées</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Répondre à une demande de devis ou d'information", "Intérêt légitime (art. 6.1.f) / Exécution d'un contrat (art. 6.1.b)", "Coordonnées, message"],
                    ["Gestion de la relation client et facturation", "Exécution du contrat (art. 6.1.b) / Obligation légale (art. 6.1.c)", "Coordonnées, données contractuelles"],
                    ["Amélioration du site et mesure d'audience", "Consentement (art. 6.1.a)", "Données de navigation, cookies"],
                    ["Prospection commerciale (relance devis)", "Intérêt légitime (art. 6.1.f)", "Email, téléphone"],
                    ["Obligations comptables et fiscales", "Obligation légale (art. 6.1.c)", "Données de facturation"],
                  ].map(([finalite, base, donnees], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800">{finalite}</td>
                      <td className="px-4 py-3 text-gray-600">{base}</td>
                      <td className="px-4 py-3 text-gray-600">{donnees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 — DURÉE DE CONSERVATION */}
          <section id="conservation">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">4</span>
              Durée de conservation
            </h2>
            <div className="space-y-3">
              {[
                { categorie: "Prospects (devis non abouti)", duree: "3 ans à compter du dernier contact" },
                { categorie: "Données clients actifs", duree: "Durée de la relation contractuelle" },
                { categorie: "Données clients inactifs", duree: "5 ans après la fin du contrat (prescription civile)" },
                { categorie: "Pièces comptables et fiscales", duree: "10 ans (obligation légale — Code de commerce)" },
                { categorie: "Données de navigation / cookies analytiques", duree: "13 mois maximum (recommandation CNIL)" },
                { categorie: "Formulaires abandonnés", duree: "30 jours, puis suppression automatique" },
              ].map(({ categorie, duree }) => (
                <div key={categorie} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="font-semibold text-gray-800 sm:w-1/2">{categorie}</span>
                  <span className="text-gray-600 text-sm sm:w-1/2">{duree}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5 — DROITS DES PERSONNES */}
          <section id="droits">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">5</span>
              Vos droits
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants sur vos données personnelles.
              Ces droits peuvent être exercés à tout moment en contactant notre délégué à la protection des données
              (voir section 8).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  titre: "Droit d'accès",
                  description:
                    "Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie.",
                  article: "Art. 15",
                },
                {
                  titre: "Droit de rectification",
                  description:
                    "Faire corriger des données inexactes ou incomplètes vous concernant.",
                  article: "Art. 16",
                },
                {
                  titre: "Droit à l'effacement",
                  description:
                    "Demander la suppression de vos données, sous réserve des obligations légales de conservation.",
                  article: "Art. 17",
                },
                {
                  titre: "Droit à la portabilité",
                  description:
                    "Recevoir vos données dans un format structuré, lisible par machine, et les transmettre à un autre responsable.",
                  article: "Art. 20",
                },
                {
                  titre: "Droit d'opposition",
                  description:
                    "Vous opposer au traitement fondé sur l'intérêt légitime, notamment à la prospection commerciale.",
                  article: "Art. 21",
                },
                {
                  titre: "Droit à la limitation",
                  description:
                    "Obtenir le gel temporaire du traitement de vos données dans les cas prévus par le règlement.",
                  article: "Art. 18",
                },
              ].map(({ titre, description, article }) => (
                <div key={titre} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{titre}</h3>
                    <span className="text-xs text-[#1a5c28] font-semibold bg-green-50 px-2 py-0.5 rounded-full">
                      {article}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700 text-sm leading-relaxed bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3">
              <strong>Délai de réponse&nbsp;:</strong> Nous nous engageons à répondre à toute demande
              d'exercice de droits dans un délai d'<strong>un mois</strong> à compter de la réception
              de votre demande (pouvant être prolongé de deux mois supplémentaires en cas de complexité).
              Une pièce d'identité peut être demandée pour vérifier votre identité.
            </p>
          </section>

          {/* 6 — COOKIES */}
          <section id="cookies">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">6</span>
              Cookies et traceurs
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le site <strong>www.vilbert-recyclage.fr</strong> utilise des cookies et traceurs
              conformément aux recommandations de la CNIL.
            </p>
            <div className="space-y-4">
              {[
                {
                  type: "Cookies strictement nécessaires",
                  description:
                    "Indispensables au fonctionnement du site (mémorisation du consentement, sécurité). Aucun consentement requis.",
                  consentement: "Non requis",
                  couleur: "bg-green-50 border-green-200",
                },
                {
                  type: "Cookies analytiques",
                  description:
                    "Mesure d'audience (pages vues, temps de session, provenance). Données anonymisées ou pseudonymisées. Durée maximale : 13 mois.",
                  consentement: "Consentement requis",
                  couleur: "bg-yellow-50 border-yellow-200",
                },
                {
                  type: "Cookies de préférence",
                  description:
                    "Mémorisation de vos préférences de navigation (langue, région). Durée maximale : 13 mois.",
                  consentement: "Consentement requis",
                  couleur: "bg-yellow-50 border-yellow-200",
                },
              ].map(({ type, description, consentement, couleur }) => (
                <div key={type} className={`border rounded-xl p-5 ${couleur}`}>
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-bold text-gray-900">{type}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${consentement === "Non requis" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                      {consentement}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Vous pouvez retirer votre consentement à tout moment via le bandeau cookies présent sur
              le site, ou en paramétrant votre navigateur pour refuser les cookies. Le retrait du
              consentement ne porte pas atteinte à la licéité des traitements effectués avant celui-ci.
            </p>
          </section>

          {/* 7 — HÉBERGEMENT */}
          <section id="hebergement">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">7</span>
              Hébergement et transferts hors UE
            </h2>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Vercel Inc. (États-Unis)</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Le site est hébergé par <strong>Vercel Inc.</strong>, dont le siège social est établi
                aux États-Unis (340 S Lemon Ave #4133, Walnut, CA 91789). L'hébergement implique un
                transfert de données personnelles (notamment les adresses IP et données de navigation)
                vers les États-Unis, pays ne bénéficiant pas d'une décision d'adéquation de la
                Commission européenne au même niveau que l'EEE.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Ce transfert est encadré par les <strong>Clauses Contractuelles Types (CCT)</strong>
                adoptées par la Commission européenne (décision 2021/914), garantissant un niveau de
                protection adéquat de vos données. Vercel Inc. est également certifié{" "}
                <strong>EU-U.S. Data Privacy Framework</strong>, reconnu par décision d'adéquation
                de la Commission européenne du 10 juillet 2023.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Pour plus d'informations sur les pratiques de traitement de Vercel&nbsp;:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a5c28] underline hover:no-underline"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </section>

          {/* 8 — CONTACT DPO */}
          <section id="contact-dpo">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">8</span>
              Contact — Délégué à la protection des données
            </h2>
            <div className="bg-[#1a5c28] text-white rounded-2xl p-6">
              <p className="mb-4 leading-relaxed">
                Pour exercer vos droits ou pour toute question relative au traitement de vos
                données personnelles, vous pouvez contacter notre référent protection des données&nbsp;:
              </p>
              <div className="space-y-2">
                <p>
                  <span className="text-green-200 text-sm">Courrier postal</span><br />
                  <strong>Vilbert Recyclage — Protection des données</strong><br />
                  Route nationale — 80630 Beauval
                </p>
                <p>
                  <span className="text-green-200 text-sm">Email</span><br />
                  <a
                    href="mailto:recyclage@groupe-vilbert.fr"
                    className="font-semibold text-[#f5b800] hover:underline"
                  >
                    recyclage@groupe-vilbert.fr
                  </a>
                </p>
              </div>
              <p className="mt-4 text-green-100 text-sm">
                Merci de mentionner dans votre demande&nbsp;: vos nom et prénom, votre adresse email
                ou postale, et la nature précise de votre demande. Une pièce d'identité pourra être
                demandée afin de vérifier votre identité et prévenir toute usurpation.
              </p>
            </div>
          </section>

          {/* 9 — RÉCLAMATION CNIL */}
          <section id="cnil">
            <h2 className="text-2xl font-black text-[#1a5c28] mb-4 flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1a5c28] text-white text-sm font-bold flex-shrink-0">9</span>
              Réclamation auprès de la CNIL
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous estimez que le traitement de vos données personnelles n'est pas conforme
              au RGPD, vous avez le droit d'introduire une réclamation auprès de l'autorité
              de contrôle compétente&nbsp;:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-1">
                Commission Nationale de l'Informatique et des Libertés (CNIL)
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                3 place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07<br />
                Tél.&nbsp;: <a href="tel:+33153732222" className="text-[#1a5c28] hover:underline">01 53 73 22 22</a><br />
                Site web&nbsp;:{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a5c28] underline hover:no-underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Nous vous encourageons néanmoins à nous contacter en premier lieu afin que nous
              puissions répondre à votre demande dans les meilleurs délais.
            </p>
          </section>

        </div>
      </main>

      {/* CTA bas de page */}
      <section className="bg-gray-50 border-t border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">
            Des questions sur vos données ?{" "}
            <a
              href="mailto:recyclage@groupe-vilbert.fr"
              className="text-[#1a5c28] font-semibold hover:underline"
            >
              recyclage@groupe-vilbert.fr
            </a>
          </p>
          <a
            href="/contact"
            className="bg-[#1a5c28] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#2a7a38] transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </>
  );
}
