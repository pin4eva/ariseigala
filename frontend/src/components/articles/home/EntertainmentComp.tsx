/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IArticle } from "types/interface";
import TitleComp from "../TitleComp";

interface IProps {
	articles: IArticle[] | null;
}

const EntertainmentComp: React.FC<IProps> = ({ articles }): JSX.Element => {
	return (
		<Wrapper className="section-3 container">
			<TitleComp title="Entertainment" />
			<div className="home-section-flex-wrapper">
				<div className="left">
					<div className="inner">
						<Link href={`/articles/entertainment/${articles?.[0]?.slug}`}>
							<a className="text-inherit text-decoration-none">
								<img src={articles?.[0]?.image.url} alt="" />
								<p className="big-head fs-3 mt-3">{articles?.[0]?.title}</p>
							</a>
						</Link>
					</div>
				</div>
				<div className="right">
					<div className="inner">
						{articles?.slice(0, 3).map((article, i) => (
							<SingleCard article={article} key={i} />
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default EntertainmentComp;

const Wrapper = styled.section`
	.home-section-flex-wrapper {
		gap: 2.5rem;
		display: grid;
		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
		.left {
			img {
				width: 100%;
				/* max-height: 411px; */
				object-fit: contain;
			}
		}
		.right {
			/* width: 5; */
			/* max-width: 30rem; */
			display: none;
			.inner {
				.inner-content {
					max-width: 100%;

					gap: 1rem;

					img {
						width: 100%;

						height: 269px;
						object-fit: cover;
					}
				}
			}
			@media screen and (min-width: 768px) {
				display: block;
				.inner-content {
					display: grid;
					grid-template-columns: 22rem auto;
					margin-bottom: 1rem;
				}
			}
		}
	}
`;

const SingleCard = ({ article }: { article: IArticle }) => {
	return (
		<Link href={`/articles/entertainment/${article?.slug}`}>
			<a className="link-dark">
				<div className="inner-content mb-4">
					<img src={article?.image?.url} className="" />
					<div className="">
						<p className="font-14 fw-400">{article?.title} </p>
					</div>
				</div>
			</a>
		</Link>
	);
};
