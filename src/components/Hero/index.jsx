import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/Ai';
import { BsStarHalf } from 'react-icons/Bs';
import { FaStarHalf } from 'react-icons/Fa';

const HeroSection = () => {
  return (
    <section className='heroSection bg-banner'>
      <img width={'100%'} src='banner.png' alt='banner' />
      <div className='container'>
        <div className='heroContent'>
          <h2 className='title'>
            Find your destiny and remedies with top expert astrologers
          </h2>
          <hr />
          <h5>Call to consult with professional astrologers</h5>
          <div className='flex'>
            <div className='rating'>
              <div>
                <h6>
                  <span className='green'>
                    <AiTwotoneStar />
                  </span>
                  <strong>Trustpilot</strong>
                </h6>
                <p className='score green'>
                  <strong>4.9</strong>
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                </p>
              </div>
            </div>
            <div className='rating'>
              <div>
                <h6>
                  Reseller
                  <strong>
                    Rating <b>✔</b>
                  </strong>
                </h6>
                <p className='score perple'>
                  <strong>4.8</strong> <AiTwotoneStar /> <AiTwotoneStar />{' '}
                  <AiTwotoneStar /> <AiTwotoneStar /> <FaStarHalf />
                </p>
              </div>
            </div>
            <div className='rating'>
              <div>
                <h6>
                  <span>
                    <AiTwotoneStar />
                  </span>
                  <strong> REVIEWS.io</strong>
                </h6>
                <p className='score orange'>
                  <strong>4.8</strong> <AiTwotoneStar /> <AiTwotoneStar />{' '}
                  <AiTwotoneStar /> <AiTwotoneStar /> <FaStarHalf /> ✔
                </p>
              </div>
            </div>
          </div>
          <button className='btn btn-talk'>Talk Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
