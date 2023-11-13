import { Tab } from "@headlessui/react";
import React, { type HTMLAttributes } from "react";

import { classNames } from "../../utils";

export interface TabListProps extends HTMLAttributes<HTMLUListElement> {
  fullWidth?: boolean;
  largeIcons?: boolean;
  iconsAndText?: boolean;
}

export function TabList({ children, className, fullWidth, largeIcons, iconsAndText, ...props }: TabListProps) {
  const classes = classNames(className, "nav nav-tabs", {
    auto: fullWidth,
    "nav-tabs-icon-lg": largeIcons,
    "nav-tabs-icon-text": iconsAndText
  });
  return (
    <Tab.List as="ul" className={classes} {...props}>
      {children}
    </Tab.List>
  );
}
