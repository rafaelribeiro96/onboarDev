import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Progress', icon: 'analytics', path: '/progress' },
    { name: 'Team', icon: 'groups', path: '/team' },
    { name: 'Settings', icon: 'settings', path: '/settings' }
  ];

  // Check if current path matches item or starts with a subpath (e.g. /repository/1 matches progress if it is active, or we check specifically)
  const isTabActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname.startsWith('/repository');
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 flex flex-col py-6 w-[240px] z-40 bg-[#16162e] border-r border-white/5 shadow-2xl">
      {/* Brand Header */}
      <div 
        className="px-6 mb-8 cursor-pointer" 
        onClick={() => navigate('/dashboard')}
      >
        <div className="flex items-center gap-2">
          {/* SVG Rocket Logo */}
          <span className="text-primary text-[32px] animate-pulse flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#8083ff]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5z"/><path d="m12 15-3-3m1.35-2.35L15 4c1-1 2-1 3 0s1 2 0 3l-5.65 4.65c-.5.35-.65.85-.7 1.35-.05.5-.05 1.5-.05 1.5l-1.5.5c-1.13.38-1.5.38-2.5 0-.5-.2-.5-.5-1-1-.5-.5-.8-1-1-1.5-.38-1-1.13-1.37-1.5-2.5l.5-1.5s1 0 1.5-.05c.5-.05 1-.2 1.35-.7z"/><path d="M15 9h.01"/><path d="M16 8h.01"/></svg>
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#c0c1ff] to-[#d0bcff] bg-clip-text text-transparent">OnboardDev</h1>
            <p className="text-[10px] uppercase font-mono tracking-widest text-on-surface-variant/60">onboarding hub</p>
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const active = isTabActive(item.path);
          return (
            <div
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                active
                  ? 'bg-gradient-to-r from-[rgba(128,131,255,0.15)] to-[rgba(208,188,255,0.05)] text-[#c0c1ff] border-l-4 border-[#8083ff] pl-3 font-semibold'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface'
              }`}
            >
              <span className={`material-symbols-outlined ${active ? 'material-fill text-[#8083ff]' : 'text-on-surface-variant/70'}`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium tracking-wide">{item.name}</span>
            </div>
          );
        })}
      </nav>

      {/* Footer Profile metadata */}
      <div className="mt-auto px-3 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <img 
              alt="User profile avatar" 
              className="w-9 h-9 rounded-full object-cover border border-[#8083ff]/30 shadow-md"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
            />
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-on-surface truncate">Rafael Ribeiro</p>
              <p className="text-[10px] text-on-surface-variant/70 truncate">Frontend Dev</p>
            </div>
          </div>
          
          <button 
            onClick={onLogout}
            title="Sair"
            className="hover:bg-red-500/10 text-on-surface-variant hover:text-[#ffb4ab] rounded-lg p-1.5 transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
