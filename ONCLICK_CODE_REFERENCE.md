# BMRB Website - Onclick Implementation Code Reference

## Header Dropdown Navigation (components/Header.tsx)

### Dropdown Configuration
```typescript
const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
    dropdown: [
      { label: 'About Company', href: '/about?tab=company' },
      { label: 'Our Team', href: '/about?tab=team' }
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Brand & Product Research', href: '/services?service=brand-research' },
      { label: 'Customer Satisfaction Research', href: '/services?service=customer-satisfaction' },
      { label: 'B2B & Industrial Research', href: '/services?service=b2b-research' },
      { label: 'Election Surveys & Opinion Polls', href: '/services?service=election-surveys' },
      { label: 'Government Project Evaluation', href: '/services?service=government-evaluation' },
      { label: 'Market Assessment Studies', href: '/services?service=market-assessment' }
    ]
  },
  { 
    label: 'Clients', 
    href: '/clients',
    dropdown: [
      { label: 'Our Projects', href: '/clients?tab=projects' },
      { label: 'Our Clients', href: '/clients?tab=clients' }
    ]
  },
  { label: 'Contact Us', href: '/contact' },
];
```

### Desktop Dropdown Rendering
```typescript
{link.dropdown && (
  <div className="absolute left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
    {link.dropdown.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
```

**Desktop Onclick Behavior:**
- Hover over dropdown → Appears
- Click option → Link navigates via Next.js router
- URL updates automatically
- No manual onclick needed - Link component handles it

### Mobile Dropdown Rendering
```typescript
{link.dropdown && openDropdown === link.label && (
  <div className="pl-4 space-y-2 mt-2">
    {link.dropdown.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-white rounded-lg transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    ))}
  </div>
)}
```

**Mobile Onclick Behavior:**
- Tap menu icon → Opens mobile menu
- Tap item with dropdown → Expands options
- Tap option → Link navigates
- Menu closes after selection

---

## About Us Page - Onclick Implementation (app/about/page.tsx)

### State and URL Management
```typescript
function AboutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('company');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'team' || tab === 'company') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/about?tab=${tab}`, { scroll: false });
  };
```

### Tab Button Onclick Handlers
```typescript
<button
  onClick={() => handleTabClick('company')}
  className={`px-6 py-3 font-medium text-sm transition-colors ${
    activeTab === 'company'
      ? 'text-secondary border-b-2 border-secondary'
      : 'text-foreground/60 hover:text-foreground'
  }`}
>
  About Company
</button>

<button
  onClick={() => handleTabClick('team')}
  className={`px-6 py-3 font-medium text-sm transition-colors ${
    activeTab === 'team'
      ? 'text-secondary border-b-2 border-secondary'
      : 'text-foreground/60 hover:text-foreground'
  }`}
>
  Our Team
</button>
```

**Onclick Flow:**
1. User clicks "Our Team" button
2. `handleTabClick('team')` is called
3. `setActiveTab('team')` updates state
4. `router.push('/about?tab=team')` updates URL
5. `useEffect` detects URL change
6. Component re-renders with team content

### Tab Content Rendering
```typescript
{activeTab === 'team' && (
  <div className="space-y-12">
    {/* Team Overview */}
    {/* Team Structure Cards */}
    {/* Team Stats */}
  </div>
)}

{activeTab === 'company' && (
  <div className="space-y-12">
    {/* Company Mission */}
    {/* Achievements */}
    {/* Why Choose BMRB */}
  </div>
)}
```

---

## Services Page - Onclick Implementation (app/services/page.tsx)

### Service Array with IDs
```typescript
const services = [
  {
    id: 'brand-research',
    title: 'Brand & Product Research',
    icon: TrendingUp,
    description: '...',
    details: '...',
    features: [...],
    additional: '...'
  },
  // ... 5 more services
];
```

### State and URL Management
```typescript
function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeService, setActiveService] = useState('brand-research');

  useEffect(() => {
    const service = searchParams.get('service');
    if (service && services.find(s => s.id === service)) {
      setActiveService(service);
    }
  }, [searchParams]);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    router.push(`/services?service=${serviceId}`, { scroll: false });
  };

  const selectedService = services.find(s => s.id === activeService);
