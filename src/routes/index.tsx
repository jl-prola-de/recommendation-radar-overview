import { createFileRoute } from "@tanstack/react-router";

const TILE = 92;

import type { CSSProperties } from "react";

const checkerboard: CSSProperties = {
  backgroundColor: "#ffd900",
  backgroundImage: "linear-gradient(90deg, transparent 80px, #ffffff 80px), linear-gradient(transparent 80px, #ffffff 80px)",
  backgroundSize: `${TILE}px ${TILE}px`,
  backgroundRepeat: "repeat",
  backgroundPosition: "0 0",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GitHub 24-10" },
      {
        name: "description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf weißer Fläche mit gelben Quadraten.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "GitHub 24-10" },
      {
        property: "og:description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf weißer Fläche mit gelben Quadraten.",
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
      <h1 className="bg-white px-10 py-6 text-center text-5xl font-bold tracking-tight text-[#e5b900] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-7xl">
        GitHub 24-10
      </h1>
    </div>
  );
}
