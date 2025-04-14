/* eslint-disable no-unused-vars */
import Navbar from "../src/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";
import Footer from "@/components/Footer";
import { easeInOut, motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useNavigate } from "react-router-dom";
import ServicesSection from "@/components/Services";
import FAQ from "@/components/FAQ";

import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [Current, SetCurrent] = useState(0);
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVariant] = useState("default");
  const [scrollingUp, setScrollingUp] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.02,
      lenisOptions: 0.001,
      class: "is-reveal",
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const scale = useTransform(scrollYProgress, [0.3, 0.7], ["1", "270"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => setCursorVariant("hover");
  const handleMouseLeave = () => setCursorVariant("default");

  const variants = {
    hover: {
      scale: 1.5,
      backgroundColor: "#e91aa3",
      x: position.x,
      y: position.y,
    },
    default: {
      x: position.x - 12,
      y: position.y - 12,
      scale: 1,
      backgroundColor: "#fff",
    },
    textHover: {
      height: "3rem",
      width: "4px",
      backgroundColor: "#7db8f2",
      x: position.x - 5,
      y: position.y - 5,
    },
  };

  const prev = () =>
    SetCurrent((Current) => (Current === 0 ? slides.length - 1 : Current - 1));
  const next = () =>
    SetCurrent((Current) => (Current === slides.length - 1 ? 0 : Current + 1));

  const slides = ["SafeGuard Horizon"];

  const qualities = [
    {
      title: "Creativity",
      description: "Craft unique, visually appealing designs.",
    },
    {
      title: "Technical Expertise",
      description: "Master modern web technologies and frameworks.",
    },
    {
      title: "User-Centered Approach",
      description: "Focus on intuitive, user-friendly experiences.",
    },
    {
      title: "Project Management",
      description: "Deliver projects on time with clear communication.",
    },
    {
      title: "Attention to Detail",
      description: "Ensure pixel-perfect design and clean code.",
    },
    {
      title: "Adaptability",
      description: "Stay ahead of trends and adapt to new technologies.",
    },
    {
      title: "Collaboration",
      description: "Work closely with clients to understand their vision.",
    },
  ];

  //

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 bg-[#1e1e1e] rounded-full pointer-events-none z-50 max-md:hidden mix-blend-difference"
        variants={variants}
        animate={cursorVarient}
        transition={{ type: "ease" }}
      />

      <section
        data-scroll-container
        ref={containerRef}
        className="flex flex-col relative bg-white"
      >
        <motion.div
          initial={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", // full height
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0)", // top edge only
          }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
            delay: 0.5,
          }}
          className="fixed top-0 left-0 w-screen h-screen bg-blue-600 z-[90] flex items-center justify-center overflow-hidden"
        >
          <h1 className="text-white text-[7rem] tracking-tighter">Weblocators</h1>
        </motion.div>

        <section className="flex flex-col max-md:gap-[0rem] relative gap-[2rem] z-49">
          <Navbar></Navbar>

          <LandingPage></LandingPage>

          <WhyChooseUs></WhyChooseUs>

          <section className="w-full h-auto flex items-center justify-center md:hidden p-2 mt-[5rem]">
            <div className="w-full items-center justify-center flex flex-col p-8 rounded-[7px] relative bg-[#1e1e1e] text-white mb-[4rem] gap-4 overflow-hidden z-10">
              <div className="w-[13rem] h-[13rem] absolute top-[-55%] left-[-5%] bg-[#2163f1] blur-[4rem] opacity-200 z-[-1]"></div>

              <p className="text-[1.25rem] font-[400] tracking-tighter w-full flex gap-4">
                Crafting high-performing websites that drive success for you
              </p>
              <p className="text-[.75rem]">
                Let’s not create just for the sake of it. Let’s craft something
                that’s as meaningful as it is memorable. At Studio by Miyagami,
                we don’t just design; we build legacies—bold and unforgettable.
              </p>
            </div>
          </section>

          <section className="w-[100%] max-md:h-[60vh] h-[100vh] flex items-center justify-center max-md:hidden relative mt-[10rem]">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ amount: 0.3 }}
              className="w-[80%] max-xl:w-[95%] h-full bg-[#1e1e1e] absolute overflow-hidden rounded-[20px] p-4"
            >
              <motion.div
                initial={{}}
                style={{ scale }}
                transition={{ ease: "easeInOut" }} // Reduced duration for faster scaling
                viewport={{ amount: 1 }}
                className="absolute max-md:w-[12rem] max-md:h-[12rem] w-[2rem] h-[2rem] bottom-[0rem] left-1/2 -translate-x-1/2 bg-[#2163f1] rounded-full"
              ></motion.div>

              <motion.h1
                onMouseEnter={() => {
                  setCursorVariant("textHover");
                }}
                onMouseLeave={handleMouseLeave}
                className="font-[500] text-[3rem] max-md:w-[90%] max-md:text-[1.5rem] text-[#fff] w-[60%] tracking-tighter max-xl:text-[2rem] absolute top-[10%] left-[5%]"
                initial={{ opacity: 0, translateY: 25 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ amount: 0.9 }}
                transition={{ ease: easeInOut, duration: 0.5 }}
              >
                Crafting high-performing websites that drive success whenever
                and however you need them.
              </motion.h1>

              <p className="absolute bottom-[10%] right-[5%] w-[40%] font-[500] text-[#fff] text-[1.25rem] max-md:text-[.75rem] max-md:w-[90%]">
                Let’s not create just for the sake of it. Let’s craft something
                that’s as meaningful as it is memorable. At Studio by Miyagami,
                we don’t just design; we build legacies—bold and unforgettable.
              </p>
            </motion.div>
          </section>

          <ServicesSection></ServicesSection>

          <FAQ></FAQ>

          <section
            className="relative h-[70dvh] max-md:h-[100vh] mt-[5rem]"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <Footer></Footer>
          </section>
        </section>
      </section>
    </>
  );
}
