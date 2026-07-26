'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase.js'

const CLAVE_ACCESO = 'tu_clave_segura_aqui' // Pon una que solo tú sepas

export default function ClientesViajes() {
  const [autorizado, setAutorizado] = useState(false)
  const [claveIngresada, setClaveIngresada] = useState('')
  const [clientes, setClientes] = useState([])
  const [cargando, setCargando] = useState(true)

  function verificarClave(e) {
    e.preventDefault()
    if (claveIngresada === CLAVE_ACCESO) setAutorizado(true)
    else alert('Clave incorrecta')
  }

  if (!autorizado) {
    return (
      <main className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">🔒 Acceso restringido</h2>
        <form onSubmit={verificarClave} className="space-y-3">
          <input
            type="password"
            placeholder="Ingresa tu clave"
            className="w-full p-3 border rounded"
            value={claveIngresada}
            onChange={(e) => setClaveIngresada(e.target.value)}
          />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Entrar</button>
        </form>
      </main>
    )
  }

  // ... aquí sigue el resto del código de la tabla que ya tenías
}

