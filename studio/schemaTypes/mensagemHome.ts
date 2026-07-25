import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'mensagemHome',
  title: 'Mensagens (Home)',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'E-mail', type: 'string' }),
    defineField({ name: 'mensagem', title: 'Mensagem', type: 'text' }),
    defineField({ name: 'dataCadastro', title: 'Data de cadastro', type: 'datetime' }),
  ],
})
