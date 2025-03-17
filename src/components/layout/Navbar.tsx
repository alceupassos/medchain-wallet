
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed w-full h-16 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4">
      <div className="flex h-full items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
            <span className="sr-only">Abrir menu</span>
          </button>
          
          <Link to="/dashboard" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png" 
              alt="MedChain Logo" 
              className="h-10 w-auto"
            />
            <span className="hidden md:inline-block text-xl font-bold text-primary">
              MedChain
            </span>
          </Link>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="w-full bg-gray-100 dark:bg-gray-800 pl-10 pr-4 py-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          
          <button
            type="button"
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
          >
            <Bell size={20} />
            <span className="sr-only">Notificações</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button
            type="button"
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            <span className="sr-only">Alternar tema</span>
          </button>
          
          <Link
            to="/settings"
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Settings size={20} />
            <span className="sr-only">Configurações</span>
          </Link>
          
          <button
            type="button"
            className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            JS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
