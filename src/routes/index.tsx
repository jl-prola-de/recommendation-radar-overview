import { createFileRoute } from "@tanstack/react-router";

const TILE = 72;

import type { CSSProperties } from "react";

const checkerboard: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: [
    "linear-gradient(45deg, #d81f26 25%, transparent 25%)",
    "linear-gradient(-45deg, #d81f26 25%, transparent 25%)",
    "linear-gradient(45deg, transparent 75%, #d81f26 75%)",
    "linear-gradient(-45deg, transparent 75%, #d81f26 75%)",
  ].join(", "),
  backgroundSize: `${TILE}px ${TILE}px`,
  backgroundPosition: `0 0, 0 ${TILE / 2}px, ${TILE / 2}px ${-TILE / 2}px, ${-TILE / 2}px 0`,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GitHub 24-10" },
      {
        name: "description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf rot-weiß kariertem Grund.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "GitHub 24-10" },
      {
        property: "og:description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf rot-weiß kariertem Grund.",
      },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-6"
      style={checkerboard}
    >
      <h1 className="bg-white px-10 py-6 text-center text-5xl font-bold tracking-tight text-[#d81f26] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-7xl">
        GitHub 24-10
      </h1>
    </div>
  );
}
