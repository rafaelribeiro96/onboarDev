# Etapa 3 — Sessão de Ideação

## Objetivo

Realizar uma sessão estruturada de brainstorming utilizando técnicas de ideação estudadas na disciplina, com o objetivo de gerar o maior número possível de ideias para resolver o problema de onboarding ineficiente de desenvolvedores em times de software.

---

## 3.1. Preparação da Sessão

**Participantes:** Todos os integrantes do grupo  
**Duração:** 90 minutos  
**Ferramentas:** Miro (quadro virtual colaborativo)  
**Regras do brainstorming:**
- Sem julgamento — toda ideia é válida nesta fase
- Quantidade > Qualidade — queremos volume
- Construir sobre ideias dos outros (Sim, e...)
- Pensar de forma "wild" — ideias malucas são bem-vindas
- Uma conversa de cada vez
- Ser visual — usar desenhos e esquemas

---

## 3.2. Técnica 1 — How Might We (HMW)

Antes de gerar ideias, reframe os problemas como perguntas "Como poderíamos...":

| # | How Might We |
|---|-------------|
| HMW-1 | Como poderíamos fazer um dev entender a arquitetura de um projeto em minutos, não semanas? |
| HMW-2 | Como poderíamos eliminar a dependência de devs seniores para o onboarding? |
| HMW-3 | Como poderíamos tornar a documentação auto-atualizável? |
| HMW-4 | Como poderíamos dar ao Tech Lead visibilidade em tempo real do progresso do onboarding? |
| HMW-5 | Como poderíamos transformar o onboarding em uma experiência prazerosa em vez de frustrante? |
| HMW-6 | Como poderíamos garantir que o novo dev aprenda as convenções do time antes de errar? |
| HMW-7 | Como poderíamos escalar o onboarding sem escalar o custo de mentoria? |

---

## 3.3. Técnica 2 — Brainstorming Livre (Divergência)

Cada integrante gerou ideias livremente respondendo aos HMWs. Todas as ideias foram registradas:

### Categoria A — Visualização e Compreensão do Código

| # | Ideia | HMW Relacionado |
|---|-------|----------------|
| A1 | **Mapa interativo da arquitetura** — Diagrama visual navegável que mostra módulos, conexões e fluxos de dados do repositório | HMW-1 |
| A2 | **Code Explorer com explicações IA** — Navegar pelo código com tooltips que explicam o que cada função/classe faz | HMW-1, HMW-2 |
| A3 | **"Google Maps" do código** — Visão em zoom: macro (arquitetura) → médio (módulos) → micro (funções) | HMW-1 |
| A4 | **Diagramas de sequência automáticos** — Gerar diagramas de fluxo de execução a partir do código | HMW-1, HMW-3 |
| A5 | **Heatmap de complexidade** — Mapa de calor mostrando quais partes do código são mais complexas/críticas | HMW-1 |

### Categoria B — Trilhas e Aprendizado Guiado

| # | Ideia | HMW Relacionado |
|---|-------|----------------|
| B1 | **Trilhas de onboarding progressivas** — Sequência de tarefas que guiam o dev dos conceitos mais simples aos mais complexos | HMW-5, HMW-6 |
| B2 | **"Modo história"** — Narrar a história do projeto: por que foi criado, decisões tomadas, evolução da arquitetura | HMW-1, HMW-5 |
| B3 | **Quizzes interativos** — Perguntas sobre o código que testam entendimento após cada módulo | HMW-6 |
| B4 | **Tasks práticas guiadas** — Tarefas reais do projeto simplificadas com dicas e guardrails para o novo dev | HMW-5, HMW-7 |
| B5 | **Playlists de aprendizado** — Conteúdo curado (docs, vídeos, código) organizado por tema/módulo | HMW-2, HMW-7 |

### Categoria C — Documentação Inteligente

| # | Ideia | HMW Relacionado |
|---|-------|----------------|
| C1 | **Docs geradas por IA do código-fonte** — IA analisa o código e gera documentação automaticamente | HMW-3 |
| C2 | **Changelog narrativo** — Transformar git log em uma "história" legível das mudanças recentes | HMW-3 |
| C3 | **FAQ automático** — Coletar perguntas frequentes de novos devs e criar FAQ auto-atualizada | HMW-2, HMW-3 |
| C4 | **"Ask the codebase"** — Chat com IA que responde perguntas sobre o código do projeto | HMW-2 |
| C5 | **Glossário vivo do projeto** — Lista de termos, conceitos e siglas usadas no projeto, auto-gerada | HMW-3, HMW-6 |

