// index.js
export const servicesData = [
  {
    title: "UI/UX Design",
    description:
      "I design intuitive and user-friendly interfaces that make apps and websites easy to use. I focus on clear user flows and attractive designs to provide a smooth experience.",
    items: [
      {
        title: "User Research & Testing",
        description: "(Personas, Surveys, Usability Testing)",
      },
      {
        title: "Wireframing & Prototyping",
        description: "(Figma, Interactive Prototypes)",
      },
      {
        title: "Visual Design",
        description: "(Layout, Colors, Typography, Microinteractions)",
      },
    ],
  },
  {
    title: "Fullstack Web Development",
    description:
      "I build functional and responsive web apps using the MERN stack. My focus is on clean, maintainable code and smooth interactions.",
    items: [
      {
        title: "Backend Development",
        description: "(Node.js, Express, REST APIs, Firebase Auth)",
      },
      {
        title: "Frontend Development",
        description: "(React, Responsive UI, Interactive Components)",
      },
      {
        title: "Database Management",
        description: "(MongoDB, Firebase, Data Structuring, Queries)",
      },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "I create cross-platform apps with Flutter and Firebase, focusing on responsive design and essential features for iOS and Android users.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS and Android)",
      },
      {
        title: "App Features",
        description: "(Authentication, Push Notifications, Simple UI)",
      },
      {
        title: "Integration with Databases",
        description: "(Firebase Firestore, Realtime Data)",
      },
    ],
  },
  {
    title: "WordPress Websites",
    description:
      "I can create and customize WordPress websites, set up themes, plugins, and basic SEO to make your site functional and presentable.",
    items: [
      {
        title: "Theme & Plugin Customization",
        description: "(PHP, Elementor, JavaScript)",
      },
      {
        title: "Website Setup & Maintenance",
        description: "(Updates, Backups, Security Basics)",
      },
      {
        title: "Basic SEO & Performance",
        description: "(Site Speed, Meta Tags, Simple Optimization)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Baron Luxury Boutique Hotel UI/UX",
    description:
      "A complete website UI and interactive prototype designed for Overland Automobiles. Focused on modern design principles, responsive layouts, and seamless user journeys to enhance the brand’s digital presence.",
    href: "https://drive.google.com/drive/folders/10O9zpU6f4F0uR6YcdpQgQeu0tro-fHrr?usp=sharing",
    image: "/assets/projects/bhot.png", 
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
       { id: 1, name: "Figma" },
       { id: 2, name: "UI/UX Design" },
       { id: 3, name: "Prototyping" },
    ],
  },
  {
    id: 2,
    name: "Alpha Eye IT Solutions UI/UX",
    description:
      "Crafted an elegant and user-friendly website UI and prototype for Baron Luxury Boutique Hotel. Focused on showcasing the hotel’s luxury experience through high-quality visuals, intuitive booking flows, and responsive layouts for seamless guest engagement.",
    href: "https://drive.google.com/drive/folders/15brr8D0ogfXyJM6_-ncWTukBQjF1HdTz?usp=sharing",
    image: "/assets/projects/eleye.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Figma" },
      { id: 2, name: "UI/UX Design" },
      { id: 3, name: "Prototyping" },
    ],
  },
  {
    id: 3,
    name: "Overland Automobiles UI/UX",
    description:
      "Designed a modern and professional website UI and prototype for Alpha Eye IT Solutions. The project emphasized clean layouts, intuitive navigation, and a tech-focused brand identity to build trust and showcase services effectively.",
    href: "https://overlandautomobiles.lk",
    image: "/assets/projects/ovland.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Figma" },
      { id: 2, name: "UI/UX Design" },
      { id: 3, name: "Prototyping" },
    ],
  },
  {
      id: 4,
      name: "Interview Preparation AI",
      description:
        "A full-stack MERN project that helps users prepare for interviews with AI-generated questions and answers using the Gemini API. It features secure authentication, session management, and interactive Q&A functionality with a clean, modern UI for an engaging user experience.",
      href: "https://interview-preparation-web-ai-1nj3.vercel.app/",
      image: "/assets/projects/interviewAi.png",
      bgImage: "/assets/backgrounds/poster.jpg",
      frameworks: [
        { id: 1, name: "MongoDB" },
        { id: 2, name: "Express.js" },
        { id: 3, name: "React" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Gemini API" },
      ],
  },
  {
    id: 5,
    name: "Resume Builder",
    description:
      "A web application that allows users to create, customize, and download professional resumes. Developed using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for styling. Includes features such as live preview, multiple templates, and secure data storage.",
    href: "https://resume-builder-website-gicq.vercel.app/",
    image: "/assets/projects/Resume Builder.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Express" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "MongoDB" },
    ],
  },
  {
    id: 6,
    name: "Flutter E-commerce App",
    description:
      "Designed and developed a modern e-commerce mobile application using Flutter. Created the initial UI/UX design in Figma and implemented the Flutter UI for seamless cross-platform performance. The app features product browsing, cart management, and a clean, responsive interface.",
    href: "",
    image: "/assets/projects/flutter.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Figma" },
      { id: 2, name: "UI/UX Design" },
      { id: 3, name: "Flutter" },
      { id: 4, name: "Dart" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/_.vimukthi._?igsh=MWE2bms3OWI3MWh4cA==" },
  {
    name: "Youtube",
    href: "",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sahan-galaboda-040943306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { name: "GitHub", href: "https://github.com/vimukthi7777" },
];
