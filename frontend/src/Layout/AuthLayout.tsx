import AuthHeader from "components/authComp/AuthHeader";
import MagazineFooter from "components/magazineComp/MagazineFooter";
import React from "react";
import styled from "styled-components";

const AuthLayout = ({
   children,
}: {
   children: React.ReactChild;
}): JSX.Element => {
   return (
      <AuthMain id="article-layout">
         <AuthHeader />
         <main>{children}</main>
         <MagazineFooter />
      </AuthMain>
   );
};

export default AuthLayout;

const AuthMain = styled.div`
   display: grid;
   min-height: 100vh;
   grid-template-rows: auto 1fr auto;
`;
