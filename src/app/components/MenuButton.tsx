"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { links } from "@utils/constants";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <button
        className="flex flex-col w-10 h-8 justify-between items-center z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          className="w-10 h-1 bg-black rounded origin-left"
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
        ></motion.div>
        <motion.div
          className="w-10 h-1 bg-black rounded"
          variants={centerVariants}
        ></motion.div>
        <motion.div
          className="w-10 h-1 bg-black rounded origin-left"
          variants={bottomVariants}
          animate={isOpen ? "opened" : "closed"}
        ></motion.div>
      </button>
      {/* Menu List */}
      {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.url}>
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
