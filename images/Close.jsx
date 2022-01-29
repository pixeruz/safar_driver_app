import React from "react";
import * as Svg from "react-native-svg";

export default function CloseIcon() {
	return (
		<Svg.Svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Svg.Path d="M15 15L1 1" stroke="#73787D" strokeWidth="1.6" />
			<Svg.Path d="M1 15L15 1" stroke="#73787D" strokeWidth="1.6" />
		</Svg.Svg>
	);
}
