import { gql } from "@apollo/client";

export const GET_ARTICLES_BY_SLUG = gql`
	query ArticleSlug($slug: String) {
		articles(where: { slug: $slug }) {
			id
			createdAt
			title
			slug
			description
			content
			banner
			image {
				url
			}
			category {
				name
				slug
			}
			author {
				name
			}
		}
	}
`;

export const GET_ARTICLES_BY_CATEGORY = gql`
	query ArticlesByCategory($slug: String) {
		articles(where: { category: { slug: $slug } }, sort: "createdAt:DESC") {
			id
			createdAt
			title
			slug
			description
			author {
				name
			}
			banner
			image {
				url
			}
			category {
				name
				slug
			}
		}
	}
`;

export const GET_ARTICLES = gql`
	query {
		articles(sort: "createdAt:DESC") {
			id
			createdAt
			title
			slug
			description
			banner
			image {
				url
			}
			category {
				name
				slug
			}
			author {
				name
			}
		}
	}
`;

export const GET_CATEGORIES = gql`
	{
		categories {
			name
			slug
		}
	}
`;

export const GET_NEWS_COVER = gql`
	{
		newCover {
			title
			image {
				url
			}
		}
	}
`;

export const GET_CULTURE_AND_TOURISM_COVER = gql`
	{
		cultureAndTourism {
			title
			description
			image {
				url
			}
		}
	}
`;

export const GET_ADS_1 = gql`
	{
		ads1s {
			image {
				url
			}
		}
	}
`;

export const GET_ADS_2 = gql`
	{
		ads2s {
			image {
				url
			}
		}
	}
`;
