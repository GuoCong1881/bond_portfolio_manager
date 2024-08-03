import React from 'react';

const BondList = ({ bonds, onSelectBond }) => {
  return (
    <div>
      <ul>
        {bonds.map(bond => (
          <li key={bond.id} onClick={() => onSelectBond(bond)}>
            {bond.name} {bond.overdue && <span style={{ color: 'red' }}>Overdue</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BondList;