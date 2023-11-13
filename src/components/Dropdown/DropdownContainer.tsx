import { Menu } from "@headlessui/react";
import React, { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { classNames } from "../../utils";

interface DropdownContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: ReactNode | ((rProps: { open: boolean; close: () => void }) => ReactNode);
}

/**
 * Componente che renderizza il Container del Dropdown
 */
export const DropdownContainer = forwardRef<HTMLDivElement, DropdownContainerProps>(function DropdownContainer(
  { children, ...props },
  ref
) {
  return (
    <Menu as="div" {...props} className={classNames("dropdown", props.className)} ref={ref}>
      {(rProps) => <>{typeof children === "function" ? children(rProps) : children}</>}
    </Menu>
  );
});
