# BMRB Multi-Page Website - Complete Implementation Guide

## Project Overview

Your BMRB website has been transformed from a single-page site into a comprehensive multi-page application with advanced navigation features. The site now has **5 main pages** with intelligent dropdown menus that navigate directly to specific content.

---

## Page Structure

### 1. **Home Page** (`/`)
- **Path**: `app/page.tsx`
- **Features**:
  - Eye-catching hero section with call-to-action buttons
  - Overview of services with expandable cards
  - Client testimonials section
  - Quick stats: 25+ years, 500+ projects, 100+ clients, 100% confidentiality
  - CTA section with contact information

### 2. **About Us Page** (`/about`)
- **Path**: `app/about/page.tsx`
- **Features**:
  - Two tabs accessible via dropdown:
    - **About Company** (`/about?tab=company`): Mission, vision, 3-stat cards, why choose BMRB section
    - **Our Team** (`/about?tab=team`): 6 team member profiles with roles and expertise
  - Company values and culture section
  - Page header with breadcrumb navigation

### 3. **Services Page** (`/services`)
- **Path**: `app/services/page.tsx`
- **Features**:
  - 6 service categories with individual pages:
    - Brand & Product Research (`/services?service=brand-research`)
    - Customer Satisfaction Research (`/services?service=customer-satisfaction`)
    - B2B & Industrial Research (`/services?service=b2b-research`)
    - Election Surveys & Opinion Polls (`/services?service=election-surveys`)
    - Government Project Evaluation (`/services?service=government-evaluation`)
    - Market Assessment Studies (`/services?service=market-assessment`)
  - Left sidebar service list (sticky on desktop)
  - Detailed content panel for each service
  - Features, deliverables, and CTA sections
  - Icons from Lucide React for visual distinction

### 4. **Clients Page** (`/clients`)
- **Path**: `app/clients/page.tsx`
- **Features**:
  - Two tabs accessible via dropdown:
    - **Our Projects** (`/clients?tab=projects`): 6 featured projects with details
    - **Our Clients** (`/clients?tab=clients`): Grid display of 12 trusted clients
  - Projects section includes:
    - Project name and client name
    - Sector categorization
    - Description and impact metrics
    - Year completed
  - Clients section includes:
    - Company logos/emojis
    - Industry category
    - Hover effects for interactivity

### 5. **Contact Us Page** (`/contact`)
- **Path**: `app/contact/page.tsx`
- **Features**:
  - Contact information cards: Phone, Email, Address
  - Full contact form with fields:
    - Full Name (required)
    - Email Address (required)
    - Phone Number
    - Company Name
    - Subject (required)
    - Message (required)
  - Form validation and success message
  - FAQ section on the sidebar
  - Response time guarantees
  - Contact details for quick reference

---

## Navigation System

### Header Component (`components/Header.tsx`)
The updated header includes:

#### Desktop Navigation
- Fixed horizontal navigation bar
- Logo with BMRB branding
- Main navigation links with dropdowns
- CTA "Get Started" button linking to contact page
- Smooth scroll detection with dynamic styling

#### Dropdown Menus
The dropdown menus now intelligently navigate to specific content:

**About Us Dropdown:**
- About Company → `/about?tab=company`
- Our Team → `/about?tab=team`

**Services Dropdown:**
- Brand & Product Research → `/services?service=brand-research`
- Customer Satisfaction Research → `/services?service=customer-satisfaction`
- B2B & Industrial Research → `/services?service=b2b-research`
- Election Surveys & Opinion Polls → `/services?service=election-surveys`
- Government Project Evaluation → `/services?service=government-evaluation`
- Market Assessment Studies → `/services?service=market-assessment`

**Clients Dropdown:**
- Our Projects → `/clients?tab=projects`
- Our Clients → `/clients?tab=clients`

#### Mobile Navigation
- Hamburger menu icon
- Collapsible mobile menu
- Touch-friendly dropdown toggles
- Full menu accessibility on all device sizes

### PageHeader Component (`components/PageHeader.tsx`)
Reusable page header component with:
- Dynamic title
- Description text
- Breadcrumb navigation
- Gradient background for visual hierarchy

---

## URL Query Parameters

The site uses URL query parameters for state management:

```
/about?tab=company          # Company information
/about?tab=team             # Team information

/services?service=brand-research                  # Brand research service
/services?service=customer-satisfaction           # Customer satisfaction service
/services?service=b2b-research                    # B2B research service
/services?service=election-surveys                # Election surveys service
/services?service=government-evaluation           # Government evaluation service
/services?service=market-assessment               # Market assessment service

/clients?tab=projects       # Featured projects
/clients?tab=clients        # Client list
```

---

## Technical Implementation

### Frontend Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **State Management**: URL query parameters + React state hooks

### Key Components
1. **Header.tsx** - Navigation with dropdowns
2. **PageHeader.tsx** - Page title sections
3. **About/page.tsx** - About Us content
4. **Services/page.tsx** - Services with tabs
5. **Clients/page.tsx** - Projects and clients
6. **Contact/page.tsx** - Contact form
7. **Footer.tsx** - Footer section
8. **Hero.tsx** - Homepage hero

