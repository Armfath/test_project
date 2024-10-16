import EnvelopeIcon from 'assets/icons/envelope.png';
import { Alert } from 'components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Link sent successfully',
  description: 'Link to reset password sent to your email',
};

export default function Success({ searchParams }: { searchParams: { to: string } }) {
  return (
    <Alert
      src={EnvelopeIcon}
      title="Check your mailbox!"
      description={<Description to={searchParams.to} />}
    />
  );
}
const Description = ({ to }: { to: string }) => {
  return (
    <>
      If an account with the email <span className="font-bold">{to}</span> exists, you will receive
      an email with instructions to reset your password.
      <br />
      <div className="text-xs mt-4">
        Check your spam folder if you do not hear from us after a while.
      </div>
    </>
  );
};
