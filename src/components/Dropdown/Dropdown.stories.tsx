import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Icon } from "..";
import "../../css/index.css";
import { Dropdown } from "./index";

const meta: Meta<typeof Dropdown.Container> = {
  title: "UI/Dropdown",
  component: Dropdown.Container,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ marginTop: 100, marginBottom: 200 }}>
        <Story />
      </div>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteBtnDropdown: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="bottom">
        <Dropdown.ItemBtn>Primo</Dropdown.ItemBtn>
        <Dropdown.ItemBtn>Secondo</Dropdown.ItemBtn>
        <Dropdown.ItemBtn className="right-icon">
          Terzo
          <Icon size="sm" icon="it-list" />
        </Dropdown.ItemBtn>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};

export const CompleteAnchorDropdown: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="bottom">
        <Dropdown.ItemAnch href="/primo">Primo Link</Dropdown.ItemAnch>
        <Dropdown.ItemAnch href="/secondo">Secondo Link</Dropdown.ItemAnch>
        <Dropdown.ItemAnch href="/terzo">
          <span>Terzo Link</span>
          <Icon size="sm" icon="it-list" />
        </Dropdown.ItemAnch>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};

export const DropdownWithHeadingAndDivider: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="bottom" heading="This is an heading" style={{ minWidth: "200px" }}>
        <Dropdown.ItemBtn>Primo</Dropdown.ItemBtn>
        <Dropdown.ItemBtn>Secondo</Dropdown.ItemBtn>
        <Dropdown.ItemBtn>Terzo</Dropdown.ItemBtn>
        <li>
          <span className="divider" />
        </li>
        <Dropdown.ItemBtn>Quarto</Dropdown.ItemBtn>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};

export const DropdownTop: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="top">
        <Dropdown.Item>{({ classes }) => <button className={classes}>Primo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Secondo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Terzo</button>}</Dropdown.Item>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};

export const DropdownRight: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="right">
        <Dropdown.Item>{({ classes }) => <button className={classes}>Primo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Secondo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Terzo</button>}</Dropdown.Item>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};

export const DropdownLeft: Story = {
  render: () => (
    <Dropdown.Container>
      <Dropdown.Button>Dropdown</Dropdown.Button>
      <Dropdown.Items placement="left">
        <Dropdown.Item>{({ classes }) => <button className={classes}>Primo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Secondo</button>}</Dropdown.Item>
        <Dropdown.Item>{({ classes }) => <button className={classes}>Terzo</button>}</Dropdown.Item>
      </Dropdown.Items>
    </Dropdown.Container>
  )
};
