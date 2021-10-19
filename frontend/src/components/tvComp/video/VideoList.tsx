import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import * as timeago from "timeago.js";
import { ITelevision } from "types/interface";

const VideoList = ({ video }: { video?: ITelevision }): JSX.Element => {
	return (
		<Wrapper>
			<Link href={`/tv?id=${video?.id}`}>
				<a className="text-decoration-none text-inherit">
					<div className="wrapper">
						<ReactPlayer
							width="100%"
							url={video?.videoUrl}
							light={true}
							height={160}
						/>
						<div className="text-content">
							<p className="p-0 mb-2 fw-bold fs-6">{video?.title}</p>
							<small className="p-0 fw-light fst-italic ">
								{timeago.format(video?.createdAt as Date)}
							</small>
						</div>
					</div>
				</a>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.wrapper {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
		.text-content {
			width: 100%;
		}
	}
`;

export default VideoList;
