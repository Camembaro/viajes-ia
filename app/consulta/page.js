'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase.js'
import FormularioViaje from '../../components/FormularioViaje'
export default function ConsultaViajes() {
  const [pregunta, setPregunta] = useState('')
const [mensaje, setMensaje] = useState('')
const [cargando, setCargando] = useState(false) 
 const [respuesta, setRespuesta] = useState('')
 

  async function enviar(e) {
    e.preventDefault()
    if (!pregunta.trim()) return

    setCargando(true)
    setRespuesta('')

    // 🤖 Generamos la respuesta igual que al principio
    setTimeout(async () => {
      let textoRespuesta = ''
      let datosCliente = {
        nombre: 'Consulta de viaje',
        comentario: pregunta,
        zona_puebla: 'Puebla',
        creado_en: new Date().toISOString()
      }

      if (pregunta.toLowerCase().includes("cancún") && pregunta.toLowerCase().includes("3 noches")) {
        textoRespuesta = `✅ Tu consulta: "${pregunta}"

💸 Con $30,000 tienes opciones completas:
• Vuelo redondo + Hotel 3 noches
• Traslados incluidos
• Salidas en agosto disponibles
• Te detallo precios exactos sin compromiso`
        datosCliente.interes = "Cancún - 3 noches"
      } else {
        textoRespuesta = `✅ Tu consulta: "${pregunta}"

Te armo tu cotización exacta: vuelos, hoteles y todo ajustado a tu presupuesto y fechas.`
        datosCliente.interes = "Consulta general"
      }

      setRespuesta(textoRespuesta)

      // 📥 GUARDAMOS AUTOMÁTICAMENTE EN TU LISTA
      await supabase.from('clientes_viajes').insert([datosCliente])

      setCargando(false)
    }, 1000)
  }
async function guardarProspecto(datos) {
  setCargando(true)

  const { error } = await supabase
    .from('clientes_viajes')
    .insert([{
      nombre: datos.nombre,
      whatsapp: datos.whatsapp,
      correo: datos.correo,
      comentario: datos.consulta,
      estado: 'Nuevo',
      creado_en: new Date().toISOString()
    }])

  if (error) {
    console.error(error)
    setMensaje('Ocurrió un problema. Intenta nuevamente.')
  } else {
    setMensaje(
      '✅ ¡Gracias! En unos minutos recibirás las mejores opciones de viaje por WhatsApp.'
    )
  }

  setCargando(false)
}
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">✈️ Consulta tu viaje</h1>
      <p className="mb-4">Escribe lo que buscas y te doy opciones y precios.</p>

      <form onSubmit={enviar} className="space-y-4">
        <textarea
          className="w-full p-3 border rounded h-28"
          placeholder="Ejemplo: Viaje a Cancún por 3 noches tengo $30000"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
        <button
          type="submit"
          disabled={cargando}
          className="px-5 py-2 bg-blue-600 text-white rounded disabled:bg-blue-300"
        >
          {cargando ? "Calculando..." : "Pedir información"}
        </button>
      </form>

      {respuesta && (
        <div className="mt-6 p-4 bg-gray-50 border rounded whitespace-pre-line">
          {respuesta}
          <p className="text-green-600 mt-3 font-medium">
  ✅ ¡Gracias! En unos minutos te enviaremos las mejores opciones por WhatsApp.
</p>
        </div>
      )}
     </main>
  )
}

