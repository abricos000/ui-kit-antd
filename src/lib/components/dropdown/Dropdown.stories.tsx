import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import Button from "../button/Button";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это пиздец, но работает",
      },
    },
  },
  args: {
    children: <Button>Dropdown</Button>,
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Defauit: Story = {
  args: {
    placement: "bottomLeft",
    menu: {
      items: [
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item
            </a>
          ),
        },
      ],
    },
  },
};
