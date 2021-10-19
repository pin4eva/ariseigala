import FooterComp from "components/FooterComp";
import MagazineFooter from "components/magazineComp/MagazineFooter";
import TvHeader from "components/tvComp/TvHeader";
import React from "react";
import styled from "styled-components";

const TvLayout = ({
	children,
}: {
	children: React.ReactChild;
}): JSX.Element => {
	return (
		<TvMain id="tv-layout">
			<TvHeader />
			<main>{children}</main>
			<FooterComp />
		</TvMain>
	);
};

export default TvLayout;
const TvMain = styled.div`
	min-height: 100vh;
	display: grid;
`;
