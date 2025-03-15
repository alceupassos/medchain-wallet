
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Download, QrCode, Shield, Clock, AlertTriangle, Phone } from 'lucide-react';

const Emergency = () => {
  const [settings, setSettings] = useState({
    showAllergies: true,
    showMedications: true,
    showContacts: true,
    showBloodType: true,
    showChronicConditions: true,
    autoExpire: false,
    sendNotifications: true
  });

  const handleSettingToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <MainLayout>
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">QR de Emergência</h1>
            <p className="text-muted-foreground">
              Acesso rápido às suas informações médicas críticas
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Baixar QR Code
            </Button>
            <Button size="sm">
              <QrCode className="mr-2 h-4 w-4" />
              Gerar Novo QR
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="w-full md:w-auto mb-4">
                <TabsTrigger value="active">QR Ativo</TabsTrigger>
                <TabsTrigger value="settings">Configurações</TabsTrigger>
                <TabsTrigger value="history">Histórico de Uso</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-6">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Seu QR Code de Emergência</CardTitle>
                    <CardDescription>
                      Apresente este QR em situações de emergência para permitir acesso rápido às suas informações médicas críticas
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="bg-white p-6 rounded-xl mb-4">
                      <div className="w-64 h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                        <img 
                          src="/placeholder.svg" 
                          alt="QR Code" 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                      <div className="flex items-center p-3 rounded-lg border bg-muted/50">
                        <Shield className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium">Segurança</div>
                          <div className="text-xs text-muted-foreground">Protegido e Verificado</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 rounded-lg border bg-muted/50">
                        <Clock className="h-5 w-5 text-blue-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium">Validade</div>
                          <div className="text-xs text-muted-foreground">Permanente</div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="text-center space-y-2">
                      <h3 className="font-medium">Informações incluídas:</h3>
                      <div className="flex flex-wrap justify-center gap-2">
                        <Badge>Alergias</Badge>
                        <Badge>Medicamentos</Badge>
                        <Badge>Tipo Sanguíneo</Badge>
                        <Badge>Contatos</Badge>
                        <Badge>Condições Crônicas</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Instruções para Emergência</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Em caso de emergência</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400">
                          Este QR code permite que profissionais de saúde acessem suas informações médicas críticas rapidamente.
                          Mantenha-o acessível em seu smartphone ou impresso.
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">Para profissionais de saúde:</h4>
                      <ol className="text-sm space-y-2 list-decimal list-inside">
                        <li>Escaneie o QR code com qualquer leitor</li>
                        <li>Acesse as informações médicas críticas</li>
                        <li>Autentique-se como profissional de saúde para dados completos</li>
                        <li>Em caso de dúvidas, contate os números de emergência listados</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações do QR de Emergência</CardTitle>
                    <CardDescription>
                      Controle quais informações serão disponibilizadas em emergências
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Informações visíveis</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-allergies">Alergias</Label>
                            <p className="text-xs text-muted-foreground">
                              Mostrar informações sobre alergias e reações
                            </p>
                          </div>
                          <Switch 
                            id="show-allergies" 
                            checked={settings.showAllergies}
                            onCheckedChange={() => handleSettingToggle('showAllergies')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-medications">Medicamentos</Label>
                            <p className="text-xs text-muted-foreground">
                              Mostrar medicamentos atuais
                            </p>
                          </div>
                          <Switch 
                            id="show-medications" 
                            checked={settings.showMedications}
                            onCheckedChange={() => handleSettingToggle('showMedications')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-bloodtype">Tipo Sanguíneo</Label>
                            <p className="text-xs text-muted-foreground">
                              Mostrar seu tipo sanguíneo
                            </p>
                          </div>
                          <Switch 
                            id="show-bloodtype" 
                            checked={settings.showBloodType}
                            onCheckedChange={() => handleSettingToggle('showBloodType')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-conditions">Condições Crônicas</Label>
                            <p className="text-xs text-muted-foreground">
                              Mostrar condições médicas crônicas
                            </p>
                          </div>
                          <Switch 
                            id="show-conditions" 
                            checked={settings.showChronicConditions}
                            onCheckedChange={() => handleSettingToggle('showChronicConditions')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-contacts">Contatos de Emergência</Label>
                            <p className="text-xs text-muted-foreground">
                              Mostrar contatos para emergência
                            </p>
                          </div>
                          <Switch 
                            id="show-contacts" 
                            checked={settings.showContacts}
                            onCheckedChange={() => handleSettingToggle('showContacts')}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Segurança e privacidade</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="auto-expire">Expiração Automática</Label>
                            <p className="text-xs text-muted-foreground">
                              QR code expira após 24h de geração
                            </p>
                          </div>
                          <Switch 
                            id="auto-expire" 
                            checked={settings.autoExpire}
                            onCheckedChange={() => handleSettingToggle('autoExpire')}
                          />
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="send-notifications">Notificações de Acesso</Label>
                            <p className="text-xs text-muted-foreground">
                              Receber notificação quando seu QR for acessado
                            </p>
                          </div>
                          <Switch 
                            id="send-notifications" 
                            checked={settings.sendNotifications}
                            onCheckedChange={() => handleSettingToggle('sendNotifications')}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full">Salvar Configurações</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Acessos</CardTitle>
                    <CardDescription>
                      Registro de quando seu QR de emergência foi utilizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">Hospital Santa Casa</h4>
                            <p className="text-sm text-muted-foreground">Acessado por Dr. Carlos Silva</p>
                            <div className="flex items-center mt-1">
                              <Shield className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-xs text-green-600 dark:text-green-400">Verificado</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">10/06/2023</div>
                            <div className="text-xs text-muted-foreground">15:42</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">Clínica São Paulo</h4>
                            <p className="text-sm text-muted-foreground">Acessado por Dra. Ana Ferreira</p>
                            <div className="flex items-center mt-1">
                              <Shield className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-xs text-green-600 dark:text-green-400">Verificado</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">28/05/2023</div>
                            <div className="text-xs text-muted-foreground">09:15</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">SAMU</h4>
                            <p className="text-sm text-muted-foreground">Acesso de emergência</p>
                            <div className="flex items-center mt-1">
                              <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                              <span className="text-xs text-amber-600 dark:text-amber-400">Emergência</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm">15/04/2023</div>
                            <div className="text-xs text-muted-foreground">22:07</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Contatos de Emergência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Ricardo Souza</div>
                      <div className="text-xs text-muted-foreground">Irmão</div>
                    </div>
                  </div>
                  <div className="text-sm font-mono">(11) 98765-4321</div>
                </div>
                
                <div className="flex items-center justify-between p-2 border-b">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Márcia Oliveira</div>
                      <div className="text-xs text-muted-foreground">Mãe</div>
                    </div>
                  </div>
                  <div className="text-sm font-mono">(11) 97654-3210</div>
                </div>
                
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Dr. Paulo Mendes</div>
                      <div className="text-xs text-muted-foreground">Médico</div>
                    </div>
                  </div>
                  <div className="text-sm font-mono">(11) 3456-7890</div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Gerenciar Contatos
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Instruções QR Físico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Para maior segurança, imprima seu QR code e mantenha-o consigo
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</div>
                    <p className="text-sm">Baixe o QR code em alta resolução</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</div>
                    <p className="text-sm">Imprima em material resistente</p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</div>
                    <p className="text-sm">Mantenha na carteira ou pulseira médica</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar para Impressão
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Missing Badge component
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
    {children}
  </span>
);

export default Emergency;
