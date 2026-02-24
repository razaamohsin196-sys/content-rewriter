import type { CSSProperties } from "react";

export const styles = {
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "var(--bg)",
  } satisfies CSSProperties,

  hero: {
    padding: "clamp(2rem, 6vw, 3rem) clamp(1.5rem, 5vw, 2.5rem)",
    background: "linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg) 100%)",
    borderBottom: "1px solid var(--border)",
  } satisfies CSSProperties,

  badge: {
    display: "inline-block",
    padding: "0.35rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    color: "var(--accent)",
    background: "rgba(249, 115, 22, 0.12)",
    border: "1px solid rgba(249, 115, 22, 0.3)",
    borderRadius: "var(--radius-full)",
    marginBottom: "1rem",
  } satisfies CSSProperties,

  header: {
    maxWidth: 640,
    margin: 0,
  } satisfies CSSProperties,

  h1: {
    fontFamily: "var(--font-sans)",
    fontSize: "clamp(1.875rem, 5vw, 2.5rem)",
    fontWeight: 700,
    margin: 0,
    color: "var(--text)",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  } satisfies CSSProperties,

  sub: {
    margin: "1rem 0 0",
    color: "var(--text-muted)",
    fontSize: "1rem",
    lineHeight: 1.6,
  } satisfies CSSProperties,

  content: {
    flex: 1,
    maxWidth: 1100,
    width: "100%",
    margin: "0 auto",
    padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 5vw, 2.5rem)",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  } satisfies CSSProperties,

  editorSection: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    gap: 0,
    alignItems: "stretch",
    minHeight: 420,
  } satisfies CSSProperties,

  card: {
    background: "var(--bg-card)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--border)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "var(--shadow)",
  } satisfies CSSProperties,

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.875rem 1.25rem",
    borderBottom: "1px solid var(--border)",
    background: "rgba(255,255,255,0.02)",
  } satisfies CSSProperties,

  cardTitle: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: 600,
    color: "var(--text-muted)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  } satisfies CSSProperties,

  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "var(--accent)",
  } satisfies CSSProperties,

  dotMuted: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "var(--text-muted)",
  } satisfies CSSProperties,

  stats: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.75rem",
    fontFamily: "var(--font-mono)",
    color: "var(--text-muted)",
  } satisfies CSSProperties,

  textarea: {
    flex: 1,
    width: "100%",
    minHeight: 280,
    padding: "1.25rem",
    border: "none",
    fontSize: "0.9375rem",
    lineHeight: 1.7,
    color: "var(--text)",
    background: "transparent",
    outline: "none",
    resize: "none",
  } satisfies CSSProperties,

  textareaReadOnly: {
    flex: 1,
    width: "100%",
    minHeight: 280,
    padding: "1.25rem",
    border: "none",
    fontSize: "0.9375rem",
    lineHeight: 1.7,
    color: "var(--text-muted)",
    background: "transparent",
    outline: "none",
    resize: "none",
  } satisfies CSSProperties,

  connector: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    gap: "0.5rem",
  } satisfies CSSProperties,

  arrow: {
    width: 24,
    height: 24,
    border: "2px solid var(--border)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    fontSize: "0.75rem",
    fontWeight: 700,
  } satisfies CSSProperties,

  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  } satisfies CSSProperties,

  loadingBar: {
    width: "100%",
    maxWidth: 320,
    height: 4,
    borderRadius: "var(--radius-full)",
    background: "var(--border)",
    overflow: "hidden",
  } satisfies CSSProperties,

  loadingBarFill: {
    height: "100%",
    width: "40%",
    background: "var(--accent)",
    borderRadius: "var(--radius-full)",
    animation: "shimmer 1.2s ease-in-out infinite",
  } satisfies CSSProperties,

  error: {
    margin: 0,
    padding: "1rem 1.25rem",
    background: "var(--error-bg)",
    color: "var(--error-text)",
    borderRadius: "var(--radius-md)",
    fontSize: "0.9rem",
    border: "1px solid rgba(248, 113, 113, 0.2)",
  } satisfies CSSProperties,

  footer: {
    marginTop: "auto",
    padding: "1.5rem clamp(1.5rem, 5vw, 2.5rem)",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-elevated)",
  } satisfies CSSProperties,

  footerRow: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
    fontSize: "0.8125rem",
    color: "var(--text-muted)",
  } satisfies CSSProperties,

  footerItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
  } satisfies CSSProperties,

  footerDot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: "var(--success)",
  } satisfies CSSProperties,
} as const;

export const wordCountStyle = (overLimit: boolean): CSSProperties => ({
  fontSize: "0.75rem",
  fontFamily: "var(--font-mono)",
  color: overLimit ? "var(--error-text)" : "var(--text-muted)",
});
