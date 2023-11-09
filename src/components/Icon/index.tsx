import React, { type SVGProps } from "react";

import type { ColorVariants, SizeVariants } from "../../types";
import { classNames } from "../../utils";
import { type TBoostrapIcon, type TDxcIcon } from "./IconList";
import { getIconPath } from "./utils";

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: TBoostrapIcon | TDxcIcon; // the id of the icon, either from bootstrap-italia or dxc; custom icons are not supported by this component
  color?: ColorVariants; // the color of the icon
  bg?: ColorVariants; // the color of the backgroud of the icon
  size?: SizeVariants; // the size of icon
  padded?: boolean; // if true, more padding is added inside the icon box, resulting in a smaller icon occupying the same space
  className?: string; // additional classes to add to the icon container
}

/**
 * UI component to display an svg icon
 * @param IconProps
 * @returns JSX
 */
export function Icon({ icon, color, bg, size, padded, className, ...svgProps }: IconProps) {
  const iconPath = getIconPath(icon);

  return (
    <svg
      {...svgProps}
      aria-hidden="true"
      className={classNames(
        className,
        "icon",
        color && `icon-${color}`,
        bg && `bg-${bg}`,
        size && `icon-${size}`,
        padded && "icon-padded"
      )}
    >
      <use href={iconPath} xlinkHref={iconPath}></use>
    </svg>
  );
}
