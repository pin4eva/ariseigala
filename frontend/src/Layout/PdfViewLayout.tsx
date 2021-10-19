import React from "react";
import styled from "styled-components";

const PdfViewLayout = ({
	children,
}: {
	children: React.ReactChild;
}): JSX.Element => {
	return <PdfViewLayoutMain className="bg-dark">{children}</PdfViewLayoutMain>;
};

export default PdfViewLayout;

const PdfViewLayoutMain = styled.main`
	min-height: 100vh;
`;
