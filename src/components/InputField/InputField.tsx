import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  passwordToggle?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
  outlined: "border border-gray-400 focus:ring-2 focus:ring-blue-500",
  ghost: "border-transparent focus:ring-2 focus:ring-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  clearable,
  passwordToggle,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = passwordToggle
    ? showPassword
      ? "text"
      : "password"
    : "text";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full rounded-md
            ${sizeClasses[size]} 
            ${variantClasses[variant]}
            ${invalid ? "border-red-500 focus:ring-red-500" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
        {passwordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
        {clearable && value && (
          <button
            type="button"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
          >
            ✕
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
