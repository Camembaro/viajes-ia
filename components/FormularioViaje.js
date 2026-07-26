'use client'

import { useState } from 'react'

export default function FormularioViaje({ onEnviar, cargando }) {
  const [nombre, setNombre] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [correo, setCorreo] = useState('')
  const [consulta, setConsulta] = useState('')

  function enviar(e) {
    e.preventDefault()

    if (!nombre || !whatsapp || !consulta) {
      alert('Completa Nombre, WhatsApp y tu consulta.')
      return
    }

    onEnviar({
      nombre,
      whatsapp,
      correo,
      consulta
    })
  }

  return (
    <form onSubmit={enviar} className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

      <h2 className="text-2xl font-bold text-center">
        ✈️ Viajes IA
      </h2>

      <p className="text-center text-gray-500">
        Encuentra el viaje perfecto y recibe las mejores opciones por WhatsApp.
      </p>

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />

      <input
        className="w-full border rounded-xl p-3"
        placeholder="WhatsApp"
        value={whatsapp}
        onChange={(e)=>setWhatsapp(e.target.value)}
      />

      <input
        className="w-full border rounded-xl p-3"
        placeholder="Correo (opcional)"
                  value={correo}
          onChange={(e)=>setCorreo(e.target.value)}
        />

        <textarea
          className="w-full border rounded-xl p-3"
          placeholder="¿Qué viaje estás buscando?"
          value={consulta}
          onChange={(e)=>setConsulta(e.target.value)}
        />

        <button
          type="submit"
          disabled={cargando}
          className="w-full bg-blue-600 text-white rounded-xl p-3 font-bold"
        >
          {cargando ? 'Enviando...' : 'Buscar mi viaje'}
        </button>

      </form>
    )
}
