import { useEmployees } from "../../context/useEmployees";

const EmployeeSummary = () => {
  const { employees } = useEmployees();

  const active = employees.filter(e => e.isActive).length;
  const inactive = employees.length - active;

  return (
    <div className="summary-cards">
      <div className="card">Total Employees: {employees.length}</div>
      <div className="card">Active: {active}</div>
      <div className="card">Inactive: {inactive}</div>
    </div>
  );
};

export default EmployeeSummary;
