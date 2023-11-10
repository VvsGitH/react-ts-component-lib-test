import React, { type HTMLAttributes } from "react";

import { Tab } from "@headlessui/react";

export interface TabPanelsProps extends HTMLAttributes<HTMLDivElement> {}
export const TabPanels = ({ children, ...props }: TabPanelsProps) => {
  return <Tab.Panels {...props}>{children}</Tab.Panels>;
};
