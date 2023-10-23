import { useState, useEffect } from 'react';
import { AppRouter } from "./routers/AppRouter";
import { AppTheme } from "./theme";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import "@tremor/react/dist/esm/tremor.css";
import { CheckingAuth } from './ui/components/CheckingAuth';

function App() {
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    fetch('https://harmonious-classic-blossom.glitch.me/')
      .then(response => response.json())
      .then(data => setClientId(data.clientId))
      .catch(error => console.error(error));
  }, []);
  
  if (!clientId) {
    return <CheckingAuth />;
  }
  
  return (
    <PayPalScriptProvider options={{ "client-id": clientId }}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </PayPalScriptProvider>
  );
  
}

export default App;
