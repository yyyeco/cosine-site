import { Resend } from "resend";
import { NextResponse } from "next/server";
import WelcomeTemplate from "~/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { email, name } = await request.json();

		// Using Resend's test domain during development
		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev", // This is a pre-verified address for testing
			to: [email],
			subject: "Welcome to Cosine Waitlist",
			react: WelcomeTemplate({ userFirstname: name }),
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json(
				{ error: error.message },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Server error:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
