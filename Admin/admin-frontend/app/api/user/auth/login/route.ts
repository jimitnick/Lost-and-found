import { NextResponse } from 'next/server'
import { supabaseServer } from '../../../../../lib/supabase-server'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const { data, error } =
    await supabaseServer.auth.signInWithPassword({ email, password })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }

  return NextResponse.json({
    token: data.session?.access_token,
    user: data.user,
  })
}
