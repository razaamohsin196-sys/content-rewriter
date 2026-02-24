import { createSystemPrompt } from "./system-prompt";
import { callLlm, wordCount, DEFAULT_REFERENCE_TEXT } from "./llm-client";
import type { RewriterOptions, RewriteResult } from "./types";

export async function rewrite(
  input: string,
  options?: RewriterOptions
): Promise<RewriteResult> {
  const inputWords = wordCount(input);
  const trimmed = input.trim();
  if (!trimmed) return { text: "", inputWords: 0, outputWords: 0 };

  const referenceText = options?.referenceText ?? DEFAULT_REFERENCE_TEXT;
  const systemPrompt = createSystemPrompt(
    referenceText,
    options?.toneDesc,
    options?.openingExample
  );
  const text = await callLlm(systemPrompt, trimmed);
  return { text, inputWords, outputWords: wordCount(text) };
}
