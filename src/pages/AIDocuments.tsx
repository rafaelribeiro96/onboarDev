import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoredData, DocModule } from '../data/mockData';

export const AIDocuments: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [docs, setDocs] = useState<DocModule[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocModule | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedDocs = getStoredData<DocModule[]>('obd_docs', []);
    setDocs(storedDocs);
    // Select "Payment Service" as default
    const paymentDoc = storedDocs.find(d => d.id === 'payment_svc');
    if (paymentDoc) {
      setSelectedDoc(paymentDoc);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab === 'map') navigate(`/repository/${id}`);
    else if (tab === 'trails') navigate(`/repository/${id}/trails`);
    else if (tab === 'docs') navigate(`/repository/${id}/docs`);
    else if (tab === 'explorer') navigate(`/repository/${id}/explorer`);
  };

  const filteredDocs = docs.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    d.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in text-left">
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
          className="text-sm font-medium text-on-surface-variant/70 hover:text-on-surface pb-3 px-1 cursor-pointer transition-colors"
        >
          Trilhas de Onboarding
        </button>
        <button 
          onClick={() => handleTabChange('docs')}
          className="text-sm font-semibold text-primary pb-3 border-b-2 border-[#8083ff] px-1 cursor-pointer"
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

      {/* Split Tree View Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch min-h-[560px]">
        {/* Left Tree Navigator (260px) */}
        <div className="w-full md:w-64 glass rounded-3xl p-4 border border-white/5 flex flex-col gap-4 shadow-xl shrink-0">
          {/* Search bar inside navigation */}
          <div className="flex items-center gap-2 bg-[#1a1a2e] px-3 py-2 rounded-xl border border-white/5 text-xs shadow-inner">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant/50">search</span>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filtrar arquivos..."
              className="bg-transparent border-none outline-none w-full text-[11px] placeholder:text-on-surface-variant/30 text-on-surface"
            />
          </div>

          {/* Module Categories Tree */}
          <div className="space-y-4 overflow-y-auto max-h-[460px] pr-1">
            {/* Category: Backend */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant/50 px-2">
                <span className="material-symbols-outlined text-[14px]">folder</span>
                <span>Backend Modules</span>
              </div>
              <div className="space-y-0.5 pl-2">
                {filteredDocs.filter(d => d.category === 'Backend').map(d => (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDoc(d)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                      selectedDoc?.id === d.id
                        ? 'bg-[#8083ff]/10 text-primary border-l-2 border-l-[#8083ff] font-semibold pl-2'
                        : 'text-on-surface-variant/80 hover:bg-white/5 hover:text-on-surface'
                    }`}
                  >
                    {d.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Category: Frontend (Mock Folders for view) */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant/50 px-2">
                <span className="material-symbols-outlined text-[14px]">folder</span>
                <span>Frontend UI</span>
              </div>
              <div className="space-y-0.5 pl-2">
                {['Auth UI', 'Product UI', 'Cart UI', 'Checkout UI'].map(name => (
                  <div 
                    key={name}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-on-surface-variant/40 cursor-not-allowed flex justify-between items-center"
                    title="Em desenvolvimento na Trilha 4"
                  >
                    <span>{name}</span>
                    <span className="text-[9px] uppercase font-mono px-1 rounded bg-white/5 border border-white/5">lock</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Category: Utils */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant/50 px-2">
                <span className="material-symbols-outlined text-[14px]">folder</span>
                <span>Utils & Core</span>
              </div>
              <div className="space-y-0.5 pl-2">
                {['Logger', 'Validation', 'Config'].map(name => (
                  <div 
                    key={name}
                    className="px-3 py-2 rounded-xl text-xs font-medium text-on-surface-variant/40 cursor-not-allowed flex justify-between items-center"
                  >
                    <span>{name}</span>
                    <span className="text-[9px] uppercase font-mono px-1 rounded bg-white/5 border border-white/5">lock</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Details Viewer */}
        <div className="flex-1 glass rounded-3xl p-6 border border-white/5 flex flex-col gap-6 shadow-xl overflow-y-auto max-h-[560px]">
          {selectedDoc ? (
            <div className="space-y-6">
              {/* Header section with IA badge */}
              <div className="flex justify-between items-start gap-4 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{selectedDoc.name}</h3>
                  <p className="text-[9px] font-mono text-on-surface-variant/50 mt-1 uppercase">{selectedDoc.updatedAt}</p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#8083ff]/10 border border-[#8083ff]/20 text-[10px] text-primary font-bold rounded-full shadow-md animate-pulse">
                  <span>🤖</span>
                  <span>Gerado por IA</span>
                </div>
              </div>

              {/* Module Description */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Descrição Funcional</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{selectedDoc.description}</p>
              </div>

              {/* API Reference Table */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Métodos e Assinaturas</h4>
                <div className="overflow-x-auto rounded-2xl border border-white/5">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/5 text-on-surface-variant/80 font-bold font-mono text-[10px] uppercase">
                        <th className="p-3">Método</th>
                        <th className="p-3">Assinatura / Parâmetros</th>
                        <th className="p-3">Retorno</th>
                        <th className="p-3">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-medium text-on-surface-variant">
                      {selectedDoc.api.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.01]">
                          <td className="p-3 font-bold text-white font-mono">{item.method}</td>
                          <td className="p-3 font-mono text-primary text-[10px]">{item.params}</td>
                          <td className="p-3 font-mono text-[#d0bcff] text-[10px]">{item.returnType}</td>
                          <td className="p-3 text-[11px] leading-relaxed max-w-[200px]">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Exemplo Prático de Integração</h4>
                <div className="bg-[#0f0f23] rounded-2xl border border-white/5 p-4 overflow-x-auto">
                  <pre className="text-[11px] font-mono text-left text-on-surface leading-5">
                    <code>{selectedDoc.example}</code>
                  </pre>
                </div>
              </div>

              {/* Dependencies tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Depende de</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDoc.dependencies.map(d => (
                      <span key={d} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-on-surface-variant font-bold">{d}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Usado por</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDoc.usedBy.map(d => (
                      <span key={d} className="px-2.5 py-1 bg-[#8083ff]/10 border border-[#8083ff]/20 rounded text-[10px] font-mono text-primary font-bold">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-[32px] animate-pulse">info</span>
              <p className="text-xs mt-3 leading-relaxed">Selecione um arquivo de documentação no menu lateral.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
