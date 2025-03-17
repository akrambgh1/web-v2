import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";

// Dummy card data – customize as needed
const cardData = [
  {
    title: "Design Skills",
    description:
      "We create visually stunning and user-friendly designs that captivate visitors while ensuring smooth navigation.",
  },
  {
    title: "Development Expertise",
    description:
      "Our developers build fast, secure, and scalable websites with clean, efficient code for seamless functionality.",
  },
  {
    title: "Performance Optimization",
    description:
      "We ensure lightning-fast load times and smooth performance through code efficiency, image optimization, and responsive design.",
  },
  {
    title: "SEO and Analytics",
    description:
      "Our SEO strategies boost visibility, while data-driven insights help refine performance and maximize audience engagement.",
  },
  {
    title: "Adaptability and Innovation",
    description:
      "We stay ahead of trends, integrating new technologies and ensuring your website remains modern, efficient, and future-proof.",
  },
];

export const HorizontalScrollCarousel = () => {
  // Overall section ref (tall container)
  const sectionRef = useRef(null);
  // Sticky container ref (intended to fill the viewport)
  const stickyRef = useRef(null);
  // State to track if sticky container completely fills the viewport
  const [isStickyFull, setIsStickyFull] = useState(false);
  // Active card index (computed from scroll progress)
  const [activeIndex, setActiveIndex] = useState(0);
  // Overlay scale computed from the active card's relative progress
  const [overlayScaleValue, setOverlayScaleValue] = useState(0);

  // useScroll relative to the overall section.
  const { scrollYProgress } = useScroll({ target: sectionRef });
  // Map vertical scroll progress to horizontal translation for the card container.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  const numberOfCards = cardData.length;

  // Custom check: update isStickyFull based on the sticky container's bounding rectangle.
  useEffect(() => {
    const handleSticky = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        // The sticky container is "full" only if its top is <= 0 and its bottom is >= viewport height.
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          setIsStickyFull(true);
        } else {
          setIsStickyFull(false);
        }
      }
    };

    window.addEventListener("scroll", handleSticky);
    window.addEventListener("resize", handleSticky);
    handleSticky();
    return () => {
      window.removeEventListener("scroll", handleSticky);
      window.removeEventListener("resize", handleSticky);
    };
  }, []);

  // Update activeIndex only when the sticky container is fully visible.
  useEffect(() => {
    if (!isStickyFull) return;
    const unsubscribe = scrollYProgress.onChange((v) => {
      // Each card occupies an equal segment; adding 0.5 delays the index change until after the midpoint.
      const index = Math.max(
        0,
        Math.min(numberOfCards - 1, Math.floor(v * numberOfCards + 0.5))
      );
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress, numberOfCards, isStickyFull]);

  // Update overlay scale based on the active card's relative scroll progress.
  // We calculate the relative progress "r" for the active card and then:
  // - For r in [0, 0.3]: scale ramps up from 0 to 1.
  // - For r in [0.3, 0.7]: scale stays at 1.
  // - For r in [0.7, 1]: scale falls from 1 to 0.
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const seg = 1 / numberOfCards;
      // Calculate relative progress for the active card
      const lowerBound = activeIndex * seg;
      let r = (v - lowerBound) / seg;
      r = Math.max(0, Math.min(1, r));
      let newScale = 0;
      if (r < 0.3) {
        newScale = r / 0.3;
      } else if (r < 0.7) {
        newScale = 1;
      } else {
        newScale = 1 - (r - 0.7) / 0.3;
      }
      setOverlayScaleValue(newScale);
    });
    return unsubscribe;
  }, [scrollYProgress, activeIndex, numberOfCards]);

  return (
    <>
      {/* Overall Section */}
      <section ref={sectionRef} className="relative h-[350vh]">
        {/* Sticky container intended to fill the viewport */}
        <div ref={stickyRef} className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
          {/* Adjust left margin (e.g., ml-[38%]) as needed */}
          <motion.div style={{ x }} className="flex gap-4 ml-[38%] mr-0 max-md:ml-[10%]">
            {cardData.map((card, i) => (
              <div
                key={i}
                className="bg-[radial-gradient(circle_at_12.3%_19.3%,#d945ff,rgba(95,209,249,1))]
                           w-[40rem] max-md:w-[20rem] h-[350px] max-md:h-[350px]
                           rounded-[13px] p-0 cursor-pointer transition-all duration-200 ease-linear hover:p-2 relative"
              >
                <div className="w-full h-full bg-[#000] shadow-lg flex flex-col py-8 px-8 rounded-[10px]">
                  <h1
                    className="font-[400] tracking-tighter text-[3rem] max-md:text-[2rem]
                               text-transparent bg-clip-text bg-[radial-gradient(circle_at_12.3%_19.3%,#e57eff,rgba(95,209,249,1))]"
                  >
                    {card.title}
                  </h1>
                  <p className="font-[600] text-[1rem] w-[100%] max-md:w-full max-md:text-[.75rem] text-[#cecdcd]">
                    {card.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Page Overlay for Active Card */}
      <AnimatePresence>
        {isStickyFull && cardData[activeIndex] && (
          <motion.div
            key={activeIndex}
            style={{ scale: overlayScaleValue }}
            initial={{ opacity: 0 }}
            animate={{ opacity: overlayScaleValue > 0 ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full z-50 bg-black flex flex-col items-center justify-center p-4"
          >
            <div className="max-w-4xl text-center">
              <h1
                className="font-bold text-5xl text-transparent bg-clip-text 
                           bg-[radial-gradient(circle_at_12.3%_19.3%,#e57eff,rgba(95,209,249,1))]"
              >
                {cardData[activeIndex].title}
              </h1>
              <p className="mt-4 text-lg text-[#cecdcd]">
                {cardData[activeIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
