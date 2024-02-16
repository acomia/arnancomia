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
  image: string;
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
    title: "React Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    image:
      "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    image:
      "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    image:
      "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    image:
      "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
