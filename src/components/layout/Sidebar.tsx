
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  UserRound, 
  FileText, 
  ShieldCheck, 
  QrCode,
  Pill,
  Calendar,
  Heart,
  BarChart3,
  MessageCircleQuestion,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const [navItems] = useState<NavItem[]>([
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Medical Profile', path: '/profile', icon: <UserRound size={20} /> },
    { name: 'Medical Records', path: '/records', icon: <FileText size={20} /> },
    { name: 'Medications', path: '/medications', icon: <Pill size={20} /> },
    { name: 'Appointments', path: '/appointments', icon: <Calendar size={20} /> },
    { name: 'Health Metrics', path: '/metrics', icon: <BarChart3 size={20} /> },
    { name: 'Access Control', path: '/access', icon: <ShieldCheck size={20} /> },
    { name: 'Emergency QR', path: '/emergency', icon: <QrCode size={20} /> },
  ]);
  
  const supportItems: NavItem[] = [
    { name: 'Help Center', path: '/help', icon: <HelpCircle size={20} /> },
    { name: 'Support', path: '/support', icon: <MessageCircleQuestion size={20} /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 md:hidden" />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 h-screen pt-20 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "md:w-64 w-[250px]"
        )}
      >
        <div className="h-full flex flex-col px-3 overflow-y-auto">
          <div className="space-y-1 py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg group transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <span className={cn(
                  "inline-flex items-center justify-center mr-3",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                )}>
                  {item.icon}
                </span>
                {item.name}
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
          </div>
          
          <div className="mt-4 px-3">
            <div className="glass-card rounded-lg p-4">
              <div className="flex items-center text-primary">
                <Heart size={18} className="mr-2" />
                <h3 className="text-sm font-medium">Health Status</h3>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-medical h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                <span className="ml-2 text-xs font-medium">87%</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Last updated: Today, 9:45 AM
              </div>
            </div>
          </div>
          
          <div className="mt-auto pb-6 pt-4 space-y-1">
            {supportItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg group transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <span className={cn(
                  "inline-flex items-center justify-center mr-3",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                )}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
            
            <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="inline-flex items-center justify-center mr-3 text-gray-500 dark:text-gray-400">
                <LogOut size={20} />
              </span>
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
