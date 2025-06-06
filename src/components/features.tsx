"use client";

import { motion } from "motion/react";

interface Feature {
	title: string;
	description: string;
	icon: string;
}

export default function Features() {
	const features: Feature[] = [
		{
			title: "Fast",
			description: "Execute your scripts at blazing speeds.",
			icon: "lni-bolt",
		},
		{
			title: "All-In-One",
			description: "Feature packed with everything you need",
			icon: "lni-brain",
		},
		{
			title: "Scripthub",
			description: "Features a great Rscripts script hub that features all the scripts you need.",
			icon: "lni-search",
		},
		{
			title: "Networking/Processs",
			description: "Has a built in connection manager that shows your roblox connection and more.",
			icon: "lni-cloud",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
						Features
					</h2>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group relative"
						>
							<div className="relative p-8 rounded-2xl border border-border bg-card hover:bg-accent/50 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-primary/10">
								{/* Background gradient effect */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								
								{/* Content */}
								<div className="relative z-10">
									<div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
										<i className={`${feature.icon} text-4xl text-primary group-hover:text-primary/80 transition-colors duration-300`}></i>
									</div>
									<h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
										{feature.description}
									</p>
								</div>

								{/* Hover border effect */}
								<div className="absolute inset-0 rounded-2xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
