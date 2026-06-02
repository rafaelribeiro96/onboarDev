import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeDemoData } from '../data/mockData';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDemoLogin();
  };

  const handleDemoLogin = () => {
    initializeDemoData();
    localStorage.setItem('user_logged_in', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] mesh-background flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Logo and Brand */}
        <div className="mb-8 flex flex-col items-center gap-2 cursor-pointer animate-fade-in" onClick={() => navigate('/')}>
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary shadow-lg animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-[#8083ff]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.95.12-3.5-.5-4.5z"/><path d="m12 15-3-3m1.35-2.35L15 4c1-1 2-1 3 0s1 2 0 3l-5.65 4.65c-.5.35-.65.85-.7 1.35-.05.5-.05 1.5-.05 1.5l-1.5.5c-1.13.38-1.5.38-2.5 0-.5-.2-.5-.5-1-1-.5-.5-.8-1-1-1.5-.38-1-1.13-1.37-1.5-2.5l.5-1.5s1 0 1.5-.05c.5-.05 1-.2 1.35-.7z"/><path d="M15 9h.01"/><path d="M16 8h.01"/></svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#c0c1ff] to-[#d0bcff] bg-clip-text text-transparent">OnboardDev</h1>
        </div>

        {/* Card Component */}
        <div className="w-full glass p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 relative animate-fade-in">
          <div className="space-y-1 text-center">
            <h3 className="text-lg font-bold text-white">Bem-vindo de volta</h3>
            <p className="text-xs text-on-surface-variant/70">Acesse sua conta para continuar</p>
          </div>

          {/* Social Logins */}
          <button 
            onClick={handleDemoLogin}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#0a0a0f] hover:bg-black/90 text-sm font-semibold rounded-xl border border-white/5 text-white cursor-pointer transition-all hover:scale-[1.01]"
          >
            {/* GitHub SVG Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Entrar com o GitHub
          </button>

          {/* Separator */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] bg-white/5 flex-1"></div>
            <span className="text-[10px] text-on-surface-variant/40 font-mono">ou credenciais</span>
            <div className="h-[1px] bg-white/5 flex-1"></div>
          </div>

          {/* Inputs Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] text-on-surface-variant/80 uppercase font-mono tracking-wider font-semibold">Endereço de E-mail</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nome@empresa.com"
                required
                className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-3 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner transition-colors"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] text-on-surface-variant/80 uppercase font-mono tracking-wider font-semibold">Senha Secreta</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-[#16162e] border border-white/5 rounded-xl px-4 py-3 text-xs text-on-surface outline-none focus:border-[#8083ff]/30 shadow-inner transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 primary-gradient rounded-xl text-xs font-bold text-white shadow-xl primary-glow hover:scale-[1.01] transition-all cursor-pointer"
            >
              Entrar na Conta
            </button>
          </form>

          {/* Additional details */}
          <div className="text-center pt-2">
            <p className="text-[11px] text-on-surface-variant/70">
              Não possui uma conta? <span className="text-[#8083ff] hover:underline cursor-pointer">Criar conta</span>
            </p>
          </div>
        </div>

        {/* Demo Mode Button Footer */}
        <div className="mt-8 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <button 
            onClick={handleDemoLogin}
            title="Carrega dados de e-commerce realistas"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-xs font-mono font-bold text-primary rounded-full border border-[#8083ff]/30 transition-all duration-300 shadow-md cursor-pointer hover:border-[#8083ff]/60"
          >
            <span>🎮</span>
            <span>Explorar Modo Demo</span>
            <span className="material-symbols-outlined text-[14px] text-on-surface-variant/40 group-hover:text-primary transition-colors">info</span>
          </button>
          <p className="text-[9px] text-on-surface-variant/50 font-mono mt-2">Dica: Carrega instantaneamente dados simulados de onboard</p>
        </div>
      </div>
    </div>
  );
};
