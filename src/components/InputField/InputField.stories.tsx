import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: { label: "Name", placeholder: "Enter your name" },
};

export const Error: Story = {
  args: { label: "Email", placeholder: "Enter email", invalid: true, errorMessage: "Invalid email" },
};

export const Password: Story = {
  args: { label: "Password", placeholder: "Enter password", passwordToggle: true },
};
