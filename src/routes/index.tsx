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
    <>
    <div
      className="flex min-h-[85vh] items-center justify-center px-6"
      style={checkerboard}
    >
      <h1 className="bg-white px-10 py-6 text-center text-5xl font-bold tracking-tight text-[#e3222a] shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:text-7xl">
        GitHub 24-10
      </h1>
    </div>
    <footer className="bg-slate-900 px-6 py-8 text-sm leading-7 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row">
        <div>
          <p className="text-lg font-bold">ProLa GmbH</p>
          <p>Verantwortlicher Anbieter: ProLa GmbH</p>
          <p>Geschäftsführer und inhaltlich verantwortlich: Jörg Lauffer</p>
          <p>Bismarckstraße 40 · 72764 Reutlingen</p>
          <p>Telefon: <a className="underline" href="tel:+4971213878700">07121 387 87 – 00</a></p>
          <p>E-Mail: <a className="underline" href="mailto:info@prola.de">info@prola.de</a></p>
        </div>
        <div className="flex flex-col gap-2">
          <a className="underline" href="https://www.prola.de/impressum/">Impressum / vollständige Anbieterangaben ↗</a>
          <a className="underline" href="https://prola.de/">ProLa Hauptseite ↗</a>
        </div>
      </div>
    </footer>
  </>
  );
}
