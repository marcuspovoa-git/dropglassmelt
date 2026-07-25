import { client } from '../../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder({
  projectId: '645e5dvw',
  dataset: 'production',
})

function urlFor(source: any) {
  return builder.image(source)
}

export default async function Blog() {
  const posts = await client.fetch(`*[_type == "post"] | order(dataPublicacao desc)`)

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-16">
      <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-16 text-center">
        BLOG
      </h1>

      <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-2">
        {posts.map((post: any) => (
          
          <a  key={post._id}
            href={`/blog/${post.slug?.current ?? ''}`}
            className="group block"
          >
            {post.capa && (
              <div className="overflow-hidden mb-4">
                <img
                  src={urlFor(post.capa).width(800).url()}
                  alt={post.titulo}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            )}
            {post.categoria && (
              <p className="text-xs tracking-widest uppercase text-white/50 mb-2">
                {post.categoria}
              </p>
            )}
            <h2 className="text-xl font-light tracking-wide group-hover:text-white/70 transition-colors">
              {post.titulo}
            </h2>
          </a>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-white/50 mt-20">
          Nenhum post publicado ainda.
        </p>
      )}
    </main>
  )
}
