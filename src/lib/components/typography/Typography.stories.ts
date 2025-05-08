import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography.Title> = {
  component: Typography.Title,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Typography",
      },
    },
  },
  args: {
    children: "Typography.Title",
  },
};

export default meta;

type Story = StoryObj<typeof Typography.Title>;

export const Title: Story = {
  args: {
    level: 2
  },
};
