# Etapa 7 — Descrição Completa da Solução: OnboardDev

## Visão Geral

O **OnboardDev** é uma plataforma web inteligente que transforma o processo de onboarding de novos desenvolvedores em times de software. Através de mapas interativos da arquitetura do código, trilhas de aprendizado progressivas, documentação auto-gerada por IA e dashboards de progresso, o OnboardDev reduz o tempo de integração de novos membros de 4-8 semanas para 1-2 semanas.

---

## Funcionalidades Detalhadas por Módulo

### Módulo 1 — Landing Page Institucional

**Objetivo:** Apresentar o produto, seus benefícios e converter visitantes em usuários.

| Elemento | Descrição |
|----------|-----------|
| **Hero Section** | Título impactante, subtítulo com proposta de valor, CTA "Começar Gratuitamente", ilustração/animação do produto |
| **Seção de Problemas** | 3-4 cards mostrando os problemas que o OnboardDev resolve com estatísticas |
| **Seção de Features** | Cards interativos com ícones animados para cada funcionalidade principal |
| **Seção "Como Funciona"** | 3 passos simples: Conecte → Configure → Onboard |
| **Seção de Depoimentos** | Quotes fictícias de Tech Leads e Devs satisfeitos |
| **Footer** | Links, redes sociais, contato |

### Módulo 2 — Autenticação

**Objetivo:** Permitir acesso à plataforma de forma simplificada.

| Funcionalidade | Descrição |
|---------------|-----------|
| **Login com GitHub** | Botão simulado de OAuth com GitHub (redireciona direto ao dashboard) |
| **Entrar como Demo** | Carrega dados de demonstração completos para exploração |
| **Registro** | Formulário simples (nome, email, senha) — salva em localStorage |
| **Proteção de Rotas** | Rotas internas só acessíveis com sessão ativa |

### Módulo 3 — Dashboard Principal

**Objetivo:** Hub central com visão geral de repositórios e progresso.

| Componente | Dados Exibidos |
|-----------|---------------|
| **Cards de Repositórios** | Nome, linguagem, % de onboarding completo, último acesso |
| **Métricas Resumidas** | Trilhas completas, tarefas pendentes, tempo total investido, streak atual |
| **Atividades Recentes** | Timeline com últimas ações (tarefa completada, módulo explorado, badge conquistado) |
| **Próximas Tarefas** | Sugestões inteligentes baseadas no progresso atual |
| **Gráfico de Evolução** | Linha do tempo mostrando progresso semanal |

### Módulo 4 — Mapa Interativo da Arquitetura

**Objetivo:** Visualizar a estrutura do codebase de forma interativa e intuitiva.

| Funcionalidade | Descrição |
|---------------|-----------|
| **Diagrama de Módulos** | Visualização tipo grafo com nós representando módulos/pacotes do projeto |
| **Conexões** | Linhas entre módulos mostrando dependências e fluxo de dados |
| **Clique para Expandir** | Ao clicar em um módulo, expande mostrando arquivos, classes e responsabilidades |
| **Hover com Preview** | Mouse sobre conexão mostra descrição do relacionamento |
| **Zoom e Pan** | Navegação fluida com zoom in/out e arrastar |
| **Legenda de Cores** | Cores indicam tipo (frontend, backend, utils, tests, config) |
| **Link para Code Explorer** | De qualquer módulo, navegar diretamente para o código |

**Dados de Exemplo (Mock):**
O mapa simula um projeto de e-commerce com módulos: Auth, Products, Cart, Checkout, Payment, Notifications, Admin, API Gateway, Database, Utils.

### Módulo 5 — Trilhas de Onboarding

**Objetivo:** Guiar o dev por um caminho estruturado de aprendizado do codebase.

| Funcionalidade | Descrição |
|---------------|-----------|
| **Lista de Trilhas** | Trilhas disponíveis para o repositório (ex: "Fundamentos", "Fluxo de Compra", "Sistema de Auth") |
| **Progresso Visual** | Barra de progresso e contagem de tarefas em cada trilha |
| **Tarefas Sequenciais** | Lista de tarefas com status: 🔒 Bloqueada, ⬜ Pendente, 🔄 Em Progresso, ✅ Concluída |
| **Pré-requisitos** | Tarefas bloqueadas indicam qual pré-requisito falta |
| **Badge de Conclusão** | Ao completar 100% da trilha, recebe badge visual |
| **Estimativa de Tempo** | Cada tarefa tem tempo estimado (ex: "~15 min") |

**Trilhas de Exemplo (Mock):**
1. **Fundamentos do Projeto** (8 tarefas, ~2h) — Configuração, arquitetura geral, convenções
2. **Fluxo de Compra** (6 tarefas, ~1.5h) — Cart → Checkout → Payment
3. **Sistema de Autenticação** (5 tarefas, ~1h) — Login, JWT, middleware de auth
4. **API e Integrações** (7 tarefas, ~2h) — REST API, middlewares, serviços externos

### Módulo 6 — Detalhe da Tarefa

**Objetivo:** Fornecer todas as informações necessárias para o dev completar uma tarefa de aprendizado.

| Componente | Conteúdo |
|-----------|----------|
| **Título e Descrição** | O que o dev precisa fazer/entender |
| **Objetivo de Aprendizado** | O que o dev deve saber ao final |
| **Arquivos Relacionados** | Lista de arquivos que a tarefa envolve, com links para o Code Explorer |
| **Instruções Passo a Passo** | Guia detalhado com dicas e explicações |
| **Dica Contextual** | Tip colapsável com informação adicional |
| **Código de Referência** | Trechos de código relevantes com syntax highlighting |
| **Botão "Concluir"** | Marca a tarefa como concluída e atualiza progresso |
| **Navegação** | Botões "Anterior" e "Próxima Tarefa" |

