import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import type { SelectProps } from "antd";
import Tag from "../tag/Tag";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Defauit: Story = {
  args: {
    defaultValue: "lucy",
    style: { width: 120 },
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ]
  },
};


export const mode: Story = {
  args: {
    defaultValue: "lucy",
    style: { width: 120 },
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true },
    ],
    mode: "multiple"
  },
};









const options: any = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];

const tagRenderComponent: any = (props: any) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};


export const tagRender: Story = {
  args: {
    defaultValue: "lucy",
    style: { width: 120 },
    options: options,
    mode: "multiple",
    tagRender: tagRenderComponent
  },
};
