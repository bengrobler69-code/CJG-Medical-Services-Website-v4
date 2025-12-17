# CJG Medical Services Ltd - Occupational Health Website

A modern, visually stunning, and fully animated website for CJG Medical Services Ltd, an occupational health provider offering professional, science-backed workplace wellbeing services.

## 🌟 Features

### Design & Aesthetics
- **Modern Healthcare Tech Aesthetic**: Sleek, minimal, motion-driven premium interface
- **Custom Color Palette**: Deep midnight blue (#081B2C), cyan teal (#00E1D3), fresh lime accents
- **Typography**: Space Grotesk for headings, Inter for body text, IBM Plex Mono for data
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions

### Pages
- **Home**: Hero section with floating medical icons, feature highlights, testimonials, and CTA
- **Services**: Interactive service cards with expandable details
- **About Us**: Company story, core values, team, and timeline
- **Corporate Solutions**: Industry-specific programs and health management portal
- **Resources**: Filterable resource library with blog posts, case studies, and whitepapers
- **Contact**: Contact form, office details, and map integration

### Interactive Features
- **Animated Navigation**: Smooth scroll highlighting, hover effects
- **Chat Widget**: Floating chat button with slide-up form
- **Scroll to Top**: Appears after scrolling 300px
- **Easter Egg**: Hover on CJG logo for 3 seconds reveals tagline
- **Testimonials Carousel**: Automatic sliding testimonials
- **Service Cards**: Expandable accordion-style service details
- **Resource Filtering**: Interactive category filtering
- **Counter Animations**: Animated statistics on home page

### Technical
- **Next.js 16**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Modern icon library
- **SEO Optimized**: Meta tags, Open Graph, semantic HTML

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd Website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
Website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with global components
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── corporate/           # Corporate Solutions page
│   ├── resources/           # Resources page
│   └── contact/             # Contact page
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Footer with newsletter
│   ├── ChatWidget.tsx      # Floating chat widget
│   └── ScrollToTop.tsx     # Scroll to top button
├── lib/                     # Utility functions
│   └── animations.ts       # Framer Motion variants
└── public/                  # Static assets
\`\`\`

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color scheme:
- `--color-midnight`: #081B2C
- `--color-teal`: #00E1D3
- `--color-lime`: #BFFF00
- `--color-silver`: #D3D7DA
- `--color-off-white`: #F9FAFB

### Fonts
Fonts are loaded in `app/layout.tsx`:
- **Headings**: Space Grotesk
- **Body**: Inter
- **Data/Numbers**: IBM Plex Mono

### Animations
Customize animations in `lib/animations.ts` or inline within components using Framer Motion.

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 📝 License

Copyright © 2025 CJG Medical Services Ltd. All rights reserved.

## 🤝 Contributing

This is a proprietary project for CJG Medical Services Ltd. For inquiries or support, please contact info@cjgmedical.co.uk.

## 🌐 Live Website

Visit the live website at [https://cjgmedical.co.uk](https://cjgmedical.co.uk)

---

**Built with ❤️ for workplace health and wellbeing**
