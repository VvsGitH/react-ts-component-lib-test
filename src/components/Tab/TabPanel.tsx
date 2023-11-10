import React, { forwardRef, type HTMLAttributes } from "react";

import { Tab } from "@headlessui/react";

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel({ children, ...props }, ref) {
  return (
    <Tab.Panel ref={ref} {...props}>
      {children}
    </Tab.Panel>
  );
});
