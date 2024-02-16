"use client";
import { motion, useInView, useScroll } from "framer-motion";

import Signature from "@components/Signature";
import ScrollButton from "@components/ScrollButton";
import Skills from "@components/Skills";
import LeftExperienceListItem from "@components/LeftExperienceListItem";
import RightExperienceListItem from "@components/RightExperienceListItem";
import { experience } from "@/utils/constants";
import Brain from "@components/Brain";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Main container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* About */}
            <p className="text-lg">
              Experienced React Native Developer | Mobile App Enthusiast |
              Problem Solver Passionate React Native developer with a proven
              track record of creating high-quality, user-friendly mobile
              applications. Skilled in translating complex requirements into
              efficient and elegant code. Committed to staying updated with the
              latest trends and technologies in the mobile development
              landscape. A problem solver at heart, I thrive in challenging
              environments and excel in collaborating with cross-functional
              teams to deliver exceptional results.
            </p>
            {/* Quote */}
            <span className="italic">
              Building things that people love to use is my ultimate goal.
            </span>
            <Signature />
            <ScrollButton />
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* Skill List */}
            <Skills isSkillRefInView={isSkillRefInView} />
            <ScrollButton />
          </div>
          {/* Experience Container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* Experience List Container */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* Experience List Item Container */}
              {experience.map((exp, index) =>
                index % 2 === 0 ? (
                  <LeftExperienceListItem key={index} data={exp} />
                ) : (
                  <RightExperienceListItem key={index} data={exp} />
                )
              )}
            </motion.div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
