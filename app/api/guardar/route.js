import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ ok: false, error: 'Falta configuración' }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const datos = await req.json()

    const { error } = await supabase.from('solicitudes_cotizacion').insert({
      destino: datos.destino,
      fecha: datos.fecha,
      personas: datos.personas,
      dias: datos.dias,
      nombre: datos.nombre,
      telefono: datos.telefono,
      correo: datos.correo
    })

    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
