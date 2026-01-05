import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <select {...props}>{children}</select>
    </div>
  );
};

export default Select;
