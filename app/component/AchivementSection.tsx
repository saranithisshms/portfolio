"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
//   {
//     metric: "Awards",
//     value: "7",
//   },
  {
    metric: "Years",
    value: "4",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
                {achievement.prefix}
                </span>
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
                {achievement.postfix}
                </span>
              </h2>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
               {achievement.metric}
               </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;