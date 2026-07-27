'use client'
import { useState } from 'react';

export default function PortadaViajesIA() {
  const whatsapp = "522361106938";
  const [datos, setDatos] = useState({
    destino:'', fecha:'', personas:'', noches:'', presupuesto:'', nombre:'', telefono:''
  });
  const [respuesta, setRespuesta] = useState('');
  const [cargando, setCargando] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setCargando(true);
    setRespuesta('');
    try {
      const res = await fetch('/api/guardar', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(datos)
      });
      if(res.ok){
        setRespuesta(`✅ ¡Solicitud recibida, ${datos.nombre}!
He preparado las mejores opciones para ${datos.destino}:
• ${datos.personas} personas por ${datos.noches} noches
• Fecha: ${datos.fecha}
• Presupuesto aprox: $${datos.presupuesto || 'No indicado'}

Te contactaré al WhatsApp ${datos.telefono} con paquetes reales de hotelería, vuelos y traslados.`);
        setDatos({destino:'', fecha:'', personas:'', noches:'', presupuesto:'', nombre:'', telefono:''});
      } else {
        setRespuesta('⚠️ Error al guardar, intenta de nuevo.');
      }
    } catch {
      setRespuesta('⚠️ Error de conexión, intenta más tarde.');
    }
    setCargando(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Fondo imagen profesional */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-2xl mx-auto p-4 md:p-8">
        <header className="text-center mb-8 pt-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-cyan-300">ViajesIA</h1>
          <p className="text-lg md:text-xl mt-2 text-blue-100">Tu viaje ideal, diseñado a tu medida</p>
        </header>

        <form onSubmit={enviar} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">¿A dónde quieres viajar?</label>
              <input type="text" required value={datos.destino} onChange={e=>setDatos({...datos, destino:e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Ej: Cancún, Chiapas, Riviera Maya, París..."/>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1 font-medium">Fecha de salida</label>
                <input type="date" required value={datos.fecha} onChange={e=>setDatos({...datos, fecha:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
              </div>
              <div>
                <label className="block mb-1 font-medium">Personas</label>
                <input type="number" min="1" required value={datos.personas} onChange={e=>setDatos({...datos, personas:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="2"/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1 font-medium">Noches</label>
                <input type="number" min="1" required value={datos.noches} onChange={e=>setDatos({...datos, noches:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="3"/>
              </div>
              <div>
                <label className="block mb-1 font-medium">Presupuesto ($)</label>
                <input type="text" value={datos.presupuesto} onChange={e=>setDatos({...datos, presupuesto:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Ej: 15000"/>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1 font-medium">Tu nombre</label>
                <input type="text" required value={datos.nombre} onChange={e=>setDatos({...datos, nombre:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
              </div>
              <div>
                <label className="block mb-1 font-medium">WhatsApp</label>
                <input type="tel" required value={datos.telefono} onChange={e=>setDatos({...datos, telefono:e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="+52 ..."/>
              </div>
            </div>
            <button type="submit" disabled={cargando}
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold text-lg transition-all disabled:opacity-50">
              {cargando ? 'Consultando...' : 'Solicitar mi viaje'}
            </button>
          </div>
        </form>

        {respuesta && (
          <div className="mt-6 p-5 bg-green-900/40 border border-green-400/30 rounded-xl whitespace-pre-line">
            {respuesta}
          </div>
        )}
      </div>

      {/* Botón flotante de WhatsApp */}
      <a href={`https://wa.me/${whatsapp}?text=Hola, quiero información de viajes`} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110">
        <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.571-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}

