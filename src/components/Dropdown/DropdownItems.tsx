import { Menu } from "@headlessui/react";
import React, { type HTMLAttributes, type ReactNode } from "react";

import { classNames } from "../../utils";

export interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  heading?: string;
  children: ReactNode | ((rProps: { open: boolean }) => ReactNode);
  placement: "top" | "right" | "left" | "bottom";
  fullWidth?: boolean;
}

/**
 * Componente che renderizza il Menu del Dropdown
 */
export function DropdownItems({ children, placement, fullWidth, heading, className, ...props }: DropdownMenuProps) {
  const classes = classNames(className, "dropdown-menu show", {
    [`dropdown-${placement}`]: placement != null,
    "full-width": fullWidth
  });

  return (
    <Menu.Items as="div" className={classes} {...props}>
      {(rProps) => (
        <div className="link-list-wrapper">
          {heading && <div className="link-list-heading">{heading}</div>}
          <ul className="link-list">{typeof children === "function" ? children(rProps) : children}</ul>
        </div>
      )}
    </Menu.Items>
  );
}
