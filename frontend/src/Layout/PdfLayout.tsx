import MagazineFooter from "components/magazineComp/MagazineFooter";
import PdfHeader from "components/pdfComp/PdfHeader";

import React from "react";
import styled from "styled-components";

const PdfLayout = ({
	children,
}: {
	children: React.ReactChild;
}): JSX.Element => {
	return (
		<PdfMain>
			{/* <PdfHeader /> */}
			<main>{children}</main>
			{/* <MagazineFooter /> */}
		</PdfMain>
	);
};

export default PdfLayout;

const PdfMain = styled.div`
	/* background-color: black; */

	/* color: white; */
	/* display: grid;
	min-height: 100vh;
	grid-template-rows: auto 1fr auto; */
`;
