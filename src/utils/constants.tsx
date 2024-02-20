import { StaticImageData } from "next/image";

import agoraLogin from "@assets/images/projects/agora_login.png";
import agoraDashboard from "@assets/images/projects/agora_dashboard.png";
import agoraMap from "@assets/images/projects/agora_map.png";
import agoraSearch from "@assets/images/projects/agora_search.png";

export interface ILinks {
  url: string;
  title: string;
}

export interface ISkills {
  key: string;
  title: string;
}

export interface IExperience {
  title: string;
  description: string;
  employementDate: string;
  companyName: string;
}

export interface IProjects {
  id: number;
  color: string;
  title: string;
  description: string;
  images: Array<StaticImageData | string>;
}

export const links: ILinks[] = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const skills: ISkills[] = [
  { key: "S1", title: "JavaScript" },
  { key: "S2", title: "React" },
  { key: "S3", title: "React Native" },
  { key: "S4", title: "TypeScript" },
  { key: "S5", title: "Ionic" },
  { key: "S6", title: "NodeJs" },
  { key: "S7", title: "NextJs" },
  { key: "S8", title: "Git" },
];

export const experience: IExperience[] = [
  {
    title: "Senior React Native Developer",
    description: "Develop and maintain mobile applications using React Native.",
    employementDate: "Feb. 2024 - Present",
    companyName: "Zigzag Careers",
  },
  {
    title: "Senior React Native Developer",
    description: "Develop and maintain mobile applications using React Native.",
    employementDate: "Mar. 2022 - Dec. 2023",
    companyName: "i-Cube Digital Solutions",
  },
  {
    title: "React Native Developer",
    description: "Develop and maintain mobile applications using React Native.",
    employementDate: "May. 2021 - Mar. 2022",
    companyName: "Serino Systems",
  },
  {
    title: "Senior Software Engineer",
    description: "Develop and maintain mobile applications using React Native.",
    employementDate: "Sep. 2014 - May. 2021",
    companyName: "Intellicare",
  },
];

export const projects: IProjects[] = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Health Manage App",
    description:
      "The App is designed to provide a personalized, holistic, and interactive experience to avail your healthcare services and benefits.With just a few taps, you can access your account profile, search for accredited providers, consult with a doctor, and secure online forms for consultation and diagnostic procedures for convenience.",
    images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Parent App",
    description:
      "This School Management System (SMS) is the platform for Parents / Guardians to receive regular updates with important information, notices and announcements.",
    images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vessel Management App",
    description:
      "VMA allows you to manage your entire fleet of vessels using a single platform. The mobile app allows you to: Tracks vessel, Manage Plan & Cargo, Keep track of your invoices, manage and plan maintenance tasks, view certificate and enter reservoir measurements.",
    images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
  },
];
