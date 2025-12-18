# Contact Form Setup Guide

The contact form in `components/sections/Contact.tsx` currently uses a simulated submission. Follow one of these options to enable real email functionality:

## Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io) (free tier available)
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
4. Update the `handleSubmit` function in `components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      }),
    })

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } else {
      alert('Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

## Option 2: Resend (Recommended for Production)

### Step 1: Install Resend

```bash
npm install resend
```

### Step 2: Create API Route

Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { data, error } = await resend.emails.send({
      from: 'AlphaGrid Contact <contact@yourdomain.com>',
      to: ['alphagrid.official@gmail.com'],
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
```

### Step 3: Update Contact Component

Update `handleSubmit` in `components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (response.ok) {
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } else {
      alert(result.error || 'Failed to send message. Please try again.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Step 4: Add Environment Variable

1. Create `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

2. Add to Vercel environment variables when deploying

## Option 3: EmailJS (Alternative)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service
3. Install: `npm install @emailjs/browser`
4. Update the contact form to use EmailJS SDK

## Current Implementation

The current implementation shows a success message after 1.5 seconds. The email `alphagrid.official@gmail.com` is displayed with a copy-to-clipboard feature, so users can also contact you directly.


