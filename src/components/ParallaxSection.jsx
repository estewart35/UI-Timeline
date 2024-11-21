import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import DateMarker from "./DateMarker";
import TimeLine from "./TimeLine";

const ParallaxSection = ({ children, date, bgColor, timelineColor }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor, // Dynamic background color
      }}
    >
      <TimeLine color={timelineColor} />
      <DateMarker
        date={date}
        scrollYProgress={scrollYProgress}
        color={timelineColor}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        style={{ textAlign: "center", zIndex: 1 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ParallaxSection;