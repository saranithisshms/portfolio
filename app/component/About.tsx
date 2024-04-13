"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const items = [
  "React Native",
  "Flutter",
  "Next js",
  "React js",
  "Angular js",
  "Typescript",
  "Node js",
  "Vue js",
  "MongoDB",
  "Tailwind",
  "CSS",
  "Bootstrap",
  "Firebase",
  "Sqlite",
];

const WorkingWith = [

     {
       id:'1',
       companyName:'Karunakara & Brothers Web Solutions Pvt Ltd',
       year:'11/2018 - 11/2019',

     },

     {
      id:'2',
      companyName:'Globiz Solution Pvt Ltd',
      year:'09/2019 - 10/2021',

    },

    {
      id:'3',
      companyName:'Sporfy Pvt Ltd',
      year:'11/2021 - 10/2023',

    }

]
  
const Education = [

  "B.E Mechanical Engineering  Ambal Professional Group of Institutions - 2017"

]





const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <button
          key={index}
          className="bg-gradient-to-r from-sky-400 to-blue-600 text-white font-medium py-2.5 px-5 rounded-full"
        >
          {item}
        </button>
      ))}
    </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>
          B.E Mechanical Engineering - Ambal Professional Group of Institutions
        </li> */}
        {Education.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-2"
        >
          {item}
        </motion.li>
      ))}
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
      {WorkingWith.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="mb-2"
        >
          {item.companyName} - {item.year}
        </motion.li>
      ))}
    </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const { ref, inView } = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/computer.jpeg"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <motion.p
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }} className="text-base lg:text-lg">
            I am a full stack Mobile & web developer with a passion for creating
            interactive and responsive web applications. and also Mobile
            applications I have experience working with JavaScript, React.js,
            Redux, Node.js,Next.js,React Native,Flutter, MongoDB,Tailwind CSS,Bootstrap
            , HTML, CSS, and Git. I am a quick learner and I am always looking
            to expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </motion.p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
