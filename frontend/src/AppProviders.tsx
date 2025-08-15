import { type ReactNode } from "react";
import { ThemeProvider } from "./glob-components/dark-theme/ThemeProvider";
import { GradientHeaderProvider } from "./glob-components/header-gradient/GradientHeaderProvider";

import { LineProvider } from "./glob-components/charts/Line/LineProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <LineProvider>
      <GradientHeaderProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GradientHeaderProvider>
    </LineProvider>
  );
}
