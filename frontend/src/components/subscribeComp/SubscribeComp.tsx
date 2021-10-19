import React from "react";

const SubscribeComp = (): JSX.Element => {
  return (
    <div>
      <div className="py-5 bg-dark text-white">
        <div className="container">
          <h1 className="georgia text-center mb-3">
            Subscribe to our daily newsletter
          </h1>
          <p className="p-0 mb-3 text-center">
            Sit vestibulum facilisis at at egestas malesuada dignissim. Eget in
            semper et ultrices leo scelerisque dui diam. Ut posuere sagittis
            volutpat pretium egestas aliquet. Nibh condimentum mattis pharetra
            fringilla et. At varius nibh et congue turpis justo, at sed. Magna
            euismod ultricies quam integer egestas orci. Luctus eget vivamus
            libero tellus ipsum nec amet. Dolor vel orci, a fermentum at amet.
            Sit velit ipsum amet fringilla integer quis est lorem. Lacus nisi,
            faucibus elit vitae eu netus. Aliquam etiam egestas urna arcu.
          </p>
          <form className="row d-flex g-3 w-75 mx-auto">
            <div className="col-auto col-md-7">
              <input
                type="email"
                className="form-control fw-bold py-3 bg-dark text-light border-3 "
                placeholder="cx@gmail.com"
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-light fw-bold mb-3 px-5 py-3 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComp;
