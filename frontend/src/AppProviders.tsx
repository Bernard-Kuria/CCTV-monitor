import { type ReactNode } from "react";
import { ThemeProvider } from "./glob-components/dark-theme/ThemeProvider";
import { GradientHeaderProvider } from "./glob-components/header-gradient/GradientHeaderProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <GradientHeaderProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </GradientHeaderProvider>
  );
}
