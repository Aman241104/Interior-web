// ─── Company Info ────────────────────────────────────────────────────────────

export const company = {
  name: "Styluxe Interior Decor",
  tagline: "Crafting Spaces That Define You",
  subTagline: "Premium turnkey interior design delivered in under 90 days",
  founded: 2013,
  founder: "Akash Modi",
  email: "akashmodi@ymail.com",
  phone: "+91 99999 99999",
  address: {
    line1: "01, Murlidhar Complex",
    line2: "Nr. Fathepura Cross Road, Opp. Fathepura Police Chowky",
    city: "Paldi, Ahmedabad",
    state: "Gujarat",
    pincode: "380007",
    full: "01, Murlidhar Complex, Nr. Fathepura Cross Road, Opp. Fathepura Police Chowky, Paldi, Ahmedabad, Gujarat 380007",
  },
  stats: {
    residential: 17,
    commercial: 10,
    total: 27,
    experience: 13,
    team: 10,
    awards: 2,
    certifications: 4,
    goalProjects: 1000,
  },
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Calculator", href: "/calculator" },
  { label: "Contact", href: "/contact" },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export type ServiceCategory = "residential" | "commercial" | "medical" | "turnkey";

export const services = [
  {
    id: "residential",
    category: "residential" as ServiceCategory,
    title: "Residential Design",
    subtitle: "Apartments · Bungalows · Farmhouses",
    description:
      "From intimate city apartments to sprawling farmhouses, we craft living spaces that mirror your personality. Every corner is considered, every material curated.",
    features: [
      "Full apartment interiors",
      "Luxury bungalow design",
      "Farmhouse renovation",
      "Modular kitchens",
      "Master bedroom suites",
      "Custom furniture",
    ],
    accent: "gold",
    bgClass: "bg-stone-200",
  },
  {
    id: "commercial",
    category: "commercial" as ServiceCategory,
    title: "Commercial Spaces",
    subtitle: "Offices · Industrial · Retail",
    description:
      "Workplaces designed to inspire productivity and reflect brand identity. We build environments where businesses thrive and cultures form.",
    features: [
      "Corporate office fit-outs",
      "Industrial facility design",
      "Retail & showroom interiors",
      "Conference & boardrooms",
      "Reception & lobby areas",
      "Cafeteria & break rooms",
    ],
    accent: "terra",
    bgClass: "bg-stone-300",
  },
  {
    id: "medical",
    category: "medical" as ServiceCategory,
    title: "Medical & Healthcare",
    subtitle: "Hospitals · Clinics · Diagnostics",
    description:
      "Healthcare environments designed with strict compliance, infection control, and patient comfort at the forefront—because healing starts with the space.",
    features: [
      "Hospital ward design",
      "OPD & reception areas",
      "Diagnostic lab interiors",
      "Pharmacy fit-outs",
      "ICU & operation theatre",
      "Patient comfort suites",
    ],
    accent: "gold",
    bgClass: "bg-stone-200",
  },
  {
    id: "turnkey",
    category: "turnkey" as ServiceCategory,
    title: "Turnkey Packages",
    subtitle: "End-to-End · Zero Hassle",
    description:
      "One point of contact, zero surprises. Our turnkey service handles everything from concept to completion—design, procurement, execution, quality check.",
    features: [
      "Single-point accountability",
      "Vendor management",
      "Top-brand materials only",
      "CCTV-monitored worksites",
      "Timeline guarantee",
      "Post-handover support",
    ],
    accent: "terra",
    bgClass: "bg-stone-300",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps = [
  {
    step: "01",
    title: "Inquiry",
    description:
      "Share your vision, space details, and budget. We respond within 24 hours to schedule your first consultation.",
    duration: "Day 1",
  },
  {
    step: "02",
    title: "Consultation",
    description:
      "A deep-dive session with our lead designer. We understand your lifestyle, preferences, and functional needs.",
    duration: "Day 2–3",
  },
  {
    step: "03",
    title: "Layouting",
    description:
      "Space planning and layout creation. We present multiple floor plan options optimized for your specific space.",
    duration: "Week 1",
  },
  {
    step: "04",
    title: "Site Visit",
    description:
      "Our team visits your property to take precise measurements and assess structural requirements.",
    duration: "Week 1–2",
  },
  {
    step: "05",
    title: "2D / 3D Design",
    description:
      "Detailed 2D drawings and photorealistic 3D renders so you see exactly what you're getting before execution begins.",
    duration: "Week 2–3",
  },
  {
    step: "06",
    title: "Live 3D View",
    description:
      "Experience your future space through our immersive live 3D glasses walkthrough—a Styluxe exclusive.",
    duration: "Week 3",
  },
  {
    step: "07",
    title: "Execution",
    description:
      "Our skilled craftsmen bring the design to life. CCTV-monitored worksites, top-brand materials, daily progress updates.",
    duration: "Week 4–12",
  },
  {
    step: "08",
    title: "Quality Check",
    description:
      "Multi-point inspection by our quality team before final handover. We don't leave until every detail is perfect.",
    duration: "Final Week",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectType = "residential" | "commercial";

export const projects = [
  {
    id: 1,
    title: "Jasprit Bumrah Farmhouse",
    type: "residential" as ProjectType,
    subtype: "Farmhouse",
    location: "Ahmedabad, Gujarat",
    area: "8500 sqft",
    year: 2023,
    description:
      "A sprawling farmhouse retreat for India's premier fast bowler. Earthy tones, custom stone features, and open-plan living that blends nature with luxury.",
    tags: ["Farmhouse", "Luxury", "Custom Furniture"],
    bgClass: "bg-gradient-to-br from-stone-300 to-stone-400",
    featured: true,
  },
  {
    id: 2,
    title: "Kamlesh Patel Bungalow",
    type: "residential" as ProjectType,
    subtype: "Bungalow",
    location: "Paldi, Ahmedabad",
    area: "5200 sqft",
    year: 2022,
    description:
      "An executive bungalow for AGL's Chairman. Understated grandeur with marble accents, coffered ceilings, and a private study that commands authority.",
    tags: ["Bungalow", "Executive", "Marble Accents"],
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
    featured: true,
  },
  {
    id: 3,
    title: "Manas Shah Residence",
    type: "residential" as ProjectType,
    subtype: "Apartment",
    location: "Satellite, Ahmedabad",
    area: "3200 sqft",
    year: 2023,
    description:
      "A champion's home. Designed for Olympic player Manas Shah, this apartment balances athletic energy with serene recovery spaces.",
    tags: ["Apartment", "Modern", "Wellness"],
    bgClass: "bg-gradient-to-br from-amber-100 to-stone-300",
    featured: true,
  },
  {
    id: 4,
    title: "Global Hospital",
    type: "commercial" as ProjectType,
    subtype: "Hospital",
    location: "Ahmedabad, Gujarat",
    area: "12000 sqft",
    year: 2021,
    description:
      "A complete hospital interior overhaul. Patient-centric design with infection-control materials, wayfinding systems, and calming color psychology.",
    tags: ["Hospital", "Healthcare", "Turnkey"],
    bgClass: "bg-gradient-to-br from-sky-100 to-stone-200",
    featured: true,
  },
  {
    id: 5,
    title: "Ajanta Pharma HQ",
    type: "commercial" as ProjectType,
    subtype: "Office",
    location: "Navrangpura, Ahmedabad",
    area: "7800 sqft",
    year: 2022,
    description:
      "A pharmaceutical headquarters that communicates precision and trust. Clean lines, branded color language, and ergonomic workstation design.",
    tags: ["Corporate", "Office", "Branding"],
    bgClass: "bg-gradient-to-br from-stone-300 to-stone-400",
    featured: false,
  },
  {
    id: 6,
    title: "Bhavesh Patel Bungalow",
    type: "residential" as ProjectType,
    subtype: "Bungalow",
    location: "Bodakdev, Ahmedabad",
    area: "4100 sqft",
    year: 2022,
    description:
      "Warm textures and layered lighting define this family bungalow. A grand staircase, double-height living area, and dedicated children's zones.",
    tags: ["Bungalow", "Family Home", "Custom"],
    bgClass: "bg-gradient-to-br from-amber-100 to-amber-200",
    featured: false,
  },
  {
    id: 7,
    title: "Soham Bhagwat Apartment",
    type: "residential" as ProjectType,
    subtype: "Apartment",
    location: "Thaltej, Ahmedabad",
    area: "2400 sqft",
    year: 2023,
    description:
      "A contemporary apartment with an editorial aesthetic. Gallery-white walls, walnut furniture, and dramatic accent lighting throughout.",
    tags: ["Apartment", "Contemporary", "Minimalist"],
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
    featured: false,
  },
  {
    id: 8,
    title: "Dinatex Autolooms Factory",
    type: "commercial" as ProjectType,
    subtype: "Industrial",
    location: "Narol, Ahmedabad",
    area: "18000 sqft",
    year: 2021,
    description:
      "Industrial interior design for a textile manufacturing facility. Safety-first approach with efficient workflow layouts and durable material choices.",
    tags: ["Industrial", "Manufacturing", "Safety"],
    bgClass: "bg-gradient-to-br from-zinc-300 to-stone-400",
    featured: false,
  },
  {
    id: 9,
    title: "Rajlaxmi Chemicals Office",
    type: "commercial" as ProjectType,
    subtype: "Office",
    location: "GIDC Vatva, Ahmedabad",
    area: "3500 sqft",
    year: 2020,
    description:
      "A chemical company's office transformed into a modern, safety-compliant workspace with sleek modular furniture and a striking reception area.",
    tags: ["Office", "Industrial", "Modern"],
    bgClass: "bg-gradient-to-br from-stone-300 to-zinc-300",
    featured: false,
  },
  {
    id: 10,
    title: "Perfect Equities Trading Floor",
    type: "commercial" as ProjectType,
    subtype: "Office",
    location: "CG Road, Ahmedabad",
    area: "4200 sqft",
    year: 2023,
    description:
      "A high-performance trading floor with multi-screen workstations, acoustic ceiling panels, and a premium boardroom for client meetings.",
    tags: ["Finance", "Trading", "High-Tech"],
    bgClass: "bg-gradient-to-br from-stone-400 to-stone-500",
    featured: false,
  },
  {
    id: 11,
    title: "Sandip Chemicals Plant Office",
    type: "commercial" as ProjectType,
    subtype: "Industrial",
    location: "Ahmedabad, Gujarat",
    area: "2800 sqft",
    year: 2020,
    description:
      "Administrative offices for a chemical plant. Durable, clean, and functional—with breakout zones and a fully equipped conference facility.",
    tags: ["Industrial", "Office", "Functional"],
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
    featured: false,
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    id: 1,
    slug: "interior-design-trends-ahmedabad-2025",
    title: "10 Interior Design Trends Transforming Ahmedabad Homes in 2025",
    excerpt:
      "From Japandi aesthetics to bold biophilic accents, discover the design movements reshaping how Ahmedabad families live, work, and entertain.",
    category: "Trends",
    readTime: "8 min read",
    date: "June 2025",
    bgClass: "bg-gradient-to-br from-amber-100 to-stone-200",
  },
  {
    id: 2,
    slug: "complete-guide-turnkey-interior-design",
    title: "The Complete Guide to Turnkey Interior Design: What to Expect",
    excerpt:
      "What does 'turnkey' actually mean? We break down every phase of a turnkey interior project—from the first sketch to the final walk-through.",
    category: "Guide",
    readTime: "10 min read",
    date: "May 2025",
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
  },
  {
    id: 3,
    slug: "modular-kitchen-design-indian-homes",
    title: "Modular Kitchen Design Ideas for Indian Homes",
    excerpt:
      "Indian kitchens are high-activity zones. Here's how modular design can bring order, efficiency, and beauty to your most-used room.",
    category: "Kitchens",
    readTime: "7 min read",
    date: "May 2025",
    bgClass: "bg-gradient-to-br from-amber-200 to-amber-100",
  },
  {
    id: 4,
    slug: "choose-perfect-interior-designer-ahmedabad",
    title: "How to Choose the Perfect Interior Designer in Ahmedabad",
    excerpt:
      "Not all designers are created equal. Here's the insider checklist—portfolio, process, pricing, and the questions you must ask before signing.",
    category: "Advice",
    readTime: "6 min read",
    date: "April 2025",
    bgClass: "bg-gradient-to-br from-stone-300 to-stone-400",
  },
  {
    id: 5,
    slug: "false-ceiling-designs-living-room",
    title: "False Ceiling Designs That Elevate Your Living Room",
    excerpt:
      "Coved, coffered, layered, or backlit—false ceilings do far more than hide wires. Explore the designs that add drama and dimension overhead.",
    category: "Design",
    readTime: "5 min read",
    date: "April 2025",
    bgClass: "bg-gradient-to-br from-stone-200 to-amber-100",
  },
  {
    id: 6,
    slug: "office-interior-design-productivity",
    title: "Office Interior Design: Creating Workspaces That Boost Productivity",
    excerpt:
      "Biophilic elements, acoustic control, and zoning strategies—the science behind designing offices where people actually want to work.",
    category: "Commercial",
    readTime: "9 min read",
    date: "March 2025",
    bgClass: "bg-gradient-to-br from-zinc-200 to-stone-300",
  },
  {
    id: 7,
    slug: "vastu-compliant-interior-design",
    title: "Vastu-Compliant Interior Design: Tradition Meets Modern Aesthetics",
    excerpt:
      "Vastu principles and contemporary design are more compatible than you think. Here's how we weave ancient wisdom into modern interiors.",
    category: "Vastu",
    readTime: "8 min read",
    date: "March 2025",
    bgClass: "bg-gradient-to-br from-amber-100 to-stone-200",
  },
  {
    id: 8,
    slug: "budget-interior-design-premium-look",
    title: "Budget Interior Design: Getting a Premium Look at Affordable Rates",
    excerpt:
      "You don't need an unlimited budget for a luxurious home. These smart material swaps and design strategies deliver maximum visual impact for less.",
    category: "Budget",
    readTime: "7 min read",
    date: "February 2025",
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
  },
  {
    id: 9,
    slug: "hospital-medical-facility-interior-design",
    title: "Hospital & Medical Facility Interior Design: Safety Meets Comfort",
    excerpt:
      "Healthcare design is a specialized field. Explore how thoughtful environments reduce patient anxiety, improve outcomes, and meet regulatory standards.",
    category: "Healthcare",
    readTime: "10 min read",
    date: "January 2025",
    bgClass: "bg-gradient-to-br from-sky-100 to-stone-200",
  },
  {
    id: 10,
    slug: "3d-visualization-process-interior-design",
    title: "The Complete 3D Visualization Process in Modern Interior Design",
    excerpt:
      "From orthographic drawings to immersive live 3D walkthroughs with VR glasses—how visualization technology is changing client confidence and outcomes.",
    category: "Technology",
    readTime: "6 min read",
    date: "January 2025",
    bgClass: "bg-gradient-to-br from-stone-300 to-amber-200",
  },
];

// ─── Clients ──────────────────────────────────────────────────────────────────

export const notableClients = [
  { name: "Jasprit Bumrah", role: "Cricketer — India & MI", type: "residential" },
  { name: "Kamlesh Patel", role: "Chairman, AGL", type: "residential" },
  { name: "Manas Shah", role: "Olympic Player", type: "residential" },
  { name: "Bhavesh Patel", role: "Entrepreneur", type: "residential" },
  { name: "Soham Bhagwat", role: "Businessperson", type: "residential" },
  { name: "Global Hospital", role: "Healthcare Group", type: "commercial" },
  { name: "Ajanta Pharma", role: "Pharmaceuticals", type: "commercial" },
  { name: "Dinatex Autolooms", role: "Textiles Manufacturing", type: "commercial" },
  { name: "Rajlaxmi Chemicals", role: "Chemical Industry", type: "commercial" },
  { name: "Sandip Chemicals", role: "Chemical Industry", type: "commercial" },
  { name: "Perfect Equities", role: "Financial Services", type: "commercial" },
];

// ─── Awards & Certifications ──────────────────────────────────────────────────

export const awardsAndCerts = [
  {
    type: "award",
    title: "Best Residential Interior of the Year",
    year: "2023",
    issuer: "Gujarat Interior Design Council",
  },
  {
    type: "award",
    title: "Excellence in Commercial Design",
    year: "2021",
    issuer: "Ahmedabad Business Design Awards",
  },
  {
    type: "certification",
    title: "ISO 9001:2015 Quality Management",
    year: "2022",
    issuer: "Bureau Veritas",
  },
  {
    type: "certification",
    title: "Green Building Materials Certification",
    year: "2023",
    issuer: "IGBC India",
  },
  {
    type: "certification",
    title: "Professional Member — Institute of Indian Interior Designers",
    year: "2015",
    issuer: "IIID",
  },
  {
    type: "certification",
    title: "Certified Interior Design Professional",
    year: "2013",
    issuer: "Aptech Design Academy",
  },
];

// ─── Marquee Items ────────────────────────────────────────────────────────────

export const marqueeItems = [
  "Residential Design",
  "Commercial Spaces",
  "Modular Kitchens",
  "False Ceilings",
  "Custom Furniture",
  "3D Visualization",
  "CCTV Monitored",
  "Turnkey Delivery",
  "Top Brand Materials",
  "Under 90 Days",
];

// ─── Calculator Config ────────────────────────────────────────────────────────

export const calculatorConfig = {
  packages: {
    Essential: {
      residential: { min: 800, max: 1200 },
      commercial: { min: 1000, max: 1400 },
      timeline: "45–60 days",
    },
    Standard: {
      residential: { min: 1300, max: 1800 },
      commercial: { min: 1500, max: 2200 },
      timeline: "60–75 days",
    },
    Luxury: {
      residential: { min: 2000, max: 3000 },
      commercial: { min: 2500, max: 4000 },
      timeline: "75–90 days",
    },
  },
  breakdown: {
    Design: 10,
    Civil: 30,
    Furniture: 35,
    Electrical: 12,
    Flooring: 13,
  },
  subtypes: {
    residential: ["Apartment", "Bungalow", "Farmhouse", "Villa", "Row House"],
    commercial: ["Office", "Hospital / Clinic", "Industrial Shed", "Retail / Showroom", "Restaurant"],
  },
};
