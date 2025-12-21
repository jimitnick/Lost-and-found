import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export async function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization')

  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = authHeader.replace('Bearer ', '')

  const { data } = await supabase.auth.getUser(token)

  if (!data.user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const pathname = req.nextUrl.pathname

  // Admin routes protection
  if (pathname.startsWith('/api/admin')) {
    if (data.user.user_metadata?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/admin/:path*', '/api/mobile/:path*'],
}
