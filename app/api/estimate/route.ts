import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, projectType, subtype, area, packageName, minTotal, maxTotal, midTotal, timeline } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const formatCurrency = (n: number) => {
      if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`
      if (n >= 100000) return `₹${(n / 100000).toFixed(1)} L`
      return `₹${n.toLocaleString('en-IN')}`
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: 'Styluxe Interior Decor <noreply@styluxeinterior.com>',
          to: [email],
          bcc: ['akashmodi@ymail.com'],
          subject: `Your Styluxe Interior Design Estimate — ${packageName} Package`,
          html: `
            <!DOCTYPE html>
            <html>
            <body style="font-family: Georgia, serif; background: #f5f0eb; padding: 40px 20px; margin: 0;">
              <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
                <div style="background: #1a1a1a; padding: 32px 40px; text-align: center;">
                  <p style="font-family: Georgia, serif; font-size: 28px; color: #ffffff; margin: 0; letter-spacing: -0.5px;">Styluxe</p>
                  <p style="font-family: Arial, sans-serif; font-size: 10px; color: #c8a96e; letter-spacing: 4px; text-transform: uppercase; margin: 4px 0 0;">Interior Decor</p>
                </div>
                <div style="padding: 40px;">
                  <p style="font-family: Arial, sans-serif; font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px;">Your Estimate</p>
                  <h1 style="font-family: Georgia, serif; font-size: 36px; color: #c8a96e; margin: 0 0 4px; font-weight: 400;">${formatCurrency(midTotal)}</h1>
                  <p style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; margin: 0 0 32px;">Range: ${formatCurrency(minTotal)} – ${formatCurrency(maxTotal)}</p>

                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                    <tr style="border-bottom: 1px solid #f3f4f6;">
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 10px 0;">Project Type</td>
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right; text-transform: capitalize;">${projectType} · ${subtype}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f3f4f6;">
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 10px 0;">Area</td>
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${area.toLocaleString('en-IN')} sqft</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #f3f4f6;">
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 10px 0;">Package</td>
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${packageName}</td>
                    </tr>
                    <tr>
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 10px 0;">Timeline</td>
                      <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${timeline}</td>
                    </tr>
                  </table>

                  <div style="background: #fef9f0; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin-bottom: 32px;">
                    <p style="font-family: Arial, sans-serif; font-size: 12px; color: #92400e; margin: 0; line-height: 1.6;">This is an indicative estimate. Final pricing is confirmed after a detailed site survey and material selection with our design team.</p>
                  </div>

                  <a href="https://www.styluxeinterior.com/contact" style="display: block; background: #c8a96e; color: #1a1a1a; text-align: center; padding: 14px 32px; border-radius: 50px; font-family: Arial, sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-decoration: none; text-transform: uppercase;">Book a Free Consultation</a>
                </div>
                <div style="background: #f9f7f4; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="font-family: Arial, sans-serif; font-size: 11px; color: #9ca3af; margin: 0;">Styluxe Interior Decor · 01, Murlidhar Complex, Paldi, Ahmedabad · akashmodi@ymail.com</p>
                </div>
              </div>
            </body>
            </html>
          `,
        }),
      })
      if (!res.ok) throw new Error('Resend API failed')
    } else {
      console.log('Estimate email (no RESEND_API_KEY):', { email, packageName, area, midTotal })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Estimate API error:', err)
    return NextResponse.json({ error: 'Failed to send estimate' }, { status: 500 })
  }
}
