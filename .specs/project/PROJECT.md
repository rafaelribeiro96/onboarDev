# OnboardDev

**Vision:** Uma plataforma inteligente que transforma o processo de onboarding de novos desenvolvedores em times de software — substituindo semanas de confusão e documentação desatualizada por trilhas interativas, mapas visuais de código e mentoria guiada por IA.

**For:** Desenvolvedores recém-chegados a projetos de software, Tech Leads e gestores de engenharia que precisam integrar novos membros rapidamente.

**Solves:** O onboarding de novos devs em projetos existentes é lento (2-8 semanas), improdutivo e depende de documentação frequentemente desatualizada. O conhecimento está fragmentado na cabeça de pessoas específicas, criando gargalos e single points of failure.

## Goals

- Reduzir o tempo de onboarding de novos desenvolvedores de 4-8 semanas para 1-2 semanas
- Eliminar a dependência de documentação desatualizada ao gerar documentação viva a partir do código
- Democratizar o conhecimento do codebase, eliminando silos de informação
- Fornecer métricas objetivas de progresso do onboarding para Tech Leads

## Tech Stack

**Core:**

- Framework: React 18+ com Vite
- Language: TypeScript 5+
- Styling: CSS Modules / Vanilla CSS
- Routing: React Router v6

**Key dependencies:**

- Recharts (dashboards e visualizações)
- Lucide React (ícones)
- localStorage (persistência de dados mockados)
- React Markdown (renderização de docs)

## Scope

**v1 includes:**

- Landing page institucional
- Sistema de autenticação simulado (demo mode)
- Dashboard com visão geral de repositórios conectados
- Mapa interativo da arquitetura do código (visualização de módulos)
- Trilhas de onboarding personalizadas com tarefas progressivas
- Sistema de progresso e métricas do desenvolvedor
- Painel de gestão do time (visão do Tech Lead)
- Documentação gerada por IA (simulada com dados mockados)
- Code Explorer com explicações contextuais

**Explicitly out of scope:**

- Integração real com GitHub/GitLab API
- Backend/servidor (protótipo 100% frontend)
- Análise real de código com IA/LLMs
- Notificações push/email
- Sistema de pagamento/billing
- App mobile nativo

## Constraints

- Timeline: Entrega até 05/06/2026 (4 dias)
- Technical: Protótipo frontend-only com dados mockados, sem backend real
- Resources: Equipe acadêmica (projeto final de disciplina)
- Academic: Deve seguir as 6 etapas de Design Thinking exigidas pela disciplina
