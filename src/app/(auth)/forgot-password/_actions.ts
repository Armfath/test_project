'use server';

import { WEB_URL } from 'constants/configs';
import { PagePath, TokenAction } from 'constants/enum';
import { sendEmail } from 'libs/emailTransaction';
import prisma from 'libs/prisma';
import { redirect } from 'next/navigation';
import { generateToken } from 'utils/generateToken';
import { ForgotPasswordSchema } from 'validators/auth';

export async function forgotPassword(prevState: ActionResult, data: FormData) {
  const dataEmail = data.get('email');
  try {
    const validatedEmail = ForgotPasswordSchema.safeParse({ email: dataEmail });
    if (!validatedEmail.success) {
      return { success: false, errors: validatedEmail.error.flatten().fieldErrors };
    }
    const email = validatedEmail.data.email;
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      const token = generateToken();
      await prisma.token.create({
        data: {
          action: TokenAction.RESET_PASSWORD,
          token,
          userId: user.id,
          expiresAt: new Date(Date.now() + 3600 * 1000),
        },
      });
      const resetPasswordUrl = `${WEB_URL}/reset-password?token=${token}`;
      await sendEmail({
        to: email,
        subject: 'Password Reset',
        html: `<body style="font-family: Arial, sans-serif; background-color: #f4f4f7; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
    
    <div style="padding: 20px; text-align: center;">
      <p>Hello, <strong>${email}</strong></p>
      <p>You have requested to reset your password. Click the button below to proceed.</p>
      <a href="${resetPasswordUrl}" style="display: inline-block; padding: 12px 20px; font-size: 16px; color: white; background-color: #313b9b; text-decoration: none; border-radius: 5px; margin-top: 20px;">Reset Password</a>
      <p style="margin-top: 20px;">If you did not request this, please ignore this email.</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #888; margin-top: 20px;">
      <p>&copy; 2024 Invoice Platform</p>
      <p>Invoice Platform</p>
    </div>
  </div>
</body>`,
      });
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return { success: false, message: 'Something went wrong. Please try again.' };
    }
  }
  redirect(PagePath.FORGOT_PASSWORD_SUCCESS + `?to=${dataEmail}`);
}
