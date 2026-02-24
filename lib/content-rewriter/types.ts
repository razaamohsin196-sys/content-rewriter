export type RewriterOptions = {
  referenceText?: string;
  toneDesc?: string;
  openingExample?: string;
};

export type RewriteResult = {
  text: string;
  inputWords: number;
  outputWords: number;
};
