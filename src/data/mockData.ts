export interface Repository {
  id: string;
  name: string;
  lang: string;
  type: string;
  progress: number;
  status: 'Active' | 'Paused' | 'New';
  icon: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  active?: boolean;
  locked?: boolean;
  objective?: string;
  relatedFiles?: string[];
  instructions?: string;
  codeReference?: string;
  tip?: string;
  requiredTaskId?: string;
}

export interface Trail {
  id: string;
  title: string;
  icon: string;
  status: 'Completa' | 'Em Progresso' | 'Pendente' | 'Bloqueada';
  tasksCount: number;
  completedCount: number;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  progress: number;
  requiredTrailId?: string;
  tasks: Task[];
}

export interface ArchNode {
  id: string;
  label: string;
  type: 'frontend' | 'backend' | 'utils' | 'database';
  color: 'blue' | 'purple' | 'green' | 'amber';
  x: number;
  y: number;
  description: string;
  files: string[];
  dependencies: string[];
  usedBy: string[];
}

export interface ArchEdge {
  from: string;
  to: string;
}

export interface Developer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  progress: number;
  status: 'On Track' | 'Completo' | 'Atenção' | 'Bloqueado';
  statusColor: 'green' | 'amber' | 'red' | 'blue';
  currentTrail: string;
  lastAccess: string;
  joinedDaysAgo: number;
  timeInvested: string;
  alertText?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  achieved: boolean;
  progressText?: string;
}

