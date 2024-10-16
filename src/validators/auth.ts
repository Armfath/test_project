import { z } from 'zod';

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),
});

const PasswordSchema = z.string().min(3, 'Password must be at least 3 characters');

export const ResetPasswordSchema = z
  .object({
    newPassword: PasswordSchema,
    confirmPassword: PasswordSchema,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const TokenSchema = z.object({
  token: z.string().length(64, 'Invalid token'),
});

export type TForgotPassword = z.infer<typeof ForgotPasswordSchema>;
export type TResetPassword = z.infer<typeof ResetPasswordSchema>;
