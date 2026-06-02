import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoredData, Trail, Task } from '../data/mockData';

export const TrailDetail: React.FC = () => {
  const { id, trailId } = useParams<{ id: string; trailId: string }>();
  const navigate = useNavigate();
  const [trail, setTrail] = useState<Trail | null>(null);

  useEffect(() => {
    const storedTrails = getStoredData<Trail[]>('obd_trails', []);
    const foundTrail = storedTrails.find(t => t.id === trailId);
    
    if (foundTrail) {
      // Apply locks dynamically
      // For trail 2: task 6 is locked if task 5 (T2_5) is not completed
      let previousCompleted = true;
      const updatedTasks = foundTrail.tasks.map((task) => {
        let isLocked = false;
        
        if (task.requiredTaskId) {
          const reqTask = foundTrail.tasks.find(t => t.id === task.requiredTaskId);
          isLocked = reqTask ? !reqTask.completed : false;
        }

        const updatedTask = {
          ...task,
          locked: isLocked
        };
        
        return updatedTask;
      });

      setTrail({
        ...foundTrail,
        tasks: updatedTasks
      });
    }
  }, [trailId]);

  const handleTaskClick = (task: Task) => {
    if (task.locked) return;
    navigate(`/repository/${id}/trail/${trailId}/task/${task.id}`);
  };

  if (!trail) {
    return (
      <div className="h-full flex items-center justify-center text-center p-6 text-on-surface-variant/60">
        <span className="material-symbols-outlined text-[32px] animate-pulse">info</span>
        <p className="text-xs mt-3 leading-relaxed">Trilha não encontrada.</p>
      </div>
    );
  }

  const completedPct = Math.round((trail.completedCount / trail.tasksCount) * 100);

  return (
    <div className="space-y-8 text-left animate-fade-in">
      {/* Return button */}
      <button 
        onClick={() => navigate(`/repository/${id}/trails`)}
        className="flex items-center gap-1.5 text-xs text-on-surface-variant/80 hover:text-on-surface transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        Voltar para Trilhas
      </button>

      {/* Trail Info Header Card */}
      <div className="glass p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-primary">{trail.icon}</span>
            <h2 className="text-xl font-bold text-white">{trail.title}</h2>
          </div>
          <p className="text-xs text-on-surface-variant/80 leading-relaxed max-w-[500px]">
            Siga o mapa sequencial abaixo. Complete cada tarefa respondendo as instruções para avançar para o próximo módulo.
          </p>
        </div>
        
        <div className="flex items-center gap-6 shrink-0">
          <div className="space-y-1 text-left md:text-right">
            <p className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/60">Progresso Geral</p>
            <p className="text-xl font-bold text-white font-mono">{completedPct}%</p>
          </div>
          <div className="w-14 h-14 rounded-full border-4 border-white/5 flex items-center justify-center relative">
            <svg className="w-full h-full transform -rotate-90 absolute">
              <circle
                cx="24"
                cy="24"
                r="22"
                stroke="transparent"
                strokeWidth="0"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke={trail.status === 'Completa' ? '#10b981' : '#8083ff'}
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - trail.completedCount / trail.tasksCount)}`}
              />
            </svg>
            <span className="text-[11px] font-mono font-bold text-white z-10">
              {trail.completedCount}/{trail.tasksCount}
            </span>
          </div>
        </div>
      </div>

      {/* Timeline List of Tasks */}
      <div className="relative pl-6 space-y-2 before:absolute before:left-10 before:top-4 before:bottom-4 before:w-[2px] before:bg-white/5">
        {trail.tasks.map((task, idx) => {
          const isComplete = task.completed;
          const isLocked = task.locked;
          const inProgress = !isComplete && !isLocked;
          
          return (
            <div 
              key={task.id} 
              onClick={() => handleTaskClick(task)}
              className={`relative pl-12 py-3 rounded-2xl transition-all duration-200 ${
                isLocked 
                  ? 'opacity-40 cursor-not-allowed' 
                  : 'hover:bg-white/[0.02] cursor-pointer group'
              }`}
            >
              {/* Vertical line indicator node */}
              <div className={`absolute left-2.5 top-5.5 w-4 h-4 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${
                isComplete 
                  ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                  : inProgress
                  ? 'bg-[#8083ff]/10 border-[#8083ff] text-primary animate-pulse'
                  : 'bg-[#111125] border-white/10 text-on-surface-variant'
              }`}>
                {isComplete && (
                  <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                )}
              </div>

              {/* Task info box */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className={`text-xs font-bold transition-colors ${
                    isComplete 
                      ? 'text-on-surface-variant/80' 
                      : 'text-white group-hover:text-primary'
                  }`}>
                    {task.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[9px] font-mono text-on-surface-variant/60">
                    <span>{task.duration}</span>
                    {isLocked && <span>• Requer tarefa anterior</span>}
                  </div>
                </div>

                {/* Right button context */}
                <div className="shrink-0">
                  {isLocked ? (
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40">lock</span>
                  ) : isComplete ? (
                    <span className="text-[10px] font-bold text-emerald-400 font-mono">Concluído</span>
                  ) : (
                    <button className="px-3.5 py-1.5 bg-[#8083ff]/10 hover:bg-[#8083ff]/20 text-[10px] font-bold text-primary rounded-lg border border-[#8083ff]/20 transition-all cursor-pointer">
                      Continuar
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
