# BMRB Website - Dropdown Onclick Functionality & Content Guide

## Overview
The BMRB website now features complete dropdown navigation with onclick handlers that navigate to detailed content pages. All content is sourced directly from https://bmrb.in/

---

## 1. HEADER DROPDOWNS (components/Header.tsx)

### Navigation Structure
The header contains 5 main navigation items with 3 dropdown menus:

#### **About Us Dropdown** → `/about`
- **About Company** (`/about?tab=company`)
  - Onclick: Updates URL query parameter to `tab=company`
  - Content: Company mission, achievements, why choose BMRB
  - Stats: 25+ years, 500+ projects, 100+ professionals, 100% confidentiality

- **Our Team** (`/about?tab=team`)
  - Onclick: Updates URL query parameter to `tab=team`
  - Content: Detailed team structure with 6 role categories
  - Team Members: Research Directors, Senior Supervisors, Data Analysts, Field Researchers, Quality Control, Consultants
  - Workforce: 115+ total members, 15+ supervisors, 100+ trained freelancers

#### **Services Dropdown** → `/services`
- Displays all 6 service categories as clickable items
- Each service has an onclick handler that updates URL with `?service=` parameter
- Selected service displays full details in main content area

#### **Clients Dropdown** → `/clients`
- **Our Projects** (`/clients?tab=projects`)
  - Onclick: Updates URL query parameter to `tab=projects`
  - Content: 6 featured projects with details

- **Our Clients** (`/clients?tab=clients`)
  - Onclick: Updates URL query parameter to `tab=clients`
  - Content: Trusted client list across different sectors

---

## 2. ABOUT US PAGE (/app/about/page.tsx)

### Tab Navigation with Onclick Handlers

**Function: `handleTabClick(tab: string)`**
```
- Updates activeTab state
- Updates URL query parameter: router.push(`/about?tab=${tab}`)
- Automatically persists on page refresh
```

#### **About Company Tab** (`?tab=company`)

**Content Sections:**

1. **Our Expertise**
   - Mission: "Market Research Driven by Experienced Professionals"
   - Statement: "We provide high-quality data reports collected and analyzed by our certified professionals. Our commitment is to accuracy, timely deliverables, and dedicated service, ensuring 100% confidentiality and value for every client."

2. **Our Achievements** (4 stat cards)
   - 25+ Years of Experience
   - 500+ Projects Completed
   - 100+ Trained Professionals
   - 100% Confidentiality

3. **Why Choose BMRB** (4 cards)
   - Guaranteed Confidentiality
   - Timely Deliverables
   - Certified Professionals
   - Diverse Experience (government, corporate, startup sectors)

4. **Our Commitment to Quality**
   - 100+ Trained Freelancers
   - 15 Experienced Supervisors
   - 25+ Data Analysts & Researchers

#### **Our Team Tab** (`?tab=team`)

**Content Sections:**

1. **Team Overview**
   - "Our team includes over 100 trained freelancers and 15 experienced supervisors. With dedicated Data Analysts, Researchers, and a professional Quality Control team, we ensure every project meets the highest standards."

2. **Team Structure** (6 role cards)
   - **Research Directors**: Expert researchers leading complex projects
   - **Senior Supervisors**: 15 supervisors ensuring quality standards
   - **Data Analysts**: Transform raw data into actionable intelligence
   - **Field Researchers**: 100+ trained freelancers conducting fieldwork
   - **Quality Control Team**: Ensuring accuracy and confidentiality
   - **Consultants**: Strategic guidance on research methodologies

3. **Our Dedicated Workforce** (stats section)
   - 115+ Total Team Members
   - 15+ Supervisors
   - 100+ Trained Freelancers
   - 25+ Analysts & Researchers

---

## 3. SERVICES PAGE (/app/services/page.tsx)

### Onclick Service Selection

**Function: `handleServiceClick(serviceId: string)`**
```
- Updates activeService state
- Updates URL query parameter: router.push(`/services?service=${serviceId}`)
- Sidebar button highlights active service
- Main content area displays full service details
```

### Service Details with Onclick Navigation

Each of the 6 services has comprehensive content:

#### **1. Brand & Product Research** (`?service=brand-research`)

**Description**: In-depth studies to understand brand perception and product performance

**Full Details**:
"Our brand and equity research services provide in-depth studies on brand positioning, image correlation, equity assessment, and consumer attitudes. We help organizations understand how their brand is perceived, evaluate new product concepts, analyze competitive positioning, and identify market opportunities. Our comprehensive approach delivers detailed insights for brand strategy and product development decisions."

