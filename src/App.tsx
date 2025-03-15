
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Records from "./pages/Records";
import Medications from "./pages/Medications";
import Access from "./pages/Access";
import Metrics from "./pages/Metrics";
import Appointments from "./pages/Appointments";
import Emergency from "./pages/Emergency";

// Create placeholder components for routes that don't have dedicated pages yet
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
            <Route path="/records" element={<Records />} />
            <Route path="/medications" element={<Medications />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/access" element={<Access />} />
            <Route path="/emergency" element={<Emergency />} />
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
