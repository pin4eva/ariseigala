import TvLayout from "Layout/TvLayout";
import React from "react";

const Index = (): JSX.Element => {
  return (
    <TvLayout>
      <main>
        <div className="container">
          <div className="py-2 mb-5">
            <h3 className="mb-2 georgia fw-bold text-center">
              Subscribe to get unlimited access to all of Arise Igala
            </h3>
            <p className="text-justify">
              At mauris tellus quis ac. Feugiat adipiscing quis habitant vitae
              elementum eget sed sed mollis. Nunc aliquam orci adipiscing diam
              laoreet. Magna sit maecenas eu tellus convallis eu non. Ultrices
              pellentesque in non ultrices ac nisl nec amet, laoreet. Risus
              aliquam erat viverra venenatis. Arcu integer dui ipsum morbi purus
              neque. Eu suspendisse sagittis, nulla aenean turpis magna. Urna,
              vestibulum ac volutpat et. Elementum diam suspendisse ultrices
              vitae consectetur rutrum elementum pulvinar. Senectus eget mi
              mauris risus. Diam sociis in eget nulla eget gravida mattis.
            </p>
          </div>
          <div className="row row-cols-1 mb-3 row-cols-sm-2 row-cols-md-3 g-4">
            {Subscribecard.map((pricing, i) => (
              <div className="col" key={i}>
                <div className="card shadow-lg py-3 px-4 bg-white border-0">
                  <div className="card-body">
                    <h2 className="text-center mb-4 border-light fw-bold border-bottom border-3 py-2 georgia">
                      {pricing.period}
                    </h2>
                    <p className="text-center mb-5 fw-bold fs-2">
                      {pricing.price}
                    </p>
                    <span className="d-block fs-5 georgia p-0 m-0 text-center text-muted">
                      {pricing.txt}
                    </span>
                    <span className="d-block p-0 georgia text-center text-info georgia mb-4 mx-auto">
                      {pricing?.blue}
                    </span>
                    <button
                      className={`btn btn-${pricing.btnColor} text-white  d-block px-4 py-2 mx-auto fw-bold`}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex mb-5 justify-content-center align-items-center">
            <div className="d-flex justify-content-between gap-2">
              <i className="fab fa-3x fa-cc-visa"></i>
              <i className="fab fa-3x fa-cc-mastercard"></i>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-center text-warning p-0 mb-3 fs-2">
              Join over 10 Million subscribers in Nigeria
            </p>
            <p className="mb-3 text-justify">
              Ipsum et bibendum morbi et eleifend senectus sed. Amet sed
              tincidunt ullamcorper viverra. Est aliquam a vitae magna purus
              nibh sed consectetur mi. Egestas tortor quis duis vel, eu
              venenatis fusce proin diam
            </p>
            <div className="line-thin bg-light bg-dark" />
          </div>
          <div className="list-group mb-2">
            <SingleChecked />
            <SingleChecked />
            <SingleChecked />
            <SingleChecked />
          </div>
          <button className="btn btn-dark px-5 fw-bold d-block mx-auto">
            Subscribe
          </button>
        </div>
      </main>
    </TvLayout>
  );
};

export default Index;

const Subscribecard = [
  {
    period: "Monthly",
    btnColor: "dark",
    price: "N1000",
    txt: "Billed Monthly",
  },
  {
    period: "Annually",
    btnColor: "warning",
    price: "N1000",
    txt: "Billed Monthly",
    blue: "(save 17%)",
  },
  {
    period: "Monthly",
    btnColor: "dark",
    price: "N1000",
    txt: "Billed Monthly",
  },
];

const SingleChecked = (): JSX.Element => {
  return (
    <li className="list-group-item d-flex  border-0">
      <i className="far fa-check-circle form-check-input m-0 me-3 border-0 fs-1"></i>
      <p>
        Malesuada et sed rhoncus aliquam nibh nisi. Velit ultricies eget dolor
        iaculis fusce proin nibh lacus diam. Turpis fringilla vivamus congue
        feugiat posuere et, non. Convallis sit tempor viverra iaculis venenatis
        aliquam.
      </p>
    </li>
  );
};
