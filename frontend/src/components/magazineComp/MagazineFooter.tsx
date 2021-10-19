/* eslint-disable @next/next/no-img-element */
import React from "react";

const MagazineFooter = (): JSX.Element => {
  return (
    <footer className="py-4">
      <div className="d-flex justify-content-center">
        <div>
          <img src="/images/logo.png" alt="" className="d-block" />
          <div className="d-flex text-warning fs-5 justify-content-between">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube ms-1"></i>
            <i className="fab fa-facebook ms-1"></i>
            <i className="fab fa-twitter ms-1"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-2">
        <div className="row d-none py-2 d-sm-block d-lg-flex container mx-auto mb-2">
          <div className="col">News</div>
          <div className="col">Culture and tourism</div>
          <div className="col">Education</div>
          <div className="col">Entertainment</div>
          <div className="col">Opinion</div>
          <div className="col">Politics</div>
          <div className="col">Business</div>
          <div className="col">Religion</div>
          <div className="col">Technology</div>
        </div>
        <p className="text-center mb-3 georgia fa-2x">
          Magazine &nbsp;&nbsp;&nbsp; Television
        </p>
        <div className="container">
          <p className="text-center">
            © Arise Igala 2021 All Rights Reserved. Use of this site constitutes
            acceptance of our Terms of Service, Privacy Policy and Do Not Sell
            My Personal Information. Arise Igala may receive compensation for
            some links to products and services on this website. Offers may be
            subject to change without notice. This site is protected by
            reCAPTCHA and the Google Privacy Policy Terms of Service apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MagazineFooter;
