import Link from "next/link";
import React, { useState } from "react";
import Logo from "../logo/Logo";

const TvHeader = (): JSX.Element => {
	const [minMenu, setMinMenu] = useState(false);
	return (
		<div>
			<header className="tv-header">
				<div className="container tv-header-main">
					<nav className="navbar tv-header-nav" role="navigation">
						<Link href="/">
							<a className="navbar-brand p-0" aria-label="logo">
								<Logo />
							</a>
						</Link>
						<button
							className="btn btn-dark d-block d-md-none text-white border border-white"
							role="button"
							aria-label="open menu"
							onClick={() => setMinMenu(!minMenu)}
						>
							{minMenu ? (
								<i className="fas fa-times animate__animated animate__rotateIn"></i>
							) : (
								<i
									className="fas fa-bars animate__animated animate__flipInX"
									aria-hidden="true"
								></i>
							)}
						</button>
						<div className="d-none tv-header-nav-items d-md-flex">
							<ul className="d-flex  ">
								{navlist.map((item, i) => (
									<li className="nav-item" key={i}>
										<Link href={item.link}>
											<a className="nav-link text-inherit">{item.name}</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
				{minMenu && (
					<div className="min-item bg-light animate__animated animate__zoomIn">
						<ul className="container d-md-none  p-0">
							{navlist.map((item, i) => (
								<li className="nav-item text-center" key={i}>
									<Link href={item.link}>
										<a className="nav-link d-inline-block px-3 py-2">
											{item.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</header>
		</div>
	);
};

export default TvHeader;

const navlist = [
	{ name: "Article", link: "/" },
	{ name: "Magazine", link: "/magazine" },
];
