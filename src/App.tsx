import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";


export default function App() {
  console.log("App.tsx rendered");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
        <Route path="*" element={<Navigate to="/login" />} />
        
      </Routes>
    </Router>
  );
}
