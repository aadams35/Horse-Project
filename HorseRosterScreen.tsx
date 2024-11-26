import React, { useState, useEffect } from 'react';

// SVG Icons
const StablesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86 1.82 9.02c-.54.38-.59 1.12-.14 1.53l1.46 1.42c.44.4 1.1.39 1.55-.06l7.45-7.02c.44-.42.44-1.1 0-1.52l-.01-.01a1.065 1.065 0 0 0-1.54.06z"/>
    <path d="M10 10v5s-.52.68-1 1H3c-.48-.32-1-1-1-1V9.5a1 1 0 0 1 .61-.92L8 5"/>
    <path d="M22 22v-6H2v6h20z"/>
  </svg>
);

const HorseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-1 5.74 1.5 5.5 1.25-.5 5.5-2.5 5.5-2.5"/>
    <path d="M2.75 10.79c1.56-1.32 4.54-1.54 6.25.09 1.96 1.94 2.75 3.68 3.75 5.16"/>
    <path d="M18 12c1-1 2-3 2-5 0-1.5-1-3.5-3-3.5-1.5 0-2.5.5-3 1.5"/>
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const TodoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h12"/>
    <path d="M3 12h18"/>
    <path d="M3 17h9"/>
    <circle cx="17" cy="17" r="3"/>
    <path d="m21 21-1.5-1.5"/>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Schedule vet appointment', date: '2024-12-01', completed: false },
    { id: 2, title: 'Order new hay supplies', date: '2024-12-05', completed: true },
    { id: 3, title: 'Farrier visit', date: '2024-12-10', completed: false },
    { id: 4, title: 'Update vaccination records', date: '2024-12-15', completed: false }
  ]);

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#6EA5FF]">
          Upcoming Tasks & Trips
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          + Add Task
        </button>
      </div>
      <div className="bg-white dark:bg-[#1E2742] rounded-xl shadow-lg p-4 space-y-3">
        {tasks.map(task => (
          <div key={task.id} 
            className={`flex items-center justify-between p-3 rounded-lg border
              ${task.completed 
                ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                : 'bg-white dark:bg-[#1E2742] border-gray-200 dark:border-gray-700'}`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded border-gray-300 dark:border-gray-600"
              />
              <div>
                <p className={`font-medium ${task.completed 
                  ? 'text-gray-400 dark:text-gray-500 line-through' 
                  : 'text-gray-800 dark:text-gray-200'}`}>
                  {task.title}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Due: {task.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'stables', icon: StablesIcon, label: 'Stables' },
    { id: 'horses', icon: HorseIcon, label: 'Horses' },
    { id: 'coggins', icon: DocumentIcon, label: 'Coggins' },
    { id: 'todo', icon: TodoIcon, label: 'Todo' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1E2742] border-t dark:border-gray-700 shadow-2xl">
      <div className="grid grid-cols-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex flex-col items-center justify-center 
              py-3 
              transition-colors 
              ${activeTab === tab.id 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gray-500 dark:text-gray-400'}
              hover:bg-gray-100 dark:hover:bg-gray-800
            `}
          >
            <tab.icon />
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const HorseRosterScreen = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('horse-app-theme');
    return savedTheme || 'light';
  });

  const [activeTab, setActiveTab] = useState('horses');
  const [horses] = useState([/* ... previous horses data ... */]);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('horse-app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'stables':
        return <div>Stables Content</div>;
      case 'horses':
        return <div className="grid md:grid-cols-3 gap-6 pb-20">{/* ... horses grid ... */}</div>;
      case 'coggins':
        return <div>Coggins Documents</div>;
      case 'todo':
        return <TodoList />;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] dark:bg-[#182234] transition-colors duration-300 pb-20">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E3A8A] dark:text-[#6EA5FF]">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <button 
            onClick={toggleTheme}
            className="bg-white dark:bg-[#1E2742] border border-gray-200 dark:border-gray-700 
                     p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
        {renderContent()}
      </div>
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default HorseRosterScreen;
