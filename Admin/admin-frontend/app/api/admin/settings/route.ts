import { NextResponse } from 'next/server'
import { supabaseServer } from '../../../../lib/supabase-server'

export async function GET() {
  const { data } = await supabaseServer
    .from('settings')
    .select('*')
    .single()

  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  const updates = await req.json()

  const { error } = await supabaseServer
    .from('settings')
    .update(updates)
    .eq('id', 1)

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    )
  }

  return NextResponse.json({ success: true })
}
