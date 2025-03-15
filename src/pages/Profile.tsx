
import MainLayout from '@/components/layout/MainLayout';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import BlockchainVerification from '@/components/profile/BlockchainVerification';
import ProfileHeader from '@/components/profile/ProfileHeader';
import { 
  profileSections, 
  medicalRecords, 
  medications, 
  appointments, 
  healthMetrics, 
  accessLogs 
} from '@/data/profileData';

const Profile = () => {
  return (
    <MainLayout>
      <div className="pt-20 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <ProfileHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Barra Lateral */}
            <div className="md:col-span-1">
              <ProfileSidebar 
                name="João Silva"
                age="43 anos"
                gender="Masculino"
                lastUpdate="10 de Junho de 2023"
                bloodType="O+"
                allergies={3}
                activeMedications={3}
              />
            </div>
            
            {/* Conteúdo Principal */}
            <div className="md:col-span-3 animate-scale-in">
              <ProfileCard 
                sections={profileSections}
                medicalRecords={medicalRecords}
                medications={medications}
                appointments={appointments}
                healthMetrics={healthMetrics}
                accessLogs={accessLogs}
              />
              <BlockchainVerification />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
