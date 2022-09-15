function ServiceCard() {
  return (
    <>
      <div className="flex wrap">
        <div className="service-wrapper flex">
          <img src="/src/assets/认证资格.png" alt="assets" />
          <div className="text">
            <h3>
              800+Outstanding <br />
              astrologers
            </h3>
            <span>verified and experience astrologer</span>
          </div>
        </div>
        <div className="service-wrapper flex">
          <img src="/src/assets/随时倾诉.png" alt="assets" />
          <div className="text">
            <h3>
              Get your Answer Anytime <br />
              Anywhere
            </h3>
            <span>You don't need Astrologer near you</span>
          </div>
        </div>
        <div className="service-wrapper flex">
          <img src="/src/assets/多样化.png" alt="assets" />
          <div className="text">
            <h3>Diversified Services</h3>
            <span>
              Tarot,Vedic,Vastu,Palmism,Face reading <br />
              and anything you need
            </span>
          </div>
        </div>
        <div className="service-wrapper flex">
          <img src="/src/assets/信用.png" alt="assets" />
          <div className="text">
            <h3>100% Guarantee???</h3>
            <span>
              Tarot,Vedic,Vastu,Palmism,Face reading and <br />
              anything you need
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
