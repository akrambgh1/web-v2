
import { motion } from 'framer-motion'
import { Lightbulb ,FlaskConical } from 'lucide-react'

export default function LandingPage() {
  return (
    <>
    <div className="h-[70vh] w-full flex items-center flex-col justify-end relative max-md:h-[70vh] max-md:justify-center">
            <motion.div
              className="flex items-center justify-center gap-4 max-md:w-[95%] max-md:gap-2"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.span
                initial={{ translateY: "100%" }}
                animate={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true , }}
                className="relative text-[6rem] max-md:text-[2.25rem] max-xl:text-[4rem] font-[500] tracking-tighter"
              >
                Transforming ideas
              </motion.span>
              <motion.div
                initial={{
                  translateY: window.innerWidth < 768 ? "110%" : "112%",
                }}
                animate={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true}}
                className="relative bg-amber-300 rounded-full p-4 max-md:p-2"
              >
                <Lightbulb className="max-md:w-10 max-md:h-10" size={90} />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 w-[70%] max-md:w-[90%]"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.span
                initial={{ translateY: "100%" }}
                animate={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true}}
                className="relative text-[6rem] max-md:text-[2.25rem] max-xl:text-[4rem] font-[500] tracking-tighter"
              >
                into impactful digital
              </motion.span>
            </motion.div>
            <motion.div
              className="flex items-center justify-end gap-4 w-[70%] max-md:w-[90%]"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.div
                initial={{
                  translateY: window.innerWidth < 768 ? "110%" : "125%",
                }}
                animate={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true}}
                className="relative bg-[#2264f1] rounded-full p-3 max-md:p-2"
              >
                <FlaskConical size={80} className="max-md:w-9 max-md:h-9" />
              </motion.div>

              <motion.span
                initial={{ translateY: "100%" }}
                animate={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true}}
                className="relative text-[6rem] max-md:text-[2.25rem] max-xl:text-[4rem] font-[500] tracking-tighter"
              >
                experiences.
              </motion.span>
            </motion.div>

            {/* <motion.div
              className="absolute bottom-[2rem] max-md:top-[4rem] h-fit max-md:h-fit px-2 z-47"
              style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
              <motion.img
                initial={{ translateY: "100%" }}
                whileInView={{ translateY: 0 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
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
                transition={{ ease: "easeInOut", duration: 1, delay: 1.3  }}
                viewport={{ amount: 0, once: true }}
                className="text-base sm:text-[1.5rem] font-[500] tracking-tighter w-[40%] max-xl:w-[70%] max-md:w-full flex gap-4"
              >
                At Weblocators, we create sleek, user-focused websites that
                blend design and performance to help businesses build a strong
                online presence. Our goal is to craft digital experiences that
                captivate, engage, and deliver results
              </motion.p>
            </motion.div> */}
          </div>
    </>
  )
}
