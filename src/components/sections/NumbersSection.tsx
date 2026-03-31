import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "anos de experiência corporativa" },
  { value: 8, suffix: "", label: "grandes empresas atendidas" },
  { value: 3, suffix: "", label: "frentes de negócio ativas" },
  { value: 1, suffix: "", label: "ponto de contato direto" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export function NumbersSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "hsl(220 26% 9%)" }}>
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground font-body max-w-[180px] mx-auto">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}