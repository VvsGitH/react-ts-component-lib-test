import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Tab } from ".";
import "../../css/index.css";

function Demo(props: { tabs: { title: string; disabled?: boolean; content: string }[] }) {
  return (
    <Tab.Group>
      <Tab.List>
        {props.tabs.map((tab) => (
          <Tab.Item key={tab.title} disabled={tab.disabled}>
            {tab.title}
          </Tab.Item>
        ))}
      </Tab.List>
      <Tab.Panels className="border">
        {props.tabs.map((tab) => (
          <Tab.Panel className="p-4" key={tab.title}>
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

const meta: Meta<typeof Demo> = {
  title: "UI/Tabs",
  component: Demo,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const TabsExample: Story = {
  args: {
    tabs: [
      { title: "Tab 1", content: "This is tab 1" },
      { title: "Tab 2", content: "This is tab 2" },
      { title: "Tab 3", content: "This is tab 3", disabled: true },
      { title: "Tab 4", content: "This is tab 4" }
    ]
  }
};
