import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // เพิ่ม import CSS
import { FaSearch } from 'react-icons/fa';

const Home: React.FC = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Redirect to detail page with the searched city
    if (city.trim() !== '') {
      window.location.href = `/detail/${city}`;
    }
  };

  return (
    <div className="container">

      {/* Search form */}
      <div className="form-container">
        {/* Search form description */}
        <p className="form-description">Enter the city name </p>

        {/* City input field */}
        <div className='k'><input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field" // เพิ่ม class ที่นี่
        />

          <button onClick={handleSearch} className="search-button"><FaSearch /></button>
        </div>
      </div>
      <Link to="/latlonjud" className='here'>get weather in your area</Link>
    </div>
  );
};

export default Home;
