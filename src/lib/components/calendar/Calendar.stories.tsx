import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Calendar",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const mode: Story = {
  args: {
    mode: 'year',
  },
};


export const fullscreen: Story = {
  args: {
    fullscreen: true,
  },
};
