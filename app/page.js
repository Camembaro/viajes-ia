'use client'
import { useState } from 'react';

export default function ViajesIA() {
  const whatsapp = "522361106938";
  const [form, setForm] = useState({
    destino:'', fecha:'', personas:'', dias:'', nombre:'', telefono:'', correo:''
  });
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setCargando(true);
    setRespuesta('');
    try {
      const res = await fetch('/api/guardar', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(res.ok){
        setRespuesta(`✅ ¡Solicitud recibida con éxito, ${form.nombre}!

Estoy revisando inmediatamente las mejores opciones disponibles para:
📍 Destino: ${form.destino}
📅 Fecha aproximada: ${form.fecha}
👥 Viajeros: ${form.personas} personas
📆 Duración: ${form.dias} días

Buscaré por ti vuelos, hoteles certificados y servicios turísticos con precios reales y actualizados.
Muy pronto te envío la propuesta completa y detallada a tu WhatsApp ${form.telefono} y al correo ${form.correo}. ¡Gracias por confiar en nosotros!`);
        setForm({destino:'', fecha:'', personas:'', dias:'', nombre:'', telefono:'', correo:''});
      }else{
        setRespuesta('⚠️ Hubo un inconveniente técnico, por favor intenta nuevamente en unos minutos.');
      }
    }catch{
      setRespuesta('⚠️ No se pudo conectar. Revisa tu internet y vuelve a intentar.');
    }
    setCargando(false);
  };

  return (
    <main className="min-h-screen text-white">
      {/* FONDO PREMIUM */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/60 to-black/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90" 
          alt="Viajes profesionales" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-xl mx-auto p-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-cyan-300 drop-shadow-xl">ViajesIA</h1>
          <p className="text-xl md:text-2xl mt-3 text-blue-100 font-light">Tu viaje perfecto, diseñado con excelencia</p>
          
                    <div className="grid grid-cols-3 gap-2 mt-6">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Playa paradisíaca" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sitio turístico" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Hotel de lujo" className="rounded-xl h-24 w-full object-cover shadow-lg border border-white/20"/>
          </div>


        </header>

        <form onSubmit={enviar} className="bg-black/50 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-cyan-500/40">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold text-cyan-200">¿A dónde deseas viajar?</label>
              <input type="text" required value={form.destino}
                onChange={e=>setForm({...form, destino:e.target.value})}
                className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                placeholder="Ej: Cancún, Riviera Maya..."/>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Fecha aproximada</label>
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

            <div>
              <label className="block mb-2 font-semibold text-cyan-200">¿Cuántos días planeas estar?</label>
              <input type="number" min="1" required value={form.dias}
                onChange={e=>setForm({...form, dias:e.target.value})}
                className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                placeholder="3, 5, 7..."/>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-cyan-200">Tu nombre completo</label>
              <input type="text" required value={form.nombre}
                onChange={e=>setForm({...form, nombre:e.target.value})}
                className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"/>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">WhatsApp</label>
                <input type="tel" required value={form.telefono}
                  onChange={e=>setForm({...form, telefono:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="+52 ..."/>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-cyan-200">Correo electrónico</label>
                <input type="email" required value={form.correo}
                  onChange={e=>setForm({...form, correo:e.target.value})}
                  className="w-full p-4 rounded-xl bg-white/10 border border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                  placeholder="tu@correo.com"/>
              </div>
            </div>

            <button type="submit" disabled={cargando}
              className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-bold text-xl shadow-lg transition-all disabled:opacity-60">
              {cargando ? 'Preparando tu consulta...' : 'Solicitar propuesta personalizada'}
            </button>
          </div>
        </form>

        {respuesta && (
          <div className="mt-6 p-5 bg-green-900/50 border border-green-400/40 rounded-2xl whitespace-pre-line text-lg">
            {respuesta}
          </div>
        )}
      </div>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href={`https://wa.me/${whatsapp}?text=Hola ViajesIA, quiero una propuesta de viaje`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110">
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.571-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </main>
  );
}
