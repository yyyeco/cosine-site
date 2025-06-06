import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email, name } = await request.json();

		// For now, just return success without sending email
		// We'll implement proper email sending after deployment
		return NextResponse.json(
			{ message: "Success" },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 },
		);
	}
}
