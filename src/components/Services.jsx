import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  const [activeSections, setActiveSections] = useState({
    0: false,
    85: false,
    170: false,
    255: false,
    340: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const stickyElements = document.querySelectorAll("[data-sticky]");
      const newActiveSections = {
        0: false,
        85: false,
        170: false,
        255: false,
        340: false,
      };

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
        className="relative min-h-[180vh] mt-[10rem] max-md:min-h-[320vh] max-md:mt-[2rem]"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <section className="h-[212vh] w-[100%] absolute z-50 flex flex-col max-md:h-[400vh]">
          <h1 className="text-[2rem] tracking-tighter text-[#2264f1] sm:text-[3rem] w-[100%] shrink-0 mb-[3rem] md:mb-[4rem] px-[15rem] max-2xl:px-[3rem] max-md:px-4">
            [Our services]
          </h1>
          {/* Section 1 */}
          <div
            data-sticky
            className="sticky top-0 z-1 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-2xl:px-[3rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[0] ? "bg-[#2264f1] text-white" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem] max-md:w-full ">
                <h1 className="text-[2rem] font-[400] max-md:text-[1.75rem]">
                  Website Development
                </h1>
                <ul className="grid grid-rows-4 max-md:flex max-md:flex-col gap-2 tracking-tighter">
                  <li>Business Websites</li>
                  <li>Frontend and backend development</li>
                  <li>E-commerce Solutions</li>
                  <li>Portfolio & Personal Websites</li>
                  <li>Web Applications</li>
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
              className={`flex py-4 px-[15rem] max-2xl:px-[3rem] max-md:px-4 max-md:flex-col justify-between gap-4 transition-colors duration-300 max-md:gap-4 ${
                activeSections[85] ? "bg-[#3973f2] text-white" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] max-md:w-full h-full gap-[2rem]">
                <h1 className="text-[2rem] max-md:text-[1.75rem]">
                  Brand Strategy
                </h1>
                <ul className="grid grid-rows-4 max-md:flex max-md:flex-col gap-2 tracking-tighter">
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
              className={`flex py-4 px-[15rem] max-2xl:px-[3rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[170] ? "bg-[#4f83f4] text-white" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] max-md:w-full h-full gap-[2rem]">
                <h1 className="text-[2rem] max-md:text-[1.75rem]">
                  Visual Identity
                </h1>
                <ul className="grid grid-rows-3 max-md:flex max-md:flex-col gap-2 tracking-tighter">
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
              className={`flex py-4 px-[15rem] max-2xl:px-[3rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[255] ? "bg-[#6592f5] text-white" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] max-md:w-full h-full gap-[2rem]">
                <h1 className="text-[2rem] max-md:text-[1.75rem]">
                  SEO & Digital Marketing
                </h1>
                <ul className="grid grid-rows-4 max-md:flex max-md:flex-col gap-2 tracking-tighter">
                  <li>On-page and off-page SEO</li>
                  <li>Social media integration</li>
                  <li>Email marketing setup</li>
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

          <div
            data-sticky
            className="sticky top-[340px] z-3 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-2xl:px-[3rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[340] ? "bg-[#91b1f8] text-white" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] max-md:w-full h-full gap-[2rem]">
                <h1 className="text-[2rem] max-md:text-[1.75rem]">
                  Hosting & Maintenance
                </h1>
                <ul className="grid grid-rows-4 max-md:flex max-md:flex-col gap-2 tracking-tighter">
                  <li>Web hosting setup</li>
                  <li>Ongoing maintenance and support</li>
                  <li>Security updates and backups</li>
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
