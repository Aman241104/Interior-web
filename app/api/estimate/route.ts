import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name, phone, projectType, subtype, area, sections } = body

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Generate HTML for the selected requirements
    let requirementsHtml = '';
    
    if (sections && Array.isArray(sections)) {
      sections.forEach((section: any) => {
        requirementsHtml += `
          <div style="margin-bottom: 24px;">
            <h3 style="font-family: Arial, sans-serif; font-size: 14px; color: #c8a96e; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 12px;">${section.title}</h3>
            <table style="width: 100%; border-collapse: collapse;">
              ${section.items.map((item: any) => `
                <tr style="border-bottom: 1px solid #f3f4f6;">
                  <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; padding: 8px 0; font-weight: 600; width: 40%;">${item.particulars}</td>
                  <td style="font-family: Arial, sans-serif; font-size: 12px; color: #6b7280; padding: 8px 12px;">${item.detail}</td>
                  <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; padding: 8px 0; text-align: right; white-space: nowrap;">${item.qty}</td>
                </tr>
              `).join('')}
            </table>
          </div>
        `;
      });
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: 'Styluxe Interior Decor <noreply@sidecor.in>',
          to: ['akashmodi@ymail.com'],
          cc: [email],
          subject: `New Interior Inquiry from ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
            <body style="font-family: Georgia, serif; background: #f5f0eb; padding: 40px 20px; margin: 0;">
              <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
                <div style="background: #1a1a1a; padding: 32px 40px; text-align: center;">
                  <p style="font-family: Georgia, serif; font-size: 28px; color: #ffffff; margin: 0; letter-spacing: -0.5px;">Styluxe</p>
                  <p style="font-family: Arial, sans-serif; font-size: 10px; color: #c8a96e; letter-spacing: 4px; text-transform: uppercase; margin: 4px 0 0;">Interior Decor</p>
                </div>
                <div style="padding: 40px;">
                  <h1 style="font-family: Georgia, serif; font-size: 28px; color: #1a1a1a; margin: 0 0 24px; font-weight: 400;">New Inquiry Received</h1>
                  
                  <div style="background: #f9f7f4; padding: 20px; border-radius: 8px; margin-bottom: 32px;">
                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 6px 0;">Name:</td>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${name}</td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 6px 0;">Phone:</td>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${phone}</td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 6px 0;">Email:</td>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${email}</td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 6px 0;">Property:</td>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right; text-transform: capitalize;">${projectType} · ${subtype}</td>
                      </tr>
                      <tr>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #6b7280; padding: 6px 0;">Carpet Area:</td>
                        <td style="font-family: Arial, sans-serif; font-size: 13px; color: #1a1a1a; font-weight: 600; text-align: right;">${area.toLocaleString('en-IN')} sqft</td>
                      </tr>
                    </table>
                  </div>

                  <h2 style="font-family: Georgia, serif; font-size: 20px; color: #1a1a1a; margin: 0 0 16px; font-weight: 400;">Selected Requirements</h2>
                  
                  ${requirementsHtml}

                </div>
                <div style="background: #f9f7f4; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="font-family: Arial, sans-serif; font-size: 11px; color: #9ca3af; margin: 0;">Styluxe Interior Decor · 301, Murlidhar Complex, Fathepura Cross Road, Paldi, Ahmedabad · akashmodi@ymail.com · +91 94292 23647</p>
                </div>
              </div>
            </body>
            </html>
          `,
        }),
      })
      if (!res.ok) throw new Error('Resend API failed')
    } else {
      console.log('Inquiry email (no RESEND_API_KEY):', { email, name, phone, projectType, subtype, area, sections })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Inquiry API error:', err)
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 })
  }
}
