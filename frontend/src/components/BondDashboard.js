import React, { useState, useEffect } from 'react';
import BondList from './BondList';

const BondDashboard = () => {
  const [bonds, setBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBonds = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/bonds'); // Replace with your API endpoint
        const data = await response.json();
        setBonds(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBonds();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <BondList bonds={bonds} />
    </div>
  );
};

export default BondDashboard;