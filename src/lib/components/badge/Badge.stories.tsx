import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это пиздец, но работает",
      },
    },
  },
  args: {
    children: "Badge",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;
type Storysss = StoryObj<typeof Badge.Ribbon>;

export const Colors: Story = {
  args: {
    color: "pink",
    count: 25,
    offset: [20, 0],
  },
};
