import React from "react";
import "../CSS/Title.css";
export default function Title(props) {
	return (
		<div id="title">
			<h1>{props.Title}</h1>
			<svg
				width="104"
				height="4"
				viewBox="0 0 104 4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1.99805 1.72192L101.998 1.97068"
					stroke="#406AFF"
					stroke-width="3"
					stroke-linecap="round"
				/>
			</svg>
			<p>
				{props.FirstP} <br />
				{props.SecondP}
			</p>
		</div>
	);
}
