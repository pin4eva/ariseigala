/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";
import { apollo } from "apollo";
import { GET_ARTICLES_BY_CATEGORY } from "apollo/queries/articleQuery";
import Advertisement from "components/Advertisement";
import SubscribeComp from "components/articles/home/SubscribeComp";
import TitleComp from "components/articles/TitleComp";
// import { categories } from "components/articles/ArticleHeaderComp";
import ArticleLayout from "Layout/ArticleLayout";
import { GetStaticProps, NextPage, NextPageContext } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IArticle } from "types/interface";
import { truncateTitle } from "utils/utils";

interface IProps {
	articles: IArticle[] | null;
}

const Article: NextPage<IProps> = ({ articles }: IProps): JSX.Element => {
	//console.log(articles?.map((article) => article.category?.name));
	if (!articles?.length)
		return (
			<p className="container mt-3">
				No Article in this category <br />
				<Link href="/">
					<a>Go back home</a>
				</Link>{" "}
			</p>
		);
	return (
		<ArticleLayout>
			<Wrapper className="">
				<div className="container">
					<h1 className="text-center text-uppercase my-3 serif">
						{articles?.[0]?.category?.name}
					</h1>
					<div className="top">
						<img
							src={articles?.[0]?.image?.url}
							alt=""
							className="banner-image"
						/>
						<h3 className="fs-3 serif fw-bold">
							{truncateTitle(articles?.[0]?.title as string, 18)}
						</h3>
					</div>

					<div className="main mb-4">
						<TitleComp title="Recent articles" />
						<div className="card-list-wrapper row">
							{articles &&
								[...articles]
									?.splice(0, 8)
									?.map((article, i) => (
										<ArticleCard article={article} key={i} />
									))}
						</div>
						<div className="my-3">
							<Advertisement />
						</div>
						<div className="card-list-wrapper row my-3">
							{articles &&
								[...articles]
									?.splice(8)
									?.map((article, i) => (
										<ArticleCard article={article} key={i} />
									))}
						</div>
					</div>
				</div>
				<div>
					<SubscribeComp />
				</div>
			</Wrapper>
		</ArticleLayout>
	);
};

export default Article;

const ArticleCard = ({ article }: { article: IArticle }) => {
	return (
		<Link
			href={`/articles/${article?.category?.slug}/${article?.slug}`}
			passHref
		>
			<div className="article-card mb-2 col-md-6 col-lg-3 c-pointer">
				<img src={article?.image?.url} alt="" />
				<p className="serif fs-4">{truncateTitle(article?.title)}</p>
				<div className="line w-25 my-3"></div>
				<p>By {article?.author?.name}</p>
			</div>
		</Link>
	);
};

const Wrapper = styled.div`
	.top {
		img {
			width: 100%;
			height: 545px;
			object-fit: cover;
		}
	}
	.line {
		height: 1px;
		background-color: black;
	}
	.card-list-wrapper {
		.article-card {
			img {
				width: 100%;
				height: 267px;
				object-fit: cover;
			}
		}
	}
`;

export const getStaticProps: GetStaticProps = async (
	ctx: NextPageContext | any,
): Promise<{ props: IProps; revalidate: number }> => {
	try {
		const { data } = await apollo.query({
			query: GET_ARTICLES_BY_CATEGORY,
			variables: { slug: ctx?.params?.category },
		});

		return {
			props: {
				articles: data?.articles,
			},
			revalidate: 500,
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				articles: null,
			},
			revalidate: 500,
		};
	}
};

const GET_ARTICLES = gql`
	query {
		articles(sort: "createdAt:DESC") {
			slug
			category {
				slug
			}
		}
	}
`;

export const getStaticPaths = async (): Promise<{
	paths: string[];
	fallback: string;
}> => {
	const { data } = await apollo.query({
		query: GET_ARTICLES,
	});
	const paths = data?.articles?.map((article: IArticle) => ({
		params: { slug: article.slug, category: article?.category?.slug },
	}));

	return { paths, fallback: "blocking" };
};
