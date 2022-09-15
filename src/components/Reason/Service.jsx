import data from './data';

function Service() {
  return (
    <>
      <div className='service container'>
        <h2>4 Reasons Why You should choose Guruji</h2>
        <div className='flex wrap'>
          {data.map((elm) => (
            <div className='service-wrapper card flex'>
              <img src={elm.img} alt='assets' />
              <div className='text'>
                <h3>{elm.title}</h3>
                <span>{elm.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
