# AK / Identidade digital pessoal — edição profissional

**Conceito:** clareza, escala, presença e discrição. Uma identidade editorial de alguém que já executou operações complexas. Não é uma marca de aplicativo, nem uma agência de tecnologia.

## Premissa de recrutamento
Em uma primeira visita o recrutador deve identificar, sem rolagem:
- nome e rosto reais;
- especialidades em produção de eventos, operações, comercial e patrocínios;
- comprovação objetiva de experiência (1.000+ eventos);
- um meio imediato e funcional de contato.

Depois da primeira dobra a página responde: qual sua escala de entrega? o que já resolveu na prática? que funções desempenhou? onde atuaria em minha equipe? Só então enfatiza formação e dados complementares.

## Sistema visual
- Fundo editorial: `#F3F0E9` (papel)
- Fundo claro de contraste: `#FCFAF5`
- Texto e superfícies escuras: `#171B1C`
- Apoio grafite: `#394041`
- Destaque controlado, não neon: `#7F353E` (vinho queimado)
- Linhas: `#D1CEC4`
- Fotografia documental em preto e branco, sem recriar rostos. Imagem já presente no repositório.
- Tipos: Space Grotesk local para interface e dados; Georgia itálica editorial somente em destaques conceituais. Sem SVG 3D, esferas, glow, glassmorphism ou cards por decoração.
- Grid de largura editorial variável; colunas assimétricas, divisores finos e grandes áreas de respiro. Um número de seção e uma palavra-guia para orientar a leitura.

## Movimento
Texto crítico existe no HTML inicial e não depende de JS. Movimento apenas de imagem na entrada, título deslocando poucos pixels, marcação de rolagem e entrada das grandes seções sem ocultação. Deixar `prefers-reduced-motion` estático. Todos os efeitos precisam preservar legibilidade e não sequestrar scroll.

## Conversão
CTA principal: conversa direta pelo WhatsApp `https://wa.me/5511967385924`, texto de abertura relacionado a uma oportunidade profissional. E-mail e LinkedIn no encerramento. O botão fixo no celular aparece após a primeira dobra e some quando o CTA final está visível. Nada de formulário obrigatório nem de popups.

## Conteúdo: fatos permitidos
- Alisson Kennedy, São Paulo/SP; produção, operações, comercial e patrocínios.
- Mais de mil eventos na carreira; média de 270/ano em uma função; NPS acima de 80.
- Festa junina com déficit anterior de R$ 15 mil; faturamento bruto posterior de R$ 96 mil, custo de R$ 100 mil e diferença negativa de R$ 4 mil. Nunca chamar de lucro.
- Carreira sem nomes de empregadores: SDR 11/2025–08/2026; especialista marketing/eventos 2022–2025; analista patrocínios/eventos 2021–2022; assistente eventos 2020–2021.
- Relações Públicas concluída; MBA Marketing USP/ESALQ em andamento, conclusão prevista julho/2027; inglês intermediário B1.
- No site, não citar nomes de empregadores, depoimentos inventados, premiações ou ferramentas irrelevantes.

## Variações
Em futuros links ou sites da marca pessoal AK, manter a linguagem de tipografia e grid, a fotografia autêntica, o mesmo monograma e a hierarquia de informação. Não copiar integralmente a home; cada página precisa ter um objetivo próprio, alterando apenas a grade e os componentes necessários.

## Arquivos
- `index.html`: HTML estático, conteúdo indexável
- `public/rh.css`: implementação visual da edição profissional
- `public/rh.js`: pequenas interações sem biblioteca externa
- `public/brand/ak-system.css`: tokens exportáveis para próximos projetos
- `qa-rh.cjs` e `.github/workflows/qa-rh.yml`: validação em 7 larguras e Lighthouse
- Branch: `rh-editorial-candidatura-2026-11-10`, deploy apenas na prévia da Vercel

**Não substituir o domínio principal sem validação visual do usuário.**
