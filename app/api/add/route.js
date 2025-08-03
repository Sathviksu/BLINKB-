import clientPromise from "@/lib/mongodb";

const headers = {
  "Access-Control-Allow-Origin": "https://blinkb-app.netlify.app",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

/**
 * Handle CORS preflight
 */
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers,
  });
}

export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("blink");
  const collection = db.collection("links");
  const body = await request.json();

  const existing = await collection.findOne({ handle: body.handle });
  if (existing) {
    return new Response(
      JSON.stringify({ success: false, message: "Handle already exists" }),
      { headers, status: 200 }
    );
  }

  const result = await collection.insertOne(body);
  return new Response(
    JSON.stringify({ success: true, message: "Link added successfully", data: result }),
    { headers, status: 200 }
  );
}
