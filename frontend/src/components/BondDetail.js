import React from 'react';

const BondDetail = ({ bond }) => {
  if (!bond) return <div>Select a bond to see details</div>;

  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <td>{bond.id}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{bond.name}</td>
        </tr>
        <tr>
          <th>Details</th>
          <td>{bond.details}</td>
        </tr>
        <tr>
          <th>Maturity Date</th>
          <td>{bond.maturityDate}</td>
        </tr>
        {bond.overdue && (
          <tr>
            <th>Overdue</th>
            <td style={{ color: 'red' }}>This bond is overdue!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BondDetail;