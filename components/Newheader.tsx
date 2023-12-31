import React from "react";
import { motion } from "framer-motion";
import ImageSVG from "../public/svg/img";

const Header = () => {
  return (

    <section className="mt-6">
      <div className="flex flex-row gap-8">
        <div className="relative">
          <ImageSVG />
        </div>
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-6xl font-bold text-purple-800">
            Canvas Application
          </h1>
          <motion.h2
            animate={{ opacity: 1, transition: { duration: 2, delay: 4 } }}
            className="text-3xl font-semibold opacity-0"
          >
            Reimagine images with text prompots
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
