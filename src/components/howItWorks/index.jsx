import React from 'react';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    img: image1,
    header: 'Find your Guruji',
    para: 'Browse astrologers and check their skills, specialties and reviews. To find your destinated Guruji.',
  },
  {
    img: image2,
    header: 'Recharge for Consultation',
    para: 'After recharge, you can have the new user offer: ₹5/min and MAX 6 mins duration.',
  },
  {
    img: image3,
    header: 'Solve problem with astrologers',
    para: 'Call and Ask astrologers your problems. By providing your birth chart, astrologer can help you get the answer.',
  },
];

function HowItWorks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className='howItWorks flex-column-center'>
      <h1>How it works</h1>
      <section className='section-howItWorks'>
        {/* <Slider  {...settings}> */}
        {data.map((d, index) => {
          return (
            <div key={index} className='parent-img flex-column-center'>
              <img src={d.img} alt={`${'image' + index}`} />
              <h2>{d.header}</h2>
              <p>{d.para}</p>
            </div>
          );
        })}
        {/* </Slider> */}
      </section>
    </main>
  );
}

export default HowItWorks;
