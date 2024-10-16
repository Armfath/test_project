import { EMAIL_PASS, EMAIL_SERVICE, EMAIL_USER } from 'constants/configs';
import nodemailer from 'nodemailer';

export async function sendEmail(args: { to: string; subject: string; html: string }) {
  const { to, subject, html } = args;

  const transport = nodemailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transport.sendMail({
    to,
    subject,
    html,
  });
}
