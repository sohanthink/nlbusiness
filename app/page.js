"use client";

import Banner from "@/components/Home/Banner";
import BannerCard from "@/components/Home/BannerCard";
import Built from "@/components/Home/Built";
import HomeVideo from "@/components/Home/HomeVideo";
import Solution from "@/components/Home/Solution";
import Team from "@/components/Team";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Why from "@/components/Home/Why";
import Count from "@/components/Home/Count";
import Testimonial from "@/components/Home/Testimonial";
import Subscribe from "@/components/common/Subscribe";

const page = () => {
  const bannerCardRef = useRef(null);
  const builtRef = useRef(null);
  const solutionRef = useRef(null);
  const homeVideoRef = useRef(null);
  const teamRef = useRef(null);

  const isBannerCardInView = useInView(bannerCardRef, {
    once: true,
    margin: "-50px",
  });
  const isBuiltInView = useInView(builtRef, { once: true, margin: "-50px" });
  const isSolutionInView = useInView(solutionRef, {
    once: true,
    margin: "-50px",
  });
  const isHomeVideoInView = useInView(homeVideoRef, {
    once: true,
    margin: "-50px",
  });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-50px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Banner />

      <motion.div
        ref={bannerCardRef}
        initial="hidden"
        animate={isBannerCardInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BannerCard />
      </motion.div>

      <motion.div
        ref={builtRef}
        initial="hidden"
        animate={isBuiltInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Built />
      </motion.div>

      <motion.div
        ref={solutionRef}
        initial="hidden"
        animate={isSolutionInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Solution />
      </motion.div>

      <motion.div
        ref={homeVideoRef}
        initial="hidden"
        animate={isHomeVideoInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HomeVideo />
      </motion.div>

      <motion.div
        ref={teamRef}
        initial="hidden"
        animate={isTeamInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Team />
      </motion.div>
      <Why />
      <Count />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default page;
