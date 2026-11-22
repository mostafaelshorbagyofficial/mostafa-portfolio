// src/data/portfolio.ts

export type PillarId =
  | 'media'
  | 'marketing'
  | 'creative'
  | 'content'
  | 'production'
  | 'technology';

export type ExperienceStatus =
  | 'Active'
  | 'Completed Professional Work'
  | 'Founded Venture'
  | 'Previous Experience'
  | 'Education';

export interface Pillar {
  id: PillarId;
  number: string;
  title: string;
  shortTitle: string;
  nodeLabel: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  connectedProjects: string[];
  accent: string;
}

export interface OrganizationExperience {
  id: string;
  number: string;
  organization: string;
  role: string;
  status: ExperienceStatus;
  period: string;
  summary: string;
  pillars: PillarId[];
  responsibilities: string[];
  deliverables: string[];
}

export interface BrandLogoAsset {
  id: string;
  name: string;
  filename: string;
  source: string;
  format: 'WEBP' | 'PNG' | 'JPG' | 'SVG';
  verificationStatus: 'Verified Local Asset' | 'Verified Official Vector' | 'Verified Wordmark Fallback';
  category: 'client-brand' | 'media-production' | 'strategic-collaboration';
  relationshipLabel: string;
  industry: string;
  context: string;
  row: 1 | 2;
  liveUrl?: string;
}

export interface SocialProfile {
  id: 'linkedin' | 'github' | 'instagram' | 'facebook' | 'tiktok' | 'x';
  label: string;
  url?: string;
  verified: boolean;
  note: string;
}

export type SkillCategoryId =
  | 'programming-languages'
  | 'frameworks-tools'
  | 'databases-apis'
  | 'ai-automation'
  | 'design-creative'
  | 'media-marketing'
  | 'content-creation'
  | 'video-photo-production'
  | 'it-operations-data';

export interface SkillCategory {
  id: SkillCategoryId;
  code: string;
  title: string;
  shortTitle: string;
  description: string;
  accent: string;
}

export interface SkillItem {
  name: string;
  categoryId: SkillCategoryId;
  categoryLabel: string;
  practicalUse: string;
  iconKey: string;
  logoUrl?: string;
  brandColor?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  projectType: string;
  pillars: PillarId[];
  role: string;
  company?: string;
  year: string;
  description: string;
  contribution: string;
  deliverables: string[];
  tools: string[];
  status:
    | 'Active'
    | 'Completed'
    | 'In Development'
    | 'Award Winner'
    | 'Concept'
    | 'Academic & Technical';
  featured?: boolean;
  image?: string;
  accent: string;
  languages?: string[];
  vercelDeployments: string[];
  productionUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  project?: string;
  issuer: string;
  year: string;
  featured?: boolean;
  image: string;
}

export const identity = {
  name: {
    en: 'Mostafa Mohamed Elshorbagy',
    short: 'Mostafa Elshorbagy',
    ar: 'مصطفى محمد الشوربجي',
  },
  roleHeadline: 'MULTIDISCIPLINARY DIGITAL & CREATIVE PROFESSIONAL',
  headline: 'Connecting Business, Media, Creativity & Technology.',
  philosophy:
    'Understand an idea, develop its strategy and identity, execute the creative work, and build the digital experience that supports it.',
  positioning:
    'Media & Entertainment · Marketing & Business · Creative & Graphic Design · Content Creation · Video & Photo Production · Technology & Digital Development',
  bio: [
    'I am a multidisciplinary digital and creative professional with an academic background in Business Technology at the Canadian International College (CIC), Egypt. My identity is built around connecting business objectives, creative thinking, media execution, production, and technology.',
    'Rather than operating in a single silo, my philosophy is to understand an idea from its commercial root, shape its strategy and visual identity, execute the creative and production work, and engineer the digital platform or workflow that brings it to life.',
  ],
  location: 'Cairo, Egypt',
  email: 'mostafaelshorbagyofficial@gmail.com',
  whatsapp: '201283925658',
  whatsappDisplay: '+20 128 392 5658',
  whatsappUrl: 'https://wa.me/201283925658',
  cvUrl: '/Mostafa_Elshorbagy_CV.pdf',
  cvDownloadName: 'Mostafa_Mohamed_Farhat_Elshorbagy_CV.pdf',
  linkedin: 'https://linkedin.com/in/mostafa-elshorbagy-077b52390',
  github: 'https://github.com/mostafaelshorbagyofficial',
  instagram: 'https://www.instagram.com/__m5__sta__fa__/',
  facebook: 'https://www.facebook.com/profile.php?id=100093230936090&locale=ar_AR',
  stats: [
    { value: '90+', label: 'Total Projects Delivered' },
    { value: '40+', label: 'Clients & Brands' },
    { value: '6', label: 'Interconnected Disciplines' },
    { value: '1st', label: 'Place Business Award' },
  ],
};

export const socialProfiles: SocialProfile[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/__m5__sta__fa__/',
    verified: true,
    note: 'Verified official personal Instagram profile',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100093230936090&locale=ar_AR',
    verified: true,
    note: 'Verified official personal Facebook profile',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/mostafa-elshorbagy-077b52390',
    verified: true,
    note: 'Verified in CV & portfolio configuration',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/mostafaelshorbagyofficial',
    verified: true,
    note: 'Verified official GitHub profile',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    url: undefined,
    verified: false,
    note: 'Personal TikTok URL not found in local files (unverified URL omitted per directive)',
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    url: undefined,
    verified: false,
    note: 'Personal X/Twitter URL not found in local files (unverified URL omitted per directive)',
  },
];

