'use client'
import Link from 'next/link'

export default function ViajesIAPortada() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white font-sans">
      {/* Cabecera */}
      <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-400">✈️ Viajes IA</span>
            <p className="text-xs text-slate-300 hidden sm:block">Tu viaje ideal, diseñado con inteligencia</p>
          </div>
          <span className="bg-blue-900/40 px-3 py-1.5 rounded-full text-xs border border-blue-600/30">✨ IA que entiende lo que necesitas</span>
        </div>
      </header>

      {/* Sección principal */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Explora el mundo,<br />
              <span className="text-blue-400">nosotros hacemos</span><br />
              el resto.
            </h1>
            <p className="text-lg text-slate-300">
              Paquetes exclusivos, precios reales y atención personalizada. Sin sorpresas.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <p className="text-2xl mb-1">🛡️</p>
                <p className="text-xs">Precios Transparentes</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <p className="text-2xl mb-1">🎧</p>
                <p className="text-xs">Atención Personalizada</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                <p className="text-2xl mb-1">✅</p>
                <p className="text-xs">Agencias Verificadas</p>
              </div>
            </div>
          </div>

          {/* Formulario COMPLETO con FECHA */}
          <div className="bg-slate-900/85 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-1">Solicita tu cotización</h2>
            <p className="text-center text-blue-300 mb-5 text-sm">sin compromiso</p>

            <form className="space-y-3">
              <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              <input type="tel" placeholder="WhatsApp / Teléfono" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              <select className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 text-slate-300 transition">
                <option value="">¿A dónde quieres ir?</option>
                <option value="cancun">Cancún / Playa</option>
                <option value="europa">Europa / Cultural</option>
                <option value="cruceros">Cruceros / Todo incluido</option>
                <option value="piramides">Pirámides / Tradición</option>
                <option value="otro">Otro destino</option>
              </select>
              {/* CAMPO DE FECHA YA INCLUIDO */}
              <input type="date" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 text-slate-300 transition" required />
              <input type="text" placeholder="Presupuesto aproximado" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" />

              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-200 mt-2">
                📩 Recibir cotización personalizada
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ALIANZAS COMPLETAS */}
      <section className="bg-slate-950 py-6 px-4">
        <p className="text-center text-slate-400 text-sm mb-4">Trabajamos con las mejores agencias de viaje</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-slate-300 font-medium text-sm md:text-base">
          <span>BestDay</span>
          <span>PriceTravel Holding</span>
          <span>despegar</span>
          <span>Viajes El Corte Inglés</span>
          <span>JULIÁ TOURS</span>
          <span>MEGA TRAVEL</span>
          <span>AEROMEXICO VACATIONS</span>
        </div>
      </section>

      {/* DESTINOS: MALDIVAS CAMBIADO POR PIRÁMIDES */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Encuentra tu próxima aventura</h2>
          <p className="text-slate-400">Los destinos más increíbles te esperan</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?fit=crop&w=600&q=80" alt="Cancún" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Cancún</h3>
              <p className="text-xs text-slate-400">México 🏖️ Playa</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=600&q=80" alt="Europa" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Europa</h3>
              <p className="text-xs text-slate-400">Multidestinos 🏛️ Cultural</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="https://images.unsplash.com/photo-1551590393-61c2729d3124?fit=crop&w=600&q=80" alt="Pirámides" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Pirámides</h3>
              <p className="text-xs text-slate-400">México 🗿 Tradición</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?fit=crop&w=600&q=80" alt="Nueva York" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Nueva York</h3>
              <p className="text-xs text-slate-400">EE.UU. 🏙️ Ciudad</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="https://images.unsplash.com/photo-1567605934817-6c5e771b3812?fit=crop&w=600&q=80" alt="Cruceros" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Cruceros</h3>
              <p className="text-xs text-slate-400">Todo incluido 🚢 Aventura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas finales */}
      <section className="bg-slate-950 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <p className="text-2xl text-blue-400">🌍</p>
            <p className="text-xs">Miles de destinos alrededor del mundo</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl text-blue-400">💰</p>
            <p className="text-xs">Planes a tu medida y presupuesto</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl text-blue-400">✅</p>
            <p className="text-xs">Reserva segura 100% garantizada</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl text-blue-400">⭐</p>
            <p className="text-xs">Experiencias inolvidables</p>
          </div>
        </div>
      </section>
    </main>
  )
}

