import { apollo } from "apollo";
import { IUser } from "types/interface";
import { GET_READER, GET_READER_GOOGLE_ID } from "./queries/readerQuery";

export const getUserById = async (id: string): Promise<IUser | null> => {
	try {
		const { data } = await apollo.query({
			query: GET_READER,
			variables: { id },
		});
		return data?.reader;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const getUserByGoogleId = async (
	googleId: string,
): Promise<IUser | null> => {
	try {
		const { data } = await apollo.query({
			query: GET_READER_GOOGLE_ID,
			variables: { googleId },
		});
		const user = data?.readers?.[0] as IUser;

		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};
