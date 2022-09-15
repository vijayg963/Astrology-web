function Card() {
  return (
    <>
      <div className='gurantee-card flex '>
        <div>
          <img className='client' src='avtar.png' alt='client-image' />
        </div>
        <div className='clientInfo '>
          <div className='flex'>
            <h3>Swatanwa Astro to </h3>
            <a href='#'>Exporu u</a>
          </div>
          <img className='star' src='starb.png' alt='star' />
          <img className='star' src='starb.png' alt='star' />
          <img className='star' src='starb.png' alt='star' />
          <img className='star' src='starb.png' alt='star' />
          <img className='star' src='starb.png' alt='star' />
          <span>August 25th 2021</span>
          <p>
            Gave me a basic understanding of some key words sand phrases which i
            really like it!Gave me a basic understanding of some key words sand
            phrases which i really like it like it like it like it{' '}
          </p>
          <button>Taort</button>
          <button>Vedic</button>
          <button>Ancient HinduAstrology</button>
        </div>
      </div>
    </>
  );
}

export default Card;
