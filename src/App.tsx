
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

// Create placeholder components for routes that don't have dedicated pages yet
const RecordsPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Prontuários</h1><p>Conteúdo da página de prontuários médicos estará disponível em breve.</p></div>;
const MedicationsPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Medicamentos</h1><p>Conteúdo da página de medicamentos estará disponível em breve.</p></div>;
const AppointmentsPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Consultas</h1><p>Conteúdo da página de consultas estará disponível em breve.</p></div>;
const MetricsPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Métricas de Saúde</h1><p>Conteúdo da página de métricas de saúde estará disponível em breve.</p></div>;
const AccessPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Controle de Acesso</h1><p>Conteúdo da página de controle de acesso estará disponível em breve.</p></div>;
const EmergencyPage = () => <div className="p-4"><h1 className="text-2xl font-bold">QR de Emergência</h1><p>Conteúdo da página de QR de emergência estará disponível em breve.</p></div>;
const HelpPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Central de Ajuda</h1><p>Conteúdo da central de ajuda estará disponível em breve.</p></div>;
const SupportPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Suporte</h1><p>Conteúdo da página de suporte estará disponível em breve.</p></div>;
const ManageAccessPage = () => <div className="p-4"><h1 className="text-2xl font-bold">Gerenciar Acesso</h1><p>Conteúdo da página de gerenciamento de acesso estará disponível em breve.</p></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/records" element={<RecordsPage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/metrics" element={<MetricsPage />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/manage-access" element={<ManageAccessPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
