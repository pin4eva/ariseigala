import React from "react";

const Signup = (): JSX.Element => {
  return (
    <div className="mb-4">
      <h2 className="georgia text-center mb-3">Create an account</h2>
      <p className="georgia text-center mb-4">
        Please enter a password to register new account
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-5">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="ctx@gmail.com"
            className="form-control form-control-lg border-dark"
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name=""
            id="Password"
            placeholder=".........."
            className="form-control form-control-lg border-dark"
          />
        </div>
        <div className="mb-5">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input bg-dark"
              name=""
              id="keep"
            />
            <label htmlFor="keepme" className="form-check-label">
              Yes I’d lke to recieve Arise Igala’s daily newsletter
            </label>
          </div>
        </div>
        <p className="text-justify mb-5">
          Arise Igala takes privacy seriously and is committed to transparency.
          We will never share your email address with third parties without your
          permission. By signing in, you are indicating that you accept our
          <b>Terms of Use</b> and <b>Privacy Policy</b>.
        </p>
        <div>
          <button className="btn btn-dark fw-bold d-block w-100">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
