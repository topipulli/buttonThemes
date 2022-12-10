import React from 'react';
import ThemeContext from './ThemeContext';

export default function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);
  
  return (
    <div>
      <button style={themeContext.black}>Press me</button>
    </div>
  );
}