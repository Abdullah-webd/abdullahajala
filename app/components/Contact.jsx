"use client"
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from "motion/react";
const Contact = ({isDarkMode}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(null);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          const response = await emailjs.send(
            'service_ytiudzl',
            'template_6zx4boa',
            {
              from_name:formData.name,
              to_name:'Abdullah',
              from_email:formData.email,
              to_email:'webmastersmma@gmail.com',
              message:formData.message,
            },
            'DjdGh7mS8nnEluPDK'
          );
    
          if (response.status === 200) {
            setSuccess("Email sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Reset form
          }
        } catch (error) {
          setSuccess("Failed to send email. Please try again.");
          console.log(error)
        } finally {
          setLoading(false);
          setTimeout(()=>{
            setSuccess("")
          },4000)
        }
      };

  return (
    <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat bg-center dark:bg-none justify-center items-center' style={{ backgroundImage: isDarkMode ? "none" : 'url("/footer-bg-color.png")',backgroundSize:"90%" }}
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo '
          initial={{y:-20,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.5,delay:0.3}}
        >Connect with me</motion.h4>
       <motion.h2 className='text-center text-5xl font-Ovo '
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}}
       >Get in touch</motion.h2>
       <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
       >
       I'd love to hear from you. Whether you have a question, a collaboration opportunity, or just want to say hi, please use the form below to get in touch.
       </motion.p>

       <motion.form onSubmit={(e)=>handleSubmit(e)} className='max-w-2xl mx-auto '
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.9}}
        >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8 mx-auto'>
            <motion.input type="text"  required placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90'
            name='name'
            value={formData.name}
            onChange={(e)=>handleChange(e)}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:1.1}}
            />
            <motion.input type="email" 
            value={formData.email}
            onChange={(e)=>handleChange(e)}
            name='email'
            required placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-dark-hover/30 dark:border-white/90'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:1.1}}
            />
        </div>
        <motion.textarea rows="6"
        value={formData.message}
        name='message'
        onChange={(e)=>handleChange(e)}
        placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-dark-hover/30 dark:border-white/90'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:1.3}}
        ></motion.textarea>
        <motion.button 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        disabled={loading}
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-dark-hover' type='submit'
          
        >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

        <p className='mt-4'>{loading ? "Sending..." : (success ? success : "")}</p>
       </motion.form>
    </motion.div>
  )
}

export default Contact