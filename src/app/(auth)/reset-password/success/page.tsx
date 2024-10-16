import SuccessIcon from 'assets/icons/success.png';
import { Alert } from 'components/ui';
import { PagePath } from 'constants/enum';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Password reset successfully',
  description:
    'Your password has been successfully changed. Please use your new password to login!',
};

const ResetPasswordSuccessPage = () => {
  return (
    <Alert src={SuccessIcon} title="Password reset successfully" description={<Description />} />
  );
};

const Description = () => {
  return (
    <>
      <p className="text-center text-gray-600 mb-8">
        Your password has been successfully changed. Please use your new password to login!
      </p>

      <Link className="btn" href={PagePath.LOGIN}>
        Login
      </Link>
    </>
  );
};

export default ResetPasswordSuccessPage;
