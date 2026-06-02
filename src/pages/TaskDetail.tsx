import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getStoredData, setStoredData, Trail, Task, Activity } from '../data/mockData';

export const TaskDetail: React.FC = () => {
  const { id, trailId, taskId } = useParams<{ id: string; trailId: string; taskId: string }>();
  const navigate = useNavigate();
  
  const [trail, setTrail] = useState<Trail | null>(null);
  const [task, setTask] = useState<Task | null>(null);
  const [showTip, setShowTip] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedTrails = getStoredData<Trail[]>('obd_trails', []);
    const foundTrail = storedTrails.find(t => t.id === trailId);
    
    if (foundTrail) {
      setTrail(foundTrail);
      const foundTask = foundTrail.tasks.find(t => t.id === taskId);
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [trailId, taskId]);

  const handleCompleteTask = () => {
    if (!trail || !task) return;

    // Load original stores
    const storedTrails = getStoredData<Trail[]>('obd_trails', []);
    const targetTrailIdx = storedTrails.findIndex(t => t.id === trailId);
    if (targetTrailIdx === -1) return;

    const targetTrail = storedTrails[targetTrailIdx];
    const targetTaskIdx = targetTrail.tasks.findIndex(t => t.id === taskId);
    if (targetTaskIdx === -1) return;

    // 1. Mark target task as completed
    targetTrail.tasks[targetTaskIdx].completed = true;
    targetTrail.tasks[targetTaskIdx].active = false;

    // 2. Unlock the next task if there is one
    const nextTaskIdx = targetTaskIdx + 1;
    if (nextTaskIdx < targetTrail.tasks.length) {
      targetTrail.tasks[nextTaskIdx].locked = false;
      targetTrail.tasks[nextTaskIdx].active = true;
    }

    // 3. Recalculate completed counts and progress
    const completedCount = targetTrail.tasks.filter(t => t.completed).length;
    targetTrail.completedCount = completedCount;
    targetTrail.progress = Math.round((completedCount / targetTrail.tasks.length) * 100);
    if (completedCount === targetTrail.tasks.length) {
      targetTrail.status = 'Completa';
    } else {
      targetTrail.status = 'Em Progresso';
    }

    // 4. Save back to stores
    storedTrails[targetTrailIdx] = targetTrail;
    setStoredData('obd_trails', storedTrails);

    // 5. Update global repositories progress as well
    const storedRepos = getStoredData<any[]>('obd_repositories', []);
    if (storedRepos[0]) {
      // Calculate overall platform setup progress based on all trails
      const totalTasks = storedTrails.reduce((acc, t) => acc + t.tasksCount, 0);
      const totalCompleted = storedTrails.reduce((acc, t) => acc + t.completedCount, 0);
      storedRepos[0].progress = Math.round((totalCompleted / totalTasks) * 100);
      setStoredData('obd_repositories', storedRepos);
    }

    // 6. Append new activity log in localStorage
    const storedActivities = getStoredData<Activity[]>('obd_activities', []);
    const newAct: Activity = {
      id: 'act_' + Date.now(),
      type: 'task',
      title: 'Tarefa Concluída',
      description: `Rafael Ribeiro completou com sucesso a tarefa "${task.title}".`,
      time: 'há 1 min',
      icon: 'check',
      color: 'tertiary'
    };
    setStoredData('obd_activities', [newAct, ...storedActivities]);

    // 7. Update state variables to trigger re-render
    setTrail(targetTrail);
    setTask({ ...task, completed: true });

    // 8. Trigger toast message
    setToastMessage('🎉 Excelente! Tarefa completada com sucesso. Progresso atualizado!');
    setTimeout(() => {
      setToastMessage(null);
      // Navigate back to the trail timeline to see the updated sequence
      navigate(`/repository/${id}/trail/${trailId}`);
    }, 2500);
  };

  const handlePrevTask = () => {
    if (!trail || !task) return;
    const idx = trail.tasks.findIndex(t => t.id === task.id);
    if (idx > 0) {
      const prev = trail.tasks[idx - 1];
      navigate(`/repository/${id}/trail/${trailId}/task/${prev.id}`);
    }
  };

  const handleNextTask = () => {
    if (!trail || !task) return;
    const idx = trail.tasks.findIndex(t => t.id === task.id);
    if (idx < trail.tasks.length - 1) {
      const next = trail.tasks[idx + 1];
      if (!next.locked) {
        navigate(`/repository/${id}/trail/${trailId}/task/${next.id}`);
      }
    }
  };

  if (!trail || !task) {
    return (
      <div className="h-full flex items-center justify-center text-center p-6 text-on-surface-variant/60">
        <span className="material-symbols-outlined text-[32px] animate-pulse">info</span>
        <p className="text-xs mt-3 leading-relaxed">Carregando tarefa...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-left animate-fade-in relative">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 bg-[#10b981] text-white font-bold rounded-2xl shadow-2xl primary-glow animate-bounce text-xs flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          {toastMessage}
        </div>
      )}

      {/* Return link */}
      <button 
        onClick={() => navigate(`/repository/${id}/trail/${trailId}`)}
        className="flex items-center gap-1.5 text-xs text-on-surface-variant/80 hover:text-on-surface transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">arrow_back</span>
        Voltar para a Trilha
      </button>

      {/* Header containing status chip */}
      <div className="flex justify-between items-center pb-4 border-b border-white/5">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">{task.title}</h2>
          <p className="text-[10px] font-mono text-on-surface-variant/60 mt-1 uppercase">estimativa: {task.duration}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
          task.completed 
            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
            : 'bg-[#8083ff]/10 text-primary border border-[#8083ff]/20 animate-pulse'
        }`}>
          {task.completed ? 'Concluída ✅' : 'Em Progresso 🔄'}
        </span>
      </div>

      {/* Main split content layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left main instructional panel (70%) */}
        <div className="lg:col-span-8 glass p-6 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-6">
            {/* Objective */}
            {task.objective && (
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Objetivo de Aprendizado</h4>
                <p className="text-xs text-on-surface leading-relaxed font-medium">{task.objective}</p>
              </div>
            )}

            {/* Related Files */}
            {task.relatedFiles && task.relatedFiles.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Arquivos Relacionados</h4>
                <div className="flex flex-wrap gap-2">
                  {task.relatedFiles.map((file) => (
                    <div 
                      key={file} 
                      onClick={() => navigate(`/repository/${id}/explorer`)}
                      className="flex items-center gap-2 px-3 py-2 bg-[#16162e]/55 border border-white/5 hover:border-[#8083ff]/30 rounded-xl text-[10px] font-mono text-on-surface-variant hover:text-white cursor-pointer transition-colors"
                    >
                      <span className="material-symbols-outlined text-[14px] text-primary">description</span>
                      <span>{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions Markdown */}
            {task.instructions && (
              <div className="space-y-2 border-t border-white/5 pt-4">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Roteiro Guiado</h4>
                <div className="text-xs text-on-surface-variant leading-relaxed space-y-2 prose prose-invert max-w-none">
                  <ReactMarkdown>{task.instructions}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Collapsible contextual TIP */}
            {task.tip && (
              <div className="rounded-2xl border border-[#8083ff]/20 bg-[#8083ff]/5 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setShowTip(!showTip)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-[#c0c1ff] hover:bg-[#8083ff]/5 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-amber-500 material-fill">lightbulb</span>
                    <span>Dica Contextual de Arquitetura</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] opacity-60">
                    {showTip ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {showTip && (
                  <div className="px-4 pb-4 pt-1 text-[11px] leading-relaxed text-on-surface-variant/90 font-medium">
                    {task.tip}
                  </div>
                )}
              </div>
            )}

            {/* Syntax Reference Code */}
            {task.codeReference && (
              <div className="space-y-2 border-t border-white/5 pt-4">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Código de Referência</h4>
                <div className="bg-[#0f0f23] rounded-2xl border border-white/5 p-4 overflow-x-auto">
                  <pre className="text-[11px] font-mono text-left text-on-surface leading-5">
                    <code>{task.codeReference}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Action buttons at bottom */}
          <div className="flex justify-between items-center pt-6 border-t border-white/5 gap-4">
            <button 
              onClick={handlePrevTask}
              disabled={trail.tasks.findIndex(t => t.id === task.id) === 0}
              className="px-4 py-2.5 glass border-white/10 hover:bg-white/5 rounded-xl text-xs font-bold text-on-surface transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Anterior
            </button>

            {!task.completed ? (
              <button 
                onClick={handleCompleteTask}
                className="px-6 py-3.5 primary-gradient rounded-xl text-xs font-extrabold text-white shadow-xl primary-glow hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Marcar como Concluída ✅
              </button>
            ) : (
              <div className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
                Tarefa Concluída com Sucesso!
              </div>
            )}

            <button 
              onClick={handleNextTask}
              disabled={
                trail.tasks.findIndex(t => t.id === task.id) === trail.tasks.length - 1 || 
                trail.tasks[trail.tasks.findIndex(t => t.id === task.id) + 1]?.locked
              }
              className="px-4 py-2.5 glass border-white/10 hover:bg-white/5 rounded-xl text-xs font-bold text-on-surface transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Próxima →
            </button>
          </div>
        </div>

        {/* Right sidebar quick timeline selection (30%) */}
        <div className="lg:col-span-4 glass p-5 rounded-3xl border border-white/5 shadow-xl flex flex-col gap-4">
          <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider pb-3 border-b border-white/5">Sequência da Trilha</h3>
          <div className="relative pl-2 py-2 space-y-4 before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/5">
            {trail.tasks.map((t) => {
              const active = t.id === task.id;
              const completed = t.completed;
              const locked = t.locked;

              return (
                <div 
                  key={t.id}
                  onClick={() => !locked && navigate(`/repository/${id}/trail/${trailId}/task/${t.id}`)}
                  className={`relative pl-8 py-1 rounded-lg transition-all ${
                    locked 
                      ? 'opacity-40 cursor-not-allowed' 
                      : active
                      ? 'bg-white/5 text-[#c0c1ff] font-semibold'
                      : 'hover:bg-white/[0.02] cursor-pointer text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <div className={`absolute left-0 top-1.5 w-4.5 h-4.5 rounded-full border flex items-center justify-center text-[10px] ${
                    completed
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                      : active
                      ? 'bg-[#8083ff]/10 border-[#8083ff] text-primary'
                      : 'bg-[#111125] border-white/10'
                  }`}>
                    {completed ? (
                      <span className="material-symbols-outlined text-[10px]">check</span>
                    ) : locked ? (
                      <span className="material-symbols-outlined text-[10px]">lock</span>
                    ) : (
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                    )}
                  </div>
                  <div className="text-[11px] truncate max-w-[170px]">{t.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
