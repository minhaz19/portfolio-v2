import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 2,
      // fill: "#156165",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 450 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full fill-accent stroke-accent"
      >
        <motion.path
          d="M50 400 L50 100 L150 250 L250 100 L250 400"
          strokeWidth="50"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
