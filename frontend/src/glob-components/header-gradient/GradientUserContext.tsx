import { createContext, type JSX, type ReactNode } from "react";

export type GradientHeaderProps = {
  fromColor: string;
  toColor: string;
  title: string;
  subTitle: string;
  sideButtons: [ReactNode] | [ReactNode, ReactNode];
  cards: [
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string;
      cardAdditionalInfo?: string;
    }
  ];
};

export type GradientContextType = {
  headerProps: GradientHeaderProps;
  setHeaderProps: (props: GradientHeaderProps) => void;
  GradientHeader: () => JSX.Element;
};

export const GradientContext = createContext<GradientContextType | null>(null);
