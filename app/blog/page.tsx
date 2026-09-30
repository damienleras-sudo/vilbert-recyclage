import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog Déchets BTP & Recyclage Somme | Vilbert Recyclage",
  description:
    "Conseils pratiques, réglementation et actualités sur les déchets BTP et le recyclage dans la Somme. Articles rédigés par les experts de Vilbert Recyclage, Beauval.",
  alternates: {
    canonical: "https://www.vilbert-recyclage.fr/blog",
  },
  openGraph: {
    title: "Blog Déchets BTP & Recyclage Somme | Vilbert Recyclage",
    description:
      "Conseils pratiques, réglementation et actualités sur les déchets BTP et le recyclage dans la Somme. Articles rédigés par les experts de Vilbert Recyclage, Beauval.",
    url: "https://www.vilbert-recyclage.fr/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const categories = ["Tous", "Conseils pratiques", "Réglementation", "Environnement", "Professionnels"];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Conseils & <span className="text-[#f5b800]">Actualités</span>
          </h1>
          <p className="text-green-100 text-lg max-w-2xl">
            Retrouvez nos articles sur la gestion des déchets BTP, la réglementation,
            le recyclage et les bonnes pratiques environnementales.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-default ${
                  cat === "Tous"
                    ? "bg-[#1a5c28] text-white"
                    : "bg-white text-gray-600 border border-gray-200"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow group border border-gray-100"
              >
                <div className="bg-[#1a5c28] h-2" />
                <div className="p-6">
                  <span className="inline-block text-xs text-[#1a5c28] font-bold uppercase tracking-wide bg-green-50 px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-[#1a5c28] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-[#1a5c28] text-sm font-bold group-hover:underline">
                      Lire la suite →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">
            Une question sur vos déchets de chantier ?
          </h2>
          <p className="text-gray-700 mb-6">
            Notre équipe est disponible du lundi au vendredi pour vous conseiller.
          </p>
          <a
            href="tel:0322930286"
            className="inline-block bg-gray-900 text-white font-bold px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            📞 03 22 93 02 86
          </a>
        </div>
      </section>
    </>
  );
}
