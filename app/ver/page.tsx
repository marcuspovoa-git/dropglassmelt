import { client } from '../../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder({
  projectId: '645e5dvw',
  dataset: 'production',
})

function urlFor(source: any) {
  return builder.image(source)
}

export default async function Ver() {
  const pagina = await client.fetch(
    `*[_type == "pagina" && slug.current == "ver"][0]`
  )

  const galeria = pagina?.galeria ?? []

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 md:px-16">
      <a href="/" className="text-black/50 text-sm tracking-widest hover:text-black transition-colors">
        ← INÍCIO
      </a>

      <h1 className="text-6xl md:text-8xl font-black tracking-tight my-10">
        VER
      </h1>

      {galeria.length === 0 && (
        <p className="text-black/50 text-center mt-20">
          Nenhuma imagem cadastrada ainda.
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {galeria.map((item: any, i: number) => (
          <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
            <img
              src={urlFor(item.imagem).width(600).height(600).url()}
              alt={item.legenda || ''}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-40"
            />
            {item.legenda && (
              <div className="absolute inset-0 flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-center text-black text-sm md:text-base font-medium tracking-wide bg-white/0">
                  {item.legenda}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
