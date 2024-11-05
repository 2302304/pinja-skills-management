import React from 'react';
import consultants from '../data';

function ConsultantList() {
  return (
    <div>
      <h2>Konsulttilistaus</h2>
      <ul>
        {consultants.map((consultant) => (
          <li key={consultant.id}>
            <strong>{consultant.name}</strong> - Osaaminen: {consultant.expertise} - Kokemus: {consultant.experience} vuotta
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultantList;
