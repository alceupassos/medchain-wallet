
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingSlides from '@/components/onboarding/OnboardingSlides';
import AuthForm from '@/components/onboarding/AuthForm';

const Index = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'onboarding' | 'auth'>('onboarding');
  
  const handleOnboardingComplete = () => {
    setStep('auth');
  };
  
  const handleAuthComplete = () => {
    navigate('/dashboard');
  };
  
  // For demo purposes, you can uncomment this to skip onboarding and auth
  // useEffect(() => {
  //   navigate('/dashboard');
  // }, [navigate]);
  
  return (
    <div className="min-h-screen">
      {step === 'onboarding' ? (
        <OnboardingSlides onComplete={handleOnboardingComplete} />
      ) : (
        <AuthForm onComplete={handleAuthComplete} />
      )}
    </div>
  );
};

export default Index;
