
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, User, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [notificationCount] = useState(3); // Replace with actual notification logic
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Welcome';
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/profile') return 'Medical Profile';
    if (path === '/records') return 'Medical Records';
    if (path === '/access') return 'Access Control';
    if (path === '/emergency') return 'Emergency Access';
    return path.charAt(1).toUpperCase() + path.slice(2).replace(/-/g, ' ');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-30 px-4 py-3 transition-all duration-200",
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          {!location.pathname.includes('/onboarding') && (
            <button 
              onClick={toggleSidebar} 
              className="p-2 mr-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={20} />
            </button>
          )}
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <div className="w-8 h-8 bg-medical rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-medical-accent rounded-full"></div>
                </div>
              </div>
              <span className="ml-2 font-display font-semibold text-lg text-gray-900 dark:text-white">
                MedChain
              </span>
            </Link>
          </div>
        </div>
        
        {!location.pathname.includes('/onboarding') && (
          <h1 className="text-xl font-display font-medium hidden md:block">
            {getPageTitle()}
          </h1>
        )}
        
        <div className="flex items-center space-x-1">
          {!location.pathname.includes('/onboarding') && (
            <>
              <button 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center transform translate-x-1 -translate-y-1">
                    {notificationCount}
                  </span>
                )}
              </button>
              
              <button 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Settings"
              >
                <Settings size={20} />
              </button>
            </>
          )}
          
          <Link 
            to="/profile" 
            className="flex items-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-muted overflow-hidden">
              <User size={16} />
            </div>
            {!isMobile && !location.pathname.includes('/onboarding') && (
              <span className="ml-2 text-sm font-medium">John Doe</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
