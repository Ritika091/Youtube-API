import React, { useState } from 'react';
import './DarkMode.css'
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label htmlFor="dark-mode-toggle">Dark Mode</label>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        checked={isDarkMode}
        onChange={handleDarkModeToggle}
      />
    </div>
  );
};

export default DarkModeToggle;
