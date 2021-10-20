import { useMutation } from "@apollo/client";
import { CREATE_MAILING_LIST } from "apollo/queries/articleQuery";
import Cookies from "js-cookie";
import React, { Fragment, useEffect, useState } from "react";
import { Loader } from "rsuite";
import styled from "styled-components";

const SubscribeComp = (): JSX.Element => {
	const isSubscribed = Cookies.get("subscribed");
	const [email, setEmail] = useState("");
	const [createMail, { loading }] = useMutation(CREATE_MAILING_LIST);
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createMail({ variables: { email } });
			setEmail("");
			Cookies.set("subscribed", "true");
			setSubscribed(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const data = Boolean(isSubscribed);
		if (data) {
			setSubscribed(data);
		}
	}, [subscribed, isSubscribed]);
	return (
		<Wrapper>
			<div className="text-white">
				<div className="container">
					<div className="inner mx-auto py-md-0 py-4 ">
						<p className="text-center mb-5 big-head fw-700 text-uppercase">
							Subscribe to our newsletter
						</p>

						<form className=" d-md-flex  w-75 mx-auto" onSubmit={handleSubmit}>
							<div className="col-md-7">
								<input
									required
									type="email"
									className="form-control py-3 bg-dark text-light border"
									placeholder="example@gmail.com"
									onChange={(e) => setEmail(e.target.value)}
									disabled={subscribed}
									value={email}
								/>
							</div>
							<div className="d-grid">
								<button
									disabled={loading || subscribed}
									className="ms-md-3 btn btn-light mb-3 px-5 my-md-0 my-2 "
								>
									{loading ? (
										<Loader />
									) : subscribed ? (
										<Fragment>
											Subscribed <i className="fas fa-check text-success"></i>
										</Fragment>
									) : (
										"Subscribed"
									)}
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
