import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // Simulated demo mode login
    localStorage.setItem('user_logged_in', 'true');
    navigate('/dashboard');
  };

  const features = [
    { emoji: '🗺️', title: 'Mapa Interativo', desc: 'Visualize toda a arquitetura do seu projeto em um diagrama de módulos interativo com dependências mapeadas.' },
    { emoji: '📚', title: 'Trilhas Guiadas', desc: 'Siga caminhos estruturados de aprendizado desenhados por IAs de acordo com o código real do seu repositório.' },
    { emoji: '🤖', title: 'Docs com IA', desc: 'Acesse documentação auto-gerada dos arquivos chave, sempre atualizada a cada modificação do código.' },
    { emoji: '📊', title: 'Progresso em Real-time', desc: 'Acompanhe seu progresso e métricas de onboarding através de painéis gráficos de fácil leitura.' },
    { emoji: '👥', title: 'Gestão de Time', desc: 'Dê aos Tech Leads visibilidade sobre o setup dos novos membros, removendo impedimentos instantaneamente.' },
    { emoji: '🏆', title: 'Gamificação Leve', desc: 'Mantenha-se motivado completando tarefas, ganhando conquistas (badges) e mantendo sua sequência de dias ativos.' }
  ];

  const painPoints = [
    { stat: '4-8 semanas', label: 'Tempo médio de onboarding', desc: 'Período comum que um desenvolvedor recém-chegado leva para realizar sua primeira entrega relevante.' },
    { stat: '60%', label: 'Documentação defasada', desc: 'Mais da metade das wikis e readmes internos estão desatualizados em relação ao código em produção.' },
    { stat: '23 minutos', label: 'Custo de interrupção', desc: 'Tempo de foco que um desenvolvedor sênior perde a cada dúvida simples que precisa sanar do recém-chegado.' },
    { stat: '33%', label: 'Desistência precoce', desc: 'De novos talentos contratados saem de suas posições nos primeiros 6 meses devido a processos de setup frustrantes.' }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f23] mesh-background text-on-surface">
      {/* Top Navbar Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-[#0f0f23]/60 backdrop-blur-xl border-b border-white/5 z-50 px-margin-mobile md:px-margin-desktop flex justify-between items-center max-w-container-max mx-auto">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#8083ff]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5z"/><path d="m12 15-3-3m1.35-2.35L15 4c1-1 2-1 3 0s1 2 0 3l-5.65 4.65c-.5.35-.65.85-.7 1.35-.05.5-.05 1.5-.05 1.5l-1.5.5c-1.13.38-1.5.38-2.5 0-.5-.2-.5-.5-1-1-.5-.5-.8-1-1-1.5-.38-1-1.13-1.37-1.5-2.5l.5-1.5s1 0 1.5-.05c.5-.05 1-.2 1.35-.7z"/><path d="M15 9h.01"/><path d="M16 8h.01"/></svg>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#c0c1ff] to-[#d0bcff] bg-clip-text text-transparent">OnboardDev</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-on-surface-variant">
          <a href="#features" className="hover:text-on-surface transition-colors">Features</a>
          <a href="#workflow" className="hover:text-on-surface transition-colors">Como Funciona</a>
          <a href="#testimonials" className="hover:text-on-surface transition-colors">Depoimentos</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/login')}
            className="text-sm font-semibold hover:text-primary transition-colors cursor-pointer"
          >
            Entrar
          </button>
          <button 
            onClick={handleDemoClick}
            className="px-5 py-2.5 primary-gradient rounded-xl text-sm font-bold text-white shadow-lg primary-glow hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Explorar Demo
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-20 sm:space-y-28 md:space-y-32">
        {/* Section 1: Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8083ff]/10 border border-[#8083ff]/20 text-xs text-[#c0c1ff] font-mono">
              <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-ping"></span>
              onboarding inteligente por ia
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-white tracking-tight">
              Domine qualquer codebase em <span className="bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] bg-clip-text text-transparent">dias</span>, não semanas
            </h2>
            
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-[580px]">
              O OnboardDev transforma a integração de novos desenvolvedores em projetos complexos usando mapas de arquitetura interativos, trilhas guiadas e documentação viva gerada por IA.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleDemoClick}
                className="px-8 py-4 primary-gradient rounded-xl text-base font-bold text-white shadow-xl primary-glow hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Começar Gratuitamente
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-8 py-4 glass hover:bg-white/5 border-white/10 rounded-xl text-base font-bold text-on-surface transition-all cursor-pointer"
              >
                Ver Demo
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-[500px]">
              <div>
                <p className="text-2xl font-extrabold text-[#4cd7f6] font-mono">75%</p>
                <p className="text-xs text-on-surface-variant/80 mt-1">Mais rápido no Setup</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#d0bcff] font-mono">500+</p>
                <p className="text-xs text-on-surface-variant/80 mt-1">Devs onboardados</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#8083ff] font-mono">4.9/5</p>
                <p className="text-xs text-on-surface-variant/80 mt-1">Nível de satisfação</p>
              </div>
            </div>
          </div>

          {/* Styled Dashboard Mockup */}
          <div className="lg:col-span-5 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-4 rounded-2xl w-full max-w-[480px] shadow-2xl relative border-white/10">
              <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full primary-gradient flex items-center justify-center text-xs text-white primary-glow animate-bounce">🤖</div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-[10px] font-mono text-on-surface-variant/50">ecommerce-platform-map.json</div>
              </div>
              {/* Mock Diagram Canvas */}
              <div className="bg-[#0f0f23] rounded-xl p-6 border border-white/5 min-h-[260px] relative overflow-hidden flex flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div className="glass px-3 py-1.5 rounded-lg text-[10px] border-[#8083ff]/30 text-[#c0c1ff]">React UI Frontend</div>
                  <div className="glass px-3 py-1.5 rounded-lg text-[10px] border-[#4cd7f6]/30 text-[#4cd7f6]">API Gateway</div>
                </div>
                <div className="flex justify-center my-4">
                  <div className="h-[2px] bg-gradient-to-r from-[#8083ff] to-[#4cd7f6] flex-1 relative">
                    <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-[#4cd7f6] animate-ping"></span>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="glass px-3 py-1.5 rounded-lg text-[10px] border-[#d0bcff]/30 text-[#d0bcff]">Auth Service</div>
                  <div className="glass px-3 py-1.5 rounded-lg text-[10px] border-[#10b981]/30 text-[#10b981]">PostgreSQL DB</div>
                </div>
                <div className="text-[10px] text-on-surface-variant/50 font-mono text-center mt-4">Passe o mouse por cima para inspecionar dependências</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pain Points (O onboarding está quebrado) */}
        <section className="text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">O onboarding de software tradicional está quebrado</h3>
            <p className="text-on-surface-variant max-w-[620px] mx-auto leading-relaxed text-sm">
              Desenvolvedores perdem muito tempo perdidos em código mal-estruturado ou lendo documentações geradas anos atrás.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((item) => (
              <div key={item.label} className="glass p-6 rounded-2xl border-white/5 hover:border-red-500/20 text-left space-y-4 transition-colors">
                <span className="text-3xl font-extrabold text-[#ffb4ab] font-mono leading-none">{item.stat}</span>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{item.label}</h4>
                  <p className="text-xs text-on-surface-variant/75 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Features Grid */}
        <section id="features" className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">Tudo o que seu time de engenharia precisa</h3>
            <p className="text-on-surface-variant max-w-[620px] mx-auto leading-relaxed text-sm">
              Unimos documentação, visualização de código e trilhas em um só lugar de maneira premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="glass-interactive p-6 rounded-2xl space-y-4 text-left">
                <div className="text-4xl w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">{item.emoji}</div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-on-surface">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Como funciona (Steps horizontal timeline) */}
        <section id="workflow" className="space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">Configuração rápida em 3 passos</h3>
            <p className="text-on-surface-variant max-w-[620px] mx-auto leading-relaxed text-sm">
              Automatize a rampa de aprendizado do seu projeto com integração GitHub rápida.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex gap-4 items-start text-left relative">
              <div className="text-4xl font-extrabold text-[#8083ff]/20 font-mono w-16 h-16 bg-[#8083ff]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#8083ff]/10">01</div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-on-surface">Conecte seu Repositório</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Conecte o repositório da sua organização em 1 clique via GitHub OAuth de forma 100% segura.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-4 items-start text-left relative">
              <div className="text-4xl font-extrabold text-[#4cd7f6]/20 font-mono w-16 h-16 bg-[#4cd7f6]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#4cd7f6]/10">02</div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-on-surface">IA Analisa a Codebase</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Nossa inteligência lê o código, entende dependências, desenha o mapa da arquitetura e gera as trilhas.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-4 items-start text-left relative">
              <div className="text-4xl font-extrabold text-[#d0bcff]/20 font-mono w-16 h-16 bg-[#d0bcff]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#d0bcff]/10">03</div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-on-surface">Novos Devs Integram</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Novos engenheiros realizam as trilhas interativas de forma autônoma, e o gestor acompanha em tempo real.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonials */}
        <section id="testimonials" className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white">Validado por líderes de engenharia</h3>
            <p className="text-on-surface-variant max-w-[620px] mx-auto leading-relaxed text-sm">
              Veja o depoimento de quem já acelerou seu processo de onboarding utilizando o OnboardDev.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl flex flex-col justify-between text-left space-y-6">
              <p className="text-xs italic text-on-surface-variant/90 leading-relaxed">
                "Reduzimos o tempo de onboarding de 6 semanas para apenas 10 dias. Os engenheiros júniors agora conseguem realizar commits produtivos logo na primeira semana, sem sobrecarregar a nossa equipe sênior."
              </p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Ana Silva"/>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Ana Silva</h4>
                  <p className="text-[10px] text-on-surface-variant/70">Tech Lead @ TechCorp</p>
                </div>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col justify-between text-left space-y-6">
              <p className="text-xs italic text-on-surface-variant/90 leading-relaxed">
                "Finalmente tenho visibilidade objetiva do progresso dos meus liderados recém-admitidos. A aba Team nos avisa automaticamente se alguém estiver travado em alguma tarefa complexa do Docker."
              </p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200" alt="Carlos Santos"/>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Carlos Santos</h4>
                  <p className="text-[10px] text-on-surface-variant/70">Engineering Manager @ StartupX</p>
                </div>
              </div>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col justify-between text-left space-y-6">
              <p className="text-xs italic text-on-surface-variant/90 leading-relaxed">
                "O mapa interativo da arquitetura mudou a forma como eu encaro esse monorepo de 200k linhas. Senti que tinha total controle e domínio do fluxo de compra sem medo de perguntar demais."
              </p>
              <div className="flex items-center gap-3">
                <img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Julia Costa"/>
                <div>
                  <h4 className="text-xs font-bold text-on-surface">Julia Costa</h4>
                  <p className="text-[10px] text-on-surface-variant/70">Junior Developer @ InnovateBR</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: CTA Final */}
        <section className="primary-gradient p-12 md:p-16 rounded-3xl text-center space-y-8 primary-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="space-y-4 max-w-[620px] mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">Pronto para transformar seu onboarding de engenharia?</h3>
            <p className="text-white/80 text-sm leading-relaxed">Acelere seu time hoje. Experimente o protótipo com os dados da demo agora mesmo.</p>
          </div>
          <button 
            onClick={handleDemoClick}
            className="px-8 py-4 bg-white text-[#494bd6] rounded-xl text-base font-extrabold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Explorar Modo Demo Grátis
          </button>
        </section>
      </main>

      {/* Footer Area */}
      <footer className="border-t border-white/5 py-12 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#8083ff]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5z"/><path d="m12 15-3-3m1.35-2.35L15 4c1-1 2-1 3 0s1 2 0 3l-5.65 4.65c-.5.35-.65.85-.7 1.35-.05.5-.05 1.5-.05 1.5l-1.5.5c-1.13.38-1.5.38-2.5 0-.5-.2-.5-.5-1-1-.5-.5-.8-1-1-1.5-.38-1-1.13-1.37-1.5-2.5l.5-1.5s1 0 1.5-.05c.5-.05 1-.2 1.35-.7z"/><path d="M15 9h.01"/><path d="M16 8h.01"/></svg>
          <span className="text-base font-bold tracking-tight text-white">OnboardDev</span>
        </div>
        <p className="text-xs text-on-surface-variant/60 font-medium">© 2026 OnboardDev. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
