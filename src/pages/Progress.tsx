import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getStoredData, Badge, Trail, Activity } from '../data/mockData';

export const Progress: React.FC = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [streak, setStreak] = useState('5');
  const [timeInvested, setTimeInvested] = useState('12h 30m');

  useEffect(() => {
    setBadges(getStoredData<Badge[]>('obd_badges', []));
    setTrails(getStoredData<Trail[]>('obd_trails', []));
    setActivities(getStoredData<Activity[]>('obd_activities', []));
    setStreak(localStorage.getItem('obd_streak') || '5');
    setTimeInvested(localStorage.getItem('obd_time_invested') || '12h 30m');
  }, []);

  // Calculate global completed stats
  const totalTasks = trails.reduce((acc, t) => acc + t.tasksCount, 0);
  const totalCompleted = trails.reduce((acc, t) => acc + t.completedCount, 0);
  const globalProgress = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 65;

  const chartData = [
    { name: 'Completado', value: globalProgress },
    { name: 'Restante', value: 100 - globalProgress }
  ];

  const COLORS = ['#8083ff', '#1a1a2e'];

  // Simulate GitHub Contributions Heatmap Data (90 days)
  const renderHeatmap = () => {
    // Generate a fixed sequence of mock contributions (0 = none, 1 = low, 2 = medium, 3 = high)
    const heatmapValues = [
      0, 0, 1, 0, 2, 0, 0, 0, 1, 3, 2, 0, 1, 0, 0, 2, 0, 1, 0, 0, 3, 2, 1, 0, 0, 0, 0, 1,
      0, 2, 1, 0, 0, 3, 0, 0, 1, 0, 2, 0, 0, 0, 1, 3, 2, 0, 1, 0, 0, 2, 0, 1, 0, 0, 3, 2,
      1, 0, 0, 0, 0, 1, 0, 2, 1, 0, 0, 3, 0, 0, 1, 0, 2, 0, 0, 0, 1, 3, 2, 0, 1, 0, 0, 2,
      0, 1, 0, 0, 3, 2, 1, 0, 0, 0, 0, 1
    ];

    const getLevelColor = (level: number) => {
      switch (level) {
        case 0: return 'bg-white/[0.02] border-white/[0.02]';
        case 1: return 'bg-emerald-950 border-emerald-950/40';
        case 2: return 'bg-emerald-700 border-emerald-700/40';
        case 3: return 'bg-emerald-400 border-emerald-400/40';
        default: return 'bg-white/[0.02]';
      }
    };

    return (
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto py-2">
        {heatmapValues.map((val, idx) => (
          <div 
            key={idx} 
            className={`w-2.5 h-2.5 rounded-sm border ${getLevelColor(val)}`}
            title={`Dia ${idx + 1}: ${val === 0 ? 'Sem atividade' : val === 1 ? 'Pouca atividade' : val === 2 ? 'Atividade média' : 'Alta atividade'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8 text-left animate-fade-in">
      {/* Header Info */}
      <div className="flex items-center gap-4 pb-4 border-b border-white/5">
        <img 
          alt="Rafael Ribeiro avatar profile" 
          className="w-14 h-14 rounded-full object-cover border border-[#8083ff]/30 shadow-lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
        />
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Meu Progresso de Onboarding</h2>
          <p className="text-xs text-on-surface-variant/75 mt-0.5">Acompanhamento de conquistas, progresso e atividades de Rafael Ribeiro.</p>
        </div>
      </div>

      {/* Top summary row: Pie chart & metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart Card (1/3 width) */}
        <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center shadow-lg relative min-h-[220px]">
          <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold absolute top-5 left-5">Progresso Geral</h4>
          
          <div className="w-32 h-32 mt-4 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={46}
                  outerRadius={56}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-white font-mono leading-none">{globalProgress}%</span>
              <span className="text-[8px] uppercase font-mono text-on-surface-variant/60 mt-1">Concluído</span>
            </div>
          </div>
        </div>

        {/* Info stats (2/3 width) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-lg">
            <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Tarefas Completas</div>
            <div className="text-3xl font-extrabold text-white font-mono mt-3">{totalCompleted} <span className="text-on-surface-variant/50 text-base font-normal">/ {totalTasks}</span></div>
            <p className="text-[10px] text-on-surface-variant/60 mt-4 leading-relaxed">Setup de ambiente e fluxos essenciais de compra.</p>
          </div>

          <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-lg">
            <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Tempo Total</div>
            <div className="text-3xl font-extrabold text-white font-mono mt-3">{timeInvested}</div>
            <p className="text-[10px] text-[#4cd7f6] font-mono mt-4 flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">trending_up</span> +2.4h esta semana
            </p>
          </div>

          <div className="glass p-5 rounded-3xl border border-[#8083ff]/30 primary-glow flex flex-col justify-between">
            <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Streak Atual</div>
            <div className="text-3xl font-extrabold text-white font-mono mt-3">{streak} Dias</div>
            <p className="text-[10px] text-[#d0bcff] font-mono mt-4">Sequência ativa diária de setup.</p>
          </div>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="glass p-6 rounded-3xl border border-white/5 shadow-lg space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
          <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Frequência de Atividade</h3>
          <div className="flex items-center gap-1 text-[9px] font-mono text-on-surface-variant/60">
            <span>Sem atividade</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.02] border border-white/[0.02]"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-950 border border-emerald-950/40"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700 border border-emerald-700/40"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-emerald-400/40"></span>
            <span>Alta atividade</span>
          </div>
        </div>
        {renderHeatmap()}
      </div>

      {/* Main Bottom Section: Badges (Left) vs Trails & Activities (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Achievements Grid (7/12) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="pb-3 border-b border-white/5">
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Badges Conquistados</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((badge) => {
              const active = badge.achieved;
              return (
                <div 
                  key={badge.id} 
                  className={`glass p-4 rounded-2xl border text-center flex flex-col items-center justify-between min-h-[140px] shadow-md transition-all duration-300 ${
                    active 
                      ? 'border-[#8083ff]/30 hover:border-[#8083ff]/60 hover:scale-105' 
                      : 'opacity-40 border-white/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-inner ${
                    active ? 'bg-[#8083ff]/15 text-[#8083ff] primary-glow' : 'bg-white/5 text-on-surface-variant/60'
                  }`}>
                    <span className="material-symbols-outlined text-[20px] material-fill">{badge.icon}</span>
                  </div>
                  <div className="space-y-1 mt-2">
                    <p className="text-[10px] font-bold text-white truncate max-w-[80px]">{badge.title}</p>
                    <p className="text-[8px] text-on-surface-variant/75 leading-relaxed truncate max-w-[85px]" title={badge.description}>
                      {badge.description}
                    </p>
                  </div>
                  {badge.progressText && (
                    <span className="text-[8px] font-mono font-bold text-[#8083ff] mt-2 block">{badge.progressText}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trail Progress & Timeline (5/12) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="pb-3 border-b border-white/5">
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Progresso por Trilha</h3>
          </div>

          <div className="space-y-3">
            {trails.map((t) => (
              <div key={t.id} className="glass p-4 rounded-2xl border border-white/5 shadow-md flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="material-symbols-outlined text-primary text-[18px]">{t.icon}</span>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-white truncate max-w-[130px]">{t.title}</h4>
                    <p className="text-[9px] font-mono text-on-surface-variant/60 mt-0.5">{t.completedCount} de {t.tasksCount} tarefas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-16 h-1.5 bg-[#111125] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${t.status === 'Completa' ? 'bg-[#10b981]' : 'primary-gradient'}`}
                      style={{ width: `${(t.completedCount / t.tasksCount) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white w-8 text-right">
                    {Math.round((t.completedCount / t.tasksCount) * 100)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline header */}
          <div className="pb-3 border-b border-white/5 pt-4">
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Linha do Tempo</h3>
          </div>
          
          <div className="relative pl-2 space-y-4 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
            {activities.slice(0, 4).map((act) => (
              <div key={act.id} className="relative pl-8">
                <div className="absolute left-0 top-0.5 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-on-surface-variant shadow-sm">
                  <span className="material-symbols-outlined text-[13px]">
                    {act.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">{act.title}</p>
                  <p className="text-[10px] text-on-surface-variant/80 mt-0.5 leading-relaxed">{act.description}</p>
                  <span className="text-[9px] text-on-surface-variant/40 font-mono mt-1 uppercase block">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
