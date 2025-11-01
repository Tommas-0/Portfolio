import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curci Tommas — Développeur Web Full‑Stack",
  description: "Portfolio de Curci Tommas — développeur web full‑stack spécialisé en Next.js et React.",
  authors: [{ name: "Curci Tommas" }],
  openGraph: {
    title: "Curci Tommas — Développeur Web Full‑Stack",
    description: "Portfolio de Curci Tommas — développeur web full‑stack spécialisé en Next.js et React.",
    url: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-white dark:bg-gray-900">
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
