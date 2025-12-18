export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  images: string[]
  techStack: string[]
  outcomes: string[]
  client?: string
  year?: string
  externalLink?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'enterprise-analytics-platform',
    title: 'Enterprise Analytics Platform',
    category: 'Data Analysis',
    description: 'Comprehensive analytics solution for Fortune 500 company with real-time insights and predictive modeling.',
    longDescription: 'Built a sophisticated enterprise analytics platform that processes millions of data points daily. The solution includes advanced statistical analysis, predictive modeling, and real-time dashboards that enable data-driven decision making across all departments.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
    techStack: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS', 'Docker'],
    outcomes: [
      '40% increase in operational efficiency',
      'Real-time analytics with <100ms latency',
      'Scalable to 10M+ data points per day',
      'ROI of 300% within first year',
    ],
    client: 'Fortune 500 Tech Company',
    year: '2024',
    featured: true,
  },
  {
    id: 'ai-powered-dashboard',
    title: 'AI-Powered Business Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard with AI-driven insights and beautiful visualizations for executive decision-making.',
    longDescription: 'Developed an intelligent business dashboard that combines real-time data visualization with AI-powered insights. The platform features interactive charts, predictive analytics, and automated reporting that helps executives make informed decisions faster.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'OpenAI API', 'TailwindCSS'],
    outcomes: [
      '50% reduction in decision-making time',
      'Interactive visualizations with 60fps performance',
      'AI recommendations with 85% accuracy',
      'Adopted by 200+ executives',
    ],
    client: 'Global Financial Services',
    year: '2024',
    featured: true,
  },
  {
    id: 'data-pipeline-architecture',
    title: 'Cloud Data Pipeline Architecture',
    category: 'Data Engineering',
    description: 'Scalable ETL pipeline processing terabytes of data daily with 99.9% uptime.',
    longDescription: 'Architected and implemented a robust cloud-based data pipeline that processes terabytes of data daily. The solution includes automated ETL processes, data quality checks, and real-time monitoring. Built for scale with 99.9% uptime guarantee.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    techStack: ['Apache Airflow', 'Kafka', 'Spark', 'Kubernetes', 'GCP', 'Terraform'],
    outcomes: [
      '99.9% uptime achieved',
      'Processes 5TB+ data daily',
      '50% cost reduction vs. previous solution',
      'Zero data loss incidents',
    ],
    client: 'E-commerce Leader',
    year: '2023',
    featured: true,
  },
  {
    id: 'custom-crm-system',
    title: 'Custom CRM System',
    category: 'Software Development',
    description: 'Full-stack CRM solution with advanced automation and seamless integrations.',
    longDescription: 'Developed a comprehensive CRM system from the ground up, featuring advanced automation, seamless third-party integrations, and an intuitive user interface. The system handles thousands of customer interactions daily with real-time synchronization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
    outcomes: [
      '300% increase in sales productivity',
      'Automated 80% of manual processes',
      'Integrated with 15+ third-party services',
      'Used by 500+ sales professionals',
    ],
    client: 'SaaS Startup',
    year: '2023',
    featured: true,
  },
  {
    id: 'progressive-web-app',
    title: 'Progressive Web Application',
    category: 'Web Apps',
    description: 'High-performance PWA with offline capabilities and native app-like experience.',
    longDescription: 'Built a cutting-edge Progressive Web Application that delivers a native app-like experience across all devices. Features include offline functionality, push notifications, and seamless performance optimization for mobile and desktop users.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    techStack: ['Next.js', 'TypeScript', 'PWA', 'Service Workers', 'IndexedDB'],
    outcomes: [
      '95+ Lighthouse performance score',
      'Works offline with full functionality',
      '50% faster load times vs. native app',
      '100K+ active users',
    ],
    client: 'Retail Chain',
    year: '2024',
    featured: true,
  },
  {
    id: 'ml-fraud-detection',
    title: 'ML-Powered Fraud Detection',
    category: 'AI Tools',
    description: 'Machine learning system detecting fraudulent transactions with 99.5% accuracy.',
    longDescription: 'Developed a sophisticated machine learning system that analyzes transaction patterns in real-time to detect fraudulent activities. The solution uses advanced algorithms and continuously learns from new data to improve accuracy over time.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    ],
    techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'MongoDB', 'Kafka'],
    outcomes: [
      '99.5% fraud detection accuracy',
      'Real-time processing (<50ms latency)',
      'Reduced false positives by 60%',
      'Prevented $2M+ in fraudulent transactions',
    ],
    client: 'Financial Institution',
    year: '2024',
    featured: true,
  },
]

export const projectCategories = [
  'All',
  'Data Analysis',
  'Data Visualization',
  'Data Engineering',
  'Software Development',
  'Web Apps',
  'AI Tools',
]


