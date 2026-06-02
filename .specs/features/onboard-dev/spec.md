# OnboardDev — Specification

## Problem Statement

Quando um novo desenvolvedor entra em um time de software, ele enfrenta um período de onboarding que pode durar de 4 a 8 semanas até atingir produtividade plena. A documentação existente está frequentemente desatualizada, o conhecimento está fragmentado entre membros seniores do time, e não há um caminho estruturado de aprendizado. Isso resulta em perda de produtividade, frustração do novo dev, e sobrecarga nos devs seniores que precisam parar seu trabalho para mentorar.

## Goals

- [ ] Reduzir tempo de onboarding de 4-8 semanas para 1-2 semanas com trilhas guiadas
- [ ] Fornecer visualização clara da arquitetura do codebase em tempo real
- [ ] Criar trilhas de aprendizado progressivas e personalizadas
- [ ] Dar visibilidade ao Tech Lead sobre o progresso do onboarding

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Integração real com APIs do GitHub/GitLab | Protótipo acadêmico — dados mockados |
| Backend/servidor e banco de dados | Restrição de escopo — frontend-only |
| Análise real de código com LLMs | Complexidade e custo fora do escopo acadêmico |
| App mobile nativo | Foco em web application |
| Sistema de billing/pagamento | Não relevante para MVP acadêmico |
| Notificações push/email reais | Sem infraestrutura de backend |

---

## User Stories

### P1: Landing Page Institucional ⭐ MVP

**User Story**: Como um visitante, eu quero entender o que o OnboardDev faz e seus benefícios para que eu possa decidir se quero usar a plataforma.

**Why P1**: Primeira impressão do produto — essencial para demonstração acadêmica.

**Acceptance Criteria**:

1. WHEN visitante acessa a URL raiz THEN sistema SHALL exibir hero section com título, subtítulo e CTA
2. WHEN visitante rola a página THEN sistema SHALL exibir seção de features com ícones e descrições
3. WHEN visitante clica no CTA "Começar Gratuitamente" THEN sistema SHALL redirecionar para tela de login
4. WHEN visitante visualiza a página THEN sistema SHALL exibir design premium com animações suaves

**Independent Test**: Acessar `/` e ver a landing page completa com navegação funcional.

---

### P1: Autenticação Simulada ⭐ MVP

**User Story**: Como um usuário, eu quero fazer login na plataforma para acessar meus repositórios e trilhas de onboarding.

**Why P1**: Gate de acesso para todas as features internas.

**Acceptance Criteria**:

1. WHEN usuário clica em "Entrar com GitHub" THEN sistema SHALL simular autenticação e redirecionar ao dashboard
2. WHEN usuário clica em "Entrar como Demo" THEN sistema SHALL carregar dados de demonstração e redirecionar ao dashboard
3. WHEN usuário não autenticado tenta acessar rota protegida THEN sistema SHALL redirecionar para login
4. WHEN usuário clica em "Sair" THEN sistema SHALL limpar sessão e redirecionar para landing page

**Independent Test**: Clicar em "Entrar como Demo" e ser redirecionado ao dashboard com dados carregados.

---

### P1: Dashboard Principal ⭐ MVP

**User Story**: Como um desenvolvedor, eu quero ver uma visão geral dos meus repositórios e progresso de onboarding para saber rapidamente onde estou.

**Why P1**: Hub central de navegação — conecta todas as features.

**Acceptance Criteria**:

1. WHEN dev autenticado acessa o dashboard THEN sistema SHALL exibir cards dos repositórios conectados com progresso
2. WHEN dev visualiza o dashboard THEN sistema SHALL exibir métricas resumidas (trilhas completas, tarefas pendentes, tempo ativo)
3. WHEN dev clica em um repositório THEN sistema SHALL navegar para o mapa interativo daquele repositório
4. WHEN dev visualiza o dashboard THEN sistema SHALL exibir atividades recentes e próximas tarefas sugeridas

**Independent Test**: Fazer login e ver o dashboard com 2-3 repositórios de exemplo com dados de progresso.

---

### P1: Mapa Interativo da Arquitetura ⭐ MVP

**User Story**: Como um novo desenvolvedor, eu quero visualizar a arquitetura do codebase de forma interativa para entender rapidamente como o projeto está organizado.

**Why P1**: Feature diferencial — core value proposition do OnboardDev.

**Acceptance Criteria**:

