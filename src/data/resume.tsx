import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anuj Katre",
  initials: "AK",
  url: "https://anujkatre.dev",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description: (
      "23, Product/dev."
  ),
  summary:
    "I don’t write code, I weaponize it. 23, restless, and allergic to mediocrity. If it doesn’t push limits, I’m not building it.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express.js",
    "Python",
    "PostgresSQL",
    "Supabase",
    "Docker",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anujkatre72@gmail.com",
    tel: "+91-8827857817",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anujkatre111",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anuj-katre-b01376382/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/anuj_katre88605",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@Anujkatre08",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Upwork",
      href: "https://techcorp.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/upWork.png",
      start: "June 2023",
      end: "Present",
      description:
        "Developed and maintained multiple web applications using React, Node.js, and PostgreSQL. Implemented RESTful APIs and microservices architecture. Collaborated with cross-functional teams to deliver high-quality software solutions. Optimized application performance and improved user experience.",
    },
    {
      company: "Buildnow",
      badges: [],
      href: "https://buildnow.ai/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/buildnow.png",
      start: "January 2023",
      end: "May 2023",
      description:
        "Built responsive user interfaces using React and TypeScript. Implemented state management with Redux and integrated with backend APIs. Worked on improving application accessibility and performance. Collaborated with designers to implement pixel-perfect designs.",
    },
    {
      company: "Yash Technologies",
      href: "https://digitalinnovations.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Software Engineer Intern",
      logoUrl: "/yashTech.png",
      start: "May 2022",
      end: "August 2022",
      description:
        "Developed a customer management system using React and Node.js. Implemented authentication and authorization features. Created RESTful APIs and integrated with MongoDB database. Participated in code reviews and agile development processes.",
    },
  ],
  education: [
    {
      school: "Medicaps University - CGPA : 9.1",
      href: "https://www.medicaps.ac.in/",
      degree: "Bachelor's Degree in Computer Science and Business Systems",
      logoUrl: "/Medicaps.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "St.Pauls Higher Secondary School",
      href: "https://www.stpaulindore.com/",
      degree: "Higher Secondary School",
      logoUrl: "/St.Pauls.png",
      start: "2019",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      href: "https://github.com/anujkatre/ecommerce-platform",
      dates: "Dec 2023 - Jan 2024",
      active: true,
      description:
        "Built a full-stack e-commerce platform with user authentication, product management, shopping cart functionality, and payment integration using Stripe. Features include responsive design, real-time inventory tracking, and admin dashboard.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anujkatre/ecommerce-platform",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://ecommerce-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Task Management App",
      href: "https://github.com/anujkatre/task-manager",
      dates: "Oct 2023 - Nov 2023",
      active: true,
      description:
        "Developed a task management web app using React and TailwindCSS with Supabase as the backend. Implemented user authentication, real-time database updates, and role-based task assignments. Features include team collaboration, drag-and-drop task organization, and progress tracking.",
      technologies: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anujkatre/task-manager",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://task-manager-dpj4.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Weather Dashboard",
      href: "https://github.com/anujkatre/weather-dashboard",
      dates: "Aug 2023 - Sep 2023",
      active: true,
      description:
        "Created a weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include location-based weather, 7-day forecast, and weather alerts. Integrated with OpenWeatherMap API.",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeatherMap API",
        "Chart.js",
        "CSS3",
        "Vite",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anujkatre/weather-dashboard",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://weather-dashboard-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio Website",
      href: "https://github.com/anujkatre/portfolio",
      dates: "Jun 2023 - Jul 2023",
      active: true,
      description:
        "Designed and developed a personal portfolio website showcasing projects, skills, and experience. Features include dark/light mode, responsive design, and smooth animations.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "Vercel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anujkatre/portfolio",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://anujkatre.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackMIT 2023",
      dates: "October 14th - 15th, 2023",
      location: "Cambridge, Massachusetts",
      description:
        "Developed an AI-powered study assistant that helps students create personalized study schedules and track their learning progress using machine learning algorithms.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anujkatre/study-assistant",
        },
      ],
    },
    {
      title: "Hack The Valley",
      dates: "March 15th - 17th, 2023",
      location: "Toronto, Ontario",
      description:
        "Built a sustainable living app that helps users track their carbon footprint and suggests eco-friendly alternatives for daily activities.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anujkatre/eco-tracker",
        },
      ],
    },
    {
      title: "CodeFest 2023",
      dates: "January 28th - 29th, 2023",
      location: "Mumbai, India",
      description:
        "Created a mental health chatbot that provides emotional support and connects users with professional help when needed.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anujkatre/mental-health-bot",
        },
      ],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "November 15th - 16th, 2022",
      location: "San Francisco, California",
      description:
        "Built a smart home automation system that uses IoT devices and machine learning to optimize energy consumption and improve home security.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anujkatre/smart-home-automation",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "October 22nd - 23rd, 2022",
      location: "Davis, California",
      description:
        "Created a mobile application that helps students find study groups and share resources based on their courses and schedules.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Educational Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/anujkatre/study-buddy-app",
        },
      ],
    },
  ],
} as const;
