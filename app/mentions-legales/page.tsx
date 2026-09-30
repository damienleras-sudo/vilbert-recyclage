import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales | Vilbert Recyclage",
  description:
    "Mentions légales du site Vilbert Recyclage : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mentions légales",
  description:
    "Mentions légales du site Vilbert Recyclage : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies.",
  url: "https://www.vilbert-recyclage.fr/mentions-legales",
  inLanguage: "fr-FR",
  isPartOf: {
    "@type": "WebSite",
    name: "Vilbert Recyclage",
    url: "https://www.vilbert-recyclage.fr",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.vilbert-recyclage.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mentions légales",
        item: "https://www.vilbert-recyclage.fr/mentions-legales",
      },
    ],
  },
};

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-black text-[#1a5c28] mb-3 flex items-center gap-2">
        <span className="inline-block w-1 h-6 bg-[#f5b800] rounded-full" />
        {title}
      </h2>
      <div className="text-gray-700 text-sm leading-relaxed space-y-3 pl-3 border-l-2 border-gray-100">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Informations légales
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Mentions légales
          </h1>
          <p className="text-green-100 text-base max-w-xl">
            Conformément aux articles 6-III et 19 de la Loi n°2004-575 du
            21 juin 2004 pour la Confiance dans l&apos;Économie Numérique (LCEN).
          </p>
        </div>
        <div className="h-1.5 bg-[#f5b800] mt-8" />
      </section>

      <Breadcrumb
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Mentions légales" },
        ]}
      />

      {/* CONTENU */}
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          {/* Sommaire */}
          <nav
            aria-label="Sommaire des mentions légales"
            className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200"
          >
            <p className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-3">
              Sommaire
            </p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
              {[
                { href: "#editeur", label: "1. Éditeur du site" },
                { href: "#hebergement", label: "2. Hébergement" },
                { href: "#propriete-intellectuelle", label: "3. Propriété intellectuelle" },
                { href: "#donnees-personnelles", label: "4. Données personnelles" },
                { href: "#cookies", label: "5. Cookies" },
                { href: "#responsabilite", label: "6. Responsabilité" },
                { href: "#droit-applicable", label: "7. Droit applicable" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#1a5c28] hover:text-[#2a7a38] hover:underline transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-12">

            <Section id="editeur" title="1. Éditeur du site">
              <p>
                Le présent site <strong>https://www.vilbert-recyclage.fr</strong> est édité par :
              </p>
              <table className="w-full text-sm border-collapse mt-2">
                <tbody>
                  {[
                    ["Raison sociale", "Vilbert Recyclage"],
                    ["Forme juridique", "Filiale du Groupe Vilbert"],
                    ["Siège social", "Route nationale — 80630 Beauval (Somme)"],
                    ["Téléphone", "03 22 93 02 86"],
                    ["Email", "recyclage@groupe-vilbert.fr"],
                    ["Activité", "Gestion, collecte, transport et traitement de déchets BTP"],
                    ["SIRET", "À renseigner"],
                    ["Directeur de publication", "Groupe Vilbert"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-semibold text-gray-600 whitespace-nowrap align-top w-44">
                        {label}
                      </td>
                      <td className="py-2 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section id="hebergement" title="2. Hébergement">
              <p>Le site est hébergé par :</p>
              <table className="w-full text-sm border-collapse mt-2">
                <tbody>
                  {[
                    ["Société", "Vercel Inc."],
                    ["Adresse", "340 Pine Street, Suite 701 — San Francisco, CA 94104, USA"],
                    ["Site web", "https://vercel.com"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100">
                      <td className="py-2 pr-4 font-semibold text-gray-600 whitespace-nowrap align-top w-44">
                        {label}
                      </td>
                      <td className="py-2 text-gray-800">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            <Section id="propriete-intellectuelle" title="3. Propriété intellectuelle">
              <p>
                L&apos;ensemble des éléments constituant ce site (textes, images, graphismes,
                logo, icônes, sons, logiciels, etc.) est la propriété exclusive de
                <strong> Vilbert Recyclage</strong> ou de ses partenaires, et est protégé
                par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation ou
                exploitation de tout ou partie des éléments du site, quel que soit le moyen ou
                le procédé utilisé, est interdite sauf autorisation écrite préalable de
                Vilbert Recyclage.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments
                qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et
                poursuivie conformément aux dispositions des articles L.335-2 et suivants du
                Code de la Propriété Intellectuelle.
              </p>
            </Section>

            <Section id="donnees-personnelles" title="4. Données personnelles">
              <p>
                Vilbert Recyclage accorde une importance particulière à la protection de vos
                données personnelles et au respect du Règlement Général sur la Protection des
                Données (RGPD — Règlement UE 2016/679) et de la loi Informatique et Libertés
                modifiée.
              </p>
              <p>
                Les données collectées via ce site (formulaire de contact, demande de devis)
                sont traitées dans le seul but de répondre à vos demandes et de gérer la
                relation commerciale. Elles ne sont ni vendues ni transmises à des tiers sans
                votre consentement explicite.
              </p>
              <p>
                Conformément à la réglementation en vigueur, vous disposez d&apos;un droit
                d&apos;accès, de rectification, d&apos;effacement, de portabilité et
                d&apos;opposition concernant vos données. Pour exercer ces droits, contactez-nous à
                l&apos;adresse :{" "}
                <a
                  href="mailto:recyclage@groupe-vilbert.fr"
                  className="text-[#1a5c28] hover:underline font-medium"
                >
                  recyclage@groupe-vilbert.fr
                </a>
                .
              </p>
              <p>
                Pour plus d&apos;informations, consultez notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-[#1a5c28] hover:underline font-medium"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </Section>

            <Section id="cookies" title="5. Cookies">
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                tablette, smartphone) lors de la consultation d&apos;un site web. Il permet au site
                de mémoriser des informations relatives à votre navigation.
              </p>
              <p>
                Ce site est susceptible d&apos;utiliser des cookies techniques nécessaires à son
                bon fonctionnement et des cookies analytiques afin de mesurer l&apos;audience
                (nombre de visiteurs, pages consultées, etc.) dans le but d&apos;améliorer
                l&apos;expérience utilisateur.
              </p>
              <p>
                Conformément à la réglementation de la CNIL, vous pouvez à tout moment
                paramétrer votre navigateur pour refuser l&apos;enregistrement de cookies ou être
                informé lorsqu&apos;un cookie est déposé. Les paramètres varient selon votre
                navigateur : consultez la rubrique d&apos;aide de votre navigateur pour connaître
                la procédure à suivre.
              </p>
              <p>
                La désactivation des cookies peut entraîner l&apos;altération de certaines
                fonctionnalités du site.
              </p>
            </Section>

            <Section id="responsabilite" title="6. Responsabilité">
              <p>
                Vilbert Recyclage s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Cependant, Vilbert Recyclage ne peut
                garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises
                à disposition sur ce site et décline toute responsabilité pour toute imprécision,
                inexactitude ou omission.
              </p>
              <p>
                Vilbert Recyclage se réserve le droit de modifier les contenus de ce site à
                tout moment et sans préavis. Les informations disponibles sur ce site sont
                susceptibles d&apos;être modifiées à tout moment.
              </p>
              <p>
                Vilbert Recyclage ne saurait être tenu responsable des dommages directs ou
                indirects résultant de l&apos;utilisation de ce site ou de l&apos;accès à des sites
                tiers via des liens hypertextes présents sur ce site. Vilbert Recyclage ne
                contrôle pas ces sites et ne peut être tenu responsable de leur contenu.
              </p>
            </Section>

            <Section id="droit-applicable" title="7. Droit applicable et juridiction compétente">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de
                litige, et après tentative de résolution amiable, les tribunaux du ressort du
                siège social de Vilbert Recyclage seront seuls compétents.
              </p>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous
                contacter par email à{" "}
                <a
                  href="mailto:recyclage@groupe-vilbert.fr"
                  className="text-[#1a5c28] hover:underline font-medium"
                >
                  recyclage@groupe-vilbert.fr
                </a>{" "}
                ou par téléphone au{" "}
                <a
                  href="tel:0322930286"
                  className="text-[#1a5c28] hover:underline font-medium"
                >
                  03 22 93 02 86
                </a>
                .
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Dernière mise à jour : juin 2026
              </p>
            </Section>

          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            Une question sur vos données ou sur notre traitement des déchets BTP ?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0322930286"
              className="bg-[#1a5c28] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#2a7a38] transition-colors text-sm"
            >
              03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#1a5c28] text-[#1a5c28] font-bold px-6 py-3 rounded-xl hover:bg-[#1a5c28] hover:text-white transition-colors text-sm"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
