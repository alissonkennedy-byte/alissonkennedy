import { motion } from "framer-motion";
import { ShieldAlert, ShoppingBag, PackageCheck, MessageCircle } from "lucide-react";

const cards = [
  {
    icon: ShieldAlert,
    title: "Trava Absoluta de Estoque",
    copy: "Nunca mais venda o que não tem. Se você possui apenas 2 unidades de uma peça, nosso sistema bloqueia fisicamente qualquer tentativa do cliente de adicionar 10 no carrinho. Acabou o constrangimento e o estorno de dinheiro por falha manual.",
  },
  {
    icon: ShoppingBag,
    title: 'Psicologia de Compra ("Aba Loja")',
    copy: "Substituímos o imediatismo que assusta o cliente por um ambiente de exploração. Ao navegar pela aba exclusiva de Loja, o usuário é incentivado pela ação suave de 'Adicionar' itens, aumentando drasticamente o tempo de tela e o seu ticket médio.",
  },
  {
    icon: PackageCheck,
    title: 'Retenção Pré-Envio ("Minha Garagem")',
    copy: "Reduza o suporte pela metade. Desenvolvemos uma área exclusiva onde o cliente visualiza exatamente os itens que já comprou enquanto aguarda o envio. Transparência que gera confiança e liberta o seu tempo.",
  },
  {
    icon: MessageCircle,
    title: "Fechamento Zero Fricção",
    copy: "O Brasil compra via mensagem. O nosso fluxo de vendas termina em um botão estratégico que redireciona o cliente, com o pedido perfeitamente calculado (frete e itens), direto para o seu WhatsApp. Você só precisa finalizar a venda.",
  },
];

export function ArsenalSection() {
  return (
    <section id="arsenal" className="section-spacing relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--emerald)) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="label-accent">O Arsenal Tecnológico</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A <span className="text-primary">Destruição</span> da Concorrência
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <card.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm font-body leading-relaxed">{card.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
