import { createFileRoute } from "@tanstack/react-router";

import type { CSSProperties } from "react";

const heartSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92"><path fill="#e3222a" d="M46 77 C39 70 13 52 13 33 C13 14 36 11 46 27 C56 11 79 14 79 33 C79 52 53 70 46 77 Z"/></svg>'
);

const checkerboard: CSSProperties = {
  backgroundColor: "#ffffff",
  backgroundImage: `url("data:image/svg+xml,${heartSvg}")`,
  backgroundSize: "92px 92px",
  backgroundRepeat: "repeat",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GitHub 24-10" },
      {
        name: "description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf weißer Fläche mit roten Herzchen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "GitHub 24-10" },
      {
        property: "og:description",
        content: "Statische Seite mit dem Hinweis GitHub 24-10 auf weißer Fläche mit roten Herzchen.",
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
      <h1 className="bg-white px-10 py-6 text-center text-5xl font-bold tracking-tight text-[#e3222a] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-7xl">
        GitHub 24-10
      </h1>
    </div>
  );
}
