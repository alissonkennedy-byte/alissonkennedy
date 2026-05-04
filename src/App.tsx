import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import WebAppsIA from "./pages/WebAppsIA";
import Eventos from "./pages/Eventos";
import FoodService from "./pages/FoodService";
import Marketing from "./pages/Marketing";
import RelacaoPublica from "./pages/RelacaoPublica";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/web-apps-ia" element={<WebAppsIA />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/food-service" element={<FoodService />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/relacoes-publicas" element={<RelacaoPublica />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
