# Etapa 6 — Seleção e Refinamento da Ideia

## Objetivo

Definir critérios claros de seleção, aplicar uma matriz de priorização para escolher a melhor combinação de funcionalidades dentre as 25 ideias geradas na sessão de ideação, e refinar a ideia escolhida com detalhamento de funcionalidades e público-alvo.

---

## 6.1. Critérios de Seleção

Para selecionar as melhores ideias, definimos 5 critérios com pesos proporcionais à sua importância:

| Critério | Peso | Descrição |
|----------|------|-----------|
| **Impacto no Problema** | 30% | O quanto a ideia resolve diretamente a dor do onboarding? |
| **Viabilidade Técnica** | 25% | É possível implementar como protótipo funcional no prazo? |
| **Originalidade** | 20% | O quanto a ideia é inovadora em relação a soluções existentes? |
| **Experiência do Usuário** | 15% | O quanto melhora a experiência do dev durante o onboarding? |
| **Escalabilidade** | 10% | A ideia pode ser escalada para diferentes times/projetos? |

---

## 6.2. Matriz de Priorização (Impacto × Esforço)

Classificamos as 25 ideias geradas em um quadrante de Impacto × Esforço:

```
                        IMPACTO ALTO
                             │
     ┌───────────────────────┼───────────────────────┐
     │                       │                       │
     │   🎯 FAZER PRIMEIRO   │   📋 PLANEJAR        │
     │   (Alto Impacto,      │   (Alto Impacto,      │
     │    Baixo Esforço)     │    Alto Esforço)       │
     │                       │                       │
     │  • A1 Mapa Interativo │  • A4 Diag. Sequência │
     │  • B1 Trilhas Progr.  │  • C4 Ask Codebase    │
     │  • D1 Dashboard Progr.│  • A5 Heatmap Compl.  │
     │  • E1 Badges          │  • D3 Comparativo     │
     │  • B4 Tasks Guiadas   │  • E3 Leaderboard     │
     │  • D4 Timeline        │                       │
     │  • E2 Streaks         │                       │
     │                       │                       │
ESFORÇO ─────────────────────┼─────────────────────── ESFORÇO
BAIXO                        │                       ALTO
     │                       │                       │
     │   ✅ EXTRAS           │   ❌ DESCARTAR        │
     │   (Baixo Impacto,     │   (Baixo Impacto,     │
     │    Baixo Esforço)     │    Alto Esforço)       │
     │                       │                       │
     │  • E4 Modo Explorador │  • B3 Quizzes         │
     │  • E5 Celebrações     │  • C3 FAQ Automático  │
     │  • C5 Glossário       │  • B2 Modo História   │
     │  • C2 Changelog       │                       │
     │  • B5 Playlists       │                       │
     │                       │                       │
     └───────────────────────┼───────────────────────┘
                             │
                        IMPACTO BAIXO
```

### Ideias não classificadas (dependem de backend):
- A2 (Code Explorer com IA) → **Incluir com dados simulados** (alto impacto visual)
- C1 (Docs por IA) → **Incluir com dados simulados** (diferencial forte)
- D2 (Alertas de bloqueio) → **Incluir visual** (baixo esforço com dados mock)
- D5 (Painel do time) → **Incluir** (essencial para persona do Tech Lead)

---

## 6.3. Avaliação das Top 10 Ideias

| # | Ideia | Impacto (30%) | Viabilidade (25%) | Originalidade (20%) | UX (15%) | Escala (10%) | **Score** |
|---|-------|:---:|:---:|:---:|:---:|:---:|:---:|
| A1 | Mapa Interativo da Arquitetura | 10 | 7 | 10 | 9 | 8 | **8.95** |
| B1 | Trilhas de Onboarding Progressivas | 10 | 8 | 8 | 10 | 9 | **9.05** |
| D1 | Dashboard de Progresso | 9 | 9 | 7 | 8 | 9 | **8.50** |
| A2 | Code Explorer com Explicações IA | 9 | 6 | 10 | 9 | 7 | **8.30** |
| C1 | Documentação Gerada por IA | 8 | 6 | 9 | 7 | 8 | **7.65** |
| B4 | Tasks Práticas Guiadas | 9 | 8 | 7 | 9 | 8 | **8.35** |
| D5 | Painel de Gestão do Time | 8 | 8 | 7 | 7 | 9 | **7.85** |
| E1 | Badges e Conquistas | 6 | 9 | 6 | 8 | 8 | **7.15** |
| E2 | Streak de Dias Consecutivos | 5 | 10 | 5 | 7 | 8 | **6.65** |
| D4 | Timeline de Atividades | 6 | 9 | 5 | 7 | 7 | **6.70** |

