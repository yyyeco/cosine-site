import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

export default function Faq() {
	return (
		<div className="flex flex-col items-center justify-center gap-6 py-10 px-4">
			<div className="flex flex-col items-center justify-center gap-2 max-w-4xl">
				<h2 className="sm:text-3xl text-2xl font-semibold text-foreground">
					Frequently Asked Questions
				</h2>
				<p className="sm:text-base text-sm text-muted-foreground text-center">
					Find answers to common questions.
				</p>
			</div>
			<div className="w-full max-w-4xl">
				<Accordion
					type="single"
					collapsible
					className="w-full flex flex-col gap-4"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="hover:no-underline">
							How do I get an invite?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							You can get an invite by joining the waitlist. We'll reach back out to you and tell you if you're accepted or not.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="hover:no-underline">
							Is this for windows?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							No this is for Mac, Windows is not supported.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="hover:no-underline">
							How often does this update?
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							Cosine updates about a day after each update.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
