import { type ReactNode } from "react";

import { ChartProvider } from "./glob-components/charts/ChartProvider";
import GlobalProvider from "./glob-components/globalProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <GlobalProvider>
      <ChartProvider>{children}</ChartProvider>
    </GlobalProvider>
  );
}
