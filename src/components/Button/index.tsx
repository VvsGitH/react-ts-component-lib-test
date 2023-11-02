import classNames from "classnames";
import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Varianti di colorazione a seconda dello scopo del Button. */
  variant: "primary" | "secondary" | "danger" | "success" | "warning";
  /** Da utilizzare per le varianti di dimensione del componente Button. */
  dimension?: "lg" | "sm" | "xs";
  /** Utilizzarlo per disabilitare il colore di sfondo, ed applicarlo invece al bordo.  */
  outline?: boolean;
  /** Flag che indica se si vuole aggiungere un'icona. */
  icon?: boolean;
}

/**
 * Componente per renderizzare un Button stilizzato attraverso bootstrap-italia
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, outline, disabled, dimension, icon, ...props },
  ref
) {
  const classes = classNames(
    className,
    "btn",
    {
      "btn-primary": variant === "primary" && !outline,
      "btn-outline-primary": variant === "primary" && outline,
      "btn-secondary": variant === "secondary" && !outline,
      "btn-outline-secondary": variant === "secondary" && outline,
      "btn-success": variant === "success" && !outline,
      "btn-outline-success": variant === "success" && outline,
      "btn-danger": variant === "danger" && !outline,
      "btn-outline-danger": variant === "danger" && outline,
      "btn-warning": variant === "warning" && !outline,
      "btn-outline-warning": variant === "warning" && outline
    },
    {
      disabled: disabled
    },
    {
      "btn-lg": dimension === "lg",
      "btn-sm": dimension === "sm",
      "btn-xs": dimension === "xs"
    },
    {
      "btn-icon": icon
    }
  );

  return <button ref={ref} {...props} className={classes} />;
});
