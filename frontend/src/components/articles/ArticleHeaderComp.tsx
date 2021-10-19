/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { CategoriesAtom } from "atoms/CategoryAtoms";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ICategory } from "types/interface";

const ArticleHeader = (): JSX.Element => {
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
	}, [category]);

	return (
		<header className="">
			<div className="container">
				<nav className="navbar border-bottom  border-3" role="navigation">
					<Link href="/">
						<a className="navbar-brand p-0" aria-label="logo">
							<img src="/images/logo.png" alt="" />
						</a>
					</Link>
					<button
						className="btn d-block d-md-none  border border-white"
						onClick={() => setMinMenu((c) => !c)}
						role="button"
						aria-label="open menu"
					>
						<i className="fas fa-bars" aria-hidden="true"></i>
					</button>
					<div className="d-none d-md-flex">
						<List className="d-flex">
							{navitems.map((item, i) => (
								<li className="nav-item" key={i}>
									<Link href={item.link}>
										<a className="nav-link text-inherit">{item.txt}</a>
									</Link>
								</li>
							))}
						</List>
					</div>
				</nav>
				{minMenu && (
					<div className="d-block d-md-none">
						<ul className="navbar-nav">
							{navitems.map((item, i) => (
								<li className="nav-item text-center fs-5" key={i}>
									<Link href={item.link}>
										<a className="nav-link text-inherit">{item.txt}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
				<div className=" py-2 d-block d-lg-flex container mc  mx-auto">
					<CategoryNavComp />
				</div>
			</div>
		</header>
	);
};

export default ArticleHeader;

export const CategoryNavComp = (): JSX.Element => {
	const { query } = useRouter();
	const category = query?.category;
	const categories = useRecoilValue<ICategory[]>(CategoriesAtom);
	const [toggle, setToggle] = useState(false);

	return (
		<div className="nav-bg-color">
			<div
				className="col c-pointer d-md-none bg-gradient"
				onClick={() => setToggle(!toggle)}
			>
				<i className="fas d-block fa-caret-square-down fs-2 "></i>
			</div>
			<CategoryNav className="navbar justify-content-center">
				<ul className="nav d-flex flex-wrap flex-column flex-sm-row">
					{categories?.map((cat, i) => (
						<li
							className={`nav-item mb-2 mb-lg-0 ${
								toggle ? "" : "d-none"
							} d-md-flex`}
							key={i}
						>
							<Link href={`/articles/${cat.slug}`}>
								<a
									className={`nav-link link-dark ${
										category === cat.slug ? "active" : ""
									}`}
									id={cat.slug}
								>
									{cat.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</CategoryNav>
		</div>
	);
};

const navitems = [
	{ txt: "Television", link: "/tv" },
	{ txt: "Magazine", link: "/magazine" },
	// { txt: "About Us", link: "/about" },
	// { txt: "Contact", link: "/contact" },
];

const List = styled.ul`
	list-style: none;
`;

const CategoryNav = styled.nav`
	.nav-link {
		text-transform: capitalize;
		&.active {
			font-weight: bold;
			transition: 0.5s ease-in-out;
		}
	}
`;
