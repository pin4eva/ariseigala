import Signin from "components/authComp/signin/Signin";
import Signup from "components/authComp/signup/Signup";
import AuthLayout from "Layout/AuthLayout";
import React, { useState } from "react";

const Index = (): JSX.Element => {
   const [state, setState] = useState(true);
   return (
      <AuthLayout>
         <main>
            <div className="container w-75 ">
               <div>{state ? <Signin /> : <Signup />}</div>
               <div className="">
                  <div className="d-flex align-items-center mb-4 justify-content-center">
                     <hr className="d-block bg-dark w-50" />
                     <span className="mx-2">OR</span>
                     <hr className="d-block bg-dark w-50" />
                  </div>
                  <div className="mb-5">
                     <button className="btn px-5 btn-dark fw-bold d-block w-100">
                        {state ? "SIGN IN" : "SIGN UP"} WITH GOOGLE
                     </button>
                  </div>
                  <p className="text-center text-decoration-underline">
                     {state ? (
                        <span
                           className="c-pointer"
                           onClick={() => setState(false)}
                        >
                           Don’t have an account? <b>Sign up</b>
                        </span>
                     ) : (
                        <span
                           className="c-pointer"
                           onClick={() => setState(true)}
                        >
                           Already have an account? <b>Sign in</b>
                        </span>
                     )}
                  </p>
               </div>
            </div>
         </main>
      </AuthLayout>
   );
};

export default Index;
