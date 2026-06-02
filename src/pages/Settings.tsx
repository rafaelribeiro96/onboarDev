import React, { useState } from 'react';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'repo' | 'prefs' | 'notifs'>('profile');
  
  // Profile state
  const [name, setName] = useState('Rafael Ribeiro');
  const [email, setEmail] = useState('rafaelfelipe.r@hotmail.com');
  const [role, setRole] = useState('Frontend Developer');
  const [bio, setBio] = useState('Desenvolvedor focado em interfaces elegantes e dinâmicas com React e TypeScript.');

  // Repo state
  const [repoName, setRepoName] = useState('ecommerce-platform');
  const [repoDesc, setRepoDesc] = useState('Plataforma principal de e-commerce, englobando a interface web de compras.');
  const [repoLang, setRepoLang] = useState('TypeScript/React');
  const [repoVis, setRepoVis] = useState('Public');

  // Preferences state
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('Português');
  const [fontSize, setFontSize] = useState(12);

  // Notification toggles
  const [dailyRemind, setDailyRemind] = useState(true);
  const [lockAlert, setLockAlert] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);

  const [toast, setToast] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save preferences to localStorage
    localStorage.setItem('obd_font_size', fontSize.toString());
    localStorage.setItem('obd_language', language);
    localStorage.setItem('obd_dark_mode', darkMode ? 'true' : 'false');
    
    setToast('🎉 Configurações salvas e aplicadas localmente com sucesso!');
    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  return (
    <div className="space-y-6 text-left animate-fade-in relative">
      {/* Toast popup */}
      {toast && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 bg-[#10b981] text-white font-bold rounded-2xl shadow-2xl primary-glow animate-bounce text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          {toast}
        </div>
      )}

      {/* Title */}
      <div className="pb-4 border-b border-white/5">
        <h2 className="text-xl font-bold text-white tracking-tight">Configurações Gerais</h2>
        <p className="text-xs text-on-surface-variant/75 mt-0.5">Gerencie seu perfil, preferências visuais do editor e alertas de notificações.</p>
      </div>

      {/* Tabs and Content container */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-[460px]">
        {/* Left tabs (200px) */}
        <div className="w-full md:w-52 glass rounded-3xl p-3 border border-white/5 flex flex-col gap-1.5 shadow-xl shrink-0">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'profile'
                ? 'bg-[#8083ff]/10 text-primary border-l-2 border-l-[#8083ff] pl-3'
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">account_circle</span>
            <span>Meu Perfil</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('repo')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'repo'
                ? 'bg-[#8083ff]/10 text-primary border-l-2 border-l-[#8083ff] pl-3'
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">folder_git</span>
            <span>Repositório</span>
          </button>

          <button 
            onClick={() => setActiveTab('prefs')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'prefs'
                ? 'bg-[#8083ff]/10 text-primary border-l-2 border-l-[#8083ff] pl-3'
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Preferências</span>
          </button>

          <button 
            onClick={() => setActiveTab('notifs')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              activeTab === 'notifs'
                ? 'bg-[#8083ff]/10 text-primary border-l-2 border-l-[#8083ff] pl-3'
                : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">notifications</span>
            <span>Notificações</span>
          </button>
        </div>

        {/* Right Form Content */}
        <div className="flex-1 glass rounded-3xl p-6 border border-white/5 flex flex-col justify-between shadow-xl">
          <form onSubmit={handleSave} className="space-y-6 flex-1 flex flex-col justify-between">
            {/* Tab 1: Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Editar Perfil</h3>
                
                {/* Avatar upload style */}
                <div className="flex items-center gap-4">
                  <img 
                    alt="Rafael Ribeiro avatar profile edit" 
                    className="w-14 h-14 rounded-full object-cover border border-[#8083ff]/40 shadow-md"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                  />
                  <button 
                    type="button" 
                    className="px-4 py-2 glass border-white/10 hover:bg-white/5 rounded-xl text-[10px] font-bold text-on-surface transition-colors cursor-pointer"
                  >
                    Alterar Imagem
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Nome Completo</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Endereço de E-mail</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Cargo Atual</label>
                  <input 
                    type="text" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Biografia curta</label>
                  <textarea 
                    value={bio} 
                    onChange={(e) => setBio(e.target.value)} 
                    rows={3}
                    className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner resize-none leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* Tab 2: Repository */}
            {activeTab === 'repo' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Detalhes do Repositório</h3>
                
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Nome do Repositório</label>
                  <input 
                    type="text" 
                    value={repoName} 
                    onChange={(e) => setRepoName(e.target.value)} 
                    className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Descrição Geral</label>
                  <textarea 
                    value={repoDesc} 
                    onChange={(e) => setRepoDesc(e.target.value)} 
                    rows={2}
                    className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Linguagem Principal</label>
                    <select 
                      value={repoLang} 
                      onChange={(e) => setRepoLang(e.target.value)}
                      className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                    >
                      <option>TypeScript/React</option>
                      <option>Python/FastAPI</option>
                      <option>React Native</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase font-mono tracking-wider font-bold text-on-surface-variant/80">Visibilidade</label>
                    <select 
                      value={repoVis} 
                      onChange={(e) => setRepoVis(e.target.value)}
                      className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner"
                    >
                      <option value="Public">Público</option>
                      <option value="Private">Privado</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Preferences */}
            {activeTab === 'prefs' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Preferências Visuais</h3>
                
                {/* Theme Mode toggle */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div>
                    <h4 className="text-xs font-bold text-white">Tema Escuro Principal</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Garante menor fadiga visual para sessões longas.</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                      darkMode ? 'bg-[#8083ff]' : 'bg-[#1a1a2e] border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      darkMode ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>

                {/* Language Select */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div>
                    <h4 className="text-xs font-bold text-white">Idioma do App</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Tradução dos rótulos de onboarding.</p>
                  </div>
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-[#1a1a2e] border border-white/5 rounded-xl px-4 py-1.5 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shrink-0 shadow-inner w-32"
                  >
                    <option>Português</option>
                    <option>English</option>
                  </select>
                </div>

                {/* Font Size slider */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div className="flex-1 pr-4">
                    <h4 className="text-xs font-bold text-white">Tamanho do texto do editor</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Escala de exibição no Code Explorer.</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 w-40">
                    <input 
                      type="range" 
                      min="10" 
                      max="18" 
                      value={fontSize} 
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                      className="w-full cursor-pointer accent-[#8083ff]"
                    />
                    <span className="text-[10px] font-mono font-bold text-white shrink-0 w-8 text-right">{fontSize}px</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Notifications */}
            {activeTab === 'notifs' && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Configurar Alertas</h3>
                
                {/* Toggle 1 */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div>
                    <h4 className="text-xs font-bold text-white">Lembretes Diários de Setup</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Lembrar o dev de fazer commits e atualizar progresso diariamente.</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setDailyRemind(!dailyRemind)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                      dailyRemind ? 'bg-[#8083ff]' : 'bg-[#1a1a2e] border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      dailyRemind ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>

                {/* Toggle 2 */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div>
                    <h4 className="text-xs font-bold text-white">Alertas de Bloqueio do Time</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Notificar o gestor se algum dev estiver travado em tarefas chaves por mais de 24h.</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setLockAlert(!lockAlert)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                      lockAlert ? 'bg-[#8083ff]' : 'bg-[#1a1a2e] border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      lockAlert ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>

                {/* Toggle 3 */}
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <div>
                    <h4 className="text-xs font-bold text-white">Relatórios Semanais agregados</h4>
                    <p className="text-[9px] text-on-surface-variant/60">Enviar resumo da velocidade média de rampa de setup dos liderados no email do admin.</p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setWeeklyReport(!weeklyReport)}
                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-200 ${
                      weeklyReport ? 'bg-[#8083ff]' : 'bg-[#1a1a2e] border border-white/10'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      weeklyReport ? 'translate-x-6' : 'translate-x-0'
                    }`}></div>
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Save Trigger */}
            <div className="pt-6 border-t border-white/5 text-right mt-auto">
              <button 
                type="submit"
                className="px-6 py-3 primary-gradient text-white rounded-xl text-xs font-bold shadow-lg primary-glow hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">save</span>
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
