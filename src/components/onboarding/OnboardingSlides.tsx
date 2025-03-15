
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Shield, UserRound, Share2, FileText } from 'lucide-react';
import AppButton from '../ui/AppButton';

interface OnboardingProps {
  onComplete: () => void;
}

const OnboardingSlides = ({ onComplete }: OnboardingProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Welcome to MedChain",
      description: "Your secure digital medical wallet powered by blockchain technology. Manage and control all your medical records in one place.",
      icon: <Shield size={48} className="text-medical" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "You Control Your Data",
      description: "Own your medical information with full control over who has access. Your records are encrypted and only accessible with your permission.",
      icon: <UserRound size={48} className="text-medical" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Seamless Sharing",
      description: "Securely share your medical records with healthcare providers. Grant temporary access with just a few taps when needed.",
      icon: <Share2 size={48} className="text-medical" />,
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Immutable Records",
      description: "Blockchain technology ensures your medical history cannot be altered or falsified, providing a trusted record of your health journey.",
      icon: <FileText size={48} className="text-medical" />,
      image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];
  
  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide(prevSlide => prevSlide + 1);
    }
  };
  
  const prevSlide = () => {
    setCurrentSlide(prevSlide => Math.max(0, prevSlide - 1));
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-10">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                {slides[currentSlide].icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div className="md:w-1/2 h-64 md:h-full bg-gray-100 relative overflow-hidden">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r md:from-background/80 md:to-transparent"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="p-6 md:p-10 flex items-center justify-between bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <AppButton 
          onClick={nextSlide}
          size="md"
          icon={<ArrowRight size={16} />}
          iconPosition="right"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
        </AppButton>
      </div>
    </div>
  );
};

export default OnboardingSlides;
