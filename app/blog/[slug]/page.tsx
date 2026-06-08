import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: ReactElement[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-[#1a5c28] mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl font-black text-[#1a5c28] mb-6">
          {line.replace("# ", "")}
        </h1>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-700">
              <span className="text-[#1a5c28] font-bold mt-0.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 pl-4">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="mb-2" />);
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/📞\s*\*\*(.*?)\*\*/g, "📞 <strong>$1</strong>")
              .replace(/✉️\s*\*\*(.*?)\*\*/g, "✉️ <strong>$1</strong>"),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="bg-[#1a5c28] text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="text-green-300 hover:text-white text-sm mb-6 inline-block"
          >
            ← Retour au blog
          </Link>
          <span className="inline-block text-xs text-[#f5b800] font-bold uppercase tracking-widest bg-black/20 px-3 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-green-200 text-sm">{post.date} — Vilbert Recyclage</p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Article */}
        <article className="lg:col-span-2 prose-custom">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            {renderMarkdown(post.content)}
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact card */}
          <div className="bg-[#1a5c28] text-white rounded-xl p-6">
            <h3 className="font-black text-lg mb-2">Besoin d&apos;un devis ?</h3>
            <div className="w-8 h-1 bg-[#f5b800] mb-4" />
            <p className="text-green-200 text-sm mb-4">
              Notre équipe vous répond du lundi au vendredi, 8h–12h / 13h–16h30.
            </p>
            <a
              href="tel:0322930286"
              className="block text-center bg-[#f5b800] text-gray-900 font-bold px-4 py-3 rounded hover:bg-[#ffd44d] transition-colors mb-3"
            >
              📞 03 22 93 02 86
            </a>
            <Link
              href="/contact"
              className="block text-center border border-white text-white text-sm font-semibold px-4 py-2 rounded hover:bg-white/10 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>

          {/* Other posts */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Autres articles</h3>
            <div className="space-y-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-white rounded-lg p-4 border border-gray-100 hover:border-[#1a5c28] transition-colors group"
                >
                  <span className="text-xs text-[#1a5c28] font-bold">{p.category}</span>
                  <p className="text-gray-700 text-sm font-medium mt-1 group-hover:text-[#1a5c28]">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Nos services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Location de bennes", href: "/services#bennes" },
                { label: "Collecte de déchets", href: "/services#collecte" },
                { label: "Transport", href: "/services#transport" },
                { label: "Traitement & valorisation", href: "/services#traitement" },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[#1a5c28] hover:underline font-medium"
                  >
                    → {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
