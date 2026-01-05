import { useState } from "react";
import { useEmployees } from "../../context/useEmployees";
import type { Employee } from "../../context/employee.context";

interface Props {
  employee?: Employee;
  onClose: () => void;
}

const emptyForm: Employee = {
  id: "",
  fullName: "",
  gender: "Male",
  dob: "",
  state: "",
  isActive: true,
  profileImage: ""
};

export default function EmployeeForm({ employee, onClose }: Props) {
  const { addEmployee, updateEmployee } = useEmployees();

  // ✅ Initialize from props (NO useEffect needed)
  const [form, setForm] = useState<Employee>(() =>
    employee ? employee : emptyForm
  );

  const submit = () => {
    if (employee) {
      updateEmployee(form);
    } else {
      addEmployee(form);
    }
    onClose();
  };

  return (
    <div className="card">
      <h3>{employee ? "Edit" : "Add"} Employee</h3>

      <input
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) =>
          setForm({ ...form, fullName: e.target.value })
        }
      />

      <select
        value={form.gender}
        onChange={(e) =>
          setForm({ ...form, gender: e.target.value as Employee["gender"] })
        }
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        value={form.dob}
        onChange={(e) =>
          setForm({ ...form, dob: e.target.value })
        }
      />

      <button onClick={submit}>Save</button>
    </div>
  );
}
