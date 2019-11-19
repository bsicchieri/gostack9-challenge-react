import React from 'react';

import avatar2 from '../assets/avatar2.jpeg';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span id="name">Camila Morais</span>
          <img id="profile" src={avatar2} />
        </div>
      </nav>
    </header>
  );
}

export default Header;