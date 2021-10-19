import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
	mutation ($input: createCommentInput) {
		createComment(input: $input) {
			comment {
				id
				content
				createdAt
				user {
					image
					name
				}
			}
		}
	}
`;
