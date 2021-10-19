/* eslint-disable @next/next/no-img-element */
import { CategoryNavComp } from "components/articles/ArticleHeaderComp";
import Logo from "components/logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MagazineHeader = (): JSX.Element => {
	const [minMenu, setMinMenu] = useState(false);
	const { query } = useRouter();
	const category = query?.category;
	useEffect(() => {
		const news = document.getElementById("news");
		if (category === undefined) {
			news?.classList.add("active");
		} else if (category === "news") {
			news?.classList.add("active");
		} else {
			news?.classList.remove("active");
		}
		console.log(news);
	}, [category]);

	return (
		<header className="magazine-header bg-dark">
			<div className="container magazine-header-main">
				<nav className="navbar border-bottom border-white" role="navigation">
					<Link href="/magazine">
						<a className="navbar-brand p-0" aria-label="logo">
							<Logo />
						</a>
					</Link>
					<button
						className="btn d-block d-md-none text-white border border-white"
						onClick={() => setMinMenu((c) => !c)}
						role="button"
						aria-label="open menu"
					>
						<i className="fas fa-bars" aria-hidden="true"></i>
					</button>
					<div className="d-none d-md-flex">
						<ul className="nav ">
							{navlist.map((item, i) => (
								<li className="nav-item text-center" key={i}>
									<Link href={item?.link}>
										<a className="nav-link d-inline-block text-white px-3 py-2">
											{item?.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
				{minMenu && (
					<div className="d-block d-md-none">
						<ul className="navbar-nav">
							{navlist.map((item, i) => (
								<li className="nav-item text-center" key={i}>
									<Link href={item?.link}>
										<a className="nav-link text-white d-inline-block px-3 py-2">
											{item?.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
				<div className=" py-2 container">
					<TvNav className="">
						<CategoryNavComp />
					</TvNav>
				</div>
			</div>
		</header>
	);
};

export default MagazineHeader;

const TvNav = styled.nav`
	.nav-bg-color {
		.col {
			background-color: whitesmoke;
		}
		.nav-link {
			color: white;
			&.active {
				font-weight: bold;
				transition: 0.5s ease-in-out;
			}
		}
	}
`;

const navlist = [
	{ name: "Article", link: "/" },
	{ name: "Television", link: "/tv" },
];
