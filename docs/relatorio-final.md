# RELATÓRIO FINAL — PROJETO DE FERRAMENTAS PARA GERAÇÃO DE IDEIAS

---

**UNIVERSIDADE FEDERAL DO RIO DE JANEIRO — UFRJ**  
**ESCOLA POLITÉCNICA**  
**Disciplina: Ferramentas para Geração de Ideias**  
**Professora: Juliana França**

---

## CAPA

# OnboardDev — Plataforma Inteligente de Onboarding para Desenvolvedores

**Ideação e Prototipagem de Soluções Inovadoras para a Indústria de Software**

---

**Integrantes:**

- Bruno Levorato
- Rafael Ribeiro
- Renato Gondin
- Vitor Mello

**Rio de Janeiro, Junho de 2026**

---

## 1. INTRODUÇÃO

### 1.1. Contextualização

A indústria de software é um dos setores de maior crescimento e transformação da economia global. Com a digitalização acelerada de empresas em todos os setores, a demanda por profissionais de tecnologia nunca esteve tão alta. No entanto, este crescimento traz consigo desafios operacionais significativos — entre eles, o processo de integração de novos desenvolvedores em projetos existentes, conhecido como *onboarding*.

O onboarding de desenvolvedores é um processo crítico que impacta diretamente a produtividade do time, a retenção de talentos e os custos operacionais da empresa. Apesar de sua importância, a maioria das organizações de software aborda este processo de forma ad hoc, desestruturada e altamente dependente de recursos humanos individuais.

### 1.2. Objetivo do Trabalho

Este trabalho tem como objetivo aplicar metodologias de geração de ideias — especificamente o Design Thinking — para identificar, explorar e propor uma solução inovadora para um problema real da indústria de software. O resultado é o **OnboardDev**, uma plataforma inteligente de onboarding para desenvolvedores, acompanhada de um protótipo funcional desenvolvido em React.

### 1.3. Estrutura do Relatório

O relatório segue as 6 etapas de Design Thinking propostas pela disciplina: (1) Identificação do Problema, (2) Pesquisa e Empatia, (3) Sessão de Ideação, (4) Seleção e Refinamento, (5) Descrição da Solução e (6) Prototipagem.

---

## 2. IDENTIFICAÇÃO DO PROBLEMA

### 2.1. O Problema

Quando um novo desenvolvedor ingressa em um time de software, ele enfrenta um período médio de 4 a 8 semanas até atingir produtividade plena. Este período é marcado por documentação desatualizada, conhecimento fragmentado entre membros do time, sobrecarga dos desenvolvedores seniores responsáveis pela mentoria informal, e ausência total de métricas objetivas de progresso.

### 2.2. Impacto

O problema gera consequências mensuráveis em múltiplas dimensões:

- **Financeiro:** O custo de onboarding representa 20-30% do salário anual de um desenvolvedor, incluindo tempo de mentoria e produtividade reduzida.
- **Produtividade:** A produtividade geral do time cai 15-25% durante o período de onboarding de um novo membro.
- **Retenção:** 33% dos novos contratados procuram outro emprego nos primeiros 6 meses quando a experiência de onboarding é negativa (Glassdoor Research).
- **Escala:** Com rotatividade média de 13,2% ao ano na indústria de tecnologia (LinkedIn), o problema é recorrente e se multiplica em empresas em crescimento.

### 2.3. Justificativa

O problema é universal (afeta empresas de todos os portes), recorrente (cada nova contratação o reativa), custoso (impacto direto em produtividade e retenção) e solucionável com tecnologias atuais. A ausência de soluções especializadas no mercado representa uma oportunidade significativa.

---

## 3. PESQUISA E EMPATIA

### 3.1. Análise Documental

Foram analisadas pesquisas de mercado e relatórios da indústria, incluindo o State of DevOps Report (DORA/Google), Stack Overflow Developer Survey 2025, e Glassdoor Research. Os dados confirmam que times com onboarding estruturado apresentam 2x mais frequência de deploy e 50% menos tempo de recuperação de falhas.

### 3.2. Personas

Foram construídas 3 personas representando os stakeholders principais do problema:

**Persona 1 — Lucas Silva (Dev Junior, 23 anos):** Recém-contratado em uma startup de fintech com um monorepo de 200k linhas. Sente-se perdido no código, tem medo de perguntar demais. Sua dor principal: *"Eu olho pra esse código e não faço ideia por onde começar."*

**Persona 2 — Marina Costa (Dev Sênior, 31 anos):** Pessoa de referência do time, interrompida 5-10 vezes por dia com perguntas de novos devs. Sua dor: *"Eu amo ajudar, mas não consigo entregar minhas próprias tarefas."*

**Persona 3 — Ricardo Mendes (Tech Lead, 35 anos):** Gerencia 8 devs e acaba de contratar 2 juniors. Não tem visibilidade real do progresso. Sua dor: *"Eu preciso de números, não de sensações."*

