import React from "react";
import * as Svg from "react-native-svg";

export default function RightArrow() {
	return (
		<Svg.Svg
			width="9"
			height="16"
			viewBox="0 0 9 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Svg.Path
				d="M1 1L8 8L1 15"
				stroke="#9BA1A7"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg.Svg>
	);
}
