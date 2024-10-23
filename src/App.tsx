import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Mosque Management System</h1>
          </div>
        </header>
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;