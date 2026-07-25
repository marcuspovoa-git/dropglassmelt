import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'listaEspera',
  title: 'Lista de Espera (CRIAR)',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'dataCadastro', title: 'Data de cadastro', type: 'datetime' }),
  ],
})
