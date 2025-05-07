import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./Menu";
import type { MenuProps } from "antd";

const meta: Meta<typeof Menu> = {
  component: Menu,
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

type Story = StoryObj<typeof Menu>;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "1", icon: <>jjjjj</>, label: "Option 1" },
  { key: "2", icon: <>jjjjj</>, label: "Option 2" },
  { key: "3", icon: <>jjjj</>, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <>jjjjj</>,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <>jjjjj</>,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

export const Defauit: Story = {
  args: {
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    mode: "inline",
    theme: "dark",
    inlineCollapsed: false,
    items,
  },
};
