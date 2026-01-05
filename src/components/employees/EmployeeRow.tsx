import { useEmployees } from "../../context/useEmployees"; 
import type { Employee } from "../../context/employee.context";
import { useState } from "react";
import Modal from "../common/Modal";

const EmployeeRow = ({
  employee,
  onEdit
}: {
  employee: Employee;
  onEdit: () => void;
}) => {
  const { deleteEmployee } = useEmployees();
  const [open, setOpen] = useState(false);

  return (
    <>
      <tr>
        <td>
          {employee.profileImage && (
            <img src={employee.profileImage} className="avatar" />
          )}
        </td>
        <td>{employee.fullName}</td>
        <td>{employee.gender}</td>
        <td>{employee.dob}</td>
        <td>{employee.state}</td>
        <td>{employee.isActive ? "Active" : "Inactive"}</td>
        <td>
          <button onClick={onEdit}>Edit</button>
          <button onClick={() => setOpen(true)}>Delete</button>
        </td>
      </tr>

      <Modal
        open={open}
        title="Are you sure you want to delete?"
        onConfirm={() => deleteEmployee(employee.id)}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default EmployeeRow;
