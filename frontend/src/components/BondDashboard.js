import React, { useState, useEffect } from 'react';
import BondList from './BondList';
import BondFilter from './BondFilter';

const BondDashboard = () => {
  const [bonds, setBonds] = useState([]);
  const [filters, setFilters] = useState({
    id: '',
    name: '',
    overdue: '',
    maturityStart: '',
    maturityEnd: ''
  });
  const [filteredBonds, setFilteredBonds] = useState(bonds);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const applyFilters = () => {
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

  const resetFilters = () => {
    setFilters({
      id: '',
      name: '',
      overdue: '',
      maturityStart: '',
      maturityEnd: ''
    });
    setFilteredBonds(bonds);
  };

  const filterOverdueBonds = () => {
    const overdueBonds = bonds.filter(bond => bond.overdue);
    setFilteredBonds(overdueBonds);
  };

  const filterNearMaturityBonds = () => {
    const now = new Date();
    const fiveDaysAgo = new Date(now);
    fiveDaysAgo.setDate(now.getDate() - 5);
    const fiveDaysLater = new Date(now);
    fiveDaysLater.setDate(now.getDate() + 5);

    const nearMaturityBonds = bonds.filter(bond => {
      const maturityDate = new Date(bond.maturityDate);
      return maturityDate >= fiveDaysAgo && maturityDate <= fiveDaysLater;
    });

    setFilteredBonds(nearMaturityBonds);
  };

  return (
    <div>
      <button onClick={filterOverdueBonds}>Overdue Bonds</button>
      <button onClick={filterNearMaturityBonds}>Near Maturity Bonds</button>
      <BondFilter filters={filters} onFilterChange={setFilters} />
      <button onClick={applyFilters}>Search</button>
      <button onClick={resetFilters}>Reset</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <BondList bonds={filteredBonds} />
    </div>
  );
};

export default BondDashboard;