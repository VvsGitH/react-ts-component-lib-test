import React, { type ForwardRefExoticComponent, type ReactElement, type RefAttributes } from "react";
import { forwardRef, type HTMLAttributes } from "react";

import { classNames } from "../../utils";

type ItemNode = ForwardRefExoticComponent<DropdownItemProps & RefAttributes<HTMLLIElement>>; // Tipo dell'item del Dropdown
type MenuNode = ForwardRefExoticComponent<DropdownMenuProps & RefAttributes<HTMLDivElement>>; // Tipo del menu deò Dropdown
type ButtonNode = ForwardRefExoticComponent<DropdownButtonProps & RefAttributes<HTMLButtonElement>>; // Tipo del button del Dropdown

interface DropdownContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<MenuNode | ButtonNode> | ReactElement<MenuNode | ButtonNode>[]; // Il container può avere solo Menu e/o Button
}

/**
 * Componente che renderizza il Container del Dropdown
 */
const Container = ({ children, className, ...props }: DropdownContainerProps) => {
  const classes = classNames(className, "dropdown");
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

interface DropdownButtonProps extends HTMLAttributes<HTMLButtonElement> {}

/**
 * Componente che renderizza il Button per aprire il Dropdown
 */
const Button = ({ children, className, ...props }: DropdownButtonProps) => {
  const classes = classNames(className, "dropdown-toggle btn");
  return (
    <button className={classes} type="button" data-bs-toggle="dropdown" aria-expanded="false" {...props}>
      {children}
    </button>
  );
};
export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<ItemNode> | ReactElement<ItemNode>[]; // Il Menu può contenere solo uno o più Item
}

/**
 * Componente che renderizza il Menu del Dropdown
 */
const Menu = forwardRef<HTMLDivElement, DropdownMenuProps>(function Menu({ children, className, ...props }, ref) {
  const classes = classNames(className, "dropdown-menu");
  return (
    <div ref={ref} className={classes} {...props}>
      <div className="link-list-wrapper">
        <ul className="link-list">{children}</ul>
      </div>
    </div>
  );
});

export interface DropdownItemProps extends HTMLAttributes<HTMLLIElement> {}

/**
 * Componente che renderizza l'Item del menu del Dropdown
 */
const Item = forwardRef<HTMLLIElement, DropdownItemProps>(function Item({ children, className, ...props }, ref) {
  const classes = classNames(className, "dropdown-item list-item");

  return (
    <li ref={ref} className={classes} {...props}>
      {children}
    </li>
  );
});

export const Dropdown = {
  Container,
  Button,
  Menu,
  Item
};
