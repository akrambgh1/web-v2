import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverCard = ({ children, className = "", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Create motion values for x and y positions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Apply springs for smoother transitions
  const smoothX = useSpring(x, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to the card and center the circle
    x.set(e.clientX - rect.left - 25);
    y.set(e.clientY - rect.top - 25);
  };

  return (
    <div
      {...props}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {isHovered && (
        <motion.div
          className="absolute bg-white pointer-events-none opacity-70"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",       // Ensures a perfect circle
            x: smoothX,
            y: smoothY,
            willChange: "transform",   // Hints browser for hardware acceleration
            transform: "translateZ(0)" // Further forces GPU acceleration
          }}
        />
      )}
      {children}
    </div>
  );
};

export default HoverCard;
