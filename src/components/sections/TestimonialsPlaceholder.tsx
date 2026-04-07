import { motion } from "framer-motion";

export function TestimonialsPlaceholder() {
  return (
    <section className="py-16">
      <div className="container-premium text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground/60 text-sm font-body italic"
        >
          Em breve, o que nossos clientes dizem.
        </motion.p>
      </div>
    </section>
  );
}
