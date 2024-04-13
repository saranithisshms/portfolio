"use client";

import React, { useState, useEffect } from "react";
import MainSection from "./component/MainSection";
import Navbar from "./component/Navbar";
import AchievementsSection from "./component/AchivementSection";
import AboutSection from "./component/About";
import ProjectsSection from "./component/ProjectSection";
import Footer from "./component/Footer";
import EmailSection from "./component/EmailSection";
import SkeletonLoading from "./component/Skeleton";
import Head from 'next/head'
 

const index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (

    <>
     
      {loading ? (
        // Display the splash screen while loading
        <div className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
           <SkeletonLoading />
           </div>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <MainSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default index;