### 3.3. Mapas de Empatia

Para cada persona, foi construído um Mapa de Empatia mapeando: O que Pensa e Sente, O que Ouve, O que Vê, O que Fala e Faz, suas Dores e seus Ganhos desejados.

### 3.4. Jornada do Usuário

Foi mapeada a jornada de onboarding na situação atual (sem OnboardDev), evidenciando 7 fases desde o primeiro dia até a produtividade plena (semana 7-8), com emoções variando de ansiedade a alívio. Em contraste, a jornada ideal com OnboardDev reduz o processo para 2-3 semanas com emoções predominantemente positivas.

### 3.5. Insights Principais

1. A solução precisa ser visual e interativa — documentação estática não funciona
2. Autonomia é essencial — o dev quer aprender no seu ritmo, sem dependência
3. Métricas objetivas são necessárias para o gestor
4. A solução deve ser low-maintenance para não ficar desatualizada
5. Gamificação leve aumenta engajamento do público-alvo

---

## 4. SESSÃO DE IDEAÇÃO

### 4.1. Metodologia

A sessão de ideação foi conduzida em 90 minutos utilizando três técnicas complementares:

- **How Might We (HMW):** 7 perguntas reframe para direcionar o brainstorming
- **Brainstorming Livre:** Geração divergente de ideias sem julgamento
- **Crazy 8s:** 8 minutos para 8 esboços rápidos de interface

### 4.2. Resultados

Foram geradas **25 ideias** organizadas em 5 categorias:

- **Visualização do Código (5 ideias):** Mapa interativo, Code Explorer, Google Maps do código, diagramas automáticos, heatmap de complexidade
- **Aprendizado Guiado (5 ideias):** Trilhas progressivas, modo história, quizzes, tasks práticas, playlists de conteúdo
- **Documentação Inteligente (5 ideias):** Docs por IA, changelog narrativo, FAQ automático, chat com codebase, glossário vivo
- **Métricas e Gestão (5 ideias):** Dashboard de progresso, alertas de bloqueio, comparativos, timeline de atividades, painel do time
- **Gamificação (5 ideias):** Badges, streaks, leaderboard, modo explorador, celebrações visuais

### 4.3. Análise SWOT

Uma análise SWOT completa foi conduzida, identificando 6 forças (proposta clara, interface visual, métricas inéditas), 5 fraquezas (dependência de IA, multi-plataforma), 6 oportunidades (mercado em crescimento, trabalho remoto, nicho pouco explorado) e 5 ameaças (grandes players, IA genérica, resistência organizacional). Estratégias cruzadas SO, WO, ST e WT foram derivadas.

### 4.4. Mapa Mental

Foi construído um mapa mental abrangente do OnboardDev, cobrindo 6 dimensões: Problema, Público-Alvo, Funcionalidades Core, Tecnologias, Modelo de Negócio e Diferenciais, com conexões cruzadas entre os ramos.

---

## 5. SELEÇÃO E REFINAMENTO

### 5.1. Critérios de Seleção

As 25 ideias foram avaliadas em 5 critérios ponderados: Impacto no Problema (30%), Viabilidade Técnica (25%), Originalidade (20%), Experiência do Usuário (15%) e Escalabilidade (10%).

### 5.2. Matriz de Priorização

As ideias foram classificadas em quadrantes de Impacto × Esforço:
- **Fazer Primeiro (Alto Impacto, Baixo Esforço):** Mapa interativo, trilhas progressivas, dashboard, badges, tasks guiadas
- **Planejar (Alto Impacto, Alto Esforço):** Diagramas de sequência, Ask codebase, heatmap
- **Extras (Baixo Impacto, Baixo Esforço):** Modo explorador, celebrações, glossário
- **Descartar (Baixo Impacto, Alto Esforço):** Quizzes, FAQ automático, modo história

### 5.3. Funcionalidades Selecionadas

As 10 funcionalidades selecionadas foram organizadas em 3 tiers:

**Tier 1 (MVP):** Trilhas de Onboarding (score 9.05), Mapa Interativo (8.95), Dashboard de Progresso (8.50), Tasks Guiadas (8.35), Landing Page + Auth.

**Tier 2 (Importante):** Code Explorer com IA (8.30), Painel de Gestão do Time (7.85), Documentação por IA (7.65).

**Tier 3 (Nice-to-have):** Badges/Conquistas (7.15), Streaks (6.65), Timeline (6.70), Configurações.

### 5.4. Proposta de Valor

*"OnboardDev é a plataforma que transforma o onboarding de devs de semanas de confusão para dias de aprendizado estruturado — com mapas interativos, trilhas guiadas, documentação auto-gerada e métricas de progresso em tempo real."*

---

## 6. A SOLUÇÃO: OnboardDev

### 6.1. Visão do Produto

O OnboardDev é uma plataforma web composta por 11 módulos integrados que cobrem todo o ciclo de onboarding — desde a primeira visualização da arquitetura até a confirmação de produtividade plena pelo Tech Lead.

