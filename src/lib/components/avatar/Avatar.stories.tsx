import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Avatar",
      },
    },
  },
  args: {
    children: 'Avatar',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Defauit: Story = {
  args: {
    shape: 'circle',
  },
};


export const Size: Story = {
  args: {
    size: 'large',
  },
};