```

### Service Button Onclick Handlers
```typescript
{services.map((service) => {
  const Icon = service.icon;
  return (
    <button
      key={service.id}
      onClick={() => handleServiceClick(service.id)}
      className={`w-full flex items-start gap-4 p-4 rounded-lg border transition-all text-left ${
        activeService === service.id
          ? 'bg-secondary/10 border-secondary text-foreground'
          : 'border-border text-foreground/70 hover:border-secondary/50 hover:bg-muted'
      }`}
    >
      <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="font-bold text-sm">{service.title}</h3>
      </div>
    </button>
  );
})}
```

**Onclick Flow:**
1. User clicks service button in sidebar
2. `handleServiceClick(serviceId)` is called
3. `setActiveService(serviceId)` updates state
4. `router.push('/services?service=${serviceId}')` updates URL
5. `useEffect` detects URL change
6. Button highlights (background/border change)
7. Right panel displays service details

### Service Details Display
```typescript
{selectedService && (
  <div className="space-y-8">
    {/* Service header with icon */}
    <div className="flex items-start gap-6">
      {React.createElement(selectedService.icon, { 
        className: 'w-16 h-16 text-secondary flex-shrink-0' 
      })}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-3">
          {selectedService.title}
        </h2>
        <p className="text-lg text-foreground/70">
          {selectedService.description}
        </p>
      </div>
    </div>

    {/* Full details */}
    <div className="bg-card border border-border rounded-lg p-6">
      <p className="text-foreground/70 leading-relaxed">
        {selectedService.details}
      </p>
    </div>

    {/* Features */}
    <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
      <h3 className="text-xl font-bold text-foreground mb-6">
        Key Features & Deliverables
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {selectedService.features.map((feature, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-secondary font-bold text-lg">✓</span>
            <span className="text-foreground/80">{feature}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Additional info */}
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <p className="text-foreground/70 leading-relaxed italic">
        {selectedService.additional}
      </p>
    </div>
  </div>
)}
```

---

## Clients Page - Onclick Implementation (app/clients/page.tsx)

### Tab State Management
```typescript
function ClientsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'projects' || tab === 'clients') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/clients?tab=${tab}`, { scroll: false });
  };
```

### Tab Button Onclick Handlers
```typescript
<button
  onClick={() => handleTabClick('projects')}
  className={`px-6 py-3 font-medium text-sm transition-colors ${
    activeTab === 'projects'
      ? 'text-secondary border-b-2 border-secondary'
      : 'text-foreground/60 hover:text-foreground'
  }`}
>
  Our Projects
</button>

<button
  onClick={() => handleTabClick('clients')}
  className={`px-6 py-3 font-medium text-sm transition-colors ${
    activeTab === 'clients'
      ? 'text-secondary border-b-2 border-secondary'
      : 'text-foreground/60 hover:text-foreground'
  }`}
>
  Our Clients
</button>
```

### Tab Content Rendering
```typescript
{activeTab === 'projects' && (
  <div className="space-y-8">
    {projects.map((project) => (
      <div key={project.id} className="bg-card border border-border rounded-lg p-6">
        {/* Project details */}
      </div>
    ))}
  </div>
)}

{activeTab === 'clients' && (
  <div className="grid md:grid-cols-2 gap-8">
    {clients.map((client) => (
      <div key={client.id} className="bg-card border border-border rounded-lg p-6">
        {/* Client details */}
      </div>
    ))}
  </div>
)}
```

---

## URL Query Parameter Handling

### Auto-loading from URL
```typescript
useEffect(() => {
  const service = searchParams.get('service');
  if (service && services.find(s => s.id === service)) {
    setActiveService(service);
  }
}, [searchParams]);
```

**This means:**
- User can visit `/services?service=election-surveys` directly
- Page loads with that service already selected
- No onclick needed - URL state is restored

### State Persistence
```typescript
router.push(`/services?service=${serviceId}`, { scroll: false });
```

**This means:**
- Clicking updates URL
- Refreshing page keeps the same state
- Browser back/forward works
- URLs are shareable

---

## Summary of Onclick Implementation

| Location | Onclick Type | Handler | URL Update |
|----------|--------------|---------|-----------|
| Header dropdowns | Link click | Native Link | Automatic |
| About tabs | Button click | `handleTabClick()` | `router.push()` |
| Services sidebar | Button click | `handleServiceClick()` | `router.push()` |
| Clients tabs | Button click | `handleTabClick()` | `router.push()` |

All onclick handlers follow the same pattern:
1. **Update state** - Set active item
2. **Update URL** - Push query parameter
3. **Render** - Component re-renders with new content
4. **Persist** - State saved in URL for refresh/sharing