export const brandLogoIndex: BrandLogoAsset[] = [
  // === ROW 1 (MOVING RIGHT): CONFIRMED CLIENTS & BRANDS ===
  {
    id: 'al-jazeera',
    name: 'Al Jazeera',
    filename: '/assets/brands/aljazeera.webp',
    source: 'D:\\mhare3\\بروتو\\logo\\Aljazeera.svg.webp',
    format: 'WEBP',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Media Partnership Presentation',
    industry: 'Broadcasting & Media',
    context: 'Interactive partnership presentation & production showcase prepared via ProMedia.',
    row: 1,
    liveUrl: 'https://promedia-aljazeera-presentation.vercel.app',
  },
  {
    id: '5-roosters',
    name: '5 Roosters',
    filename: '/assets/brands/5-roosters.png',
    source: 'Local Brand Asset (Crest Crop PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'F&B Creative & Production',
    industry: 'Food & Beverage',
    context: 'Commercial photography, creative production, and F&B portfolio execution via ProMedia.',
    row: 1,
  },
  {
    id: 'el-zuzzat',
    name: 'El Zuzzat',
    filename: '/assets/brands/elzuzzat.svg',
    source: 'Official Presentation Brand Lockup SVG',
    format: 'SVG',
    verificationStatus: 'Verified Wordmark Fallback',
    category: 'client-brand',
    relationshipLabel: 'Digital Media Kit & Representation',
    industry: 'Creator Economy & Media',
    context: 'Official interactive digital media kit, 32-reel portfolio & commercial rate card.',
    row: 1,
    liveUrl: 'https://elzuzzat-digital-media-kit.vercel.app/',
  },
  {
    id: 'viv-croissants',
    name: 'VIV Croissants',
    filename: '/assets/brands/viv-croissants.png',
    source: 'Official Brand Mark (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Brand & Digital Pitch Deck',
    industry: 'Food & Beverage',
    context: 'Interactive digital growth presentation and visual brand showcase.',
    row: 1,
    liveUrl: 'https://viv-digital-presentation.vercel.app',
  },
  {
    id: 'blue-view',
    name: 'Blue View',
    filename: '/assets/brands/blue-view.svg',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-09-13 at 3.30.11 AM.jpeg (Vectorized Mark)',
    format: 'SVG',
    verificationStatus: 'Verified Official Vector',
    category: 'client-brand',
    relationshipLabel: 'Brand & Creative Work',
    industry: 'Hospitality & Cafe',
    context: 'Brand visual identity and creative showcase for Blue View Cafe & Restaurant.',
    row: 1,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    filename: '/assets/brands/tiktok.svg',
    source: 'Official TikTok Horizontal Vector Lockup',
    format: 'SVG',
    verificationStatus: 'Verified Official Vector',
    category: 'client-brand',
    relationshipLabel: 'Creator Ecosystem & Content',
    industry: 'Digital Media Platform',
    context: 'Short-form video content strategy, creator media kits, and campaign packaging.',
    row: 1,
  },
  {
    id: 'osoul-real-estate',
    name: 'Osoul Real Estate',
    filename: '/assets/brands/osoul-real-estate.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-08-05 at 10.31.18 PM.jpeg (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Web Platform & Content Strategy',
    industry: 'Real Estate Development',
    context: 'Bilingual 20-post social content plan and Next.js 16 digital platform development.',
    row: 1,
  },
  {
    id: 'dream-store',
    name: 'Dream Store Mobiles',
    filename: '/assets/brands/dream-store.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-10-05 at 9.17.03 PM (1).jpeg (Transparent Badge PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Brand, Content & E-Commerce',
    industry: 'Retail & Consumer Tech',
    context: 'Brand, content & marketing strategy presentation and e-commerce storefront work.',
    row: 1,
  },
  {
    id: 'bedaya-factories',
    name: 'Bedaya Factories',
    filename: '/assets/brands/bedaya-factories.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-09-17 at 6.58.02 AM.jpeg (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Corporate Website & Brand',
    industry: 'Industrial Manufacturing',
    context: 'Corporate web platform and product catalog across 6 iterative releases.',
    row: 1,
    liveUrl: 'https://bedaya-website.vercel.app',
  },
  {
    id: 'nuweiba-resort',
    name: 'Nuweiba Resort',
    filename: '/assets/brands/nuweiba-resort.png',
    source: 'Official Nuweiba Camps Brand Logo (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Strategic Growth Proposal',
    industry: 'Tourism & Hospitality',
    context: '16-section digital marketing, audience segmentation & creator strategy proposal.',
    row: 1,
    liveUrl: 'https://nuweiba-promedia.vercel.app/',
  },

  // === ROW 2 (MOVING LEFT): STRATEGIC PARTNERS, COLLABORATIONS & PRODUCTION PARTICIPATION ===
  {
    id: 'promedia',
    name: 'ProMedia',
    filename: '/assets/brands/promedia.png',
    source: 'D:\\mhare3\\بروتو\\logo\\promedia-logo.png',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'strategic-collaboration',
    relationshipLabel: 'Strategic Partner · Media House',
    industry: 'Media, Marketing & Production',
    context: 'Core media, creative direction, account coordination & digital execution ecosystem.',
    row: 2,
    liveUrl: 'https://pro-media-microsite.vercel.app',
  },
  {
    id: 'alaraby-tv',
    name: 'Al Araby TV (Qatar)',
    filename: '/assets/brands/alaraby-tv.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-08-31 at 2.31.45 PM.jpeg (Transparent Circle PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'media-production',
    relationshipLabel: 'Media Production Participation',
    industry: 'Regional Television & Media',
    context: 'Participation in media and television production workflows and show materials.',
    row: 2,
  },
  {
    id: 'protech',
    name: 'ProTech',
    filename: '/assets/brands/protech.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-08-30 at 12.36.08 AM.jpeg (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'strategic-collaboration',
    relationshipLabel: 'Founded Technology Initiative',
    industry: 'Technology & Digital Systems',
    context: 'Technology services, digital platforms, AI workflows & educational partnerships.',
    row: 2,
  },
  {
    id: 'el-turkaya-brand',
    name: 'El Turkaya (التركايه)',
    filename: '/assets/brands/el-turkaya.png',
    source: 'D:\\mhare3\\بروتو\\logo\\التركايه .png (Transparent Mark PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Original Show Platform',
    industry: 'Media & Talk Show',
    context: 'Official Season 1 web platform, episode archive & sponsorship hub.',
    row: 2,
    liveUrl: 'https://el-turkaya.vercel.app/',
  },
  {
    id: 'k3ab-dayr-brand',
    name: 'K3AB DAYR (كعب داير)',
    filename: '/assets/brands/k3ab-dayr.png',
    source: 'D:\\mhare3\\بروتو\\logo\\WhatsApp Image 2026-09-29 at 10.48.28 AM.jpeg (Title Emblem PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'client-brand',
    relationshipLabel: 'Season 3 Pitch Deck',
    industry: 'Travel & Creator Series',
    context: '25-slide interactive investor and sponsorship presentation.',
    row: 2,
    liveUrl: 'https://k3abdayr-saden-presentation.vercel.app/',
  },
  {
    id: 'egyptian-airports-brand',
    name: 'Egyptian Airports Company',
    filename: '/assets/brands/egyptian-airports.png',
    source: 'D:\\mhare3\\بروتو\\logo\\الشركة_المصرية_للمطارات.png (Transparent PNG)',
    format: 'PNG',
    verificationStatus: 'Verified Local Asset',
    category: 'strategic-collaboration',
    relationshipLabel: 'Enterprise IT Internship',
    industry: 'Aviation & Enterprise IT',
    context: 'Practical IT operations, networking, technical support & data center training.',
    row: 2,
  },
  {
    id: 'mti',
    name: 'MTI University',
    filename: '/assets/brands/mti.png',
    source: 'https://mti.edu.eg/themes/mti/images/mti-logo-light-roboto.png',
    format: 'PNG',
    verificationStatus: 'Verified Official Vector',
    category: 'strategic-collaboration',
    relationshipLabel: 'Strategic Partner & Collaboration',
    industry: 'Education & Technology',
    context: 'Strategic academic and technology collaboration partner.',
    row: 2,
  },
  {
    id: 'cic-entrepreneurship',
    name: 'CIC Entrepreneurship',
    filename: '/assets/brands/cic-entrepreneurship.svg',
    source: 'Official CIC Entrepreneurs Maple Leaf & Bar Chart Emblem',
    format: 'SVG',
    verificationStatus: 'Verified Official Vector',
    category: 'strategic-collaboration',
    relationshipLabel: 'Strategic Partner · Step Forward',
    industry: 'Higher Education & Innovation',
    context: 'Host ecosystem of the Step Forward Business Conference (1st Place — Save Money).',
    row: 2,
  },
  {
    id: 'infinity-technology',
    name: 'Infinity Technology',
    filename: '/assets/brands/infinity-tech.svg',
    source: 'Clean Brand Wordmark Fallback',
    format: 'SVG',
    verificationStatus: 'Verified Wordmark Fallback',
    category: 'strategic-collaboration',
    relationshipLabel: 'Strategic Partner · Technology',
    industry: 'Technology Solutions',
    context: 'Strategic technology and digital solutions collaboration.',
    row: 2,
  },
];

export const sixPillars: Pillar[] = [
  {
    id: 'media',
    number: '01',
    title: 'MEDIA & ENTERTAINMENT',
    shortTitle: 'Media',
    nodeLabel: 'NODE 01 — MEDIA',
    tagline: 'Media Strategy, Operations, Platforms & Partnerships',
    summary:
      'Media strategy, digital media, media operations, media planning, media projects, entertainment-related digital platforms, and media partnerships.',
    capabilities: [
      'Media Strategy',
      'Digital Media',
      'Media Operations',
      'Media Planning',
      'Media Projects',
      'Entertainment Platforms',
      'Media Partnerships',
    ],
    connectedProjects: ['el-turkaya', 'promedia-aljazeera', 'k3abdayr-season-3', 'elzuzzat-media-kit'],
    accent: '#E24732',
  },
  {
    id: 'marketing',
    number: '02',
    title: 'MARKETING & BUSINESS',
    shortTitle: 'Marketing',
    nodeLabel: 'NODE 02 — MARKETING & BUSINESS',
    tagline: 'Brand Development, Account Management & Commercial Strategy',
    summary:
      'Marketing strategy, brand development, commercial projects, advertising, campaign management, account management, client relations, and business development.',
    capabilities: [
      'Marketing Strategy',
      'Brand Development',
      'Commercial Projects',
      'Advertising',
      'Campaign Management',
      'Account Management',
      'Client Relations',
      'Business Development',
    ],
    connectedProjects: [
      'dongfeng-egypt-2026',
      'fullcare-presentation',
      'wardah-promedia',
      'nuweiba-promedia',
      'osoul-real-estate',
      'dream-store-mobiles',
      'save-money',
    ],
    accent: '#FF6B54',
  },
  {
    id: 'creative',
    number: '03',
    title: 'CREATIVE & GRAPHIC DESIGN',
    shortTitle: 'Creative',
    nodeLabel: 'NODE 03 — CREATIVE & DESIGN',
    tagline: 'Visual Identity, Art Direction & Presentation Design',
    summary:
      'Graphic design, visual identity, branding, creative direction, art direction, presentation design, social media design, and visual communication.',
    capabilities: [
      'Graphic Design',
      'Visual Identity',
      'Branding',
      'Creative Direction',
      'Art Direction',
      'Presentation Design',
      'Social Media Design',
      'Visual Communication',
    ],
    connectedProjects: ['sahara-silk', 'dr-osama-taha', 'fullcare-presentation', 'viv-croissants'],
    accent: '#E8C589',
  },
  {
    id: 'production',
    number: '04',
    title: 'VIDEO & PHOTO PRODUCTION',
    shortTitle: 'Production',
    nodeLabel: 'NODE 04 — PRODUCTION',
    tagline: 'Photography, Videography & Commercial Production Execution',
    summary:
      'Photography, videography, video and photo production, commercial production, production planning, and creative execution.',
    capabilities: [
      'Photography',
      'Videography',
      'Video & Photo Production',
      'Commercial Production',
      'Production Planning',
      'Creative Execution',
    ],
    connectedProjects: ['el-turkaya', 'wardah-promedia', 'promedia-aljazeera', 'viv-croissants'],
    accent: '#F97316',
  },
  {
    id: 'content',
    number: '05',
    title: 'CONTENT CREATION',
    shortTitle: 'Content',
    nodeLabel: 'NODE 05 — CONTENT CREATION',
    tagline: 'Content Strategy, Creative Concepts & Commercial Storytelling',
    summary:
      'Content creation, content strategy, creative concepts, content planning, social media content, commercial content, and storytelling.',
    capabilities: [
      'Content Creation',
      'Content Strategy',
      'Creative Concepts',
      'Content Planning',
      'Social Media Content',
      'Commercial Content',
      'Storytelling',
    ],
    connectedProjects: [
      'osoul-real-estate',
      'elzuzzat-media-kit',
      'promedia-mazen-adly',
      'promedia-moaz-adly',
      'k3abdayr-season-3',
    ],
    accent: '#F43F5E',
  },
  {
    id: 'technology',
    number: '06',
    title: 'TECHNOLOGY & DIGITAL DEVELOPMENT',
    shortTitle: 'Technology',
    nodeLabel: 'NODE 06 — TECHNOLOGY & DIGITAL',
    tagline: 'Full-Stack Web, UI/UX, AI-Assisted Development & Automation',
    summary:
      'Full-stack development, interactive websites, digital platforms, UI/UX, AI-assisted development, workflow automation, digital products, databases, and digital solutions.',
    capabilities: [
      'Full-Stack Development',
      'Interactive Websites',
      'Digital Platforms',
      'UI/UX Design',
      'AI-Assisted Development',
      'Workflow Automation',
      'Digital Products',
      'Databases & SQL',
    ],
    connectedProjects: [
      'life-makers-qalyubia',
      'saboura-el-mahrousa',
      'sphinx-airport-it',
      'reloop',
      'db2-arena',
      'mostafa-os',
    ],
    accent: '#38BDF8',
  },
];

