import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Это компонент кнопки, ниже представленны все ёё вариации. Тут скорее всего можно много чего полузного написать",
      },
    },
  },
  args: {
    children: "button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Link: Story = {
  args: {
    type: "link",
  },
};

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Size: Story = {
  args: {
    size: "large",
  },
};
