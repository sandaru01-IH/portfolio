export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  rating: number
  feedback: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Chief Data Officer',
    company: 'TechCorp Industries',
    rating: 5,
    feedback: 'AlphaGrid transformed our data infrastructure. Their expertise in data engineering and visualization helped us make data-driven decisions that increased our efficiency by 40%. Exceptional team and outstanding results.',
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'Product Director',
    company: 'InnovateLabs',
    rating: 5,
    feedback: 'Working with AlphaGrid was a game-changer. They delivered a custom web application that exceeded our expectations. The attention to detail and commitment to quality is unmatched. Highly recommended.',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'VP of Analytics',
    company: 'DataFlow Solutions',
    rating: 5,
    feedback: 'AlphaGrid\'s AI tools have revolutionized our workflow. Their machine learning models provided insights we never thought possible. Professional, innovative, and results-oriented.',
  },
  {
    id: '4',
    name: 'Michael Thompson',
    role: 'CTO',
    company: 'ScaleUp Ventures',
    rating: 5,
    feedback: 'The team at AlphaGrid is exceptional. They built a comprehensive data analysis platform that scales beautifully. Their software development expertise and technical depth are impressive.',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Operations Manager',
    company: 'Global Dynamics',
    rating: 5,
    feedback: 'AlphaGrid delivered a stunning data visualization dashboard that our entire team uses daily. The project was completed on time, within budget, and the ongoing support has been excellent.',
  },
]


