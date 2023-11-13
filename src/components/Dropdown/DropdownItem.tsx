import { Menu } from "@headlessui/react";
import React, { forwardRef, type HTMLAttributes } from "react";

export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {}

/**
 * Componente che renderizza l'Item del menu del Dropdown
 */
export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(function DropdownItem(
  { children, ...props },
  ref
) {
  return (
    <Menu.Item as="li">
      <button className="dropdown-item list-item" {...props} ref={ref}>
        {children}
      </button>
    </Menu.Item>
  );
});
