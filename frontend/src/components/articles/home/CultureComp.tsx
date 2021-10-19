/* eslint-disable @next/next/no-img-element */
import AdvertisementLandScape, {
	AdvertisementPortrait,
} from "components/Advertisement";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { IArticle } from "types/interface";
import { truncateTitle } from "utils/utils";
import TitleComp from "../TitleComp";

interface IProps {
	articles: IArticle[] | null;
}

const CultureComp: React.FC<IProps> = ({ articles }): JSX.Element => {
	return (
		<Wrapper className="container">
			<TitleComp title="Culture and tourism" />
			<p className="big-head fs-3 my-3">
				{truncateTitle(articles?.[0]?.title, 16)}
			</p>

			<img
				src={articles?.[0]?.image.url}
				alt="culture"
				className="banner-image"
			/>
			<div className="text-justify mt-3">
				<ReactMarkdown>{articles?.[0]?.description as string}</ReactMarkdown>
			</div>
			<div className="text-end my-3">
				<Link href={`/articles/culture-and-tourism`}>
					<a className="btn fw-bold">
						Read article
						<svg
							width="16"
							height="15"
							viewBox="0 0 16 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="ms-2"
						>
							<path
								d="M1 8.49951H12.86L9.23 12.8595C9.14595 12.9606 9.08265 13.0773 9.0437 13.2029C9.00474 13.3285 8.99091 13.4605 9.00298 13.5914C9.02736 13.8559 9.15578 14.0998 9.36 14.2695C9.56422 14.4393 9.8275 14.5209 10.0919 14.4965C10.3563 14.4722 10.6003 14.3437 10.77 14.1395L15.77 8.13951C15.8036 8.09179 15.8337 8.04165 15.86 7.98951C15.86 7.93951 15.91 7.90951 15.93 7.85951C15.9753 7.74485 15.9991 7.6228 16 7.49951C15.9991 7.37622 15.9753 7.25417 15.93 7.13951C15.93 7.08951 15.88 7.05951 15.86 7.00951C15.8337 6.95737 15.8036 6.90724 15.77 6.85951L10.77 0.859514C10.676 0.746631 10.5582 0.655851 10.4252 0.59363C10.2921 0.531409 10.1469 0.499275 10 0.499514C9.76635 0.499057 9.53991 0.580432 9.36 0.729514C9.25874 0.813463 9.17504 0.916563 9.11369 1.03291C9.05234 1.14926 9.01454 1.27657 9.00246 1.40754C8.99039 1.53852 9.00427 1.67059 9.04331 1.7962C9.08236 1.9218 9.1458 2.03847 9.23 2.13951L12.86 6.49951H1C0.734784 6.49951 0.48043 6.60487 0.292893 6.79241C0.105357 6.97994 0 7.2343 0 7.49951C0 7.76473 0.105357 8.01908 0.292893 8.20662C0.48043 8.39416 0.734784 8.49951 1 8.49951Z"
								fill="black"
							/>
						</svg>
					</a>
				</Link>
			</div>

			<div className="my-3 bottom">
				<div className="inner-grid">
					<div className="row left">
						{articles?.slice(0, 3).map((article, i) => (
							<div className="col-md-4" key={i}>
								<ListPreviewComp article={article} />
							</div>
						))}
					</div>
					<div className="right">
						<div className="portrait">
							<AdvertisementPortrait />
						</div>
						<div className="landscape">
							<AdvertisementLandScape />
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default CultureComp;

const Wrapper = styled.section`
	img {
		width: 100%;
	}
	.line {
		height: 2px;
	}
	.preview {
		img {
			width: 100%;
			height: 267px;
			object-fit: cover;
		}
	}
	.bottom {
		.right {
			width: 100%;
			min-width: 14rem;
			max-width: 17rem;

			.portrait {
				height: 100%;
				display: none;
				@media screen and (min-width: 768px) {
					display: block;
				}
			}
			.landscape {
				display: none;
				@media screen and (max-width: 768px) {
					display: block;
					width: 100%;
				}
			}
		}
		@media screen and (min-width: 768px) {
			.inner-grid {
				display: grid;
				grid-template-columns: 1fr auto;
				grid-column-gap: 2rem;
			}
		}
		@media screen and (max-width: 920px) {
			.right {
				width: 100%;
				min-width: 14rem;
				max-width: 15rem;
			}
			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr;
				.right {
					max-width: 100%;
				}
			}
		}
	}
`;

const ListPreviewComp = ({ article }: { article: IArticle }): JSX.Element => {
	return (
		<div className="inner preview">
			<img src={article?.image?.url} alt={article?.title} className="w-100" />
			<div>
				<p className="inner-excerpt mt-2">{truncateTitle(article?.title)}</p>
				<div className="line bg-warning w-50 mb-2 mx-auto" />
				<small className="text-center d-block">{article?.author?.name}</small>
			</div>
		</div>
	);
};
