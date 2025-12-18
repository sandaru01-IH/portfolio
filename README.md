# AlphaGrid Portfolio Website

A premium, mobile-responsive company portfolio website built with Next.js, TypeScript, TailwindCSS, Framer Motion, and GSAP. Designed for high-end agency aesthetics with smooth animations, scroll effects, and exceptional performance.

## 🚀 Features

- **Modern Design**: Premium, minimal aesthetic inspired by top-tier agency websites
- **Smooth Animations**: Framer Motion for component animations, GSAP + ScrollTrigger for advanced scroll effects
- **Smooth Scrolling**: Lenis-powered buttery smooth scrolling experience
- **Performance Optimized**: 60fps animations, lazy loading, optimized images
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Complete metadata, OpenGraph, sitemap, and robots.txt
- **Accessibility**: Respects `prefers-reduced-motion`, semantic HTML, proper alt text
- **Static Content**: Easy-to-edit content files, no database required

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── projects/          # Project pages
│   │   ├── page.tsx       # All projects listing
│   │   └── [id]/          # Individual project pages
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx         # Sticky navigation header
│   ├── Footer.tsx         # Site footer
│   └── SmoothScrollProvider.tsx  # Lenis smooth scroll wrapper
├── content/               # Static content data
│   ├── projects.ts       # Project data
│   ├── testimonials.ts   # Client testimonials
│   ├── services.ts       # Service offerings
│   └── stats.ts          # Company statistics
└── public/               # Static assets (images, etc.)
```

## ✏️ Editing Content

### Adding/Editing Projects

Edit `content/projects.ts`:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  category: 'Data Analysis', // Must match one of the categories
  description: 'Short description',
  longDescription: 'Detailed description...',
  image: 'https://images.unsplash.com/...', // Main image URL
  images: ['url1', 'url2'], // Gallery images
  techStack: ['React', 'TypeScript', 'Next.js'],
  outcomes: [
    'Outcome 1',
    'Outcome 2',
  ],
  client: 'Client Name',
  year: '2024',
  externalLink: 'https://...', // Optional
  featured: true, // Show on homepage
}
```

### Adding/Editing Testimonials

Edit `content/testimonials.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Client Name',
  role: 'Job Title',
  company: 'Company Name',
  rating: 5,
  feedback: 'Testimonial text...',
}
```

### Editing Services

Edit `content/services.ts` to modify service offerings, descriptions, and features.

### Editing Stats

Edit `content/stats.ts` to update company statistics (employees, projects, etc.).

## 🖼️ Replacing Images & Videos

1. **Hero Background Video**: 
   - Place your video file in `public/video/hero-background.mp4`
   - Optional: Add `hero-background.webm` for better browser compatibility
   - Recommended specs:
     - Format: MP4 (H.264) or WebM
     - Resolution: 1920x1080 or higher
     - Duration: 10-30 seconds (will loop automatically)
     - File size: Keep under 5MB for best performance
     - Content: Office environment, data visualization, analytics screens
   - The video will display at 15% opacity as a background
   - If video is not found, a gradient background will be shown as fallback

2. **Project Images**: Update the `image` and `images` URLs in `content/projects.ts` with your image URLs
   - Recommended: Use Unsplash, your own CDN, or Next.js Image Optimization
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 1200x800px for optimal performance

3. **Founder Images**: Add co-founder photos to `public/founders/`:
   - `samith-madushanka.jpg` (recommended: 800x800px, square)
   - `sandaruwan-sankalpa.jpg` (recommended: 800x800px, square)
   - Images should be square for best cropping with rounded-2xl corners
   - If images are not found, a placeholder will be shown automatically

4. **Placeholder Images**: Currently using Unsplash placeholders. Replace with:
   - Your own images hosted on a CDN
   - Images in the `public/` folder (reference as `/image-name.jpg`)

5. **Optimization**: All images use Next.js `Image` component for automatic optimization

## 📧 Contact Form Configuration

The contact form currently uses a simulated submission. To enable real email functionality:

### Option 1: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `components/sections/Contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  if (response.ok) {
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  setIsSubmitting(false)
}
```

### Option 2: Resend (Serverless)

1. Install Resend: `npm install resend`
2. Create a Next.js API route at `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'alphagrid.official@gmail.com',
    subject: `New Contact Form: ${body.name}`,
    html: `<p>From: ${body.name} (${body.email})</p><p>Company: ${body.company}</p><p>Message: ${body.message}</p>`,
  })

  return NextResponse.json({ success: true })
}
```

3. Update the form submission in `components/sections/Contact.tsx` to POST to `/api/contact`

### Option 3: Mailto Fallback

The email `alphagrid.official@gmail.com` is already displayed with a copy-to-clipboard feature. You can also use a simple mailto link as a fallback.

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* your primary colors */ },
  dark: { /* your dark colors */ },
}
```

### Fonts

Fonts are configured in `app/layout.tsx`. Currently using:
- **Inter** (body text)
- **Space Grotesk** (headings)

To change fonts, update the imports and CSS variables.

### Animations

- **Framer Motion**: Component-level animations in section files
- **GSAP**: Scroll-triggered animations (section reveals, parallax, etc.)
- **Lenis**: Smooth scrolling behavior

All animations respect `prefers-reduced-motion` for accessibility.

## 🚀 Deployment to Vercel

### Quick Deploy

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Environment Variables

If using Resend or other services, add environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Add `RESEND_API_KEY` (or other required keys)

### Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update `app/sitemap.ts` and `app/robots.ts` with your actual domain URL

## 📊 Performance Optimization

- ✅ Next.js Image Optimization
- ✅ Lazy loading for below-the-fold content
- ✅ Code splitting and tree shaking
- ✅ Optimized animations (60fps target)
- ✅ Static generation where possible
- ✅ Minimal JavaScript bundle

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ `prefers-reduced-motion` support
- ✅ Sufficient color contrast

## 🔍 SEO

- ✅ Complete metadata (title, description, keywords)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter Card support
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure

## 📝 License

This project is proprietary and confidential. All rights reserved by AlphaGrid.

## 🤝 Support

For questions or issues, contact: **alphagrid.official@gmail.com**

---

Built with ❤️ by AlphaGrid

