/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { ITelevision } from "types/interface";
import AddComment from "./AddComment";
import * as timeago from "timeago.js";
import { useRecoilValue } from "recoil";
import { CommentsAtom } from "atoms/CommentsAtom";

const TvComment = ({ video }: { video: ITelevision }): JSX.Element => {
	const comments = useRecoilValue(CommentsAtom);
	return (
		<Wrapper>
			<hr />
			<p>{comments?.length} Comments</p>
			<hr />
			<AddComment video={video} />
			{comments?.map((comment, i) => (
				<div className="comment mt-4" key={i}>
					<div className="comment-inner ">
						<div className="comment-image ">
							<img src={comment?.user?.image} alt="" />
						</div>
						<div className="comment-text">
							<div className="comment-text-header">
								<p className="fw-bold">{comment?.user?.name}</p>
								<time className="text-muted">
									{timeago.format(comment?.createdAt)}
								</time>
							</div>
							<p>{comment?.content}</p>
						</div>
					</div>
				</div>
			))}
		</Wrapper>
	);
};

export default TvComment;

const Wrapper = styled.div`
	.add-comment {
		textarea {
			width: 100%;
			border-radius: 1rem;
			padding: 1rem;
		}
	}
	.comment {
		margin-bottom: 1rem;

		&-inner {
			display: flex;
			gap: 1rem;
		}
		&-image {
			img {
				width: 4rem;
				height: 4rem;
				border-radius: 100%;
			}
		}
		&-text {
			flex: 1;
		}
		&-text-header {
			display: flex;
			justify-content: space-between;
		}
	}
`;
