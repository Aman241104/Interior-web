import { NextRequest, NextResponse } from 'next/server'
import { logToGoogleSheet } from '@/lib/googleSheet'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    await logToGoogleSheet('Newsletter', { email, submittedAt: new Date().toISOString() })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
