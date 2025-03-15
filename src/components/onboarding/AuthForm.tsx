import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Shield, FileText } from 'lucide-react';
import AppButton from '../ui/AppButton';

interface AuthFormProps {
  onComplete: () => void;
}

const AuthForm = ({ onComplete }: AuthFormProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      onComplete();
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 relative overflow-hidden hidden md:block">
        <div className="absolute inset-0 medical-gradient opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
          alt="Medical professionals"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10">
          <div className="max-w-md text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png"
                  alt="MedChain Logo"
                  className="w-32 mb-3"
                />
                <h1 className="text-4xl font-display font-semibold">MedChain</h1>
                <p className="text-xl mt-2">Sua saúde, sua chave, nosso cofre</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="glass-card bg-white/10 p-4 rounded-lg text-left">
                <div className="flex items-center">
                  <div className="rounded-full bg-white/20 p-2 mr-3">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Secure & Private</h3>
                    <p className="text-sm text-white/80">Your data is encrypted and only accessible with your permission</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card bg-white/10 p-4 rounded-lg text-left">
                <div className="flex items-center">
                  <div className="rounded-full bg-white/20 p-2 mr-3">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Complete Control</h3>
                    <p className="text-sm text-white/80">Manage all your medical records in one secure place</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10 lg:p-16">
        <div className="w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-2 md:hidden">
              <img 
                src="/lovable-uploads/f328f86f-9e20-428c-b571-91f861610d33.png"
                alt="MedChain Logo"
                className="w-10 h-10 mr-2"
              />
              <h1 className="text-2xl font-display font-semibold">MedChain</h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {isLogin 
                ? 'Sign in to access your medical records securely.' 
                : 'Join MedChain to securely manage your medical data.'}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      <User size={18} />
                    </span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Mail size={18} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <Lock size={18} />
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {isLogin && (
                <div className="flex items-center justify-end">
                  <button type="button" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}
              
              <AppButton
                type="submit"
                fullWidth
                isLoading={loading}
                loadingText={isLogin ? "Signing in..." : "Creating account..."}
                icon={<ArrowRight size={16} />}
                iconPosition="right"
                className="mt-6"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </AppButton>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={toggleView}
                  className="text-primary hover:underline font-medium"
                >
                  {isLogin ? 'Create an account' : 'Sign in'}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
