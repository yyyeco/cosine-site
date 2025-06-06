import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB || "waitlist";

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}
	const client = new MongoClient(uri);
	await client.connect();
	const db = client.db(dbName);
	cachedClient = client;
	cachedDb = db;
	return { client, db };
}

export async function POST(request: Request) {
	const body = await request.json();
	try {
		const { db } = await connectToDatabase();
		const collection = db.collection("waitlist");
		const doc = {
			email: body?.email,
			name: body?.name,
			createdAt: new Date(),
		};
		await collection.insertOne(doc);
		return new Response(
			JSON.stringify({
				message: "Email added to waitlist",
				success: true,
			}),
			{ status: 200 },
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				error: "Failed to add email to waitlist",
				success: false,
			}),
			{ status: 500 },
		);
	}
}
