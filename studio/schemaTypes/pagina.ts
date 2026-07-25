import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pagina',
  title: 'Página',
  type: 'document',
  fields: [
    defineField({ name: 'titulo', title: 'Título da seção', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titulo' } }),
    defineField({ name: 'conteudo', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'imagens', title: 'Galeria', type: 'array', of: [{ type: 'image' }] }),
  ],
})