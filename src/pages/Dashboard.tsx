import { useAuth } from "../context/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="container">
      <header className="dashboard-header">
        <h1>Employee Management Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </header>

      
    </div>
  );
};

export default Dashboard;
