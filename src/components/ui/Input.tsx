'use client';

import { useFormStatus } from 'react-dom';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
};
const Input = ({
  label,
  name,
  error,
  icon,
  type,
  placeholder,
  className,
  ...props
}: InputProps) => {
  const { pending } = useFormStatus();

  return (
    <div className={error ? 'has-error' : ''}>
      <label htmlFor={name}>{label}</label>
      <div className="relative text-white-dark">
        <input
          disabled={pending}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          className={`form-input ${className} ${icon ? '!ps-10' : ''}`}
          {...props}
        />
        {icon && <span className="absolute start-4 top-1/2 -translate-y-1/2">{icon}</span>}
      </div>
      {error && <div className="mt-1 text-red-500">{error}</div>}
    </div>
  );
};

export { Input };
