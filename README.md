# content-rewriter

Rewrite and humanize text so it reads like natural human writing. Uses an LLM to adjust tone, sentence variety, and word choice so output tends to score higher as "human" on tools like Originality.ai, GPTZero, and Turnitin — while keeping your meaning and structure.

## Features

- **Paste & rewrite** — Paste text, hit rewrite, get humanized output.
- **Reference-style rewriting** — Optionally follows a reference text for voice and rhythm.
- **Word limit** — Up to 10,000 words per request.
- **Stats** — Input/output word counts and timing after each run.

## Setup

```bash
npm install
cp .env.example .env
```

Add at least one API key to `.env`:

- **Groq** (recommended, fast, free tier): set `GROQ_API_KEY=your_key`
- **OpenAI**: set `OPENAI_API_KEY=your_key` and optionally `HUMANIZE_MODEL=gpt-4o-mini`

Then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), paste text, and click **Rewrite**.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start dev server         |
| `npm run build` | Build for production   |
| `npm run start` | Run production build   |
| `npm run lint` | Run Next.js lint        |

## Tech

- **Next.js 14** (App Router)
- **React** — writer UI and API route
- **LLM** — Groq or OpenAI for rewriting

## License

Private.
