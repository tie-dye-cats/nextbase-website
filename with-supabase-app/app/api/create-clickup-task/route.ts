import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    console.log("API: Received ClickUp data:", { name, email, message });

    const CLICKUP_LIST_ID = process.env.CLICKUP_LIST_ID;
    const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN;

    if (!CLICKUP_LIST_ID || !CLICKUP_API_TOKEN) {
      console.error("API: Missing ClickUp env vars");
      return NextResponse.json({ error: "Missing ClickUp config" }, { status: 500 });
    }

    const res = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
      method: "POST",
      headers: {
        "Authorization": CLICKUP_API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `Lead: ${name} (${email})`,
        description: message,
        status: "to do",
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("API: ClickUp Error:", data);
      return NextResponse.json({ error: data.err || "Failed to create ClickUp task" }, { status: 500 });
    }

    console.log("API: ClickUp Task Created:", data.id || data);

    return NextResponse.json({ task: data });
  } catch (err: any) {
    console.error("API: Uncaught error:", err);
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 });
  }
}
