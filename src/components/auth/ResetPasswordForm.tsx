'use client';

import { IconLockDots } from 'components/icons';
import { Button, Input } from 'components/ui';
// import { PagePath } from 'constants/enum';
import { useFormState } from 'react-dom';

type ResetPasswordForm = {
  action: actionFn;
  token: string;
};

const initialState: ActionResult = {
  errors: {
    newPassword: [],
    confirmPassword: [],
  },
  message: '',
};
const ResetPasswordForm = ({ action, token }: ResetPasswordForm) => {
  const [result, sendResetEmail] = useFormState<ActionResult, FormData>(action, initialState);

  return (
    <>
      {result?.message && <p>{result?.message}</p>}
      <form action={sendResetEmail} className="space-y-5">
        <Input
          icon={<IconLockDots />}
          label="New password"
          type="password"
          name="newPassword"
          error={result?.errors?.newPassword?.[0]}
          placeholder="********"
        />
        <Input
          icon={<IconLockDots />}
          label="Confirm password"
          type="password"
          name="confirmPassword"
          error={result?.errors?.confirmPassword?.[0]}
          placeholder="********"
        />
        <input type="hidden" name="token" value={token} />
        <Button type="submit">Reset Password</Button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
