import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Checkbox",
      },
    },
  },
  args: {
    children: "Checkbox",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const checked: Story = {
  args: {
    checked: true,
  },
};


export const prefixCls: Story = {
  args: {
    prefixCls: 'prefixCls',
  },
};
