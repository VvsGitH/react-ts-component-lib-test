import { Menu } from "@headlessui/react";
import React, { Fragment, type ButtonHTMLAttributes, type ReactNode, type AnchorHTMLAttributes } from "react";

import { classNames } from "../../utils";

interface DropdownItemRenderProps {
  active: boolean;
  disabled?: boolean;
  classes?: string;
  close: () => void;
}

export interface DropdownItemProps {
  children: ReactNode | ((rProps: DropdownItemRenderProps) => ReactNode);
  disabled?: boolean;
  large?: boolean;
}

/**
 * Componente che renderizza un elemento generico del menu del Dropdown
 * @param props
 * @returns JSX
 */
export function DropdownItem({ children, disabled, large }: DropdownItemProps) {
  return (
    <Menu.Item as={Fragment} disabled={disabled}>
      {(rProps) => (
        <li>
          {typeof children === "function"
            ? children({
                ...rProps,
                classes: classNames("dropdown-item list-item", {
                  disabled: rProps.disabled,
                  large: large
                })
              })
            : children}
        </li>
      )}
    </Menu.Item>
  );
}

/**
 * Componente più specifico per renderizzare un elemento di tipo button
 * @param props ButtonHTMLAttributes
 * @returns JSX
 */
export function DropdownBtnItem({
  disabled,
  large,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Omit<DropdownItemProps, "children">) {
  return (
    <DropdownItem disabled={disabled} large={large}>
      {({ classes, close }) => (
        <button
          {...props}
          disabled={disabled}
          className={classNames(props.className, classes)}
          onClick={(e) => {
            close();
            props.onClick?.(e);
          }}
        >
          {props.children}
        </button>
      )}
    </DropdownItem>
  );
}

/**
 * Componente più specifico per renderizzare un elemento di tipo anchor
 * @param props AnchorHTMLAttributes
 * @returns JSX
 */
export function DropdownAnchorItem({
  disabled,
  large,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & Omit<DropdownItemProps, "children">) {
  return (
    <DropdownItem disabled={disabled} large={large}>
      {({ classes }) => (
        <a {...props} aria-disabled={disabled} className={classNames(props.className, classes)}>
          <span>{props.children}</span>
        </a>
      )}
    </DropdownItem>
  );
}
