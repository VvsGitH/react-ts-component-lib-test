import { Menu } from "@headlessui/react";
import React, { type HTMLAttributes } from "react";

export interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Componente che renderizza il Container del Dropdown
 */
export const DropdownContainer = ({ children, ...props }: DropdownContainerProps) => {
  return (
    <Menu as="div" className="dropdown">
      {children}
    </Menu>
  );
};
