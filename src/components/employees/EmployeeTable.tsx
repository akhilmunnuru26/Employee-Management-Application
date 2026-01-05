import { useState } from "react";
import { useEmployees } from "../../context/useEmployees";
import EmployeeFilters from "./EmployeeFilters";
import EmployeeForm from "./EmployeeForm";
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = () => {
  const { employees } = useEmployees();

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [editing, setEditing] = useState<any>(null);

  const filtered = employees.filter(e => {
    return (
      e.fullName.toLowerCase().includes(search.toLowerCase()) &&
      (gender ? e.gender === gender : true) &&
      (status === "active"
        ? e.isActive
        : status === "inactive"
        ? !e.isActive
        : true)
    );
  });

  return (
    <>
      <EmployeeForm employee={editing} onClose={() => setEditing(null)} />

      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        status={status}
        setStatus={setStatus}
      />

      {filtered.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(emp => (
              <EmployeeRow
                key={emp.id}
                employee={emp}
                onEdit={() => setEditing(emp)}
              />
            ))}
          </tbody>
        </table>
      )}

      <button onClick={() => window.print()}>Print</button>
    </>
  );
};

export default EmployeeTable;