// === SECTION 04: COMPLETE 9-CATEGORY INTERACTIVE SKILLS & CAPABILITIES ===
export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-languages',
    code: '01',
    title: 'Programming Languages',
    shortTitle: 'Programming Languages',
    description: 'Core programming, markup, styling, and query languages used across web, systems, and data workflows.',
    accent: '#E24732',
  },
  {
    id: 'frameworks-tools',
    code: '02',
    title: 'Frameworks & Development Tools',
    shortTitle: 'Frameworks & Dev Tools',
    description: 'Modern frontend/backend frameworks, build tooling, version control, and cloud deployment platforms.',
    accent: '#FF6B54',
  },
  {
    id: 'databases-apis',
    code: '03',
    title: 'Databases & APIs',
    shortTitle: 'Databases & APIs',
    description: 'Relational and document databases, Backend-as-a-Service platforms, RESTful APIs, and webhook integrations.',
    accent: '#3ECF8E',
  },
  {
    id: 'ai-automation',
    code: '04',
    title: 'AI & Workflow Automation',
    shortTitle: 'AI & Workflow Automation',
    description: 'LLM ecosystems, computer vision, data science libraries, and node-based workflow automation.',
    accent: '#38BDF8',
  },
  {
    id: 'design-creative',
    code: '05',
    title: 'Design & Creative Tools',
    shortTitle: 'Design & Creative Tools',
    description: 'Industry-standard creative software, UI/UX design systems, brand identity, and commercial presentation design.',
    accent: '#E8C589',
  },
  {
    id: 'media-marketing',
    code: '06',
    title: 'Media & Marketing',
    shortTitle: 'Media & Marketing',
    description: 'Media planning, digital marketing strategy, account management, and commercial growth proposals.',
    accent: '#F97316',
  },
  {
    id: 'content-creation',
    code: '07',
    title: 'Content Creation',
    shortTitle: 'Content Creation',
    description: 'Content strategy, creative concepts, scriptwriting, bilingual campaign calendars, and brand storytelling.',
    accent: '#F43F5E',
  },
  {
    id: 'video-photo-production',
    code: '08',
    title: 'Video & Photo Production',
    shortTitle: 'Video & Photo Production',
    description: 'Post-production editing suites, motion graphics, commercial photography, videography, and studio workflows.',
    accent: '#A855F7',
  },
  {
    id: 'it-operations-data',
    code: '09',
    title: 'IT Operations & Data',
    shortTitle: 'IT Operations & Data',
    description: 'Enterprise networking, technical support, data center exposure, data analysis, and Business Technology systems.',
    accent: '#22D3EE',
  },
];

