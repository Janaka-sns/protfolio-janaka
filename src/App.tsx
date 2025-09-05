import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from '@/components/Navigation';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div style={{ padding: '20px', backgroundColor: 'white', color: 'black' }}>
        <h1>Testing Navigation Component</h1>
        <Navigation />
        <p>If you can see this, Navigation component is working!</p>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
