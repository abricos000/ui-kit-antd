import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Input",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const status: Story = {
  args: {
    status: 'error',
    placeholder: "Error"
  },
};


export const prefix: Story = {
  args: {
    prefix: 'V',
  },
};
