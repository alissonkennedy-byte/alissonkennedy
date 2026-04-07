import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Eventos realizados em todo o Brasil" },
  { value: 5, suffix: "+", label: "Segmentos atendidos: corporativo, social, institucional" },
  { value: 10, suffix: "+", label: "Estados com atuação confirmada" },
  { value: 1, suffix: "", label: "Profissional responsável por cada entrega" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="container-premium">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <CountUp target={s.value} suffix={s.suffix} />
              <p className="mt-2 text-muted-foreground text-xs md:text-sm font-body max-w-[180px] mx-auto">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
