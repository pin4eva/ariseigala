/* eslint-disable @next/next/no-img-element */
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ArticlePage: NextPage = (): JSX.Element => {
	const router = useRouter();
	useEffect(() => {
		if (process.browser) {
			router.push("/articles/news");
		}
	}, []);
	return (
		<ArticleLayout>
			<div className="container">
				<h2>Hello</h2>
			</div>
		</ArticleLayout>
	);
};

export default ArticlePage;

ArticlePage.getInitialProps = async ({ res }) => {
	res?.writeHead(307, { Location: "/articles/news" });
	res?.end();
	return {};
};
