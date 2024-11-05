import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ConsultantList from './components/ConsultantList';
import SearchBar from './components/SearchBar';
import ConsultantProfile from './components/ConsultantProfile';
import './App.css';

function App() {
  const [view, setView] = useState("home"); // Tilanhallinta näkymälle

  return (
    <div className="App">
      {/* Navigointipalkki */}
      <Navigation setView={setView} />

      <div className="content">
        {/* Näytettävän näkymän valinta view-tilan perusteella */}
        {view === "home" && <h2>Tervetuloa Pinja Skills Management -sovellukseen!</h2>}
        {view === "consultants" && <ConsultantList />}
        {view === "search" && <SearchBar />}
        {view === "profile" && <ConsultantProfile />}
      </div>
    </div>
  );
}

export default App;
