import { z } from "zod";

export const transcriptBriefSchema = z.object({
  summary: z.string().min(1).max(1200),
  keyThemes: z.array(z.string().min(1).max(180)).max(6),
  actionItems: z
    .array(
      z.object({
        task: z.string().min(1).max(240),
        owner: z.string().min(1).max(100),
        timing: z.string().min(1).max(100),
      }),
    )
    .max(8),
  importantQuotes: z
    .array(
      z.object({
        quote: z.string().min(1).max(360),
        attribution: z.string().min(1).max(100),
      }),
    )
    .max(5),
  chapters: z
    .array(
      z.object({
        title: z.string().min(1).max(120),
        description: z.string().min(1).max(220),
      }),
    )
    .max(6),
  followUpQuestions: z.array(z.string().min(1).max(220)).max(6),
  plainLanguage: z.string().min(1).max(1200),
});

export type TranscriptBrief = z.infer<typeof transcriptBriefSchema>;

