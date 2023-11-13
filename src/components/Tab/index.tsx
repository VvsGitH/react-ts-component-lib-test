import { Tab as UiTab } from "@headlessui/react";

import { TabItem as Item } from "./TabItem";
import { TabList as List } from "./TabList";
import { TabPanel as Panel } from "./TabPanel";

export const Tab: {
  Group: typeof UiTab.Group;
  Panel: typeof Panel;
  Panels: typeof UiTab.Panels;
  List: typeof List;
  Item: typeof Item;
} = {
  Group: UiTab.Group,
  Panel: Panel,
  Panels: UiTab.Panels,
  List,
  Item
};
