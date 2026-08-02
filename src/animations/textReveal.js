export const textReveal = {
  hidden: { opacity: 0, y: "15%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" }
  }
};

export const wordStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
};
