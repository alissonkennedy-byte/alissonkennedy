import { useRef, useEffect, useState, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useInView,
  animate,
} from "framer-motion";

/** Subtle real 3D: pointer-driven rotation on a perspective scene. */
export function Tilt3D({
  children,
  intensity = 6,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 140, damping: 14, mass: 0.6 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), spring);
  const tx = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);
  const ty = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), spring);

  return (
    <div
      ref={ref}
      className={`scene ${className}`}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        className="layer-3d"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="layer-3d"
          style={{ rotateX: rx, rotateY: ry, x: tx, y: ty }}
          whileHover={{ scale: 1.02 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Animated number counter that runs when scrolled into view. */
export function Count({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}

/** Scroll-driven depth translation on the Z/Y axis. */
export function Depth({
  children,
  range = 60,
  className = "",
}: {
  children: ReactNode;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [range, -range]), { stiffness: 60, damping: 24 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
