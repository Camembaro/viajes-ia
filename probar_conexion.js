import { supabase } from './lib/supabase.js'

async function probar() {
  console.log("✅ Conectando a Supabase...")
  const { data, error } = await supabase.from('clientes_viajes').select('*').limit(1)
  if (error) console.error("❌ Error:", error)
  else console.log("✅ CONEXIÓN EXITOSA! Ya puedes guardar y leer datos.")
}

probar()
