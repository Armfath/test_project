type TForgotPassword = import('validations/auth').TForgotPassword;
type THttpMethod = import('validations/auth').THttpMethod;

type ActionResult = {
  success?: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

type actionFn = (state: ActionResult, payload: FormData) => ActionResult | Promise<ActionResult>;
