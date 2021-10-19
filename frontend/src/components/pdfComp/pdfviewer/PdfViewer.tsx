/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import { Flipbook } from "../pdfFlip/Flipbook";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ file }: { file: string }): JSX.Element {
	const [numPages, setNumPages] = useState(1);
	// const [pageNumber, setPageNumber] = useState(1);
	// const [content_list, setContentList] = useState(false);
	const [renderstate, setRenderState] = useState(false);
	const [rect, setRect] = useState({
		width: 0,
		height: 0,
	});
	// Functions
	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
	};
	// const numContents = () => {
	// 	const num_of_content = [];
	// 	if (numPages) {
	// 		for (let index = 1; index <= numPages; index++) {
	// 			num_of_content.push(index);
	// 		}
	// 	}
	// 	return num_of_content;
	// };
	const numOfPages = () => {
		const num_of_pages = [];
		if (numPages) {
			for (let index = 1; index <= numPages; index++) {
				num_of_pages.push(index);
			}
		}
		return num_of_pages;
	};

	useEffect(() => {
		const getRect = () => {
			const elems = document.querySelector(".demoPage");
			const elem_width = elems?.getBoundingClientRect().width;
			const elem_height = elems?.getBoundingClientRect().height;
			setRect({
				...rect,
				width: Number(elem_width),
				height: Number(elem_height),
			});
		};
		getRect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PDFWrapper>
			<div className="pdf-section py-3">
				<div className="container my-4">
					<nav className="navbar">
						<Link href="/magazine">
							<a className=" text-light text-decoration-none ">
								<i className="fas fa-arrow-left me-2"></i>{" "}
								<span className="fw-bold">Back</span>
							</a>
						</Link>
						<Link href="/magazine">
							<a>
								<img src="/images/logo.png" alt="Logo" />
							</a>
						</Link>
						<div></div>
					</nav>
				</div>
				<div className="pdf-wrapper overflow-auto">
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						renderMode="canvas"
						className="pdf-main py-3"
					>
						<Flipbook
							width={rect.width ? rect.width : 600}
							height={rect.height ? rect.height : 845}
							render_state={renderstate}
						>
							{numOfPages().map((e, i) => (
								<div className="demoPage me-sm-2" key={i}>
									<Page
										pageNumber={e}
										className="w-100 get-rect"
										// onLoadSuccess={getRect}
										onRenderSuccess={() => setRenderState(true)}
										scale={1}
										renderTextLayer={false}
									/>
								</div>
							))}
						</Flipbook>
					</Document>

					<div></div>
				</div>
			</div>
		</PDFWrapper>
	);
}

const PDFWrapper = styled.div`
	.cover-dark {
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		position: fixed;
		z-index: 2;
		background: #000000e8;
		overflow: hidden;
		.cover-light {
			width: 80%;
			max-width: 40rem;
			background: white;
			height: 100%;
			position: absolute;
			z-index: 3;
		}
	}
	.pdf-section {
		.pdf-wrapper {
			.pdf-main {
				min-height: fit-content;
				box-sizing: border-box;
				overflow: auto;
			}
		}
	}
`;
