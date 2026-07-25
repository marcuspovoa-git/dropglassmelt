import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pagina',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da seção', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } }),
    defineField({ name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'imagens', title: 'Galeria simples', type: 'array', of: [{ type: 'image' }] }),
    defineField({
      name: 'galeria',
      title: 'Galeria com legenda (usado na página VER)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'itemGaleria',
          fields: [
            defineField({ name: 'imagem', title: 'Imagem', type: 'image' }),
            defineField({
              name: 'legenda',
              title: 'Legenda (máx. 100 caracteres)',
              type: 'string',
              validation: (Rule) => Rule.max(100),
            }),
          ],
          preview: {
            select: { title: 'legenda', media: 'imagem' },
          },
        },
      ],
    }),
  ],
})
