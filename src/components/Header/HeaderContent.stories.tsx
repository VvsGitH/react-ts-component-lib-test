import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "../Button";
import { Icon } from "../Icon";
import { Header } from "./index";

const meta: Meta<typeof Header.Content> = {
  title: "Example/Header/Header.Content",
  component: Header.Content,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CompleteHeader: Story = {
  render: () => (
    <Header.Wrapper sticky>
      <Header.Content>
        <Icon icon="it-burger" color="primary" />
      </Header.Content>
      <Header.Navbar>
        <Button variant="primary">Link 1</Button>
        <Button variant="primary">Link 2</Button>
        <Button variant="primary">Link 3</Button>
        <Button variant="primary">Link 4</Button>
        <Button variant="primary">Link 5</Button>
        <Button variant="primary">Link 6</Button>
      </Header.Navbar>
    </Header.Wrapper>
  )
};
