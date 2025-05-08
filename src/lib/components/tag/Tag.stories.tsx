import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tag",
      },
    },
  },
  args: {
    children: 'Tag',
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const color: Story = {
  args: {
    color: 'red',
  },
};


export const visible: Story = {
  args: {
    visible: true,
  },
};

export const icon: Story = {
  args: {
    icon: '>',
  },
};
