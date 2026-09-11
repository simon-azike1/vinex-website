"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type FadeUpProps = Omit<React.ComponentProps<typeof motion.div>, "children"> & {
  children: React.ReactNode;
  delay?: number;
  variant?: "default" | "blur" | "scale";
  once?: boolean;
};

export const FadeUp = ({ children, delay = 0, variant = "default", once = true, className, ...props }: FadeUpProps) => {
  const variants: Variants =
    variant === "scale"
      ? { hidden: { scale: 0.96, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } } }
      : variant === "blur"
      ? { hidden: { opacity: 0, filter: "blur(12px)" }, visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, delay } } }
      : fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = Omit<React.ComponentProps<typeof motion.div>, "children"> & {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
};

export const StaggerFadeUp = ({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.1,
  once = true,
  className,
  ...props
}: StaggerProps) => {
  // Cast to ReactNode to kill MotionValue union
  const childNodes = children as React.ReactNode;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren, delayChildren } },
      }}
      className={className}
      {...props}
    >
      {React.Children.map(childNodes, (child, i) => {
        if (React.isValidElement(child)) {
          return (
            <motion.div key={i} variants={fadeUp}>
              {child}
            </motion.div>
          );
        }
        return <motion.div key={i} variants={fadeUp}>{child}</motion.div>;
      })}
    </motion.div>
  );
};

export const ScaleIn = ({
  children,
  delay = 0,
  className,
  ...props
}: Omit<React.ComponentProps<typeof motion.div>, "children"> & { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ scale: 0.94, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);