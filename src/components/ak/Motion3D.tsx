import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

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
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 80, damping: 20 });

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
      <motion.div className="layer-3d" style={{ rotateX: rx, rotateY: ry }}>
        {children}
      </motion.div>
    </div>
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
