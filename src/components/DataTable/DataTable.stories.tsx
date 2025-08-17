import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable<any>> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<any>>;

const sampleData = [
  { id: 1, name: "Trupti", age: 24 },
  { id: 2, name: "Abc", age: 30 },
  { id: 3, name: "Xyz", age: 28 },
];

const sampleColumns = [
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
];

export const Default: Story = {
  args: { data: sampleData, columns: sampleColumns },
};

export const Selectable: Story = {
  args: { data: sampleData, columns: sampleColumns, selectable: true },
};

export const Loading: Story = {
  args: { data: [], columns: sampleColumns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns: sampleColumns },
};
