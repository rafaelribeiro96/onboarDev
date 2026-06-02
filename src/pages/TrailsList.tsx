import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoredData, Trail } from '../data/mockData';

export const TrailsList: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    // Load dynamic trail information from localStorage
    const storedTrails = getStoredData<Trail[]>('obd_trails', []);
    
    // Dynamically calculate progress and lock states
    // In our rules: Trail 4 is locked if Trail 3 is not complete (progress < 100)
    const t3 = storedTrails.find(t => t.id === '3');
    const updatedTrails = storedTrails.map(t => {
      if (t.id === '4') {
        const isT3Complete = t3 ? t3.completedCount === t3.tasksCount : false;
        return {
          ...t,
          status: isT3Complete ? 'Pendente' : 'Bloqueada' as Trail['status'],
          progress: isT3Complete ? 0 : 0
        };
      }
      return t;
    });

    setTrails(updatedTrails);
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'map') navigate(`/repository/${id}`);
    else if (tab === 'trails') navigate(`/repository/${id}/trails`);
    else if (tab === 'docs') navigate(`/repository/${id}/docs`);
    else if (tab === 'explorer') navigate(`/repository/${id}/explorer`);
  };

  const handleTrailAction = (trail: Trail) => {
    if (trail.status === 'Bloqueada') return;
    navigate(`/repository/${id}/trail/${trail.id}`);
  };

  const getBorderColor = (status: Trail['status']) => {
    switch (status) {
      case 'Completa': return 'border-l-4 border-l-[#10b981]';
      case 'Em Progresso': return 'border-l-4 border-l-[#8083ff]';
      case 'Pendente': return 'border-l-4 border-l-white/20';
      case 'Bloqueada': return 'border-l-4 border-l-[#ffb4ab]/30';
      default: return 'border-l-4 border-l-white/5';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
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
          className="text-sm font-semibold text-primary pb-3 border-b-2 border-[#8083ff] px-1 cursor-pointer"
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
          className="text-sm font-medium text-on-surface-variant/70 hover:text-on-surface pb-3 px-1 cursor-pointer transition-colors"
        >
          Code Explorer
        </button>
      </div>

      {/* Intro info */}
      <div className="text-left">
        <h3 className="text-lg font-bold text-white">Sua jornada de Onboarding</h3>
        <p className="text-xs text-on-surface-variant/80 mt-1">Siga as trilhas na ordem sequencial para dominar a codebase do projeto com segurança.</p>
      </div>

      {/* Grid of Trails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trails.map((trail) => {
          const isLocked = trail.status === 'Bloqueada';
          const isComplete = trail.status === 'Completa';
          const inProgress = trail.status === 'Em Progresso';
          
          return (
            <div 
              key={trail.id}
              className={`glass rounded-3xl overflow-hidden group flex flex-col justify-between p-6 border border-white/5 hover:border-white/10 shadow-lg ${getBorderColor(trail.status)} ${
                isLocked ? 'opacity-50' : 'hover:scale-[1.01]'
              } transition-all duration-300`}
            >
              <div className="space-y-4">
                {/* Header (Title, Icon and Status tag) */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-2xl">
                      <span className="material-symbols-outlined text-[26px] text-primary">
                        {trail.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#c0c1ff] transition-colors">{trail.title}</h4>
                      <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-on-surface-variant/75">
                        <span>{trail.duration}</span>
                        <span>•</span>
                        <span>{trail.difficulty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status chip */}
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    isComplete 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/10'
                      : inProgress
                      ? 'bg-[#8083ff]/10 text-primary border border-[#8083ff]/20'
                      : isLocked
                      ? 'bg-white/5 text-on-surface-variant/60 border border-white/10'
                      : 'bg-white/5 text-on-surface-variant border border-white/5'
                  }`}>
                    {isComplete ? 'Completa' : inProgress ? 'Em Progresso' : isLocked ? 'Bloqueada' : 'Pendente'}
                  </span>
                </div>

                {/* Progress bar and task counts */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-on-surface-variant/80">Tarefas concluídas</span>
                    <span className="text-white font-bold">{trail.completedCount} de {trail.tasksCount}</span>
                  </div>
                  <div className="h-2 w-full bg-[#111125] rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${isComplete ? 'bg-[#10b981]' : 'primary-gradient'}`}
                      style={{ width: `${(trail.completedCount / trail.tasksCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 relative">
                {isLocked ? (
                  <div className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 text-xs font-bold text-on-surface-variant/50 rounded-xl border border-white/5 cursor-not-allowed">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    Bloqueada — Requer Trilha 3
                  </div>
                ) : (
                  <button 
                    onClick={() => handleTrailAction(trail)}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isComplete
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                        : 'primary-gradient text-white shadow-lg primary-glow hover:scale-[1.01]'
                    }`}
                  >
                    {isComplete ? 'Revisar Conteúdo' : inProgress ? 'Continuar Trilha' : 'Iniciar Trilha'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
