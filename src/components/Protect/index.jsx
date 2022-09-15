import React from 'react';

let data = [
  { img: 'big-wallet1.png', title: 'Refund if unsatisfied' },
  { img: 'call-us2.png', title: '24*7 Customer support' },
  { img: 'from3.png', title: '100% quality guarantee' },
];

const Protect = () => {
  return (
    <div className='protect'>
      <h2 className='main-title'>We protect the rights of users</h2>
      <div className='flex-center'>
        {data.map((elm) => (
          <div className='element'>
            <img width={200} src={elm.img} alt={elm.img} />
            <h3>{elm.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protect;
