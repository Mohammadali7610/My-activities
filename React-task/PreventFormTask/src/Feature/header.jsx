import React from 'react';


function TopHeader() {
  return (
      <div>
    <header className='header'>
      <div>
        <a className='header-logo' href="#">
        <img src="../src/assets/image/logo.png" alt="logo" />
        <h3>Prevent</h3>
        </a>
      </div>
      <div>
        <h4>
          Have an account?  <a className='Log-in' href="#">LOG IN</a>
        </h4>
      </div>
    </header>
      <nav className='navbar'>
        <div className='nav-main-div'>
           <ul className='navbar-ul'>
            <li><a href="#"><img src="../src/assets/image/check.png" alt="check" /> PERSONAL INFO</a></li>
            <li><a href="#"><img src="../src/assets/image/check.png" alt="check" /> ELGIBLITY </a></li>
            <li><a href="#"><img src="../src/assets/image/check.png" alt="check" /> YOUR HEALTH</a></li>
            <li><a href="#"><img src="../src/assets/image/check.png" alt="check" /> COMMITMENT</a></li>
           </ul>
        </div>
      </nav>
      </div>
  );
}

export default TopHeader;
