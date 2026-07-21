"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

const transcript = [
  {
    time: "00:00",
    speaker: "Maya",
    text: "Our goal is to publish the pilot on Thursday. The transcript needs to be accurate enough for captions and useful enough for the launch team.",
  },
  {
    time: "00:11",
    speaker: "Jordan",
    text: "I can finish the audio cleanup by Tuesday afternoon. I also want a short summary and chapter titles.",
  },
  {
    time: "00:23",
    speaker: "Maya",
    text: "Let us keep the first release focused: one polished episode, accessible captions, and a clear feedback path.",
  },
  {
    time: "00:36",
    speaker: "Jordan",
    text: "The main risk is review time. Priya should check names and technical terms before Wednesday at noon.",
  },
];

const actions = [
  ["Finish audio cleanup", "Jordan", "Tuesday afternoon"],
  ["Review names and technical terms", "Priya", "Wednesday at noon"],
  ["Complete the publish checklist", "Maya", "Before Thursday"],
];

const gallery = [
  {
    src: "/assets/studio-console.png",
    title: "Studio Console",
    note: "Upload, direct URL, captions, account, and history in one workspace.",
  },
  {
    src: "/assets/transcript-brief.png",
    title: "Transcript Brief",
    note: "Summary, themes, actions, quotes, chapters, and follow-up questions.",
  },
];

