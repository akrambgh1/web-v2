
import { easeInOut, motion } from 'framer-motion'

export default function WhyChooseUs() {
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
  return (
    <>
    <motion.section className="px-[2.5rem] max-xl:px-[1rem] mt-[10rem] max-md:mt-0">
            <motion.h1
              initial={{ opacity: 0, translateY: "30%" }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ ease: easeInOut, duration: 1 }}
              className="text-[2rem] tracking-tighter text-[#2264f1] sm:text-[3rem] w-[100%] shrink-0 mb-[3rem] md:mb-[4rem]"
            >
              [ Why choose us ]
            </motion.h1>
            <div className="grid max-xl:flex max-xl:flex-col max-xl:gap-[4rem] gap-y-6 grid-cols-18 sm:gap-x-5">
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
                        <li className="text-xs tracking-tighter text-gray-400 sm:text-[1.25rem] sm:w-[48%]">
                          {quality.description}
                        </li>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
    </>
  )
}
