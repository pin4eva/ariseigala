/* eslint-disable @next/next/no-img-element */
import { useMutation } from "@apollo/client";
import { getUserByGoogleId } from "apollo/actions";
import { CREATE_COMMENT } from "apollo/queries/commentQuery";
import { CreateReader } from "apollo/queries/readerQuery";
import { CommentsAtom } from "atoms/CommentsAtom";
import { UserAtom } from "atoms/UserAtom";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import GoogleLogin, {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Loader } from "rsuite";
import { ITelevision } from "types/interface";

const AddComment = ({ video }: { video: ITelevision }): JSX.Element => {
	const [createReader] = useMutation(CreateReader);
	const [user, setUser] = useRecoilState(UserAtom);
	const [content, setContent] = useState("");
	const [createComment, { loading }] = useMutation(CREATE_COMMENT);
	const setComments = useSetRecoilState(CommentsAtom);

	const addComment = async () => {
		const payload = { content, user: user?.id, television: video?.id };
		if (!user?.id) return alert("Invalid User");
		try {
			const { data } = await createComment({
				variables: {
					input: { data: payload },
				},
			});
			setComments((comments) => [data?.createComment?.comment, ...comments]);
			setContent("");
		} catch (error) {
			console.log(error);
		}
	};

	const googleLogin = async (
		e: GoogleLoginResponse | GoogleLoginResponseOffline,
	) => {
		const { googleId, profileObj } = e as GoogleLoginResponse;
		const payload = {
			name: profileObj.name,
			image: profileObj.imageUrl,
			googleId,
			email: profileObj.email,
		};

		const user = await getUserByGoogleId(googleId);
		if (user) {
			setUser(user);
			return Cookies.set("user_id", user?.id);
		}

		try {
			const { data } = await createReader({
				variables: { input: { data: payload } },
			});
			Cookies.set("user_id", data?.createReader?.id);
			setUser(data?.createReader);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="add-comment">
			<div className="d-flex gap-3">
				{user && <img src={user?.image} alt="avatar" className="avatar" />}
				<textarea
					onChange={(e) => setContent(e.target.value)}
					cols={30}
					rows={10}
					value={content}
				></textarea>
			</div>
			<div className="text-end mt-2">
				{user ? (
					<button
						className="btn btn-dark"
						onClick={addComment}
						disabled={loading}
					>
						{loading ? <Loader content="processing..." /> : "Add Comment"}
					</button>
				) : (
					<GoogleLogin
						clientId={process.env.GOOGLE_CLIENT_ID || ""}
						buttonText="Login"
						onSuccess={googleLogin}
						onFailure={() => console.log("failed")}
						cookiePolicy={"single_host_origin"}
						render={(props) => (
							<button
								className="btn btn-light"
								onClick={props.onClick}
								// disabled={props.disabled}
							>
								<i className="fab fa-google me-3"></i> Login comment
							</button>
						)}
					/>
				)}
			</div>
		</div>
	);
};

export default AddComment;
