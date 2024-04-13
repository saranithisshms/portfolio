import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const SkeletonLoading = () => {
  return (
    
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* Skeleton loading effect */}
            <span className="animate-pulse block w-32 h-4 bg-gray-500 rounded-full mx-auto mb-2"></span>
            <span className="animate-pulse block w-64 h-4 bg-gray-500 rounded-full mx-auto mb-2"></span>
            <span className="animate-pulse block w-48 h-4 bg-gray-500 rounded-full mx-auto mb-2"></span>
          </p>
          <div>
            {/* Skeleton loading effect */}
            <button className="animate-pulse px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-sky-400 to-blue-600 text-white">
              Loading...
            </button>
            {/* Skeleton loading effect */}
            <button className="animate-pulse px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Loading...
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {/* Image placeholder */}
            <span className="animate-pulse absolute inset-0 bg-gray-500 rounded-full"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkeletonLoading;
