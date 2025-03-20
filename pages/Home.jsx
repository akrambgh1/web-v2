/* eslint-disable no-unused-vars */
import Navbar from "../src/components/Navbar";
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import Accordion from "@/components/accordion";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Pricing from "@/components/Pricing";
import { easeIn, easeInOut, motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Coolshape } from "coolshapes-react";
import { Misc_3 } from "@/components/Shapes";
import { Flower_2 } from "@/components/Shapes";
import { Moon_4 } from "@/components/Shapes";
import ServicesSection from "@/components/Services";
import {
  Palette,
  Laptop,
  Zap,
  ChartNoAxesCombined,
  Lightbulb,
} from "lucide-react";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";

export default function Home() {
  const [Current, SetCurrent] = useState(0);
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVarient, setCursorVariant] = useState("default");
  const [scrollingUp, setScrollingUp] = useState(true);

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

  const scale = useTransform(scrollYProgress, [0.2, 0.5], ["2", "140"]);

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
        className="fixed top-0 left-0 w-12 h-12 bg-black rounded-full pointer-events-none z-50 max-md:w-0 mix-blend-difference"
        variants={variants}
        animate={cursorVarient}
        transition={{ type: "ease" }}
      />

      <section
        data-scroll-container
        ref={containerRef}
        className="flex flex-col relative"
      >
        <section className="flex flex-col max-md:gap-[0rem] relative gap-[15rem]">
          <div className="h-[100vh] w-full relative max-md:h-[100vh]">
            <motion.div
              className="absolute bottom-[2rem] max-md:top-[2rem] h-fit max-md:h-fit px-2"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.img
                initial={{ translateY: "100%" }}
                whileInView={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ amount: 0, once: true }}
                src="/Weblocators.png"
                className="relative"
              />
            </motion.div>

            <motion.div
              className="absolute top-[2rem] max-md:bottom-[1rem] h-fit max-md:h-[85%] w-full flex items-end justify-end p-4"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.p
                initial={{ translateY: "110%" }}
                whileInView={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                viewport={{ amount: 0, once: true }}
                className="text-base sm:text-[1.5rem] font-[500] tracking-tighter w-[40%] max-md:w-full flex gap-4"
              >
                At Weblocators, we create sleek, user-focused websites that
                blend design and performance to help businesses build a strong
                online presence. Our goal is to craft digital experiences that
                captivate, engage, and deliver results
              </motion.p>
            </motion.div>
          </div>

          <section className="w-full h-auto flex items-center justify-center md:hidden p-2 ">
            
          <div className="w-full items-center justify-center flex flex-col p-8 rounded-[15px] relative bg-[#1e1e1e] text-white mb-[4rem] gap-4 overflow-hidden z-10">

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

          {/* {window.innerWidth > 768 ? (
            <HorizontalScrollCarousel />
          ) : (
            <>
              <div className="flex flex-col items-center justify-center gap-[1rem] p-4 md:hidden mt-[5rem] overflow-hidden">
                <motion.div
                  initial={{ translateX: -370 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full h-[11rem] bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col justify-between gap-[12px] p-4 rounded-[5px]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[400] tracking-tighter text-[1.75rem] ">
                      Design Skills
                    </h1>
                  </div>

                  <p className="font-[400] text-[12px] w-[100%] text-[#000]">
                    We create visually stunning and user-friendly designs that
                    captivate visitors while ensuring smooth navigation and
                    accessibility.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ translateX: -370 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full h-[11rem] bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.0),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col justify-between gap-[12px] p-4 rounded-[5px]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[400] tracking-tighter text-[1.75rem] ">
                      Development Expertise
                    </h1>
                  </div>

                  <p className="font-[400] text-[12px] w-[100%] text-[#000]">
                    Our developers build fast, secure, and scalable websites
                    with clean, efficient code for seamless functionality across
                    devices.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ translateX: -370 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full h-[11rem] bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col justify-between gap-[12px] p-4 rounded-[5px]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[400] tracking-tighter text-[1.5rem] ">
                      Performance Optimization
                    </h1>
                  </div>

                  <p className="font-[400] text-[12px] w-[100%] text-[#000]">
                    We ensure lightning-fast load times and smooth performance
                    through code efficiency, image optimization, and responsive
                    design.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ translateX: -370 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full h-[11rem] bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col justify-between gap-[12px] p-4 rounded-[5px]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[400] tracking-tighter text-[1.75rem] ">
                      Seo and Analytics
                    </h1>
                  </div>

                  <p className="font-[400] text-[12px] w-[100%] text-[#000]">
                    Our SEO strategies boost visibility, while data-driven
                    insights help refine performance and maximize audience
                    engagement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ translateX: -370 }}
                  whileInView={{ translateX: 0 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full h-[11rem] bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col justify-between gap-[12px] p-4 rounded-[5px]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="font-[400] tracking-tighter text-[1.75rem]">
                      Adaptability and Innovation
                    </h1>
                  </div>

                  <p className="font-[400] text-[12px] w-[100%] text-[#000]">
                    We stay ahead of trends, integrating new technologies and
                    ensuring your website remains modern, efficient, and
                    future-proof.
                  </p>
                </motion.div>
              </div>
            </>
          )} */}

          <motion.section className="px-4 sm:px-[2.5rem]">
            {/* <h1 className="text-[2rem] tracking-tighter sm:text-[3rem] w-full shrink-0 mb-[3rem] md:mb-[16rem]">
              Why choose us ?
            </h1> */}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-18 sm:gap-x-5">
              <div className="relative sm:col-span-7">
                <div className="sticky top-[40vh] w-full flex flex-col gap-y-5 sm:gap-y-8 ">
                  <p className="text-base sm:text-[1.5rem] h-auto font-[500] tracking-tighter">
                    With weblocators step into a universe where creativity meets
                    professionalism, sprinkled with a dash of cosmic charm.
                    Whether you’re a future collaborator or a valued client,
                    these guiding principles light our way as we journey
                    together
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-2 border-b border-gray-200 sm:col-start-9 sm:col-span-10 list-none">
                <div>
                  {qualities.map((quality, index) => (
                    <motion.div
                      initial={{ opacity: 0, translateY: "20px" }}
                      whileInView={{ opacity: 1, translateY: 0 }}
                      transition={{ ease: easeInOut, duration: 0.5 }}
                      viewport={{ amount: 1 }}
                      key={index}
                      className="py-7 border-t border-gray-200 items-center flex w-full"
                    >
                      <div className="translate-y-0 opacity-100 flex flex-col md:flex-row duration-500 md:justify-between md:items-center w-full">
                        <h1 className="text-[1.5rem] text-gray-800 tracking-[-0.07813rem] sm:text-[2rem] sm:w-80 shrink-0">
                          {quality.title}
                        </h1>
                        <li className="text-xs tracking-tighter text-gray-400 sm:text-[1.5rem] sm:w-[48%]">
                          {quality.description}
                        </li>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <section className="w-[100%] max-md:h-[60vh] h-[100vh] flex items-center justify-center max-md:hidden relative">
            <div className="w-[80%] h-full bg-[#000] absolute overflow-hidden rounded-[20px] p-4">
              <motion.div
                initial={{}}
                style={{ scale }}
                transition={{ ease: "easeIn" }} // Reduced duration for faster scaling
                viewport={{ amount: 0.5 }}
                className="absolute max-md:w-[14rem] max-md:h-[14rem] w-[2rem] h-[2rem] bottom-[0rem] left-1/2 -translate-x-1/2 bg-[#2163f1] rounded-full"
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
            </div>
          </section>

          <ServicesSection></ServicesSection>

          {/* <Pricing></Pricing> */}
          <section className="flex flex-col items-center justify-center gap-[3rem] max-md:p-4 mt-[3rem]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[4rem] tracking-tighter max-md:text-[2rem] max-md:text-center font-[600] max-md:leading-10 ">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-400 max-md:text-center">
                Here are some answers for some questions that are frequently
                asked by you
              </p>
            </div>

            <div className="flex flex-col gap-[1rem] w-[60%] max-md:w-full">
              <Accordion
                title="What services does your agency offer?"
                text="We offer a full range of web development services, including custom website design, front-end and back-end development, e-commerce solutions, SEO optimization, website maintenance, and hosting support. We also specialize in integrating third-party tools, APIs, and security solutions."
              />
              <Accordion
                title="Do you specialize in any type of website"
                text="While we have experience working with all types of websites, Our team understands the specific needs of websites and ensures that your websites align with best practices and user expectations."
              />
              <Accordion
                title="Can you show examples of websites you've built?"
                text="Absolutely! You can check out our portfolio to see some of the projects we've worked on. We can also provide case studies that highlight how we've helped businesses achieve their online goals.

"
              />
              <Accordion
                title="What makes your agency different from others?"
                text="We prioritize custom solutions tailored to each client’s needs rather than a one-size-fits-all approach. Our team ensures scalability, performance, and SEO best practices while maintaining open communication throughout the project. Plus, we provide post-launch support to keep your website running smoothly."
              />
            </div>
          </section>
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