**Features**:
- Brand Awareness Studies
- Product Concept Testing
- Competitive Positioning Analysis
- Brand Health Tracking
- Consumer Attitude Studies
- Brand Equity Assessment
- Market Positioning Analysis

**Experience Note**: "We work with leading automotive and consumer brands to ensure their products resonate with target audiences and maintain competitive advantage."

---

#### **2. Customer Satisfaction Research** (`?service=customer-satisfaction`)

**Description**: Comprehensive feedback collection to measure customer satisfaction and improve services

**Full Details**:
"Measuring and managing customer satisfaction is critical for business growth. We conduct comprehensive satisfaction studies through real-time tracking and continuous feedback analysis. Our services help you assess customer satisfaction levels, identify pain points in service delivery, measure Net Promoter Score (NPS), evaluate loyalty programs, and build lasting customer relationships through continuous service improvement."

**Features**:
- NPS & CSAT Studies
- Customer Journey Mapping
- Satisfaction Surveys
- Loyalty Program Evaluation
- Service Quality Assessment
- Dealer Satisfaction Studies
- Customer Experience Analysis

**Experience Note**: "We have extensive experience in automotive sector satisfaction studies, helping dealers and manufacturers optimize customer relationships."

---

#### **3. B2B & Industrial Research** (`?service=b2b-research`)

**Description**: Data-driven insights to support strategic decisions for B2B and industrial sectors

**Full Details**:
"Our B2B and industrial research services provide market assessment, feasibility studies, and competitive intelligence specifically tailored for business-to-business sectors. We understand complex B2B markets, industrial dynamics, and enterprise decision-making processes. Our research helps you identify market opportunities, understand buyer behavior, and develop effective go-to-market strategies."

**Features**:
- Decision-Maker Profiling
- Purchase Intent Studies
- Industry Benchmarking
- Channel Strategy Research
- Feasibility Studies
- Market Entry Analysis
- Competitive Intelligence

**Experience Note**: "Our expertise spans transportation, manufacturing, and industrial sectors, providing actionable insights for strategic business decisions."

---

#### **4. Election Surveys & Opinion Polls** (`?service=election-surveys`)

**Description**: Accurate and reliable election surveys and opinion polls for political insights

**Full Details**:
"We conduct comprehensive political and social research including election surveys, opinion polling, constituency analysis, and readership surveys. Our proven methodologies ensure representative sampling and statistically valid results for political campaigns, policy research, and public opinion tracking. We maintain the highest standards of accuracy and objectivity in all political research."

**Features**:
- Exit Polls
- Voter Preference Tracking
- Constituency Analysis
- Opinion Polling
- Demographic Analysis
- Trend Analysis
- Statistical Validation

**Experience Note**: "Our election research team has conducted successful surveys across multiple constituencies and campaigns with proven accuracy."

---

#### **5. Government Project Evaluation** (`?service=government-evaluation`)

**Description**: Independent evaluations of public and government projects for policy improvements

**Full Details**:
"We provide comprehensive evaluation services for government programs and public sector projects. Our evaluations assess program effectiveness, measure social impact, evaluate policy outcomes, and provide evidence-based recommendations for improvement. We work with government institutions to ensure projects deliver intended benefits and achieve policy objectives."

**Features**:
- Impact Assessment
- Program Evaluation
- Policy Research
- Stakeholder Analysis
- Performance Metrics
- Compliance Assessment
- Outcome Measurement

**Experience Note**: "We have successfully evaluated government projects in transportation, public safety, and social welfare sectors across multiple government agencies."

---

#### **6. Market Assessment Studies** (`?service=market-assessment`)

**Description**: Research-based studies to analyze markets, trends, and opportunities for growth

**Full Details**:
"Our market assessment studies provide thorough market analysis for new market entry, expansion planning, or market opportunity identification. We help you understand market size and growth potential, identify key players, assess regulatory environment, and understand success factors in target markets. Perfect for startups and established companies planning growth strategies."

**Features**:
- Market Sizing
- Growth Opportunity Analysis
- Market Trends
- Entry Strategy
- Competitive Landscape
- Startup Market Research
- E-commerce Research

**Experience Note**: "We have provided market research for 450+ startups including industry leaders like Swiggy, supporting their launch and growth strategies."

---

## 4. CLIENTS PAGE (/app/clients/page.tsx)

### Tab Navigation with Onclick Handlers

