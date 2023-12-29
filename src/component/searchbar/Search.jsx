import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.css';

export default function Search() {
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState([]); // State to store fetched user data

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.filter((user) => {
          return user.name.toLowerCase().includes(value.toLowerCase()); // Case-insensitive search
        });
        setUserData(filteredResults); // Update the state with filtered data
        console.log(filteredResults); // Logging the filtered results
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input'>
      <input
        className='searchbox'
        placeholder='Type to search.....'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FaSearch id='search-icon' />
    </div>
  );
}
