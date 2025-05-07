import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это пиздец, но работает",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    showQuickJumper: true,
    defaultCurrent: 2,
    total: 500,
    current: 3,
  },
};

export const Disabled: Story = {
  args: {
    showQuickJumper: true,
    defaultCurrent: 2,
    total: 500,
    disabled: true,
  },
};
