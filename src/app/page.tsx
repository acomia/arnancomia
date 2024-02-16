"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/profile.png"
            alt="profile"
            fill
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Mobile developer specializing in React Native for cross-platform app
            development.
          </h1>
          <p className="md:text-xl">
            {`Welcome to my portfolio, let's create something amazing together.`}
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              onClick={() => router.push("/portfolio")}
            >
              View my work
            </button>
            <button
              className="p-4 rounded-lg ring-1 ring-black"
              onClick={() => router.push("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
