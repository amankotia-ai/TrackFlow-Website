import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Examples } from "./pages/Examples";
import { UseCases } from "./pages/UseCases";
import Demo from "./pages/Demo";
import { CloudFormProvider, useCloudForm } from "./contexts/CloudFormContext";
import { CheckoutForm } from "./components/ui/checkout-form";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOpen, closeForm } = useCloudForm();

  return (
    <>
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/demo" element={<Demo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
      <CheckoutForm isOpen={isOpen} onClose={closeForm} />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CloudFormProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </CloudFormProvider>
  </QueryClientProvider>
);

export default App;
