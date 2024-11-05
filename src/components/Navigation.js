import React from 'react';
import './Navigation.css';

function Navigation({ setView }) {
  return (
    <nav>
      <h2>Pinja Skills Management</h2>
      <ul>
        <li onClick={() => setView("consultants")}>Konsultit</li>
        <li onClick={() => setView("search")}>Haku</li>
        <li onClick={() => setView("profile")}>Raportit</li>
      </ul>
    </nav>
  );
}

export default Navigation;
