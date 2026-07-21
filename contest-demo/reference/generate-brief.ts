import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";

import { transcriptBriefSchema } from "./transcript-brief";

const MAX_TRANSCRIPT_CHARACTERS = 30_000;

type GenerateBriefOptions = {
  apiKey: string;
  title: string;
  transcript: string;
  model?: string;
};

/**
 * Public contest reference for the model call used by ListenUp. The private
 * server route adds session checks, member/demo rate limits, and protected
 * error handling before this function is reached.
 */
export async function generateTranscriptBrief({
  apiKey,
  title,
  transcript,
  model = "gpt-5.6-terra",
}: GenerateBriefOptions) {
  const cleanTranscript = transcript.trim();

  if (!cleanTranscript || cleanTranscript.length > MAX_TRANSCRIPT_CHARACTERS) {
    throw new Error("Transcript must contain 1 to 30,000 characters.");
  }

  const openai = new OpenAI({ apiKey });
  const response = await openai.responses.parse({
    model,
    store: false,
    instructions:
      "Produce a faithful transcript brief. Do not invent facts, owners, dates, or quotes. Use Unassigned or Not specified when the transcript does not supply an answer.",
    input: `Transcript title: ${title}\n\nTranscript:\n${cleanTranscript}`,
    text: {
      format: zodTextFormat(transcriptBriefSchema, "transcript_brief"),
    },
  });

  if (!response.output_parsed) {
    throw new Error("OpenAI returned no structured Transcript Brief.");
  }

  return response.output_parsed;
}
