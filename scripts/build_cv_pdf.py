"""Gera public/Alisson_Kennedy.pdf usando SOMENTE os dados do briefing da reconstrucao (nov/2026)."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
doc=SimpleDocTemplate('public/Alisson_Kennedy.pdf',pagesize=A4,leftMargin=18*mm,rightMargin=18*mm,topMargin=16*mm,bottomMargin=16*mm,
  title='Alisson Kennedy - Curriculo',author='Alisson Kennedy',subject='Eventos | Producao, Operacoes, Comercial e Patrocinios',lang='pt-BR')
dark=colors.HexColor('#0D1410')
H=ParagraphStyle('h',fontName='Helvetica-Bold',fontSize=22,leading=26,textColor=dark)
S=ParagraphStyle('s',fontName='Helvetica',fontSize=10.5,leading=14,textColor=colors.HexColor('#3a443d'))
T=ParagraphStyle('t',fontName='Helvetica-Bold',fontSize=11,leading=14,spaceBefore=10,spaceAfter=4,textColor=dark)
B=ParagraphStyle('b',fontName='Helvetica',fontSize=9.6,leading=13.2,textColor=colors.HexColor('#222'))
R=ParagraphStyle('r',parent=B,fontName='Helvetica-Bold')
st=[Paragraph('Alisson Kennedy',H),Paragraph('Eventos | Produção, Operações, Comercial e Patrocínios',S),Spacer(1,3),
Paragraph('São Paulo/SP · CNH B · +55 11 96738-5924 · alisson.kennedy@gmail.com · br.linkedin.com/in/alisson-kennedy',S),
Paragraph('Resumo',T),Paragraph('Mais de 1.000 eventos entregues na carreira. Média de 270 eventos por ano no ETAPA Educacional. NPS acima de 80 nas pesquisas aplicadas após cada evento.',B),
Paragraph('Experiência',T)]
exp=[('SDR, Food Service e Parcerias Estratégicas | Dio Mio Gelato | 11/2025 a 08/2026','Prospecção B2B de marca premium de gelato em São Paulo. Abordagem a CEOs e diretores, com indicação para a área de compras. Degustação antes de discutir preço e margem. Argumentos de rentabilidade, saudabilidade, inclusão e parcerias.'),
('Especialista de Marketing e Eventos | ETAPA Educacional | 2022 a 2025','Cerca de 270 eventos por ano: festas juninas, mostras, formaturas e encontros com famílias. Planejamento, orçamento, fornecedores, execução e avaliação, com pesquisa NPS após cada evento. Festa junina: o evento saiu de um déficit de R$ 15 mil para R$ 96 mil de faturamento bruto, com custo de R$ 100 mil, após centralizar a bilheteria no Sympla, trocar a empresa de alimentação por fornecedores independentes e renegociar cenografia, audiovisual e atrações.'),
('Analista de Patrocínios, Marketing e Eventos | Brasilseg (BB Seguros) | 2021 a 2022','Patrocínios, marketing e eventos. Média de 100 a 150 eventos por ano.'),
('Assistente de Eventos | doTerra Brasil | 2020 a 2021','Apoio ao planejamento e à operação. Média de 100 a 150 eventos por ano.')]
for a,b in exp: st+= [Paragraph(a,R),Paragraph(b,B),Spacer(1,5)]
st+=[Paragraph('Formação',T),Paragraph('MBA em Marketing, USP/ESALQ, em andamento, conclusão prevista em 07/2027.',B),Paragraph('Graduação em Relações Públicas, concluída.',B),
Paragraph('Idiomas',T),Paragraph('Português nativo. Inglês intermediário (B1).',B),
Paragraph('Competências',T),Paragraph('Produção e coordenação de eventos · Planejamento e cronograma · Orçamento e negociação com fornecedores · Patrocínios · Bilheteria e venda de ingressos (Sympla) · Pesquisa de satisfação (NPS) · Prospecção B2B e parcerias · Relacionamento com diretoria',B)]
doc.build(st)
