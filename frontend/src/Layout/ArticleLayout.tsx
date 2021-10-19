import FooterComp from "components/FooterComp";
import HeaderComp from "components/articles/ArticleHeaderComp";
import React, { Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";

const ArticleLayout = ({
	children,
	title,
	description,
}: {
	children: React.ReactChild;
	title?: string;
	description?: string;
}): JSX.Element => {
	return (
		<Fragment>
			<Head>
				<title>{title || "Arise Igala Articles"}</title>
				<meta name="description" content={description} />
			</Head>
			<Main id="article-layout">
				<HeaderComp />
				<main>{children}</main>
				<FooterComp />
			</Main>
		</Fragment>
	);
};

export default ArticleLayout;

const Main = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;
