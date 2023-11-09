import bsiSprite from "bootstrap-italia/dist/svg/sprites.svg";
import React from "react";

import dxcSprite from  "../../imgs/icon/sprite.svg";
import { BoostrapIconList, DxcIconList, type TBoostrapIcon, type TDxcIcon } from "./IconList";

export interface IconProps {
  icon: TBoostrapIcon | TDxcIcon;
}

export function Icon(props: IconProps) {
  const iconPath = getIconPath(props.icon);

  return (
    <svg className="icon icon-sm">
      <use href={iconPath} xlinkHref={iconPath}></use>
    </svg>
  );
}

function getIconPath(iconName: string): string {
  if ((BoostrapIconList as unknown as string[]).includes(iconName)) {
    return `${bsiSprite}#${iconName}`;
  }

  if ((DxcIconList as unknown as string[]).includes(iconName)) {
    return `${dxcSprite}#${iconName}`;
  }

  return "";
}
