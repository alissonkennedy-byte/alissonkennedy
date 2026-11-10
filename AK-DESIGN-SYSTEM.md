# AK — Clareza em Movimento | Sistema de identidade v2

## Propósito
Identidade-mãe para presença digital pessoal, microsites, links, apresentações e páginas de projetos do Alisson Kennedy. A marca é o monograma **AK.**; não usar marcas de clientes nem outras empresas no site pessoal. O objetivo primário da landing é **uma conversa direta no WhatsApp**. Versão criada sob demanda do usuário em 09/11/2026.

## Fundamentos visuais
- Fundo: preto grafite `#090B0B` (contraste e respiro)
- Fundo secundário: `#111717`, painéis `#18201E`
- Texto claro: `#F2F0E9`, texto escuro `#090B0B`
- Cor de conversão exclusiva: `#C3F35B` (verde-limão editorial)
- Off-white: `#F2F0E9`
- Grids finos geométricos + tipografia de impacto. Não copiar imagens de referência nem interfaces idênticas.
- Elementos gráficos recorrentes: ponto final verde, órbitas 3D wireframe, índice numérico da seção, divisões 01/05, monograma AK. e ritmo de linhas.
- Tipografia: Space Grotesk local com fallback sans, hierarquia em caixa alta, espaçamento negativo nos headlines; evitar fontes externas de terceiros no carregamento crítico.

## Componentes replicáveis
O arquivo `public/brand/ak-system.css` concentra paleta, tipografia e CTAs, e deve ser levado para novos projetos. `public/brand/ak-interactions.js` implementa progressão, menu acessível, camada 3D leve, consentimento e analytics; seu uso é opcional nos próximos sites.

## Mobile
A página nasce em 390px mas também precisa funcionar em 320, 360 e 430px, 768px e desktop. Primeira dobra com foto real, uma frase clara e ação direta. CTA inferior aparece após a pessoa rolar parte do hero, sem sequestrar a tela. Não usar hover-only, som, zoom de rolagem forçado ou carrossel com autoplay.

## Motion / 3D
Órbitas CSS em perspectiva 3D, transformações compostas, parallax curto com requestAnimationFrame, até quatro elementos animados continuamente na primeira dobra e desativação com `prefers-reduced-motion`. Nenhum bundle WebGL ou biblioteca 3D bloqueando LCP. Conteúdo crítico está no HTML para funcionar sem JS.

## Conversão
WhatsApp `https://wa.me/5511967385924` é a ação primária nos locais hero, manifesto, case, sobre e encerramento, além da barra móvel condicional. E-mail e LinkedIn são alternativas secundárias. O site não expõe nomes de empregadores nem os arquivos PDF originais que os contenham.

## Integridade editorial
- +1.000 eventos na carreira; média de 270/ano; NPS acima de 80
- Case: déficit anterior de R$ 15 mil. Resultado novo: faturamento bruto R$ 96 mil, custos R$ 100 mil, déficit R$ 4 mil; nunca chamar de lucro
- Funções e períodos profissionais estão derivados do currículo, sem nomes de empresas
- MBA em Marketing em andamento, previsão 07/2027. Graduação em Relações Públicas concluída. Inglês B1.
- Evitar afirmações comerciais ou prêmios não comprovados.

## Métricas e SEO
HTML completo sem JavaScript, `<h1>` único, `Person` + `ProfilePage` JSON-LD, metas OG, canonical, sitemap, fotos WebP do usuário, `robots` indexável. GTM `GTM-MBM785PR` é carregado apenas após consentimento opcional. Em qualquer mudança de hospedagem, validar redirects 301 reais, robots, canonical e HTTPS.

## Releases
Branch de trabalho: `redesign-conversao-mobile-2026-11-09`. Branch anterior: `redesign-editorial-eventos-2026-11-09`. A publicação do domínio principal só deve ocorrer depois da revisão visual e validação, sem promover prévia automaticamente.
