'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function PortadaViajesIA() {
  const [form, setForm] = useState({nombre:'', correo:'', telefono:'', destino:'', fecha:'', presupuesto:''})
  const [mensaje, setMensaje] = useState('')

  const guardarCliente = async (e) => {
    e.preventDefault()
    setMensaje('Guardando tu solicitud...')
    const { data, error } = await supabase
  .from('solicitudes')
  .insert([form])

console.log(data)
console.log(error)

if (error) {
  setMensaje(error.message)
  return
}
    setMensaje('✅ ¡Solicitud enviada! Te contactamos en menos de 24h')
    setForm({nombre:'', correo:'', telefono:'', destino:'', fecha:'', presupuesto:''})
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">✈️ Viajes IA</h1>
        <a href="/consulta" className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition">Consultar con IA</a>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Tu viaje ideal, diseñado con inteligencia</h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Paquetes exclusivos, precios reales y atención personalizada. Sin sorpresas.</p>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Solicita tu cotización sin compromiso</h3>
          <form onSubmit={guardarCliente} className="space-y-4 text-left">
            <input type="text" placeholder="Tu nombre completo" required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Correo electrónico" required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.correo} onChange={e=>setForm({...form, correo:e.target.value})} />
              <input type="tel" placeholder="WhatsApp / Teléfono" required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.telefono} onChange={e=>setForm({...form, telefono:e.target.value})} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="¿A dónde quieres ir?" required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.destino} onChange={e=>setForm({...form, destino:e.target.value})} />
              <input type="date" required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.fecha} onChange={e=>setForm({...form, fecha:e.target.value})} />
              <input type="text" placeholder="Presupuesto aproximado" required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={form.presupuesto} onChange={e=>setForm({...form, presupuesto:e.target.value})} />
            </div>

            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-lg transition shadow-lg">
              📩 Recibir cotización personalizada
            </button>
            {mensaje && <p className="text-center mt-3 text-sm">{mensaje}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

