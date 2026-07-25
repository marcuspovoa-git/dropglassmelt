import { client } from '../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const builder = createImageUrlBuilder({
  projectId: '645e5dvw',
  dataset: 'production',
})

function urlFor(source: any) {
  return builder.image(source)
}

export default async function BlogList() {
  const posts = await client.fetch(`*[_type == "post"] | order(dataPublicacao desc)`)

  return (
    <main className="min-h-screen bg-[#faf9f6] text-black px-6 py-16 md:px-0">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-black/50 text-sm tracking-widest hover:text-black transition-colors">
          ← INÍCIO
        </a>

        {posts.map((post: any, i: number) => (
          <article key={post._id} className="mt-20">
            {post.capa && (
              <img
                src={urlFor(post.capa).width(1200).url()}
                alt={post.titulo}
                className="w-full h-auto object-cover mb-10"
              />
            )}

            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">
              {post.titulo}
            </h1>

            {post.dataPublicacao && (
              <p className="text-sm text-black/40 mb-10 font-serif">
                {new Date(post.dataPublicacao).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}

            <div className="font-sans text-lg leading-relaxed space-y-6 text-black/90">
              {post.conteudo && <PortableText value={post.conteudo} />}
            </div>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-center text-black/40 mt-20">
            Nenhum post publicado ainda.
          </p>
        )}
      </div>
    </main>
  )
}
