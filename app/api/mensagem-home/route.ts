import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const client = createClient({
  projectId: '645e5dvw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    const { email, mensagem } = await request.json()

    if (!email || !mensagem) {
      return NextResponse.json({ error: 'Campos obrigatórios' }, { status: 400 })
    }

    await client.create({
      _type: 'mensagemHome',
      email,
      mensagem,
      dataCadastro: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao cadastrar' }, { status: 500 })
  }
}
