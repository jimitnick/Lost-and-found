import { NextResponse } from 'next/server'
import { supabaseServer } from '../../../../../lib/supabase-server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const { data, error } = await supabaseServer.auth.signUp({
    email,
    password,
    options: {
      data: { role: 'user' },
    },
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json(data)
}
