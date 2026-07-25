import { client } from '../../sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import GaleriaItem from '../../components/GaleriaItem'

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
    <main className="min-h-screen bg-white text-black px-6 py-24 md:py-16 md:px-16">
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
          <GaleriaItem
            key={i}
            imagemUrl={urlFor(item.imagem).width(600).height(600).url()}
            legenda={item.legenda}
          />
        ))}
      </div>
    </main>
  )
}
