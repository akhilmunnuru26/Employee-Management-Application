import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css";
import App from './App.tsx'
import { AuthProvider } from "./context/AuthProvider";
import { EmployeeProvider } from './context/EmployeeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
         <App />
      </EmployeeProvider>
      
    </AuthProvider>
   
  </StrictMode>,
)
