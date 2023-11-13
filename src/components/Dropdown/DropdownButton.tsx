import { Menu } from "@headlessui/react";
import React, { Fragment } from "react";

import { classNames } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Icon } from "../Icon";

export interface DropdownButtonProps extends ButtonProps {}

/**
 * Componente che renderizza il Button per aprire il Dropdown
 */
export const DropdownButton = ({ children, className, ...props }: DropdownButtonProps) => {
  return (
    <Menu.Button as={Fragment}>
      {({ open }) => (
        <Button
          className={classNames(className, "dropdown-toggle btn-dropdown btn-dropdown-focus", { show: open })}
          {...props}
        >
          {children}
          <Icon icon="it-expand" className="icon-sm icon-primary icon-expand" />
        </Button>
      )}
    </Menu.Button>
  );
};
