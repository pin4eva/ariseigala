/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Loader } from "rsuite";

const LoaderComp = (): JSX.Element => {
	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: "100vh" }}
		>
			<div>
				<Loader content="Getting ready..." />
				{/* <p className="text-center"></p> */}
			</div>
		</div>
	);
};

export default LoaderComp;
