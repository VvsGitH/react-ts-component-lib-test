import { Menu } from "@headlessui/react";
import React, { forwardRef, type HTMLAttributes } from "react";

import { classNames } from "../../utils";

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  placement: "top" | "right" | "left" | "bottom";
}

/**
 * Componente che renderizza il Menu del Dropdown
 */
export const DropdownItems = forwardRef<HTMLDivElement, DropdownMenuProps>(function DropdownItems(
  { children, className, placement, ...props },
  ref
) {
  const classes = classNames(className, "dropdown-menu show dropdown-menu-focus", {
    "dropdown-top": placement === "top",
    "dropdown-left": placement === "left",
    "dropdown-right": placement === "right",
    "dropdown-bottom": placement === "bottom"
  });
  return (
    <Menu.Items className={classes} {...props} ref={ref}>
      <div className="link-list-wrapper link-list-wrapper-focus">
        <ul className="link-list link-list-focus">{children}</ul>
      </div>
    </Menu.Items>
  );
});
