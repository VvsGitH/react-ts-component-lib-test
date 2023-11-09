import React, { HTMLAttributes } from "react";
import { forwardRef } from "react";

import { classNames } from "../../utils";

export interface HeaderNavbarProps extends HTMLAttributes<HTMLElement> {
  /** Da utilizzare per indicare che all'interno dell'HeaderNavbar verrà utilizzato un Megamenu */
  megamenu?: boolean;
  /** Parametro per il controllo responsive del componente secondo Bootstrap Italia. */
  expand?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
}

/**
 * Componente che si occupa di renderizzare la NavBar all'interno dell'header,
 * Se HeaderWrapper possiede il flag sticky abilitato, rimarrà fissata in alto.
 */
export const HeaderNavBar = forwardRef<HTMLElement, HeaderNavbarProps>(function HeaderNavBar(
  { expand, megamenu, children, className, ...props },
  ref
) {
  const navClasses = classNames(
    className,
    "navbar",
    { "has-megamenu": megamenu },
    {
      "navbar-expand": expand === true,
      "navbar-expand-sm": expand === "sm",
      "navbar-expand-md": expand === "md",
      "navbar-expand-lg": expand === "lg",
      "navbar-expand-xl": expand === "xl",
      "navbar-expand-xxl": expand === "xxl"
    }
  );
  return (
    <div className="it-header-navbar-wrapper" {...props} id="header-nav-wrapper">
      <div className="container">
        <nav className={navClasses} ref={ref}>
          {children}
        </nav>
      </div>
    </div>
  );
});
