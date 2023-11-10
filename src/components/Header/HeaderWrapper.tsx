import { forwardRef, type HTMLAttributes } from "react";
import React from "react";

import { classNames } from "../../utils";

export interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow?: boolean;
  /** Aggiunge il comportamento "sticky" ai componenti contenuti */
  sticky?: boolean;
}

/**
 * Renderizza un wrapper per i componenti facenti parte dell'header
 */
export const HeaderWrapper = forwardRef<HTMLHeadingElement, HeaderProps>(function HeaderWrapper(
  { shadow, sticky, children, className, ...props },
  ref
) {
  const classes = classNames(
    "it-header-wrapper",
    {
      "it-header-sticky": sticky
    },
    {
      "it-shadow": shadow
    },
    className
  );

  return (
    <header
      className={classes}
      ref={ref}
      {...props}
      data-bs-toggle="sticky"
      data-bs-position-type="fixed"
      data-bs-sticky-class-name="is-sticky"
      data-bs-target="#header-nav-wrapper"
    >
      <div className="it-nav-wrapper">{children}</div>
    </header>
  );
});
