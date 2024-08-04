import React, { useState, useEffect } from 'react';
import BondList from './BondList';
import BondFilter from './BondFilter';

const BondDashboard = () => {
  const [bonds, setBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    overdue: '',
    maturityStart: '',
    maturityEnd: ''
  });
  const [filteredBonds, setFilteredBonds] = useState(bonds);

  useEffect(() => {
    const fetchBonds = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/bonds'); // Replace with your API endpoint
        const data = await response.json();
        setBonds(Array.isArray(data) ? data : []);
        setFilteredBonds(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBonds();
  }, []);

  const handleFilterChange = (filters) => {
    setFilters(filters);
    const filtered = bonds.filter((bond) => {
      const matchesId = filters.id ? bond.id.toString().includes(filters.id) : true;
      const matchesName = filters.name ? bond.name.includes(filters.name) : true;
      const matchesOverdue = filters.overdue ? bond.overdue.toString() === filters.overdue : true;
      const matchesMaturityStart = filters.maturityStart ? new Date(bond.maturityDate) >= new Date(filters.maturityStart) : true;
      const matchesMaturityEnd = filters.maturityEnd ? new Date(bond.maturityDate) <= new Date(filters.maturityEnd) : true;
      return matchesId && matchesName && matchesOverdue && matchesMaturityStart && matchesMaturityEnd;
    });
    setFilteredBonds(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BondFilter filters={filters} onFilterChange={handleFilterChange} />
      <BondList bonds={filteredBonds} />
    </div>
  );
};

export default BondDashboard;