/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { Modal } from "rsuite";
import Link from "next/link";

const ChoiceModalComp = ({
	show,
	onHide,
}: {
	show: boolean;
	onHide(): void;
}): JSX.Element => {
	return (
		<Modal show={show} onHide={onHide} full>
			<Modal.Header>
				<div className="text-center">
					<img src="/images/logo.png" alt="" />
				</div>
			</Modal.Header>
			<Modal.Body>
				<Wrapper className="container">
					<div className="d-flex justify-content-between">
						<div className="tv">
							<div className="text-center container">
								<h3>ARISE IGALA TELEVISION</h3>
								<img className="my-5" src="/images/television 1.png" alt="" />
								<p>
									To inspire a generational change that will give birth to a new
									breed of Igala people. Linking Igala People to the world and
									the world to the Igala People thereby changing perspectives
									and bringing out the beauty in our people.
								</p>
								<Link href="/tv">
									<a className="btn btn-dark mt-3">Continue</a>
								</Link>
							</div>
						</div>
						<div className="ruler"></div>
						<div className="mag">
							<div className="text-center container">
								<h3>ARISE IGALA MAGAZINE</h3>
								<img className="my-5" src="/images/magazine 1.png" alt="" />
								<p>
									To remain the most informative, educative, entertaining,
									challenging, inspiring and authentic source of information on
									the past and current issues of Igala Kingdom and her people
									via media activities even as we bring home local, national and
									international issues.
								</p>
								<Link href="/magazine">
									<a className="btn btn-dark mt-3">Continue</a>
								</Link>
							</div>
						</div>
					</div>
				</Wrapper>
			</Modal.Body>
		</Modal>
	);
};

export default ChoiceModalComp;

const Wrapper = styled.div`
	.ruler {
		width: 0.51px;
		height: auto;
		background-color: darkgray;
	}
`;
