import WarningIcon from 'assets/icons/warning.svg';
import ResetPasswordForm from 'components/auth/ResetPasswordForm';
import { Alert } from 'components/ui';
import { PagePath } from 'constants/enum';
import Link from 'next/link';

import { checkToken, resetPassword } from './_actions';

export const metadata = {
  title: 'Reset password',
  description: 'Enter your email to receive instructions to reset your password',
};

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams.token || '';
  const isTokenValid = await checkToken(token);

  if (!isTokenValid.success) {
    return (
      <Alert
        src={WarningIcon}
        title="Invalid or expired link"
        description={
          <>
            <p>Invalid or expired link. Please request a new one.</p>
            <Link href={PagePath.FORGOT_PASSWORD}>Forgot password?</Link>
          </>
        }
      />
    );
  }

  return (
    <>
      <div className="mb-7">
        <h1 className="mb-3 text-2xl font-bold">Reset password</h1>
        <p>Enter your new password and confirm password to reset your password</p>
      </div>
      <ResetPasswordForm action={resetPassword} token={token} />
    </>
  );
}
