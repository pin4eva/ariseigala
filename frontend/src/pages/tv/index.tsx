/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { apollo } from "apollo";
import { getUserById } from "apollo/actions";
import { GET_TELEVISION, GET_TELEVISIONS } from "apollo/queries/tvQuery";
import { CommentsAtom } from "atoms/CommentsAtom";
import { UserAtom } from "atoms/UserAtom";
import LoaderComp from "components/LoaderComp";
import TvComment from "components/tvComp/comments/TvComment";
import VideoList from "components/tvComp/video/VideoList";
import dayjs from "dayjs";
import Cookies from "js-cookie";
import TvLayout from "Layout/TvLayout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ITelevision } from "types/interface";

const Tv: NextPage<{ videos: ITelevision[] | null }> = ({
	videos,
}): JSX.Element => {
	const router = useRouter();
	const { query } = router;
	const user_id = Cookies.get("user_id");
	const setUser = useSetRecoilState(UserAtom);
	const setComments = useSetRecoilState(CommentsAtom);
	const [search, setSearch] = useState("");
	const [video, setVideo] = useState<ITelevision | null>(
		videos?.[0] as ITelevision,
	);
	const { loading } = useQuery(GET_TELEVISION, {
		variables: { id: query?.id || videos?.[0]?.id },
		onCompleted: (data) => {
			setVideo(data?.television);
			setComments(data?.television?.comments);
			console.log(data?.television?.comments);
		},
		onError: (err) => console.log(err),
	});

	useEffect(() => {
		async function getUser() {
			const user = await getUserById(user_id as string);
			setUser(user as any);
		}
		getUser();
	}, []);

	if (loading) return <LoaderComp />;
	return (
		<TvLayout>
			<Tvwrapper>
				<div className="tv">
					<div className="inner container">
						<div className="tv-search form-control">
							<input
								type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="search..."
							/>
							<i className="fas fa-search text-muted"></i>
						</div>

						<div className="tv-main mt-4">
							<div className="left">
								<div className="single-play">
									<ReactPlayer
										url={video?.videoUrl}
										width="100%"
										height={450}
										controls={true}
									/>
									<p className="fw-bold my-3">{video?.title}</p>
									<p className="text-muted">
										{/* 3rd June 2021 */}
										{dayjs(video?.createdAt).format("MMM D, YYYY")}
									</p>
								</div>

								<div>
									<TvComment video={video as ITelevision} />
								</div>
							</div>
							<div className="right">
								{videos
									?.filter((v) =>
										v.title.toLowerCase().includes(search.toLowerCase()),
									)

									?.map((video, i) => (
										<VideoList key={i} video={video} />
									))}
							</div>
						</div>
					</div>
				</div>
			</Tvwrapper>
		</TvLayout>
	);
};

export default Tv;

const Tvwrapper = styled.div`
	min-height: 100vh;

	.inner {
		.tv-search {
			margin: 2rem;
			display: flex;
			align-items: center;
			border-radius: 3rem;
			width: 100%;
			max-width: 768px;
			margin: auto;
			padding: 0.5rem 1rem;
			input {
				all: unset;
				border: 0;
				width: 100%;
			}
		}
	}
	.tv-main {
		@media screen and (min-width: 768px) {
			display: flex;
			gap: 1rem;
		}
		.left {
			width: 100%;
		}
		.right {
			@media screen and (min-width: 768px) {
				width: 40%;
			}
		}
	}
`;

Tv.getInitialProps = async (): Promise<{
	videos: ITelevision[] | null;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_TELEVISIONS,
		});
		const videos: ITelevision[] = await data?.televisions;
		return {
			videos,
		};
	} catch (error) {
		console.log(error);
		return {
			videos: null,
		};
	}
};
