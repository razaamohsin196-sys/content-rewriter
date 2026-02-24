"use client";

import { useState, useCallback, useMemo } from "react";
import { styles, wordCountStyle } from "./writer.styles";

const MAX_INPUT_WORDS = 10000;

export default function WriterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{
    inputWords: number;
    outputWords: number;
    ms: number;
  } | null>(null);

  const inputWords = useMemo(
    () => (input.trim() ? input.trim().split(/\s+/).length : 0),
    [input]
  );
  const overLimit = inputWords > MAX_INPUT_WORDS;
  const displayError = overLimit
    ? `Input exceeds ${MAX_INPUT_WORDS.toLocaleString()} words.`
    : error;

  const runRewrite = useCallback(async () => {
    const text = input.trim();
    if (!text) {
      setError("Enter or paste text to rewrite.");
      return;
    }
    if (inputWords > MAX_INPUT_WORDS) {
      setError(`Input exceeds ${MAX_INPUT_WORDS.toLocaleString()} words.`);
      return;
    }
    setError("");
    setOutput("");
    setStats(null);
    setLoading(true);
    const start = Date.now();
    try {
      const res = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Request failed");
        return;
      }
      setOutput(data.text);
      setStats({
        inputWords: data.inputWords,
        outputWords: data.outputWords,
        ms: Date.now() - start,
      });
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }, [input, inputWords]);

  return (
    <main id="top" style={styles.main}>
      <header style={styles.hero}>
        <div style={styles.header}>
          <span style={styles.badge}>Rewrite</span>
          <h1 style={styles.h1}>AI Content Humanizer</h1>
          <p style={styles.sub}>
            Paste AI or stiff text and get natural, human-style copy — energetic, direct, and detector-friendly.
          </p>
        </div>
      </header>

      <div style={styles.content}>
        <section className="editor-section" style={styles.editorSection}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>
                <span style={styles.dot} />
                Input
              </span>
              {inputWords > 0 && (
                <span style={wordCountStyle(overLimit)}>
                  {inputWords.toLocaleString()} / {MAX_INPUT_WORDS.toLocaleString()}
                </span>
              )}
            </div>
            <textarea
              aria-label="Text to humanize"
              placeholder="Paste or type your text here…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={styles.textarea}
              rows={12}
              disabled={loading}
            />
          </div>

          <div className="connector" style={styles.connector}>
            <span style={styles.arrow} aria-hidden>→</span>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <span style={styles.cardTitle}>
                <span style={styles.dotMuted} />
                Output
              </span>
              {stats && (
                <span style={styles.stats}>
                  {stats.outputWords.toLocaleString()} words · {(stats.ms / 1000).toFixed(1)}s
                </span>
              )}
            </div>
            <textarea
              aria-label="Humanized output"
              readOnly
              placeholder={loading ? "Rewriting…" : "Result appears here"}
              value={output}
              style={styles.textareaReadOnly}
              rows={12}
            />
          </div>
        </section>

        {displayError && (
          <p style={styles.error} role="alert">
            {displayError}
          </p>
        )}

        <div style={styles.actions}>
          {loading && (
            <div style={styles.loadingBar}>
              <div style={styles.loadingBarFill} />
            </div>
          )}
          <button
            type="button"
            className="btn-primary"
            onClick={runRewrite}
            disabled={loading || !input.trim() || overLimit}
          >
            {loading ? "Rewriting…" : "Rewrite"}
          </button>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerRow}>
          <span style={styles.footerItem}>
            <span style={styles.footerDot} />
            Human-style output
          </span>
          <span style={styles.footerItem}>
            <span style={styles.footerDot} />
            No data stored
          </span>
        </div>
      </footer>
    </main>
  );
}
