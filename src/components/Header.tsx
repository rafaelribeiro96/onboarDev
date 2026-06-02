import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface HeaderProps {
  repositories: { id: string; name: string }[];
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ repositories, onToggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Mock Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, text: '🔥 Streaks: Você atingiu 5 dias consecutivos!', unread: true },
    { id: 2, text: '⚠️ Alerta: Maria Oliveira está bloqueada no setup do Docker!', unread: true },
    { id: 3, text: '🏆 Conquista: Badge "Explorador" liberado!', unread: false }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  // Generate dynamic breadcrumbs based on route
  const getBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(p => p !== '');
    const crumbs = [{ label: 'Dashboard', path: '/dashboard' }];

    if (paths[0] === 'repository' && paths[1]) {
      const repo = repositories.find(r => r.id === paths[1]);
      const repoName = repo ? repo.name : 'ecommerce-platform';
      crumbs.push({ label: repoName, path: `/repository/${paths[1]}` });

      if (paths[2] === 'trails') {
        crumbs.push({ label: 'Trilhas', path: `/repository/${paths[1]}/trails` });
      } else if (paths[2] === 'trail' && paths[3]) {
        crumbs.push({ label: 'Trilhas', path: `/repository/${paths[1]}/trails` });
        crumbs.push({ label: 'Fluxo de Compra', path: `/repository/${paths[1]}/trail/${paths[3]}` });

        if (paths[4] === 'task' && paths[5]) {
          crumbs.push({ label: 'Processamento de Pagamento', path: location.pathname });
        }
      } else if (paths[2] === 'docs') {
        crumbs.push({ label: 'Documentação IA', path: location.pathname });
      } else if (paths[2] === 'explorer') {
        crumbs.push({ label: 'Code Explorer', path: location.pathname });
      }
    } else if (paths[0] === 'progress') {
      crumbs[0] = { label: 'Meu Progresso', path: '/progress' };
    } else if (paths[0] === 'team') {
      crumbs[0] = { label: 'Gestão do Time', path: '/team' };
    } else if (paths[0] === 'settings') {
      crumbs[0] = { label: 'Configurações', path: '/settings' };
    }

    return crumbs;
  };

  const crumbs = getBreadcrumbs();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-30 flex justify-between items-center px-4 sm:px-6 md:pl-[268px] md:pr-8 h-16 bg-[#111125]/60 backdrop-blur-xl border-b border-white/5 shadow-md transition-all duration-300">
      {/* Left side: Hamburger button (mobile) and Breadcrumb Navigation */}
      <div className="flex items-center gap-3 overflow-hidden">
        {onToggleSidebar && (
          <button 
            onClick={onToggleSidebar}
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all cursor-pointer shrink-0"
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        )}

        <div className="flex items-center gap-1.5 text-xs sm:text-sm overflow-hidden whitespace-nowrap">
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <React.Fragment key={crumb.path + idx}>
                {idx > 0 && <span className="text-on-surface-variant/40 shrink-0">/</span>}
                {isLast ? (
                  <span className="font-semibold text-primary truncate max-w-[120px] sm:max-w-[180px] shrink-0">{crumb.label}</span>
                ) : (
                  <Link 
                    to={crumb.path} 
                    className="text-on-surface-variant/70 hover:text-on-surface hover:underline transition-colors truncate max-w-[100px] sm:max-w-[150px] shrink-0"
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Action items: Search, notification dropdown and profile */}
      <div className="flex items-center gap-4 sm:gap-6 shrink-0">
        {/* Mock Search Bar (Hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-3 bg-[#1a1a2e] px-4 py-2 rounded-full border border-white/5 w-64 xl:w-80 shadow-inner group focus-within:border-[#8083ff]/30 transition-all duration-300">
          <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px] group-focus-within:text-[#8083ff] transition-colors">search</span>
          <input 
            className="bg-transparent border-none outline-none focus:ring-0 text-xs w-full placeholder:text-on-surface-variant/40 text-on-surface" 
            placeholder="Buscar documentação, arquivos, tarefas..." 
            type="text"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Notifications Trigger */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className={`hover:bg-white/5 rounded-full p-2.5 text-on-surface-variant hover:text-on-surface transition-all cursor-pointer relative ${
                showNotifications ? 'bg-white/5 text-on-surface' : ''
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-[#ffb4ab] text-[#690005] font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-[#111125] animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown Card */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 glass rounded-2xl p-4 shadow-2xl border border-white/10 z-50 animate-fade-in">
                <div className="flex justify-between items-center pb-2 mb-3 border-b border-white/5">
                  <h4 className="text-xs font-bold text-on-surface">Notificações</h4>
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllRead} 
                      className="text-[10px] text-[#8083ff] hover:underline cursor-pointer"
                    >
                      Marcar todas como lidas
                    </button>
                  )}
                </div>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {notifications.map((n) => (
                    <div 
                      key={n.id} 
                      className={`p-2.5 rounded-xl border text-xs transition-all ${
                        n.unread 
                          ? 'bg-[#8083ff]/10 border-[#8083ff]/20 text-[#c0c1ff]' 
                          : 'bg-white/5 border-white/5 text-on-surface-variant/80'
                      }`}
                    >
                      <div className="flex gap-2">
                        <span className={`material-symbols-outlined text-[16px] mt-0.5 ${n.unread ? 'text-[#8083ff]' : 'text-on-surface-variant/50'}`}>
                          {n.text.includes('🏆') ? 'military_tech' : n.text.includes('🔥') ? 'local_fire_department' : 'warning'}
                        </span>
                        <p>{n.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown Trigger */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 cursor-pointer border border-[#8083ff]/20 rounded-full p-0.5 hover:border-[#8083ff]/40 transition-colors"
            >
              <img 
                alt="User headshot avatar" 
                className="w-8 h-8 rounded-full object-cover shadow-inner"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
              />
            </button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-48 glass rounded-2xl p-2 shadow-2xl border border-white/10 z-50 animate-fade-in">
                <div 
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/progress');
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-on-surface-variant hover:text-on-surface hover:bg-white/5 cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">account_circle</span>
                  <span>Meu Perfil</span>
                </div>
                <div 
                  onClick={() => {
                    setShowProfileMenu(false);
                    navigate('/settings');
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-on-surface-variant hover:text-on-surface hover:bg-white/5 cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">settings</span>
                  <span>Configurações</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
