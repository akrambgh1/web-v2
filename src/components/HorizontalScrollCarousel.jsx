import { useRef } from "react";
import { motion, useTransform, useScroll, useMotionTemplate } from "framer-motion";

export const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Animate horizontal movement if needed
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  
  // Animate the second color of the gradient from its original to a new color (e.g., #ff0000)
  const dynamicColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(255,200,150)", "rgb(150,200,255)"]
  );
  
  // Build the radial-gradient string dynamically using useMotionTemplate
  const background = useMotionTemplate`
    radial-gradient(circle at 12.3% 80.7%,  rgb(255,200,150) 0% , #e57eff 100.2%  )
  `;
 


  return (
    <motion.section
      ref={targetRef}
      
      className="relative h-[350vh] max-md:h-[200vh] "
    >
      <div className="sticky top-0 flex h-[100vh] max-md:h-[75vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ml-[20%] mr-0 max-md:ml-[10%]">
          {/* Your carousel items here */}
          <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-2">
            <div className="  w-full h-full gap-15 bg-[#000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap py-8 px-8 rounded-[10px]">
              
              <div className="flex flex-col gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e57eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
             
                <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem] inline text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,_#e57eff_0%,_rgb(95,_209,_249)_100.2%);]">
                  Design Skills
                </h1>
              </div>

              <p className="font-[600] text-[1rem] w-[80%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                We create visually stunning and user-friendly designs that
                captivate visitors while ensuring smooth navigation and
                accessibility.
              </p>
            </div>
          </div>

          <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[45rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-2">
            <div className="w-full h-full  bg-[#000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
              <div className="flex flex-col gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e57eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>
                <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem] inline text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,_#e57eff_0%,_rgb(95,_209,_249)_100.2%);]">
                  Development Expertise
                </h1>
              </div>

              <p className="font-[600] text-[1rem] w-[89%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                Our developers build fast, secure, and scalable websites with
                clean, efficient code for seamless functionality across devices.
              </p>
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-2">
            <div className="w-full h-full  bg-[#000000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
              <div className="flex flex-col gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e57eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem] inline text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,_#e57eff_0%,_rgb(95,_209,_249)_100.2%);]">
                  Performance Optimization
                </h1>
              </div>

              <p className="font-[600] text-[1rem] w-[80%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                We ensure lightning-fast load times and smooth performance
                through code efficiency, image optimization, and responsive
                design.
              </p>
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-2">
            <div className="w-full h-full  bg-[#000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
              <div className="flex flex-col gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e57eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined"><path d="M12 16v5"></path><path d="M16 14v7"></path><path d="M20 10v11"></path><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path><path d="M4 18v3"></path><path d="M8 14v7"></path></svg>
                <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem] inline text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,_#e57eff_0%,_rgb(95,_209,_249)_100.2%);]">
                  SEO and Analytics
                </h1>
              </div>

              <p className="font-[600] text-[1rem] w-[80%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                Our SEO strategies boost visibility, while data-driven insights
                help refine performance and maximize audience engagement.
              </p>
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_12.3%_19.3%,_#d945ff_0%,_rgb(95,_209,_249)_100.2%);] w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px] rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear relative hover:p-2">
            <div className="w-full h-full  bg-[#000] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] max-md:w-full flex flex-col gap-15 py-8 px-8 rounded-[10px]">
              <div className="flex flex-col gap-2">

              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e57eff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                <h1 className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem] inline text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,_#e57eff_0%,_rgb(95,_209,_249)_100.2%);]">
                  Adaptability and Innovation
                </h1>
              </div>

              <p className="font-[600] text-[1rem] w-[75%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                We stay ahead of trends, integrating new technologies and
                ensuring your website remains modern, efficient, and
                future-proof.
              </p>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </motion.div>
      </div>
    </motion.section>
  );
};