### Categoria D — Métricas e Gestão

| # | Ideia | HMW Relacionado |
|---|-------|----------------|
| D1 | **Dashboard de progresso do onboarding** — Métricas visuais: % completo, tempo investido, streaks | HMW-4 |
| D2 | **Alertas de bloqueio** — Notificar Tech Lead quando dev está parado há muito tempo em uma tarefa | HMW-4 |
| D3 | **Comparativo de onboarding** — Benchmark: como este dev se compara com onboardings anteriores | HMW-4 |
| D4 | **Timeline de atividades** — Histórico visual de tudo que o dev fez durante o onboarding | HMW-4 |
| D5 | **Painel do time** — Visão consolidada de todos os devs em onboarding simultâneo | HMW-4, HMW-7 |

### Categoria E — Gamificação e Engajamento

| # | Ideia | HMW Relacionado |
|---|-------|----------------|
| E1 | **Badges e conquistas** — Premiações por marcos alcançados (primeiro PR, módulo explorado, etc.) | HMW-5 |
| E2 | **Streak de dias consecutivos** — Motivar consistência com contagem de dias ativos | HMW-5 |
| E3 | **Leaderboard do time** — Ranking gamificado entre devs em onboarding | HMW-5 |
| E4 | **"Modo explorador"** — Desbloquear áreas do mapa conforme o dev avança | HMW-5 |
| E5 | **Celebrações visuais** — Animações comemorativas ao completar trilhas/módulos | HMW-5 |

**Total de ideias geradas: 25**

---

## 3.4. Técnica 3 — Crazy 8s (Ideação Rápida)

Cada integrante teve 8 minutos para esboçar 8 telas/conceitos de interface. As melhores ideias visuais:

1. **Dashboard com cards tipo Trello** — Cada repositório como um card com barra de progresso
2. **Mapa com nós clicáveis** — Estilo grafo de nodes que expandem ao clicar
3. **Trilha estilo "road map visual"** — Caminho com checkpoints, tipo jogo de tabuleiro
4. **Split view: código + explicação** — Tela dividida com código à esquerda e explicação IA à direita
5. **Onboarding wizard** — Passo a passo inicial com perguntas sobre nível e preferências
6. **Notificação de progresso tipo app fitness** — "Você completou 3 módulos hoje! 🎉"
7. **Sidebar com árvore de módulos** — Navegação tipo file explorer com badges de status
8. **Timeline vertical** — Histórico de atividades com ícones e timestamps

---

## 3.5. Agrupamento por Afinidade

Após a sessão de divergência, agrupamos as ideias por afinidade temática:

```
┌─────────────────────────────────────────────────────────────┐
│                    OnboardDev - Grupos                       │
├──────────────────┬──────────────────┬───────────────────────┤
│  VISUALIZAÇÃO    │  APRENDIZADO     │  GESTÃO & MÉTRICAS   │
│  DO CÓDIGO       │  GUIADO          │                       │
│                  │                  │                       │
│  • Mapa interativo│ • Trilhas prog. │  • Dashboard progresso│
│  • Code Explorer │  • Tasks guiadas │  • Alertas bloqueio  │
│  • Google Maps   │  • Quizzes       │  • Painel do time    │
│  • Heatmap       │  • Playlists     │  • Comparativo       │
│  • Diag. sequência│ • Modo história │  • Timeline          │
├──────────────────┼──────────────────┼───────────────────────┤
│  DOCUMENTAÇÃO    │  GAMIFICAÇÃO     │                       │
│  INTELIGENTE     │                  │                       │
│                  │                  │                       │
│  • Docs por IA   │  • Badges        │                       │
│  • Changelog     │  • Streaks       │                       │
│  • FAQ auto      │  • Leaderboard   │                       │
│  • Ask codebase  │  • Modo explorador│                      │
│  • Glossário     │  • Celebrações   │                       │
└──────────────────┴──────────────────┴───────────────────────┘
```

---

## 3.6. Conclusão da Sessão

A sessão de ideação gerou **25 ideias** organizadas em **5 categorias**. As ideias mais promissoras — que combinam alto impacto com viabilidade técnica — serão priorizadas na etapa de Seleção e Refinamento (Etapa 6). O agrupamento por afinidade revelou que a solução ideal deve integrar pelo menos uma ideia forte de cada categoria para entregar valor completo ao usuário.
