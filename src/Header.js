import React from 'react';
import {buttonThemes} from './App';
import HeaderButton from './HeaderButton';
import ThemeContext from './ThemeContext';

function Header() {
  return (
    <div>
      <ThemeContext.Provider value={buttonThemes}>
      <HeaderButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default Header;