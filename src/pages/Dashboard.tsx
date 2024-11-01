import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package2, Boxes, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menuItems = [
    {
      title: 'Nomenclature',
      icon: Package2,
      description: 'Manage warehouse items and queue',
      path: '/nomenclature',
      color: 'bg-blue-500',
    },
    {
      title: 'Shelfs',
      icon: Boxes,
      description: 'View and manage storage locations',
      path: '/shelfs',
      color: 'bg-green-500',
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      description: 'Configure system parameters',
      path: '/settings',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">Warehouse Management</h1>
            <button
              onClick={() => logout()}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 text-left"
            >
              <div className={`inline-flex p-3 rounded-lg ${item.color} text-white mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}