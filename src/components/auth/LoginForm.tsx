import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "../../styles/global.css";

const LoginForm = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  

  useEffect(() => {
        
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      if (!success) {
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }
      
      console.log("Login successful");
      setIsLoading(false);
      
    } catch (err) {
      setError(`Login failed. Please try again. + ${err}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit" disabled={isLoading} onClick={handleSubmit}>{isLoading ? "Logging in..." : "Login"}</button>
    </div>
  );
};

export default LoginForm;
