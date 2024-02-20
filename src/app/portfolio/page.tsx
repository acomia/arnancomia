"use client";
import SwiperSlides from "@components/SwiperSlides";
// import { projects } from "@utils/constants";
import { motion, useScroll, useTransform } from "framer-motion";

import agoraLogin from "@assets/images/projects/agora_login.png";
import agoraDashboard from "@assets/images/projects/agora_dashboard.png";
import agoraMap from "@assets/images/projects/agora_map.png";
import agoraSearch from "@assets/images/projects/agora_search.png";
import doctorsLogin from "@assets/images/projects/doctors_login.png";
import doctorsDashboard from "@assets/images/projects/doctors_dashboard.png";
import doctorsRcs from "@assets/images/projects/doctors_rcs.png";
import doctorsProfile from "@assets/images/projects/doctors_profile.png";
import oneDashboard from "@assets/images/projects/one_lsgh_dashboard.png";
import oneSubject from "@assets/images/projects/one_lsgh_subject.png";
import oneSubject2 from "@assets/images/projects/one_lsgh_subject2.png";
import oneProgress from "@assets/images/projects/one_lsgh_progress.png";
import vmaMap from "@assets/images/projects/vma_map.png";
import vmaPlan from "@assets/images/projects/vma_plan.png";
import vmaReservoir from "@assets/images/projects/vma_reservoir.png";
import vmaCharter from "@assets/images/projects/vma_charter.png";

import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    color: "from-green-300 to-blue-300",
    title: "Health Management App",
    description:
      "The App is designed to provide a personalized, holistic, and interactive experience to avail your healthcare services and benefits.With just a few taps, you can access your account profile, search for accredited providers, consult with a doctor, and secure online forms for consultation and diagnostic procedures for convenience.",
    images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
    techStack: [
      "React Native",
      "React Navigation",
      "ContextAPI",
      "react-native-maps",
      "GitLab",
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Doctors App",
    description:
      "The App is designed to provide a personalized, holistic, and interactive experience to avail your healthcare services and benefits.With just a few taps, you can access your account profile, search for accredited providers, consult with a doctor, and secure online forms for consultation and diagnostic procedures for convenience.",
    images: [doctorsLogin, doctorsDashboard, doctorsRcs, doctorsProfile],
    techStack: ["React Native", "React Navigation", "ContextAPI", "GitLab"],
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Parent App",
    description:
      "This School Management System (SMS) is the platform for Parents / Guardians to receive regular updates with important information, notices and announcements.",
    images: [oneDashboard, oneSubject, oneSubject2, oneProgress],
    techStack: ["React Native", "React Navigation", "Redux", "GitLab"],
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Vessel Management App",
    description:
      "VMA allows you to manage your entire fleet of vessels using a single platform. The mobile app allows you to: Tracks vessel, Manage Plan & Cargo, Keep track of your invoices, manage and plan maintenance tasks, view certificate and enter reservoir measurements.",
    images: [vmaMap, vmaPlan, vmaReservoir, vmaCharter],
    techStack: [
      "React Native",
      "React Navigation",
      "Zustand",
      "TypeScript",
      "react-native-maps",
      "Sentry",
      "Jira",
      "Bitbucket",
      "App Center",
    ],
  },
  // {
  //   id: 5,
  //   color: "from-red-300 to-green-300",
  //   title: "Spotify Music App",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   images: [agoraLogin, agoraDashboard, agoraMap, agoraSearch],
  // },
];

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-green-300" />
            {projects.map((project) => (
              <div
                key={project.id}
                className={`h-screen w-screen py-10 gap-8 flex justify-center bg-gradient-to-r ${project.color}`}
              >
                <SwiperSlides images={project.images} />
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                    {project.title}
                  </h1>
                  <p className="w-80  md:w96 lg:w-[400px] lg:text-lg xl:w-[600px]">
                    {project.description}
                  </p>
                  <div className="border border-gray-200" />
                  <h1 className="text-lg font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                    Tech Stack
                  </h1>
                  <div className="flex w-96 gap-4 flex-wrap">
                    {project.techStack?.map((tech, index) => (
                      <div
                        key={index}
                        className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center md:mt-10">
        <h1 className="text-6xl">Do you have an opening?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web & Mobile Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
