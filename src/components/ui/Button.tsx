'use client';

import { useFormStatus } from 'react-dom';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, type, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button className="btn" type={type} disabled={pending} {...props}>
      {pending ? 'Loading...' : children}
    </button>
  );
};
export { Button };
