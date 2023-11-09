import bsiSprite from "bootstrap-italia/dist/svg/sprites.svg";

import dxcSprite from "../../imgs/icon/sprite.svg";
import { BoostrapIconList, DxcIconList } from "./IconList";

/**
 * Utility to find the correct url given the icon's id
 * @param iconId
 * @returns icon path
 */
export function getIconPath(iconId: string): string {
  if ((DxcIconList as unknown as string[]).includes(iconId)) {
    return `${dxcSprite}#${iconId}`;
  }
  if ((BoostrapIconList as unknown as string[]).includes(iconId)) {
    return `${bsiSprite}#${iconId}`;
  }
  return "";
}
