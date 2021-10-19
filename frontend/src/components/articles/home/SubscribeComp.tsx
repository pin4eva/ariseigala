import React from "react";
import styled from "styled-components";

const SubscribeComp = (): JSX.Element => {
	return (
		<Wrapper>
			<div className="text-white">
				<div className="container">
					<div className="inner mx-auto py-md-0 py-4 ">
						<p className="text-center mb-5 big-head fw-700 text-uppercase">
							Subscribe to our newsletter
						</p>
						{/* <p className="p-0 my-4 text-center fw-light">
							Sit vestibulum facilisis at at egestas malesuada dignissim. Eget
							in semper et ultrices leo scelerisque dui diam. Ut posuere
							sagittis volutpat pretium egestas aliquet. Nibh condimentum mattis
							pharetra fringilla et. At varius nibh et congue turpis justo, at
							sed. Magna euismod ultricies quam integer egestas orci. Luctus
							eget vivamus libero tellus ipsum nec amet. Dolor vel orci, a
							fermentum at amet. Sit velit ipsum amet fringilla integer quis est
							lorem. Lacus nisi, faucibus elit vitae eu netus. Aliquam etiam
							egestas urna arcu.
						</p> */}
						<form className=" d-md-flex  w-75 mx-auto">
							<div className="col-md-7">
								<input
									type="email"
									className="form-control py-3 bg-dark text-light border"
									placeholder="example@gmail.com"
								/>
							</div>
							<div className="d-grid">
								<button
									type="submit"
									className="ms-md-3 btn btn-light mb-3 px-5 my-md-0 my-2 "
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SubscribeComp;

const Wrapper = styled.div`
	background: #000;
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
