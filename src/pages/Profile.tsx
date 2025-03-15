import { useState } from 'react';
import ProfileCard from '@/components/profile/ProfileCard';
import MainLayout from '@/components/layout/MainLayout';
import ProfileSidebar from '@/components/profile/ProfileSidebar';
import BlockchainVerification from '@/components/profile/BlockchainVerification';
import ProfileHeader from '@/components/profile/ProfileHeader';

const Profile = () => {
  const [profileSections] = useState([
    {
      id: 'personal',
      title: 'Informações Pessoais',
      fields: [
        { id: 'name', label: 'Nome Completo', value: 'João Silva' },
        { id: 'dob', label: 'Data de Nascimento', value: '15 de Janeiro de 1980' },
        { id: 'gender', label: 'Gênero', value: 'Masculino' },
        { id: 'bloodType', label: 'Tipo Sanguíneo', value: 'O+' },
        { id: 'height', label: 'Altura', value: '1,78 m' },
        { id: 'weight', label: 'Peso', value: '75 kg' }
      ]
    },
    {
      id: 'contact',
      title: 'Informações de Contato',
      fields: [
        { id: 'email', label: 'E-mail', value: 'joao.silva@exemplo.com' },
        { id: 'phone', label: 'Telefone', value: '+55 (11) 98765-4321' },
        { id: 'address', label: 'Endereço', value: 'Rua Principal, 123, São Paulo, SP' },
        { id: 'emergency', label: 'Contato de Emergência', value: 'Maria Silva (Esposa) - +55 (11) 91234-5678' }
      ]
    },
    {
      id: 'conditions',
      title: 'Condições Médicas',
      fields: [
        { 
          id: 'chronic', 
          label: 'Condições Crônicas', 
          value: ['Hipertensão (diagnosticada em 2015)', 'Diabetes Tipo 2 (diagnosticada em 2018)'],
          isArray: true
        },
        { 
          id: 'allergies', 
          label: 'Alergias', 
          value: ['Penicilina - Grave', 'Amendoim - Moderada', 'Poeira - Leve'],
          isArray: true
        },
        { 
          id: 'surgeries', 
          label: 'Cirurgias Anteriores', 
          value: ['Apendicectomia (2010)', 'Artroscopia no Joelho (2019)'],
          isArray: true
        }
      ]
    },
    {
      id: 'medications',
      title: 'Medicamentos Atuais',
      fields: [
        { 
          id: 'prescriptions', 
          label: 'Prescrições', 
          value: [
            'Lisinopril 10mg - Uma vez ao dia', 
            'Metformina 500mg - Duas vezes ao dia', 
            'Atorvastatina 20mg - Uma vez ao dia antes de dormir'
          ],
          isArray: true
        },
        { 
          id: 'supplements', 
          label: 'Suplementos', 
          value: ['Multivitamínico - Uma vez ao dia', 'Vitamina D3 2000 UI - Uma vez ao dia'],
          isArray: true
        }
      ]
    },
    {
      id: 'family',
      title: 'Histórico Familiar',
      fields: [
        { 
          id: 'familyConditions', 
          label: 'Condições Médicas Familiares', 
          value: [
            'Pai: Hipertensão, Doença Arterial Coronariana', 
            'Mãe: Diabetes Tipo 2', 
            'Irmã: Nenhuma'
          ],
          isArray: true
        }
      ]
    }
  ]);

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
              <ProfileCard sections={profileSections} />
              <BlockchainVerification />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
