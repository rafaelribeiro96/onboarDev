import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { RepositoryMap } from './pages/RepositoryMap';
import { TrailsList } from './pages/TrailsList';
import { TrailDetail } from './pages/TrailDetail';
import { TaskDetail } from './pages/TaskDetail';
import { Progress } from './pages/Progress';
import { Team } from './pages/Team';
import { AIDocuments } from './pages/AIDocuments';
import { CodeExplorer } from './pages/CodeExplorer';
import { Settings } from './pages/Settings';

// Import Global Components
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { getStoredData, Repository, initializeDemoData } from './data/mockData';

// Simulated Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user_logged_in') === 'true';
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Global Layout Shell for Protected Pages
const DashboardLayout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    // Populate and load data
    initializeDemoData();
    setRepositories(getStoredData<Repository[]>('obd_repositories', []));
  }, []);

  return (
    <div className="bg-[#111125] text-on-surface min-h-screen">
      {/* Persistent Left Sidebar (Collapsible in mobile) */}
      <Sidebar 
        onLogout={onLogout} 
        isOpen={isMobileSidebarOpen} 
        onClose={() => setIsMobileSidebarOpen(false)} 
      />

      {/* Main content grid (right to the sidebar on desktop) */}
      <div className="md:ml-[240px] ml-0 flex flex-col min-h-screen transition-all duration-300">
        {/* Persistent Top Nav Bar */}
        <Header 
          repositories={repositories} 
          onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} 
        />

        {/* Padding and responsive view area */}
        <main className="flex-1 pt-24 px-4 sm:px-6 md:px-8 pb-16 max-w-[1440px] w-full mx-auto">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="repository/:id" element={<RepositoryMap />} />
            <Route path="repository/:id/trails" element={<TrailsList />} />
            <Route path="repository/:id/trail/:trailId" element={<TrailDetail />} />
            <Route path="repository/:id/trail/:trailId/task/:taskId" element={<TaskDetail />} />
            <Route path="progress" element={<Progress />} />
            <Route path="team" element={<Team />} />
            <Route path="repository/:id/docs" element={<AIDocuments />} />
            <Route path="repository/:id/explorer" element={<CodeExplorer />} />
            <Route path="settings" element={<Settings />} />
            {/* Redirect any sub-paths of / to /dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_logged_in') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('user_logged_in');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Dashboard Area */}
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <DashboardLayout onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
