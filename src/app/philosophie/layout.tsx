import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Code, la Culture et l'Humanité",
  description:
    "Philosophie de Soleil Mbayi : la technologie comme moyen de préserver les cultures, d'élever les peuples et de construire un avenir souverain pour l'Afrique.",
};

export default function PhilosophyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
