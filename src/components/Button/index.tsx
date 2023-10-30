import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps): ReactNode {
  return (
    <button {...props} className={"my-button " + (props.className || "")} />
  )
}