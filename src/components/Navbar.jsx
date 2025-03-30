/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { easeIn, motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [secondLayerExpanded, setSecondLayerExpanded] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const scrollRef = useRef(null);

  const handleMenuClick = () => {
    if (!isActive) {
      setIsActive(true);
      setTimeout(() => setSecondLayerExpanded(true), 200);
    } else {
      setSecondLayerExpanded(false);
      setTimeout(() => setIsActive(false), 200);
    }
  };

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

  return (
    <>
      {/* Blur Background */}
      <section
        className={`fixed z-[48] h-full inset-0 bg-black/40 backdrop-blur-[20px] transition-all duration-500 ${
          isActive ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsActive(false)}
      ></section>

      {/* Menu Button */}
      <div
        className={`flex w-[70%] max-md:w-[90%] p-1 duration-800 max-md:px-4 bg-[#1e1e1e] self-center items-center rounded-[30px] justify-between gap-3 cursor-pointer fixed px-8 top-[3%] z-45 select-none ${
          !scrollingUp ? "translate-y-[-200%]" : "" 
        } `}>
        <h1
          onClick={() => setIsActive(true)}
          className={`text-[2.25rem] font-[400] tracking-tighter transition-all max-md:text-[1.75rem] ease-in duration-300 ${
            isActive ? "text-[#e2e3e6] " : "text-[#fff]"
          }`}
        >
          Weblocators
        </h1>
        <div onClick={() => setIsActive(true)} className="flex flex-col p-3 gap-1 rounded-full">
          <div
            className={`w-[2rem] h-[1px] transition-all ease-in duration-300 ${
              isActive ? "bg-[#fff]" : "bg-[#fff]"
            }`}
          ></div>
          <div
            className={`w-[1.5rem] self-end h-[1px] transition-all ease-in duration-300 ${
              isActive ? "bg-[#fff]" : "bg-[#fff]"
            }`}
          ></div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <section
        className={`fixed z-[48] p-4 max-md:p-2 top-0 right-0 transition-all ease-[cubic-bezier(.77,0,.175,1)] duration-[.9s] mb-[2rem] bg-transparent overflow-hidden ${
          isActive ? "h-screen w-[50%] max-xl:w-full" : "h-0 w-[50%] max-xl:w-full"
        }`}
      >
        <div
          ref={scrollRef}
          className={`flex-1 relative h-full z-[48] bg-[#e2e3e6] flex items-center transition-all ease-in duration-300 ${
            isActive ? "rounded-[10px]" : "rounded-[5px]"
          }`}
        >
          <div onClick={() => setIsActive(false)} className="bg-black rounded-full p-2 absolute top-[2rem] right-[2rem] max-md:right-[1.5rem] cursor-pointer">
            <X className="text-white"></X>
          </div>

          <ul className="text-white w-full flex flex-col tracking-tighter leading-none font-[300] text-[7rem] max-md:text-[5rem] px-8">
            <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.2 : 0.5,
                }}
                className="cursor-pointer text-black border-t-[1px] border-[#5a5a5a] border-dashed divide-dashed border-spacing-20 w-full hover:text-[#2163f1] select-none"
              >
                Home
              </motion.li>
            </div>

            <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.2 : 0.5,
                }}
                className="cursor-pointer border-t-[1px] border-[#5a5a5a] border-dashed border-spacing-20 hover:text-[#2163f1] select-none text-black"
              >
                Work
              </motion.li>
            </div>

            <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.2 : 0.5,
                }}
                className="cursor-pointer border-t-[1px] border-[#5a5a5a] border-dashed border-spacing-20 hover:text-[#2163f1] select-none text-black"
              >
                About us
              </motion.li>
            </div>

            <div style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.2 : 0.5,
                }}
                className="cursor-pointer border-y-[1px] border-[#5a5a5a] border-dashed border-spacing-20 hover:text-[#2163f1] select-none text-black"
              >
                Contact
              </motion.li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
