import React from 'react';
import './header.css'; 
import headerLogo from "./assets/headerLogo.jpg"
const Header = () => {
  return (
    <header className="header">
        <img src={headerLogo} alt="" />
      <h1 className="logo">Yum Movies</h1>
    </header>
  );
};

export default Header;
