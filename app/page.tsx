'use client'

import { useState, useEffect } from 'react'
import Menu from '../components/Menu'

export default function Home() {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    const jaViu = localStorage.getItem('dgm_formulario_visto')
    if (!jaViu) {
      setMostrar(true)
    }
  }, [])

  function fecharEMarcar() {
    setMostrar(false)
    localStorage.setItem('dgm_formulario_visto', 'true')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => {
      fecharEMarcar()
    }, 2000)
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      fecharEMarcar()
    }
  }

  return (
    <>
      <Menu />
      <main
        onClick={handleOverlayClick}
        className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fundo-home.jpeg')" }}
      >
        {mostrar && (
          <div className="bg-white/90 backdrop-blur-sm max-w-md w-full p-8 md:p-10 text-center transition-opacity duration-700">
            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h1 className="text-xl font-light tracking-wide mb-6">
                  Deixa seu e-mail e uma mensagem pra gente
                </h1>

                <input
                  type="email"
                  required
                  placeholder="seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-black/30 py-2 text-center bg-transparent outline-none focus:border-black transition-colors"
                />

                <textarea
                  required
                  placeholder="sua mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={3}
                  className="w-full border-b border-black/30 py-2 text-center bg-transparent outline-none focus:border-black transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="border border-black px-8 py-2 tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-500"
                >
                  ENVIAR
                </button>
              </form>
            ) : (
              <p className="text-lg font-light tracking-wide">
                obrigada. a gente leu.
              </p>
            )}
          </div>
        )}
      </main>
    </>
  )
}
