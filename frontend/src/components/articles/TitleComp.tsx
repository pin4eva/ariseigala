import React from "react";
import styled from "styled-components";

const TitleComp = ({ title }: { title: string }): JSX.Element => {
	return (
		<Wrapper>
			<div className="d-flex align-items-center justify-content-center styled-title">
				<div className="ruler px-5  p-0 bg-dark"></div>
				<h4 className="mx-5 fw-bold fs-1 georgia title">{title}</h4>
				<div className="ruler px-5  bg-dark"></div>
			</div>
		</Wrapper>
	);
};

export default TitleComp;

const Wrapper = styled.div`
	.styled-title {
		margin: 3rem 0;
		.ruler {
			height: 1px;
			width: 15%;
		}
		/* .title {
			text-transform: capitalize;
		} */
	}
`;
