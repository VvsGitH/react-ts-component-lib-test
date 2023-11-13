import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown.Container> = {
  title: "Example/Dropdown",
  component: Dropdown.Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteDropdown = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button variant="primary">Ciao</Dropdown.Button>
      <Dropdown.Menu placement="bottom">
        <Dropdown.Item>Primo</Dropdown.Item>
        <Dropdown.Item>Secondo</Dropdown.Item>
        <Dropdown.Item>Terzo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Container>
  )
};
