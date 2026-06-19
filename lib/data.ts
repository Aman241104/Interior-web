// ─── Company Info ────────────────────────────────────────────────────────────

export const company = {
  name: "Styluxe Interior Decor",
  tagline: "Crafting Spaces That Define You",
  subTagline: "Premium turnkey interior design delivered in under 90 days",
  founded: 2013,
  founder: "Akash N. Modi",
  email: "akashmodi@ymail.com",
  phone: "+91 94292 23647",
  website: "www.sidecore.in",
  address: {
    line1: "301, Murlidhar Complex",
    line2: "Fathepura Cross Road",
    city: "Paldi, Ahmedabad",
    state: "Gujarat",
    pincode: "380007",
    full: "Corporate House — 301, Murlidhar Complex, Fathepura Cross Road, Paldi, Ahmedabad, Gujarat 380007",
  },
  stats: {
    residential: 17,
    commercial: 10,
    total: 27,
    experience: 13,
    team: 10,
    awards: 1,
    certifications: 4,
    goalProjects: 1000,
  },
  social: {
    instagram: "https://www.instagram.com/styluxeinterior",
    linkedin: "https://www.linkedin.com/company/styluxe-interior-decor",
    youtube: "https://www.youtube.com/@styluxeinterior",
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
    imageSrc: "/images/projects/bumrah-farmhouse.png",
    featured: true,
    challenge: "Designing an 8500 sqft farmhouse that feels both grand and grounded — a retreat from the public eye that embraces natural materials without sacrificing modern comfort.",
    solution: "We anchored the design around raw stone cladding, warm timber, and biophilic landscaping that flows seamlessly into the interiors, creating distinct zones for rest, entertainment, and outdoor living.",
    highlights: [
      "Full open-plan ground floor with 14ft ceilings and exposed stone walls",
      "Custom-designed teak furniture crafted by local artisans in Rajasthan",
      "Indoor-outdoor living room that opens to a 40ft pool terrace",
      "Private gym and recovery suite with steam room and meditation alcove",
      "Smart home integration controlling climate, lighting, and security from a single app",
    ],
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
    imageSrc: "/images/projects/kamlesh-patel.png",
    featured: true,
    challenge: "Creating a home that reflects the stature of a business leader — formal enough for hosting dignitaries, yet warm enough for a family of five with young children.",
    solution: "We designed a dual-personality home: the formal entry and reception wing uses Italian marble, coffered ceilings, and classical proportions, while the private family areas are textured, warm, and playfully modern.",
    highlights: [
      "Double-height entrance foyer with Botticino marble flooring and custom chandelier",
      "Coffered ceilings with integrated LED coves throughout formal reception rooms",
      "Private study with floor-to-ceiling bookshelves and antique-brass hardware",
      "Chef's kitchen with Sub-Zero refrigeration and Gaggenau appliances",
      "Children's wing with themed bedrooms and a dedicated play area",
    ],
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
    imageSrc: "/images/projects/manas-shah.png",
    featured: true,
    challenge: "An elite athlete needs a home that supports both intense mental focus and deep recovery — with spaces that energize and spaces that restore, without visual clutter or overstimulation.",
    solution: "We applied a biophilic design framework — natural textures, circadian lighting, and neutral palettes — creating a home where every space promotes clarity and recovery.",
    highlights: [
      "Circadian lighting system that adjusts color temperature throughout the day",
      "Dedicated yoga and meditation room with cork flooring and acoustic panels",
      "Master bedroom optimized for sleep with blackout systems and air purification",
      "Open kitchen and living designed for meal prep and social recovery sessions",
      "Trophy and memorabilia wall designed as a rotating gallery feature",
    ],
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
    imageSrc: "/images/projects/global-hospital.png",
    featured: true,
    challenge: "Redesigning an operational hospital with minimal downtime — updating aging infrastructure while meeting stringent infection-control standards and improving patient experience across 12,000 sqft.",
    solution: "We phased the renovation in four blocks to maintain operations, specifying anti-microbial surface materials throughout and applying evidence-based color psychology to reduce patient anxiety in high-stress zones.",
    highlights: [
      "Anti-microbial vinyl flooring and wall cladding across all patient zones",
      "Color-coded wayfinding system reducing average patient navigation time by 40%",
      "Dedicated paediatric wing with child-friendly murals and low-stimulus play areas",
      "Staff-only corridors and break rooms designed for operational efficiency",
      "Biophilic reception with living green wall and natural daylighting",
    ],
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
    imageSrc: "/images/projects/ajanta-pharma.png",
    featured: false,
    challenge: "Translating a pharmaceutical brand's values of precision, trust, and scientific rigour into a physical workspace that inspires both its own teams and visiting clients and partners.",
    solution: "We used the brand's color palette as a structural design language — clean white with precise blue and gold accents — and specified ergonomic workstations with acoustic privacy panels for focused pharmaceutical research work.",
    highlights: [
      "Brand-integrated reception with backlit logo wall in brushed gold",
      "Open-plan research floor with height-adjustable desks and acoustic pods",
      "Executive boardroom with 18-person table and advanced AV conferencing",
      "Laboratory-adjacent break room designed to encourage cross-team collaboration",
      "Biophilic courtyard visible from all floor levels, improving wellbeing metrics",
    ],
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
    imageSrc: "/images/projects/bhavesh-patel.png",
    featured: false,
    challenge: "Designing a home that works for a multigenerational family — with spaces that serve different age groups simultaneously without compromising on aesthetic coherence or spatial flow.",
    solution: "We organised the bungalow around a central double-height living space that acts as the family hub, with private zones radiating outward — adult spaces upstairs, children's zones at ground level near the garden.",
    highlights: [
      "Dramatic cantilevered staircase with backlit onyx treads as the centrepiece",
      "Double-height family room with 20ft feature wall in brushed concrete texture",
      "Children's wing with soundproofed bedrooms and a dedicated study zone",
      "Grandparents' suite on ground floor with accessible bathroom design",
      "Landscaped rear garden designed as an extension of the interior living space",
    ],
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
    imageSrc: "/images/projects/soham-bhagwat.png",
    featured: false,
    challenge: "A young entrepreneur wanted an apartment that felt like a high-end boutique hotel rather than a typical home — minimal clutter, maximum impact, with gallery-quality art presentation.",
    solution: "We stripped the design back to its structural essentials, using gallery-white throughout and introducing warmth through walnut joinery and brass hardware — letting carefully selected artwork and lighting do the decorative work.",
    highlights: [
      "Gallery-white walls with museum-standard picture lighting system",
      "Full-height walnut joinery in living and bedroom with concealed storage",
      "Dramatic track lighting system with scene-setting control",
      "Monolithic kitchen island in Calacatta marble with waterfall edge",
      "Master bathroom as spa — freestanding tub, rain shower, and heated floors",
    ],
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
    imageSrc: "/images/projects/dinatex-autolooms.png",
    featured: false,
    challenge: "Designing a 18,000 sqft textile manufacturing facility that maximises operational efficiency, meets safety regulations, and maintains durability under high-humidity, high-traffic industrial conditions.",
    solution: "We prioritised workflow ergonomics — positioning material storage, production lines, and quality control stations in a logical sequence — while specifying epoxy flooring, high-impact wall protection, and industrial-grade lighting throughout.",
    highlights: [
      "Epoxy anti-slip flooring with colour-coded safety zones across all production areas",
      "High-bay LED lighting system reducing energy consumption by 35% versus previous setup",
      "Separate visitor walkway with safety barriers maintaining viewing access without production risk",
      "Integrated storage systems reducing floor clutter and improving material movement",
      "Administrative and staff welfare block with canteen and locker rooms",
    ],
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
    imageSrc: "/images/projects/rajlaxmi-chemicals.png",
    featured: false,
    challenge: "Transforming a dated 3,500 sqft chemical company office into a modern, professional workspace while maintaining compliance with industrial safety standards and working within a lean budget.",
    solution: "We maximised impact through a strong reception redesign and consistent modular furniture system throughout, while specifying chemical-resistant surface materials appropriate for proximity to laboratory areas.",
    highlights: [
      "Striking reception with backlit company logo and chemical-resistant Corian counter",
      "Open-plan office with modular workstations configured for departmental teamwork",
      "Conference room with 12-person capacity and integrated projection system",
      "Safety-signage integration into the interior design language",
      "Pantry and breakout zone creating a social hub for the 45-person team",
    ],
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
    imageSrc: "/images/projects/perfect-equities.png",
    featured: false,
    challenge: "Creating a financial trading environment that handles extreme technical demands — cable management for multi-screen setups, acoustic control in a high-activity open floor — while projecting confidence to visiting institutional clients.",
    solution: "We designed the trading floor around a raised access floor system for cable management, specified acoustic ceiling baffles to control noise, and created a separate client-facing zone that projects a premium, gallery-like calmness separate from the trading activity.",
    highlights: [
      "Raised access floor system managing power and data for 40+ multi-screen trading stations",
      "Perforated acoustic ceiling panels reducing ambient noise by 18dB",
      "Premium client boardroom in dark walnut and cream leather, separate from trading floor",
      "Dedicated risk management pod with curved desk and panoramic screen arrangement",
      "Biometric-controlled secure access zones throughout the facility",
    ],
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
    imageSrc: "/images/projects/sandip-chemicals.png",
    featured: false,
    challenge: "Designing administrative offices that connect to a working chemical plant — requiring materials that withstand occasional chemical exposure, airlock entry systems, and compliance with industrial safety codes.",
    solution: "We specified chemical-resistant laminates and easy-clean wall surfaces throughout, designed a decontamination entry vestibule, and created a bright, comfortable office environment that contrasts positively with the industrial plant environment.",
    highlights: [
      "Decontamination entry vestibule with PPE storage and handwash station",
      "Chemical-resistant laminate surfaces and sealed concrete flooring throughout",
      "10-person conference room with HVAC system independent from plant air supply",
      "Bright, naturally lit open-plan office designed as a psychological counterpoint to plant work",
      "Dedicated safety officer workstation with direct sightline to plant entry points",
    ],
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
    date: "2025-06-01",
    bgClass: "bg-gradient-to-br from-amber-100 to-stone-200",
    imageSrc: "/images/services/residential.png",
    content: `<h2>Biophilic Design: Bringing the Outside In</h2>
<p>Biophilic design — the practice of integrating natural elements into interior spaces — has moved from a niche trend to a mainstream expectation in Ahmedabad homes. Homeowners are requesting living green walls, natural stone feature walls, indoor water features, and large skylights that flood rooms with changing natural light. The result is homes that feel both grounded and alive.</p>
<p>In practical terms, this means specifying jute, rattan, travertine, and rough-hewn timber alongside the usual marble and lacquer. Plants are no longer decorative accessories — they are structural design elements, positioned to divide spaces, frame views, and filter indoor air quality.</p>

<h2>Japandi Aesthetics: The Perfect East-West Hybrid</h2>
<p>Japandi — the fusion of Japanese minimalism and Scandinavian warmth — continues to be one of the most requested aesthetics in Ahmedabad residential projects. It offers something rare: a design language that feels luxurious without ostentation, minimal without coldness.</p>
<p>Key characteristics include warm neutral palettes (cream, warm grey, earthy brown), natural wood in light to medium tones, wabi-sabi imperfections celebrated rather than hidden, and negative space used deliberately. For Indian homes, the challenge is adapting this aesthetic to our climate and culture — we often introduce handcrafted Indian elements to add warmth and authenticity.</p>

<h2>Smart Home Integration Done Right</h2>
<p>2025 is the year smart home technology finally becomes design-conscious in Ahmedabad. Clients no longer accept visible technology cluttering clean interiors. Instead, screens, panels, and sensors must be integrated invisibly — hidden behind joinery, flush-mounted into walls, or disguised as artwork.</p>
<p>We are specifying systems that control lighting scenes, climate, curtains, and security from a single app, with physical control points that look like premium light switches rather than industrial panels. The technology serves the design rather than competing with it.</p>

<h2>Earthy Tones and Textured Surfaces</h2>
<p>The era of all-white interiors is giving way to rich earthy palettes — terracotta, warm ochre, deep sage, and dark walnut. These colours reference the Gujarati landscape and create spaces that feel rooted and timeless rather than trend-driven. Pair these with textured surfaces — lime plaster, fluted wood panels, bouclé fabric, ribbed glass — and you get interiors with genuine depth and tactility.</p>

<h2>Multifunctional Spaces for Modern Living</h2>
<p>Post-pandemic living has permanently changed how Ahmedabad families use space. Home offices, gym corners, meditation nooks, and podcast studios are now built into residential design briefs as standard requirements rather than afterthoughts. The challenge is designing these functions so they integrate seamlessly into a coherent aesthetic — a home gym that looks like a lifestyle space, a home office that dissolves into the living room when work ends.</p>

<h2>Terrazzo Flooring: The Comeback Material</h2>
<p>Terrazzo — the traditional composite flooring of marble chips set in cement — is experiencing a powerful revival. Modern terrazzo comes in large-format slabs with fine chip sizes and bold geometric patterns, bearing little resemblance to the dated institutional terrazzo of the past. Its durability, ease of maintenance, and unique visual character make it ideal for Ahmedabad's climate and lifestyle.</p>

<h2>Curved Furniture and Soft Geometry</h2>
<p>Sharp corners are softening. Curved sofas, arched doorways, oval dining tables, and rounded headboards are replacing the hard-edged rectilinear furniture that dominated the last decade. Soft geometry creates spaces that feel more human, more welcoming, and less architectural-showroom. It is particularly effective in open-plan layouts where curved furniture helps define zones without physical barriers.</p>`,
  },
  {
    id: 2,
    slug: "complete-guide-turnkey-interior-design",
    title: "The Complete Guide to Turnkey Interior Design: What to Expect",
    excerpt:
      "What does 'turnkey' actually mean? We break down every phase of a turnkey interior project—from the first sketch to the final walk-through.",
    category: "Guide",
    readTime: "10 min read",
    date: "2025-05-01",
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
    imageSrc: "/images/services/turnkey.png",
    content: `<h2>What Does "Turnkey" Actually Mean?</h2>
<p>In interior design, "turnkey" means that a single firm takes complete responsibility for your project from concept to completion — design, procurement, civil work, furniture, electrical, and finishing. You hand over a brief, and you receive a ready-to-live-in space. The name comes from the idea that you simply turn a key and walk into your completed home.</p>
<p>The alternative is managing multiple vendors yourself: hiring a designer separately from your contractor, coordinating material suppliers, tracking deliveries, managing on-site labour disputes, and personally overseeing quality at every stage. For most homeowners and business owners, turnkey is not just more convenient — it is the only realistic path to achieving a coherent, high-quality result.</p>

<h2>What Is Included in a Turnkey Package?</h2>
<p>A comprehensive turnkey package covers every element of the interior build. This includes initial space planning and layout design, 2D and 3D visualisation, civil and structural modifications (false ceilings, partition walls, flooring), all electrical and plumbing work, HVAC installation, custom and modular furniture supply, soft furnishings, lighting fixtures, and final styling and accessorising.</p>
<ul>
<li><strong>Design Phase:</strong> Concept development, mood boards, material selection, 3D renders</li>
<li><strong>Technical Phase:</strong> Detailed drawings, BOQ (bill of quantities), vendor selection</li>
<li><strong>Execution Phase:</strong> Civil work, electrical, carpentry, flooring, painting</li>
<li><strong>Finishing Phase:</strong> Furniture installation, styling, snagging, quality check</li>
</ul>

<h2>How Do Timelines Work?</h2>
<p>A well-managed turnkey project for a standard 3BHK apartment (1500–2000 sqft) takes 60–75 days from design sign-off to handover. Larger homes and commercial projects take proportionally longer. The key variable is the design approval phase — clients who make decisions quickly allow construction to proceed on schedule. Revision loops are the primary cause of timeline extension.</p>
<p>At Styluxe, we use a structured approval process: each design element is presented as a formal decision document, reviewed and signed off before any procurement or construction begins. This prevents costly mid-project changes and protects your timeline.</p>

<h2>Questions to Ask Before Signing</h2>
<p>Before engaging a turnkey interior designer, verify: their portfolio across project types similar to yours, their in-house team versus subcontractor model, their material brand relationships and transparency, their project management system, and their warranty and post-handover support policy. Ask specifically about how they handle scope changes, cost overruns, and timeline delays — how a designer answers these questions tells you everything about how they operate.</p>

<h2>What to Expect at Each Stage</h2>
<p>The first two weeks are discovery and design — expect frequent consultations, presentations, and decision-making. Weeks three through five are procurement and preparation — materials are ordered, vendors mobilised, and site preparation begins. The bulk of execution happens between weeks six and twelve. The final week is finishing, punch list, and handover. A reputable firm provides daily progress photos and a dedicated project manager as your single point of contact throughout.</p>`,
  },
  {
    id: 3,
    slug: "modular-kitchen-design-indian-homes",
    title: "Modular Kitchen Design Ideas for Indian Homes",
    excerpt:
      "Indian kitchens are high-activity zones. Here's how modular design can bring order, efficiency, and beauty to your most-used room.",
    category: "Kitchens",
    readTime: "7 min read",
    date: "2025-05-15",
    bgClass: "bg-gradient-to-br from-amber-200 to-amber-100",
    imageSrc: "/images/projects/kamlesh-patel.png",
    content: `<h2>Why Indian Kitchens Need a Different Approach</h2>
<p>Indian cooking is intense. Multiple burners running simultaneously, heavy vessels, strong aromas, oil splatter, and high-frequency daily use — these demands are fundamentally different from the light cooking habits that European kitchen design systems are built around. A well-designed modular kitchen for an Indian home must handle this reality without compromising on aesthetics.</p>
<p>The good news is that modular kitchen systems have matured significantly. With the right material specifications and layout choices, you can have a kitchen that looks stunning on day one and still looks and functions impeccably after five years of Indian cooking.</p>

<h2>Layout Options: L-Shaped vs Parallel vs Island</h2>
<p>The <strong>L-shaped kitchen</strong> is the most popular layout for Indian homes because it provides efficient workflow between the cooking, preparation, and storage zones without requiring excessive space. It works well in both small and large kitchens and allows a dining area to be positioned in the open corner.</p>
<p>The <strong>parallel (galley) kitchen</strong> maximises storage and counter space in a narrow room. Both walls are fully utilised, and the workflow between cooking and preparation is highly efficient. However, it can feel enclosed in smaller spaces.</p>
<p>The <strong>island kitchen</strong> is increasingly requested in larger homes. The central island adds substantial counter and storage space, creates a social hub where family members can interact with the cook, and allows the kitchen to serve as a design centrepiece rather than a hidden utility space.</p>

<h2>Modular vs Carpenter-Made: The Honest Comparison</h2>
<p>Modular kitchens use factory-manufactured cabinet units assembled on site. They offer consistency, precision, and faster installation — typically 5–7 days versus 3–4 weeks for carpenter-made kitchens. Carpenter-made kitchens allow more customisation for irregular spaces but are heavily dependent on the skill of the individual carpenter and difficult to replicate or repair.</p>
<p>For most homes, we recommend modular with custom modifications — the best of both worlds. Standard cabinet units handle the bulk of storage, while custom elements address the specific dimensions and functional needs of the space.</p>

<h2>Material Choices That Matter</h2>
<p>For shutters, <strong>acrylic</strong> offers the most visual impact — high gloss, deep colour, and easy cleaning — but scratches over time. <strong>Laminates</strong> (matte or textured) are more durable and offer enormous variety; PVC foam-based laminates are ideal for areas near the sink. <strong>Glass shutters</strong> in the upper cabinets create visual lightness and showcase crockery collections.</p>
<p>For countertops, <strong>engineered quartz</strong> (brands like Caesarstone, Silestone) is the premium choice — non-porous, heat-resistant, and virtually maintenance-free. <strong>Granite</strong> remains popular for its natural character and heat resistance. Avoid marble near Indian cooking areas — it stains and etches with acidic foods.</p>

<h2>Storage Solutions for Indian Kitchens</h2>
<p>Indian kitchens require more storage than European equivalents — larger vessels, extensive spice collections, multiple pressure cookers, and dry goods storage. Specify deep drawers over base cabinet shelves, a dedicated tall pantry unit, corner solutions (magic corner or carousel), and a tandem larder unit for maximum efficiency. Overhead storage should extend to ceiling height to capture every cubic centimetre.</p>`,
  },
  {
    id: 4,
    slug: "choose-perfect-interior-designer-ahmedabad",
    title: "How to Choose the Perfect Interior Designer in Ahmedabad",
    excerpt:
      "Not all designers are created equal. Here's the insider checklist—portfolio, process, pricing, and the questions you must ask before signing.",
    category: "Advice",
    readTime: "6 min read",
    date: "2025-04-10",
    bgClass: "bg-gradient-to-br from-stone-300 to-stone-400",
    imageSrc: "/images/studio-office.png",
    content: `<h2>Start with Portfolio Review — But Ask the Right Questions</h2>
<p>Every interior designer has a portfolio. The question is whether the portfolio is genuinely representative of their work and whether it is relevant to your project type. When reviewing portfolios, look for diversity within a consistent quality standard — a designer who has only done one style of work may struggle with your brief. Look for projects similar to yours in scale, type, and budget range.</p>
<p>Crucially, ask to see a completed project in person before and after photos only tell part of the story. A site visit shows you material quality, construction precision, and how the design holds up after some years of use. A confident, reputable designer will welcome this request.</p>

<h2>Pricing Transparency is Non-Negotiable</h2>
<p>Interior design pricing in India lacks standardisation, which creates significant risk for clients. Some designers quote low fees and make their margin on material markups. Others charge premium fees but provide full transparency on procurement. Neither model is inherently wrong, but you must understand which model your designer uses before signing.</p>
<p>Ask for a detailed BOQ (bill of quantities) rather than a lump sum quote. A good BOQ specifies each material by brand, grade, and quantity with individual pricing. This allows you to compare quotes meaningfully and understand exactly what you are purchasing. Beware of designers who resist providing BOQ-level transparency — it usually indicates hidden margin structures.</p>

<h2>The Importance of a Physical Site Visit</h2>
<p>Any designer worth hiring will insist on a thorough site visit before providing a final quote. Measurements, structural assessments, natural light analysis, and an understanding of existing infrastructure (electrical, plumbing, structural walls) are essential inputs into accurate pricing. Designers who quote without visiting your site are quoting blind — and that quote will inevitably change once reality is encountered on site.</p>

<h2>Timeline Guarantees: What to Expect</h2>
<p>Ask directly: what is the expected timeline for my project, and what happens if you exceed it? Reputable firms will provide a project schedule with milestones and specify contract provisions for delay compensation. Be realistic — a 2,500 sqft apartment realistically takes 60–75 days. Promises of 30-day completion for large projects should raise immediate concerns about the quality of execution or the accuracy of the timeline.</p>

<h2>Client References and Certifications</h2>
<p>Request three to five references from completed projects similar to yours. Call them. Ask specifically about timeline adherence, budget management, communication quality, and the post-handover support experience. Professional memberships (IIID — Institute of Indian Interior Designers) and certifications indicate a commitment to professional standards and continuing education. They are not a guarantee of quality but a positive signal in a market that has few formal quality indicators.</p>`,
  },
  {
    id: 5,
    slug: "false-ceiling-designs-living-room",
    title: "False Ceiling Designs That Elevate Your Living Room",
    excerpt:
      "Coved, coffered, layered, or backlit—false ceilings do far more than hide wires. Explore the designs that add drama and dimension overhead.",
    category: "Design",
    readTime: "5 min read",
    date: "2025-04-20",
    bgClass: "bg-gradient-to-br from-stone-200 to-amber-100",
    imageSrc: "/images/hero-main.png",
    content: `<h2>Why False Ceilings Transform a Space</h2>
<p>A false ceiling — also called a dropped ceiling or secondary ceiling — is one of the most impactful design interventions available in interior design. It hides mechanical services (electrical wiring, air conditioning ducts, pipes), enables lighting integration, defines zones within open-plan spaces, and dramatically changes the perceived proportions of a room.</p>
<p>In Ahmedabad homes, false ceilings have become standard in living rooms, master bedrooms, and dining areas. The question is not whether to install one but which design and material to choose.</p>

<h2>Gypsum Board: The Versatile Workhorse</h2>
<p>Gypsum board (also called drywall or plasterboard) is the most common false ceiling material in Indian homes, and for good reason. It is lightweight, fire-resistant, easy to cut into complex shapes, and takes paint uniformly. It can be formed into flat ceilings, coved profiles, tray designs, coffered grids, and highly complex curved forms.</p>
<p>The key limitation is moisture sensitivity — gypsum is unsuitable for bathrooms, external-facing areas, or rooms with high humidity without specialist moisture-resistant grades. Cost is moderate, making it accessible for most budgets.</p>

<h2>POP (Plaster of Paris): Traditional Versatility</h2>
<p>POP has been the traditional false ceiling material in Indian homes for decades. Applied wet over a metal frame, it allows highly intricate cornices, medallions, and decorative mouldings that are difficult to achieve with gypsum board. A skilled POP craftsman can create extraordinarily detailed designs.</p>
<p>The drawbacks are weight, longer curing time, and the skill-dependence of the finish quality. In recent years, many designers have moved to gypsum for speed and consistency, reserving POP for specific decorative elements within a primarily gypsum ceiling.</p>

<h2>Wood and Timber Ceilings</h2>
<p>Timber false ceilings — whether solid wood planks, veneer panels, or WPC (wood-plastic composite) battens — introduce warmth and texture that painted gypsum cannot achieve. They are particularly effective in dining areas, master bedrooms, and home offices. WPC battens are the preferred specification in Ahmedabad's climate due to superior moisture and termite resistance compared to natural timber.</p>

<h2>Stretch Ceilings: The Premium Option</h2>
<p>PVC stretch ceilings consist of a tensioned membrane stretched between a perimeter track. They achieve a perfectly flat, jointless surface that can incorporate backlit panels, creating a luminous ceiling effect that photographs beautifully and creates genuinely dramatic spatial experiences. They are more expensive than gypsum alternatives but offer a level of finish precision and lighting integration that justifies the premium in high-specification projects.</p>

<h2>Cost Comparison and Maintenance</h2>
<p>As a rough guide: POP false ceiling costs ₹80–120 per sqft (material and labour), gypsum board ₹120–180 per sqft, WPC timber batten ₹200–350 per sqft, and stretch ceiling ₹400–700 per sqft. Maintenance requirements are minimal for all types if installed correctly — occasional repainting every 5–7 years for gypsum/POP, and simple cleaning for timber and stretch systems.</p>`,
  },
  {
    id: 6,
    slug: "office-interior-design-productivity",
    title: "Office Interior Design: Creating Workspaces That Boost Productivity",
    excerpt:
      "Biophilic elements, acoustic control, and zoning strategies—the science behind designing offices where people actually want to work.",
    category: "Commercial",
    readTime: "9 min read",
    date: "2025-03-05",
    bgClass: "bg-gradient-to-br from-zinc-200 to-stone-300",
    imageSrc: "/images/services/commercial.png",
    content: `<h2>The Science Behind Productive Workspaces</h2>
<p>The evidence base for workspace design and productivity has grown substantially over the past decade. We know that lighting quality affects circadian rhythms and alertness. We know that acoustic conditions significantly impact cognitive performance — open offices without acoustic treatment consistently underperform in tasks requiring concentration. We know that access to daylight improves employee wellbeing and reduces fatigue.</p>
<p>Good office interior design is not aesthetic decoration — it is applied evidence about how people think, focus, and collaborate. Ahmedabad's growing technology and pharmaceutical sectors have been early adopters of evidence-based workplace design.</p>

<h2>Ergonomics: The Foundation</h2>
<p>Before any discussion of aesthetics, an office must be ergonomically sound. This means adjustable chairs with lumbar support, monitor heights positioned to maintain neutral neck posture, keyboard and mouse surfaces at elbow height, and adequate desk depth. For Indian companies rapidly expanding their teams, we strongly recommend height-adjustable (sit-stand) desks — the research on the health benefits of alternating between sitting and standing during the workday is compelling.</p>

<h2>Acoustic Control in Open-Plan Offices</h2>
<p>Open-plan offices are popular for their flexibility and communication-enabling qualities. However, without acoustic treatment, they create a noise environment that actively undermines the concentration tasks that make up the majority of knowledge work. The solution is a layered acoustic approach: absorptive ceiling panels to reduce reverberation, acoustic screens at desk level to reduce direct noise transmission, and a mix of enclosed spaces for focused work alongside open collaboration areas.</p>

<h2>Lighting Psychology</h2>
<p>Natural daylight is the gold standard — position workstations to maximise exposure to windows while avoiding direct glare. Where natural light is insufficient, supplement with cool white (5000–6500K) task lighting for work surfaces and warmer tones (3000–4000K) for collaboration and breakout zones. Circadian lighting systems that automatically adjust colour temperature throughout the day are increasingly affordable and significantly improve afternoon energy levels.</p>

<h2>Open vs Cabin Offices: The Honest Answer</h2>
<p>The debate between open-plan and cabin offices has no universal answer — it depends on your work type, culture, and team structure. In our experience, the most effective offices use a hybrid model: a predominantly open plan for collaborative and social work, with a range of enclosed spaces (phone booths, focus rooms, small meeting rooms) that employees can book for concentrated individual work or confidential conversations.</p>

<h2>Biophilic Elements and Color Psychology</h2>
<p>Green plants improve air quality, reduce stress, and signal organisational care for employee wellbeing. Even modest quantities of planting have measurable effects on employee satisfaction. For colour, avoid both pure white (visually fatiguing for screen workers) and saturated colours (overstimulating). Mid-tone greens and warm neutrals are consistently associated with focus, creativity, and reduced stress in workplace environments.</p>`,
  },
  {
    id: 7,
    slug: "vastu-compliant-interior-design",
    title: "Vastu-Compliant Interior Design: Tradition Meets Modern Aesthetics",
    excerpt:
      "Vastu principles and contemporary design are more compatible than you think. Here's how we weave ancient wisdom into modern interiors.",
    category: "Vastu",
    readTime: "8 min read",
    date: "2025-03-20",
    bgClass: "bg-gradient-to-br from-amber-100 to-stone-200",
    imageSrc: "/images/projects/bumrah-farmhouse.png",
    content: `<h2>Understanding Vastu Shastra in the Modern Context</h2>
<p>Vastu Shastra is an ancient Indian science of spatial arrangement that codifies the relationship between built environments and human wellbeing. At its core, Vastu seeks to align buildings with natural forces — the movement of the sun, prevailing winds, magnetic fields — to create spaces that support health, prosperity, and mental clarity.</p>
<p>At Styluxe, we approach Vastu as a consultative framework rather than a rigid rulebook. Many Vastu principles align naturally with modern best practices in architecture and interior design — optimising natural light, ensuring cross-ventilation, placing high-activity spaces in energised zones. Others require careful interpretation when working with fixed structural constraints in existing buildings.</p>

<h2>Entry and Main Door Vastu</h2>
<p>The main entrance is considered the most significant Vastu element in any home. The north, east, and north-east are the most auspicious directions for main doors. The entry should be well-lit, clutter-free, and welcoming — which aligns perfectly with modern design principles of creating positive first impressions.</p>
<p>Practically, if your apartment's main door faces a less auspicious direction, strategic use of lighting, colour, and threshold materials can address Vastu concerns while enhancing the spatial experience. A well-designed foyer with warm lighting and natural materials creates a positive arrival experience regardless of compass orientation.</p>

<h2>Kitchen Vastu: Practical Guidance</h2>
<p>Vastu recommends the south-east direction for the kitchen, as it is associated with Agni (the fire element). The cook should ideally face east while cooking. In modern apartment layouts, complete adherence to these guidelines is often structurally impossible — the kitchen location is fixed by the building's structure.</p>
<p>Where flexibility exists, we work with these guidelines. Where it does not, we focus on the elements within our control: the placement of the stove within the kitchen, the positioning of the cooking platform relative to the window, and the colour palette (warm, energising tones for kitchens align with both Vastu guidance and modern kitchen design preferences).</p>

<h2>Bedroom Placement and Sleep Quality</h2>
<p>The master bedroom is recommended in the south-west direction, with the head of the bed pointing south or west. This principle has an interesting parallel in modern sleep science — the south-facing sleeping direction aligns the body's magnetic orientation with the Earth's magnetic field, which some researchers associate with improved sleep quality.</p>
<p>Whether or not the magnetic alignment principle has measurable effects, the practice of designing bedrooms as serene, low-stimulus sanctuaries — heavy curtains, limited electronics, cool colours, minimal clutter — is fully supported by sleep research and Vastu guidance simultaneously.</p>

<h2>Colour Recommendations and Balancing Tradition with Modern Aesthetics</h2>
<p>Vastu associates specific colours with specific directions and functions: yellow and cream for living rooms, green for north-facing spaces, white or cream for the north-east. These palettes are broadly compatible with contemporary neutral interior aesthetics. The challenge arises when clients request bold, dark, or unconventional colours — in these cases, we apply Vastu guidelines as accent and secondary colour guidance rather than primary wall colour requirements, allowing modern design freedom while respecting the underlying principles.</p>`,
  },
  {
    id: 8,
    slug: "budget-interior-design-premium-look",
    title: "Budget Interior Design: Getting a Premium Look at Affordable Rates",
    excerpt:
      "You don't need an unlimited budget for a luxurious home. These smart material swaps and design strategies deliver maximum visual impact for less.",
    category: "Budget",
    readTime: "7 min read",
    date: "2025-02-10",
    bgClass: "bg-gradient-to-br from-stone-200 to-stone-300",
    imageSrc: "/images/projects/soham-bhagwat.png",
    content: `<h2>The Principle of High-Low Design</h2>
<p>The most expensive interior in the world gets its impact from a few key hero elements — not from uniformly premium materials throughout. Smart budget interior design applies this principle consciously: identify the two or three elements that carry the most visual weight in the space, invest there, and use cost-effective alternatives for everything else.</p>
<p>In a living room, the hero elements are typically the flooring, the feature wall, and the primary seating. Invest in quality for these three, and the rest of the room can be assembled economically without the overall aesthetic suffering.</p>

<h2>Where to Invest: Flooring and Lighting</h2>
<p><strong>Flooring</strong> is the single most impactful investment in any interior. It is the largest uninterrupted surface visible in every room, and its quality (or lack thereof) is immediately apparent. Good vitrified tile, well-laid, transforms a space. Poor quality flooring undermines even the most expensive furniture and fittings above it. Do not cut the flooring budget.</p>
<p><strong>Lighting</strong> is the most underestimated element in budget interiors. The same room lit with thoughtful layered lighting (ambient, task, accent) versus a single ceiling light looks completely different. LED strip lighting in false ceiling coves, a statement pendant over the dining table, and good bedside reading lights cost relatively little and deliver disproportionate impact.</p>

<h2>Where to Save: Accessories and Styling</h2>
<p>Decorative accessories — cushions, throws, vases, artwork, plants — are the most replaceable and style-updatable elements in any interior. These can be sourced economically from local Ahmedabad markets (Law Garden, Manek Chowk), online platforms, and seasonal sales without any compromise to the overall look. Similarly, soft furnishings like curtains in a plain fabric with quality lining and heading tape look as premium as expensive fabric choices.</p>

<h2>Material Dupes That Deliver</h2>
<p>Several affordable materials convincingly replicate expensive ones. <strong>Wooden-look vitrified tiles</strong> give the warmth of timber flooring at a fraction of the cost and with vastly superior durability in Indian conditions. <strong>Printed laminates</strong> in stone and marble patterns for kitchen shutters look genuinely premium and far outlast actual stone in a cooking environment. <strong>PVC panels</strong> in wood grain finishes for feature walls are indistinguishable from timber cladding in photographs and at normal viewing distances.</p>

<h2>Timing and Seasonal Discounts</h2>
<p>Material and furniture procurement in India has clear seasonal discount patterns. Festival season (Diwali, Navratri) brings significant discounts from furniture retailers. End-of-financial-year (March) sees clearance pricing from material suppliers. Building a relationship with your designer's procurement network often provides access to trade pricing that can reduce material costs by 15–25% compared to retail. This alone can free significant budget for quality investments elsewhere in the project.</p>`,
  },
  {
    id: 9,
    slug: "hospital-medical-facility-interior-design",
    title: "Hospital & Medical Facility Interior Design: Safety Meets Comfort",
    excerpt:
      "Healthcare design is a specialized field. Explore how thoughtful environments reduce patient anxiety, improve outcomes, and meet regulatory standards.",
    category: "Healthcare",
    readTime: "10 min read",
    date: "2025-01-15",
    bgClass: "bg-gradient-to-br from-sky-100 to-stone-200",
    imageSrc: "/images/services/medical.png",
    content: `<h2>Why Healthcare Design is a Specialised Discipline</h2>
<p>Hospital and medical facility interior design operates under constraints that have no parallel in residential or commercial work. Infection control requirements mandate specific surface materials and seamless junction details. Patient safety standards govern room layouts, door widths, and hardware specifications. Wayfinding complexity — patients and visitors navigating unfamiliar, high-stress environments — demands systematic colour coding and signage integration. Regulatory compliance requirements vary by facility type and state.</p>
<p>At Styluxe, our healthcare design work follows established evidence-based healthcare design guidelines while meeting Indian regulatory requirements. The result is spaces that heal — not just functionally compliant rooms.</p>

<h2>Infection Control Materials: The Non-Negotiables</h2>
<p>Surface materials in patient areas must be non-porous, seamless where possible, and resistant to the hospital-grade disinfectants used in daily cleaning cycles. This rules out standard residential choices: regular paint, carpet, unsealed natural stone, and standard laminates.</p>
<p>Approved specifications include: homogeneous vinyl flooring with heat-welded seams (eliminating bacteria-harbouring joints), anti-microbial wall cladding systems, epoxy paint in clinical areas, and seamless epoxy or polyurethane floor coatings in laboratories and high-risk zones. All hardware — door handles, grab rails, dispensers — should be stainless steel or anti-microbial copper alloy.</p>

<h2>Wayfinding Systems That Reduce Anxiety</h2>
<p>A patient arriving at a hospital is frequently in pain, anxious, and accompanied by worried family members. Getting lost in a hospital — which is a common experience in facilities with poor wayfinding — multiplies that anxiety significantly. Effective hospital wayfinding uses colour zoning (each department identified by a distinct colour), floor path graphics guiding patients to key destinations, consistent overhead signage at decision points, and staff positioning at natural navigation challenges.</p>

<h2>Patient Zones vs Staff Zones</h2>
<p>Good healthcare design rigorously separates patient and visitor circulation from staff and service circulation. This serves both infection control (staff areas maintain different hygiene protocols than public areas) and operational efficiency (staff should never have their workflows interrupted by patients navigating to clinical areas). Separate service corridors, staff-only entries, and clean/dirty utility room configurations are fundamental to any well-designed healthcare facility.</p>

<h2>Color Psychology in Healthcare</h2>
<p>Research consistently shows that soft blues and greens reduce patient anxiety and blood pressure. Warm neutrals in recovery areas promote rest and healing. High contrast between walls and floors benefits elderly and visually impaired patients. Avoid both clinical white (associated with fear and sterility) and saturated saturated colours (overstimulating in acute environments). The evidence-based palette for healthcare is softer, more nuanced than either approach.</p>`,
  },
  {
    id: 10,
    slug: "3d-visualization-process-interior-design",
    title: "The Complete 3D Visualization Process in Modern Interior Design",
    excerpt:
      "From orthographic drawings to immersive live 3D walkthroughs with VR glasses—how visualization technology is changing client confidence and outcomes.",
    category: "Technology",
    readTime: "6 min read",
    date: "2025-01-05",
    bgClass: "bg-gradient-to-br from-stone-300 to-amber-200",
    imageSrc: "/images/services/process.png",
    content: `<h2>From 2D Drawings to 3D Reality</h2>
<p>Twenty years ago, interior design clients approved projects based on 2D floor plans, material samples, and the designer's verbal description of the intended result. The cognitive gap between a flat technical drawing and a lived three-dimensional space is enormous — and it was the source of most client disappointment when projects were completed differently from expectations.</p>
<p>3D visualisation has eliminated this gap. Today, a client can see photorealistic renders of every room before a single nail is driven. Changes are made on a computer screen rather than in construction, saving both time and money. The client's confidence in the outcome is dramatically higher, and the designer's brief is clearer.</p>

<h2>The 2D vs 3D Difference</h2>
<p>2D orthographic drawings (floor plans, elevations, sections) remain essential technical documents — they are what contractors build from, and they must be precise and complete. But they are design tools, not communication tools. A 3D render communicates instantly — the client immediately understands spatial proportion, material character, light quality, and the overall aesthetic experience of the completed space.</p>
<p>At Styluxe, we produce both: accurate 2D technical drawings for construction, and photorealistic 3D renders for client approval and decision-making. The 3D renders are not aspirational images — they are accurate representations of the specified materials, lighting, and spatial configuration.</p>

<h2>VR and Live 3D Glasses Technology</h2>
<p>The Styluxe live 3D walkthrough experience takes visualisation a step further. Using VR headset technology, clients can physically walk through their future space at 1:1 scale before construction begins. They experience ceiling heights, spatial proportions, views from specific points (the sofa, the bed, the dining chair), and the transition between rooms as they will be experienced in the completed project.</p>
<p>This technology has consistently revealed design decisions that look correct in renders but feel different at human scale. A dining table that appeared appropriately sized in a render may feel cramped when experienced in VR. A view from the master bedroom to the garden may be better framed with a slight window repositioning. These discoveries, made before construction, save significant cost and time.</p>

<h2>How to Read 3D Renders: What to Look For</h2>
<p>When reviewing renders, look beyond the immediately impressive visual. Check ceiling height proportions — do spaces feel appropriately scaled to their function? Examine material representations critically — ask to see physical samples of key materials alongside the render to ensure the digital representation matches the actual material. Review lighting — are shadow patterns and light distribution realistic, or is the render overlit to be visually appealing at the expense of accuracy?</p>

<h2>The Revision Process</h2>
<p>A structured revision process protects both designer and client. At Styluxe, we include two revision rounds in our visualisation process. Changes requested in the first round are incorporated and re-rendered. A second review follows. Changes after the second approval round constitute a scope change and are managed accordingly. This discipline prevents the endless revision loops that delay projects and exhaust both parties — and it encourages clients to be thorough and decisive in their early reviews, which produces better outcomes for everyone.</p>`,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: "Kamlesh Patel",
    role: "Chairman, AGL",
    type: "Residential — 4BHK Bungalow",
    quote:
      "Styluxe turned our house into a home we are genuinely proud of. Akash's team understood our brief from the very first meeting and delivered beyond what we imagined. On time, on budget, zero compromises.",
    rating: 5,
    imageSrc: "/images/projects/kamlesh-patel.png",
  },
  {
    id: 2,
    name: "Manas Shah",
    role: "Olympic Player",
    type: "Residential — Luxury Apartment",
    quote:
      "As someone with a demanding travel schedule, I needed a team I could trust completely. Styluxe handled everything end-to-end with complete transparency. The result speaks for itself — my apartment is exactly how I envisioned it.",
    rating: 5,
    imageSrc: "/images/projects/manas-shah.png",
  },
  {
    id: 3,
    name: "Global Hospital",
    role: "Healthcare Group",
    type: "Commercial — Medical Facility",
    quote:
      "Healthcare design is highly specialised and unforgiving. Styluxe understood every compliance requirement and delivered a facility that is both clinically functional and genuinely calming for patients. Our staff and patients notice the difference every day.",
    rating: 5,
    imageSrc: "/images/projects/global-hospital.png",
  },
  {
    id: 4,
    name: "Ajanta Pharma",
    role: "Pharmaceuticals",
    type: "Commercial — Corporate Office",
    quote:
      "Our new office has had a measurable impact on team morale and productivity. The design is intelligent — open enough to encourage collaboration, with enough focused spaces for deep work. Exactly what we needed.",
    rating: 5,
    imageSrc: "/images/projects/ajanta-pharma.png",
  },
  {
    id: 5,
    name: "Bhavesh Patel",
    role: "Entrepreneur",
    type: "Residential — Bungalow",
    quote:
      "What impressed me most was the quality control. Every material, every finish — checked and rechecked. We did a final walk-through and found almost nothing on the punch list. That level of precision is rare.",
    rating: 5,
    imageSrc: "/images/projects/bhavesh-patel.png",
  },
  {
    id: 6,
    name: "Soham Bhagwat",
    role: "Businessperson",
    type: "Residential — Modern Bungalow",
    quote:
      "Styluxe handled our bungalow project from concept to handover in 78 days. Communication was excellent throughout — weekly reports, daily photos, and a project manager who actually answered calls. I've already recommended them to three friends.",
    rating: 5,
    imageSrc: "/images/projects/soham-bhagwat.png",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: "How long does a typical interior project take?",
    answer:
      "A standard 3BHK apartment (1,500–2,000 sqft) takes 60–75 days from design sign-off to handover. Larger bungalows and commercial projects take 75–90 days. Timelines depend on the scope and how quickly design approvals are completed. We provide a detailed project schedule with milestones at the start of every engagement.",
  },
  {
    question: "What does 'turnkey' actually include?",
    answer:
      "Turnkey means we handle everything: design, civil work, electrical and plumbing modifications, false ceilings, flooring, custom and modular furniture, soft furnishings, lighting, and final styling. You hand us a brief and receive a ready-to-live-in or work-in space. Nothing is outsourced to unknown vendors without your knowledge.",
  },
  {
    question: "How are your packages priced?",
    answer:
      "We price per square foot based on the scope of work and material grade. Our Essential package starts at ₹800/sqft, Standard at ₹1,300/sqft, and Luxury at ₹2,000/sqft. These are starting points — use our online calculator for a tailored estimate, or contact us for a detailed BOQ after a site visit.",
  },
  {
    question: "Do you work outside Ahmedabad?",
    answer:
      "Our primary service area is Ahmedabad and the surrounding Gujarat region. For large-scale projects in other cities, we evaluate on a case-by-case basis. Contact us with your project details and we'll advise on feasibility and any travel/coordination costs.",
  },
  {
    question: "Can I see your work in person before deciding?",
    answer:
      "Yes — and we encourage it. We can arrange site visits to recently completed projects (with client permission) so you can see material quality and construction precision firsthand. We also invite prospective clients to our Paldi studio to review samples, renders, and our portfolio in detail.",
  },
  {
    question: "What warranty do you provide post-handover?",
    answer:
      "Our Luxury package includes a 1-year post-handover warranty covering workmanship defects. For all packages, we provide 30 days of complimentary snagging support after handover to address any minor issues. Structural and civil work carries a 5-year warranty as per standard industry norms.",
  },
  {
    question: "How does the 3D visualisation process work?",
    answer:
      "After the initial brief and site visit, our design team produces 2D layouts followed by photorealistic 3D renders of every room. For Luxury package clients, we offer an immersive VR walkthrough at 1:1 scale before construction begins. Renders include two revision rounds and must be formally approved before work starts.",
  },
  {
    question: "Do you handle Vastu compliance?",
    answer:
      "Yes. We incorporate Vastu guidelines into our design process wherever structurally feasible. For existing apartments where the main structure is fixed, we apply Vastu principles to elements within our control — colour palettes, furniture placement, lighting direction, and material choices. We work with your Vastu consultant if you have one.",
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
    title: "International Excellence Awards 2025",
    year: "2025",
    issuer: "IEA — International Excellence Awards",
    image: "/images/award-iea-2025.jpg",
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
