import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from ".";
import "../../css/index.css";
import { Icon } from "../Icon";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryMedium: Story = {
  args: {
    children: "Button",
    variant: "primary"
  }
};

export const SecondarySmall: Story = {
  args: {
    children: "Button",
    variant: "secondary",
    size: "sm"
  }
};

export const DangerBigOutlined: Story = {
  args: {
    children: "Button",
    variant: "danger",
    size: "lg",
    outline: true
  }
};

export const WithIcon: Story = {
  args: {
    variant: "info",
    icon: true,
    outline: true,
    children: <Icon icon="it-download" />
  }
};
