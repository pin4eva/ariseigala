import { gql } from "@apollo/client";

export const GET_MAGAZINES = gql`
	query {
		magazines(sort: "issue:ASC") {
			id
			issue
			edition
			date
			cover {
				url
			}
		}
	}
`;

export const GET_MAGAZINE = gql`
	query ($id: ID!) {
		magazine(id: $id) {
			id

			pdf {
				url
			}
		}
	}
`;

export const MAGAZINE_BANNER = gql`
	{
		magazineBanner {
			id
			issue
			title
			description
			cover {
				url
			}
		}
	}
`;
