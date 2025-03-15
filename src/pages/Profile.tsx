
import { useState } from 'react';
import { Shield, Lock, Share2 } from 'lucide-react';
import ProfileCard from '@/components/profile/ProfileCard';
import AppButton from '@/components/ui/AppButton';
import MainLayout from '@/components/layout/MainLayout';

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
          {/* Cabeçalho */}
          <div className="mb-6 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-display font-semibold">Perfil Médico</h1>
                <p className="text-gray-500 mt-1">Gerencie suas informações médicas pessoais</p>
              </div>
              <div className="flex space-x-3">
                <AppButton
                  variant="outline"
                  icon={<Share2 size={16} />}
                  iconPosition="left"
                >
                  Compartilhar Perfil
                </AppButton>
                <AppButton
                  icon={<Lock size={16} />}
                  iconPosition="left"
                >
                  Gerenciar Acesso
                </AppButton>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Barra Lateral */}
            <div className="md:col-span-1">
              <div className="glass-card rounded-xl p-5 animate-slide-up">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3">
                    <span className="text-2xl font-medium text-gray-700 dark:text-gray-300">JS</span>
                  </div>
                  <h3 className="text-lg font-medium">João Silva</h3>
                  <p className="text-sm text-gray-500">43 anos, Masculino</p>
                </div>
                
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <Shield size={12} className="mr-1" />
                    Perfil Verificado
                  </span>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500">Última Atualização</span>
                    <span className="font-medium">10 de Junho de 2023</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500">Tipo Sanguíneo</span>
                    <span className="font-medium">O+</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500">Alergias</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-b border-gray-200 dark:border-gray-800">
                    <span className="text-gray-500">Medicamentos Ativos</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <AppButton variant="outline" fullWidth>
                    Baixar Perfil
                  </AppButton>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-5 mt-6 animate-slide-up [animation-delay:100ms]">
                <div className="flex items-center mb-4">
                  <Lock size={18} className="text-medical mr-2" />
                  <h3 className="text-base font-medium">Status de Privacidade</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Compartilhamento de Perfil</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Ativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Acesso de Emergência</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Habilitado</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Criptografia de Dados</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs">Habilitada</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                    <button className="text-primary text-sm font-medium hover:underline">
                      Gerenciar Configurações de Privacidade
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conteúdo Principal */}
            <div className="md:col-span-3 animate-scale-in">
              <ProfileCard sections={profileSections} />
              
              {/* Cartão de verificação blockchain */}
              <div className="glass-card rounded-xl p-5 mt-6 animate-scale-in [animation-delay:100ms]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Verificação Blockchain</h3>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    <Shield size={12} className="mr-1" />
                    Verificado
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Seu perfil médico está armazenado de forma segura no blockchain, garantindo que suas informações não possam ser adulteradas e estejam sempre acessíveis para você.
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-800">
                  <div className="space-y-2 font-mono text-xs text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Hash:</span>
                      <span>0x8f23e3a96f5b5ac8712b9ab9c1c98e...</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Última Atualização:</span>
                      <span>2023-06-10 14:32:45 UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Assinatura:</span>
                      <span>válida (RSA-256)</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 text-sm text-primary font-medium hover:underline">
                  Ver Verificação Detalhada
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
