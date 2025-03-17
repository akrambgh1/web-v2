import { motion } from "framer-motion";

const FullScreenOnView = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: {
          scale: 1,
          position: "relative",
          top: 0,
          left: 0,
          width: "auto",
          height: "auto",
          zIndex: 1,
        },
        visible: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          scale: 1,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FullScreenOnView;
