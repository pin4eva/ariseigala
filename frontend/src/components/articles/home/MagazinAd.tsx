/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IMagazine } from "types/interface";

const MagazinAd = ({
	mag,
}: {
	mag: (IMagazine & { description: string }) | undefined;
}): JSX.Element => {
	return (
		<Wrapper>
			<div className="container content-wrapper">
				<div className="top">
					<div className="flex-wrapper d-md-flex">
						<div className="left ">
							<div className="inner">
								<img src={mag?.cover?.url} alt="" />
							</div>
						</div>
						<div className="right">
							<div className="inner container ">
								<p className="fs-2 fw-bold mb-0">ARISE IGALA Magazine</p>
								<p className="fs-2 fw-bold">ISSUE {mag?.issue}</p>

								<p className="serif mb-3">{mag?.description}</p>
								<Link href="/magazine">
									<a className="btn btn-dark">Go to magazine</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom">
					<div className="bottom-inner">
						{cardListItems.map((item, i) => (
							<Card key={i} item={item} />
						))}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default MagazinAd;

const Wrapper = styled.div`
	background: #cbcbcb;
	min-height: 100vh;

	.content-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		min-height: inherit;
		@media screen and (max-width: 768px) {
			padding: 1rem 0;
		}
		.top {
			.left {
				width: 100%;
				max-width: 25rem;
				background: #000;
				padding: 1rem 0;
				text-align: center;
				img {
					width: 100%;
					max-width: 14rem;
				}
			}
			.right {
				background-color: #fff;
				display: flex;
				align-items: center;
				flex: 1;
				.inner {
					text-align: center;
					padding: 0 1rem;
					/* width: 100%; */
				}
			}
			@media screen and (max-width: 990px) {
				margin-top: 1rem;
				.right {
					padding: 0.5rem 0;
				}
				@media screen and (max-width: 768px) {
					.left {
						max-width: 100%;
						img {
							max-width: 18rem;
						}
					}
				}
			}
		}
		.bottom {
			&-inner {
				display: grid;
				gap: 1rem;
				grid-template-columns: repeat(4, 1fr);

				@media screen and (max-width: 999px) {
					grid-template-columns: repeat(2, 1fr);
					margin-top: 2rem;
					margin-bottom: 1rem;
					justify-items: center;
					@media screen and (max-width: 768px) {
						grid-template-columns: repeat(1, 1fr);
					}
				}
			}
			.magazinead-card {
				width: 100%;

				background-color: #fff;
				@media screen and (min-width: 999px) {
					max-width: 18.125rem;
				}
				.image {
					position: relative;
					background-color: red;
					img {
						width: 100%;
						object-fit: contain;
					}

					&-polygon {
						width: 100%;
						max-width: 4.5625rem;
						position: absolute;
						bottom: 0;
						right: 50%;
						transform: translateX(50%);
					}
				}
				.inner {
					.content {
						text-align: center;
						.title {
							margin: 1.8rem 0;
							font-size: 1.25rem;
						}
						/* padding: 0.5rem; */
					}
				}
			}
		}
	}
`;

const Card = ({ item }: { item: CardProp }) => {
	return (
		<div className="magazinead-card">
			<Link href={`/articles/${item.link}`}>
				<a className="text-decoration-none text-inherit">
					<div className="inner">
						<div className="image">
							<img src={item.image} alt="" className="image-main" />
							<img src="/images/polygon.png" alt="" className="image-polygon" />
						</div>
						<p className=" fw-light title text-center mt-3 ">{item.category}</p>
						<div className="content">
							<p className="small-head serif text-center">{item.title}</p>
							<p className="fw-light">
								Eget hac mauris nisl eu, mi. Et ullamcorper est fringilla mi. Ut
								sit vestibulum.
							</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

const cardListItems: CardProp[] = [
	{
		category: "Politics",
		link: "politics",
		image: "/images/politics.png",
		title: "Non et pretium ac.",
	},
	{
		category: "Religion",
		link: "religion",
		image: "/images/religion.png",
		title: "Non et pretium ac.",
	},
	{
		category: "Business",
		link: "business",
		image: "/images/business.png",
		title: "Non et pretium ac.",
	},
	{
		category: "Education",
		link: "education",
		image: "/images/education.png",
		title: "Non et pretium ac.",
	},
];

interface CardProp {
	category: string;
	link: string;
	image: string;
	title: string;
}
