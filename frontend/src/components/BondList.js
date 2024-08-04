import React, { useState } from 'react';
import BondDetail from './BondDetail';
import './BondList.css';

const BondList = ({ bonds }) => {
  const [selectedBondId, setSelectedBondId] = useState(null);
  return (
    <div className="bond-list-container">
    <table className="bond-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Maturity Date</th>
          <th>Overdue</th>
        </tr>
      </thead>
      <tbody>
        {bonds.map((bond) => (
          <React.Fragment key={bond.id}>
            <tr
              className={`bond-row ${selectedBondId === bond.id ? 'selected': ''}`} 
              onClick={() => setSelectedBondId(bond.id)}>
              <td>{bond.name}</td>
              <td>{bond.maturityDate}</td>
              <td>{bond.overdue ? 'Yes' : 'No'}</td>
            </tr>
            {selectedBondId === bond.id && (
              <tr className="bond-detail-row">
                <td colSpan="3">
                  <BondDetail bond={bond} />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default BondList;