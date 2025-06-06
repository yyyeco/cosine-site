import Image from "next/image";

export default function Powered() {
	const images = [
		{
			src: "https://i.imgur.com/pW63FGz.png",
			alt: "Technology 1",
		},
		{
			src: "https://avatars.githubusercontent.com/u/105406570?s=280&v=4",
			alt: "Technology 2",
		},
		{
			src: "https://discord.do/wp-content/uploads/2024/05/Alchemy-Community.jpg",
			alt: "Technology 3",
		},
		{
			src: "https://dbl-discord.usercontent.prism.gg/icons/906426036772818954/f5fdb4eed4f854271163709f43a5309b.png?size=256",
			alt: "Technology 4",
		},
		{
			src: "https://i.imgur.com/ybEjAKQ.png",
			alt: "Technology 5",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center gap-12 py-12">
			<div className="flex flex-col items-center justify-center">
				<h3 className="text-foreground text-2xl font-semibold">Supports All The Scripts You Love</h3>
			</div>
			<div className="flex items-center sm:gap-12 gap-6">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative group cursor-pointer"
					>
						<div className="relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-blue-500/25">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transition-all duration-300 ease-in-out group-hover:brightness-110 group-hover:contrast-110"
								sizes="64px"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
