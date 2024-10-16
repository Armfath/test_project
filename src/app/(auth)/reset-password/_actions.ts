'use server';

import { PagePath } from 'constants/enum';
import prisma from 'libs/prisma';
import { redirect } from 'next/navigation';
import { hashPassword } from 'utils/hashPassword';
import { ResetPasswordSchema, TokenSchema } from 'validators/auth';

export async function checkToken(token?: FormDataEntryValue) {
  try {
    const result = TokenSchema.safeParse({ token });
    if (!result.success) {
      return { success: false, message: 'Invalid token.' };
    }

    const validToken = result.data.token;
    const resetToken = await prisma.token.findUnique({ where: { token: validToken } });
    if (!resetToken || new Date() > new Date(resetToken.expiresAt)) {
      return { success: false, message: 'Invalid or expired link. Please request a new one.' };
    }
    return { success: true, message: 'Token is valid.', data: resetToken };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}

export async function resetPassword(prevState: ActionResult, data: FormData) {
  const token = data.get('token') ?? undefined;
  try {
    // Validate the new password and confirm password
    const resetPasswordData = ResetPasswordSchema.safeParse({
      newPassword: data.get('newPassword'),
      confirmPassword: data.get('confirmPassword'),
    });
    if (!resetPasswordData.success) {
      return { success: false, errors: resetPasswordData.error.flatten().fieldErrors };
    }

    const newPassword = resetPasswordData.data.newPassword;

    // use the function checkToken to check if the token is valid
    const tokenResult = await checkToken(token);
    if (!tokenResult.success) {
      return { success: false, message: tokenResult.message };
    }

    // Hash the new password
    const hashedPassword = hashPassword(newPassword);

    // Update the user's password in the database
    await prisma.user.update({
      where: { id: tokenResult.data?.userId },
      data: { password: hashedPassword },
    });

    // Delete the token after it's used
    await prisma.token.delete({ where: { token: tokenResult.data?.token } });
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
  // Redirect to the success page
  redirect(PagePath.RESET_PASSWORD_SUCCESS);
}
