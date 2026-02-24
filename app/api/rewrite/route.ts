import { rewrite } from "@/lib/content-rewriter";
import { NextResponse } from "next/server";

const MAX_INPUT_WORDS = 10000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const raw = typeof body.text === "string" ? body.text.trim() : "";
    if (!raw) return NextResponse.json({ error: "Missing or empty text" }, { status: 400 });

    const wordCount = raw.split(/\s+/).length;
    if (wordCount > MAX_INPUT_WORDS) {
      return NextResponse.json(
        { error: `Text exceeds ${MAX_INPUT_WORDS.toLocaleString()} words` },
        { status: 400 }
      );
    }

    const result = await rewrite(raw);
    return NextResponse.json(result);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Rewrite failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
