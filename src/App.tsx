import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


export default function App() {
  console.log("App.tsx rendered");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
         <Route
        path="/dashboard"
        element={
            <Dashboard />
        }
      />
      </Routes>
    </Router>
  );
}
