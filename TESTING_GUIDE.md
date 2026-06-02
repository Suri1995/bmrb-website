# BMRB Website - Complete Onclick & Dropdown Testing Guide

## Quick Start - Test All Dropdowns

### Header Navigation Dropdowns (All Pages)

**About Us Dropdown:**
- Desktop: Hover over "About Us" → Click "About Company" or "Our Team"
- Mobile: Tap ☰ → Tap "About Us" → See 2 options → Tap one to navigate
- URL updates: `/about?tab=company` or `/about?tab=team`

**Services Dropdown:**
- Desktop: Hover over "Services" → Click any of 6 services
- Mobile: Tap ☰ → Tap "Services" → See 6 options → Tap one to navigate
- URL updates: `/services?service=brand-research` (or other service)

**Clients Dropdown:**
- Desktop: Hover over "Clients" → Click "Our Projects" or "Our Clients"
- Mobile: Tap ☰ → Tap "Clients" → See 2 options → Tap one to navigate
- URL updates: `/clients?tab=projects` or `/clients?tab=clients`

---

## Complete Test Scenarios

### Scenario 1: About Us - Our Team
1. Go to header → Hover "About Us" (desktop) or tap ☰ then "About Us" (mobile)
2. Click "Our Team"
3. Page loads showing team structure with 6 roles
4. URL shows: `/about?tab=team`
5. Content displays: Team Overview, Team Structure (6 cards), Workforce Stats
6. Refresh page → Content persists

**Content Shown:**
- 115+ Team Members
- 6 Team Structure cards (Directors, Supervisors, Analysts, Researchers, QC, Consultants)
- Stats: 15+ Supervisors, 100+ Freelancers, 25+ Analysts

---

### Scenario 2: Services - Brand & Product Research
1. Go to header → Hover "Services" → Click "Brand & Product Research"
2. Page loads with service selected in sidebar
3. Left sidebar highlights "Brand & Product Research"
4. Right side shows detailed service information
5. URL shows: `/services?service=brand-research`

**Content Shown:**
- Service icon and title
- Full description of the service
- 7 key features/deliverables
- Experience note about automotive brands
- "Contact Us" button

**Test Clicking Other Services:**
- Click "Customer Satisfaction Research" → Content updates, URL changes to `?service=customer-satisfaction`
- Click "B2B & Industrial Research" → Content updates, URL changes to `?service=b2b-research`
- Click "Election Surveys & Opinion Polls" → Content updates, URL changes to `?service=election-surveys`
- Click "Government Project Evaluation" → Content updates, URL changes to `?service=government-evaluation`
- Click "Market Assessment Studies" → Content updates, URL changes to `?service=market-assessment`

---

### Scenario 3: Clients - Our Projects
1. Go to header → Hover "Clients" → Click "Our Projects"
2. Page loads with "Our Projects" tab active
3. Tab shows border underline on active state
4. URL shows: `/clients?tab=projects`
5. Content displays 6 featured projects

**Projects Displayed:**
- Hyderabad Metro Rail Study
- Hyundai Motors Analysis
- Telangana Police Dept. Projects
- Election & Opinion Poll Surveys
- Startup Market Research (Swiggy, etc.)
- Radio Listener Studies

---

### Scenario 4: Clients - Our Clients
1. Go to header → Hover "Clients" → Click "Our Clients"
2. "Our Clients" tab becomes active
3. URL shows: `/clients?tab=clients`
4. Content displays trusted client list

**Clients Displayed:**
- Hyundai Motors (Automotive Leader)
- Telangana Police Department (Government)
- Reliance Broadcasting (Media & Entertainment)
- Startup Ecosystem (450+ Startups including Swiggy)
- Government Institutions

---

## URL Direct Access Test

Test that all URLs work when accessed directly (without using dropdowns):

