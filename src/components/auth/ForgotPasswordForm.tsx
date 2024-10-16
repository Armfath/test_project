'use client';

import { IconMail } from 'components/icons';
import { Button, Input } from 'components/ui';
import { useFormState } from 'react-dom';

type ForgotPasswordForm = {
  action: actionFn;
};

const initialState: ActionResult = {
  errors: {
    email: [],
  },
  message: '',
};

const ForgotPasswordForm = ({ action }: ForgotPasswordForm) => {
  const [result, sendResetEmail] = useFormState<ActionResult, FormData>(action, initialState);
  return (
    <>
      {result?.message && <p>{result?.message}</p>}
      <form action={sendResetEmail} className="space-y-5 mt-10">
        <Input
          icon={<IconMail />}
          label="Email"
          type="email"
          name="email"
          error={result?.errors?.email?.[0]}
          placeholder="example@gmail.com"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
