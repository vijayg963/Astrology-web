import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container-footer flex">
          <div className="community">
            <h2>COMMUNITY</h2>
            <ul>
              <li>Diversity & Belonging</li>
              <li>Against Discrimination</li>
              <li>Accessibility</li>
              <li>Airbnb Associates</li>
              <li>Host Afghan refugees</li>
              <li>Guest Referrals</li>
              <li>Gift cards</li>
              <li>Airbnb</li>
            </ul>
          </div>
          <div className="host">
            <h2>HOST</h2>
            <ul>
              <li>Host your home</li>
              <li>Host an Online Experience</li>
              <li>Host an Experience</li>
              <li>Responsible hosting</li>
              <li>Resource Center</li>
              <li>Community Center</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
