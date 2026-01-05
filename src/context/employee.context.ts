import { createContext } from "react";

export interface Employee {
  id: string;
  fullName: string;
  gender: "Male" | "Female" | "Other";
  dob: string;
  state: string;
  isActive: boolean;
  profileImage: string;
}

export interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (emp: Employee) => void;
  updateEmployee: (emp: Employee) => void;
  deleteEmployee: (id: string) => void;
}

export const EmployeeContext =
  createContext<EmployeeContextType | null>(null);