export function ListenUpShowcase() {
  const [demoState, setDemoState] = useState<"idle" | "loading" | "ready">(
    "idle",
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const demoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function runSample(scroll = false) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDemoState("loading");

    if (scroll) {
      demoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    timerRef.current = setTimeout(() => setDemoState("ready"), 900);
  }

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="ListenUp home">
          <span className="brandMark" aria-hidden="true">L</span>
          <span>ListenUp</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#demo">Demo</a>
          <a href="#proof">Product</a>
          <a href="#video">Video</a>
          <a href="#architecture">Architecture</a>
        </nav>
        <a className="headerLink" href="https://github.com/thefayth/listenup">
          Project surface
        </a>
      </header>

      <section className="intro" id="top">
        <div className="introCopy">
          <p className="eyebrow">OpenAI Build Week 2026 / Work &amp; Productivity</p>
          <h1>ListenUp</h1>
          <p className="introLead">
            A private-first transcript studio that turns messy media into
            editable captions and structured decisions.
          </p>
          <div className="introActions">
            <button className="primaryAction" onClick={() => runSample(true)}>
              Run the judge sample
            </button>
            <a className="textAction" href="#proof">See the full workflow</a>
          </div>
        </div>
        <div className="signalBoard" aria-label="Product status">
          <div>
            <span>Input</span>
            <strong>Audio, video, captions</strong>
          </div>
          <div>
            <span>Output</span>
            <strong>TXT, SRT, VTT, brief</strong>
          </div>
          <div>
            <span>Boundary</span>
            <strong>Signed-in media processing</strong>
          </div>
          <div>
            <span>Model lane</span>
            <strong>GPT-5.6 structured output</strong>
          </div>
        </div>
      </section>

      <section className="demoBand" id="demo" ref={demoRef}>
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Interactive product sample</p>
            <h2>From transcript to decisions.</h2>
          </div>
          <p>
            This spend-capped public demo uses the project&apos;s synthetic launch
            meeting. The full app accepts owned media and pasted captions.
          </p>
        </div>

        <div className="demoTool">
          <div className="toolBar">
            <div>
              <span className="statusDot" />
              <strong>Launch planning conversation</strong>
            </div>
            <span>04 segments / 02 speakers</span>
          </div>

          <div className="demoGrid">
            <aside className="transcriptRail" aria-label="Sample transcript">
              <div className="railHeader">
                <span>Transcript</span>
                <strong>Ready</strong>
              </div>
              <div className="transcriptRows">
                {transcript.map((row) => (
                  <article key={row.time}>
                    <div>
                      <time>{row.time}</time>
                      <strong>{row.speaker}</strong>
                    </div>
                    <p>{row.text}</p>
                  </article>
                ))}
              </div>
            </aside>

            <section className="briefWorkspace" aria-live="polite">
              {demoState === "idle" ? (
                <div className="demoEmpty">
                  <div className="waveform" aria-hidden="true">
                    {[30, 56, 42, 72, 48, 64, 36].map((height, index) => (
                      <span key={index} style={{ height }} />
                    ))}
                  </div>
                  <p className="eyebrow">GPT-5.6 Transcript Brief</p>
                  <h3>Make the conversation usable.</h3>
                  <p>
                    Extract the summary, themes, assigned work, exact quotes,
                    chapters, and the questions the team still needs to answer.
                  </p>
                  <button className="primaryAction" onClick={() => runSample()}>
                    Build Transcript Brief
                  </button>
                </div>
              ) : null}

              {demoState === "loading" ? (
                <div className="demoLoading">
                  <span className="loadingLine" />
                  <span className="loadingLine short" />
                  <div className="loadingGrid">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Structuring the conversation...</strong>
                </div>
              ) : null}

              {demoState === "ready" ? (
                <div className="briefResult">
                  <div className="briefTitle">
                    <div>
                      <p className="eyebrow">GPT-5.6 Transcript Brief</p>
                      <h3>Launch the pilot on Thursday.</h3>
                    </div>
                    <span className="readyBadge">Structured</span>
                  </div>
                  <p className="summary">
                    Maya and Jordan are preparing one polished pilot episode.
                    Success means accessible captions, a reusable transcript,
                    clear chapters, and a feedback path. Review time is the key
                    risk.
                  </p>
                  <div className="briefDataGrid">
                    <section>
                      <span className="dataLabel">Key themes</span>
                      <div className="tagList">
                        <span>Focused launch</span>
                        <span>Accessibility</span>
                        <span>Review ownership</span>
                        <span>Audience feedback</span>
                      </div>
                    </section>
                    <section>
                      <span className="dataLabel">Action items</span>
                      <div className="actionRows">
                        {actions.map(([task, owner, timing]) => (
                          <article key={task}>
                            <strong>{task}</strong>
                            <span>{owner} / {timing}</span>
                          </article>
                        ))}
                      </div>
                    </section>
                    <section>
                      <span className="dataLabel">Important quote</span>
                      <blockquote>
                        “Let us keep the first release focused.”
                        <cite>Maya</cite>
                      </blockquote>
                    </section>
                    <section className="plainLanguage">
                      <span className="dataLabel">Plain language</span>
                      <p>
                        The team plans to publish one episode Thursday. Jordan
                        will clean the audio, Priya will review names, and Maya
                        will own the final checklist.
                      </p>
                    </section>
                  </div>
                  <button className="quietAction" onClick={() => setDemoState("idle")}>
                    Reset sample
                  </button>
                </div>
              ) : null}
            </section>
          </div>
        </div>
      </section>

      <section className="proofBand" id="proof">
        <div className="proofStat">
          <strong>3</strong>
          <span>intake paths</span>
        </div>
        <div className="proofStat">
          <strong>3</strong>
          <span>caption exports</span>
        </div>
        <div className="proofStat">
          <strong>25 MB</strong>
          <span>guarded upload limit</span>
        </div>
        <div className="proofStat">
          <strong>1</strong>
          <span>searchable studio</span>
        </div>
      </section>

      <section className="productSection">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Built product</p>
            <h2>The complete transcript loop.</h2>
          </div>
          <p>
            Media stays behind sign-in. Caption cleanup remains useful without
            an account. Every result can be edited, searched, saved, replayed,
            deleted, and exported.
          </p>
        </div>
        <div className="galleryGrid">
          {gallery.map((item) => (
            <figure key={item.src}>
              <img
                src={item.src}
                alt={`${item.title} browser screenshot`}
              />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="videoSection" id="video">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Two-minute product tour</p>
            <h2>See the working loop.</h2>
          </div>
          <p>
            A narrated walkthrough of the verified Studio Console, Transcript
            Brief, privacy boundaries, exports, and mobile experience.
          </p>
        </div>
        <video
          controls
          playsInline
          preload="metadata"
          poster="/assets/transcript-brief.png"
        >
          <source
            src="https://github.com/thefayth/listenup/releases/download/build-week-2026-demo/listenup-build-week-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the ListenUp demo video.
        </video>
      </section>

      <section className="architecture" id="architecture">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">Public / private boundary</p>
            <h2>Useful to judges. Protective of users.</h2>
          </div>
          <p>
            ListenUp separates the public contest surface, the authenticated
            product engine, and private data. No social scraping is part of the
            launch direction.
          </p>
        </div>
        <div className="architectureFlow" aria-label="ListenUp architecture">
          <div>
            <span>01 / Intake</span>
            <strong>Owned media or captions</strong>
            <p>File type, size, URL, and authentication checks happen first.</p>
          </div>
          <div>
            <span>02 / Studio</span>
            <strong>Editable transcript</strong>
            <p>Speaker segments, search, playback, history, and deletion.</p>
          </div>
          <div>
            <span>03 / Intelligence</span>
            <strong>Structured brief</strong>
            <p>Typed GPT-5.6 output with daily limits and a capped demo lane.</p>
          </div>
          <div>
            <span>04 / Delivery</span>
            <strong>TXT, SRT, and VTT</strong>
            <p>Portable outputs keep users in control of their work.</p>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>ListenUp</strong>
          <span>Built with Codex for OpenAI Build Week 2026.</span>
        </div>
        <div className="footerLinks">
          <a href="https://github.com/thefayth/listenup">GitHub</a>
          <a href="#demo">Run sample</a>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  );
}
