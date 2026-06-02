# Quick Start Guide - BMRB Multi-Page Website

## Your Website is Live!

Your BMRB website now has **5 fully functional pages** with smart dropdown navigation.

---

## Pages & URLs

| Page | URL | Dropdown Options |
|------|-----|------------------|
| **Home** | `/` | - |
| **About Us** | `/about` | Company Info, Team |
| **Services** | `/services` | 6 Service Categories |
| **Clients** | `/clients` | Projects, Clients |
| **Contact Us** | `/contact` | - |

---

## Testing Dropdown Navigation

### Desktop
1. Hover over "About Us" in the header → Click "About Company" or "Our Team"
2. Hover over "Services" → Click any of the 6 services
3. Hover over "Clients" → Click "Our Projects" or "Our Clients"

### Mobile
1. Tap the menu icon (☰)
2. Tap any menu item with a dropdown arrow to expand
3. Tap the specific option you want

---

## About Us Page

**URL**: `/about`

**Tab 1 - About Company** (`/about?tab=company`)
- Company mission & vision
- Key statistics (25+ years, 500+ projects, 100+ clients)
- Why choose BMRB section

**Tab 2 - Our Team** (`/about?tab=team`)
- 6 team member profiles
- Roles and expertise
- Company culture values

---

## Services Page

**URL**: `/services`

**6 Service Options**:
1. Brand & Product Research → `/services?service=brand-research`
2. Customer Satisfaction Research → `/services?service=customer-satisfaction`
3. B2B & Industrial Research → `/services?service=b2b-research`
4. Election Surveys & Opinion Polls → `/services?service=election-surveys`
5. Government Project Evaluation → `/services?service=government-evaluation`
6. Market Assessment Studies → `/services?service=market-assessment`

Select any service from the left sidebar to view details.

---

## Clients Page

**URL**: `/clients`

**Tab 1 - Our Projects** (`/clients?tab=projects`)
- 6 featured projects
- Client names & sectors
- Project descriptions & impact

**Tab 2 - Our Clients** (`/clients?tab=clients`)
- 12 trusted clients
- Industry categorization
- Visual representation

---

## Contact Page

**URL**: `/contact`

**Features**:
- Contact form with validation
- Phone, email, address information
- FAQ section
- Response time guarantees

---

## Dropdown Implementation Details

### How It Works

All dropdowns use **URL query parameters** for navigation:

```
/about?tab=company           # Loads About Company tab
/about?tab=team              # Loads Our Team tab
/services?service=brand-research      # Loads Brand Research
/clients?tab=projects        # Loads Projects
/clients?tab=clients         # Loads Clients
```

### On-Click Navigation

1. User clicks a dropdown item
2. Browser navigates to page with query parameter
3. Page loads and reads the parameter
4. Correct tab/content automatically displays

### State Persistence

Refresh your browser - the correct tab will still be displayed because the state is stored in the URL!

---

## File Structure

```
Your Website
├── app/
│   ├── page.tsx              (Home)
│   ├── about/page.tsx        (About Us)
│   ├── services/page.tsx     (Services)
│   ├── clients/page.tsx      (Clients)
│   ├── contact/page.tsx      (Contact)
│   └── globals.css           (Styles)
│
└── components/
    ├── Header.tsx            (Navigation with dropdowns)
    ├── PageHeader.tsx        (Page titles)
    └── [other components]
```

---

## Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit `http://localhost:3000` while dev server is running.

---

## Customization Examples

### Add a New Service

Edit `/app/services/page.tsx`:

```typescript
const services = [
  {
    id: 'new-service',
    title: 'Your Service Name',
    icon: YourIcon,
    description: 'Service description',
    details: 'Detailed information...',
    features: ['Feature 1', 'Feature 2']
  },
  // ... rest of services
]
```

Dropdown will auto-update!

### Add a New Team Member

Edit `/app/about/page.tsx`:

```typescript
{ name: 'John Doe', role: 'Senior Analyst', expertise: 'Market Research' },
// Add to the team array
```

Grid will auto-populate!

### Change Contact Info

Edit `/app/contact/page.tsx`:

```typescript
const contactInfo = {
  phone: '+91 (40) 2771-5555',
  email: 'info@bmrb.in',
  // ... update as needed
}
```

---

## URL Reference Card

Print or bookmark this:

```
Home:                  /
About (Company):       /about?tab=company
About (Team):          /about?tab=team
Services Hub:          /services
  ↳ Brand Research:           /services?service=brand-research
  ↳ Customer Satisfaction:    /services?service=customer-satisfaction
  ↳ B2B Research:             /services?service=b2b-research
  ↳ Election Surveys:         /services?service=election-surveys
  ↳ Government Evaluation:    /services?service=government-evaluation
  ↳ Market Assessment:        /services?service=market-assessment
Clients (Projects):    /clients?tab=projects
Clients (List):        /clients?tab=clients
Contact:               /contact
```

---

## Features Summary

✅ **5 Full Pages**
- Home with hero, services, testimonials
- About Us with 2 tabs
- Services with 6 categories
- Clients with 2 tabs
- Contact with working form

✅ **Smart Navigation**
- Dropdown menus on hover (desktop)
- Expandable menus on tap (mobile)
- Direct navigation to content
- URL state persistence

✅ **Professional Design**
- Responsive mobile-first layout
- Consistent branding
- Smooth animations
- WCAG accessibility

✅ **Production Ready**
- Built with Next.js 16
- Tailwind CSS styling
- TypeScript for safety
- Optimized performance

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repo to Vercel
3. Click Deploy
4. Site is live!

### Or Run Locally

```bash
pnpm dev       # Start dev server
# Visit http://localhost:3000
```

---

## Support & Tips

- **Need to edit content?** Look in the specific page files
- **Want to change colors?** Edit `/app/globals.css`
- **Mobile testing?** Use Chrome DevTools (F12 → Ctrl+Shift+M)
- **Check performance?** Use Lighthouse in Chrome DevTools

---

## Keyboard Navigation

- `Tab` - Navigate between links
- `Enter` - Click highlighted link
- `Escape` - Close mobile menu
- All interactive elements are keyboard accessible

---

## Mobile Testing

Test dropdowns on your phone:
1. Open site on mobile
2. Tap menu icon (☰)
3. Tap any menu item to expand/collapse
4. Tap specific option to navigate

---

You're all set! Your site is ready to use and deploy. 🚀

For detailed information, see `MULTI_PAGE_SITE_SUMMARY.md`
