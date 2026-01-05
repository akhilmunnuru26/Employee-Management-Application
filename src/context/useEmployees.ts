import { useContext } from "react";
import {
  EmployeeContext,
  type EmployeeContextType,
} from "./employee.context";

export const useEmployees = (): EmployeeContextType => {
  const ctx = useContext(EmployeeContext);
  if (!ctx) {
    throw new Error("useEmployees must be used inside EmployeeProvider");
  }
  return ctx;
};