### 6.2. Módulos Principais

1. **Landing Page Institucional** — Apresentação do produto com hero section, features e CTA
2. **Autenticação** — Login simulado com modo demo para exploração
3. **Dashboard Principal** — Hub central com repositórios, métricas e atividades recentes
4. **Mapa Interativo da Arquitetura** — Diagrama visual navegável com módulos e conexões (feature diferencial)
5. **Trilhas de Onboarding** — Caminho estruturado de tarefas progressivas com pré-requisitos
6. **Detalhe da Tarefa** — Instruções, código de referência e objetivo de aprendizado
7. **Progresso do Desenvolvedor** — Gráficos, métricas, badges e heatmap de atividade
8. **Painel de Gestão do Time** — Visão do Tech Lead com alertas e métricas agregadas
9. **Documentação Gerada por IA** — Docs auto-geradas com API reference e exemplos
10. **Code Explorer** — Navegação pelo código com explicações contextuais
11. **Configurações** — Personalização da experiência

### 6.3. Diferenciais Competitivos

O OnboardDev é a **única solução no mercado** que integra visualização interativa da arquitetura + trilhas guiadas de aprendizado + documentação auto-gerada por IA + métricas objetivas de progresso em uma plataforma dedicada a onboarding de desenvolvedores.

---

## 7. PROTOTIPAGEM

### 7.1. Abordagem

O protótipo foi desenvolvido em duas fases: (1) geração inicial no Google Stitch para criação rápida das telas e (2) refinamento e desenvolvimento completo local em React + TypeScript com Vite.

### 7.2. Tecnologias

- **React 18+** com TypeScript para componentes tipados
- **Vite** como build tool para desenvolvimento rápido
- **React Router v6** para navegação entre páginas
- **Recharts** para gráficos e visualizações de dados
- **Lucide React** para ícones
- **CSS Modules** para estilização modular
- **localStorage** para persistência de dados mockados

### 7.3. Telas Implementadas

O protótipo inclui todas as 12 telas planejadas com navegação funcional, dados mockados realistas, design premium com dark mode, micro-animações e responsividade completa.

### 7.4. Dados de Demonstração

O protótipo vem pré-carregado com dados realistas simulando um projeto de e-commerce, incluindo: 4 trilhas de onboarding, 26 tarefas progressivas, 10 módulos de arquitetura, documentação de 5 módulos, e perfis de 4 desenvolvedores em diferentes estágios de onboarding.

---

## 8. CONCLUSÃO

### 8.1. Resultados Alcançados

O processo de Design Thinking aplicado permitiu identificar um problema real e relevante na indústria de software, investigá-lo em profundidade através de pesquisa e empatia, gerar 25 ideias por meio de sessões estruturadas de ideação, selecionar as mais promissoras com critérios objetivos, e materializá-las em um protótipo funcional.

O OnboardDev representa uma proposta inovadora que preenche uma lacuna clara no mercado de ferramentas para desenvolvedores, oferecendo uma experiência integrada de onboarding que nenhuma solução existente oferece atualmente.

### 8.2. Lições Aprendidas

1. **A empatia direciona a inovação:** As personas e jornadas de usuário foram fundamentais para priorizar funcionalidades que realmente resolvem dores reais
2. **Quantidade gera qualidade:** As 25 ideias do brainstorming — incluindo as "malucas" — geraram insights que refinaram a solução final
3. **Critérios objetivos evitam viés:** A matriz de priorização com scoring evitou que preferências pessoais dominassem a seleção
4. **Prototipar é validar:** A construção do protótipo revelou nuances que não eram visíveis na especificação teórica

### 8.3. Próximos Passos

Para evolução do OnboardDev além do escopo acadêmico:
- Desenvolvimento de backend com integração real à API do GitHub
- Implementação de análise de código com Large Language Models (LLMs)
- Validação com usuários reais em empresas parceiras
- Modelo de monetização SaaS com tier freemium

---

## REFERÊNCIAS

1. DORA Team / Google Cloud. *Accelerate State of DevOps Report 2025*. Google, 2025.
2. Stack Overflow. *Developer Survey 2025*. Stack Overflow, 2025.
3. Glassdoor. *The True Cost of a Bad Hire*. Glassdoor Economic Research, 2024.
4. LinkedIn. *Workforce Report: Tech Industry Turnover Trends*. LinkedIn, 2025.
5. Bureau of Labor Statistics. *Employee Tenure Summary*. U.S. Department of Labor, 2025.
6. Harvard Business Review. *Getting New Hires Up to Speed Quickly*. HBR, 2024.
7. GitLab. *The Remote Work Report 2025*. GitLab Inc., 2025.
8. Brown, T. *Design Thinking*. Harvard Business Review, 2008.
9. Ries, E. *The Lean Startup*. Crown Business, 2011.
10. Norman, D. *The Design of Everyday Things*. Basic Books, 2013.
