export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with advanced analytics and statistical modeling.',
    icon: '📊',
    features: [
      'Statistical Analysis',
      'Predictive Modeling',
      'Data Mining',
      'Business Intelligence',
    ],
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Create compelling visual narratives that make complex data accessible and engaging.',
    icon: '📈',
    features: [
      'Interactive Dashboards',
      'Custom Charts & Graphs',
      'Real-time Visualizations',
      'Infographic Design',
    ],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure for scalable, reliable data operations.',
    icon: '⚙️',
    features: [
      'ETL Pipelines',
      'Data Warehousing',
      'Cloud Infrastructure',
      'Data Quality Assurance',
    ],
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Deliver high-quality, scalable software solutions tailored to your business needs.',
    icon: '💻',
    features: [
      'Custom Applications',
      'API Development',
      'System Integration',
      'Code Optimization',
    ],
  },
  {
    id: 'web-apps',
    title: 'Web Apps',
    description: 'Build modern, responsive web applications with exceptional user experiences.',
    icon: '🌐',
    features: [
      'Full-Stack Development',
      'Progressive Web Apps',
      'Performance Optimization',
      'Cross-Platform Compatibility',
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'Leverage artificial intelligence and machine learning to automate and enhance processes.',
    icon: '🤖',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Automation',
    ],
  },
]


