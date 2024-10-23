import React from 'react';
import { 
  Users, 
  Package, 
  Calendar, 
  Heart, 
  Home,
  Moon,
  Settings
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: Package, label: 'Assets', path: '/assets' },
  { icon: Calendar, label: 'Events', path: '/events' },
  { icon: Heart, label: 'Alms', path: '/alms' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-emerald-900 text-white p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-8">
        <Moon className="h-8 w-8" />
        <h1 className="text-xl font-bold">Masjid Manager</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-800 transition-colors mb-2"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}