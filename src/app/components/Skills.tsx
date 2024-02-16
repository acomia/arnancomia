import { motion } from "framer-motion";
import { skills } from "@/utils/constants";

interface IProps {
  isSkillRefInView: boolean;
}

export default function Skills({ isSkillRefInView }: IProps) {
  return (
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="flex gap-4 flex-wrap"
    >
      {skills.map((skill) => (
        <div
          key={skill.key}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          {skill.title}
        </div>
      ))}
    </motion.div>
  );
}
