import { Menu } from "@headlessui/react";
import React, { Fragment, forwardRef } from "react";

import { classNames } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Icon } from "../Icon";

/**
 * Componente che renderizza il Button per aprire il Dropdown
 */
export const DropdownButton = forwardRef<HTMLButtonElement, ButtonProps>(function DropdownButton(
  { children, className, ...props },
  ref
) {
  return (
    <Menu.Button as={Fragment}>
      {({ open }) => (
        <Button className={classNames(className, "dropdown-toggle btn-dropdown", { show: open })} {...props} ref={ref}>
          {children}
          <Icon icon="it-expand" size="sm" color={props.variant} className="icon-expand" />
        </Button>
      )}
    </Menu.Button>
  );
});
