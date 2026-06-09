export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  company: string;
  role: string;
  timeline: {
    startDate: string;
    endDate: string;
    duration: string;
  };
  responsibilities: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'nexkey',
    title: 'Nexkey – Smart IoT Lock Management System',
    description: 'A complete IoT-based smart lock management system that allows users to lock and unlock doors through both mobile applications and a web portal with advanced business logic for secure access control.',
    fullDescription: 'NexKey is a comprehensive IoT-based smart lock management system (US-Based Project) that enables users to control smart locks through mobile applications and web portals. The system features advanced business logic including automatic unlocking during business hours, blackout periods for restricted access, and multi-level access control (Owner, Admin, User). The platform includes grouping functionality for managing locks via groups with role-based permissions, an internal portal for key sharing and customer management, and a user web portal with analytics and personalized lock control features.',
    technologies: ['React.js', 'Material UI', 'Redux Toolkit', 'Node.js', 'Express.js', 'Java SpringBoot', 'MongoDB', 'Heroku', 'AWS EC2'],
    images: ['/Nexkey/Nexkey PIcture.png', '/Nexkey/nexkey picture 2.png', '/Nexkey/nexkey picture 3.png'],
    liveUrl: 'https://portal.nexkey.com/',
    githubUrl: '#',
    company: 'US-Based Project',
    role: 'Backend Developer (Primary) / Frontend Developer',
    timeline: {
      startDate: 'June 2024',
      endDate: 'December 2025',
      duration: '18 months'
    },
    responsibilities: [
      'Developed and optimized REST APIs using Node.js and Express',
      'Created multiple cron jobs for automated tasks and system maintenance',
      'Designed backend architecture, logic flow, and system structures',
      'Worked on Java Spring Boot grouping service, handling authorization and business logic',
      'Debugging, fixing issues, and improving system reliability',
      'Built the Analytics Dashboard using React and Material UI',
      'Designed and developed the Broadcast feature (complete UI/UX + integration)',
      'Managed and improved the User Web Portal functionality',
      'Worked with Redux Toolkit for global state management',
      'Implemented IoT-based smart lock control (unlock/lock devices via mobile or web)',
      'Developed business hours automation (locks automatically stay unlocked during business hours)',
      'Implemented blackout functionality (no access allowed during blackout; only Admins and Owners can override)',
      'Created access level management system (Owner, Admin, User roles)',
      'Developed grouping functionality for managing locks via groups with role assignments',
      'Built internal portal features: share key ownership, manage customers, download reports, view all locks',
      'Developed user web portal: view lock activity, access personalized analytics, manage individual customers and locks, add/remove business hours and blackouts, lock/unlock controls'
    ],
    achievements: [
      'Gained strong experience in IoT systems and smart lock management',
      'Developed scalable backend architecture for cloud deployment',
      'Successfully integrated multiple services including Spring Boot and Express',
      'Implemented complex business logic for access control and security',
      'Built comprehensive analytics dashboard for user insights',
      'Deployed frontend on Heroku and backend on AWS EC2',
      'Developed business-critical functionalities for production use',
      'Enhanced system reliability through debugging and optimization'
    ]
  },
  {
    id: '2',
    slug: 'hm-ecommerce',
    title: 'H&M E-Commerce',
    description: 'Full-stack e-commerce solution for H&M with admin dashboard, inventory management, and user authentication.',
    fullDescription: 'A complete e-commerce solution for H&M featuring a modern shopping interface, comprehensive admin dashboard, and robust inventory management system. The platform includes advanced features like product filtering, search functionality, shopping cart, wishlist, order tracking, and customer reviews. The admin panel provides real-time analytics, inventory tracking, and order management capabilities.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Tailwind CSS', 'Prisma', 'NextAuth'],
    images: ['/H and M.jpg', '/landing3.jpg', '/landing4.jpg'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'H&M Group',
    role: 'Senior Full Stack Developer',
    timeline: {
      startDate: 'March 2023',
      endDate: 'September 2023',
      duration: '7 months'
    },
    responsibilities: [
      'Architected the entire application using Next.js and TypeScript',
      'Developed admin dashboard with real-time analytics',
      'Implemented inventory management system with PostgreSQL',
      'Created secure authentication system using NextAuth',
      'Built RESTful APIs for product and order management',
      'Designed responsive UI components with Tailwind CSS',
      'Implemented advanced search and filtering capabilities'
    ],
    achievements: [
      'Delivered project 2 weeks ahead of schedule',
      'Improved inventory accuracy by 95%',
      'Reduced checkout abandonment rate by 40%',
      'Successfully handled 50,000+ concurrent users'
    ]
  },
  {
    id: '3',
    slug: 'giga-mall',
    title: 'Giga Mall Web Application',
    description: 'A full-featured web application for Giga Mall delivering a seamless digital experience for visitors, brands, and management with centralized mall information and role-based admin system.',
    fullDescription: 'Giga Mall Web Application is a comprehensive full-stack platform designed to centralize mall information, improve customer navigation, and streamline content management. The platform features comprehensive stores and dine listings with detailed information, dynamic events and offers management sections, and a dedicated area for showcasing new brands and upcoming projects. It includes an interactive internal mall map with floor-based store listings and in-mall navigation support, an entertainment and services section, and a smart parking system with automated parking module displaying available slots and reservations. The application features a powerful admin portal with role-based access control including Store Owner, Admin, and Super Owner levels for managing all content including stores, dine outlets, events, and offers.',
    technologies: ['Next.js', 'Material UI', 'NestJS', 'PostgreSQL', 'Prisma', 'Hostinger KVM8'],
    images: ['/Giga/giga 1.png', '/Giga/giga 2.png', '/Giga/giga 3.png'],
    liveUrl: 'https://the-giga-mall-web.vercel.app/',
    githubUrl: 'https://github.com/Giga-Group/The-Giga-Mall-Web',
    company: 'Giga Mall',
    role: 'Full Stack Developer',
    timeline: {
      startDate: 'January 2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Developed full-featured web application using Next.js for frontend',
      'Implemented Material UI (MUI) for consistent and modern user interface',
      'Built scalable backend architecture using NestJS',
      'Designed and implemented PostgreSQL database with Prisma ORM',
      'Created comprehensive stores and dine listings with detailed information',
      'Developed dynamic events and offers management system',
      'Built dedicated section for showcasing new brands and upcoming projects',
      'Implemented interactive internal mall map with floor-based store listings',
      'Developed in-mall navigation support system',
      'Created entertainment and services section for centralized information',
      'Built smart parking system with automated parking module',
      'Implemented parking slot availability and reservation features',
      'Developed powerful admin portal with role-based access control',
      'Created multiple access levels: Store Owner, Admin, and Super Owner',
      'Implemented content management for stores, dine outlets, events, and offers',
      'Deployed application on Hostinger KVM8 Server',
      'Ensured scalable, high-performance, and user-friendly platform design'
    ],
    achievements: [
      'Created centralized system for mall information and operations management',
      'Improved customer navigation inside the mall with interactive map',
      'Enhanced customer engagement through comprehensive store and event listings',
      'Streamlined content management with role-based admin system',
      'Developed scalable architecture for high-performance platform',
      'Successfully implemented smart parking system with real-time availability',
      'Created user-friendly interface for seamless digital experience',
      'Built comprehensive platform supporting visitors, brands, and management'
    ]
  },
  {
    id: '4',
    slug: 'smartfolio',
    title: 'SmartFolio',
    description: 'An AI-Powered Web Application with AI-generated cover letters, customizable resume builder, and portfolio generator features.',
    fullDescription: 'SmartFolio is an innovative AI-powered web application that revolutionizes job application processes. The platform features an AI-generated cover letter system with an interactive questionnaire that collects user information to create personalized cover letters. It includes resume and job description matching that analyzes compatibility before generating cover letters, ensuring relevance and quality through conditional generation. The application also offers a customizable resume builder with multiple templates and multilingual support, allowing users to translate resumes into different languages. Additionally, it includes a portfolio generator for showcasing projects with detailed descriptions and shareable links. The application implements robust security with Http-only cookies for authentication, protected routes for sensitive operations, and comprehensive error handling throughout.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML', 'Material UI', 'JWT', 'MERN Stack'],
    images: ['/Smartfolio/Smartfolio 1.png', '/Smartfolio/Smartfolio 2.png', '/Smartfolio/Smartfolio 3.png'],
    liveUrl: '#',
    githubUrl: 'https://github.com/alwahabkhan/smartfolio-mern',
    company: 'Personal Project',
    role: 'Full Stack Developer',
    timeline: {
      startDate: 'October 2023',
      endDate: 'May 2024',
      duration: '8 months'
    },
    responsibilities: [
      'Developed AI-powered cover letter generation system with interactive questionnaire',
      'Implemented resume and job description matching algorithm for compatibility analysis',
      'Created conditional generation logic to ensure cover letter relevance and quality',
      'Built customizable resume builder with multiple template options',
      'Implemented multilingual support for resume translation',
      'Developed portfolio generator with project showcase and shareable links',
      'Implemented secure authentication using Http-only cookies generated server-side',
      'Created protected routes for sensitive operations (shipping, payment methods)',
      'Designed and developed robust error handling throughout the application',
      'Built RESTful APIs using Node.js and Express',
      'Designed MongoDB database schemas for user data, resumes, and portfolios',
      'Developed frontend components using React and Material UI',
      'Implemented secure session management and authentication flow'
    ],
    achievements: [
      'Successfully integrated AI/ML capabilities for intelligent cover letter generation',
      'Developed advanced matching algorithm for resume-job description compatibility',
      'Created multilingual resume translation feature for broader reach',
      'Implemented comprehensive security measures with Http-only cookies',
      'Built user-friendly interface with multiple customizable templates',
      'Developed shareable portfolio links for easy access and sharing',
      'Created robust error handling system for enhanced user experience',
      'Successfully deployed full-stack MERN application'
    ]
  },
  {
    id: '5',
    slug: 'cakeshares',
    title: 'CakeShares – Profit Sharing System',
    description: 'A full-stack FinTech web application that enables multiple users to collectively invest in assets and automatically receive profits based on their individual contributions, with transparent and automated profit distribution.',
    fullDescription: 'CakeShare is a full-stack FinTech web application that enables multiple users to collectively invest in assets and automatically receive profits based on their individual contributions. The platform ensures transparent, fair, and automated profit distribution as asset values grow, eliminating manual calculations and disputes. Users can create or join investment pools, monitor asset performance in real time, and track their earnings through an integrated digital wallet. The system supports role-based access (Buyer/User, Seller/Admin, Super Admin), Stripe integration for deposits and payouts, and is built with a microservices architecture on AWS ECS for high availability and scalability.',
    technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS ECS', 'Microservices'],
    images: ['/CakeShares/cake3.png', '/CakeShares/cake1.png', '/CakeShares/cake2.png'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'FinTech / Investment Management',
    role: 'Full Stack Developer (Backend Primary)',
    timeline: {
      startDate: '2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Designed and developed scalable REST APIs using Node.js and Express',
      'Implemented microservices architecture for modular and maintainable services',
      'Integrated Stripe for secure payment processing and wallet transactions',
      'Built automated profit calculation and distribution logic',
      'Managed authentication and role-based access control (Buyer, Seller, Super Admin)',
      'Deployed and managed backend services on AWS ECS',
      'Implemented global state management with Redux Toolkit on the frontend',
      'Integrated backend APIs for real-time investment and wallet updates'
    ],
    achievements: [
      'Strengthened expertise in building scalable FinTech applications',
      'Delivered microservices-based backend for maintainability and scale',
      'Implemented secure payment flows and automated financial logic',
      'Gained hands-on experience in production-level full-stack development on AWS'
    ]
  },
  {
    id: '6',
    slug: 'eliya-residential-portal',
    title: 'Eliya Residential Portal',
    description: 'A web-based platform that streamlines buying and selling of residential properties, with role-based access for Admin, Agent, Seller, and Buyer—supporting property listings, inquiries, mortgage estimates, and analytics.',
    fullDescription: 'The Eliya Residential Portal is a web-based platform designed to streamline the process of buying and selling residential properties. It facilitates seamless interactions between buyers, sellers, and agents while providing admins with comprehensive oversight and analytics. The platform supports four distinct roles: Admin (full system monitoring and management), Agent (intermediary between buyers and sellers), Seller (list properties via dashboard), and Buyer (browse and search properties, submit inquiries, use mortgage calculator). Built with Next.js for the frontend, Node.js and Express.js for the backend, and MySQL for storing users, properties, messages, analytics, and blog content. Features include form validation for buyer inquiries, property search with filtering across cities, real-time analytics for admin, and secure authentication with role-based dashboards and permissions.',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'MySQL'],
    images: ['/Eliya/Eliya1.jpeg', '/Eliya/Eliya2.jpeg', '/Eliya/Eliya3.jpeg'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'Eliya',
    role: 'Full Stack Developer',
    timeline: {
      startDate: '2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Built frontend with Next.js for server-side rendering, responsive UI, and routing',
      'Developed backend APIs using Node.js and Express.js with authentication and role-based access control',
      'Designed and implemented MySQL database for users, properties, messages, analytics, and blog content',
      'Implemented Admin dashboard: platform monitoring, blog/project uploads, analytics, message management',
      'Implemented Agent workflow: review buyer inquiries, contact buyers, bridge communication with sellers',
      'Implemented Seller dashboard: upload and manage property listings',
      'Implemented Buyer features: inquiry form (name, phone, email, budget, property type), property search and filters by city, mortgage calculator',
      'Added form validation, secure session management, and tailored dashboards per role'
    ],
    achievements: [
      'Delivered a structured and secure environment for property transactions',
      'Enabled buyers to find properties and sellers to list them with agent facilitation',
      'Provided admins with analytics and oversight for business decisions'
    ]
  },
  {
    id: '7',
    slug: 'intersight',
    title: 'Intersight – Revenue Intelligence System',
    description: 'An AI-powered revenue intelligence platform that helps B2B sales teams close more deals by analyzing CRM data, emails, meetings, and activities to learn what drives wins and apply those insights to active opportunities.',
    fullDescription: 'Intersight AI is an AI-powered revenue intelligence platform that helps B2B sales teams close more deals with confidence. It analyzes CRM data, emails, meetings, and sales activities to learn what drives successful deals and applies those insights to active opportunities—acting like a smart sales assistant that studies your best wins and guides your team to repeat that success. The platform addresses scattered sales data, missed deal risks, incomplete CRM data, manual update overhead, and inconsistent processes. It integrates with CRMs, email, calendars, and meeting platforms to continuously analyze historical and live deal data and provide real-time guidance. Core features include deal prioritization and insights (high-priority and at-risk deals with next steps), smart CRM suggestions (auto-suggested field values and frameworks like MEDDICC), auto CRM updates after meetings, AI meeting bot (record, transcribe, summarize, follow-ups), sales playbooks (stage and persona-based guidance), risk detection with mitigation strategies, and Intersight Copilot—a chat-based AI assistant for instant deal insights. Built for B2B companies and scaling sales teams (5+ reps) with historical deal data. Tech stack: Next.js (frontend), Nest.js (backend), PostgreSQL (database), Python and Azure Functions (AI and data processing), with integrations for Salesforce, HubSpot, email, calendar, and meeting tools.',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Python', 'Azure Functions', 'Salesforce', 'HubSpot'],
    images: ['/Intersight/intersight1.png', '/Intersight/intersight2.png', '/Intersight/intersight3.png', '/Intersight/intersight4.png', '/Intersight/intersight5.png'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'B2B Revenue Intelligence',
    role: 'Full Stack Development',
    timeline: {
      startDate: '2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Built frontend with Next.js for the revenue intelligence platform',
      'Developed backend services with Nest.js and PostgreSQL',
      'Connected CRM, email, calendar, and meeting integrations (e.g. Salesforce, HubSpot)',
      'Implemented deal prioritization, at-risk detection, and next-step insights',
      'Contributed to smart CRM suggestions, auto-updates, and meeting bot features',
      'Supported sales playbooks, risk detection, and Copilot-style chat assistant'
    ],
    achievements: [
      'Delivered an AI-powered platform that reduces admin work and improves forecasting',
      'Enabled consistent execution and cleaner CRM data for RevOps',
      'Built for B2B sales teams with historical deal data and scaling needs'
    ]
  },
  {
    id: '8',
    slug: 'motive',
    title: 'Motive – Fleet Management System',
    description: 'A fleet management platform for logistics, transportation, and field service businesses—providing visibility and control over vehicles, drivers, safety, compliance, and maintenance from a single system.',
    fullDescription: 'Motive is a comprehensive, AI-enabled vehicle fleet management platform built for logistics, transportation, and field service businesses. It acts as a central command center for fleet operations, providing complete visibility and control over vehicles, drivers, safety, compliance, and maintenance from a single unified system. The platform addresses lack of real-time visibility, high fuel and operational costs, unsafe driving behavior, manual compliance tracking, unexpected breakdowns, and disconnected data. It continuously collects data from vehicles and drivers via GPS, telematics, and activity tracking, then processes it in real time for dashboards, alerts, and reports. Core features include real-time fleet tracking (live GPS, route playback, geofencing), driver safety and behavior monitoring (speeding, harsh braking, safety scorecards), vehicle telematics and diagnostics (engine health, fuel, mileage, fault codes), fleet maintenance management (automated schedules and alerts), compliance and digital logs, custom reports and analytics, and mobile-friendly access for drivers and managers. Ideal for logistics and transportation companies, delivery fleets, construction and field service businesses, and organizations with small to large vehicle fleets. Tech stack: Next.js (frontend), Nest.js (backend), PostgreSQL (database).',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL'],
    images: ['/Motive/motive1.png', '/Motive/motive2.png', '/Motive/motive3.png', '/Motive/motive4.png', '/Motive/motive5.png'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'Fleet Management / Logistics',
    role: 'Full Stack Developer',
    timeline: {
      startDate: '2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Built frontend with Next.js for the fleet management platform',
      'Developed backend services with Nest.js and PostgreSQL',
      'Implemented real-time chat using Socket.io between driver users and admin broadcasts',
      'Implemented webhook triggering, receiving, and API key access',
      'Built vehicle telematics and diagnostics (engine health, fuel, mileage, fault codes)',
      'Implemented fleet maintenance management with automated schedules and service alerts',
      'Developed compliance and digital logging for regulatory reporting',
      'Created dashboards and analytics for utilization, driver performance, and fuel efficiency',
      'Delivered mobile-optimized interfaces for drivers and managers'
    ],
    achievements: [
      'Delivered a unified platform for complete fleet visibility and control',
      'Improved driver safety and regulatory compliance',
      'Enabled reduced fuel and maintenance costs through automation',
      'Built scalable solution for logistics and field service fleets'
    ]
  },
  {
    id: '9',
    slug: 'maidslife',
    title: 'Maidslife – On-Demand Home Services Platform',
    description: 'A scalable SaaS platform connecting customers with service professionals for cleaning and household services—featuring customer booking, admin dashboard, Google Places address autocomplete, coupons, and order tracking.',
    fullDescription: 'Maidslife is a complete on-demand home services platform built for a client who wanted to launch a scalable SaaS solution connecting customers with service professionals. The platform includes a customer-facing website where users can browse services, book appointments, enter their address using Google Places autocomplete, apply coupons, and track orders. The powerful admin dashboard gives administrators full control over operations: managing users, orders, professionals, and coupons, plus viewing sales and order analytics. The platform was built using React, Node.js, Express, and MongoDB, with secure authentication, online payment integration, and automated email notifications. The final product is a fully functional service-booking SaaS platform designed for scalability and smooth user experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Places API', 'Payment Integration', 'Email Notifications'],
    images: ['/Maidslife/maid1.png', '/Maidslife/maid2.png', '/Maidslife/maid3.png', '/Maidslife/maid4.png', '/Maidslife/maid5.png', '/Maidslife/maid6.png'],
    liveUrl: '#',
    githubUrl: '#',
    company: 'Client Project',
    role: 'Full Stack Developer',
    timeline: {
      startDate: '2024',
      endDate: 'Present',
      duration: 'Ongoing'
    },
    responsibilities: [
      'Developed customer-facing website for browsing and booking cleaning and household services',
      'Built admin dashboard for managing users, orders, professionals, and coupons',
      'Implemented Google Places autocomplete for address entry',
      'Integrated coupon system for discounts and promotions',
      'Built order tracking and management for customers and admins',
      'Implemented secure authentication and role-based access',
      'Integrated online payment processing',
      'Set up automated email notifications for bookings and updates',
      'Designed and developed backend API with Node.js, Express, and MongoDB',
      'Created sales and order analytics for administrators'
    ],
    achievements: [
      'Delivered a fully functional service-booking SaaS platform',
      'Built scalable architecture for growth and multiple service professionals',
      'Provided administrators with full operational control and analytics',
      'Enabled smooth user experience from booking to order tracking'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

