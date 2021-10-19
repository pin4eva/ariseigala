/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { GET_ARTICLES_BY_SLUG } from "apollo/queries/articleQuery";
import Advertisement from "components/Advertisement";
import dayjs from "dayjs";
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage, NextPageContext } from "next";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { IArticle } from "types/interface";
import { truncateTitle } from "utils/utils";

const SingleArticlePage: NextPage<{ article: IArticle | null }> = ({
	article,
}): JSX.Element => {
	return (
		<ArticleLayout title={article?.title} description={article?.description}>
			<Wrapper>
				<div className="container single-article-wrapper">
					<div className="single-article-wrapper-advertisement py-3 mb-3">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<Link href="/">
										<a className="link-dark text-decoration-none">Home</a>
									</Link>
								</li>
								<li className="breadcrumb-item">
									<Link href="/articles/news">
										<a className="link-dark text-decoration-none">Category</a>
									</Link>
								</li>
								<li className="breadcrumb-item active" aria-current="page">
									{truncateTitle(article?.title, 6)}
								</li>
							</ol>
						</nav>
						{/* <p>
              <span className="text-muted">Home / Culture and tourism /</span>
              Vehicula cong...
            </p> */}

						<Advertisement />
					</div>
					<div className="single-article-1">
						<div className="d-inline-block mb-3">
							<h2 className="georgia">{article?.title}</h2>
							<div className="line bg-warning"></div>
						</div>
						<div>
							<span className="d-block fw-bold mb-2">
								{article?.author?.name}
							</span>
							<time className="d-block">
								{/* May 20, 2021 */}
								{dayjs(article?.createdAt).format("MMM DD, YYYY")}
							</time>
						</div>
					</div>
					<div className="single-article-2">
						<div className="single-article-2-img py-2">
							<img
								src={article?.image?.url}
								alt="Landscape picture"
								width={`${100}%`}
								height={500}
								className="w-100 banner-image"
							/>
						</div>
						<div className="single-article-2-main mt-3">
							<div className="px-3 text-justify mb-2">
								<ReactMarkdown>{article?.content as string}</ReactMarkdown>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</ArticleLayout>
	);
};

export default SingleArticlePage;

const Wrapper = styled.div`
	.single-article-wrapper {
		.banner-image {
			width: 100%;
			height: 38rem;
			object-fit: cover;
		}
		&-advertisement {
			width: 90%;
			max-width: 10000px;
			margin: 0 auto;
			.Advertise {
				width: 100% !important;
			}
		}
	}
`;

SingleArticlePage.getInitialProps = async (
	ctx: NextPageContext,
): Promise<{ article: IArticle | null }> => {
	try {
		const { data } = await apollo.query({
			query: GET_ARTICLES_BY_SLUG,
			variables: { slug: ctx?.query?.slug },
		});
		const article = data?.articles?.[0];
		return {
			article,
		};
	} catch (error) {
		console.log(error);
		return {
			article: null,
		};
	}
};
