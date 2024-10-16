import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

import { forgotPassword } from './_actions';

export const metadata = {
  title: 'Reset password',
  description: 'Enter your email to receive instructions to reset your password',
};

export default function ForgotPassword() {
  return (
    <>
      <h1 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-2">
        Reset password
      </h1>
      <p className="text-center text-sm text-gray-500">
        Enter your email to receive instructions to reset your password
      </p>
      <ForgotPasswordForm action={forgotPassword} />
    </>
  );
}
