import Link from "next/link";
import React from "react";

const Signin = (): JSX.Element => {
  return (
    <div className="mb-4">
      <h2 className="georgia text-center mb-3">Sign in to you account</h2>
      <p className="georgia text-center mb-4">
        Please enter your email address and password to continue
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
        <div className="mb-3 d-flex justify-content-between flex-column gap-2 flex-sm-row">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input bg-dark"
              name=""
              id="keep"
            />
            <label htmlFor="keepme" className="form-check-label">
              Keep me logged in
            </label>
          </div>
          <p className="text-decoration-underline c-pointer">
            <Link href="/auth/reset_password">
              <a className="text-inherit">I forgot my password</a>
            </Link>
          </p>
        </div>
        <div>
          <button className="btn btn-dark fw-bold d-block w-100">
            SIGN IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
