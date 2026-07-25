import { client } from '../../../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const builder = createImageUrlBuilder({
  projectId: '645e5dvw',
  dataset: 'production',
})

function urlFor(source: any) {
  return builder.image(source)
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  )

  if (!post) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Post não encontrado.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <a href="/blog" className="text-white/50 text-sm tracking-widest hover:text-white transition-colors">
          ← VOLTAR
        </a>

        {post.capa && (
          <img
            src={urlFor(post.capa).width(1200).url()}
            alt={post.titulo}
            className="w-full h-auto object-cover my-8"
          />
        )}

        {post.categoria && (
          <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
            {post.categoria}
          </p>
        )}

        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-10">
          {post.titulo}
        </h1>

        <div className="prose prose-invert max-w-none font-light leading-relaxed">
          {post.conteudo && <PortableText value={post.conteudo} />}
        </div>
      </div>
    </main>
  )
}
