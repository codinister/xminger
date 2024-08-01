'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { emailSchema } from './zodSchema';

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
const sendMail = async (val: z.infer<typeof emailSchema>) => {
  const info = emailSchema.safeParse(val);

  if (!info.success) return { error: info };

  const { email, subject, message } = info.data;

  const emailMessage = [`From: ${email}`, message].join('\n\n');

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'codinister@gmail.com',
    subject,
    html: `<p>${emailMessage}</p>`,
  });

  return { success: true };
};

export default sendMail;
