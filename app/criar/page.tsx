'use client'

import { useState } from 'react'

export default function Criar() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro(false)

    try {
      const res = await fetch('/api/lista-espera', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Falha')

      setEnviado(true)
    } catch {
      setErro(true)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <a href="/" className="fixed top-6 left-6 text-white/50 text-sm tracking-widest hover:text-white transition-colors">
        ← INÍCIO
      </a>

      <div className="max-w-md w-full text-center">
        {!enviado ? (
          <>
            <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-4">
              CRIAR
            </h1>
            <p className="text-white/60 mb-10 font-light">
              A coleção está sendo criada. Deixa seu e-mail pra ser avisada quando lançar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="email"
                required
                placeholder="seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-white/30 py-2 text-center bg-transparent outline-none focus:border-white transition-colors"
              />

              <button
                type="submit"
                className="border border-white px-8 py-2 tracking-widest text-sm hover:bg-white hover:text-black transition-colors duration-500"
              >
                AVISA QUANDO LANÇAR
              </button>

              {erro && (
                <p className="text-red-400 text-sm">Algo deu errado. Tenta de novo.</p>
              )}
            </form>
          </>
        ) : (
          <p className="text-xl font-light tracking-wide">
            pronto. a gente avisa.
          </p>
        )}
      </div>
    </main>
  )
}
