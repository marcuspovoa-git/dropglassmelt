'use client'

import { useState } from 'react'

export default function GaleriaItem({ imagemUrl, legenda }: { imagemUrl: string; legenda?: string }) {
  const [ativo, setAtivo] = useState(false)

  const imagemOpacidade = ativo ? 'opacity-40' : 'opacity-100 md:group-hover:opacity-40'
  const legendaOpacidade = ativo ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'

  return (
    <div
      onClick={() => setAtivo(!ativo)}
      className="relative aspect-square overflow-hidden cursor-pointer group"
    >
      <img
        src={imagemUrl}
        alt={legenda || ''}
        className={`w-full h-full object-cover transition-opacity duration-500 ${imagemOpacidade}`}
      />
      {legenda && (
        <div
          className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-500 ${legendaOpacidade}`}
        >
          <p className="text-center text-black text-sm md:text-base font-medium tracking-wide">
            {legenda}
          </p>
        </div>
      )}
    </div>
  )
}
