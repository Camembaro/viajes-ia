'use client'
import { useState } from 'react';

export default function ViajesIA() {
  const whatsapp = "522361106938";
  const [form, setForm] = useState({
    destino:'', fecha:'', personas:'', noches:'', presupuesto:'', nombre:'', telefono:''
  });
  const [msg, setMsg] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setCargando(true);
    setMsg('');
    try {
      const res = await fetch('/api/guardar', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(res.ok){
        setMsg(`✅ ¡Solicitud recibida, ${form.nombre}!

Estoy investigando en tiempo real las mejores opciones para:
📍 ${form.destino}
📅 Fecha: ${form.fecha}
👥 ${form.personas} viajeros — ${form.noches} noches
💵 Presupuesto: $${form.presupuesto || 'A consultar'}

Buscaré hoteles calificados, vuelos convenientes y precios reales de agencias certificadas.
Muy pronto te envío la propuesta completa a tu WhatsApp ${form.telefono}.`);
        setForm({destino:'', fecha:'', personas:'', noches:'', presupuesto:'', nombre:'', telefono:''});
      }else{
        setMsg('⚠️ Intenta nuevamente por favor.');
      }
    }catch{
      setMsg('⚠️ Revisa tu conexión y vuelve a intentar.');
    }
    setCargando(false);
  };

  return (
    <main className="min-h-screen text-white">
      {/* FONDO PROFESIONAL CON IMÁGENES DESTACADAS */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/50 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90" 
          alt="Viajes y turismo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-xl mx-auto p-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-cyan-300 drop-shadow-lg">ViajesIA</h1>
          <p className="text-xl md:text-2xl mt-3 text-blue-100 font-light">Tu viaje de ensueño, diseñado a la medida</p>
          
          {/* IMÁGENES DESTACADAS ABAJO DEL TÍTULO */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Cancún" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pirámides" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Montañas" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
          </div>
        </header>

        <form onSubmit={enviar} className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-cyan-500/30">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold text-cyan-200">¿A dónde sueñas viajar?</label>
              <input type="text" required value={form.destino}
                onChange={e=>setForm({...form, destino:e.target.value})}
                className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                placeholder="Ej: Cancún, Riviera Maya, París..."/>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Fecha de salida</label>
                <input type="date" required value={form.fecha}
                  onChange={e=>setForm({...form, fecha:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Número de personas</label>
                <input type="number" min="1" required value={form.personas}
                  onChange={e=>setForm({...form, personas:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="2"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Noches de estancia</label>
                <input type="number" min="1" required value={form.noches}
                  onChange={e=>setForm({...form, noches:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="3"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Tu presupuesto ($)</label>
                <input type="text" value={form.presupuesto}
                  onChange={e=>setForm({...form, presupuesto:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="Ej: 25000"/>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Tu nombre completo</label>
                <input type="text" required value={form.nombre}
                  onChange={e=>setForm({...form, nombre:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"/>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Tu WhatsApp</label>
                <input type="tel" required value={form.telefono}
                  onChange={e=>setForm({...form, telefono:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="+52 ..."/>
              </div>
            </div>

            <button type="submit" disabled={cargando}
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold text-xl shadow-lg transition-all disabled:opacity-60">
              {cargando ? 'Buscando las mejores opciones...' : 'Solicitar mi viaje personalizado'}
            </button>
          </div>
        </form>

        {msg && (
          <div className="mt-6 p-5 bg-green-900/50 border border-green-400/40 rounded-2xl whitespace-pre-line text-lg">
            {msg}
          </div>
        )}
      </div>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href={`https://wa.me/${whatsapp}?text=Hola ViajesIA, quiero información de viajes personalizados`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110">
        <svg width="34" height="34" fill="white" viewBox="0 0 24 24">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.57-.49-.5-.67-.51-.17 0-.37 0-.57 0-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.14 1.59 5.95L0 24l6.3-1.65a11.88 11.88 0 005.7 1.45c6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
        </svg>
      </a>
    </main>
  );
}
