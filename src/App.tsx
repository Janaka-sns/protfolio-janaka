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
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'white', 
        color: 'black',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: 'blue', fontSize: '2rem' }}>Portfolio Test</h1>
        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
          If you can see this text, the React app is working!
        </p>
        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '20px', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <h2>Test Section</h2>
          <p>This is a test to see if the components are rendering.</p>
          <button style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Test Button
          </button>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
