
import { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import AppButton from '@/components/ui/AppButton';
import QRCode from 'qrcode.react';

const EmergencyQR = () => {
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  
  const handleGenerateQrCode = () => {
    setQrCodeGenerated(true);
    // Generate access code
    setAccessCode("MED-" + Math.random().toString(36).substring(2, 10).toUpperCase());
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">QR Code de Emergência</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          O QR Code de emergência permite que profissionais de saúde acessem suas informações médicas essenciais em caso de emergência.
        </p>
        
        <div className="border border-border rounded-lg p-5">
          {qrCodeGenerated ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-48 h-48 bg-white flex items-center justify-center p-2">
                <QRCode
                  value={`https://medchain.app/emergency-access/${accessCode}`}
                  size={180}
                  level="H"
                  includeMargin={true}
                  renderAs="svg"
                />
              </div>
              
              <div className="text-center">
                <div className="text-sm font-medium mb-1">Código de Acesso Emergencial</div>
                <div className="font-mono text-lg font-semibold">{accessCode}</div>
              </div>
              
              <div className="flex space-x-2">
                <AppButton size="sm" variant="outline">
                  Baixar
                </AppButton>
                <AppButton size="sm" variant="outline">
                  Compartilhar
                </AppButton>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center py-10">
              <p className="text-center mb-4">
                Gere um QR code único que contém acesso às suas informações médicas essenciais para situações de emergência.
              </p>
              <AppButton onClick={handleGenerateQrCode}>
                Gerar QR Code de Emergência
              </AppButton>
            </div>
          )}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Informações incluídas no QR Code:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Nome completo e data de nascimento</li>
            <li>Contato de emergência</li>
            <li>Tipo sanguíneo</li>
            <li>Alergias e condições críticas</li>
            <li>Medicamentos atuais</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyQR;