1. WHEN dev acessa o mapa do repositório THEN sistema SHALL exibir diagrama visual com módulos do projeto e suas conexões
2. WHEN dev clica em um módulo THEN sistema SHALL expandir e mostrar detalhes (arquivos, responsabilidade, dependências)
3. WHEN dev passa o mouse sobre uma conexão THEN sistema SHALL destacar o fluxo de dados entre módulos
4. WHEN dev utiliza zoom/pan THEN sistema SHALL permitir navegação fluida pelo mapa
5. WHEN dev clica em "Ver Código" em um módulo THEN sistema SHALL navegar para o Code Explorer

**Independent Test**: Abrir o mapa de um repositório, clicar em módulos, ver detalhes expandidos e conexões.

---

### P1: Trilha de Onboarding ⭐ MVP

**User Story**: Como um novo desenvolvedor, eu quero seguir uma trilha estruturada de tarefas para aprender o codebase progressivamente, sem ficar perdido.

**Why P1**: Feature principal de engajamento — o "caminho" do onboarding.

**Acceptance Criteria**:

1. WHEN dev acessa uma trilha THEN sistema SHALL exibir lista sequencial de tarefas com status (pendente, em progresso, concluída)
2. WHEN dev clica em uma tarefa THEN sistema SHALL abrir detalhes com instruções, dicas e arquivos relacionados
3. WHEN dev marca uma tarefa como concluída THEN sistema SHALL atualizar progresso e desbloquear próxima tarefa
4. WHEN dev completa todas as tarefas de uma trilha THEN sistema SHALL exibir badge de conclusão
5. WHEN dev acessa uma tarefa bloqueada THEN sistema SHALL indicar qual pré-requisito falta completar

**Independent Test**: Abrir uma trilha, completar 2-3 tarefas sequenciais e ver o progresso atualizando.

---

### P1: Progresso do Desenvolvedor ⭐ MVP

**User Story**: Como um desenvolvedor, eu quero visualizar meu progresso e métricas de onboarding para saber o quanto já evolui e o que falta.

**Why P1**: Feedback loop — mantém motivação e dá visibilidade.

**Acceptance Criteria**:

1. WHEN dev acessa tela de progresso THEN sistema SHALL exibir gráfico de progresso geral (% completado)
2. WHEN dev visualiza métricas THEN sistema SHALL exibir: trilhas completadas, tarefas feitas, tempo investido, streak de dias
3. WHEN dev visualiza histórico THEN sistema SHALL exibir timeline de atividades recentes
4. WHEN dev atinge marcos (25%, 50%, 75%, 100%) THEN sistema SHALL exibir badges de conquista

**Independent Test**: Ver tela de progresso com gráficos preenchidos e pelo menos 2 badges.

---

### P2: Painel de Gestão do Time

**User Story**: Como um Tech Lead, eu quero acompanhar o progresso de onboarding de todos os novos devs do meu time para identificar gargalos e oferecer suporte.

**Why P2**: Importante para o valor do produto, mas não é core do MVP individual.

**Acceptance Criteria**:

1. WHEN tech lead acessa painel do time THEN sistema SHALL exibir lista de devs com progresso individual
2. WHEN tech lead clica em um dev THEN sistema SHALL exibir detalhes do progresso daquele dev
3. WHEN tech lead visualiza o painel THEN sistema SHALL exibir métricas agregadas (tempo médio de onboarding, taxa de conclusão)
4. WHEN um dev está parado há mais de 2 dias em uma tarefa THEN sistema SHALL exibir alerta visual

**Independent Test**: Acessar painel com 3-4 devs de exemplo e ver métricas e alertas.

---

### P2: Documentação Gerada por IA

**User Story**: Como um desenvolvedor, eu quero ler documentação auto-gerada dos módulos do código para não depender de docs desatualizadas.

**Why P2**: Diferencial forte, mas funcionalidade de IA será simulada.

**Acceptance Criteria**:

1. WHEN dev acessa documentação de um módulo THEN sistema SHALL exibir doc formatada com descrição, API, exemplos
2. WHEN dev visualiza doc THEN sistema SHALL indicar que foi "gerada por IA" com timestamp
3. WHEN dev navega entre módulos THEN sistema SHALL exibir breadcrumb e navegação lateral

**Independent Test**: Abrir docs de 2 módulos distintos e navegar entre eles.

---

### P2: Code Explorer

**User Story**: Como um novo desenvolvedor, eu quero navegar pelo código com explicações contextuais para entender o que cada parte faz sem precisar perguntar a alguém.

