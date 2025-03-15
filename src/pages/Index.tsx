
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSlides from '@/components/onboarding/OnboardingSlides';
import AuthForm from '@/components/onboarding/AuthForm';

const Index = () => {
  const navigate = useNavigate();
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  
  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
  };
  
  const handleAuthComplete = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen">
      {!onboardingComplete ? (
        <OnboardingSlides onComplete={handleOnboardingComplete} />
      ) : (
        <AuthForm onComplete={handleAuthComplete} />
      )}
    </div>
  );
};

export default Index;
