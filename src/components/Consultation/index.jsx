import React from 'react';

import data from './data.json';

const Consultation = () => {
  return (
    <>
      <section className='consultation-section'>
        <div className='container-consultation'>
          <h1>Start your first consultation ＠₹5/min</h1>
          <div className='set-Card'>
            {data.map((elm) => (
              <div className='consultation-box'>
                <div className='card'>
                  <img src={elm.images} alt='bg' />
                  <div className='man-img'>
                    <img src={elm.man} alt='man' />
                  </div>
                </div>
                <div className='card-subbox'>
                  <div className='star flex'>
                    <div>
                      <img width={15} src={elm.star} alt='star' />
                    </div>
                    <p>4.7</p>
                    <small> (238 total) </small>
                  </div>
                  <h2>{elm.astro_name}</h2>
                  <h3>{elm.years}</h3>
                  <h3>Hindi,English,Gujilate</h3>
                  <div className='price'>
                    <h4>₹20</h4>
                    <span>/min</span>
                    {/* <img width="30px" src={elm.rupee} alt="rupee" srcset="" /> */}
                  </div>
                  <h3>{elm.time}</h3>
                </div>
              </div>
            ))}
            <div className='hide btn-third'>
              <button className='see_more'>See more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultation;
