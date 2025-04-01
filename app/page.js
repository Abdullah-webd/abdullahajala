"use client"

import Image from "next/image";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  const [isDarkMode,setIsDarkMode] = useState(false)


  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
 },[isDarkMode])
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </>
  );
}
