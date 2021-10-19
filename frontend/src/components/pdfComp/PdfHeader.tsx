import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";

const PdfHeader = (): JSX.Element => {
   return (
      <header className="d-flex justify-content-center align-items-center ">
         <Link href="/magazine">
            <a className="text-decoration-none">
               <Logo />
            </a>
         </Link>
      </header>
   );
};

export default PdfHeader;
