import Link from 'next/link'

export default function PortadaViajesIA() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Cabecera */}
      <header className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-400">✈️ Viajes IA</span>
          <p className="text-sm text-slate-300">Tu viaje ideal, diseñado con inteligencia</p>
        </div>
        <button className="bg-blue-800/50 px-4 py-2 rounded-lg text-sm border border-blue-600/30">
          ✨ IA que entiende lo que necesitas
        </button>
      </header>

      {/* Sección principal */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Explora el mundo,<br />
              nosotros hacemos<br />
              el resto.
            </h1>
            <p className="text-xl mb-10 text-slate-200">
              Paquetes exclusivos, precios reales y atención personalizada. Sin sorpresas.
            </p>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-blue-400">🛡️</span>
                <p className="text-sm">Precios<br />Transparentes</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-blue-400">🎧</span>
                <p className="text-sm">Atención<br />Personalizada</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-blue-400">✅</span>
                <p className="text-sm">Agencias<br />Verificadas</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-2">Solicita tu cotización</h2>
            <p className="text-center text-blue-300 mb-6">sin compromiso</p>

            <form className="space-y-4">
              <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500" required />
              <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500" required />
              <input type="tel" placeholder="WhatsApp / Teléfono" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500" required />
              <select className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 text-slate-300">
                <option value="">¿A dónde quieres ir?</option>
                <option value="cancun">Cancún</option>
                <option value="europa">Europa</option>
                <option value="cruceros">Cruceros</option>
              </select>
              <input type="date" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 text-slate-300" />
              <input type="text" placeholder="Presupuesto aproximado" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500" />

              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors">
                📩 Recibir cotización personalizada
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Alianzas */}
      <section className="bg-slate-950 py-8">
        <p className="text-center text-slate-400 mb-6">Trabajamos con las mejores agencias de viaje</p>
        <div className="flex flex-wrap justify-center gap-8 text-slate-300 font-bold text-lg">
          <span>BestDay</span>
          <span>PriceTravel Holding</span>
          <span>despegar</span>
          <span>Viajes El Corte Inglés</span>
          <span>JULIÁ TOURS</span>
          <span>MEGA TRAVEL</span>
          <span>AEROMEXICO VACATIONS</span>
        </div>
      </section>

      {/* Destinos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Encuentra tu próxima aventura</h2>
          <p className="text-slate-400">Los destinos más increíbles te esperan</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?fit=crop&w=600&q=80" alt="Cancún" className="w-full h-48 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Cancún</h3>
              <p className="text-sm text-slate-400">México 🏖️ Playa</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=600&q=80" alt="Europa" className="w-full h-48 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Europa</h3>
              <p className="text-sm text-slate-400">Multidestinos 🏛️ Cultural</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?fit=crop&w=600&q=80" alt="Maldivas" className="w-full h-48 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Maldivas</h3>
              <p className="text-sm text-slate-400">Paraíso 🛁 Relax</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?fit=crop&w=600&q=80" alt="Nueva York" className="w-full h-48 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Nueva York</h3>
              <p className="text-sm text-slate-400">Estados Unidos 🏙️ Ciudad</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1567605934817-6c5e771b3812?fit=crop&w=600&q=80" alt="Cruceros" className="w-full h-48 object-cover" />
            <div className="p-3 bg-slate-900">
              <h3 className="font-bold">Cruceros</h3>
              <p className="text-sm text-slate-400">Todo incluido 🚢 Aventura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas finales */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-blue-400">🛡️</span>
            <p className="text-sm">Miles de destinos alrededor del mundo</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-blue-400">💰</span>
            <p className="text-sm">Planes a tu medida y presupuesto</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-blue-400">✅</span>
            <p className="text-sm">Reserva segura 100% garantizada</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-blue-400">⭐</span>
            <p className="text-sm">Experiencias inolvidables</p>
          </div>
        </div>
      </section>
    </main>
  )
}

