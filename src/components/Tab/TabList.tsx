import React, { forwardRef, type HTMLAttributes, type ReactElement } from "react";

import { classNames } from "../../utils";
import type { TabItemProps } from "./TabItem";
import { Tab } from "@headlessui/react";

type ItemNode = ({ className, ...props }: TabItemProps) => React.JSX.Element;
export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<ItemNode> | ReactElement<ItemNode>[];
}
export const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabContainer(
  { children, className, ...props },
  ref
) {
  const classes = classNames(className, "nav nav-tabs auto");
  return (
    <Tab.List className={classes} ref={ref} {...props}>
      {children}
    </Tab.List>
  );
});
