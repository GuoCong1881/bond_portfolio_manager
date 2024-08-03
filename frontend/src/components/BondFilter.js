import React from 'react';

const BondFilter = ({ onFilter }) => {
  const handleChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Filter bonds" onChange={handleChange} />
    </div>
  );
};

export default BondFilter;