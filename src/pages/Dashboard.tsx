import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredData, Repository, Activity } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [streak, setStreak] = useState('5');
  const [timeInvested, setTimeInvested] = useState('12h 30m');

  useEffect(() => {
    // Dynamic greeting based on time of day
    const hr = new Date().getHours();
    if (hr < 12) setGreeting('Bom dia');
    else if (hr < 18) setGreeting('Boa tarde');
    else setGreeting('Boa noite');

    // Load data from localStorage
    setRepositories(getStoredData<Repository[]>('obd_repositories', []));
    setActivities(getStoredData<Activity[]>('obd_activities', []));
    setStreak(localStorage.getItem('obd_streak') || '5');
    setTimeInvested(localStorage.getItem('obd_time_invested') || '12h 30m');
  }, []);

  const handleContinueRepo = (id: string) => {
    navigate(`/repository/${id}`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Greeting Header & Streak badge */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-headline-lg text-white">
            {greeting}, Rafael! 👋
          </h2>
          <p className="text-sm text-on-surface-variant mt-1.5 font-medium">
            Pronto para sincronizar seu ambiente de desenvolvimento hoje?
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/5 border border-red-500/20 rounded-2xl shadow-md">
          <span className="material-symbols-outlined text-orange-500 material-fill text-[20px] animate-pulse">local_fire_department</span>
          <span className="text-xs font-mono font-bold text-on-surface">{streak} dias de sequência</span>
        </div>
      </div>

      {/* Metrics Row (4 cards in line) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Metric 1 */}
        <div className="glass p-5 rounded-2xl flex flex-col justify-between cursor-default hover:bg-white/[0.03] transition-colors duration-300">
          <div className="flex justify-between items-start text-on-surface-variant mb-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold">Trilhas Concluídas</span>
            <span className="material-symbols-outlined text-primary">route</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            2<span className="text-on-surface-variant/60 text-sm font-normal">/4</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-[#111125] rounded-full overflow-hidden">
            <div className="h-full primary-gradient" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass p-5 rounded-2xl flex flex-col justify-between cursor-default hover:bg-white/[0.03] transition-colors duration-300">
          <div className="flex justify-between items-start text-on-surface-variant mb-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold">Tarefas Feitas</span>
            <span className="material-symbols-outlined text-[#4cd7f6]">task_alt</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            18<span className="text-on-surface-variant/60 text-sm font-normal">/26</span>
          </div>
          <div className="mt-4 h-1.5 w-full bg-[#111125] rounded-full overflow-hidden">
            <div className="h-full bg-[#4cd7f6]" style={{ width: '69%' }}></div>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass p-5 rounded-2xl flex flex-col justify-between cursor-default hover:bg-white/[0.03] transition-colors duration-300">
          <div className="flex justify-between items-start text-on-surface-variant mb-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold">Tempo Investido</span>
            <span className="material-symbols-outlined text-[#d0bcff]">schedule</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            {timeInvested}
          </div>
          <p className="text-[10px] text-[#4cd7f6] font-mono mt-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">trending_up</span> +2.4h esta semana
          </p>
        </div>

        {/* Metric 4 */}
        <div className="glass p-5 rounded-2xl flex flex-col justify-between border-[#8083ff]/35 primary-glow cursor-default">
          <div className="flex justify-between items-start text-on-surface-variant mb-2">
            <span className="text-xs uppercase font-mono tracking-wider font-semibold">Streak Ativo</span>
            <span className="material-symbols-outlined text-orange-500 material-fill">bolt</span>
          </div>
          <div className="text-2xl font-bold text-white font-mono mt-1">
            {streak} Dias
          </div>
          <p className="text-[10px] text-on-surface-variant/75 font-mono mt-4">
            Recorde pessoal: 12 dias
          </p>
        </div>
      </div>

      {/* Main Bento Grid layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Connected Repositories (Left Column - 8/12) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white tracking-wide uppercase font-mono">Repositórios Conectados</h3>
            <button className="text-xs font-semibold text-primary hover:underline cursor-pointer">Ver todos</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {repositories.map((repo) => (
              <div key={repo.id} className="glass rounded-2xl overflow-hidden group flex flex-col border border-white/5 hover:border-white/10 shadow-lg">
                <div className="p-5 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-[20px] ${repo.id === '1' ? 'text-primary' : repo.id === '2' ? 'text-[#4cd7f6]' : 'text-[#d0bcff]'}`}>
                      {repo.icon}
                    </span>
                    <span className="font-bold text-sm text-white truncate max-w-[130px]">{repo.name}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider ${
                    repo.status === 'Active'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : repo.status === 'Paused'
                      ? 'bg-white/5 text-on-surface-variant border border-white/10'
                      : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                  }`}>
                    {repo.status === 'Active' ? 'Ativo' : repo.status === 'Paused' ? 'Pausado' : 'Novo'}
                  </span>
                </div>
                
                <div className="p-5 flex-1 flex flex-col gap-5 justify-between">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-on-surface-variant">{repo.lang}</span>
                    <span className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-on-surface-variant">{repo.type}</span>
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-on-surface-variant/80">Setup de Onboard</span>
                      <span className="text-white font-bold">{repo.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#111125] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${repo.id === '1' ? 'primary-gradient' : repo.id === '2' ? 'bg-[#4cd7f6]' : 'bg-[#d0bcff]'}`} 
                        style={{ width: `${repo.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleContinueRepo(repo.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      repo.status === 'Active'
                        ? 'primary-gradient text-white shadow-md hover:scale-[1.01]'
                        : 'glass border-primary/30 text-primary hover:bg-[#8083ff]/10 hover:scale-[1.01]'
                    }`}
                  >
                    Continuar Onboard
                  </button>
                </div>
              </div>
            ))}

            {/* Add Repository (Dashed card) */}
            <div className="glass rounded-2xl border-dashed border-white/20 p-6 flex flex-col items-center justify-center text-center group hover:border-[#8083ff]/40 transition-colors duration-300 min-h-[220px]">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 cursor-pointer shadow-inner">
                <span className="material-symbols-outlined text-[28px]">add</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-4">Adicionar Repositório</h4>
              <p className="text-[11px] text-on-surface-variant/70 mt-2 max-w-[200px] leading-relaxed">Conecte um novo projeto do GitHub para gerar trilhas guiadas.</p>
            </div>
          </div>
        </div>

        {/* Sidebar panels (Right Column - 4/12) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Suggested Tasks */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/5 mb-4">
              <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">auto_awesome</span>
              <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Sugestões da IA</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#1a1a2e]/40 rounded-xl border border-white/5 hover:border-[#8083ff]/45 cursor-pointer transition-all duration-200 group">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary transition-colors text-[18px]">check_box_outline_blank</span>
                  <div>
                    <p className="text-xs font-bold text-white">Configurar Chaves GPG</p>
                    <p className="text-[10px] text-on-surface-variant/70 mt-1 font-mono">Módulo de Segurança • ~10min</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-[#1a1a2e]/40 rounded-xl border border-white/5 hover:border-[#8083ff]/45 cursor-pointer transition-all duration-200 group">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary transition-colors text-[18px]">check_box_outline_blank</span>
                  <div>
                    <p className="text-xs font-bold text-white">Revisar Pipeline de CI/CD</p>
                    <p className="text-[10px] text-on-surface-variant/70 mt-1 font-mono">Trilha de DevOps • ~25min</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#1a1a2e]/40 rounded-xl border border-white/5 hover:border-[#8083ff]/45 cursor-pointer transition-all duration-200 group">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary transition-colors text-[18px]">check_box_outline_blank</span>
                  <div>
                    <p className="text-xs font-bold text-white">Introdução ao Auth Service</p>
                    <p className="text-[10px] text-on-surface-variant/70 mt-1 font-mono">Trilha de Backend • ~45min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass rounded-2xl p-5 border border-white/5">
            <div className="flex items-center gap-2 pb-3 border-b border-white/5 mb-4">
              <span className="material-symbols-outlined text-[#d0bcff] text-[20px]">history</span>
              <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Atividade Recente</h3>
            </div>

            <div className="relative pl-2 space-y-5 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
              {activities.slice(0, 3).map((act) => (
                <div key={act.id} className="relative pl-8">
                  <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant shadow-sm">
                    <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: act.type === 'badge' ? "'FILL' 1" : undefined }}>
                      {act.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{act.title}</p>
                    <p className="text-[10px] text-on-surface-variant/80 mt-0.5 leading-relaxed">{act.description}</p>
                    <span className="text-[9px] text-on-surface-variant/40 font-mono mt-1 uppercase block">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
