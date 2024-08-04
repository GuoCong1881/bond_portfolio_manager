import React from 'react';
import './BondFilter.css';

const BondFilter = ({ filters, onFilterChange }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    onFilterChange(newFilters);
  };

  return (
    <div className="bond-filter">
      <input
        type="text"
        name="id"
        placeholder="Filter by ID"
        value={filters.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Filter by Name"
        value={filters.name}
        onChange={handleChange}
      />
      <select name="overdue" value={filters.overdue} onChange={handleChange}>
        <option value="">Filter by Overdue</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <input
        type="date"
        name="maturityStart"
        placeholder="Maturity Start"
        value={filters.maturityStart}
        onChange={handleChange}
      />
      <input
        type="date"
        name="maturityEnd"
        placeholder="Maturity End"
        value={filters.maturityEnd}
        onChange={handleChange}
      />
    </div>
  );
};

export default BondFilter;