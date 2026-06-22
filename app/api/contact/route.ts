import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, projectType, area, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Try Resend if API key available
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: 'Styluxe Website <noreply@sidecor.in>',
          to: ['akashmodi@ymail.com'],
          subject: `New Inquiry from ${name} — ${projectType || 'General'}`,
          html: `
            <h2>New Project Inquiry</h2>
            <table>
              <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
              <tr><td><strong>Project Type:</strong></td><td>${projectType || 'Not specified'}</td></tr>
              <tr><td><strong>Area:</strong></td><td>${area || 'Not specified'}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
            </table>
          `,
        }),
      })
      if (!res.ok) throw new Error('Resend API failed')
    } else {
      // Dev mode: just log
      console.log('Contact form submission (no RESEND_API_KEY set):', { name, email, phone, projectType, area, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
