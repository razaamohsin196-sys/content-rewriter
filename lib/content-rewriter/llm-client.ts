const OPENROUTER_BASE = "https://openrouter.ai/api/v1";
const MAX_OUTPUT_TOKENS = 4096;
const REASONING_EFFORT = process.env.HUMANIZE_REASONING_EFFORT || "none";
const DEFAULT_MODEL = "x-ai/grok-4-fast";

export const DEFAULT_REFERENCE_TEXT = `Honestly when people talk about smartphones, they always ask the question which is better: iPhone or Android? Android phones have improved dramatically over the years and they have come a long way from their early versions. However, the iPhone remains in a strong position and many people entrust it over other phones. It's not simply about making calls, but rather feeling as part of a larger ecosystem working together. Features such as AirDrop, iCloud, Handoff, and Universal Clipboard make it easy to switch from one device to another without having to think. You can start writing on your iPhone and end up on your macbook - and it just works - such convenience. The iPhone, iPad, Mac, and Apple Watch connection is smooth and natural and you never struggle. Android phones have similar features, but their experience is not always as consistent or seamless, depending on the device.`;

export function wordCount(s: string): number {
  const t = s.trim();
  return t ? t.split(/\s+/).length : 0;
}

export async function callLlm(systemPrompt: string, userText: string): Promise<string> {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error("Missing OPENROUTER_API_KEY");
  const model = process.env.HUMANIZE_MODEL || DEFAULT_MODEL;
  const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userText },
      ],
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.85,
      reasoning: { effort: REASONING_EFFORT },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter API error: ${res.status} ${err}`);
  }
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const content = data.choices?.[0]?.message?.content ?? "";
  return content;
}
