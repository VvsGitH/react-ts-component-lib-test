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
      <Dropdown.Button variant="primary">Dropdown</Dropdown.Button>
      <Dropdown.Menu placement="bottom">
        <Dropdown.Item>Primo</Dropdown.Item>
        <Dropdown.Item>Secondo</Dropdown.Item>
        <Dropdown.Item>Terzo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Container>
  )
};

export const DropdownTop = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button variant="primary">Dropdown</Dropdown.Button>
      <Dropdown.Menu placement="top">
        <Dropdown.Item>Primo</Dropdown.Item>
        <Dropdown.Item>Secondo</Dropdown.Item>
        <Dropdown.Item>Terzo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Container>
  )
};

export const DropdownRight = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button variant="primary">Dropdown</Dropdown.Button>
      <Dropdown.Menu placement="right">
        <Dropdown.Item>Primo</Dropdown.Item>
        <Dropdown.Item>Secondo</Dropdown.Item>
        <Dropdown.Item>Terzo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Container>
  )
};

export const DropdownLeft = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button variant="primary">Dropdown</Dropdown.Button>
      <Dropdown.Menu placement="left">
        <Dropdown.Item>Primo</Dropdown.Item>
        <Dropdown.Item>Secondo</Dropdown.Item>
        <Dropdown.Item>Terzo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Container>
  )
};
