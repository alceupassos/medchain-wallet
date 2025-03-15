
import { useState } from 'react';
import { Shield, Lock, Share2 } from 'lucide-react';
import ProfileCard from '@/components/profile/ProfileCard';
import AppButton from '@/components/ui/AppButton';

const Profile = () => {
  const [profileSections] = useState([
    {
      id: 'personal',
      title: 'Personal Information',
      fields: [
        { id: 'name', label: 'Full Name', value: 'John Doe' },
        { id: 'dob', label: 'Date of Birth', value: 'January 15, 1980' },
        { id: 'gender', label: 'Gender', value: 'Male' },
        { id: 'bloodType', label: 'Blood Type', value: 'O+' },
        { id: 'height', label: 'Height', value: '5\'10" (178 cm)' },
        { id: 'weight', label: 'Weight', value: '165 lbs (75 kg)' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact Information',
      fields: [
        { id: 'email', label: 'Email', value: 'john.doe@example.com' },
        { id: 'phone', label: 'Phone', value: '+1 (555) 123-4567' },
        { id: 'address', label: 'Address', value: '123 Main Street, Anytown, CA 94539' },
        { id: 'emergency', label: 'Emergency Contact', value: 'Jane Doe (Spouse) - +1 (555) 987-6543' }
      ]
    },
    {
      id: 'conditions',
      title: 'Medical Conditions',
      fields: [
        { 
          id: 'chronic', 
          label: 'Chronic Conditions', 
          value: ['Hypertension (diagnosed 2015)', 'Type 2 Diabetes (diagnosed 2018)'],
          isArray: true
        },
        { 
          id: 'allergies', 
          label: 'Allergies', 
          value: ['Penicillin - Severe', 'Peanuts - Moderate', 'Dust - Mild'],
          isArray: true
        },
        { 
          id: 'surgeries', 
          label: 'Past Surgeries', 
          value: ['Appendectomy (2010)', 'Knee Arthroscopy (2019)'],
          isArray: true
        }
      ]
    },
    {
      id: 'medications',
      title: 'Current Medications',
      fields: [
        { 
          id: 'prescriptions', 
          label: 'Prescriptions', 
          value: [
            'Lisinopril 10mg - Once daily', 
            'Metformin 500mg - Twice daily', 
            'Atorvastatin 20mg - Once daily at bedtime'
          ],
          isArray: true
        },
        { 
          id: 'supplements', 
          label: 'Supplements', 
          value: ['Multivitamin - Once daily', 'Vitamin D3 2000 IU - Once daily'],
          isArray: true
        }
      ]
    },
    {
      id: 'family',
      title: 'Family History',
      fields: [
        { 
          id: 'familyConditions', 
          label: 'Family Medical Conditions', 
          value: [
            'Father: Hypertension, Coronary Artery Disease', 
            'Mother: Type 2 Diabetes', 
            'Sister: None'
          ],
          isArray: true
        }
      ]
    }
  ]);

  return (
    <div className="pt-20 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-semibold">Medical Profile</h1>
              <p className="text-gray-500 mt-1">Manage your personal medical information</p>
            </div>
            <div className="flex space-x-3">
              <AppButton
                variant="outline"
                icon={<Share2 size={16} />}
                iconPosition="left"
              >
                Share Profile
              </AppButton>
              <AppButton
                icon={<Lock size={16} />}
                iconPosition="left"
              >
                Manage Access
              </AppButton>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="glass-card rounded-xl p-5 animate-slide-up">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">JD</span>
                </div>
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">43 years old, Male</p>
              </div>
              
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <Shield size={12} className="mr-1" />
                  Profile Verified
                </span>
              </div>
              
              <div className="text-sm">
                <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500">Last Updated</span>
                  <span className="font-medium">June 10, 2023</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500">Blood Type</span>
                  <span className="font-medium">O+</span>
                </div>
                <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500">Allergies</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between py-2 border-t border-b border-gray-200 dark:border-gray-800">
                  <span className="text-gray-500">Active Medications</span>
                  <span className="font-medium">3</span>
                </div>
              </div>
              
              <div className="mt-4">
                <AppButton variant="outline" fullWidth>
                  Download Profile
                </AppButton>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-5 mt-6 animate-slide-up [animation-delay:100ms]">
              <div className="flex items-center mb-4">
                <Lock size={18} className="text-medical mr-2" />
                <h3 className="text-base font-medium">Privacy Status</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span>Profile Sharing</span>
                  <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Emergency Access</span>
                  <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Enabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Data Encryption</span>
                  <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Enabled</span>
                </div>
                <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                  <button className="text-primary text-sm font-medium hover:underline">
                    Manage Privacy Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3 animate-scale-in">
            <ProfileCard sections={profileSections} />
            
            {/* Blockchain verification card */}
            <div className="glass-card rounded-xl p-5 mt-6 animate-scale-in [animation-delay:100ms]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Blockchain Verification</h3>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <Shield size={12} className="mr-1" />
                  Verified
                </span>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Your medical profile is securely stored on the blockchain, ensuring that your information cannot be tampered with and is always accessible to you.
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-800">
                <div className="space-y-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Hash:</span>
                    <span>0x8f23e3a96f5b5ac8712b9ab9c1c98e...</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Last Updated:</span>
                    <span>2023-06-10 14:32:45 UTC</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">Signature:</span>
                    <span>valid (RSA-256)</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 text-sm text-primary font-medium hover:underline">
                View Detailed Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
