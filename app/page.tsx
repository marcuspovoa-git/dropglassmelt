'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [resposta, setResposta] = useState<'sim' | 'nao' | null>(null)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <AnimatePresence mode="wait">
        {!resposta && (
          <motion.div
            key="pergunta"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-2">
              DROP&GLASS&MELT
            </h1>
            <p className="text-lg md:text-xl mt-8 mb-10 opacity-80">
              Oi, tudo bem? Quer ver uma coisa?
            </p>

            <div className="flex gap-6 justify-center">
              <button
                onClick={() => setResposta('sim')}
                className="border border-white px-8 py-2 tracking-widest hover:bg-white hover:text-black transition-colors duration-500"
              >
                SIM
              </button>
              <button
                onClick={() => setResposta('nao')}
                className="border border-white/40 px-8 py-2 tracking-widest text-white/60 hover:border-white hover:text-white transition-colors duration-500"
              >
                NÃO
              </button>
            </div>
          </motion.div>
        )}

        {resposta === 'sim' && (
          <motion.div
            key="sim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-light tracking-wide">
              então olha bem.
            </p>
          </motion.div>
        )}

        {resposta === 'nao' && (
          <motion.div
            key="nao"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-light tracking-wide">
              tudo bem. a gente espera.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}