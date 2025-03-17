
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  const [activeSections, setActiveSections] = useState({
    0: false,
    85: false,
    170: false,
    255: false,
    340: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const stickyElements = document.querySelectorAll("[data-sticky]");
      const newActiveSections = { 0: false, 85: false, 170: false, 255: false,340: false };

      stickyElements.forEach((el) => {
        const topValue = el.getBoundingClientRect().top;

        // Check for close values (within ±5px)
        Object.keys(newActiveSections).forEach((key) => {
          if (Math.abs(topValue - parseInt(key)) <= 6) {
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
        className="relative min-h-[165vh] mt-[10rem] max-md:min-h-[300vh] max-md:mt-[5rem]"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%, 0 100%)",
        }}
      >
        <section className="h-[210vh] w-[100%] absolute z-50 flex flex-col max-md:h-[400vh]">
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
                <h1 className="text-[3rem] max-md:text-[1.5rem]">Custom Website Development</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Business Websites</li>
                  <li>E-commerce Solutions</li>
                  <li>Portfolio & Personal Websites</li>
                  <li>Web Applications</li>
                </ul>
              </div>

              <div className="flex flex-col w-[80%] h-full gap-[2rem]">
                <img
                  src="/pexels-firosnv-8171308.jpg"
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
                <h1 className="text-[3rem] max-md:text-[1.5rem]">User Experience & Interface Design</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>UI/UX Design</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Mobile-Friendly & Responsive Layouts</li>
                  <li>Accessibility Optimization</li>
                </ul>
              </div>

              <div className="flex flex-col w-[80%] h-full gap-[2rem]">
                <img
                  src="/pexels-tranmautritam-285814.jpg"
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
                <h1 className="text-[3rem] max-md:text-[1.5rem]">Web Performance & Security</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Speed & Performance Optimization</li>
                  <li>Security Enhancements & SSL Setup</li>
                  <li>Mobile & Cross-Browser Compatibility</li>
                  <li>CDN & Caching Solutions</li>
                </ul>
              </div>
              <div className="flex flex-col w-[80%] h-full gap-[2rem]">
                <img
                  src="/pexels-tara-winstead-8386440.jpg"
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
                <h1 className="text-[3rem] max-md:text-[1.5rem]">SEO & Online Growth Strategy</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>On-Page & Technical SEO</li>
                  <li>Keyword Optimization</li>
                  <li>Content Strategy</li>
                  <li>Google Analytics & Performance Tracking</li>
                </ul>
              </div>

              <div className="flex flex-col w-[80%] h-full gap-[2rem]">
                <img
                  src="/pexels-fotios-photos-16129703.jpg"
                  className="object-cover w-full h-[30vh] rounded-[5px]"
                />
              </div>
            </motion.div>
            
          </div>
           {/* Section 5*/}
           <div
            data-sticky
            className="sticky top-[340px] z-4 h-auto w-full overflow-visible"
          >
            <motion.div
              className={`flex py-4 px-[15rem] max-md:px-4 max-md:flex-col justify-between transition-colors duration-300 max-md:gap-4 ${
                activeSections[340] ? "bg-[#e6dafb]" : "bg-[#fff]"
              }`}
            >
              <div className="flex flex-col w-[70%] h-full gap-[2rem]">
                <h1 className="text-[3rem] max-md:text-[1.5rem]">E-commerce Development</h1>
                <ul className="flex flex-col gap-2 tracking-tighter">
                  <li>Custom Online Stores</li>
                  <li>Payment Gateway Integration</li>
                  <li>Inventory & Order Management</li>
                  <li>Sales & Conversion Optimization</li>
                </ul>
              </div>

              <div className="flex flex-col w-[80%] h-full gap-[2rem]">
                <img
                  src="/pexels-ivan-samkov-7620619.jpg"
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
