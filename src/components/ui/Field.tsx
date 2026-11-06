import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-2xl bg-pearl px-4 py-3 text-sm text-navy placeholder:text-slate/55 " +
  "shadow-neu-inset-sm border border-white/70 transition-all duration-300 ease-smooth " +
  "focus:outline-none focus:ring-2 focus:ring-mist focus:border-mist";

interface WrapperProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

function Wrapper({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: WrapperProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[13px] font-semibold text-navy"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
      {error ? (
        <span
          role="alert"
          className="animate-fade-up text-xs font-medium text-[#b4534b]"
        >
          {error}
        </span>
      ) : hint ? (
        <span className="text-xs text-slate">{hint}</span>
      ) : null}
    </div>
  );
}

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
}

export function TextField({
  label,
  error,
  hint,
  containerClassName,
  id,
  required,
  ...rest
}: TextFieldProps) {
  const fieldId = id ?? rest.name ?? label.replace(/\s+/g, "-").toLowerCase();
  return (
    <Wrapper
      label={label}
      htmlFor={fieldId}
      error={error}
      hint={hint}
      required={required}
      className={containerClassName}
    >
      <input
        id={fieldId}
        aria-invalid={Boolean(error)}
        className={cn(controlBase, error && "ring-2 ring-[#e8b4b0]")}
        {...rest}
      />
    </Wrapper>
  );
}

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
}

export function TextArea({
  label,
  error,
  hint,
  containerClassName,
  id,
  required,
  ...rest
}: TextAreaProps) {
  const fieldId = id ?? rest.name ?? "textarea";
  return (
    <Wrapper
      label={label}
      htmlFor={fieldId}
      error={error}
      hint={hint}
      required={required}
      className={containerClassName}
    >
      <textarea
        id={fieldId}
        aria-invalid={Boolean(error)}
        className={cn(controlBase, "resize-y", error && "ring-2 ring-[#e8b4b0]")}
        {...rest}
      />
    </Wrapper>
  );
}

interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "className"> {
  label: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  containerClassName?: string;
}

export function SelectField({
  label,
  error,
  hint,
  options,
  placeholder = "Select an option",
  containerClassName,
  id,
  required,
  ...rest
}: SelectFieldProps) {
  const fieldId = id ?? rest.name ?? "select";
  return (
    <Wrapper
      label={label}
      htmlFor={fieldId}
      error={error}
      hint={hint}
      required={required}
      className={containerClassName}
    >
      <select
        id={fieldId}
        aria-invalid={Boolean(error)}
        className={cn(
          controlBase,
          "appearance-none bg-[length:16px] bg-[right_16px_center] bg-no-repeat pr-10",
          error && "ring-2 ring-[#e8b4b0]",
        )}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
        }}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
