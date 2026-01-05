import { useState } from "react";
import {
  EmployeeContext,
  type Employee,
} from "./employee.context";

export const EmployeeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : [];
  });

  const sync = (data: Employee[]) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };

  const addEmployee = (emp: Employee) => {
    sync([...employees, { ...emp, id: crypto.randomUUID() }]);
  };

  const updateEmployee = (emp: Employee) => {
    sync(employees.map((e) => (e.id === emp.id ? emp : e)));
  };

  const deleteEmployee = (id: string) => {
    sync(employees.filter((e) => e.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
