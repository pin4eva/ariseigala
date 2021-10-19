import AuthLayout from "Layout/AuthLayout";
import React from "react";

const Reset_password = (): JSX.Element => {
  return (
    <AuthLayout>
      <div className="container w-75">
        <h2 className="georgia text-center mb-3">Reset your password</h2>
        <p className="georgia text-center mb-4">
          Enter the email you use for your Arise Igala account. We will send you
          an email with a reset password link.
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
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
          <div>
            <button className="btn btn-dark d-block w-100 fw-bold">
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Reset_password;
