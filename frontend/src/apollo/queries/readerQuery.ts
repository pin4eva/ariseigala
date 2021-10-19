import { gql } from "@apollo/client";

export const CreateReader = gql`
	mutation ($input: createReaderInput) {
		createReader(input: $input) {
			reader {
				id
				name
			}
		}
	}
`;

export const GET_READER = gql`
	query ($id: ID!) {
		reader(id: $id) {
			id
			name
			image
		}
	}
`;

export const GET_READER_GOOGLE_ID = gql`
	query ($googleId: String) {
		readers(where: { googleId: $googleId }) {
			name
			id
			googleId
			image
		}
	}
`;