### Módulo 7 — Progresso do Desenvolvedor

**Objetivo:** Visualizar métricas individuais de evolução no onboarding.

| Componente | Dados |
|-----------|-------|
| **Progresso Geral** | Donut chart com % total de onboarding completo |
| **Trilhas** | Cards com progresso individual por trilha |
| **Métricas Numéricas** | Tarefas completadas, módulos explorados, tempo investido, dias ativos |
| **Streak** | Contador de dias consecutivos com atividade |
| **Badges** | Grid de badges conquistados (com os não conquistados em cinza) |
| **Gráfico de Atividade** | Heatmap estilo GitHub (contribuições por dia) |
| **Timeline** | Lista cronológica de atividades recentes |

### Módulo 8 — Painel de Gestão do Time (Visão Tech Lead)

**Objetivo:** Dar visibilidade ao gestor sobre o onboarding de todos os devs.

| Componente | Dados |
|-----------|-------|
| **Lista de Devs** | Cards com avatar, nome, data de entrada, % progresso, status (on track/atrasado/parado) |
| **Métricas Agregadas** | Tempo médio de onboarding, taxa de conclusão, devs ativos, devs bloqueados |
| **Alertas** | Badges vermelhos em devs parados há 2+ dias em uma tarefa |
| **Detalhes Individual** | Clique em um dev para ver seu progresso detalhado |
| **Comparativo** | Gráfico comparando velocidade de onboarding entre devs |

### Módulo 9 — Documentação Gerada por IA

**Objetivo:** Fornecer documentação auto-gerada e sempre atualizada dos módulos do projeto.

| Componente | Conteúdo |
|-----------|----------|
| **Navegação Lateral** | Sidebar com lista de módulos documentados |
| **Descrição do Módulo** | Texto gerado explicando propósito e responsabilidade |
| **API Reference** | Lista de funções/métodos com parâmetros e retornos |
| **Exemplos de Uso** | Trechos de código mostrando como usar o módulo |
| **Dependências** | Lista de dependências internas e externas |
| **Última Atualização** | Timestamp indicando quando a doc foi gerada/atualizada |
| **Badge "Gerado por IA"** | Indicador visual de que o conteúdo é auto-gerado |

### Módulo 10 — Code Explorer

**Objetivo:** Navegar pelo código do repositório com explicações contextuais.

| Componente | Funcionalidade |
|-----------|---------------|
| **Árvore de Arquivos** | Sidebar com estrutura de pastas/arquivos do projeto |
| **Visualizador de Código** | Área principal com código renderizado e syntax highlighting |
| **Tooltips de Explicação** | Hover sobre função/classe mostra explicação gerada por IA |
| **Painel de Explicação** | Sidebar direita com explicação detalhada ao clicar "Explicar" |
| **Breadcrumb** | Navegação hierárquica do caminho do arquivo |
| **Busca** | Campo de busca para encontrar arquivos e funções |

### Módulo 11 — Configurações

**Objetivo:** Permitir personalização da experiência de onboarding.

| Componente | Opções |
|-----------|--------|
| **Perfil** | Nome, avatar, role |
| **Repositório** | Nome, descrição, linguagem principal |
| **Preferências** | Tema (dark/light), idioma |
| **Notificações** | Ativar/desativar lembretes |

---

## Fluxos de Uso Principais

### Fluxo 1 — Primeiro Acesso do Dev Junior

```
Landing Page → Entrar como Demo → Dashboard → Mapa Interativo
→ Explorar módulos → Iniciar Trilha "Fundamentos" → Completar tarefas
→ Ver progresso → Ganhar badges → Continuar próxima trilha
```

### Fluxo 2 — Acompanhamento do Tech Lead

```
Login → Dashboard → Painel do Time → Ver lista de devs
→ Identificar dev bloqueado → Clicar no dev → Ver detalhes
→ Entender onde está travado → Tomar ação
```

### Fluxo 3 — Dev Explorando o Código

```
Dashboard → Selecionar Repositório → Mapa Interativo → Clicar em módulo
→ "Ver Código" → Code Explorer → Navegar pelos arquivos
→ Hover em função → Ver tooltip IA → Clicar "Explicar" → Ler explicação detalhada
```

---

## Diferenciais Competitivos

| Aspecto | Soluções Atuais | OnboardDev |
|---------|----------------|------------|
| **Visualização** | Documentação textual estática | Mapa interativo navegável |
| **Aprendizado** | "Leia o README" | Trilhas progressivas com tarefas |
| **Documentação** | Manual, desatualiza rápido | Auto-gerada por IA, sempre atual |
| **Progresso** | "Acho que tá indo bem" | Métricas objetivas com gráficos |
| **Mentoria** | Dependente de 1-2 seniores | Automatizada e escalável |
| **Engajamento** | Nenhum | Badges, streaks, celebrações |

---

## Análise de Concorrentes

| Concorrente | O que faz | Diferença do OnboardDev |
|------------|-----------|------------------------|
| **Swimm** | Documentação acoplada ao código | Foca apenas em docs, sem trilhas ou mapa interativo |
| **Backstage (Spotify)** | Catálogo de serviços internos | Developer portal genérico, sem onboarding personalizado |
| **Notion/Confluence** | Wiki genérica | Não é específica para devs, sem integração com código |
| **GitHub Copilot** | IA para escrever código | Ajuda a escrever, não a entender o código existente |
| **CodeSee** | Mapas visuais de código | Mais próximo, mas sem trilhas de onboarding e métricas |

O OnboardDev se diferencia por ser a **única solução que integra visualização interativa + trilhas guiadas + documentação IA + métricas de progresso** em uma plataforma específica para onboarding de desenvolvedores.
