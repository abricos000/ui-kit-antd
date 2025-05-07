import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

const meta: Meta<typeof Layout.Header> = {
  component: Layout.Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это пиздец, но работает Layout",
      },
    },
  },
  args: {
    children: "Layout.Header",
  },
};

export default meta;

type Story = StoryObj<typeof Layout.Header>;

export const Title: Story = {
  args: {
    prefixCls:  'jjd'
  },
};
