import React from 'react';
import data from './data';

const Consult = () => {
  return (
    <div className='consult'>
      <h2 className='main-title'>
        All the problem you can consult and get answer
      </h2>
      <div className='btn-secondary'>
        <button>Scenario</button>
        <button className='active'>Consult methods</button>
      </div>
      <div className='flex-only slider'>
        {data.map((elm) => (
          <div className='cases'>
            <img width={180} height={300} src={elm.img} alt={elm.title} />
            <div className='case-name'>
              <h3>{elm.title}</h3>
              <p>{elm.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consult;
