import React, { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { classNames } from "../../utils";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Varianti di colorazione a seconda dello scopo dell'Alert. */
  variant: "primary" | "info" | "danger" | "success" | "warning";
  /** Stringa da inserire come titolo all'Alert, opzionale. */
  heading?: ReactNode;
  /** Flag che indica la presenza di un Button all'interno per chiudere l'alert. */
  dismissible?: boolean;
  /** Flag che indica se inserire o meno le animazioni. */
  fade?: boolean;
}
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { children, className, heading, variant, fade, dismissible, ...props },
  ref
) {
  const classes = classNames(
    className,
    "alert",
    {
      "alert-primary": variant === "primary",
      "alert-info": variant === "info",
      "alert-success": variant === "success",
      "alert-danger": variant === "danger",
      "alert-warning": variant === "warning"
    },
    {
      "fade show": fade
    },
    {
      "alert-dismissible": dismissible
    }
  );

  return (
    <div ref={ref} {...props} role="alert" className={classes}>
      {heading && <div className="alert-heading">{heading}</div>}
      {children}
    </div>
  );
});
