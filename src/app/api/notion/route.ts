import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email, name } = await request.json();

		// For now, just return success without saving to Notion
		// We'll implement proper database storage after deployment
		return NextResponse.json(
			{ message: "Success", success: true },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Something went wrong", success: false },
			{ status: 500 },
		);
	}
}
