# 🎯 PROMPT COMPLETO PARA GOOGLE STITCH — OnboardDev

---

## INSTRUÇÕES DE USO

Copie o prompt abaixo inteiramente e cole no Google Stitch. Ele contém todas as especificações para gerar o protótipo completo do OnboardDev.

---

## PROMPT

```
Crie um aplicativo web completo chamado "OnboardDev" — uma plataforma inteligente de onboarding para desenvolvedores de software. O app deve ser construído em React com TypeScript, usar Vite como build tool, React Router para navegação, e ter um design premium com dark mode como tema principal.

## IDENTIDADE VISUAL

- Tema principal: Dark mode (background #0f0f23, cards #1a1a3e, surface #16162e)
- Cor primária: Azul elétrico (#6366f1 — Indigo 500)
- Cor secundária: Roxo (#8b5cf6 — Violet 500) 
- Cor de acento: Ciano (#06b6d4 — Cyan 500)
- Cor de sucesso: Verde (#10b981 — Emerald 500)
- Cor de alerta: Âmbar (#f59e0b — Amber 500)
- Cor de erro: Vermelho (#ef4444 — Red 500)
- Gradiente primário: linear-gradient(135deg, #6366f1, #8b5cf6)
- Gradiente hero: linear-gradient(135deg, #0f0f23 0%, #1e1b4b 50%, #1a1a3e 100%)
- Tipografia: Inter (Google Fonts) — weights 400, 500, 600, 700
- Border radius: 12px para cards, 8px para botões, 50% para avatares
- Sombras: box-shadow com rgba(99, 102, 241, 0.1) para glow sutil
- Animações: transições de 0.3s ease em hover, fade-in na montagem dos componentes
- Glassmorphism em cards: background rgba(26, 26, 62, 0.8), backdrop-filter blur(10px), border 1px solid rgba(99, 102, 241, 0.2)

## ESTRUTURA DE NAVEGAÇÃO

O app deve ter estas rotas:
- "/" → Landing Page (pública)
- "/login" → Página de Login (pública)
- "/dashboard" → Dashboard Principal (protegida)
- "/repository/:id" → Mapa Interativo do Repositório (protegida)
- "/repository/:id/trails" → Lista de Trilhas de Onboarding (protegida)
- "/repository/:id/trail/:trailId" → Detalhe da Trilha com Tarefas (protegida)
- "/repository/:id/trail/:trailId/task/:taskId" → Detalhe da Tarefa (protegida)
- "/progress" → Progresso do Desenvolvedor (protegida)
- "/team" → Painel de Gestão do Time (protegida)
- "/repository/:id/docs" → Documentação Gerada por IA (protegida)
- "/repository/:id/explorer" → Code Explorer (protegida)
- "/settings" → Configurações (protegida)

Rotas protegidas requerem que o usuário esteja "logado" (variável em localStorage).
Redirecionar para /login se não autenticado.

## LAYOUT GLOBAL (rotas protegidas)

- Sidebar fixa à esquerda (240px) com:
  - Logo "OnboardDev" no topo com ícone de foguete 🚀
  - Links de navegação com ícones (Lucide icons): Dashboard (LayoutDashboard), Repositórios (FolderGit2), Progresso (TrendingUp), Time (Users), Configurações (Settings)
  - Separador visual entre seções
  - Avatar do usuário no rodapé da sidebar com nome e role
  - Item ativo com background gradient e borda lateral colorida
  - Hover com transição suave
- Header no topo com:
  - Breadcrumb da localização atual
  - Campo de busca
  - Ícone de notificação com badge de contagem
  - Avatar do usuário com dropdown
- Área de conteúdo com padding de 24px, scrollável

## TELA 1 — LANDING PAGE (rota "/")

Layout full-width SEM sidebar. Navegação no topo com logo, links (Features, Como Funciona, Sobre) e botão "Entrar".

### Hero Section:
- Background com gradiente escuro e padrão de grid sutil animado
- Título grande: "Domine qualquer codebase em dias, não semanas"
- Subtítulo: "OnboardDev transforma o onboarding de novos desenvolvedores com mapas interativos, trilhas guiadas e inteligência artificial"
- Dois botões: "Começar Gratuitamente" (preenchido, gradiente primário) e "Ver Demo" (outline)
- À direita, mockup/screenshot estilizado do dashboard (pode ser um card com preview)
- Estatísticas em linha: "75% mais rápido", "500+ devs onboarded", "4.9/5 satisfação"

### Seção de Problemas:
- Título: "O onboarding está quebrado"
- 4 cards com ícone, estatística em destaque e descrição:
  - "4-8 semanas" — Tempo médio de onboarding
  - "60%" — Documentação desatualizada
  - "23 min" — Custo de cada interrupção
  - "33%" — Desistem nos primeiros 6 meses

### Seção de Features:
- Título: "Tudo que seu time precisa"
- Grid 2x3 de cards com:
  1. 🗺️ Mapa Interativo — "Visualize a arquitetura do seu projeto em um mapa navegável"
  2. 📚 Trilhas Guiadas — "Caminho estruturado de aprendizado com tarefas progressivas"
  3. 🤖 Docs com IA — "Documentação auto-gerada, sempre atualizada"
  4. 📊 Dashboard de Progresso — "Métricas em tempo real do onboarding"
  5. 👥 Gestão do Time — "Acompanhe todos os devs em um painel"
  6. 🏆 Gamificação — "Badges, streaks e conquistas que motivam"
- Cada card com hover lift (translateY(-4px)) e borda colorida sutil

### Seção "Como Funciona":
- 3 passos horizontais com números grandes, ícone, título e descrição:
  1. "Conecte" — "Integre seu repositório GitHub em 1 clique"
  2. "Configure" — "IA analisa o código e gera trilhas automaticamente"
  3. "Onboard" — "Novos devs seguem trilhas e você acompanha o progresso"
- Linha conectora entre os passos

### Seção de Depoimentos:
- 3 cards com quote, nome, cargo e empresa (dados fictícios):
  - "Reduzimos o onboarding de 6 semanas para 10 dias" — Ana Silva, Tech Lead @ TechCorp
  - "Finalmente tenho visibilidade do progresso do meu time" — Carlos Santos, Engineering Manager @ StartupX
  - "Me senti confiante desde o primeiro dia" — Julia Costa, Dev Junior @ InnovateBR

### CTA Final:
- Background com gradiente
- "Pronto para transformar seu onboarding?"
- Botão grande "Começar Agora — É Grátis"

### Footer:
- Logo, links, "© 2026 OnboardDev. Todos os direitos reservados."

## TELA 2 — LOGIN (rota "/login")

- Página centrada com card de login sobre fundo escuro com padrão
- Logo OnboardDev no topo do card
- Título: "Bem-vindo de volta"
- Subtítulo: "Acesse sua conta para continuar"
- Botão "Entrar com GitHub" (ícone do GitHub, fundo preto)
- Divisor "ou"
- Campos: Email e Senha
- Botão "Entrar" (gradiente primário, full width)
- Link "Criar conta" abaixo
- Botão especial no rodapé: "🎮 Explorar Modo Demo" (outline, com tooltip explicando que carrega dados de exemplo)
- Ao clicar em qualquer botão de login, salvar flag em localStorage e redirecionar para /dashboard

## TELA 3 — DASHBOARD (rota "/dashboard")

### Saudação:
- "Bom dia, Rafael! 👋" (dinâmico baseado na hora)
- Subtítulo: "Aqui está seu resumo de onboarding"

### Cards de Métricas (4 em linha):
- 📚 Trilhas Completas: "2 de 4" com mini progress bar
- ✅ Tarefas Concluídas: "18 de 26"
- ⏱️ Tempo Investido: "12h 30min"
- 🔥 Streak Atual: "5 dias" com ícone de fogo animado

### Repositórios Conectados (grid de cards):
- Card 1: "ecommerce-platform" — TypeScript/React — 67% completo — "Último acesso: hoje"
- Card 2: "payment-service" — Python/FastAPI — 23% completo — "Último acesso: ontem"
- Card 3: "mobile-app" — React Native — 0% completo — Badge "Novo"
- Cada card com: ícone da linguagem, barra de progresso colorida, botão "Continuar"
- Botão "+Adicionar Repositório" (card com borda tracejada)

### Atividades Recentes (lista vertical):
- "✅ Completou 'Entendendo o Fluxo de Checkout' — há 2 horas"
- "🏆 Conquistou badge 'Explorador de Código' — há 5 horas"
- "📖 Explorou módulo 'Payment Gateway' — ontem"
- "✅ Completou trilha 'Fundamentos do Projeto' — há 2 dias"
- Cada item com avatar, ícone de tipo, texto e timestamp

### Próximas Tarefas Sugeridas:
- "🔜 Entendendo o Middleware de Autenticação — Trilha: Sistema de Auth — ~15min"
- "🔜 Configurando Variáveis de Ambiente — Trilha: Fundamentos — ~10min"

## TELA 4 — MAPA INTERATIVO DO REPOSITÓRIO (rota "/repository/1")

- Título: "ecommerce-platform" com breadcrumb
- Tabs: "Mapa da Arquitetura" | "Trilhas" | "Documentação" | "Code Explorer"

### Mapa (ocupar 70% da largura):
- Renderizar um diagrama visual com nós (módulos) e conexões (dependências) usando divs posicionados ou SVG
- Módulos como cards arredondados com cor por tipo:
  - 🟦 Frontend (Auth UI, Product UI, Cart UI, Checkout UI) — cor azul
  - 🟪 Backend (API Gateway, Auth Service, Product Service, Cart Service, Payment Service) — cor roxa
  - 🟩 Utils (Logger, Validation, Config) — cor verde
  - 🟨 Database (PostgreSQL, Redis Cache) — cor âmbar
- Conexões como linhas SVG com setas entre os módulos
- Ao clicar em um módulo, expandir card lateral com:
  - Nome e descrição
  - Arquivos principais (lista)
  - Dependências (tags)
  - Botões: "Ver Código" e "Ver Documentação"
- Legenda de cores no canto inferior
- Controles de zoom (+/-) no canto superior direito

### Painel lateral (30% da largura, aparece ao clicar num módulo):
- Título do módulo com ícone colorido
- Descrição em 2-3 linhas
- "Arquivos Principais": lista com ícones de arquivo
- "Depende de": tags de outros módulos
- "Usado por": tags de módulos que dependem deste
- Botões de ação

## TELA 5 — TRILHAS DE ONBOARDING (rota "/repository/1/trails")

- Título: "Trilhas de Onboarding — ecommerce-platform"
- Grid de cards de trilhas (2 colunas):

### Trilha 1: "Fundamentos do Projeto"
- Ícone: 📦 | Status: "Completa ✅" | 8/8 tarefas | ~2h | Dificuldade: Iniciante
- Barra de progresso 100% (verde)
- Badge de conclusão visível

### Trilha 2: "Fluxo de Compra"
- Ícone: 🛒 | Status: "Em Progresso 🔄" | 4/6 tarefas | ~1.5h | Dificuldade: Intermediário
- Barra de progresso 67% (azul)

### Trilha 3: "Sistema de Autenticação"
- Ícone: 🔐 | Status: "Pendente ⬜" | 0/5 tarefas | ~1h | Dificuldade: Intermediário
- Barra de progresso 0%

### Trilha 4: "API e Integrações"
- Ícone: 🔌 | Status: "Bloqueada 🔒" | 0/7 tarefas | ~2h | Dificuldade: Avançado
- Tooltip: "Requer conclusão de 'Sistema de Autenticação'"
- Visual com opacidade reduzida

Cada card com: hover lift, borda lateral colorida por status, botão "Iniciar"/"Continuar"/"Revisar".

## TELA 6 — DETALHE DA TRILHA (rota "/repository/1/trail/2")

- Breadcrumb: Dashboard > ecommerce-platform > Trilhas > Fluxo de Compra
- Header: Título "Fluxo de Compra" com descrição, progresso (4/6), tempo estimado restante

### Lista de Tarefas (vertical, estilo timeline):
- ✅ T1: "Entendendo o Modelo de Produto" — Concluída — 15min
- ✅ T2: "Navegando pelo Catálogo" — Concluída — 20min
- ✅ T3: "Como o Carrinho Funciona" — Concluída — 15min
- ✅ T4: "Entendendo o Fluxo de Checkout" — Concluída — 25min
- 🔄 T5: "Processamento de Pagamento" — Em Progresso — ~20min — Botão "Continuar"
- 🔒 T6: "Notificações Pós-Compra" — Bloqueada — Requer T5

Cada tarefa com: ícone de status, título, tempo, e ao clicar vai para detalhe.
Linha vertical conectora entre tarefas (estilo timeline).

## TELA 7 — DETALHE DA TAREFA (rota "/repository/1/trail/2/task/5")

- Breadcrumb completo
- Header: "Processamento de Pagamento" com badge "Em Progresso"
- Barra lateral com navegação rápida entre tarefas da trilha

### Conteúdo principal:
- **Objetivo:** "Entender como o sistema processa pagamentos, incluindo validação, gateway de pagamento e confirmação."
- **Arquivos Relacionados:** (links clicáveis com ícones)
  - `src/services/payment.service.ts`
  - `src/controllers/checkout.controller.ts`
  - `src/models/transaction.model.ts`

- **Instruções:** (markdown formatado)
  1. "Abra o arquivo `payment.service.ts` e observe a classe `PaymentService`"
  2. "Note o método `processPayment()` — ele orquestra todo o fluxo"
  3. "Observe como ele valida o carrinho antes de chamar o gateway"
  4. "Veja a integração com Stripe em `createCharge()`"

- **Dica Contextual:** (colapsável com ícone 💡)
  "O sistema usa o padrão Strategy para suportar múltiplos gateways de pagamento. Hoje só Stripe está implementado, mas a arquitetura permite adicionar PayPal, PagSeguro, etc."

- **Código de Referência:** (syntax highlighted com TypeScript)
```typescript
class PaymentService {
  async processPayment(cartId: string, paymentMethod: PaymentMethod): Promise<Transaction> {
    const cart = await this.cartService.getCart(cartId);
    this.validateCart(cart);
    
    const charge = await this.gateway.createCharge({
      amount: cart.total,
      currency: 'BRL',
      method: paymentMethod,
    });
    
    return this.transactionRepo.create({
      cartId,
      chargeId: charge.id,
      status: charge.status,
      amount: cart.total,
    });
  }
}
```

- **Botões no rodapé:**
  - "← Tarefa Anterior" (outline)
  - "Marcar como Concluída ✅" (gradiente primário, destaque)
  - "Próxima Tarefa →" (outline)

## TELA 8 — PROGRESSO DO DESENVOLVEDOR (rota "/progress")

- Header: "Meu Progresso" com avatar e nome do dev

### Métricas em Cards (4 em linha):
- 📊 Progresso Geral: donut chart grande mostrando 65%
- ✅ Tarefas: "18/26 concluídas"
- ⏱️ Tempo Total: "12h 30min investidos"
- 🔥 Streak: "5 dias consecutivos"

### Gráfico de Atividade (estilo GitHub contributions heatmap):
- Grid de quadrados coloridos representando atividade por dia
- Legenda: Sem atividade → Pouca → Média → Alta
- Últimos 3 meses

### Badges Conquistados (grid de badges):
- 🏆 "Primeiro Passo" — Completou primeira tarefa — CONQUISTADO
- 🗺️ "Explorador" — Explorou 5 módulos no mapa — CONQUISTADO
- 📚 "Estudioso" — Completou primeira trilha — CONQUISTADO
- ⚡ "Veloz" — Completou uma trilha em menos de 1 dia — CONQUISTADO
- 🔥 "On Fire" — Streak de 7 dias — NÃO CONQUISTADO (cinza, com progresso 5/7)
- 🎓 "Graduado" — Completou todas as trilhas — NÃO CONQUISTADO (cinza)
- 💡 "Curioso" — Leu documentação de 10 módulos — NÃO CONQUISTADO
- 🏅 "Mestre" — 100% de progresso — NÃO CONQUISTADO

### Progresso por Trilha (cards horizontais):
- Trilha 1: Barra verde 100% | "Fundamentos" | ✅ 8/8
- Trilha 2: Barra azul 67% | "Fluxo de Compra" | 4/6
- Trilha 3: Barra cinza 0% | "Auth" | 0/5
- Trilha 4: Barra cinza 0% | "API" | 🔒 0/7

### Timeline de Atividades (lista com ícones e timestamps):
- Últimas 10 atividades com ícone, descrição e data/hora

## TELA 9 — PAINEL DE GESTÃO DO TIME (rota "/team")

- Header: "Gestão do Time — ecommerce-platform"
- Toggle: "Visão Geral" | "Detalhado"

### Métricas Agregadas (4 cards):
- 👥 Devs em Onboarding: "4 ativos"
- ⏱️ Tempo Médio de Onboarding: "11 dias"
- 📊 Taxa de Conclusão: "78%"
- ⚠️ Devs Bloqueados: "1" (badge vermelho)

### Lista de Desenvolvedores (cards):

**Dev 1 — Rafael Ribeiro:**
- Avatar, nome, role "Frontend Developer", entrou há 12 dias
- Progresso: 65% | Status: "🟢 On Track"
- Trilha atual: "Fluxo de Compra"
- Último acesso: "há 2 horas"

**Dev 2 — Ana Santos:**
- Progresso: 100% | Status: "🏆 Completo"
- "Completou em 8 dias" — Badge dourado

**Dev 3 — Pedro Lima:**
- Progresso: 42% | Status: "🟡 Atenção"
- Trilha atual: "Fundamentos"
- "Parado na tarefa 'Setup do Ambiente' há 1 dia"

**Dev 4 — Maria Oliveira:**
- Progresso: 15% | Status: "🔴 Bloqueado"
- Trilha atual: "Fundamentos"
- "Parada na tarefa 'Configuração Docker' há 3 dias" — ALERTA com ícone vermelho

### Gráfico Comparativo:
- Bar chart horizontal comparando progresso dos 4 devs
- Linha pontilhada indicando "meta de 14 dias"

## TELA 10 — DOCUMENTAÇÃO POR IA (rota "/repository/1/docs")

- Layout com sidebar de navegação + conteúdo principal

### Sidebar (esquerda, 260px):
- Campo de busca
- Árvore de módulos documentados:
  - 📁 Frontend
    - Auth UI
    - Product UI
    - Cart UI
  - 📁 Backend
    - Auth Service
    - Payment Service
  - 📁 Utils
    - Logger
    - Validation

### Conteúdo (módulo selecionado — ex: Payment Service):
- Título: "Payment Service" com badge "🤖 Gerado por IA"
- Última atualização: "Atualizado há 2 dias"

- **Descrição:** "O Payment Service é responsável por processar todos os pagamentos da plataforma. Ele abstrai a integração com gateways de pagamento externos..."

- **API Reference** (tabela):
  | Método | Parâmetros | Retorno | Descrição |
  |--------|-----------|---------|-----------|
  | processPayment | cartId, paymentMethod | Transaction | Processa um pagamento |
  | refund | transactionId, reason | RefundResult | Processa estorno |
  | getStatus | transactionId | PaymentStatus | Consulta status |

- **Exemplos de Uso:** (code blocks com syntax highlighting)
- **Dependências:** Tags dos módulos que este depende
- **Usado por:** Tags dos módulos que usam este

## TELA 11 — CODE EXPLORER (rota "/repository/1/explorer")

- Layout com 3 painéis:

### Painel 1 — Árvore de Arquivos (esquerda, 250px):
- Estrutura de pastas colapsável:
  - 📁 src/
    - 📁 controllers/
    - 📁 models/
    - 📁 services/
      - auth.service.ts
      - cart.service.ts
      - payment.service.ts ← selecionado (highlight)
      - product.service.ts
    - 📁 utils/
    - 📁 middleware/
    - app.ts
    - config.ts
  - 📁 tests/
  - package.json
  - tsconfig.json

### Painel 2 — Código (centro, flex):
- Nome do arquivo no topo com caminho completo
- Números de linha
- Syntax highlighting para TypeScript
- Hover sobre funções mostra tooltip com explicação curta
- Botão "🤖 Explicar" aparece ao lado de funções/classes

### Painel 3 — Explicação IA (direita, 350px, toggle):
- Título: "Explicação — processPayment()"
- "Esta função é o ponto central do processamento de pagamentos..."
- Seções: "O que faz", "Como funciona", "Pontos de atenção"
- Badge "🤖 Gerado por IA"

## TELA 12 — CONFIGURAÇÕES (rota "/settings")

- Layout com tabs laterais: Perfil | Repositório | Preferências | Notificações

### Aba Perfil:
- Avatar com botão de upload
- Campos: Nome, Email, Role, Bio
- Botão "Salvar Alterações"

### Aba Repositório:
- Nome do repositório
- Descrição
- Linguagem principal (select)
- Visibilidade (público/privado)

### Aba Preferências:
- Tema: Dark/Light (toggle)
- Idioma: Português/English (select)
- Editor font size (slider)

### Aba Notificações:
- Toggles: Lembretes diários, Alertas de bloqueio, Relatórios semanais

## DADOS MOCKADOS GLOBAIS

Usar dados mockados realistas. O app DEVE funcionar completamente com dados estáticos em JSON/localStorage. Todos os dados devem estar pré-populados ao entrar em modo Demo. Incluir:
- 3 repositórios com dados completos
- 4 trilhas no repositório principal com 26 tarefas total
- 10 módulos de arquitetura com conexões
- 4 devs no painel de time
- 8 badges (4 conquistados, 4 pendentes)
- 20+ atividades recentes
- Documentação de 5 módulos

## REQUISITOS TÉCNICOS

1. Toda navegação deve funcionar sem recarregar a página (SPA)
2. Estado de autenticação persistido em localStorage
3. Progresso das tarefas persistido em localStorage
4. Todas as animações devem ser suaves (ease, 0.3s)
5. Responsivo para desktop (1280px+) e tablet (768px+)
6. Sem erros no console
7. Micro-animações em botões (hover scale, active press)
8. Loading skeletons ao navegar entre páginas
9. Toast notifications ao completar tarefas/conquistar badges
10. Empty states com ilustrações para seções sem dados
```

---

## NOTAS ADICIONAIS

- Após gerar o protótipo no Stitch, exportar o código e trazê-lo para o projeto local
- O código gerado será a base que será refinada e complementada na Fase 4 (desenvolvimento local)
- Revisar o design system gerado e ajustar cores/tipografia conforme necessário
- Testar todas as rotas e navegação antes de prosseguir
