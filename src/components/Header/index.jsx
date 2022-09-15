import React, { useState } from 'react';

const Header = () => {
  const [visible, setvisible] = useState(true);

  return (
    <div className='main-header'>
      <div className='flex'>
        <span className='logo'>
          <img src='logo.png' alt='logo' />
        </span>
        <p className='hint'>Talk with astrologers</p>
      </div>
      <div className='profile'>
        <span className='btn'>
          English <img src='dropdown.png' alt='dropdown' />
        </span>
        <span className='btn hide'>
          <img src='wallet.png' alt='wallet' /> $200
        </span>
        <span className={'avtar'}>
          <img
            src='Avatar-m.png'
            alt='Avatar'
            onClick={() => setvisible(visible ? false : true)}
          />
        </span>
      </div>
      <div className={visible ? 'display  ' : 'p-tab'}>
        <div>
          <img width={80} height={80} src='Avatar-m.png' alt='avatar' />
          <h3>Phlipy</h3>
        </div>
        <ul className='list'>
          <li>Order History</li>
          <li>Recharge History</li>
          <li> Followed astrologer</li>
          <li>Account setting</li>
          <hr />
          <span className='logout'>Log out</span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
