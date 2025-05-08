import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Steps from "./Steps";

const meta: Meta<typeof Steps> = {
  component: Steps,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Steps",
      },
    },
  },
  args: {
    children: 'Steps',
  },
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const Defauit: Story = {
  args: {
    items: [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ],
    current: 1
  },
};


export const direction: Story = {
  args: {
    items: [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ],
    current: 1,
    direction: "vertical"
  },
};


export const progressDot: Story = {
  args: {
    items: [
      {
        title: 'Finished',
        description: 'This is a description.',
      },
      {
        title: 'In Progress',
        description: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description: 'This is a description.',
      },
    ],
    current: 1,
    direction: "vertical",
    progressDot: true
  },
};
