import { gql } from "@apollo/client";
import { apollo } from "apollo";
import { GET_ARTICLES_BY_CATEGORY } from "apollo/queries/articleQuery";
import { IArticle, IMage } from "types/interface";

export enum CatEnum {
	News = "news",
	Culture = "culture-and-tourism",
	Entertainment = "entertainment",
	Education = "education",
}

const getCategory = async (cat: CatEnum) => {
	try {
		const { data } = await apollo.query({
			query: GET_ARTICLES_BY_CATEGORY,
			variables: { slug: cat },
		});
		const articles = data.articles;

		return articles;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getNewsCover = async (): Promise<{
	articles: IArticle[] | null;
}> => {
	try {
		return {
			articles: await getCategory(CatEnum.News),
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};

export const getEducationCover = async (): Promise<{
	articles: IArticle[] | null;
}> => {
	try {
		const articles = await getCategory(CatEnum.Education);

		return {
			articles,
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};

export const getEntertainmentCover = async (): Promise<{
	articles: IArticle[] | null;
}> => {
	try {
		const articles = await getCategory(CatEnum.Entertainment);

		return {
			articles,
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};

export const getCultureCover = async (): Promise<{
	articles: IArticle[] | null;
}> => {
	try {
		return {
			articles: await getCategory(CatEnum.Culture),
		};
	} catch (error) {
		console.log(error);
		return {
			articles: null,
		};
	}
};

export interface NewsCover {
	title: string;
	image: IMage;
	id: string;
}
export interface MagazineCover {
	issue: string;
	cover: IMage;
	description: string;
}

export interface EntertainmentCover {
	title: string;
	image: IMage;
	id: string;
}

export interface EducationCover {
	image: IMage;
	id: string;
}

export interface CultureCover {
	title: string;
	image: IMage;
	description: string;
}