**Why P2**: Enriquece o onboarding mas pode ser simplificado no MVP.

**Acceptance Criteria**:

1. WHEN dev abre o Code Explorer THEN sistema SHALL exibir árvore de arquivos do repositório
2. WHEN dev clica em um arquivo THEN sistema SHALL exibir o código com syntax highlighting
3. WHEN dev passa o mouse sobre uma função/classe THEN sistema SHALL exibir tooltip com explicação gerada por IA
4. WHEN dev clica em "Explicar" THEN sistema SHALL exibir painel lateral com explicação detalhada

**Independent Test**: Navegar pela árvore, abrir um arquivo, ver tooltips em funções.

---

### P3: Configurações do Repositório

**User Story**: Como um Tech Lead, eu quero configurar as preferências de onboarding do meu repositório para personalizar a experiência dos novos devs.

**Why P3**: Nice-to-have — configurações padrão são suficientes para demo.

**Acceptance Criteria**:

1. WHEN admin acessa configurações THEN sistema SHALL exibir formulário com opções do repositório
2. WHEN admin altera configurações e salva THEN sistema SHALL persistir alterações (localStorage)

---

## Edge Cases

- WHEN usuário acessa rota inexistente THEN sistema SHALL exibir página 404 com link para dashboard
- WHEN não há repositórios conectados THEN sistema SHALL exibir empty state com CTA para adicionar
- WHEN uma trilha não tem tarefas THEN sistema SHALL exibir mensagem "Em construção"
- WHEN dados do localStorage estão corrompidos THEN sistema SHALL resetar para dados padrão
- WHEN dev tenta completar tarefa bloqueada THEN sistema SHALL exibir toast explicando o bloqueio

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
|----------------|-------|-------|--------|
| OBD-01 | P1: Landing Page | Design | Pending |
| OBD-02 | P1: Landing Page — Features Section | Design | Pending |
| OBD-03 | P1: Landing Page — CTA Navigation | Design | Pending |
| OBD-04 | P1: Autenticação — Login Simulado | Design | Pending |
| OBD-05 | P1: Autenticação — Demo Mode | Design | Pending |
| OBD-06 | P1: Autenticação — Route Protection | Design | Pending |
| OBD-07 | P1: Dashboard — Repositórios Cards | Design | Pending |
| OBD-08 | P1: Dashboard — Métricas Resumidas | Design | Pending |
| OBD-09 | P1: Dashboard — Atividades Recentes | Design | Pending |
| OBD-10 | P1: Mapa — Diagrama Visual | Design | Pending |
| OBD-11 | P1: Mapa — Expandir Módulo | Design | Pending |
| OBD-12 | P1: Mapa — Conexões e Fluxo | Design | Pending |
| OBD-13 | P1: Trilha — Lista de Tarefas | Design | Pending |
| OBD-14 | P1: Trilha — Detalhes da Tarefa | Design | Pending |
| OBD-15 | P1: Trilha — Progresso e Unlock | Design | Pending |
| OBD-16 | P1: Trilha — Badge de Conclusão | Design | Pending |
| OBD-17 | P1: Progresso — Gráfico Geral | Design | Pending |
| OBD-18 | P1: Progresso — Métricas | Design | Pending |
| OBD-19 | P1: Progresso — Badges | Design | Pending |
| OBD-20 | P2: Time — Lista de Devs | Design | Pending |
| OBD-21 | P2: Time — Métricas Agregadas | Design | Pending |
| OBD-22 | P2: Time — Alertas | Design | Pending |
| OBD-23 | P2: Docs IA — Doc Formatada | Design | Pending |
| OBD-24 | P2: Code Explorer — Árvore | Design | Pending |
| OBD-25 | P2: Code Explorer — Tooltips IA | Design | Pending |
| OBD-26 | P3: Configurações | Design | Pending |

**ID format:** `OBD-[NUMBER]`  
**Status values:** Pending → In Design → In Tasks → Implementing → Verified  
**Coverage:** 26 total, 0 mapped to tasks, 26 unmapped ⚠️

---

## Success Criteria

- [ ] Usuário consegue navegar por todas as telas sem erros
- [ ] Trilha de onboarding é completável do início ao fim
- [ ] Dashboard exibe dados realistas e coerentes
- [ ] Mapa interativo permite explorar módulos e conexões
- [ ] Design é premium, responsivo e com micro-animações
- [ ] Tempo de carregamento < 2 segundos
