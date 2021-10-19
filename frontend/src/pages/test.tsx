import ChoiceModalComp from "components/ChoiceModal";
import React from "react";
import { useState } from "react";

const Test = (): JSX.Element => {
	const [show, setShow] = useState(true);
	return (
		<div>
			<ChoiceModalComp show={show} onHide={() => setShow(false)} />
		</div>
	);
};

export default Test;
