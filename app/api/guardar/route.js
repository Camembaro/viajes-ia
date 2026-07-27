'use server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(req) {
  try {
    const datos = await req.json();
    await supabase.from('solicitudes_cotizacion').insert({
      destino: datos.destino,
      fecha: datos.fecha,
      personas: datos.personas,
      dias: datos.dias,
      nombre: datos.nombre,
      telefono: datos.telefono,
      correo: datos.correo
    });
    return Response.json({ok:true});
  } catch {
    return Response.json({ok:false});
  }
}