### Design System
- **Color Palette**:
  - Primary: Dark Charcoal (#1a1a1a)
  - Secondary: Professional Blue
  - Neutrals: Off-white, grays
- **Typography**: Geist font family
- **Spacing**: Tailwind's standardized scale
- **Responsive**: Mobile-first design with md: and lg: breakpoints

---

## How Dropdowns Work

### Desktop Behavior
- Hover over any navigation item with a dropdown arrow
- Submenu appears with smooth transitions
- Click any submenu item to navigate
- URL includes query parameters for state persistence

### Mobile Behavior
- Tap navigation item to toggle dropdown
- Menu items expand/collapse with chevron rotation
- Tap specific submenu item to navigate
- Menu closes after selection
- Full accessibility with touch events

### State Persistence
All pages read URL query parameters on load:
```typescript
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab');
  if (tab) setActiveTab(tab);
}, []);
```

---

## Page Features

### About Us
- **Company Tab**:
  - Mission and vision statements
  - 3 key metrics cards (25+, 500+, 100+)
  - Why choose us section with 4 key benefits
  - Professional design with icons
  
- **Team Tab**:
  - 6 team member profiles
  - Roles and expertise descriptions
  - Company culture section with 4 values

### Services
- **Service List** (sticky sidebar on desktop)
- **Service Details** (main content area)
- **Dynamic Content**: Each service shows:
  - Icon and title
  - Description
  - Features & deliverables
  - Call-to-action

### Clients
- **Projects Tab**:
  - 6 featured projects
  - Client name and sector
  - Project description
  - Impact metrics
  - Year completed
  
- **Clients Tab**:
  - Grid of 12 trusted clients
  - Visual representation with emojis
  - Industry categorization
  - Hover effects for engagement

### Contact
- **Contact Info**: Phone, email, address
- **Contact Form**: 6 fields with validation
- **FAQ Section**: 3 common questions answered
- **Response Times**: Listed service levels
- **Professional Design**: Clean, accessible layout

---

## URL Structure Reference

```
Home:           /
About Company:  /about?tab=company
About Team:     /about?tab=team
Services:       /services
Services:       /services?service=brand-research
Services:       /services?service=customer-satisfaction
Services:       /services?service=b2b-research
Services:       /services?service=election-surveys
Services:       /services?service=government-evaluation
Services:       /services?service=market-assessment
Clients:        /clients
Projects:       /clients?tab=projects
Our Clients:    /clients?tab=clients
Contact:        /contact
```

---

## File Structure

```
app/
├── layout.tsx                  # Root layout with metadata
├── page.tsx                    # Home page
├── about/
│   └── page.tsx               # About Us page with tabs
├── services/
│   └── page.tsx               # Services page with filters
├── clients/
│   └── page.tsx               # Clients page with tabs
├── contact/
│   └── page.tsx               # Contact page with form
└── globals.css                # Global styles & design tokens

components/
├── Header.tsx                 # Navigation with dropdowns
├── PageHeader.tsx             # Page header component
├── Hero.tsx                   # Homepage hero section
├── Services.tsx               # Home services overview
├── Testimonials.tsx           # Client testimonials
├── CTA.tsx                    # Call-to-action section
├── Footer.tsx                 # Footer section
├── About.tsx                  # (Old - removed from homepage)
├── Portfolio.tsx              # (Old - removed from homepage)
```

---

## Customization Guide

### Adding a New Service
1. Add to `services` array in `/services/page.tsx`
2. Include id, title, icon, and details
3. Dropdown menu will auto-populate

### Adding a New Client
1. Add to `clients` array in `/clients/page.tsx`
2. Include name, logo (emoji), and category
3. Grid will auto-layout

### Adding a New Team Member
1. Add to team array in `/about/page.tsx`
2. Include name, role, and expertise
3. Grid will auto-populate

### Modifying Dropdown Links
Edit the `navLinks` array in `components/Header.tsx` to change dropdown structure

---

## Performance & SEO

- **Metadata**: Configured in root layout
- **Page-specific titles**: Updated on each page
- **Responsive Design**: Works on all devices
- **Code Splitting**: Next.js automatically handles per-page bundles
- **Static Generation**: All pages prerendered for maximum performance
- **Breadcrumbs**: Helps users navigate and improves SEO

---

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Testing Dropdowns

1. **Desktop**: Hover over header items to see dropdowns
2. **Mobile**: Tap header items to expand dropdowns
3. **Navigation**: Click any dropdown item to navigate
4. **URL**: Check URL changes to include query parameters
5. **State**: Refresh page - selected tab should persist

---

## Deployment

To deploy to Vercel:
```bash
git push                        # Push to connected GitHub repo
# Vercel automatically deploys  # Site is live!
```

---

## Support & Next Steps

Your site is now fully functional with:
✅ Multi-page navigation
✅ Intelligent dropdown menus
✅ Query parameter state management
✅ Professional design across all pages
✅ Mobile-responsive layout
✅ Contact form with validation
✅ SEO-optimized metadata

For further customization, edit individual page files or the Header component.
