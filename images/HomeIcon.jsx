import React from "react";
import * as Svg from "react-native-svg";

export default function HomeIcon({ active }) {
	if (active) {
		return (
			<Svg.Svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Svg.Path
					d="M10.8484 0.751597C10.6234 0.526632 10.3182 0.400253 10 0.400253C9.68185 0.400253 9.37668 0.526632 9.15165 0.751597L0.751649 9.1516C0.533059 9.37792 0.412106 9.68104 0.41484 9.99568C0.417574 10.3103 0.543777 10.6113 0.766267 10.8338C0.988757 11.0563 1.28973 11.1825 1.60437 11.1852C1.919 11.1879 2.22213 11.067 2.44845 10.8484L2.80005 10.4968V18.4C2.80005 18.7183 2.92648 19.0235 3.15152 19.2485C3.37656 19.4736 3.68179 19.6 4.00005 19.6H6.40005C6.71831 19.6 7.02353 19.4736 7.24858 19.2485C7.47362 19.0235 7.60005 18.7183 7.60005 18.4V16C7.60005 15.6817 7.72648 15.3765 7.95152 15.1515C8.17656 14.9264 8.48179 14.8 8.80005 14.8H11.2C11.5183 14.8 11.8235 14.9264 12.0486 15.1515C12.2736 15.3765 12.4 15.6817 12.4 16V18.4C12.4 18.7183 12.5265 19.0235 12.7515 19.2485C12.9766 19.4736 13.2818 19.6 13.6 19.6H16C16.3183 19.6 16.6235 19.4736 16.8486 19.2485C17.0736 19.0235 17.2 18.7183 17.2 18.4V10.4968L17.5516 10.8484C17.778 11.067 18.0811 11.1879 18.3957 11.1852C18.7104 11.1825 19.0113 11.0563 19.2338 10.8338C19.4563 10.6113 19.5825 10.3103 19.5853 9.99568C19.588 9.68104 19.467 9.37792 19.2484 9.1516L10.8484 0.751597Z"
					fill="#771E99"
				/>
			</Svg.Svg>
		);
	}

	return (
		<Svg.Svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Svg.Path
				d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H7M17 8L19 10M17 8V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H13M7 19C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18V14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13H11C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V18C12 18.2652 12.1054 18.5196 12.2929 18.7071C12.4804 18.8946 12.7348 19 13 19M7 19H13"
				stroke="#9BA1A7"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg.Svg>
	);
}
