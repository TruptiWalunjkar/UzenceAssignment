import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) =>
      prev?.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const toggleRow = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (!data.length) return <div className="p-4 text-center">No data available</div>;

  return (
    <table className="min-w-full border border-gray-300 rounded-md">
      <thead>
        <tr>
          {selectable && <th className="px-3 py-2 border">Select</th>}
          {columns.map((col) => (
            <th
              key={String(col.key)}
              className="px-3 py-2 border cursor-pointer"
              onClick={() => col.sortable && handleSort(col.key)}
            >
              {col.label}
              {sortConfig?.key === col.key ? (sortConfig.direction === "asc" ? " 🔼" : " 🔽") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={String(row.id)} className="hover:bg-gray-50">
            {selectable && (
              <td className="px-3 py-2 border">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)} className="px-3 py-2 border">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
