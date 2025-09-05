import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div style={{ padding: '20px', backgroundColor: 'white', color: 'black' }}>
        <h1>Test - Portfolio Site</h1>
        <p>If you can see this, the React app is working!</p>
        <p>Current time: {new Date().toLocaleString()}</p>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
