import React from 'react';

const BondDetail = ({ bond }) => {
  if (!bond) return <div>Select a bond to see details</div>;

  return (
    <div>
      <h2>{bond.name}</h2>
      <p>{bond.details}</p>
      <p>Maturity Date: {bond.maturityDate}</p>
      {bond.overdue && <p style={{ color: 'red' }}>This bond is overdue!</p>}
    </div>
  );
};

export default BondDetail;