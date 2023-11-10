import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Alert } from "./index";

const meta: Meta<typeof Alert> = {
  title: "Example/Alert",
  component: Alert,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertInfo: Story = {
  args: {
    children: "Alert Body",
    variant: "info",
    heading: <h4>Alert Heading</h4>
  }
};
