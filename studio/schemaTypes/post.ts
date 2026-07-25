import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo' },
    }),
    defineField({ name: 'capa', title: 'Imagem de capa', type: 'image' }),
    defineField({ name: 'categoria', title: 'Categoria', type: 'string' }),
    defineField({ name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'dataPublicacao', title: 'Data de publicação', type: 'datetime' }),
    defineField({ name: 'destaque', title: 'Destaque na home', type: 'boolean' }),
  ],
})