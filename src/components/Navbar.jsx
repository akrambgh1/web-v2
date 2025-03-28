/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { easeIn, motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [secondLayerExpanded, setSecondLayerExpanded] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

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
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex items-center gap-3 cursor-pointer fixed right-[3%] max-md:left-auto max-md:right-[7%] top-[5%] z-49 select-none"

      >
        <h1
          className={`text-[1.5rem] transition-all ease-in duration-300 ${
            isActive ? "text-[#ffffff]" : "text-[#1e1e1e]"
          }`}
        >
          Menu
        </h1>
        <div className="flex flex-col gap-1">
          <div
            className={`w-[3rem] h-[1px] transition-all ease-in duration-300 ${
              isActive ? "bg-[#fff]" : "bg-[#1e1e1e]"
            }`}
          ></div>
          <div
            className={`w-[3rem] h-[1px] transition-all ease-in duration-300 ${
              isActive ? "bg-[#fff]" : "bg-[#1e1e1e]"
            }`}
          ></div>
        </div>
      </div>
      <section
        className={`fixed z-[48] p-4 max-md:p-2 top-0 right-0 transition-all ease-[cubic-bezier(.77,0,.175,1)] duration-[.9s] mb-[2rem] bg-transparent overflow-hidden ${
          isActive ? "h-screen w-[50%] max-xl:w-full" : "h-0 w-[50%] max-xl:w-full"
        }`}
      >
        <div className={`flex-1 h-full bg-[#1e1e1e] flex items-center transition-all ease-in duration-300 ${isActive ? "rounded-[10px]" : "rounded-[5px]"}`}>
          <ul className="text-white flex flex-col tracking-tighter leading-none font-[300] text-[7rem] max-md:text-[5rem] px-8">
            <div
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.4 : 0.5,
                }}
                className="cursor-pointer"
              >
                Home
              </motion.li>
            </div>

            <div
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.4 : 0.5,
                }}
                className="cursor-pointer"
              >
                Work
              </motion.li>
            </div>

            <div
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.4 : 0.5,
                }}
                className="cursor-pointer"
              >
                About us
              </motion.li>
            </div>
            <div
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.li
                initial={{ translateY: "200%" }}
                animate={isActive ? { translateY: 0 } : { translateY: "200%" }}
                transition={{
                  ease: "easeInOut",
                  duration: isActive ? 1.4 : 0.5,
                }}
                className="cursor-pointer"
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
