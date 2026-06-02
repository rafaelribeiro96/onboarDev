import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStoredData, ArchNode, ArchEdge } from '../data/mockData';

export const RepositoryMap: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<ArchNode[]>([]);
  const [edges, setEdges] = useState<ArchEdge[]>([]);
  const [selectedNode, setSelectedNode] = useState<ArchNode | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    // Load Nodes and Edges from local storage
    const storedNodes = getStoredData<ArchNode[]>('obd_nodes', []);
    const storedEdges = getStoredData<ArchEdge[]>('obd_edges', []);
    setNodes(storedNodes);
    setEdges(storedEdges);
    
    // Select a default node (e.g. Payment Service) for premium presentation if available
    const paymentNode = storedNodes.find(n => n.id === 'payment_svc');
    if (paymentNode) {
      setSelectedNode(paymentNode);
    }
  }, []);

  const handleNodeClick = (node: ArchNode) => {
    setSelectedNode(node);
  };

  const handleTabChange = (tab: string) => {
    if (tab === 'map') navigate(`/repository/${id}`);
    else if (tab === 'trails') navigate(`/repository/${id}/trails`);
    else if (tab === 'docs') navigate(`/repository/${id}/docs`);
    else if (tab === 'explorer') navigate(`/repository/${id}/explorer`);
  };

  const getStyleForType = (type: ArchNode['type']) => {
    switch (type) {
      case 'frontend': return 'border-blue-500/30 text-blue-400';
      case 'backend': return 'border-purple-500/30 text-purple-400';
      case 'utils': return 'border-green-500/30 text-green-400';
      case 'database': return 'border-amber-500/30 text-amber-400';
      default: return 'border-white/10 text-white';
    }
  };

  const getDotColor = (type: ArchNode['type']) => {
    switch (type) {
      case 'frontend': return 'bg-blue-500';
      case 'backend': return 'bg-purple-500';
      case 'utils': return 'bg-green-500';
      case 'database': return 'bg-amber-500';
      default: return 'bg-white';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Sub-navbar tabs */}
      <div className="flex border-b border-white/5 pb-px gap-6">
        <button 
          onClick={() => handleTabChange('map')}
          className="text-sm font-semibold text-primary pb-3 border-b-2 border-[#8083ff] px-1 cursor-pointer"
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

      {/* Main Map Arena & Sidebar Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[600px]">
        {/* Map Canvas (70% width) */}
        <div className="flex-1 glass rounded-3xl border border-white/5 overflow-hidden relative min-h-[500px] lg:min-h-auto map-canvas">
          {/* Zoom controls top right */}
          <div className="absolute top-4 right-4 z-20 flex gap-1 bg-[#16162e] border border-white/10 rounded-xl p-1 shadow-lg">
            <button 
              onClick={() => setZoom(Math.min(zoom + 0.1, 1.4))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer text-on-surface font-bold text-sm"
            >
              +
            </button>
            <button 
              onClick={() => setZoom(Math.max(zoom - 0.1, 0.7))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer text-on-surface font-bold text-sm"
            >
              -
            </button>
          </div>

          {/* Legend bottom left */}
          <div className="absolute bottom-4 left-4 z-20 bg-[#16162e] border border-white/10 rounded-2xl p-3 shadow-lg space-y-1.5 text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              <span className="text-on-surface-variant">Frontend (UI Components)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
              <span className="text-on-surface-variant">Backend (Services/Gateways)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="text-on-surface-variant">Utils (Helpers/Configs)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="text-on-surface-variant">Database (Relational/Cache)</span>
            </div>
          </div>

          {/* Dynamic Nodes Container */}
          <div 
            className="w-full h-full min-h-[580px] absolute inset-0 transition-transform duration-300 origin-center"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* SVG Connecting lines overlaid below nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="18"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(128,131,255,0.25)" />
                </marker>
              </defs>
              {edges.map((edge, index) => {
                const fromNode = nodes.find(n => n.id === edge.from);
                const toNode = nodes.find(n => n.id === edge.to);
                if (!fromNode || !toNode) return null;

                // Line connection coordinates centered in each 110x36 box roughly
                const x1 = fromNode.x + 55;
                const y1 = fromNode.y + 18;
                const x2 = toNode.x + 55;
                const y2 = toNode.y + 18;

                return (
                  <line
                    key={index}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(128,131,255,0.22)"
                    strokeWidth="1.5"
                    markerEnd="url(#arrow)"
                  />
                );
              })}
            </svg>

            {/* Render Nodes as Glass Cards */}
            {nodes.map((node) => {
              const active = selectedNode?.id === node.id;
              const typeClass = getStyleForType(node.type);
              
              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeClick(node)}
                  className={`absolute w-32 h-10 px-2 rounded-xl glass border cursor-pointer flex items-center justify-between text-left transition-all duration-200 z-10 hover:scale-105 active:scale-95 shadow-lg ${typeClass} ${
                    active 
                      ? 'bg-[#1a1a3e] border-[#8083ff] shadow-[#8083ff]/10 scale-105' 
                      : ''
                  }`}
                  style={{ left: `${node.x}px`, top: `${node.y}px` }}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${getDotColor(node.type)}`}></span>
                    <span className="text-[10px] font-bold text-white font-mono truncate">{node.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-[12px] opacity-40">chevron_right</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Side Panel (30% width) */}
        <div className="w-full lg:w-80 glass rounded-3xl p-5 border border-white/5 flex flex-col justify-between shadow-2xl">
          {selectedNode ? (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <span className={`w-3.5 h-3.5 rounded-full ${getDotColor(selectedNode.type)}`}></span>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono">{selectedNode.label}</h3>
                    <p className="text-[9px] uppercase font-mono tracking-wider text-on-surface-variant/75 mt-0.5">{selectedNode.type}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Responsabilidade</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-medium">{selectedNode.description}</p>
                </div>

                {/* Key Files */}
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Arquivos Chave</h4>
                  <div className="space-y-1.5">
                    {selectedNode.files.map((file) => (
                      <div key={file} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#16162e]/50 border border-white/[0.03] text-[10px] font-mono text-on-surface">
                        <span className="material-symbols-outlined text-[14px] text-primary">description</span>
                        <span className="truncate">{file.split('/').pop()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dependencies */}
                {selectedNode.dependencies.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Depende de</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.dependencies.map((dep) => (
                        <span key={dep} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] font-mono text-on-surface-variant font-bold">
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Used By */}
                {selectedNode.usedBy.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] uppercase font-mono tracking-wider text-on-surface-variant/80 font-bold">Usado por</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedNode.usedBy.map((use) => (
                        <span key={use} className="px-2 py-0.5 bg-[#8083ff]/10 border border-[#8083ff]/20 rounded text-[9px] font-mono text-primary font-bold">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation Deep Links */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-white/5">
                <button 
                  onClick={() => navigate(`/repository/${id}/explorer`)}
                  className="py-2 bg-[#1a1a2e] border border-[#8083ff]/30 hover:border-[#8083ff]/50 rounded-xl text-[10px] font-bold text-primary transition-all duration-200 cursor-pointer text-center"
                >
                  Ver Código
                </button>
                <button 
                  onClick={() => navigate(`/repository/${id}/docs`)}
                  className="py-2 primary-gradient hover:scale-[1.01] rounded-xl text-[10px] font-bold text-white transition-all duration-200 cursor-pointer text-center"
                >
                  Ver Documentação
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-on-surface-variant/60">
              <span className="material-symbols-outlined text-[32px] animate-pulse">info</span>
              <p className="text-xs mt-3 leading-relaxed">Selecione um módulo no mapa para detalhar arquivos e dependências.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
