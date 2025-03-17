

  import { useRef } from "react";
  import { motion, useTransform } from "framer-motion";
    import { useScroll } from "framer-motion";

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
    return (
      <section ref={targetRef} className="relative h-[350vh] max-md:h-[200vh] mt-[5rem]">
        <div className="sticky top-0 flex h-[100vh] max-md:h-[75vh] items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 ml-[20%] mr-0 max-md:ml-[10%]"
          >
            <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-1">
              <div className="w-full h-full justify-between bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
                <div className="flex flex-col gap-1">
                  
                  <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]">
                    Design Skills
                  </h1>
                </div>
  
                <p className="font-[400] text-[1.15rem] w-[90%] max-md:w-full max-md:text-[.75rem] text-[#000]">
                  We create visually stunning and user-friendly designs that
                  captivate visitors while ensuring smooth navigation and
                  accessibility.
                </p>
              </div>
            </div>
  
            <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[45rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-1">
              <div className="w-full h-full justify-between bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
                <div className="flex flex-col gap-1">
                  
                  <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]">
                    Development Expertise
                  </h1>
                </div>
  
                <p className="font-[400] text-[1.15rem] w-[90%] max-md:w-full max-md:text-[.75rem] text-[#000]">
                  Our developers build fast, secure, and scalable websites with
                  clean, efficient code for seamless functionality across devices.
                </p>
              </div>
            </div>
            <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-1">
              <div className="w-full h-full justify-between bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
                <div className="flex flex-col gap-1">
                  
                  <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]">
                    Performance Optimization
                  </h1>
                </div>
  
                <p className="font-[400] text-[1.15rem] w-[90%] max-md:w-full max-md:text-[.75rem] text-[#000]">
                  We ensure lightning-fast load times and smooth performance
                  through code efficiency, image optimization, and responsive
                  design.
                </p>
              </div>
            </div>
            <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-1">
              <div className="w-full h-full justify-between bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
                <div className="flex flex-col gap-1">
                  
                  <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]">
                    SEO and Analytics
                  </h1>
                </div>
  
                <p className="font-[400] text-[1.15rem] w-[90%] max-md:w-full max-md:text-[.75rem] text-[#000]">
                  Our SEO strategies boost visibility, while data-driven insights
                  help refine performance and maximize audience engagement.
                </p>
              </div>
            </div>
            <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-1">
              <div className="w-full h-full justify-between bg-[#fff] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
                <div className="flex flex-col gap-1">
                  <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]">
                    Adaptability and Innovation
                  </h1>
                </div>
  
                <p className="font-[400] text-[1.15rem] w-[90%] max-md:w-full max-md:text-[.75rem] text-[#000]">
                  We stay ahead of trends, integrating new technologies and
                  ensuring your website remains modern, efficient, and
                  future-proof.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  