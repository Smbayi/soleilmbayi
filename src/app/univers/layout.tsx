import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Découvrir mon univers",
  description:
    "Immersion dans l'univers de Soleil Mbayi — origine, science, culture et horizon panafricain.",
};

export default function UniverseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
