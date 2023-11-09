import { forwardRef, HTMLAttributes } from "react";
import React from "react";

import { classNames } from "../../utils";

export interface HeaderContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Riduce la grandezza del componente HeaderContent */
  small?: boolean;
}

/**
 * Componente che renderizza il contenuto principale dell'header.
 */
export const HeaderContent = forwardRef<HTMLDivElement, HeaderContentProps>(function HeaderContent(
  { small, children, className, ...props },
  ref
) {
  const classes = classNames("it-header-center-wrapper", { "it-small-header": small }, className);

  return (
    <div className={classes} ref={ref} {...props}>
      <div className="container">
        <div className="it-header-center-content-wrapper">{children}</div>
      </div>
    </div>
  );
});
