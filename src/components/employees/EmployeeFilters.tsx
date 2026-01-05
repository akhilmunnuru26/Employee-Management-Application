interface Props {
  search: string;
  setSearch: (v: string) => void;
  gender: string;
  setGender: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
}

const EmployeeFilters = ({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus
}: Props) => {
  return (
    <div className="filters">
      <input
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">All Genders</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default EmployeeFilters;
