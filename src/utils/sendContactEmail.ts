import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'

export type ContactPayload = {
  name: string
  businessName: string
  email: string
  phone: string
  industry: string
  selectedServices: string[]
  challenge: string
  goals: string
  contactPref: string
  isQuote: boolean
  preselected: string
}

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const serviceList = data.selectedServices.length
      ? data.selectedServices.map((s) => `  • ${s}`).join('\n')
      : '  Not sure yet – need guidance'

    const timestamp = new Date().getTime()
    const subject = data.isQuote
      ? `Quote Request – ${data.preselected} | Tempus Solutions [${timestamp}]`
      : `Consultation Request – Tempus Solutions [${timestamp}]`

    const text = [
      'Hi Tempus Team,',
      '',
      data.isQuote
        ? `I'd like to get a quote for your ${data.preselected} service.`
        : "I'd like to schedule a free consultation.",
      '',
      '─── My Information ───────────────────────',
      `Name:               ${data.name}`,
      `Business Name:      ${data.businessName}`,
      `Email:              ${data.email}`,
      `Phone Number:       ${data.phone || 'Not provided'}`,
      `Industry / Trade:   ${data.industry || 'Not provided'}`,
      '',
      "─── Services I'm Interested In ───────────",
      serviceList,
      '',
      '─── My Situation ─────────────────────────',
      'Biggest challenge right now:',
      data.challenge || 'Not provided',
      '',
      'Goals or questions:',
      data.goals || 'Not provided',
      '',
      '─── Best Way to Reach Me ─────────────────',
      `Preferred contact:  ${data.contactPref || 'Not provided'}`,
    ].join('\n')

    try {
      await transporter.verify()
    } catch (err) {
      console.error('[sendContactEmail] SMTP connection failed:', err)
      throw err
    }

    await transporter.sendMail({
      from: `"Tempus Solutions Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL ?? 'info@tempussolutions.io',
      replyTo: data.email,
      subject,
      text,
    })

    return { ok: true }
  })
