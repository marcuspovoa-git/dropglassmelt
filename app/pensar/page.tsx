import { client } from '../../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

const builder = createImageUrlBuilder({
  projectId: '645e5dvw',
  dataset: 'production',
})

function urlFor(source: any) {
  return builder.image(source)
}

export default async function Pagina() {
  const pagina = await client.fetch(
    `*[_type == "pagina" && slug.current == "pensar"][0]`
  )

  if (!pagina) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <p className="text-white/50 text-center">
          Conteúdo ainda não cadastrado no painel.
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <a href="/" className="text-white/50 text-sm tracking-widest hover:text-white transition-colors">
          ← INÍCIO
        </a>

        <h1 className="text-3xl md:text-4xl font-light tracking-wide my-10">
          {pagina.titulo}
        </h1>

        <div className="prose prose-invert max-w-none font-light leading-relaxed">
          {pagina.conteudo && <PortableText value={pagina.conteudo} />}
        </div>

        {pagina.imagens && pagina.imagens.length > 0 && (
          <div className="grid gap-6 mt-12 md:grid-cols-2">
            {pagina.imagens.map((img: any, i: number) => (
              <img
                key={i}
                src={urlFor(img).width(800).url()}
                alt=""
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
