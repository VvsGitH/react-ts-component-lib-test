import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { forwardRef } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Varianti di colorazione a seconda dello scopo dell'Alert. */
  variant: "primary" | "info" | "danger" | "success" | "warning";
  /** Stringa da inserire come titolo all'Alert, opzionale. */
  title?: string;
  /** Flag che indica la presenza di un Button all'interno per chiudere l'alert. */
  dismissible?: boolean;
  /** Flag che indica se inserire o meno le animazioni. */
  fade?: boolean;
}
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { children, className, variant, title, fade, dismissible, ...props },
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
      {title && <h4 className="alert-heading">{title}</h4>}
      {children}
    </div>
  );
});
