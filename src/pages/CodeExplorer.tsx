import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoredData, DocModule } from '../data/mockData';

export const CodeExplorer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [selectedFile, setSelectedFile] = useState('src/services/payment.service.ts');
  const [showIAPanel, setShowIAPanel] = useState(true);
  const [loadingIA, setLoadingIA] = useState(false);
  const [explanationTarget, setExplanationTarget] = useState('processPayment()');

  const handleTabChange = (tab: string) => {
    if (tab === 'map') navigate(`/repository/${id}`);
    else if (tab === 'trails') navigate(`/repository/${id}/trails`);
    else if (tab === 'docs') navigate(`/repository/${id}/docs`);
    else if (tab === 'explorer') navigate(`/repository/${id}/explorer`);
  };

  const handleExplainClick = (target: string) => {
    setExplanationTarget(target);
    setShowIAPanel(true);
    setLoadingIA(true);
    setTimeout(() => {
      setLoadingIA(false);
    }, 800);
  };

  // Mock code for payment.service.ts
  const mockCodeLines = [
    `import { CartService } from './cart.service';`,
    `import { TransactionRepository } from '../repositories/transaction.repository';`,
    `import { StripeGateway } from '../gateways/stripe.gateway';`,
    ``,
    `export class PaymentService {`,
    `  private cartService: CartService;`,
    `  private transactionRepo: TransactionRepository;`,
    `  private gateway: StripeGateway;`,
    ``,
    `  constructor() {`,
    `    this.cartService = new CartService();`,
    `    this.transactionRepo = new TransactionRepository();`,
    `    this.gateway = new StripeGateway();`,
    `  }`,
    ``,
    `  /**`,
    `   * Executa a cobrança do carrinho e registra no banco`,
    `   */`,
    `  async processPayment(cartId: string, paymentMethod: PaymentMethod): Promise<Transaction> {`,
    `    const cart = await this.cartService.getCart(cartId);`,
    `    this.validateCart(cart);`,
    `    `,
    `    const charge = await this.gateway.createCharge({`,
    `      amount: cart.total,`,
    `      currency: 'BRL',`,
    `      method: paymentMethod,`,
    `    });`,
    `    `,
    `    return this.transactionRepo.create({`,
    `      cartId,`,
    `      chargeId: charge.id,`,
    `      status: charge.status,`,
    `      amount: cart.total,`,
    `    });`,
    `  }`,
    ``,
    `  private validateCart(cart: Cart): void {`,
    `    if (!cart || cart.items.length === 0) {`,
    `      throw new Error('Carrinho vazio ou inválido');`,
    `    }`,
    `  }`,
    `}`
  ];

  return (
    <div className="space-y-6 animate-fade-in text-left">
      {/* Sub-navbar tabs */}
      <div className="flex border-b border-white/5 pb-px gap-6">
        <button 
          onClick={() => handleTabChange('map')}
          className="text-sm font-medium text-on-surface-variant/70 hover:text-on-surface pb-3 px-1 cursor-pointer transition-colors"
        >
          Mapa da Arquitetura
        </button>
        <button 
          onClick={() => handleTabChange('trails')}
          className="text-sm font-medium text-on-surface-variant/70 hover:text-on-surface pb-3 px-1 cursor-pointer transition-colors"
        >
          Trilhas de Onboarding
        </button>
        <button 
          onClick={() => handleTabChange('docs')}
          className="text-sm font-medium text-on-surface-variant/70 hover:text-on-surface pb-3 px-1 cursor-pointer transition-colors"
        >
          Documentação IA
        </button>
        <button 
          onClick={() => handleTabChange('explorer')}
          className="text-sm font-semibold text-primary pb-3 border-b-2 border-[#8083ff] px-1 cursor-pointer"
        >
          Code Explorer
        </button>
      </div>

      {/* Three Panel Explorer Area */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[560px] max-h-[600px]">
        {/* Panel 1: Directory Tree (240px) */}
        <div className="w-full lg:w-60 glass rounded-3xl p-4 border border-white/5 flex flex-col gap-3 shadow-xl shrink-0">
          <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/50 font-bold px-1.5 pb-2 border-b border-white/5">Arquivos do Projeto</h4>
          
          <div className="space-y-2 text-xs font-mono overflow-y-auto max-h-[480px]">
            {/* folder: src/ */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-on-surface-variant px-1 font-bold">
                <span className="material-symbols-outlined text-[14px]">folder_open</span>
                <span>src</span>
              </div>
              <div className="pl-3 space-y-1">
                {/* folder: services/ */}
                <div className="flex items-center gap-1.5 text-on-surface-variant/80 font-bold">
                  <span className="material-symbols-outlined text-[14px]">folder_open</span>
                  <span>services</span>
                </div>
                {/* files inside services/ */}
                <div className="pl-3 space-y-0.5">
                  {['auth.service.ts', 'cart.service.ts', 'payment.service.ts', 'product.service.ts'].map(file => {
                    const filePath = `src/services/${file}`;
                    const active = selectedFile === filePath;
                    return (
                      <div
                        key={file}
                        onClick={() => file === 'payment.service.ts' && setSelectedFile(filePath)}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg cursor-pointer truncate ${
                          active
                            ? 'bg-[#8083ff]/10 text-primary border-l border-[#8083ff] pl-1.5 font-bold'
                            : file === 'payment.service.ts' 
                            ? 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
                            : 'text-on-surface-variant/40 hover:bg-white/5 hover:text-on-surface cursor-not-allowed'
                        }`}
                        title={file !== 'payment.service.ts' ? 'Outras classes indisponíveis na Demo' : ''}
                      >
                        <span className="material-symbols-outlined text-[13px]">description</span>
                        <span className="text-[11px]">{file}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* mock other folders */}
                {['controllers', 'models', 'utils', 'middleware'].map(fold => (
                  <div key={fold} className="flex items-center gap-1.5 text-on-surface-variant/40 px-1">
                    <span className="material-symbols-outlined text-[14px]">folder</span>
                    <span>{fold}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* root config files */}
            {['package.json', 'tsconfig.json'].map(file => (
              <div key={file} className="flex items-center gap-1.5 text-on-surface-variant/40 px-1">
                <span className="material-symbols-outlined text-[14px]">description</span>
                <span>{file}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2: Editor / Code Canvas (flex) */}
        <div className="flex-1 glass rounded-3xl border border-white/5 flex flex-col shadow-xl overflow-hidden min-w-0">
          {/* File Tab Header */}
          <div className="bg-[#1a1a2e]/30 px-5 py-3 border-b border-white/5 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[16px]">terminal</span>
              <span className="text-xs font-mono font-bold text-white">{selectedFile}</span>
            </div>
            
            {/* Toggle explanation sidebar */}
            <button 
              onClick={() => setShowIAPanel(!showIAPanel)}
              className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                showIAPanel 
                  ? 'bg-[#8083ff]/10 border-[#8083ff]/30 text-primary' 
                  : 'glass border-white/10 text-on-surface hover:bg-white/5'
              }`}
            >
              <span>🤖 Explicação</span>
              <span className="material-symbols-outlined text-[12px]">{showIAPanel ? 'visibility' : 'visibility_off'}</span>
            </button>
          </div>

          {/* Editor Lines Canvas */}
          <div className="flex-1 overflow-auto p-4 bg-[#0a0a14] font-mono text-[11px] leading-5 relative">
            
            {/* Line numbers + code text grid */}
            <div className="grid grid-cols-12 gap-3 min-w-[500px]">
              {mockCodeLines.map((line, idx) => {
                const lineNum = idx + 1;
                // Highlight payment function line and add custom action inline
                const isProcessPaymentLine = line.includes('async processPayment');
                
                return (
                  <React.Fragment key={lineNum}>
                    {/* Line number */}
                    <div className="col-span-1 text-right text-on-surface-variant/30 select-none pr-2 border-r border-white/5">
                      {lineNum}
                    </div>
                    {/* Line content */}
                    <div className={`col-span-11 pl-2 relative group whitespace-pre ${
                      isProcessPaymentLine ? 'bg-[#8083ff]/5 text-[#c0c1ff]' : 'text-on-surface-variant/90'
                    }`}>
                      {/* Highlight keywords basic style */}
                      {isProcessPaymentLine ? (
                        <div className="flex justify-between items-center w-full">
                          <span>
                            <span className="text-purple-400">async</span> <span className="text-blue-400">processPayment</span>(cartId: <span className="text-emerald-400">string</span>, paymentMethod: <span className="text-emerald-400">PaymentMethod</span>)
                          </span>
                          <button 
                            onClick={() => handleExplainClick('processPayment()')}
                            className="opacity-0 group-hover:opacity-100 px-2 py-0.5 bg-[#8083ff]/10 border border-[#8083ff]/20 text-[9px] font-bold text-primary rounded-md transition-opacity cursor-pointer flex items-center gap-1 shrink-0"
                          >
                            <span>🤖 Explicar</span>
                          </button>
                        </div>
                      ) : line.includes('class PaymentService') ? (
                        <div className="flex justify-between items-center w-full">
                          <span>
                            <span className="text-purple-400">export class</span> <span className="text-amber-400">PaymentService</span> {'{'}
                          </span>
                          <button 
                            onClick={() => handleExplainClick('PaymentService')}
                            className="opacity-0 group-hover:opacity-100 px-2 py-0.5 bg-[#8083ff]/10 border border-[#8083ff]/20 text-[9px] font-bold text-primary rounded-md transition-opacity cursor-pointer flex items-center gap-1 shrink-0"
                          >
                            <span>🤖 Explicar</span>
                          </button>
                        </div>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Panel 3: IA Explanation Sidebar (320px) */}
        {showIAPanel && (
          <div className="w-full lg:w-80 glass rounded-3xl p-5 border border-white/5 flex flex-col justify-between shadow-2xl shrink-0 overflow-y-auto max-h-[560px]">
            {loadingIA ? (
              /* Loading Skeletons */
              <div className="space-y-6 flex-1 animate-pulse">
                <div className="space-y-3 pb-3 border-b border-white/5">
                  <div className="h-4 bg-white/5 rounded w-24"></div>
                  <div className="h-3 bg-white/5 rounded w-48"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/5 rounded w-16"></div>
                  <div className="h-2 bg-white/5 rounded w-full"></div>
                  <div className="h-2 bg-white/5 rounded w-5/6"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/5 rounded w-20"></div>
                  <div className="h-2 bg-white/5 rounded w-full"></div>
                  <div className="h-2 bg-white/5 rounded w-4/5"></div>
                </div>
              </div>
            ) : (
              /* Actual IA Content */
              <div className="space-y-6 flex-1 text-xs">
                {/* Header */}
                <div className="flex justify-between items-start gap-4 pb-3 border-b border-white/5">
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono">Explicação — {explanationTarget}</h3>
                    <p className="text-[9px] font-mono text-on-surface-variant/50 mt-0.5">módulo analisado por ia</p>
                  </div>
                  <span className="px-2 py-0.5 bg-[#8083ff]/10 text-primary font-bold rounded text-[8px] uppercase tracking-wider">IA</span>
                </div>

                {explanationTarget === 'processPayment()' ? (
                  <div className="space-y-5">
                    {/* Concept */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">O que faz</h4>
                      <p className="text-on-surface-variant leading-relaxed font-medium">
                        Esta função representa a espinha dorsal de cobranças da plataforma. Ela orquestra toda a seqüência de transação, validação e persistência do status de compra do cliente.
                      </p>
                    </div>

                    {/* How it works */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Como Funciona</h4>
                      <ul className="list-disc pl-4 space-y-1.5 text-on-surface-variant leading-relaxed font-medium">
                        <li>Solicita o estado do carrinho correspondente em \`cartService.getCart()\`.</li>
                        <li>Valida se o carrinho possui itens ou está vazio (\`validateCart()\`).</li>
                        <li>Efetua chamada remota assíncrona ao gateway de pagamento Stripe (\`createCharge()\`).</li>
                        <li>Registra de forma imutável a transação no banco PostgreSQL com o status retornado da adquirente (\`transactionRepo.create()\`).</li>
                      </ul>
                    </div>

                    {/* Keep in mind / warnings */}
                    <div className="space-y-2 border-t border-white/5 pt-4">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-red-400 font-bold flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-red-400">warning</span>
                        Pontos de Atenção
                      </h4>
                      <p className="text-on-surface-variant leading-relaxed font-medium">
                        A função é assíncrona e lida com operações críticas. Se a API de terceiros (Stripe) falhar, a transação não será criada no banco. Um tratamento alternativo com fila de retry é necessário para produções escaláveis.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {/* Class explanation */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">O que faz</h4>
                      <p className="text-on-surface-variant leading-relaxed font-medium">
                        Classe de serviço modular do domínio de pagamentos. Abstrai todo o acoplamento com gateways externos e bancos de dados relativos a transações financeiras da plataforma.
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-white/5 pt-4">
                      <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Instanciação</h4>
                      <p className="text-on-surface-variant leading-relaxed font-medium">
                        Instancia internamente o \`CartService\`, \`TransactionRepository\` e \`StripeGateway\`, promovendo isolamento e encapsulamento de lógica de domínio de e-commerce.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Info tip footer */}
            <div className="text-[9px] font-mono text-on-surface-variant/40 mt-6 text-center border-t border-white/5 pt-3">
              Dica: Clique no botão "🤖 Explicar" de outra linha para analisar.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
