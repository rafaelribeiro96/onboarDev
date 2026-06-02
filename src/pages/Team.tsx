import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { getStoredData, Developer } from '../data/mockData';

export const Team: React.FC = () => {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [viewType, setViewType] = useState<'overview' | 'detailed'>('overview');

  useEffect(() => {
    setDevelopers(getStoredData<Developer[]>('obd_developers', []));
  }, []);

  const getStatusStyle = (status: Developer['status']) => {
    switch (status) {
      case 'On Track': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      case 'Completo': return 'bg-[#8083ff]/10 text-primary border border-[#8083ff]/20';
      case 'Atenção': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'Bloqueado': return 'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse';
      default: return 'bg-white/5 text-on-surface-variant';
    }
  };

  const getStatusDot = (status: Developer['status']) => {
    switch (status) {
      case 'On Track': return 'bg-emerald-500';
      case 'Completo': return 'bg-[#8083ff]';
      case 'Atenção': return 'bg-amber-500';
      case 'Bloqueado': return 'bg-red-500';
      default: return 'bg-white';
    }
  };

  // Format Recharts comparative data
  const chartData = developers.map((dev) => ({
    name: dev.name.split(' ')[0], // First name
    'Progresso (%)': dev.progress,
    'Dias Ativo': dev.joinedDaysAgo
  }));

  return (
    <div className="space-y-8 text-left animate-fade-in">
      {/* Header title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Gestão do Time — ecommerce-platform</h2>
          <p className="text-xs text-on-surface-variant/75 mt-0.5">Visão do Tech Lead sobre a saúde e velocidade de onboarding do time de engenharia.</p>
        </div>

        {/* Toggle options Overview / Detailed */}
        <div className="flex bg-[#16162e] border border-white/5 rounded-xl p-1 shadow-inner">
          <button 
            onClick={() => setViewType('overview')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              viewType === 'overview' ? 'bg-[#8083ff] text-white' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Visão Geral
          </button>
          <button 
            onClick={() => setViewType('detailed')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
              viewType === 'detailed' ? 'bg-[#8083ff] text-white' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Detalhamento
          </button>
        </div>
      </div>

      {/* Aggregate metrics grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-lg">
          <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Devs Ativos</div>
          <div className="text-3xl font-extrabold text-white font-mono mt-3">4 <span className="text-on-surface-variant/50 text-base font-normal">contratados</span></div>
          <p className="text-[10px] text-on-surface-variant/60 mt-4">Todos sincronizados no monorepo.</p>
        </div>

        <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-lg">
          <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Tempo Médio</div>
          <div className="text-3xl font-extrabold text-white font-mono mt-3">11 Dias</div>
          <p className="text-[10px] text-emerald-400 font-mono mt-4 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">trending_down</span> -2 dias vs meta do trimestre
          </p>
        </div>

        <div className="glass p-5 rounded-3xl border border-white/5 flex flex-col justify-between shadow-lg">
          <div className="text-on-surface-variant/80 text-[10px] font-mono uppercase tracking-wider">Taxa de Conclusão</div>
          <div className="text-3xl font-extrabold text-white font-mono mt-3">78%</div>
          <div className="mt-4 h-1.5 w-full bg-[#111125] rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '78%' }}></div>
          </div>
        </div>

        <div className="glass p-5 rounded-3xl border border-red-500/20 bg-red-500/[0.02] flex flex-col justify-between shadow-lg">
          <div className="text-red-300 text-[10px] font-mono uppercase tracking-wider">Gargalos / Bloqueios</div>
          <div className="text-3xl font-extrabold text-red-400 font-mono mt-3">1 <span className="text-red-300/50 text-base font-normal">dev</span></div>
          <p className="text-[10px] text-red-300/80 mt-4 font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] text-red-400 animate-ping">warning</span> 
            Ação recomendada no Slack
          </p>
        </div>
      </div>

      {/* Main content: Developers list (detailed) vs Comparative chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Developers list cards (7/12) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="pb-2 border-b border-white/5">
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">Membros do Time</h3>
          </div>

          <div className="space-y-4">
            {developers.map((dev) => {
              const isBlocked = dev.status === 'Bloqueado';
              const isAttention = dev.status === 'Atenção';
              const isComplete = dev.status === 'Completo';

              return (
                <div 
                  key={dev.id} 
                  className={`glass rounded-2xl p-5 border shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-300 ${
                    isBlocked 
                      ? 'border-red-500/20 bg-red-500/[0.01] hover:border-red-500/40 primary-glow' 
                      : 'border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Left profile section */}
                  <div className="flex items-center gap-3">
                    <img 
                      alt={dev.name} 
                      className="w-11 h-11 rounded-full object-cover border border-white/10 shadow-md"
                      src={dev.avatar} 
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{dev.name}</h4>
                      <p className="text-[10px] text-on-surface-variant/70 mt-0.5 leading-none">{dev.role}</p>
                      <p className="text-[9px] font-mono text-on-surface-variant/50 mt-1">Ingressou há {dev.joinedDaysAgo} dias • Ativo {dev.lastAccess}</p>
                    </div>
                  </div>

                  {/* Mid status / trail */}
                  <div className="space-y-1 text-left sm:text-right min-w-[120px]">
                    <p className="text-[8px] uppercase font-mono tracking-wider text-on-surface-variant/50">Trilha Ativa</p>
                    <p className="text-xs text-white font-medium truncate max-w-[130px]">{dev.currentTrail}</p>
                    {dev.alertText && (
                      <p className={`text-[9px] font-medium leading-none ${isBlocked ? 'text-red-400' : isAttention ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {dev.alertText}
                      </p>
                    )}
                  </div>

                  {/* Right progress indicator */}
                  <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-between sm:justify-start">
                    <div className="space-y-1.5 text-left sm:text-right w-24">
                      <div className="flex justify-between text-[9px] font-mono leading-none">
                        <span className="text-on-surface-variant/70">Progresso</span>
                        <span className="text-white font-bold">{dev.progress}%</span>
                      </div>
                      <div className="h-1 w-full bg-[#111125] rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${isBlocked ? 'bg-red-500' : isAttention ? 'bg-amber-500' : 'primary-gradient'}`}
                          style={{ width: `${dev.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${getStatusStyle(dev.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(dev.status)}`}></span>
                      {dev.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparative progress bar chart (4/12) */}
        <div className="lg:col-span-4 glass rounded-3xl p-5 border border-white/5 shadow-2xl flex flex-col justify-between min-h-[300px]">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Comparações de Progresso</h3>
            <p className="text-[10px] text-on-surface-variant leading-relaxed">Taxa de conclusão percentual dos desenvolvedores comparada à linha de meta estabelecida de 14 dias.</p>
          </div>

          <div className="h-56 mt-4 w-full text-xs z-10 font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" />
                <XAxis type="number" domain={[0, 100]} stroke="rgba(255,255,255,0.2)" />
                <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.2)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#16162e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  labelStyle={{ color: '#white', fontWeight: 'bold' }}
                />
                <ReferenceLine x={75} stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" label={{ value: 'Meta', fill: 'rgba(255,255,255,0.4)', position: 'top', fontSize: 9 }} />
                <Bar dataKey="Progresso (%)" fill="#8083ff" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
