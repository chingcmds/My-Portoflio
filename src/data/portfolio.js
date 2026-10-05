export const personal = {
  name: 'Charity Eramis',
  title: 'Full Stack Web Developer',
  location: 'San Vicente, Agusan Del Norte, Butuan City, 8600',
  phone: '09095254605',
  email: 'eramischarity81@gmail.com',
  profileImage: '/images/profile.jpg',
  summary:
    'Software Developer with 2+ years of hands-on experience developing and maintaining web applications. Experienced in backend development, REST APIs, database integration, troubleshooting, bug fixing, testing, and implementing new features. Comfortable working with development teams, reviewing code and functionality, and communicating project progress in a remote environment.',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Britatny Rhor',
    period: 'Jul 2024 — Sep 2026',
    bullets: [
      'Developed and maintained web applications and backend services based on project requirements.',
      'Developed and integrated REST APIs to support application features and data flow.',
      'Implemented new features and improvements while maintaining existing functionality.',
      'Built solutions with clear specifications and reliable implementation.',
      'Troubleshot and fixed bugs across frontend, backend, and database-related functionality.',
      'Tested and reviewed implemented features to identify and prevent issues before deployment.',
      'Collaborated with team members to achieve target results, ensuring alignment and efficiency.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'DepEd IT Department',
    period: 'Jan 2024 — Jun 2024',
    bullets: [
      'Verified data accuracy, consistency, and completeness across multiple databases prior to reporting, enhancing data reliability.',
      'Managed large system datasets for student records and user accounts, ensuring timely and accurate data availability.',
      'Tested and reviewed system data to prevent errors before deployment.',
      'Coordinated with staff to organise and streamline system information for improved reporting efficiency.',
      'Entered updated, validated records using structured requirements and supporting documentation.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'Responsive Web Design'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Postman'],
  },
  {
    label: 'Development',
    items: [
      'API Integration',
      'Backend Development',
      'Database Integration',
      'Bug Fixing',
      'Testing & Debugging',
    ],
  },
]

export const projects = [
  {
    title: 'NovaMart',
    description:
      'Customer-facing e-commerce demo built with React, TypeScript, and Tailwind. Browse products, search and filter, manage a cart and wishlist, and walk through checkout with mock data—no backend or admin dashboard. Includes home, listings, product details, categories, cart, checkout UI, and order confirmation.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://novamart-ochre.vercel.app/',
  },
  {
    title: 'PropManage',
    description:
      'Property management dashboard for rental properties, tenants, bookings, and payments—with search, filters, and add/edit flows on mock data that persists in the browser. KPI dashboard with charts, responsive layout, and loading and empty states, similar to internal business tools in production.',
    tech: ['React', 'TypeScript', 'Charts', 'Responsive UI'],
    demoUrl: 'https://prop-manage-ten.vercel.app/',
  },
]

export const education = {
  degree: 'Bachelor of Science in Information Technology',
  school: 'Caraga State University — Butuan City',
  year: '2025',
}

export const typingRoles = [
  'Full Stack Web Developer',
  'REST API Builder',
  'React Enthusiast',
  'Remote Team Collaborator',
]
