import { useState, type ReactNode } from "react";
import {
  GradientContext,
  type GradientHeaderProps,
} from "./GradientUserContext";
import GradientHeaderComponent from "./GradientHeader"; // renamed to avoid clash

type Props = { children: ReactNode };

export function GradientHeaderProvider({ children }: Props) {
  const [headerProps, setHeaderProps] = useState<GradientHeaderProps>({
    fromColor: "from-indigo-500/20",
    toColor: "to-pink-500/40",
    title: "Welcome!",
    subTitle: "Here's your dashboard",
    sideButtons: [
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Click me
      </button>,
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Click me
      </button>,
    ],
    cards: [
      {
        icon: ["fas", "bolt"],
        color: ["bg-blue-500", "text-blue-500"],
        cardTitle: "Active Clients",
        cardValue: "123",
        cardAdditionalInfo: "All monitored",
      },
      {
        icon: ["far", "camera"],
        color: ["bg-green-500", "text-green-500"],
        cardTitle: "Total Cameras",
        cardValue: "182",
        cardAdditionalInfo: "91.6% online",
      },
      {
        icon: ["fas", "arrow-trend-up"],
        color: ["bg-purple-500", "text-purple-500"],
        cardTitle: "System Uptime",
        cardValue: "99.2%",
        cardAdditionalInfo: "Last 30 days",
      },
      {
        icon: ["fas", "triangle-exclamation"],
        color: ["bg-orange-500", "text-orange-500"],
        cardTitle: "Active Alerts",
        cardValue: "3",
        cardAdditionalInfo: "Requires attention",
      },
    ],
  });

  const GradientHeader = () => <GradientHeaderComponent {...headerProps} />;

  return (
    <GradientContext.Provider
      value={{ headerProps, setHeaderProps, GradientHeader }}
    >
      {children}
    </GradientContext.Provider>
  );
}