**Function: `handleTabClick(tab: string)`**
```
- Updates activeTab state
- Updates URL query parameter: router.push(`/clients?tab=${tab}`)
- Automatically persists on page refresh
```

#### **Our Projects Tab** (`?tab=projects`)

**Featured Projects** (6 projects from BMRB portfolio):

1. **Hyderabad Metro Rail Study**
   - Category: Government Project, Transport, Fare Analysis
   
2. **Hyundai Motors Analysis**
   - Category: Automotive, Customer & Dealer Satisfaction
   
3. **Telangana Police Dept. Projects**
   - Category: Public Sector, Safety, Performance Assessment
   
4. **Election & Opinion Poll Surveys**
   - Category: Political Research, Constituency Analysis
   
5. **Startup Market Research**
   - Category: Startup Sector, Brand Research, E-commerce (Swiggy, etc.)
   
6. **Radio Listener Studies**
   - Category: Media & Entertainment, Satisfaction Analysis

#### **Our Clients Tab** (`?tab=clients`)

**Trusted Clients** (6+ major clients):

1. **Hyundai Motors** - Global Automotive Leader
   - Work: Conducted comprehensive dealer and customer satisfaction studies
   
2. **Telangana Police Department** - State Government Institution
   - Work: Performed assessment studies on Traffic E-challan system, 'She Team', and Hawkeye safety application
   
3. **Reliance Broadcasting** - Media & Entertainment
   - Work: Executed listener satisfaction study for 92.7 radio channel
   
4. **Startup Ecosystem** - Featuring Swiggy.com & 450+ Others
   - Work: Provided market research for 450+ startups for launch and growth strategies
   
5. **Government Institutions** - Various sectors
   - Work: Multiple evaluation and assessment projects

---

## 5. CONTACT PAGE (/app/contact/page.tsx)

**Contact Information**:
- Location: Hyderabad, Telangana, India
- Contact Form with fields: Name, Email, Phone, Company, Subject, Message
- CTA: "Contact Us Now" button

---

## URL Query Parameters Reference

| Route | Parameter | Value | Display |
|-------|-----------|-------|---------|
| `/about` | `tab` | `company` | About Company content |
| `/about` | `tab` | `team` | Our Team content |
| `/services` | `service` | `brand-research` | Brand & Product Research |
| `/services` | `service` | `customer-satisfaction` | Customer Satisfaction Research |
| `/services` | `service` | `b2b-research` | B2B & Industrial Research |
| `/services` | `service` | `election-surveys` | Election Surveys & Opinion Polls |
| `/services` | `service` | `government-evaluation` | Government Project Evaluation |
| `/services` | `service` | `market-assessment` | Market Assessment Studies |
| `/clients` | `tab` | `projects` | Our Projects content |
| `/clients` | `tab` | `clients` | Our Clients content |

---

## Testing Dropdown Functionality

### Desktop Testing
1. **Hover over dropdown** in header → Smooth dropdown appears
2. **Click on item** → Page navigates and URL updates with query parameter
3. **Refresh page** → Content persists (state saved in URL)

### Mobile Testing
1. **Tap menu icon** (☰) → Mobile menu opens
2. **Tap item with chevron** → Dropdown expands showing options
3. **Tap specific option** → Navigates to page with correct state

### URL State Testing
- Visit `/services?service=election-surveys` directly → Page loads with that service displayed
- Navigate via dropdown → URL updates automatically
- Share URL → Others see the same content you were viewing

---

## Technical Implementation

### State Management
- All state is managed via URL query parameters (`useSearchParams`)
- Prevents state loss on refresh
- Allows bookmarking and sharing specific views
- Enables browser back/forward functionality

### Onclick Handlers
```typescript
// About page example
const handleTabClick = (tab: string) => {
  setActiveTab(tab);
  router.push(`/about?tab=${tab}`, { scroll: false });
};

// Services page example
const handleServiceClick = (serviceId: string) => {
  setActiveService(serviceId);
  router.push(`/services?service=${serviceId}`, { scroll: false });
};
```

### Header Dropdowns
- Desktop: Hover reveals dropdown, click navigates
- Mobile: Tap reveals dropdown options, click navigates
- All dropdowns pre-configured in Header component
- No additional onclick code needed - Link components handle navigation

---

## Content Sources
All content sourced from https://bmrb.in/:
- Service descriptions and features
- Team structure and roles
- Project portfolio and client list
- Company mission and values
- Statistics and achievements