**Notas:** Escala de 1-10 para cada critério. Score = soma ponderada.

---

## 6.4. Funcionalidades Selecionadas para o MVP

Com base na matriz de priorização, selecionamos as funcionalidades que compõem o produto OnboardDev:

### Tier 1 — Core (P1 - MVP Obrigatório)

| Funcionalidade | Score | Justificativa |
|---------------|:-----:|--------------|
| **Trilhas de Onboarding Progressivas** | 9.05 | Maior score; core do produto; define a experiência |
| **Mapa Interativo da Arquitetura** | 8.95 | Diferencial visual principal; nenhum concorrente tem |
| **Dashboard de Progresso** | 8.50 | Feedback loop essencial; atende devs e gestores |
| **Tasks Práticas Guiadas** | 8.35 | Extensão natural das trilhas; learning by doing |
| **Landing Page + Auth** | — | Necessário para demo funcional |

### Tier 2 — Importante (P2)

| Funcionalidade | Score | Justificativa |
|---------------|:-----:|--------------|
| **Code Explorer com IA** | 8.30 | Diferencial forte; dados simulados demonstram conceito |
| **Painel de Gestão do Time** | 7.85 | Atende persona do Tech Lead; visão gerencial |
| **Documentação por IA** | 7.65 | Complementa o code explorer; demonstra visão de futuro |

### Tier 3 — Nice-to-have (P3)

| Funcionalidade | Score | Justificativa |
|---------------|:-----:|--------------|
| **Badges e Conquistas** | 7.15 | Gamificação leve; fácil de implementar |
| **Streaks** | 6.65 | Complementa badges; motivação contínua |
| **Timeline de Atividades** | 6.70 | Histórico visual; valor para revisão |
| **Configurações** | — | Personalização básica |

---

## 6.5. Público-Alvo Definido

### Público Primário
**Desenvolvedores Juniores e Plenos** (23-30 anos) recém-contratados ou transferidos entre times em empresas de software de médio e grande porte, que precisam aprender um codebase existente de forma rápida e estruturada.

### Público Secundário
**Tech Leads e Engineering Managers** (28-40 anos) que gerenciam times com rotatividade e precisam de visibilidade e padronização no processo de onboarding.

### Público Terciário
**Desenvolvedores Seniores** (28-38 anos) que atuam como mentores informais e buscam ferramentas que reduzam sua carga de mentoria manual.

---

## 6.6. Proposta de Valor Refinada

> **OnboardDev** é uma plataforma inteligente de onboarding para desenvolvedores que transforma o processo de integração de novos membros ao time — de semanas de confusão para dias de aprendizado estruturado.

### Para o Dev Junior/Pleno:
*"Entenda qualquer codebase em dias, não semanas. Siga trilhas guiadas, explore o código com explicações contextuais, e acompanhe seu progresso em tempo real."*

### Para o Tech Lead:
*"Tenha visibilidade total do onboarding do seu time. Métricas objetivas, alertas de bloqueio, e um processo padronizado que escala sem aumentar custos."*

### Para a Empresa:
*"Reduza o tempo de onboarding em 75% e o custo em 60%. ROI demonstrável desde o primeiro mês."*

---

## 6.7. Conclusão

A seleção baseada em critérios objetivos e matriz de priorização resultou em um produto com **10 funcionalidades** organizadas em 3 tiers de prioridade. O core do produto (Tier 1) combina as 4 ideias de maior score — trilhas progressivas, mapa interativo, dashboard de progresso e tasks guiadas — que juntas entregam a experiência completa de onboarding que nenhuma solução no mercado oferece atualmente.
