/* eslint-disable @next/next/no-img-element */
import { apollo } from "apollo";
import { GET_MAGAZINES } from "apollo/queries/magazineQuery";
import gql from "graphql-tag";
import MagazineLayout from "Layout/MagazineLayout";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";
import Tilt from "react-tilt";
import styled from "styled-components";
import { IMagazine } from "types/interface";

const MagazineHome: NextPage<{
	magazines: IMagazine[] | null;
	banner: string;
}> = ({
	magazines,
	banner,
}: {
	magazines: IMagazine[] | null;
	banner: string;
}): JSX.Element => {
	const options = {
		scale: 1,
		reverse: true,
	};

	return (
		<Fragment>
			<Head>
				<title>Arise Igala | Magazine </title>
				<meta
					name="description"
					content="Best selling indeginous magazine for the Igala people"
				/>
			</Head>
			<MagazineLayout>
				<Wrapper>
					<main>
						<section className="bg-dark first-wrapper py-2 text-white">
							<div className="container mb-2 first-main d-flex flex-column-reverse flex-md-row align-items-md-center">
								<div className="left">
									<h1 className="fw-bold mb-3 fs-1 georgia text-uppercase">
										ARISE IGALA Magazine
									</h1>
									<p className="poppins fs-5 mb-4 p-0 ">
										ARISE IGALA Magazine is a Socio-Cultural and Lifestyle
										Publication Designed to Celebrate, Inspire and Challenge the
										People into Positive Ventures for the Benefit of Mankind. It
										is published by ARISE IGALA PUBLISHING LIMITED (RC 1822199),
										a subsidiary of ONOJA DREAMS NETWORK LIMITED (RC 868974)
									</p>
									<a
										href="#issues"
										className="btn poppins border text-white border-1 px-5 fs-5 py-3"
									>
										Read Issues
									</a>
								</div>
								<div className="right">
									<Tilt {...options}>
										<img src={banner || ""} alt="" />
									</Tilt>
								</div>
							</div>
							<div className="container">
								<span className="d-block mb-2 text-center ">More issues</span>
								<i className="d-block text-center fas fa-chevron-down fa-2x fw-bold"></i>
							</div>
						</section>
						<section className="py-5 " id="issues">
							<div className="container magazine-list">
								{magazines?.map((mag, i) => (
									<div key={i}>
										{/* <h1 className="mb-5 fw-bold">{ma}</h1> */}
										<div className="single">
											<SingleMagazine key={i} magazine={mag} />
										</div>
									</div>
								))}
							</div>
						</section>
					</main>
				</Wrapper>
			</MagazineLayout>
		</Fragment>
	);
};

export default MagazineHome;

const Wrapper = styled.div`
	.magazine-list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}
`;

const MAG_BANNER = gql`
	{
		magazineBanner {
			cover {
				url
			}
		}
	}
`;

MagazineHome.getInitialProps = async (): Promise<{
	magazines: IMagazine[] | null;
	banner: string;
}> => {
	try {
		const { data } = await apollo.query({
			query: GET_MAGAZINES,
		});

		const { data: magBanner } = await apollo.query({
			query: MAG_BANNER,
		});
		console.log(magBanner);

		const magazines: IMagazine[] = data?.magazines;
		const banner = magBanner?.magazineBanner?.cover.url;

		return {
			magazines,
			banner,
		};
	} catch (error) {
		console.log(error);
		return {
			magazines: null,
			banner: "",
		};
	}
};

const SingleMagazine = ({ magazine }: { magazine: IMagazine }) => {
	return (
		<Link as={`/magazine/${magazine?.id}`} href={`/magazine/[id]`}>
			<a
				className="text-decoration-none text-inherit"
				data-aos="zoom-in"
				data-aos-duration="1000"
				data-aos-easing="linear"
			>
				<div className="card  border-0 h-100">
					<img
						src={magazine?.cover?.url}
						alt={magazine?.title}
						className="card-img"
					/>
					<div className="card-body">
						{/* Janury-Dec, 2001 */}
						<p className="text-center fw-bold">{magazine?.edition}</p>
						<p className="card-title mb-2 fw-bold text-center fs-4 text-uppercase">
							Issue {magazine?.issue}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};
