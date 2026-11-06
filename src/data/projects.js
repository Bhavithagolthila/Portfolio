// Update the `github` and `demo` fields below once your repository
// and live-demo links are ready. Leave a field as an empty string ""
// to hide that button on the project card.

const projects = [
  {
    title: 'CleanNest',
    subtitle: 'Home Cleaning Service Booking Platform',
    category: 'Full-Stack Development · Internship',
    label: 'Internship Project',
    description:
      'Built a full-stack home cleaning service booking platform with service browsing, GPS-based address entry, and Cash/UPI/Card payments using Razorpay. Implemented JWT authentication, bcrypt password hashing, role-based access control, server-side price calculation, and Razorpay payment verification. Added an admin dashboard for managing bookings, users, and services, along with automatic refunds for eligible cancellations.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Razorpay'],
    github: 'https://github.com/Bhavithagolthila/CleanNest',
    demo: '',
    featured: false,
  },
  {
    title: 'Dysarthria Speech Classification',
    subtitle: 'ML-Based Speech Disorder Screening System',
    category: 'Final-Year Project · Machine Learning · Full-Stack',
    label: 'Featured Project',
    description:
      'Built a speech classification system that analyzes uploaded voice recordings and predicts dysarthria-related speech classes using a Random Forest model trained on 18 acoustic features extracted with librosa. Implemented a Mahalanobis-distance-based out-of-distribution detector with covariance shrinkage to identify unusual or unrelated audio instead of forcing the classifier to make a prediction. Added file validation, speaker-independent evaluation to reduce data-leakage risk, secure authentication, and prediction history through a Flask backend.',
    technologies: ['Python', 'Flask', 'Random Forest', 'scikit-learn', 'librosa', 'Mahalanobis Distance', 'SQLite'],
    github: 'https://github.com/Bhavithagolthila/dysarthria-detection',
    demo: '',
    featured: true,
  },
  {
    title: 'MediCare',
    subtitle: 'Doctor Appointment Booking System',
    category: 'Full-Stack Academic Project',
    label: '',
    description:
      'Built a full-stack doctor appointment booking platform where patients can browse doctors, book available time slots, and manage appointments through a simulated payment flow. Implemented JWT authentication with bcrypt password hashing, MongoDB schemas for users and appointments, server-side validation, role-based route protection, and a database-level unique index to prevent double-booking.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/Bhavithagolthila/Doctor-Appointment-Booking-System',
    demo: '',
    featured: false,
  },
  {
    title: 'MindTrack AI',
    subtitle: 'Student Mental Health Score Predictor',
    category: 'Machine Learning · Full-Stack · Deployed',
    label: 'Live Demo',
    description:
      'Built and deployed a full-stack ML application that predicts a student\u2019s self-reported mental health score (0\u201310) from social media usage, lifestyle, sleep, and stress data. Trained a Random Forest Regressor on 4,998 de-duplicated survey records (R\u00b2 0.878, 5-fold CV R\u00b2 0.852) and compared it against Ridge regression and feature-ablation experiments. Served the model through a FastAPI backend with Pydantic validation, out-of-range warnings, and Pytest tests, with an interactive frontend deployed on Vercel and Render.',
    technologies: ['Python', 'scikit-learn', 'Random Forest', 'FastAPI', 'Pydantic', 'Pytest', 'JavaScript'],
    github: 'https://github.com/Bhavithagolthila/MindTrack-AI',
    demo: 'https://mindtrack-ai-web.vercel.app/',
    featured: false,
  },
  {
    title: 'PulseWatch',
    subtitle: 'API Health Monitoring & Reliability Dashboard',
    category: 'Full-Stack Development · Monitoring',
    label: '',
    description:
      'Built a self-hosted API monitoring platform that tracks endpoint health, response time, availability, and incidents in a React dashboard. Implemented concurrent scheduled health checks with APScheduler, HEALTHY/DEGRADED/DOWN classification, SMTP email alerts on status changes, token-based authentication, and SSRF protection for monitored URLs. Backed by 77 backend and 25 frontend tests with a GitHub Actions CI pipeline.',
    technologies: ['React', 'Vite', 'FastAPI', 'SQLAlchemy', 'SQLite', 'APScheduler', 'Recharts', 'GitHub Actions'],
    github: 'https://github.com/Bhavithagolthila/PulseWatch',
    demo: '',
    featured: false,
  },
]

export default projects
