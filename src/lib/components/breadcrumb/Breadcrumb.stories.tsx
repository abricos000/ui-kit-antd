import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это пиздец, но работает",
      },
    },
  },
  args: {
    children: "Breadcrumb",
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Title: Story = {
  args: {
    items: [
      {
        title: "Home",
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: "An Application",
      },
    ],
  },
};