```
✓ /about?tab=company
  Should show: About Company tab active with company mission, stats, why choose us

✓ /about?tab=team
  Should show: Our Team tab active with team structure and stats

✓ /services?service=brand-research
  Should show: Brand & Product Research service details

✓ /services?service=customer-satisfaction
  Should show: Customer Satisfaction Research service details

✓ /services?service=b2b-research
  Should show: B2B & Industrial Research service details

✓ /services?service=election-surveys
  Should show: Election Surveys & Opinion Polls service details

✓ /services?service=government-evaluation
  Should show: Government Project Evaluation service details

✓ /services?service=market-assessment
  Should show: Market Assessment Studies service details

✓ /clients?tab=projects
  Should show: Our Projects tab with 6 featured projects

✓ /clients?tab=clients
  Should show: Our Clients tab with trusted client list
```

---

## Mobile Responsive Test

### iPhone/Mobile View (< 768px width)

**Header Menu:**
- [ ] Hamburger menu icon (☰) visible
- [ ] "Get Started" button hidden on mobile
- [ ] Logo shows as "B" icon only

**About Page Mobile:**
- [ ] Tab buttons stack properly
- [ ] Tap "Our Team" → Content loads below tabs
- [ ] Team cards display in single column
- [ ] Stats cards display in 2x2 grid

**Services Page Mobile:**
- [ ] Service sidebar moves above content on small screens
- [ ] Tap service button → Content updates below
- [ ] Features list displays well on mobile width
- [ ] CTA button is full width

**Clients Page Mobile:**
- [ ] Tab buttons stack properly
- [ ] Projects/clients display in responsive grid
- [ ] All content readable at mobile width

---

## Browser Back/Forward Test

1. Navigate to `/services?service=brand-research`
2. Click to change service to `/services?service=election-surveys`
3. Click browser BACK button → Should return to brand-research
4. Click browser FORWARD button → Should return to election-surveys
5. URL and content should sync correctly

---

## Content Verification Checklist

### About Company Tab
- [ ] Mission statement present
- [ ] 4 achievement stat cards visible
- [ ] 4 "Why Choose BMRB" cards with icons
- [ ] Commitment to Quality section with 3 stats

### Our Team Tab
- [ ] Team overview text present
- [ ] 6 team structure role cards displayed
- [ ] Stats section with 4 metrics
- [ ] All team roles described

### Each Service Page
- [ ] Service icon displayed
- [ ] Title and description visible
- [ ] Full detailed description paragraph
- [ ] 7 features/deliverables listed
- [ ] Additional experience note shown
- [ ] Contact Us button at bottom

### Our Projects Tab
- [ ] 6 project cards displayed
- [ ] Each project has name and category
- [ ] Professional card styling applied

### Our Clients Tab
- [ ] 4+ major clients listed
- [ ] Client categories shown
- [ ] Company descriptions provided

---

## Performance Test

- [ ] Page loads in < 2 seconds
- [ ] Tab switching is instantaneous
- [ ] Service selection updates immediately
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## Accessibility Test

- [ ] All links have descriptive text (no "click here")
- [ ] Buttons are keyboard accessible (Tab key works)
- [ ] Color contrast meets WCAG AA standards
- [ ] Icons have alt text
- [ ] Headings have proper hierarchy (h1, h2, h3)

---

## Summary

**All Dropdowns Have Onclick Handlers:**
✓ About Us → 2 options with onclick
✓ Services → 6 options with onclick
✓ Clients → 2 options with onclick

**All Content is Real:**
✓ Sourced from https://bmrb.in/
✓ Team information accurate
✓ Service descriptions comprehensive
✓ Project portfolio real

**URL Query Parameters Work:**
✓ All URLs support direct access
✓ State persists on refresh
✓ Browser back/forward works
✓ URLs are shareable and bookmarkable

---

## Quick Test Links

Copy and paste these directly into your browser:

- http://localhost:3000/about?tab=team
- http://localhost:3000/services?service=election-surveys
- http://localhost:3000/services?service=customer-satisfaction
- http://localhost:3000/services?service=b2b-research
- http://localhost:3000/services?service=government-evaluation
- http://localhost:3000/services?service=market-assessment
- http://localhost:3000/clients?tab=projects
- http://localhost:3000/clients?tab=clients
- http://localhost:3000/contact