export interface Activity {
  id: string;
  type: 'task' | 'badge' | 'explore';
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

export interface DocModule {
  id: string;
  name: string;
  category: string;
  description: string;
  updatedAt: string;
  api: { method: string; params: string; returnType: string; description: string }[];
  example: string;
  dependencies: string[];
  usedBy: string[];
}

// Initial Data definitions
const defaultRepositories: Repository[] = [
  {
    id: '1',
    name: 'ecommerce-platform',
    lang: 'TS/React',
    type: 'Monorepo',
    progress: 67,
    status: 'Active',
    icon: 'terminal',
    description: 'Plataforma principal de e-commerce, englobando a interface web de compras e o painel administrativo.'
  },
  {
    id: '2',
    name: 'payment-service',
    lang: 'Python/FastAPI',
    type: 'Microserviço',
    progress: 23,
    status: 'Paused',
    icon: 'database',
    description: 'Serviço isolado responsável pelo processamento de transações, estornos e comunicação com adquirentes.'
  },
  {
    id: '3',
    name: 'mobile-app',
    lang: 'React Native',
    type: 'Aplicativo',
    progress: 0,
    status: 'New',
    icon: 'smartphone',
    description: 'Aplicativo nativo multiplataforma para clientes finais efetuarem compras diretamente no smartphone.'
  }
];

const defaultTrails: Trail[] = [
  {
    id: '1',
    title: 'Fundamentos do Projeto',
    icon: 'package',
    status: 'Completa',
    tasksCount: 8,
    completedCount: 8,
    duration: '2h',
    difficulty: 'Iniciante',
    progress: 100,
    tasks: [
      { id: 'T1_1', title: 'Setup das Variáveis Globais', duration: '15m', completed: true },
      { id: 'T1_2', title: 'Entendendo a Arquitetura em Pastas', duration: '15m', completed: true },
      { id: 'T1_3', title: 'Instalação das Ferramentas Locais', duration: '20m', completed: true },
      { id: 'T1_4', title: 'Subindo o Banco de Dados com Docker', duration: '20m', completed: true },
      { id: 'T1_5', title: 'Entendendo a Configuração do Webpack', duration: '15m', completed: true },
      { id: 'T1_6', title: 'Primeiro Deploy em Ambiente Local', duration: '15m', completed: true },
      { id: 'T1_7', title: 'Convenção de Commits e Padrões de Código', duration: '10m', completed: true },
      { id: 'T1_8', title: 'Executando a Suíte de Testes Unitários', duration: '10m', completed: true }
    ]
  },
  {
    id: '2',
    title: 'Fluxo de Compra',
    icon: 'shopping_cart',
    status: 'Em Progresso',
    tasksCount: 6,
    completedCount: 4,
    duration: '1.5h',
    difficulty: 'Intermediário',
    progress: 67,
    tasks: [
      { id: 'T2_1', title: 'Entendendo o Modelo de Produto', duration: '15min', completed: true },
      { id: 'T2_2', title: 'Navegando pelo Catálogo', duration: '20min', completed: true },
      { id: 'T2_3', title: 'Como o Carrinho Funciona', duration: '15min', completed: true },
      { id: 'T2_4', title: 'Entendendo o Fluxo de Checkout', duration: '25min', completed: true },
      {
        id: 'T2_5',
        title: 'Processamento de Pagamento',
        duration: '20min',
        completed: false,
        active: true,
        objective: 'Entender como o sistema processa pagamentos, incluindo validação de saldo, integração com gateway de pagamento externo e gravação da transação.',
        relatedFiles: [
          'src/services/payment.service.ts',
          'src/controllers/checkout.controller.ts',
          'src/models/transaction.model.ts'
        ],
        instructions: `### Instruções Práticas

1. Abra o arquivo \`payment.service.ts\` e observe a classe \`PaymentService\` no painel Code Explorer.
2. Note o método \`processPayment()\` — ele é o orquestrador principal de toda a transação financeira.
3. Observe como ele valida o estado do carrinho antes de disparar a cobrança externa.
4. Veja como a integração com o Stripe é executada pelo método interno \`createCharge()\`.
5. Valide como o banco de dados armazena o status retornado pela adquirente em \`transactionRepo.create()\`.`,
        codeReference: `class PaymentService {
  async processPayment(cartId: string, paymentMethod: PaymentMethod): Promise<Transaction> {
    const cart = await this.cartService.getCart(cartId);
    this.validateCart(cart);
    
    // Integração com Gateway Externo (Stripe)
    const charge = await this.gateway.createCharge({
      amount: cart.total,
      currency: 'BRL',
      method: paymentMethod,
    });
    
    // Persistência da transação
    return this.transactionRepo.create({
      cartId,
      chargeId: charge.id,
      status: charge.status,
      amount: cart.total,
    });
  }
}`,
        tip: 'O sistema usa o padrão Strategy para suportar múltiplos gateways de pagamento de forma extensível. Hoje apenas Stripe está implementado, mas a estrutura permite acoplar PayPal ou Pix sem alterar a lógica core da controller.'
      },
      {
        id: '2_6',
        title: 'Notificações Pós-Compra',
        duration: '20min',
        completed: false,
        locked: true,
        requiredTaskId: 'T2_5',
        objective: 'Compreender como a fila de mensageria notifica o estoque, e dispara o email de nota fiscal após o sucesso da transação.',
        relatedFiles: ['src/services/notification.service.ts', 'src/queues/order.queue.ts']
      }
    ]
  },
  {
    id: '3',
    title: 'Sistema de Autenticação',
    icon: 'lock',
    status: 'Pendente',
    tasksCount: 5,
    completedCount: 0,
    duration: '1h',
    difficulty: 'Intermediário',
    progress: 0,
    tasks: [
      { id: 'T3_1', title: 'Fluxo OAuth2 do GitHub', duration: '15m', completed: false, active: true },
      { id: 'T3_2', title: 'Middleware de Verificação JWT', duration: '15m', completed: false },
      { id: 'T3_3', title: 'Configurando Cookies e CSRF', duration: '15m', completed: false },
      { id: 'T3_4', title: 'Módulos de Controle de Acesso (RBAC)', duration: '10m', completed: false },
      { id: 'T3_5', title: 'Testando Sessões no Postman', duration: '10m', completed: false }
    ]
  },
  {
    id: '4',
    title: 'API e Integrações',
    icon: 'power',
    status: 'Bloqueada',
    tasksCount: 7,
    completedCount: 0,
    duration: '2h',
    difficulty: 'Avançado',
    progress: 0,
    requiredTrailId: '3',
    tasks: [
      { id: 'T4_1', title: 'Expondo Endpoints REST do Checkout', duration: '20m', completed: false },
      { id: 'T4_2', title: 'Criando a Rota GraphQL para Filtro de Catálogo', duration: '25m', completed: false },
      { id: 'T4_3', title: 'Documentando APIs com Swagger/OpenAPI', duration: '15m', completed: false },
      { id: 'T4_4', title: 'Setup de Webhooks de Pagamento', duration: '20m', completed: false },
      { id: 'T4_5', title: 'Integrando a Fila RabbitMQ de Logística', duration: '15m', completed: false },
      { id: 'T4_6', title: 'Configurando Rate Limit no API Gateway', duration: '15m', completed: false },
      { id: 'T4_7', title: 'Monitoramento de Erros com Sentry', duration: '15m', completed: false }
    ]
  }
];

const defaultNodes: ArchNode[] = [
  {
    id: 'auth_ui',
    label: 'Auth UI',
    type: 'frontend',
    color: 'blue',
    x: 100,
    y: 120,
    description: 'Componentes React da interface visual para login, cadastro e recuperação de conta.',
    files: ['src/components/LoginCard.tsx', 'src/pages/Register.tsx'],
    dependencies: ['api_gateway'],
    usedBy: []
  },
  {
    id: 'product_ui',
    label: 'Product UI',
    type: 'frontend',
    color: 'blue',
    x: 280,
    y: 100,
    description: 'Interface de exibição de produtos, busca, filtros de categorias e carrossel de fotos.',
    files: ['src/components/ProductGrid.tsx', 'src/pages/Catalog.tsx'],
    dependencies: ['api_gateway'],
    usedBy: []
  },
  {
    id: 'cart_ui',
    label: 'Cart UI',
    type: 'frontend',
    color: 'blue',
    x: 460,
    y: 100,
    description: 'Gerenciador visual do carrinho de compras local com contagem e cálculos parciais.',
    files: ['src/components/CartDrawer.tsx', 'src/context/CartContext.tsx'],
    dependencies: ['api_gateway'],
    usedBy: []
  },
  {
    id: 'checkout_ui',
    label: 'Checkout UI',
    type: 'frontend',
    color: 'blue',
    x: 640,
    y: 120,
    description: 'Tela de finalização de compras, contendo seleção de endereço e dados de pagamento.',
    files: ['src/pages/Checkout.tsx', 'src/components/StripeForm.tsx'],
    dependencies: ['api_gateway'],
    usedBy: []
  },
  {
    id: 'api_gateway',
    label: 'API Gateway',
    type: 'backend',
    color: 'purple',
    x: 370,
    y: 220,
    description: 'Ponto de entrada unificado para as requisições do frontend, tratando roteamento e limite de tráfego.',
    files: ['src/gateway/server.ts', 'src/gateway/routes.ts'],
    dependencies: ['auth_svc', 'product_svc', 'cart_svc', 'payment_svc'],
    usedBy: ['auth_ui', 'product_ui', 'cart_ui', 'checkout_ui']
  },
  {
    id: 'auth_svc',
    label: 'Auth Service',
    type: 'backend',
    color: 'purple',
    x: 100,
    y: 350,
    description: 'Serviço responsável por validar credenciais, gerenciar sessões e assinar tokens JWT.',
    files: ['src/services/auth.service.ts', 'src/models/user.model.ts'],
    dependencies: ['db_postgres', 'logger'],
    usedBy: ['api_gateway']
  },
  {
    id: 'product_svc',
    label: 'Product Service',
    type: 'backend',
    color: 'purple',
    x: 280,
    y: 350,
    description: 'Serviço CRUD e buscas complexas de produtos diretamente do banco relacional com cacheamento.',
    files: ['src/services/product.service.ts', 'src/models/product.model.ts'],
    dependencies: ['db_postgres', 'cache_redis', 'validation'],
    usedBy: ['api_gateway']
  },
  {
    id: 'cart_svc',
    label: 'Cart Service',
    type: 'backend',
    color: 'purple',
    x: 460,
    y: 350,
    description: 'Serviço responsável por calcular descontos, cupons e validar estoque ao fechar o carrinho.',
    files: ['src/services/cart.service.ts', 'src/models/cart.model.ts'],
    dependencies: ['db_postgres', 'cache_redis'],
    usedBy: ['api_gateway']
  },
  {
    id: 'payment_svc',
    label: 'Payment Service',
    type: 'backend',
    color: 'purple',
    x: 640,
    y: 350,
    description: 'Serviço crítico para processar pagamentos integrando com operadoras de cartão via Stripe/PIX.',
    files: ['src/services/payment.service.ts', 'src/models/transaction.model.ts'],
    dependencies: ['db_postgres', 'validation', 'logger'],
    usedBy: ['api_gateway']
  },
  {
    id: 'db_postgres',
    label: 'PostgreSQL',
    type: 'database',
    color: 'amber',
    x: 280,
    y: 470,
    description: 'Banco de dados relacional principal que armazena usuários, produtos, pedidos e transações.',
    files: ['docker/postgres/init.sql'],
    dependencies: [],
    usedBy: ['auth_svc', 'product_svc', 'cart_svc', 'payment_svc']
  },
  {
    id: 'cache_redis',
    label: 'Redis Cache',
    type: 'database',
    color: 'amber',
    x: 460,
    y: 470,
    description: 'Banco de dados em memória utilizado para armazenar sessões do carrinho e catálogo de produtos frequentes.',
    files: ['docker/redis/redis.conf'],
    dependencies: [],
    usedBy: ['product_svc', 'cart_svc']
  },
  {
    id: 'logger',
    label: 'Logger',
    type: 'utils',
    color: 'green',
    x: 100,
    y: 570,
    description: 'Utilitário interno de logs estruturados em formato JSON para análise e auditoria.',
    files: ['src/utils/logger.ts'],
    dependencies: [],
    usedBy: ['auth_svc', 'payment_svc']
  },
  {
    id: 'validation',
    label: 'Validation',
    type: 'utils',
    color: 'green',
    x: 370,
    y: 570,
    description: 'Biblioteca interna para validação de esquemas de dados de payload e tipos de entrada.',
    files: ['src/utils/validation.ts'],
    dependencies: [],
    usedBy: ['product_svc', 'payment_svc']
  },
  {
    id: 'config_sys',
    label: 'Config System',
    type: 'utils',
    color: 'green',
    x: 640,
    y: 570,
    description: 'Gerenciador de variáveis de ambiente com validação estática de chaves e hosts.',
    files: ['src/utils/config.ts'],
    dependencies: [],
    usedBy: []
  }
];

const defaultEdges: ArchEdge[] = [
  { from: 'auth_ui', to: 'api_gateway' },
  { from: 'product_ui', to: 'api_gateway' },
  { from: 'cart_ui', to: 'api_gateway' },
  { from: 'checkout_ui', to: 'api_gateway' },
  { from: 'api_gateway', to: 'auth_svc' },
  { from: 'api_gateway', to: 'product_svc' },
  { from: 'api_gateway', to: 'cart_svc' },
  { from: 'api_gateway', to: 'payment_svc' },
  { from: 'auth_svc', to: 'db_postgres' },
  { from: 'product_svc', to: 'db_postgres' },
  { from: 'product_svc', to: 'cache_redis' },
  { from: 'cart_svc', to: 'db_postgres' },
  { from: 'cart_svc', to: 'cache_redis' },
  { from: 'payment_svc', to: 'db_postgres' },
  { from: 'auth_svc', to: 'logger' },
  { from: 'product_svc', to: 'validation' },
  { from: 'payment_svc', to: 'validation' },
  { from: 'payment_svc', to: 'logger' }
];

const defaultDevelopers: Developer[] = [
  {
    id: 'dev_1',
    name: 'Rafael Ribeiro',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    progress: 65,
    status: 'On Track',
    statusColor: 'green',
    currentTrail: 'Fluxo de Compra',
    lastAccess: 'há 2 horas',
    joinedDaysAgo: 12,
    timeInvested: '12h 30min'
  },
  {
    id: 'dev_2',
    name: 'Ana Santos',
    role: 'Fullstack Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    progress: 100,
    status: 'Completo',
    statusColor: 'blue',
    currentTrail: 'Todas as Trilhas',
    lastAccess: 'ontem',
    joinedDaysAgo: 20,
    timeInvested: '34h 15min',
    alertText: 'Completou com louvor em 8 dias!'
  },
  {
    id: 'dev_3',
    name: 'Pedro Lima',
    role: 'Backend Intern',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
    progress: 42,
    status: 'Atenção',
    statusColor: 'amber',
    currentTrail: 'Fundamentos do Projeto',
    lastAccess: 'há 1 dia',
    joinedDaysAgo: 5,
    timeInvested: '6h 40min',
    alertText: 'Parado na tarefa \'Setup do Ambiente\' há 1 dia'
  },
  {
    id: 'dev_4',
    name: 'Maria Oliveira',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    progress: 15,
    status: 'Bloqueado',
    statusColor: 'red',
    currentTrail: 'Fundamentos do Projeto',
    lastAccess: 'há 3 dias',
    joinedDaysAgo: 8,
    timeInvested: '3h 10min',
    alertText: 'Parada na tarefa \'Configuração Docker\' há 3 dias (ALERTA)'
  }
];

const defaultBadges: Badge[] = [
  {
    id: 'badge_1',
    title: 'Primeiro Passo',
    description: 'Completou a primeira tarefa guiada do sistema.',
    icon: 'check_circle',
    achieved: true
  },
  {
    id: 'badge_2',
    title: 'Explorador',
    description: 'Navegou por mais de 5 módulos diferentes no mapa da arquitetura.',
    icon: 'explore',
    achieved: true
  },
  {
    id: 'badge_3',
    title: 'Estudioso',
    description: 'Completou a primeira trilha inteira de onboarding.',
    icon: 'school',
    achieved: true
  },
  {
    id: 'badge_4',
    title: 'Veloz',
    description: 'Completou uma trilha em menos de 1 dia corrido.',
    icon: 'bolt',
    achieved: true
  },
  {
    id: 'badge_5',
    title: 'On Fire',
    description: 'Acesse o sistema por 7 dias seguidos de onboarding ativo.',
    icon: 'local_fire_department',
    achieved: false,
    progressText: '5 / 7 dias'
  },
  {
    id: 'badge_6',
    title: 'Graduado',
    description: 'Conclua todas as trilhas obrigatórias e finalize seu onboarding.',
    icon: 'military_tech',
    achieved: false
  },
  {
    id: 'badge_7',
    title: 'Curioso',
    description: 'Leia a documentação técnica gerada por IA de 10 módulos.',
    icon: 'menu_book',
    achieved: false,
    progressText: '5 / 10 lidos'
  },
  {
    id: 'badge_8',
    title: 'Mestre',
    description: 'Atingiu 100% em todas as atividades, tarefas e badges da plataforma.',
    icon: 'workspace_premium',
    achieved: false
  }
];

const defaultActivities: Activity[] = [
  {
    id: 'act_1',
    type: 'task',
    title: 'Tarefa Concluída',
    description: 'Entendendo o Fluxo de Checkout foi marcado como concluído.',
    time: 'há 2 horas',
    icon: 'check',
    color: 'tertiary'
  },
  {
    id: 'act_2',
    type: 'badge',
    title: 'Badge Conquistado',
    description: 'Você conquistou a insígnia "Explorador de Código"!',
    time: 'há 5 horas',
    icon: 'military_tech',
    color: 'primary'
  },
  {
    id: 'act_3',
    type: 'explore',
    title: 'Módulo Explorado',
    description: 'Abriu a documentação técnica de "Payment Service".',
    time: 'ontem',
    icon: 'explore',
    color: 'white/40'
  },
  {
    id: 'act_4',
    type: 'task',
    title: 'Trilha Concluída',
    description: 'Completou com sucesso a trilha "Fundamentos do Projeto".',
    time: 'há 2 dias',
    icon: 'route',
    color: 'primary'
  },
  {
    id: 'act_5',
    type: 'task',
    title: 'Tarefa Concluída',
    description: 'Completou "Como o Carrinho Funciona" no Fluxo de Compra.',
    time: 'há 2 dias',
    icon: 'check',
    color: 'tertiary'
  },
  {
    id: 'act_6',
    type: 'task',
    title: 'Tarefa Concluída',
    description: 'Completou "Navegando pelo Catálogo" no Fluxo de Compra.',
    time: 'há 3 dias',
    icon: 'check',
    color: 'tertiary'
  },
  {
    id: 'act_7',
    type: 'task',
    title: 'Tarefa Concluída',
    description: 'Completou "Entendendo o Modelo de Produto" no Fluxo de Compra.',
    time: 'há 4 dias',
    icon: 'check',
    color: 'tertiary'
  }
];

const defaultDocs: DocModule[] = [
  {
    id: 'payment_svc',
    name: 'Payment Service',
    category: 'Backend',
    description: 'O Payment Service é responsável por processar todas as cobranças da plataforma, agindo como ponte de comunicação com provedores de cartões de crédito e adquirentes externas via Stripe e Pix. Ele garante transações seguras, controle de idempotência (evitando cobranças duplicadas) e gravação de histórico contábil.',
    updatedAt: 'Atualizado há 2 dias',
    dependencies: ['PostgreSQL', 'Validation', 'Logger'],
    usedBy: ['API Gateway'],
    api: [
      {
        method: 'processPayment',
        params: 'cartId: string, paymentMethod: PaymentMethod',
        returnType: 'Promise<Transaction>',
        description: 'Valida o carrinho correspondente, cria uma ordem de cobrança na adquirente externa e persiste o registro no banco PostgreSQL.'
      },
      {
        method: 'refund',
        params: 'transactionId: string, reason: string',
        returnType: 'Promise<RefundResult>',
        description: 'Realiza o estorno financeiro de uma cobrança autorizada com base no ID da transação na operadora do cartão.'
      },
      {
        method: 'getStatus',
        params: 'transactionId: string',
        returnType: 'Promise<PaymentStatus>',
        description: 'Consulta em tempo real o status atualizado de uma transação junto ao gateway Stripe.'
      }
    ],
    example: `import { PaymentService } from './services/payment.service';

const paymentService = new PaymentService();

// Exemplo de chamada de cobrança
const transaction = await paymentService.processPayment('cart_10928', {
  type: 'CreditCard',
  token: 'tok_visa_debit_success'
});

console.log('Status do Pagamento:', transaction.status); // 'Succeeded'`
  },
  {
    id: 'auth_svc',
    name: 'Auth Service',
    category: 'Backend',
    description: 'O Auth Service lida com todo o fluxo de segurança do e-commerce. Ele encapsula a verificação JWT de requisições, criptografia de chaves de usuário (via bcrypt) e integração com OAuth2 de redes parceiras (como GitHub).',
    updatedAt: 'Atualizado há 4 dias',
    dependencies: ['PostgreSQL', 'Logger'],
    usedBy: ['API Gateway'],
    api: [
      {
        method: 'login',
        params: 'credentials: UserCredentials',
        returnType: 'Promise<AuthSession>',
        description: 'Valida email e senha e retorna um token de sessão criptografado.'
      },
      {
        method: 'verifySession',
        params: 'token: string',
        returnType: 'Promise<UserPayload>',
        description: 'Descriptografa o token de sessão e extrai as permissões do usuário logado.'
      }
    ],
    example: `import { AuthService } from './services/auth.service';

const auth = new AuthService();
const session = await auth.login({
  email: 'rafael@dev.com',
  password: 'mypassword123'
});`
  },
  {
    id: 'product_svc',
    name: 'Product Service',
    category: 'Backend',
    description: 'O Product Service gerencia o catálogo, estoque de produtos e filtros avançados. Ele atua fortemente com o Redis para garantir buscas instantâneas a dados que raramente mudam.',
    updatedAt: 'Atualizado há 1 semana',
    dependencies: ['PostgreSQL', 'Redis Cache', 'Validation'],
    usedBy: ['API Gateway'],
    api: [
      {
        method: 'getProduct',
        params: 'productId: string',
        returnType: 'Promise<Product>',
        description: 'Busca o produto no cache Redis. Se não encontrar, faz uma query no PostgreSQL e atualiza o cache.'
      },
      {
        method: 'updateStock',
        params: 'productId: string, quantity: number',
        returnType: 'Promise<void>',
        description: 'Atualiza a quantidade em estoque físico de um produto específico de forma síncrona.'
      }
    ],
    example: `const product = await productService.getProduct('prod_3092');`
  }
];

// Helper functions for LocalStorage management
export const initializeDemoData = (forceReset = false) => {
  if (forceReset || !localStorage.getItem('obd_initialized')) {
    localStorage.setItem('obd_repositories', JSON.stringify(defaultRepositories));
    localStorage.setItem('obd_trails', JSON.stringify(defaultTrails));
    localStorage.setItem('obd_nodes', JSON.stringify(defaultNodes));
    localStorage.setItem('obd_edges', JSON.stringify(defaultEdges));
    localStorage.setItem('obd_developers', JSON.stringify(defaultDevelopers));
    localStorage.setItem('obd_badges', JSON.stringify(defaultBadges));
    localStorage.setItem('obd_activities', JSON.stringify(defaultActivities));
    localStorage.setItem('obd_docs', JSON.stringify(defaultDocs));
    localStorage.setItem('obd_initialized', 'true');
    localStorage.setItem('obd_streak', '5');
    localStorage.setItem('obd_time_invested', '12h 30m');
  }
};

export const getStoredData = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

export const setStoredData = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const resetAllData = () => {
  initializeDemoData(true);
};
