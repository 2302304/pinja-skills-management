import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation'; // Tämä lisätään myöhemmin
import SearchBar from './components/SearchBar'; // Tämä lisätään myöhemmin
import ConsultantList from './components/ConsultantList'; // Tämä lisätään myöhemmin
import ConsultantProfile from './components/ConsultantProfile'; // Tämä lisätään myöhemmin
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigointipalkki */}
        <Navigation />

        <div className="content">
          {/* Reititys eri sivuille */}
          <Routes>
            <Route path="/" element={<ConsultantList />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/profile/:id" element={<ConsultantProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
