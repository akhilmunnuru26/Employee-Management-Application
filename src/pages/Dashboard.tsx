import EmployeeSummary from "../components/employees/EmployeeSummary";
import EmployeeTable from "../components/employees/EmployeeTable";
import { useAuth } from "../context/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="container">
      <header className="dashboard-header">
        <h1>Employee Management Dashboard</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <EmployeeSummary />
      <EmployeeTable />
    </div>
  );
};

export default Dashboard;
