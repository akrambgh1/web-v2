
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  const [activeSections, setActiveSections] = useState({
    0: false,
    85: false,
    170: false,
    255: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const stickyElements = document.querySelectorAll("[data-sticky]");
      const newActiveSections = { 0: false, 85: false, 170: false, 255: false };

      stickyElements.forEach((el) => {
        const topValue = el.getBoundingClientRect().top;

        // Check for close values (within ±5px)
        Object.keys(newActiveSections).forEach((key) => {
          if (Math.abs(topValue - parseInt(key)) <= 5) {
            newActiveSections[key] = true;
          }
        });
      });

      setActiveSections(newActiveSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        className="relative min-h-[140vh] mt-[10rem] max-md:min-h-[250vh] max-md:mt-[5rem]"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <section className="h-[180vh] w-[100%] absolute z-50 flex flex-col max-md:h-[400vh]">
          {/* Section 1 */}
          <div
            data-sticky
            className="sticky top-0 z-1 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[0] ? "bg-[#A97BFC]" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem] max-md:w-full ">
                <h1 className="text-[3rem] max-md:text-[1.75rem]">Brand Design</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Brand Research + Analysis</li>
                  <li>Brand Strategy + Positioning</li>
                  <li>Brand Naming + Story</li>
                  <li>Brand Activation</li>
                </ul>
              </div>

              <div>
                <img
                  src="/landing.jpg"
                  className="object-cover w-full h-[30vh] rounded-[5px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Section 2 */}
          <div
            data-sticky
            className="sticky top-[85px] z-1 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-md:px-4 max-md:flex-col justify-between gap-4 transition-colors duration-300 max-md:gap-4 ${
                activeSections[85] ? "bg-[#B58CFD]" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem]">
                <h1 className="text-[3rem] max-md:text-[1.75rem]">Brand Strategy</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Market Research</li>
                  <li>Competitive Analysis</li>
                  <li>Brand Positioning</li>
                  <li>Messaging Framework</li>
                </ul>
              </div>

              <div>
                <img
                  src="/landing.jpg"
                  className="object-cover w-full h-[30vh] rounded-[5px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Section 3 */}
          <div
            data-sticky
            className="sticky top-[170px] z-3 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[170] ? "bg-[#D0B5FF]" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem]">
                <h1 className="text-[3rem] max-md:text-[1.75rem]">Visual Identity</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Logo Design</li>
                  <li>Typography</li>
                  <li>Color Palette</li>
                  <li>Imagery Guidelines</li>
                </ul>
              </div>

              <div>
                <img
                  src="/landing.jpg"
                  className="object-cover w-full h-[30vh] rounded-[5px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Section 4 */}
          <div
            data-sticky
            className="sticky top-[255px] z-3 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[255] ? "bg-[#ddcbfe]" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem]">
                <h1 className="text-[3rem] max-md:text-[1.75rem]">Digital Presence</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Website Design</li>
                  <li>Social Media Strategy</li>
                  <li>Content Creation</li>
                  <li>Online Campaigns</li>
                </ul>
              </div>

              <div>
                <img
                  src="/landing.jpg"
                  className="object-cover w-full h-[30vh] rounded-[5px]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
}
