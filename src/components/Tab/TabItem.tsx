import { Tab } from "@headlessui/react";
import React, { Fragment, type ReactNode } from "react";

import { classNames } from "../../utils";

interface TabItemProps {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export const TabItem = ({ disabled, children, className }: TabItemProps) => {
  return (
    <li className="nav-item">
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={classNames(className, "nav-link", {
              disabled: disabled,
              active: selected
            })}
            disabled={disabled}
          >
            {children}
          </button>
        )}
      </Tab>
    </li>
  );
};
