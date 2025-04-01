"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const Header = ({isDarkMode}) => {
  const [text] = useTypewriter({
    words: [
      "I am Frontend developer from Lagos, Nigeria with 1 + years of experience in building scalable and efficient web applications.",
      "I specialize in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS",
    ],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
          initial={{scale: 0}}
          whileInView={{scale:1}}
          transition={{duration:0.8,type: "spring", stiffness:100}}
          className='mt-16'
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>
        <motion.h3 className='flex items-end gap-2 text-xl md-text-2xl md:text-2xl mb-3 font-Ovo'
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:0.3}}
        >
            Hi! I'm Abdullah Ajala <Image src={assets.hand_icon} alt=''/>
        </motion.h3>
        <motion.h1 className='text-2xl sm:text-6xl lg:text-[66px] font-Ovo'
          initial={{y:-30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.8,delay:0.5}}
        >
          I am a Frontend Developer Based in Nigeria.
          
        </motion.h1>
          <motion.p className='max-w-2xl mx-auto font-Ovo'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.7}}
          >
            I am Frontend developer from Lagos, Nigeria with 1 + years of experience in building scalable and efficient web applications.
           
          </motion.p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
              initial={{y:30,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.6,delay:1}}
            >Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a href="/abdullah-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black'
              initial={{y:30,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.6,delay:1.2}}
            >
              My resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>
          </div>
    </div>
  )
}

export default Header