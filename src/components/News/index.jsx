import React from 'react';
import data from './data.json';

const News = () => {
  return (
    <>
      <section className='news-section'>
        <div className='container-news'>
          <h1>Guruji in News</h1>
          <p>Our Sucess stories in Media Headlines and lots of Encouragement</p>
          <div>
            <div className='news-box'>
              {data.map((elm, i) => (
                <>
                  <div key={i} className='news'>
                    <img
                      className='m-b-1'
                      width={100}
                      height={40}
                      src={elm.images}
                      alt='img'
                    />
                    <div className='flex justify-center'>
                      <img width={16} src={elm.icon} alt='icon' />
                      <p>{elm.date}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
