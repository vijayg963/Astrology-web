import Card from './Card';

function Gurantee() {
  return (
    <>
      <div className='gurantee container'>
        <div className='line'>
          <img className='frame' src='Frame.png' alt='frame' />
        </div>{' '}
        <h2>100% Satisfaction gurantee</h2>
        <p className='sub-title'>
          If you are not satisfied by your consultation.We promise you to refund
          and you can take another Guruji.
        </p>
        <div className='card-wrapper flex wrap'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Gurantee;
