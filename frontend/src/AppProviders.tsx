import { type ReactNode } from "react";
import { ThemeProvider } from "./glob-components/dark-theme/ThemeProvider";
import { GradientHeaderProvider } from "./glob-components/header-gradient/GradientHeaderProvider";
import SubSectionProvider from "./glob-components/sub-section-nav/SubSectionProvider";
import SorterProvider from "./glob-components/sort/SorterProvider";

import { ChartProvider } from "./glob-components/charts/ChartProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <GradientHeaderProvider>
        <SubSectionProvider>
          <ChartProvider>
            <SorterProvider>{children}</SorterProvider>
          </ChartProvider>
        </SubSectionProvider>
      </GradientHeaderProvider>
    </ThemeProvider>
  );
}
