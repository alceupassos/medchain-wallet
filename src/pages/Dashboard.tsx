
import { useState } from 'react';
import { Stethoscope, Calendar, FileText, Clock, Zap, Heart, Activity, Pill } from 'lucide-react';
import AppButton from '@/components/ui/AppButton';
import SummaryCard from '@/components/dashboard/SummaryCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import HealthMetric from '@/components/ui/HealthMetric';
import MainLayout from '@/components/layout/MainLayout';

const Dashboard = () => {
  const [recentActivities] = useState([
    {
      id: '1',
      type: 'record' as const,
      title: 'Blood Test Results',
      description: 'Complete blood count (CBC) and metabolic panel results uploaded',
      timestamp: '2 hours ago',
      provider: 'City Hospital Lab',
      status: 'completed' as const
    },
    {
      id: '2',
      type: 'appointment' as const,
      title: 'Annual Checkup',
      description: 'Annual physical examination with Dr. Sarah Johnson',
      timestamp: 'Tomorrow, 10:00 AM',
      provider: 'Primary Care Center',
      status: 'upcoming' as const
    },
    {
      id: '3',
      type: 'medication' as const,
      title: 'Medication Reminder',
      description: 'Take Lisinopril 10mg once daily with food',
      timestamp: 'Today, 8:00 AM',
      status: 'active' as const
    },
    {
      id: '4',
      type: 'access' as const,
      title: 'Access Permission Granted',
      description: 'Dr. Michael Chen was granted access to your medical history',
      timestamp: 'Yesterday, 2:15 PM',
      status: 'granted' as const
    }
  ]);

  return (
    <MainLayout>
      <div className="pt-8 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-semibold">Hello, John</h1>
                <p className="text-gray-500 mt-1">Here's a summary of your health data</p>
              </div>
              <div className="flex space-x-3">
                <AppButton
                  variant="outline"
                  icon={<Zap size={16} />}
                  iconPosition="left"
                >
                  Quick Access
                </AppButton>
                <AppButton
                  icon={<FileText size={16} />}
                  iconPosition="left"
                >
                  Add Record
                </AppButton>
              </div>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard
              title="Upcoming Appointments"
              value="2"
              subtitle="Next: Tomorrow, 10:00 AM"
              icon={<Calendar size={20} className="text-white" />}
              color="bg-medical"
              link={{ url: "/appointments", text: "View Schedule" }}
              className="animate-slide-up"
            />
            
            <SummaryCard
              title="Medical Records"
              value="24"
              subtitle="Last updated: Today"
              icon={<FileText size={20} className="text-white" />}
              color="bg-blue-500"
              change={{ value: "3", isPositive: true }}
              link={{ url: "/records", text: "View Records" }}
              className="animate-slide-up [animation-delay:100ms]"
            />
            
            <SummaryCard
              title="Medications"
              value="3"
              subtitle="2 active prescriptions"
              icon={<Pill size={20} className="text-white" />}
              color="bg-purple-500"
              link={{ url: "/medications", text: "Manage Medications" }}
              className="animate-slide-up [animation-delay:200ms]"
            />
            
            <SummaryCard
              title="Active Permissions"
              value="2"
              subtitle="1 pending request"
              icon={<Stethoscope size={20} className="text-white" />}
              color="bg-green-500"
              link={{ url: "/access", text: "Manage Access" }}
              className="animate-slide-up [animation-delay:300ms]"
            />
          </div>
          
          {/* Health Metrics and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-5 animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Health Metrics</h3>
                  <div className="flex items-center text-sm">
                    <Clock size={16} className="mr-1 text-gray-500" />
                    <span className="text-gray-500">Last Updated: Today, 9:45 AM</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <HealthMetric
                    icon={<Heart size={18} />}
                    title="Heart Rate"
                    value={72}
                    unit="bpm"
                    status="normal"
                    change={{ value: "3%", direction: "down" }}
                  />
                  
                  <HealthMetric
                    icon={<Activity size={18} />}
                    title="Blood Pressure"
                    value="118/78"
                    unit="mmHg"
                    status="normal"
                    change={{ value: "2%", direction: "down" }}
                  />
                  
                  <HealthMetric
                    icon={<Zap size={18} />}
                    title="Blood Glucose"
                    value={104}
                    unit="mg/dL"
                    status="warning"
                    change={{ value: "5%", direction: "up" }}
                  />
                </div>
                
                <button className="w-full mt-4 text-sm text-primary font-medium hover:underline flex items-center justify-center">
                  View All Health Metrics
                </button>
              </div>
              
              <div className="glass-card rounded-xl overflow-hidden mt-6 animate-scale-in [animation-delay:100ms]">
                <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <h3 className="text-lg font-medium">Blockchain Verification</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
                    All Records Verified
                  </span>
                </div>
                
                <div className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between text-sm text-gray-500 mb-4">
                    <div>Latest verification: Today at 12:34 PM</div>
                    <div>Records secured with Hyperledger Fabric</div>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-3 bg-gray-50 dark:bg-gray-800/50 font-mono text-xs overflow-x-auto">
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      <span className="mr-2">Block:</span>
                      <span className="font-semibold">0x7c3a95b784d28...</span>
                    </div>
                    <div className="flex items-center text-gray-700 dark:text-gray-300 mt-1">
                      <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
                      <span className="mr-2">Timestamp:</span>
                      <span className="font-semibold">2023-06-15 12:34:56 UTC</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 text-sm text-primary font-medium hover:underline flex items-center justify-center">
                    View Verification Details
                  </button>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in [animation-delay:200ms]">
              <RecentActivity activities={recentActivities} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
