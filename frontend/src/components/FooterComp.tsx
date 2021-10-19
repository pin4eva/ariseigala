/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CategoryNavComp } from "./articles/ArticleHeaderComp";
//www.facebook.com/ariseigala/
//www.instagram.com/arise_igala/

const MagazineFooter = (): JSX.Element => {
	return (
		<footer className="py-4">
			<div className="d-flex justify-content-center">
				<div>
					<img src="/images/logo.png" alt="" className="d-block" />
					<div className="d-flex  mt-3 gap-1 justify-content-between">
						<a
							href="https://instagram.com/arise_igala"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-instagram "></i>
						</a>
						<a
							href="https://instagram.com/arise_igala"
							target="_blank"
							rel="noreferrer"
							className="link-danger"
						>
							<i className="fab fa-youtube ms-1 "></i>
						</a>
						<a
							href="https://facebook.com/ariseigala"
							target="_blank"
							rel="noreferrer"
							// className="link-danger"
						>
							<i className="fab fa-facebook ms-1 "></i>
						</a>

						{/* <i className="fab fa-twitter ms-1"></i> */}
					</div>
				</div>
			</div>
			<hr />
			<div className="py-2">
				<CategoryNavComp />
				<p className="text-center mb-3 georgia fa-2x text-uppercase">
					Arise Igala
				</p>
				<div className="container">
					<div className="text-center">
						<div className="">
							<p>All Rights Reserved © 2021 Onoja Dreams Network Limited.</p>
							<p className="text-center">
								ARISE IGALA Magazine is published by ARISE IGALA PUBLISHING
								LIMITED (RC 1822199) and ARISE IGALA Television is operated by
								ARISE IGALA BROADCASTING LIMITED (RC 1520165).
							</p>
							<p>Subsidiaries of ONOJA DREAMS NETWORK LIMITED (RC 868974)</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default MagazineFooter;
