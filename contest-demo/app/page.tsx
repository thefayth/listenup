import type { Metadata } from "next";

import { ListenUpShowcase } from "./listenup-showcase";

export const metadata: Metadata = {
  title: "ListenUp | OpenAI Build Week 2026",
  description:
    "A private-first transcript studio that turns messy media into editable captions and structured GPT-5.6 briefs.",
  openGraph: {
    title: "ListenUp | Transcripts into decisions",
    description:
      "Clean media, editable captions, searchable history, and structured transcript briefs.",
    images: ["/assets/transcript-brief.png"],
  },
};

export default function Home() {
  return <ListenUpShowcase />;
}

