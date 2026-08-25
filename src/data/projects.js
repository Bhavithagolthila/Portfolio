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
    github: '',
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
    github: '',
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
    github: '',
    demo: '',
    featured: false,
  },
  {
    title: 'Early Detection of Autism Spectrum Disorder',
    subtitle: 'Web-Based Screening Application',
    category: 'Full-Stack Academic Project',
    label: '',
    description:
      'Built a full-stack web application that allows parents to complete a structured behavioral questionnaire and receive a screening score with general recommendations. Implemented secure authentication using express-session and bcrypt, a SQLite database with four relational tables, and JavaScript fetch() APIs for dynamically displaying results. Improved application security by resolving authentication issues such as case-sensitive email matching and unprotected routes.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'SQLite', 'HTML', 'CSS', 'bcrypt'],
    github: '',
    demo: '',
    featured: false,
  },
  {
    title: 'Retail Sales & Profit Analysis Dashboard',
    subtitle: 'SQL + Power BI',
    category: 'Data Analytics · SQL · Power BI',
    label: 'Data Analytics',
    description:
      'Analyzed approximately 10,000 retail transactions using MySQL to identify sales and profit patterns across regions, categories, and customer segments. Found that Technology generated the highest profit while Tables, Bookcases, and Supplies showed consistent losses. Built an interactive two-page Power BI dashboard with KPI cards, slicers, and DAX measures to explore business performance.',
    technologies: ['MySQL', 'SQL', 'Power BI', 'DAX'],
    github: '',
    demo: '',
    featured: false,
  },
]

export default projects
