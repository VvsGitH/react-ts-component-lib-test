import type { HTMLAttributes } from "react";
import React, { Fragment } from "react";

import { classNames } from "../../utils";
import { Tab } from "@headlessui/react";
export interface TabItemProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}
export const TabItem = ({ disabled, children, className, ...props }: TabItemProps) => {
  const classes = classNames(className, "nav-item nav-link tab-item-custom", { disabled: disabled });

  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button className={classes + (selected ? " active" : "")} disabled={disabled} {...props}>
          {children}
        </button>
      )}
    </Tab>
  );
};
