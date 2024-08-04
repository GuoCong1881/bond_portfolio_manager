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
      <h3>Bond Filters</h3>
        <div className="filter-container">
          <div className="filter-item">
            <label htmlFor="id">ID: </label>
            <input
              type="text"
              name="id"
              placeholder="Filter by ID"
              value={filters.id}
              onChange={handleChange}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Filter by Name"
              value={filters.name}
              onChange={handleChange}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="name">Overdue: </label>
            <select name="overdue" value={filters.overdue} onChange={handleChange}>
              <option value="">Filter by Overdue</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="name">Maturity From: </label>
            <input
              type="date"
              name="maturityStart"
              placeholder="Maturity Start"
              value={filters.maturityStart}
              onChange={handleChange}
            />
          </div>
          <div className="filter-item">
            <label htmlFor="name">Maturity To: </label>
            <input
              type="date"
              name="maturityStart"
              placeholder="Maturity End"
              value={filters.maturityEnd}
              onChange={handleChange}
            />
          </div>
        </div>
    </div>
  );
};

export default BondFilter;