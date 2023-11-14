import { Menu } from "@headlessui/react";
import React, { Fragment, forwardRef } from "react";

import { classNames } from "../../utils";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";
import { Icon } from "../Icon";

interface DropdownButtonProps extends ButtonProps {
  placement?: "top" | "right" | "left"; // orientamento dell'icona
}

/**
 * Componente che renderizza il Button per aprire il Dropdown
 */
export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(function DropdownButton(
  { children, placement, className, ...props },
  ref
) {
  return (
    <Menu.Button as={Fragment}>
      {({ open }) => (
        <Button className={classNames(className, "dropdown-toggle btn-dropdown", { show: open })} {...props} ref={ref}>
          {placement === "left" ? (
            <>
              <Icon
                icon="it-expand"
                size="sm"
                color={props.variant}
                className={classNames("icon-expand", { [`icon-${placement}`]: placement != null })}
              />
              {children}
            </>
          ) : (
            <>
              {children}
              <Icon
                icon="it-expand"
                size="sm"
                color={props.variant}
                className={classNames("icon-expand", { [`icon-${placement}`]: placement != null })}
              />
            </>
          )}
        </Button>
      )}
    </Menu.Button>
  );
});
