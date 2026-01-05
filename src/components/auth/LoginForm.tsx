import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

import '../../styles/global.css'

const LoginForm = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [error, setError] = useState("");


  const submit = () => {
    // if (!login(email, password)) {
    //   setError("Invalid credentials");
    // } else {
    //   navigate("/");
    // }
    console.log("Email", email);
    console.log("Password", password);
    
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      {/* {error && <p className="error">{error}</p>} */}
      <button onClick={submit}>Login</button>
    </div>
  );
}


export default LoginForm;