/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { MAGAZINE_BANNER } from "apollo/queries/magazineQuery";
import { ArticlesAtom } from "atoms/ArticlesAtom";
import {
	default as Advertisement,
	default as AdvertisementLandScape,
} from "components/Advertisement";
import ArticleNewsComp from "components/articles/home/ArticleNewsComp";
import CultureComp from "components/articles/home/CultureComp";
import EducationComp from "components/articles/home/EducationComp";
import EntertainmentComp from "components/articles/home/EntertainmentComp";
import MagazinAd from "components/articles/home/MagazinAd";
import SubscribeComp from "components/articles/home/SubscribeComp";
import ChoiceModalComp from "components/ChoiceModal";
import Cookies from "js-cookie";
import ArticleLayout from "Layout/ArticleLayout";
import { NextPage } from "next";
import { Fragment, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IArticle, IMagazine } from "types/interface";
import {
	getCultureCover,
	getEducationCover,
	getEntertainmentCover,
	getNewsCover,
} from "utils/homeUtils";

interface IProps {
	news: {
		articles: IArticle[] | null;
	} | null;

	entertainment: {
		articles: IArticle[] | null;
	} | null;
	education: {
		articles: IArticle[] | null;
	} | null;
	culture: {
		articles: IArticle[] | null;
	} | null;
	magBanner?: IMagazine & { description: string };
}

const Home: NextPage<IProps> = ({
	news,

	entertainment,
	education,
	culture,
	magBanner,
}): JSX.Element => {
	const [show, setShow] = useState(Boolean(!Cookies.get("consent")));
	const setArticles = useSetRecoilState(ArticlesAtom);

	const handleHide = () => {
		Cookies.set("consent", "true");
		setShow(false);
	};

	useEffect(() => {
		if (news?.articles?.length) {
			setArticles(news?.articles);
		}
	}, []);

	if (!news)
		return (
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: "100vh" }}
			>
				<div>
					<img src="/images/loader.svg" />
					<p className="text-center">Getting ready...</p>
				</div>
			</div>
		);
	return (
		<Fragment>
			<ChoiceModalComp show={show} onHide={handleHide} />
			<ArticleLayout title="Arise Igala | Articles">
				<Wrapper className="article-home">
					<Advertisement />

					<ArticleNewsComp articles={news?.articles as IArticle[]} />
					<div className="line bg-warning my-5 container"></div>
					<MagazinAd mag={magBanner} />
					<EntertainmentComp articles={entertainment?.articles as IArticle[]} />
					<EducationComp articles={education?.articles as IArticle[]} />
					<CultureComp articles={culture?.articles as IArticle[]} />
					<SubscribeComp />
					<div className="my-5">
						<AdvertisementLandScape />
					</div>
				</Wrapper>
			</ArticleLayout>
		</Fragment>
	);
};

const Wrapper = styled.div``;

export default Home;

export const getStaticProps = async (): Promise<{
	props: IProps;
}> => {
	try {
		const news = await getNewsCover();
		const entertainment = await getEntertainmentCover();
		const education = await getEducationCover();
		const culture = await getCultureCover();

		const { data } = await apollo.query({
			query: MAGAZINE_BANNER,
		});
		const magBanner = data?.magazineBanner;

		return {
			props: {
				news,
				entertainment,
				education,
				culture,

				magBanner,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				news: null,
				entertainment: null,
				education: null,
				culture: null,
			},
		};
	}
};
