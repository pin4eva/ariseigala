import { gql } from "@apollo/client";

export const GET_TELEVISIONS = gql`
	{
		televisions(limit: 15) {
			id
			videoUrl
			title
			createdAt
		}
	}
`;

export const GET_TELEVISION = gql`
	query ($id: ID!) {
		television(id: $id) {
			id
			videoUrl
			title
			createdAt
			comments {
				content
				createdAt
				user {
					name
					image
				}
			}
		}
	}
`;
