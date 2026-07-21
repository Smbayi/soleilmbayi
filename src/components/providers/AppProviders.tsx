"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <LanguageProvider>{children}</LanguageProvider>
    </NextThemesProvider>
  );
}
