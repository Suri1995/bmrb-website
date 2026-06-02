# BMRB Professional Market Research Website

## 🎨 Design Overview

A beautiful, professional, and modern UI/UX website for BMRB - a leading market research firm with 25+ years of expertise. Built with Next.js 16, React, and Tailwind CSS with a carefully crafted professional minimal aesthetic.

### Design Highlights

- **Professional Minimal Aesthetic**: Clean typography, ample whitespace, and strategic use of color
- **Color System**: 
  - Primary: Dark Charcoal (#1a1a1a)
  - Secondary/Accent: Professional Blue (#7366bd)
  - Neutrals: Carefully curated grayscale palette
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern Interactions**: Smooth hover effects, scroll animations, and intuitive navigation

---

## 📄 Page Structure

### 1. **Header Navigation**
- Fixed, minimal navigation bar
- Scroll detection with subtle styling changes
- Responsive mobile hamburger menu
- Active link indicators
- Professional sans-serif typography

### 2. **Hero Section** 
- Clean, text-focused headline design
- Clear value proposition
- Statistics showcasing 25+ years, 500+ projects, 100+ experts
- Dual CTA buttons (primary & secondary)
- Gradient background for visual interest

### 3. **About Section**
- Company overview and mission
- Key statistics and expertise areas
- Feature cards highlighting core strengths
- Professional copy focused on trust and reliability

### 4. **Portfolio Showcase**
- 6 featured projects with real client information
- Project categories and industries covered
- Interactive cards with hover effects
- Tags for research methodologies
- Real projects from BMRB's portfolio:
  - Hyderabad Metro Rail Study
  - Hyundai Motors CSAT Research
  - Telangana Police Assessment
  - Election & Opinion Polls
  - Startup Ecosystem Research
  - Reliance Broadcasting Study

### 5. **Services Section**
- 6 comprehensive service categories
- Expandable detail sections
- Icon-based visual hierarchy
- "What We Cover" subsections
- Services include:
  - Brand & Equity Research
  - Customer Satisfaction Studies
  - B2B & Industrial Research
  - Election & Opinion Polls
  - Government Project Evaluation
  - Market Assessment Studies

### 6. **Testimonials & Social Proof**
- 4 client testimonials with 5-star ratings
- Client success stories from real organizations
- Professional testimonial cards
- Client logos section
- Real clients: Hyundai Motors, Telangana Police, Reliance Broadcasting

### 7. **Call-to-Action Section**
- Eye-catching gradient background
- Strong headline with supporting copy
- Multiple CTA buttons
- Contact information (phone & email)
- Creates urgency and drive conversions

### 8. **Footer**
- Dark professional footer matching header
- Quick links and navigation
- Contact information with icons
- Social media links
- Company information and legal links

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React (24px default)
- **Fonts**: Geist (sans-serif) via Next.js Google Fonts
- **Type Safety**: TypeScript
- **Package Manager**: pnpm

---

## 📁 Project Structure

```
/components
  ├── Header.tsx              # Navigation bar with mobile menu
  ├── Hero.tsx                # Main hero section with stats
  ├── About.tsx               # Company overview section
  ├── Portfolio.tsx           # Project showcase (6 projects)
  ├── Services.tsx            # Service cards with expandable details
  ├── Testimonials.tsx        # Client testimonials & social proof
  ├── CTA.tsx                 # Call-to-action section
  └── Footer.tsx              # Footer with links & contact info

/app
  ├── layout.tsx              # Root layout with metadata
  ├── page.tsx                # Main page composition
  └── globals.css             # Design tokens and global styles

/public
  ├── projects/               # Project images
  └── testimonials/           # Client testimonial images
```

---

## 🎯 Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Breakpoints: Mobile (320px), Tablet (768px), Desktop (1024px)
- Touch-friendly tap targets (44px+)

### 2. **Performance**
- Fast page load with optimized images
- Minimal JavaScript with React
- CSS-based animations for smooth interactions

### 3. **Accessibility**
- Semantic HTML elements
- ARIA attributes where needed
- High contrast color ratios
- Keyboard navigation support

### 4. **Professional Polish**
- Consistent spacing and typography
- Smooth transitions and animations
- Intuitive user experience
- Clear information hierarchy

---

## 🚀 Getting Started

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```
Opens at [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
pnpm build
pnpm start
```

---

## 🎨 Design Customization

### Colors
Edit the CSS variables in `/app/globals.css`:
```css
:root {
  --background: oklch(0.98 0.001 0);
  --foreground: oklch(0.1 0 0);
  --primary: oklch(0.1 0 0);
  --secondary: oklch(0.45 0.15 258);
  /* ... more variables */
}
```

### Typography
Fonts are configured in `layout.tsx` using Next.js Google Fonts integration.

### Spacing & Layout
Tailwind CSS provides the responsive grid system and spacing scale.

---

## 📊 Real Content Integration

All content has been tailored for BMRB with real information:
- **25+ Years** of market research experience
- **500+ Projects** successfully completed
- **100+ Research Experts** on team
- **Real Clients**: Hyundai, Telangana Police, Reliance Broadcasting
- **Real Services**: Brand research, CSAT studies, B2B analysis, opinion polls

---

## ✨ Special Features

### Smart Header
- Detects scroll position and adjusts styling
- Mobile hamburger menu with smooth animations
- Active link indicators

### Interactive Portfolio Cards
- Hover effects with subtle animations
- Tags for research methodologies
- Real project information

### Expandable Services
- Click to expand for detailed information
- "What We Cover" subsections
- Visual hierarchy with icons

### Professional Social Proof
- Real client testimonials
- 5-star ratings
- Client logo section

---

## 🔧 Customization Tips

1. **Update Company Information**: Modify text in components
2. **Add Real Images**: Place images in `/public` and reference in components
3. **Change Colors**: Update design tokens in `globals.css`
4. **Modify Services**: Edit the `services` array in `Services.tsx`
5. **Update Testimonials**: Edit the `testimonials` array in `Testimonials.tsx`

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 License

Professional website design for BMRB Market Research.

---

## 🤝 Support

For customization or questions, refer to the component documentation in the code comments.

---

**Built with ❤️ by v0 - Professional UI/UX Design**
