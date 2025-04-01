"use client";

import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

const Work = ({ isDarkMode }) => {
  const [visibleProjects, setVisibleProjects] = useState(4); // Show 8 initially

  const handleShowMore = () => {
    // Increase the number of visible projects by 4
    setVisibleProjects(visibleProjects + 4);
  };

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collectionjn of
        projects showcasing my skills and experience in building responsive,
        user-friendly, and visually appealing websites.
      </motion.p>

      <motion.div
        className="grid grid-cols-auto my-10 gap-5 dark:text-black min-lg:grid-cols-4 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.slice(0,visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group  border-[5px] border-gray-300 overflow-hidden dark:border-none"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Opacity Layer Over Image */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

            {/* Content Box */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
              </div>
              <a target="_blank" href={project.livelink} className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="" className="w-5" />
              </a>
              <a target="_blank"  href={project.githublink}  className="border rounded-full bg-black border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ml-2">
                <Image src={assets.github} alt="" className="w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visibleProjects < workData.length && (
        <motion.button
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          onClick={() => handleShowMore()}
        >
          Show more{" "}
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="right arrow"
            className="w-4"
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Work;