export const allSkills: SkillItem[] = [
  // 01. Programming Languages
  { name: 'HTML5', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Semantic web architecture & accessible document structure across 25+ deployed web platforms.', iconKey: 'html5', logoUrl: '/assets/tech/html5.svg', brandColor: '#E34F26' },
  { name: 'CSS3', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Modern responsive layouts, keyframe animations, custom properties & editorial design systems.', iconKey: 'css3', logoUrl: '/assets/tech/css3.svg', brandColor: '#1572B6' },
  { name: 'JavaScript', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Interactive client logic, DOM orchestration, asynchronous data flows & canvas visualizers.', iconKey: 'javascript', logoUrl: '/assets/tech/javascript.svg', brandColor: '#F7DF1E' },
  { name: 'TypeScript', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Type-safe application architecture across React 19 and Next.js production systems.', iconKey: 'typescript', logoUrl: '/assets/tech/typescript.svg', brandColor: '#3178C6' },
  { name: 'Python', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Automation scripting, data analysis foundations & real-time pose estimation / computer vision.', iconKey: 'python', logoUrl: '/assets/tech/python.svg', brandColor: '#3776AB' },
  { name: 'C++', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Systems programming & native desktop utilities (LAKHbATA keyboard corrector & ReLoop concepts).', iconKey: 'cpp', logoUrl: '/assets/tech/cplusplus.svg', brandColor: '#00599C' },
  { name: 'Java', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Object-oriented programming & academic software engineering foundations at CIC.', iconKey: 'java', logoUrl: '/assets/tech/java.svg', brandColor: '#EA2D2E' },
  { name: 'SQL', categoryId: 'programming-languages', categoryLabel: 'Programming Languages', practicalUse: 'Relational schema design, complex queries & interactive database education (DB2 Arena).', iconKey: 'sql', logoUrl: '/assets/tech/sql.svg', brandColor: '#0078D4' },

  // 02. Frameworks & Development Tools
  { name: 'React.js', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Component-driven web applications, interactive strategy decks & 3D canvas experiences.', iconKey: 'react', logoUrl: '/assets/tech/react.svg', brandColor: '#61DAFB' },
  { name: 'Next.js', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Full-stack production platforms (El Turkaya, Saboura El Mahrousa, Life Makers, Osoul).', iconKey: 'nextjs', logoUrl: '/assets/tech/nextjs.svg', brandColor: '#111111' },
  { name: 'Node.js', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Server-side JavaScript runtime, build automation & backend service execution.', iconKey: 'nodejs', logoUrl: '/assets/tech/nodejs.svg', brandColor: '#5FA04E' },
  { name: 'Express.js', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'RESTful backend routing, API endpoints & middleware architecture.', iconKey: 'express', logoUrl: '/assets/tech/express.svg', brandColor: '#333333' },
  { name: 'Tailwind CSS', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Utility-first styling, responsive grid layouts & custom brand design tokens.', iconKey: 'tailwind', logoUrl: '/assets/tech/tailwindcss.svg', brandColor: '#06B6D4' },
  { name: 'Framer Motion', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Choreographed scroll reveals, interactive transitions & tactile UI micro-interactions.', iconKey: 'motion', logoUrl: '/assets/tech/framermotion.svg', brandColor: '#0055FF' },
  { name: 'Vite', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'High-speed frontend bundling & modern TypeScript development environment.', iconKey: 'code', logoUrl: '/assets/tech/vite.svg', brandColor: '#646CFF' },
  { name: 'Git', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Distributed version control, branching strategies & release tracking.', iconKey: 'git', logoUrl: '/assets/tech/git.svg', brandColor: '#F05032' },
  { name: 'GitHub', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Source repository management & automated CI/CD deployment integration.', iconKey: 'github', logoUrl: '/assets/tech/github.svg', brandColor: '#24292E' },
  { name: 'VS Code', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Primary development environment for full-stack TypeScript, Python & C++ engineering.', iconKey: 'code', logoUrl: '/assets/tech/vscode.svg', brandColor: '#007ACC' },
  { name: 'Vercel', categoryId: 'frameworks-tools', categoryLabel: 'Frameworks & Dev Tools', practicalUse: 'Cloud edge hosting & continuous production deployment across 23+ live projects.', iconKey: 'globe', logoUrl: '/assets/tech/vercel.svg', brandColor: '#111111' },

  // 03. Databases & APIs
  { name: 'Supabase', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Backend-as-a-Service, authentication & real-time PostgreSQL data for NGO & product platforms.', iconKey: 'supabase', logoUrl: '/assets/tech/supabase.svg', brandColor: '#3ECF8E' },
  { name: 'PostgreSQL', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Enterprise-grade relational database engine backing Supabase and structured web apps.', iconKey: 'postgres', logoUrl: '/assets/tech/postgresql.svg', brandColor: '#336791' },
  { name: 'MongoDB', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Document-oriented NoSQL data modeling for flexible full-stack web applications.', iconKey: 'database', logoUrl: '/assets/tech/mongodb.svg', brandColor: '#47A248' },
  { name: 'MySQL', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Relational database querying, normalization & academic information systems.', iconKey: 'sql', logoUrl: '/assets/tech/mysql.svg', brandColor: '#00758F' },
  { name: 'REST APIs', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Designing and consuming structured JSON endpoints connecting frontends to cloud backends.', iconKey: 'api', logoUrl: '/assets/tech/postman.svg', brandColor: '#FF6C37' },
  { name: 'Webhooks & Integrations', categoryId: 'databases-apis', categoryLabel: 'Databases & APIs', practicalUse: 'Connecting forms, Google Sheets, CRM pipelines & automated notification triggers.', iconKey: 'webhook', brandColor: '#38BDF8' },

  // 04. AI & Workflow Automation
  { name: 'ChatGPT / OpenAI', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'LLM API integration, structured prompt engineering & AI-assisted product workflows (Mostafa OS).', iconKey: 'openai', logoUrl: '/assets/tech/openai.svg', brandColor: '#10A37F' },
  { name: 'Google Gemini', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Multimodal AI reasoning, research synthesis & rapid technical prototyping.', iconKey: 'gemini', logoUrl: '/assets/tech/gemini.svg', brandColor: '#4285F4' },
  { name: 'n8n Automation', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Node-based workflow automation orchestrating marketing, content & data pipelines.', iconKey: 'n8n', logoUrl: '/assets/tech/n8n.svg', brandColor: '#EA4B71' },
  { name: 'OpenCV', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Real-time human body pose estimation & key-point tracking in Python.', iconKey: 'eye', logoUrl: '/assets/tech/opencv.svg', brandColor: '#5C3EE8' },
  { name: 'NumPy', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Numerical array processing powering computer vision & data analysis pipelines.', iconKey: 'cpu', logoUrl: '/assets/tech/numpy.svg', brandColor: '#4DABCF' },
  { name: 'Pandas', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Dataframe manipulation, cleaning & structured analytical reporting in Python.', iconKey: 'chart', logoUrl: '/assets/tech/pandas.svg', brandColor: '#150458' },
  { name: 'AI-Assisted Development', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Accelerating full-stack software engineering, architecture validation & rapid shipping.', iconKey: 'ai', brandColor: '#38BDF8' },
  { name: 'Workflow Automation', categoryId: 'ai-automation', categoryLabel: 'AI & Workflow Automation', practicalUse: 'Eliminating manual operational bottlenecks through connected digital systems.', iconKey: 'workflow', brandColor: '#F97316' },

  // 05. Design & Creative Tools
  { name: 'Figma', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Interface design, wireframing, interactive prototyping & component design systems.', iconKey: 'figma', logoUrl: '/assets/tech/figma.svg', brandColor: '#F24E1E' },
  { name: 'Adobe Photoshop', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Key visual compositing, photo retouching, campaign posters & social media graphics.', iconKey: 'adobe', logoUrl: '/assets/tech/photoshop.svg', brandColor: '#31A8FF' },
  { name: 'Adobe Illustrator', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Vector brand marks, logo presentation lockups, typography & identity systems.', iconKey: 'adobe', logoUrl: '/assets/tech/illustrator.svg', brandColor: '#FF9A00' },
  { name: 'Canva', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Rapid social media templates, commercial pitch decks & team presentation assets.', iconKey: 'palette', logoUrl: '/assets/tech/canva.svg', brandColor: '#00C4CC' },
  { name: 'UI/UX Design', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'User-centered visual hierarchy, conversion flows & responsive digital product design.', iconKey: 'layout', brandColor: '#FF6B54' },
  { name: 'Brand Identity Systems', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Color palettes, bilingual typography pairings & visual brand guidelines.', iconKey: 'award', brandColor: '#E8C589' },
  { name: 'Presentation & Pitch Decks', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Interactive web presentations (Dongfeng, FullCare, Sahara Silk, K3AB DAYR, Nuweiba).', iconKey: 'presentation', brandColor: '#E24732' },
  { name: 'Art & Creative Direction', categoryId: 'design-creative', categoryLabel: 'Design & Creative Tools', practicalUse: 'Guiding visual mood, editorial layouts & commercial campaign aesthetics.', iconKey: 'compass', brandColor: '#F43F5E' },

  // 06. Media & Marketing
  { name: 'Media Strategy', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Multi-platform show positioning & partnership architecture (El Turkaya, ProMedia × Al Jazeera).', iconKey: 'radio', brandColor: '#F97316' },
  { name: 'Marketing Strategy', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Full-funnel B2B & B2C growth proposals across automotive, healthcare, F&B & hospitality.', iconKey: 'trending', brandColor: '#34D399' },
  { name: 'Media Planning', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Structuring rollout phases, creator tiers, KPIs & multi-channel campaign calendars.', iconKey: 'calendar', brandColor: '#E8C589' },
  { name: 'Brand Positioning', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Defining market differentiation, audience segments & commercial value propositions.', iconKey: 'flag', brandColor: '#E24732' },
  { name: 'Advertising Campaigns', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Packaging sponsored deliverables, influencer activations & digital media buying funnels.', iconKey: 'megaphone', brandColor: '#F43F5E' },
  { name: 'Account & Client Management', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Coordinating client briefs, stakeholder communications & creative execution at ProMedia.', iconKey: 'briefcase', brandColor: '#38BDF8' },
  { name: 'Market & Competitor Analysis', categoryId: 'media-marketing', categoryLabel: 'Media & Marketing', practicalUse: 'Benchmarking industry competitors, pricing tiers & digital presence gaps.', iconKey: 'chart', brandColor: '#22D3EE' },

  // 07. Content Creation
  { name: 'Content Strategy', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Aligning content pillars with audience psychology and commercial brand objectives.', iconKey: 'compass', brandColor: '#F43F5E' },
  { name: 'Creative Concept Development', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Ideating original show formats, campaign hooks & viral short-form series.', iconKey: 'lightbulb', brandColor: '#E8C589' },
  { name: 'Scriptwriting & Copywriting', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Writing bilingual Arabic/English scripts, commercial hooks, captions & deck narratives.', iconKey: 'pen', brandColor: '#E24732' },
  { name: 'Bilingual Content Planning', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Structured 20-post bilingual social calendars (Osoul Real Estate, Dream Store).', iconKey: 'calendar', brandColor: '#38BDF8' },
  { name: 'Social Media Content', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Hands-on creation of Reels, carousels & high-retention digital formats.', iconKey: 'share', brandColor: '#FF6B54' },
  { name: 'Brand Storytelling', categoryId: 'content-creation', categoryLabel: 'Content Creation', practicalUse: 'Crafting human-centered narrative arcs for founders, doctors, creators & brands.', iconKey: 'book', brandColor: '#F97316' },

  // 08. Video & Photo Production
  { name: 'Adobe Premiere Pro', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'Non-linear video editing, commercial cuts, reels pacing & audio synchronization.', iconKey: 'film', logoUrl: '/assets/tech/premierepro.svg', brandColor: '#9999FF' },
  { name: 'Adobe After Effects', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'Motion graphics, animated titles, visual effects & post-production polish.', iconKey: 'video', logoUrl: '/assets/tech/aftereffects.svg', brandColor: '#9999FF' },
  { name: 'Commercial Photography', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'F&B, product, hospitality & executive portrait photography workflows.', iconKey: 'camera', brandColor: '#FB923C' },
  { name: 'Videography', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'On-set camera operation, framing & lighting awareness for shows and promos.', iconKey: 'video', brandColor: '#E24732' },
  { name: 'Video Production', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'End-to-end production execution from pre-production planning to final delivery.', iconKey: 'clapperboard', brandColor: '#F97316' },
  { name: 'Production Coordination', categoryId: 'video-photo-production', categoryLabel: 'Video & Photo Production', practicalUse: 'Managing shoot schedules, talent, locations & studio multi-camera setups.', iconKey: 'clipboard', brandColor: '#38BDF8' },

  // 09. IT Operations & Data
  { name: 'Enterprise Networking', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Computer networks, LAN/WAN fundamentals & airport ICT infrastructure (Egyptian Airports Co.).', iconKey: 'network', brandColor: '#22D3EE' },
  { name: 'IT Technical Support', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Hardware/software troubleshooting, workstation diagnostics & operational continuity.', iconKey: 'wrench', brandColor: '#38BDF8' },
  { name: 'Data Center Operations', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Practical exposure to enterprise server rooms, racks & aviation ICT systems.', iconKey: 'harddrive', brandColor: '#E8C589' },
  { name: 'System Administration', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Environment configuration, user access management & enterprise IT workflows.', iconKey: 'terminal', brandColor: '#34D399' },
  { name: 'Data Analysis', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Translating operational, financial & campaign metrics into executive decisions.', iconKey: 'chart', brandColor: '#F97316' },
  { name: 'Business Technology Systems', categoryId: 'it-operations-data', categoryLabel: 'IT Operations & Data', practicalUse: 'Bridging information systems, ERP/Odoo workflows & commercial strategy at CIC.', iconKey: 'cpu', brandColor: '#E24732' },
];

export const organizations: OrganizationExperience[] = [
  {
    id: 'promedia',
    number: '01',
    organization: 'ProMedia',
    role: 'Project Manager | Acting Chief Technology Officer (CTO) · Creative & Digital Execution',
    status: 'Active',
    period: '2024 – Present',
    summary:
      'A major part of my media and creative business experience — uniting media and creative services, marketing and advertising, client and account management, branding, commercial presentations, production projects, and digital media solutions.',
    pillars: ['media', 'marketing', 'creative', 'content', 'production', 'technology'],
    responsibilities: [
      'Management, account coordination, and client relations across commercial and media projects',
      'Creative direction, branding, visual identity, and commercial presentation execution',
      'Production project coordination and digital media platform delivery',
    ],
    deliverables: [
      'El Turkaya Show Platform',
      'Dongfeng Commercial Egypt 2026 Strategy',
      'FullCare 38-Section Brand Strategy',
      'Wardah, Nuweiba & Dream Store Proposals',
      'El Zuzzat, Mazen Adly & Moaz Adly Media Kits',
    ],
  },
  {
    id: 'protech',
    number: '02',
    organization: 'ProTech',
    role: 'CEO & Founder — Technology Services & Educational Partnerships',
    status: 'Founded Venture',
    period: '2024 – Present',
    summary:
      'Technology-oriented business initiative focused on developing technology services, digital platforms, AI-assisted solutions, and educational partnerships — distinct from ProMedia’s media and creative agency activities.',
    pillars: ['technology', 'marketing', 'creative'],
    responsibilities: [
      'Leading ProTech’s technical vision, digital product architecture, and client solutions',
      'Developing technology services, web platforms, and educational partnership initiatives',
      'Connecting software engineering and workflow automation to business objectives',
    ],
    deliverables: [
      'Technology Services & Web Platforms',
      'Educational Partnership Initiatives',
      'AI-Assisted & Automated Digital Solutions',
    ],
  },
  {
    id: 'life-makers',
    number: '03',
    organization: 'Life Makers — Qalyubia (Sinaa Al-Hayah)',
    role: 'Volunteer Coordinator for Qalyubia Governorate & Tech Lead',
    status: 'Completed Professional Work',
    period: '2023 – 2025',
    summary:
      'Led governorate-level volunteer coordination, community initiatives, and team organization while building full-stack digital platforms to modernize volunteer operations.',
    pillars: ['technology', 'media', 'marketing'],
    responsibilities: [
      'Volunteer coordination, team organization, communication, and community initiative execution across Qalyubia Governorate',
      'Engineering full-stack volunteer management platforms (Life Makers Qalyubia & Saboura El-Mahrousa) with React/Next.js and Supabase',
    ],
    deliverables: [
      'Governorate Volunteer Coordination',
      'Life Makers Qalyubia Platform (Next.js + Supabase + QR)',
      'Saboura El-Mahrousa Tracking Platform',
    ],
  },
  {
    id: 'save-money',
    number: '04',
    organization: 'Save Money Project',
    role: 'Founder — 1st Place Winner at Step Forward Business Conference',
    status: 'Founded Venture',
    period: '2024 – 2025',
    summary:
      'Founded a sustainability-driven business and digital product concept focused on reducing food waste and optimizing household/commercial consumption. Awarded First Place at the Step Forward Business Conference at CIC.',
    pillars: ['marketing', 'creative', 'technology'],
    responsibilities: [
      'Developing the business idea, sustainability model, and product strategy',
      'Leading team collaboration, UI/UX prototyping, and conference pitch presentation',
    ],
    deliverables: [
      '1st Place — Step Forward Business Conference 2025',
      'Save Money Business Model & Product Prototype',
    ],
  },
  {
    id: 'airports-cic',
    number: '05',
    organization: 'Egyptian Airports Company & Canadian International College (CIC)',
    role: 'IT Intern · Business Technology Student',
    status: 'Education',
    period: '2024 – Present',
    summary:
      'Academic foundation in Business Technology at CIC paired with practical enterprise IT exposure at Egyptian Airports Company across IT operations, networking, technical support, and data center operations.',
    pillars: ['technology', 'marketing'],
    responsibilities: [
      'Canadian International College (CIC): Studying Business Technology — programming, web development, databases, information systems, and business management',
      'Egyptian Airports Company (IT Internship): Hands-on exposure to IT operations, networking, technical support, and data center workflows',
    ],
    deliverables: [
      'Egyptian Airports Company IT Certificate',
      'Sphinx International Airport IT Strategy Analysis',
      'ENGAZ AI & TamooH Professional Certificates',
    ],
  },
];

export const toolsStrip = [
  { name: 'HTML5 & CSS3', group: 'Web Core' },
  { name: 'JavaScript & TypeScript', group: 'Programming' },
  { name: 'React.js & Next.js', group: 'Frontend' },
  { name: 'Node.js & Express.js', group: 'Backend' },
  { name: 'SQL & Databases', group: 'Data' },
  { name: 'Supabase', group: 'Backend' },
  { name: 'REST APIs', group: 'Integration' },
  { name: 'Git & GitHub', group: 'Version Control' },
  { name: 'Figma & UI/UX', group: 'Design' },
  { name: 'Wireframing & Prototyping', group: 'Product' },
  { name: 'AI-Assisted Development', group: 'AI & Automation' },
  { name: 'Data Analysis', group: 'Business Tech' },
  { name: 'Brand & Content Strategy', group: 'Marketing' },
  { name: 'Video & Photo Production', group: 'Production' },
];

export const projects: Project[] = [
  {
    id: 'el-turkaya',
    title: 'El Turkaya (التركايه)',
    subtitle: 'Official Talk Show Hub, Episode Library & Sponsorship Platform',
    industry: 'Media & Entertainment',
    projectType: 'Web Platform & Show Hub',
    pillars: ['media', 'production', 'creative', 'technology'],
    role: 'Web Developer & Digital Execution',
    company: 'ProMedia',
    year: '2026',
    description:
      'Official Season 1 website, episode library, guest showcase, and sponsorship pitch hub for the Egyptian talk show "التركايه" hosted by Mohamed Elhagan and produced by ProMedia.',
    contribution:
      'Built and deployed the bilingual Arabic RTL / English Next.js platform featuring episode cards, guest bios, show identity, and sponsorship inquiry flow.',
    deliverables: ['Live Next.js Platform', 'Season 1 Episode Library', 'Sponsorship Pitch Hub', 'AR/EN Interface'],
    tools: ['Next.js', 'React.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    status: 'Active',
    featured: true,
    image: '/images/previews/el-turkaya.jpg',
    accent: '#F97316',
    languages: ['AR', 'EN'],
    vercelDeployments: ['el-turkaya.vercel.app'],
    productionUrl: 'https://el-turkaya.vercel.app/',
  },
  {
    id: 'dongfeng-egypt-2026',
    title: 'Dongfeng Commercial Egypt 2026',
    subtitle: '24-Chapter Executive Marketing Strategy & Lead Simulator',
    industry: 'Automotive / B2B',
    projectType: 'Interactive Strategy Platform',
    pillars: ['marketing', 'creative', 'technology'],
    role: 'Creative Frontend Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Executive 24-chapter digital & offline B2B marketing strategy platform for Dongfeng Commercial Egypt with an interactive 8-criteria Lead Qualification Simulator, model selector, and KPI dashboard.',
    contribution:
      'Engineered the interactive 24-chapter executive web presentation, lead simulator, model matcher, and bilingual EN/AR switching.',
    deliverables: ['24-Chapter Strategy Web App', 'Lead Qualification Simulator', 'Model Matcher', 'EN/AR Switcher'],
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/dongfeng-egypt-2026.jpg',
    accent: '#E24732',
    languages: ['EN', 'AR'],
    vercelDeployments: ['dongfeng-egypt-2026.vercel.app'],
    productionUrl: 'https://dongfeng-egypt-2026.vercel.app/',
  },
  {
    id: 'fullcare-presentation',
    title: 'FullCare — Brand Strategy & Vision',
    subtitle: '38-Section Pharmaceutical Brand Strategy & Identity Platform',
    industry: 'Healthcare & Pharma',
    projectType: 'Brand Strategy & Identity Deck',
    pillars: ['marketing', 'creative', 'technology'],
    role: 'Frontend Developer & Presentation UI',
    company: 'ProMedia',
    year: '2026',
    description:
      'Interactive 38-section bilingual brand strategy, visual identity proposal comparator, and nationwide Egypt expansion roadmap prepared for Full Care pharmaceutical manufacturing.',
    contribution:
      'Developed the interactive 38-section presentation experience with sticky section index, scroll progress tracking, identity proposal views, and keyboard navigation.',
    deliverables: ['38-Section Strategy Deck', 'Visual Identity Comparator', 'Fullscreen Presentation Controls'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/fullcare-presentation.jpg',
    accent: '#38BDF8',
    languages: ['AR', 'EN'],
    vercelDeployments: ['fullcare-presentation.vercel.app'],
    productionUrl: 'https://fullcare-presentation.vercel.app/',
  },
  {
    id: 'sahara-silk',
    title: 'Sahara Silk — A Modern Hair Ritual',
    subtitle: 'Luxury Haircare Launch & Go-To-Market Web Experience',
    industry: 'Luxury Beauty',
    projectType: 'Luxury Launch Presentation',
    pillars: ['creative', 'marketing', 'content', 'technology'],
    role: 'Frontend Developer & Creative Technologist',
    year: '2026',
    description:
      '10-chapter luxury brand launch and go-to-market presentation for Sahara Silk Inc., featuring an animated splash intro, ambient audio toggle, 3-step product ritual, and bilingual EN/AR support.',
    contribution:
      'Built the obsidian & champagne-gold editorial web experience with interactive ritual steps, chapter index drawer, ambient audio toggle, and fullscreen support.',
    deliverables: ['10-Chapter Luxury Deck', 'Interactive 3-Step Ritual UI', 'Ambient Audio & Fullscreen Mode'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/sahara-silk.jpg',
    accent: '#E8C589',
    languages: ['EN', 'AR'],
    vercelDeployments: ['sahara-silk-presentation.vercel.app'],
    productionUrl: 'https://sahara-silk-presentation.vercel.app/',
  },
  {
    id: 'k3abdayr-season-3',
    title: 'K3AB DAYR — Season 3 Pitch Deck',
    subtitle: '25-Slide Sponsorship Pitch Deck (Saden Travel & SIDN)',
    industry: 'Travel & Creator Media',
    projectType: 'Interactive Investor Pitch Deck',
    pillars: ['media', 'content', 'marketing', 'technology'],
    role: 'Interactive Presentation Developer',
    year: '2026',
    description:
      '25-slide keyboard-navigable sponsorship pitch deck for Season 3 (Umrah Special) of travel series K3AB DAYR — grouped cleanly from two verified sponsor variants (Saden Travel primary + SIDN variant).',
    contribution:
      'Built the 25-slide keyboard-driven web pitch deck with embedded social proof, season archives, and sponsor-customized branding for Saden Travel and SIDN.',
    deliverables: ['25-Slide Interactive Deck', 'Saden Travel Production Version', 'SIDN Sponsor Variant'],
    tools: ['React.js', 'HTML5 & CSS3', 'JavaScript', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/k3abdayr-season-3.jpg',
    accent: '#FB923C',
    languages: ['AR', 'EN'],
    vercelDeployments: [
      'k3abdayr-saden-presentation.vercel.app',
      'k3abdayr-sidn-presentation.vercel.app',
    ],
    productionUrl: 'https://k3abdayr-saden-presentation.vercel.app/',
  },
  {
    id: 'wardah-promedia',
    title: 'Wardah Egypt — Brand Strategy Proposal',
    subtitle: 'F&B Brand Development & Searchable Influencer Proposal',
    industry: 'Hospitality & F&B',
    projectType: 'Agency Growth Proposal',
    pillars: ['marketing', 'media', 'production', 'technology'],
    role: 'Web Developer & Proposal Execution',
    company: 'ProMedia',
    year: '2026',
    description:
      'Interactive F&B brand development and Gulf-tourist targeting proposal for Wardah Restaurant & Cafe featuring a promo video player, on-site hospitality initiatives, and searchable food creator directory.',
    contribution:
      'Built the bilingual Arabic RTL / English proposal web app with interactive creator search/filters and media playback.',
    deliverables: ['Interactive F&B Proposal', 'Searchable Creator & UGC Directory', 'Promo Video Integration'],
    tools: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/wardah-promedia.jpg',
    accent: '#F43F5E',
    languages: ['AR', 'EN'],
    vercelDeployments: ['wardah-promedia.vercel.app'],
    productionUrl: 'https://wardah-promedia.vercel.app/',
  },
  {
    id: 'elzuzzat-media-kit',
    title: 'El Zuzzat Digital Media Kit',
    subtitle: 'Commercial Creator Representation Deck & 32-Reel Showcase',
    industry: 'Creator Economy & Media',
    projectType: 'Digital Media Kit',
    pillars: ['media', 'content', 'marketing', 'technology'],
    role: 'Frontend Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Commercial agency representation deck and interactive media kit for creator duo ElZuzzat, featuring 32 categorized Reel portfolio cards, deliverables, and collaboration packages.',
    contribution:
      'Engineered the high-contrast bilingual EN/AR creator media kit and interactive Reel showcase for ProMedia commercial partnerships.',
    deliverables: ['Interactive Creator Media Kit', '32-Reel Categorized Showcase', 'Collaboration Rate Card'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/elzuzzat-media-kit.jpg',
    accent: '#DC2626',
    languages: ['EN', 'AR'],
    vercelDeployments: ['elzuzzat-digital-media-kit.vercel.app'],
    productionUrl: 'https://elzuzzat-digital-media-kit.vercel.app/',
  },
  {
    id: 'nuweiba-promedia',
    title: 'Nuweiba Resort (Nuweiba Camps) × ProMedia',
    subtitle: '16-Section Eco-Tourism Growth & Influencer Strategy',
    industry: 'Tourism & Hospitality',
    projectType: 'Strategic Growth Proposal',
    pillars: ['marketing', 'media', 'content', 'technology'],
    role: 'Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      '16-section digital marketing, audience segmentation, and multi-tier influencer strategy web proposal prepared for Nuweiba Camps / Resort in South Sinai with interactive audience tabs.',
    contribution:
      'Developed the Vite-powered interactive 16-section proposal with 5 audience segment tabs and multi-tier creator packages.',
    deliverables: ['16-Section Growth Proposal', '5-Segment Audience Explorer', 'Multi-Tier Creator Packages'],
    tools: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Vercel'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/nuweiba-promedia.jpg',
    accent: '#14B8A6',
    languages: ['AR', 'EN'],
    vercelDeployments: ['nuweiba-promedia.vercel.app'],
    productionUrl: 'https://nuweiba-promedia.vercel.app/',
  },
  {
    id: 'save-money',
    title: 'Save Money',
    subtitle: 'Sustainability & Food Waste Reduction Venture (1st Place)',
    industry: 'Sustainability & Consumer Tech',
    projectType: 'Founded Venture & Product',
    pillars: ['marketing', 'creative', 'technology'],
    role: 'Founder & Product Builder',
    year: '2024–2025',
    description:
      'Sustainability-driven venture concept focused on reducing food waste and helping consumers save money through practical digital tools. Awarded 1st Place at Step Forward Business Conference 2025.',
    contribution:
      'Founded the concept, built the business model, designed the product interface, and won 1st Place at CIC Step Forward Business Conference 2025.',
    deliverables: ['1st Place Conference Award', 'Business Model & Pitch', 'Digital Product Concept'],
    tools: ['Product Strategy', 'UI/UX Design', 'Wireframing', 'React.js'],
    status: 'Award Winner',
    featured: true,
    image: '/images/save-money.jpg',
    accent: '#E8C589',
    vercelDeployments: [],
  },
  {
    id: 'osoul-real-estate',
    title: 'Osoul Real Estate (OSOOL)',
    subtitle: 'Bilingual Social Content Strategy & Next.js Web Platform',
    industry: 'Real Estate Development',
    projectType: 'Content Strategy & Web Platform',
    pillars: ['content', 'marketing', 'creative', 'technology'],
    role: 'Content Strategist & Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Structured 20-post bilingual (Arabic & English) social media content campaign ("From Lines on Paper to a Life Well Built") for West Cairo / Zayed / 6 October real estate, paired with a Next.js 16 digital platform build.',
    contribution:
      'Developed the bilingual Arabic/English social media content calendar and copywriting alongside the Next.js 16 + Tailwind CSS v4 web platform repository.',
    deliverables: [
      '20-Post Bilingual AR/EN Social Campaign Plan',
      'Real Estate Storytelling & Copywriting System',
      'Next.js 16 Web Platform Architecture',
    ],
    tools: ['Content Strategy', 'Copywriting', 'Next.js', 'React.js', 'Tailwind CSS'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/osoul-real-estate.png',
    accent: '#D4AF6A',
    languages: ['AR', 'EN'],
    vercelDeployments: [],
  },
  {
    id: 'dream-store-mobiles',
    title: 'Dream Store Mobiles',
    subtitle: 'Brand, Content, Marketing & E-Commerce Strategy',
    industry: 'Retail & Consumer Electronics',
    projectType: 'Brand Strategy & E-Commerce',
    pillars: ['marketing', 'content', 'creative', 'technology'],
    role: 'Digital Strategist & Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Interactive brand, content, and marketing strategy presentation for Dream Store Mobiles, paired with e-commerce storefront development and localization workflows.',
    contribution:
      'Built the interactive Vite strategy presentation and worked on e-commerce theme customization and product categorization.',
    deliverables: ['Interactive Brand & Content Presentation', 'E-Commerce Theme & Product Setup'],
    tools: ['HTML5 & CSS3', 'JavaScript', 'E-Commerce', 'Brand Strategy'],
    status: 'Completed',
    image: '/images/previews/dream-store.jpg',
    accent: '#F59E0B',
    languages: ['AR', 'EN'],
    vercelDeployments: [],
  },
  {
    id: 'sphinx-airport-it',
    title: 'Sphinx International Airport — IT Strategy Analysis',
    subtitle: 'Aviation IT Infrastructure, Systems & Security Strategy Study',
    industry: 'Aviation & Enterprise IT',
    projectType: 'IT Strategy & Systems Analysis',
    pillars: ['technology', 'marketing'],
    role: 'Business Technology & IT Analyst',
    company: 'CIC / Egyptian Airports Context',
    year: '2025–2026',
    description:
      'Strategic analysis of airport IT infrastructure, network operations, security systems, and digital transformation requirements informed by practical IT internship exposure at Egyptian Airports Company.',
    contribution:
      'Conducted the IT operations, networking, and enterprise systems analysis connecting aviation infrastructure requirements with business technology strategy.',
    deliverables: ['Airport IT Infrastructure & Security Analysis', 'Strategic Systems Presentation'],
    tools: ['IT Operations', 'Networking', 'Information Systems', 'Data Analysis'],
    status: 'Academic & Technical',
    image: '/images/previews/sphinx-airport-it.png',
    accent: '#38BDF8',
    vercelDeployments: [],
  },
  {
    id: 'saboura-el-mahrousa',
    title: 'Saboura El-Mahrousa',
    subtitle: 'Bilingual Charity Tracking & Volunteer Management Platform',
    industry: 'NGO & Social Impact',
    projectType: 'Full-Stack Web Platform',
    pillars: ['technology', 'media'],
    role: 'Tech Lead & Full-Stack Developer',
    company: 'Life Makers Foundation',
    year: '2024–2025',
    description:
      'Bilingual (Arabic/English) charity tracking and volunteer management dashboard built with Next.js 16 and Supabase, integrating Recharts analytics, Google Sheets API, and Zapier webhooks.',
    contribution:
      'Architected and deployed the full-stack Next.js 16 + Supabase operations platform for Life Makers coordinators.',
    deliverables: ['Live Next.js 16 + Supabase Dashboard', 'Google Sheets & Zapier Sync', 'Analytics Charts'],
    tools: ['Next.js', 'React.js', 'Supabase', 'SQL', 'REST APIs'],
    status: 'Completed',
    featured: true,
    image: '/images/previews/saboura-el-mahrousa.jpg',
    accent: '#22D3EE',
    languages: ['AR', 'EN'],
    vercelDeployments: ['saboura-elmahrousa-platform.vercel.app'],
    productionUrl: 'https://saboura-elmahrousa-platform.vercel.app',
  },
  {
    id: 'life-makers-qalyubia',
    title: 'Life Makers Qalyubia Platform',
    subtitle: 'Full-Stack NGO Volunteer & QR Attendance System',
    industry: 'NGO & Community',
    projectType: 'Full-Stack Web Application',
    pillars: ['technology'],
    role: 'Volunteer Coordinator & Full-Stack Developer',
    company: 'Life Makers — Qalyubia',
    year: '2024',
    description:
      'Full-stack Next.js 14 volunteer platform with Supabase relational database, QR attendance tracking, gamified volunteer leaderboards, and administrative dashboard for Qalyubia Governorate.',
    contribution:
      'Combined field role as Volunteer Coordinator for Qalyubia Governorate with full-stack engineering to build the volunteer platform.',
    deliverables: ['Next.js 14 Web App', 'Supabase SQL Schema', 'QR Attendance & Leaderboards'],
    tools: ['Next.js', 'React.js', 'Supabase', 'SQL', 'Tailwind CSS'],
    status: 'Completed',
    accent: '#34D399',
    vercelDeployments: [],
  },
  {
    id: 'reloop',
    title: 'ReLoop Smart Recycling',
    subtitle: 'DROP → EARN → RELOOP · Smart Waste & IoT Recycling Concept',
    industry: 'Sustainability & IoT',
    projectType: 'Smart Recycling System & Concept',
    pillars: ['technology', 'marketing', 'creative'],
    role: 'Product & Systems Developer',
    year: '2024–2025',
    description:
      'Smart waste and reward-driven recycling system ("DROP → EARN → RELOOP — Smart Waste. Real Impact.") combining an IoT hardware simulation (Arduino/Wokwi), C++ logic, and a sustainability product proposal.',
    contribution:
      'Designed the ReLoop product proposal, hardware circuit simulation (`sketch.ino` / `diagram.json`), and C++ tracking prototype.',
    deliverables: ['ReLoop Product Proposal', 'IoT Circuit Simulation (Wokwi)', 'C++ System Prototype'],
    tools: ['C++', 'IoT / Arduino', 'Product Design', 'Systems Thinking'],
    status: 'Concept',
    image: '/images/reloop.png',
    accent: '#22C55E',
    vercelDeployments: [],
  },
  {
    id: 'db2-arena',
    title: 'DB2 Arena',
    subtitle: 'Relational Database Architecture & SQL Systems Project',
    industry: 'Information Systems & Databases',
    projectType: 'Database & Systems Project',
    pillars: ['technology'],
    role: 'Database & Systems Developer',
    year: '2024–2025',
    description:
      'Structured relational database design, SQL querying, and information systems project focused on data modeling, schema normalization, and transactional integrity.',
    contribution:
      'Designed the relational schema, SQL queries, and structured data management workflows.',
    deliverables: ['Relational Database Schema', 'SQL Query & Data Analysis Suite'],
    tools: ['SQL', 'Databases', 'Data Analysis', 'Information Systems'],
    status: 'Academic & Technical',
    accent: '#60A5FA',
    vercelDeployments: [],
  },
  {
    id: 'promedia-aljazeera',
    title: 'ProMedia × Al Jazeera & Studio Suite',
    subtitle: 'Agency Microsite & Partnership Presentations (8 Deployments)',
    industry: 'Media & Broadcasting',
    projectType: 'Agency Suite & Presentations',
    pillars: ['media', 'marketing', 'creative', 'production', 'technology'],
    role: 'Creative & Web Execution',
    company: 'ProMedia',
    year: '2024–2025',
    description:
      'Interactive studio microsite and partnership presentation suite built for ProMedia, grouping 8 verified Vercel deployments across the studio showcase and Al Jazeera pitch iterations.',
    contribution:
      'Designed and shipped the ProMedia studio microsites and interactive Al Jazeera partnership presentation.',
    deliverables: ['ProMedia Studio Microsite', 'Al Jazeera Partnership Deck', '8 Verified Releases'],
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    status: 'Active',
    featured: true,
    image: '/images/previews/promedia-aljazeera.jpg',
    accent: '#60A5FA',
    vercelDeployments: [
      'promedia-studio-2est-zeta.vercel.app',
      'pro-media-microsite.vercel.app',
      'promedia-studio-wheat.vercel.app',
      'promedia-aljazeera-presentation.vercel.app',
      'promedia-aljazeera-presentation-jb9t.vercel.app',
      'promedia-aljazeera-presentation-v1.vercel.app',
      'promedia-aljazeera-presentation-j119.vercel.app',
      'promedia-aljazeera-presentation-ne1m.vercel.app',
    ],
    productionUrl: 'https://promedia-aljazeera-presentation.vercel.app',
  },
  {
    id: 'promedia-mazen-adly',
    title: 'ProMedia × Mazen Adly',
    subtitle: 'Solo Creator Media Kit & Partnership Deck',
    industry: 'Creator Economy & Sports',
    projectType: 'Digital Media Kit',
    pillars: ['media', 'content', 'marketing', 'technology'],
    role: 'Frontend Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Commercial solo creator representation deck and collaboration rate card for Mazen Adly (lifestyle, travel & open-water swimming) featuring 28 categorized Reel items.',
    contribution: 'Built and deployed the interactive bilingual EN/AR creator media kit.',
    deliverables: ['Live Creator Media Kit', '28-Reel Showcase', 'Rate Card'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Vercel'],
    status: 'Completed',
    image: '/images/previews/promedia-mazen-adly.jpg',
    accent: '#E11D48',
    languages: ['EN', 'AR'],
    vercelDeployments: ['promedia-mazen-adly-presentation.vercel.app'],
    productionUrl: 'https://promedia-mazen-adly-presentation.vercel.app/',
  },
  {
    id: 'promedia-moaz-adly',
    title: 'ProMedia × Moaz Adly',
    subtitle: 'Solo Creator Media Kit & Sports/Travel Deck',
    industry: 'Creator Economy & Sports',
    projectType: 'Digital Media Kit',
    pillars: ['media', 'content', 'marketing', 'technology'],
    role: 'Frontend Web Developer',
    company: 'ProMedia',
    year: '2026',
    description:
      'Commercial solo creator representation deck and sponsorship packages for Moaz Adly (sports, padel, fitness & travel) featuring 19 categorized portfolio items.',
    contribution: 'Built and deployed the interactive bilingual EN/AR creator media kit.',
    deliverables: ['Live Creator Media Kit', '19-Item Portfolio', 'Rate Card'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design', 'Vercel'],
    status: 'Completed',
    image: '/images/previews/promedia-moaz-adly.jpg',
    accent: '#BE123C',
    languages: ['EN', 'AR'],
    vercelDeployments: ['promedia-moaz-adly.vercel.app'],
    productionUrl: 'https://promedia-moaz-adly.vercel.app/',
  },
  {
    id: 'bedaya-website',
    title: 'Bedaya Factories Corporate Website',
    subtitle: 'Industrial Brand & Corporate Web Platform (6 Releases)',
    industry: 'Industrial & Agriculture',
    projectType: 'Corporate Website',
    pillars: ['marketing', 'creative', 'technology'],
    role: 'Web Developer & UI Designer',
    year: '2024–2025',
    description:
      'Corporate web platform for Bedaya Factories (Feed Mills) presenting product lines, manufacturing scale, and B2B contact channels across 6 iterative Vercel deployments.',
    contribution: 'Designed and built the responsive corporate web experience.',
    deliverables: ['Corporate Website', '6 Iterative Deployments'],
    tools: ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
    image: '/images/previews/bedaya-website.jpg',
    accent: '#A78BFA',
    vercelDeployments: [
      'bedaya-website-ftcc-chl.vercel.app',
      'bedaya-website-yr1t-phl.vercel.app',
      'bedaya-website-nvyh83.vercel.app',
      'bedaya-website.vercel.app',
      'bedaya-website-rrs6.vercel.app',
      'bedaya-websitecom.vercel.app',
    ],
    productionUrl: 'https://bedaya-website.vercel.app',
  },
  {
    id: 'dr-osama-taha',
    title: 'Dr. Osama Taha — Personal Brand Platform',
    subtitle: '19-Chapter Editorial Brand & Media Strategy Experience',
    industry: 'Healthcare & Personal Branding',
    projectType: 'Editorial Brand Strategy Platform',
    pillars: ['creative', 'marketing', 'content', 'technology'],
    role: 'Product Thinker & Web Developer',
    year: '2024–2025',
    description:
      'Dark luxury 19-chapter personal brand and content-engine strategy platform for Dr. Osama Taha featuring an interactive media player and 90-day execution roadmap.',
    contribution: 'Engineered the 19-chapter editorial web platform and media player.',
    deliverables: ['19-Chapter Brand Platform', 'Interactive Media Player'],
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design'],
    status: 'Completed',
    image: '/images/previews/dr-osama-taha.jpg',
    accent: '#D4AF6A',
    vercelDeployments: ['dr-osama-lyart.vercel.app'],
    productionUrl: 'https://dr-osama-lyart.vercel.app',
  },
  {
    id: 'viv-croissants',
    title: 'VIV Croissants Interactive Presentation',
    subtitle: 'F&B Brand Growth & Digital Pitch Deck',
    industry: 'Food & Beverage',
    projectType: 'Interactive Pitch Deck',
    pillars: ['marketing', 'creative', 'production', 'technology'],
    role: 'Digital Producer & Developer',
    company: 'ProMedia',
    year: '2024',
    description:
      'Interactive digital pitch deck and creative growth presentation built for VIV Croissants.',
    contribution: 'Built the web presentation combining brand visuals and growth strategy.',
    deliverables: ['Live Interactive Pitch Deck'],
    tools: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    status: 'Completed',
    image: '/images/previews/viv-croissants.jpg',
    accent: '#F59E0B',
    vercelDeployments: ['viv-digital-presentation.vercel.app'],
    productionUrl: 'https://viv-digital-presentation.vercel.app',
  },
  {
    id: 'nabil-elbasyouni',
    title: 'Nabil Elbasyouni Executive Portfolio',
    subtitle: 'Executive Personal Brand Website (3 Releases)',
    industry: 'Personal Branding',
    projectType: 'Personal Portfolio Website',
    pillars: ['creative', 'technology'],
    role: 'Frontend Developer & UI Designer',
    year: '2024',
    description:
      'Minimalist executive personal portfolio showcasing career leadership and media presence across 3 verified Vercel deployments.',
    contribution: 'Designed and developed the personal brand website.',
    deliverables: ['Live Personal Portfolio', '3 Verified Deployments'],
    tools: ['React.js', 'Tailwind CSS', 'UI/UX Design'],
    status: 'Completed',
    image: '/images/previews/nabil-elbasyouni.jpg',
    accent: '#38BDF8',
    vercelDeployments: [
      'nabil-elbasyouni-portfolio-rj93-rust.vercel.app',
      'nabil-elbasyouni-portfolio.vercel.app',
      'nabil-elbasyouni-personal.vercel.app',
    ],
    productionUrl: 'https://nabil-elbasyouni-portfolio.vercel.app',
  },
  {
    id: 'mostafa-os',
    title: 'Mostafa OS',
    subtitle: 'Personal AI Operating System Concept',
    industry: 'Productivity & AI',
    projectType: 'Personal Digital System',
    pillars: ['technology', 'creative'],
    role: 'Creator & Architect',
    year: '2024–Present',
    description:
      'Personal AI operating system built around Tasks, Projects, Ideas, and Thoughts with Build, Maintain, and Reset modes — routing inputs through an AI Brain into automated workflows.',
    contribution:
      'Designed the system architecture, operating modes, and AI-assisted input-to-notification pipeline.',
    deliverables: ['Personal OS Architecture', 'Build / Maintain / Reset Modes', 'AI Pipeline Design'],
    tools: ['React.js', 'Node.js', 'AI-Assisted Development', 'Workflow Automation'],
    status: 'Active',
    image: '/images/mostafa-os-icon.jpg',
    accent: '#34D399',
    vercelDeployments: [],
  },
  {
    id: 'andiwin-os',
    title: 'Andiwin OS v2',
    subtitle: 'Experimental Desktop Operating System Concept',
    industry: 'Systems & Software',
    projectType: 'Operating System Concept',
    pillars: ['technology', 'creative'],
    role: 'Systems Developer & Architect',
    year: '2023–2024',
    description:
      'Experimental desktop operating system concept spanning kernel, compositor, shell, dock, launcher, notifications, settings, and compatibility layers.',
    contribution: 'Architected the modular OS repository and UI shell components.',
    deliverables: ['Modular Codebase', 'Desktop Shell Architecture'],
    tools: ['Systems Architecture', 'UI/UX Design'],
    status: 'In Development',
    image: '/images/andiwin.jpg',
    accent: '#60A5FA',
    vercelDeployments: [],
  },
  {
    id: 'lakhbata',
    title: 'LAKHbATA (لخبطة)',
    subtitle: 'Experimental Digital & Software Concept',
    industry: 'Interactive Software',
    projectType: 'Digital Concept',
    pillars: ['creative', 'technology'],
    role: 'Creator & Developer',
    year: '2024',
    description:
      'Experimental digital product concept and desktop software build exploring interactive state and visual logic.',
    contribution: 'Designed and developed the concept and prototype.',
    deliverables: ['Software Prototype', 'Visual Concept'],
    tools: ['Product Concept', 'Programming'],
    status: 'Concept',
    image: '/images/lakhbata.jpg',
    accent: '#EF4444',
    vercelDeployments: [],
  },
  {
    id: 'egyptian-airports',
    title: 'Egyptian Airports IT Operations',
    subtitle: 'Enterprise IT Infrastructure, Networking & Data Center Internship',
    industry: 'Aviation & Enterprise IT',
    projectType: 'IT Internship',
    pillars: ['technology'],
    role: 'IT Intern',
    company: 'Egyptian Airports Company',
    year: '2024',
    description:
      'Practical enterprise IT training covering airport IT operations, networking, technical support, system administration, and data center operations.',
    contribution: 'Completed hands-on IT operations and infrastructure internship.',
    deliverables: ['Official Completion Certificate'],
    tools: ['IT Operations', 'Networking', 'Technical Support', 'Data Center Ops'],
    status: 'Completed',
    image: '/images/egyptian-airports-cert.jpg',
    accent: '#0284C7',
    vercelDeployments: [],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'step-forward-1st',
    title: 'FIRST PLACE WINNER',
    subtitle: 'Step Forward Business Conference 2025',
    project: 'Save Money',
    issuer: 'Canadian International College (CIC)',
    year: '2025',
    featured: true,
    image: '/images/step-forward-award.jpg',
  },
  {
    id: 'egyptian-airports-cert',
    title: 'IT Operations & Infrastructure Certificate',
    subtitle: 'Enterprise Networking, Technical Support & Data Center Operations',
    issuer: 'Egyptian Airports Company',
    year: '2024',
    image: '/images/egyptian-airports-cert.jpg',
  },
  {
    id: 'engaz-ai-cert',
    title: 'ENGAZ AI Certificate',
    subtitle: 'Practical AI Systems & Workflow Applications',
    issuer: 'ENGAZ AI',
    year: '2024',
    image: '/images/engaz-ai-cert.jpg',
  },
  {
    id: 'tamooh-cert',
    title: 'TamooH Professional Development',
    subtitle: 'Entrepreneurship, Leadership & Career Readiness',
    issuer: 'TamooH',
    year: '2024',
    image: '/images/tamooh-cert.jpg',
  },
];
