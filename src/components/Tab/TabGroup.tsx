import { type ReactNode } from "react";
import React from "react";

import { Tab } from "@headlessui/react";

export interface TabGroupProps {
  children: ReactNode;
  defaultIndex?: number | undefined;
  onChange?: ((index: number) => void) | undefined;
  selectedIndex?: number | undefined;
  vertical?: boolean | undefined;
  manual?: boolean | undefined;
}

export const TabGroup = ({ children, ...props }: TabGroupProps) => {
  return <Tab.Group {...props}>{children}</Tab.Group>;
};
