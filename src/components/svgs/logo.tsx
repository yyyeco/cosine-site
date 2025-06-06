import type { SVGProps } from "react";

export default function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<div className="group cursor-pointer">
			<svg
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="logo"
				role="img"
				className="transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-lime-400/50"
				{...props}
			>
				{/* Green background with rounded corners */}
				<rect
					width="48"
					height="48"
					rx="14"
					fill="#DFFF1A"
					className="transition-all duration-300 ease-in-out group-hover:fill-lime-300"
				/>

				{/* Black summation symbol (∑) */}
				<text
					x="24"
					y="32"
					textAnchor="middle"
					fontSize="24"
					fontWeight="bold"
					fill="black"
					fontFamily="serif"
					className="transition-all duration-300 ease-in-out group-hover:fill-gray-800"
				>
					∑
				</text>
			</svg>
		</div>
	);
}
