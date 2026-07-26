'use client'
import Link from 'next/link'
import { useState } from 'react'; // Necesario para manejar el estado del formulario y la IA

export default function ViajesIAPortada() {
  // Función para obtener la fecha de hoy en formato YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses son 0-11
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const whatsappNumber = "52236106938"; // Tu número de WhatsApp con código de país.

  // Estado para manejar el mensaje de la IA
  const [iaResponse, setIaResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIaResponse('La IA está procesando tu solicitud. ¡Un momento, por favor!');

    // Aquí iría la lógica para enviar los datos a tu backend/API
    // Por ahora, simulamos una respuesta de IA después de un tiempo
    setTimeout(() => {
      setIaResponse('¡Tu cotización personalizada estará lista pronto! Un asesor se pondrá en contacto contigo.');
      setIsLoading(false);
      e.target.reset(); // Opcional: limpiar el formulario después de enviar
    }, 3000); // Simula 3 segundos de procesamiento de la IA
  };

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

          {/* Formulario COMPLETO y MEJORADO */}
          <div className="bg-slate-900/85 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-1">Solicita tu cotización</h2>
            <p className="text-center text-blue-300 mb-5 text-sm">sin compromiso</p>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              <input type="email" placeholder="Correo electrónico" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              <input type="tel" placeholder="WhatsApp / Teléfono" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              
              {/* CAMPO DE DESTINO ABIERTO */}
              <input type="text" placeholder="¿A dónde quieres ir? (Ej: Cancún, Europa, Pirámides)" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              
              <input 
                type="date" 
                className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 text-slate-300 transition"
                defaultValue={getTodayDate()} 
                required 
              />
              
              {/* NUEVOS CAMPOS: Personas y Noches */}
              <div className="grid grid-cols-2 gap-3">
                <input type="number" min="1" placeholder="Nº de personas" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
                <input type="number" min="1" placeholder="Nº de noches" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" required />
              </div>

              <input type="text" placeholder="Presupuesto aproximado" className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-600 focus:outline-none focus:border-blue-500 transition" />

              <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-200 mt-2" disabled={isLoading}>
                {isLoading ? 'Procesando...' : '📩 Recibir cotización personalizada'}
              </button>

              {/* Mensaje de respuesta de la IA */}
              {iaResponse && (
                <div className={`mt-4 p-3 rounded-lg text-sm text-center ${isLoading ? 'bg-blue-800' : 'bg-green-700'}`}>
                  {iaResponse}
                </div>
              )}
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

      {/* DESTINOS */}
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
            <img src="https://images.unsplash.com/photo-1551590393-61c2729d34?fit=crop&w=600&q=80" alt="Pirámides" className="w-full h-44 object-cover" />
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

      {/* Ventajas */}
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

      {/* Botón FLOTANTE DE WHATSAPP */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=¡Hola!%20Me%20interesa%20obtener%20más%20información%20sobre%20viajes%20y%20cotizaciones%20de%20ViajesIA.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl z-50 hover:bg-green-600 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.5 3.42 1.46 4.91l-1.
