import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import Button from "../button/Button";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Card",
      },
    },
  },
  args: {
    children: 'Card',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const title: Story = {
  args: {
    title: <Button>Button</Button>,
  },
};


export const cover: Story = {
  args: {
    cover: <Button>Button</Button>,
  },
};
