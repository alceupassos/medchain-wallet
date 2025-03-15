
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import AppButton from '../ui/AppButton';

interface AuthRegisterProps {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  toggleView: () => void;
}

const AuthRegister = ({ formData, handleChange, handleSubmit, loading, toggleView }: AuthRegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
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
        Create your account
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Join MedChain to securely manage your medical data.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Create a strong password"
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
        
        <AppButton
          type="submit"
          fullWidth
          isLoading={loading}
          loadingText="Creating account..."
          icon={<ArrowRight size={16} />}
          iconPosition="right"
          className="mt-6"
        >
          Create Account
        </AppButton>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={toggleView}
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default AuthRegister;
